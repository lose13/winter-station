import * as THREE from 'three';
import assert from 'node:assert/strict';
import {makeTrain,onTrack} from '../src/train.js';
import {makePeople} from '../src/life.js';
import {makeChristmasVisitors} from '../src/christmas-visitors.js';
import {makeStation} from '../src/world-model.js';
import {makeStationStory} from '../src/station-story.js';
import {makeSnow,SPHERE} from '../src/atmosphere.js';
import {makePhotographicLights} from '../src/lighting.js';
import {storyAt} from '../src/story-clock.js';
import {makeParticleEffects} from '../src/particle-effects.js';

export function verifyStory(){
  const M=new Proxy({}, {get:(o,k)=>o[k]??(o[k]=new THREE.MeshStandardMaterial({side:THREE.DoubleSide}))});M.windowGlass.transparent=true;
  const previousDocument=globalThis.document;globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})})};
  const root=new THREE.Group();let train,station;try{train=makeTrain(root,M);station=makeStation(root,M);}finally{if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;}
  const people=makePeople(root,M),visitors=makeChristmasVisitors(root,M,train),counts={bell:0,bird:0,chuff:0,whistle:0},sounds={effect:k=>counts[k]++,storyWhistle:()=>counts.whistle++},steam={boost(){}};
  const story=makeStationStory(root,M,{train,people,visitors,props:{windows:station.userData.windows},sounds,steam,pressureSteam:steam});
  const particles=makeParticleEffects(root,{visitors,delivery:story.delivery});let particleChecks=0,particleRadius=0,maximumTrail=0,maximumLanding=0,firstDust=null;
  const lights=makePhotographicLights(root,[],train),snow=makeSnow(root,2600),camera=new THREE.PerspectiveCamera(),headLight=root.children.find(o=>o.isSpotLight),vertex=new THREE.Vector3();
  let maxGiftRadius=0,giftVertexChecks=0,maxTrainDelta=0,prev=0,received=0,parked=0,outside=0,roofIntrusions=0;
  for(let frame=0;frame<=1440;frame++){
    const t=frame/10,state=story.update(.1,t,1);particles.update(.1,t,1,{clock:story.time,dropAge:state.dropAge});snow.setTrainOffset(state.trainOffset);snow.update(.1,t,state.gust);lights.update(t,1,camera,null);
    const pd=particles.diagnostics();maximumTrail=Math.max(maximumTrail,pd.trail);maximumLanding=Math.max(maximumLanding,pd.landing);assert.equal(pd.invalid+pd.outside,0,'Decorative particles escape or become invalid');
    for(const effect of [particles.dust,particles.embers,particles.magic]){const pos=effect.points.geometry.attributes.position.array,alpha=effect.points.geometry.attributes.aAlpha.array;for(let i=0;i<alpha.length;i++){if(alpha[i]<.001)continue;vertex.fromArray(pos,i*3);const radius=vertex.distanceTo(SPHERE.center);particleRadius=Math.max(particleRadius,radius);assert.ok(Number.isFinite(radius)&&radius<SPHERE.radius-.09,'A visible particle touches the glass');particleChecks++;if(effect===particles.dust)assert.ok(vertex.x>-2.4&&vertex.x<.75&&vertex.y>2.46&&vertex.y<3.41&&vertex.z>-1.6&&vertex.z<-.2,'Indoor motes leave the room');if(effect===particles.embers)assert.ok(vertex.x>-.19&&vertex.x<-.01&&vertex.y>2.52&&vertex.y<2.72&&vertex.z>-1.251&&vertex.z<-1.243,'Stove embers escape the glazed fire door');}}
    if(frame===10)firstDust=particles.dust.arrays.position.slice();if(frame===20)assert.notDeepEqual(particles.dust.arrays.position,firstDust,'Motes do not animate on the actual GPU attribute');
    if(pd.landing>0&&state.dropAge>8.02&&state.dropAge<8.21){const p=particles.magic.arrays.position,a=particles.magic.arrays.alpha;let exposed=0;for(let i=0;i<a.length;i++){if(a[i]<.001||p[i*3+1]>story.delivery.g.position.y+.15)continue;assert.ok(Math.hypot(p[i*3]-story.delivery.g.position.x,p[i*3+2]-story.delivery.g.position.z)>.17,'Landing stars start inside the opaque gift box');exposed++;}assert.ok(exposed>40,'Landing sparkle has no exposed points outside the box');}
    assert.ok(state.trainOffset>=0&&state.trainOffset<=.105+1e-8);maxTrainDelta=Math.max(maxTrainDelta,Math.abs(state.trainOffset-prev));prev=state.trainOffset;
    assert.ok(visitors.santa.g.position.distanceTo(train.santaSeat)<1e-8,'Santa became detached from the moving carriage');
    assert.ok(Math.abs(headLight.position.distanceTo(train.headPos)-.03)<1e-8,'Projected headlamp became detached from the engine');
    if(story.delivery.stage==='received')received++;if(story.delivery.stage==='parked')parked++;
    if(story.delivery.g.visible&&frame%2===0){story.delivery.g.updateWorldMatrix(true,true);story.delivery.g.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++){vertex.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);maxGiftRadius=Math.max(maxGiftRadius,vertex.distanceTo(SPHERE.center));giftVertexChecks++;}});
      if(story.delivery.stage==='falling'){const p=story.delivery.g.position;if(Math.abs(p.x+.82)<1.98&&Math.abs(p.z+.88)<1.39&&p.y<5.04-Math.abs(p.x+.82)*.62)roofIntrusions++;}
    }
    const child=people.people[3].g.position;assert.ok(Math.hypot(child.x,child.z+.16)>3.85,'Child crosses the railway while receiving the parcel');
    if(frame%10===0)outside+=snow.diagnostics().outside;
  }
  assert.ok(maxTrainDelta<.003,'Train movement jumps');assert.ok(received>0&&parked>0,'The delivery story never completes');assert.equal(roofIntrusions,0,'Parcel passes through the station roof');assert.ok(maxGiftRadius<SPHERE.radius-.08,'Parachute or parcel escapes the sphere');assert.equal(outside,0,'Wind or moving train sends snow outside the glass');
  const time=story.time;story.toggle();story.update(2,146,1);assert.equal(story.time,time,'Pause does not freeze the story clock');story.toggle();
  assert.equal(particles.diagnostics().landingBursts,2,'Landing sparkle must happen once per delivery');assert.ok(maximumTrail>60&&maximumLanding>40,'Sleigh trail or landing burst never becomes visible');
  const bursts=particles.diagnostics().landingBursts;story.seek(41);story.update(0,146,1);particles.update(.1,146,1,{clock:story.time});assert.equal(particles.diagnostics().landingBursts,bursts,'Seeking into a landing creates a false burst');assert.ok(particles.diagnostics().seekResets>0,'Seeking does not clear the old trail');
  for(let i=0;i<8;i++){story.update(1,147+i,i/7);particles.update(1,147+i,i/7,{clock:story.time});assert.equal(particles.diagnostics().invalid+particles.diagnostics().outside,0,'Long frame or day/night switch breaks particles');}
  story.room.greet(1,146);story.room.update(151,1);assert.equal(story.room.diagnostics().activity,'waving through window');
  story.interact('santa',undefined,new THREE.Vector3(0,4,20));story.update(.01,151.1,1);assert.equal(story.diagnostics().lastInteraction,'santa');
  for(const t of [0,72,144])assert.equal(storyAt(t).trainOffset,0,'Loop seam leaves the train away from its starting pose');
  return {cycles:2,simulationSeconds:144,trainTravel:3.22*.105,maximumTrainStepRadians:maxTrainDelta,santaFollowsCoach:true,headlampFollowsEngine:true,giftVertexChecks,maximumGiftRadius:maxGiftRadius,glassRadius:SPHERE.radius,roofIntrusions,receivedFrames:received,parkedFrames:parked,snowEscapes:outside,pausePassed:true,windowGreetingPassed:true,interactionPassed:true,eventCounts:counts,particles:{checkedVisiblePositions:particleChecks,maximumRadius:particleRadius,maximumTrail,maximumLanding,landingBursts:bursts,insideRoomAndStove:true,seekClearsTrail:true,longFramesPassed:true,textureSamplers:0}};
}

import * as THREE from 'three';
import {V,TAU,mesh,box,torus,beam,group,batch} from './craft.js';
import {terrainHeight} from './world-model.js';
import {storyAt,weatherAt,ease,STORY_LENGTH} from './story-clock.js';
import {makeRoomLife,makeSmallAnimals,makeWindPowder} from './story-details.js';

const LAND=V(3.62,terrainHeight(3.62,1.95)+.035,1.95),PARK=V(2.72,terrainHeight(2.72,3.0)+.035,3.0);
export function sampleDelivery(age,start,out=V()){
  if(age<=2.8){const f=ease(age/2.8),a=1-f;out.copy(start).multiplyScalar(a*a*a).addScaledVector(start.clone().add(V(.35,.12,.06)),3*a*a*f).addScaledVector(V(2.85,6.4,2.1),3*a*f*f).addScaledVector(V(3.25,5.90,2.17),f*f*f);}
  else out.copy(V(3.25,5.9,2.17)).lerp(LAND,ease((age-2.8)/5.2));return out;
}

function wrappedParcel(p,M){const red=new THREE.MeshStandardMaterial({color:0xb03935,roughness:.43,metalness:.12}),g=group(p);box(g,.22,.19,.22,red,0,.105,0,.017);box(g,.035,.194,.225,M.gold,0,.105,0,.004);box(g,.225,.194,.033,M.gold,0,.105,0,.004);box(g,.235,.025,.235,red,0,.205,0,.006);for(let s of [-1,1]){const b=torus(g,.039,.006,M.gold,s*.025,.23,0);b.rotation.x=Math.PI/2;b.scale.y=.65;}batch(g);return g;}
function makeDelivery(root,M){
  const g=group(root);g.name='Christmas air mail · a real parachute and a ribbon-wrapped parcel';const parcel=wrappedParcel(g,M),chute=group(g);chute.name='Eight cloth panels and four suspension lines';
  const cream=new THREE.MeshStandardMaterial({color:0xeaddbc,roughness:.92,side:THREE.DoubleSide}),red=new THREE.MeshStandardMaterial({color:0xa83d39,roughness:.88,side:THREE.DoubleSide});
  for(let i=0;i<8;i++){const panel=mesh(chute,new THREE.SphereGeometry(.41,8,10,i/8*TAU,TAU/8,0,Math.PI/2),i%2?cream:red,0,.74,0);panel.scale.y=.55;const a=i/8*TAU,b=(i+1)/8*TAU;beam(chute,[Math.cos(a)*.41,.74,Math.sin(a)*.41],[Math.cos(b)*.41,.74,Math.sin(b)*.41],.004,M.gold);}
  for(let i=0;i<4;i++){const a=i/4*TAU+Math.PI/4;beam(chute,[Math.cos(a)*.085,.20,Math.sin(a)*.085],[Math.cos(a)*.39,.74,Math.sin(a)*.39],.0035,M.cream);}
  batch(chute);const parked=group(root);parked.name='Delivered Christmas parcels beside the snowy forecourt';const parcels=[];
  const parkPositions=[PARK.clone(),PARK.clone().add(V(-.25,0,.03)),PARK.clone().add(V(-.25,0,.20))];for(let i=0;i<3;i++){const gift=wrappedParcel(parked,M);gift.position.copy(parkPositions[i]);parcels.push(gift);}
  let start=V(),activeCycle=-1,lastStage='waiting';
  function update(state,child,visitors){const age=state.dropAge,cycle=state.cycle;
    if(age>=0&&cycle!==activeCycle){root.updateWorldMatrix(true,false);visitors.deer.sleigh.getWorldPosition(start);root.worldToLocal(start);start.y+=.19;activeCycle=cycle;}
    g.visible=age>=0&&age<32;let scale=1;
    if(g.visible){
      if(age<8){sampleDelivery(age,start,g.position);chute.scale.setScalar(ease(age/.9));g.rotation.set(Math.sin(age*2.2)*.035,Math.sin(age)*.14,Math.sin(age*2)*.06);lastStage='falling';}
      else {g.position.copy(LAND);g.rotation.set(0,0,0);chute.scale.setScalar(1-ease((age-8)/1));lastStage='landed';
        if(age>=12){const hand=child.g.localToWorld(V(-.10,.35,.22));root.worldToLocal(hand);if(age<14)g.position.lerp(hand,ease((age-12)/2));else g.position.copy(hand);lastStage='received';}
        if(age>=28){g.position.lerp(parkPositions[Math.min(2,cycle)],ease((age-28)/4));lastStage='putting down';}
      }
      parcel.scale.setScalar(scale);
    }else lastStage=state.delivered?'parked':'waiting';
    const count=Math.min(3,Math.max(0,Math.floor((state.cycle*STORY_LENGTH+state.time-64)/STORY_LENGTH)+1));parcels.forEach((p,i)=>p.visible=i<count&&!(age>=28&&age<32&&i===Math.min(2,cycle)));
  }
  return {update,g,chute,parked,get stage(){return lastStage;},diagnostics:()=>({stage:lastStage,position:g.position.toArray(),visible:g.visible,parked:parcels.filter(p=>p.visible).length})};
}

function outerWalk(from,to,f,out){const ra=Math.hypot(from.x,from.z+.16),rb=Math.hypot(to.x,to.z+.16),a=Math.atan2(from.x,from.z+.16),b=Math.atan2(to.x,to.z+.16),angle=a+(b-a)*f,r=ra+(rb-ra)*f;out.set(Math.sin(angle)*r,0,Math.cos(angle)*r-.16);out.y=terrainHeight(out.x,out.z);return out;}

export function makeStationStory(root,M,{train,people,visitors,props,sounds,steam,pressureSteam}){
  const room=makeRoomLife(root,M,props.windows),animals=makeSmallAnimals(root,M,sounds),powder=makeWindPowder(root),delivery=makeDelivery(root,M);
  let clock=0,running=true,lastClock=0,lastOffset=0,lastChuff=-1,clickCount=0,lastInteraction='none',current=storyAt(0),elapsedNow=0;
  const child=people.people[3],parent=people.people[2],conductor=people.people[0],childStart=V(3.10,0,2.38),receivePoint=V(3.45,0,2.18),putPoint=V(2.86,0,2.80),tmp=V();
  function update(dt,elapsed,night){elapsedNow=elapsed;lastClock=clock;if(running)clock+=dt;current=storyAt(clock);const weather=weatherAt(elapsed);current.gust=weather.gust;
    train.update(current.trainOffset);people.update(elapsed,weather.gust);
    conductor.arms[1].rotation.z=.14+current.flag*(2.18+Math.sin(elapsed*3)*.16);
    parent.g.position.set(3.55+current.trainOffset/.105*.14,parent.baseY,1.45+current.trainOffset/.105*.055);
    child.g.position.set(childStart.x,child.baseY,childStart.z);child.g.rotation.set(0,.25,0);
    if(current.sendOff){child.g.rotation.y=-1.15;child.arms[1].rotation.z=2.22+Math.sin(elapsed*5)*.28;parent.arms[0].rotation.z=-1.3;}
    else parent.arms[0].rotation.z=0;
    const age=current.dropAge;
    if(age>=5&&age<40){let move=0;
      if(age<11){const f=ease((age-5)/6);outerWalk(childStart,receivePoint,f,child.g.position);move=Math.sin(Math.PI*(age-5)/6);child.g.rotation.y=2.5;}
      else if(age<23){outerWalk(childStart,receivePoint,1,child.g.position);child.g.rotation.y=2.5+Math.atan2(Math.sin(-1.35-2.5),Math.cos(-1.35-2.5))*ease((age-14)/2);}
      else if(age<28){outerWalk(receivePoint,putPoint,ease((age-23)/5),child.g.position);child.g.rotation.y=-.5;move=Math.sin(Math.PI*(age-23)/5);}
      else if(age<32){outerWalk(receivePoint,putPoint,1,child.g.position);child.g.rotation.y=-.6;}
      else {outerWalk(putPoint,childStart,ease((age-32)/8),child.g.position);child.g.rotation.y=2.3-2.05*ease((age-38)/2);move=Math.sin(Math.PI*(age-32)/8);}
      child.arms[0].rotation.x=age>=11&&age<31?-.9:-.2;child.arms[1].rotation.z=age>=14&&age<23?2.2+Math.sin(elapsed*5)*.25:.35;child.arms[1].rotation.x=age>=11&&age<14?-.9:0;
      child.legs[0].rotation.x=Math.sin(elapsed*8)*.42*move;child.legs[1].rotation.x=-child.legs[0].rotation.x;child.g.position.y=terrainHeight(child.g.position.x,child.g.position.z)+Math.abs(Math.sin(elapsed*8))*.012*move;
      child.g.rotation.x=age>=11&&age<14?-.13*Math.sin((age-11)/3*Math.PI):age>=28&&age<32?-.18*Math.sin((age-28)/4*Math.PI):0;parent.g.rotation.y=.9;
    }else child.legs.forEach(l=>l.rotation.x=0);
    visitors.update(elapsed,{elapsed,thankful:age>=14&&age<23});room.update(elapsed,night);animals.update(elapsed);powder.update(elapsed,weather.gust);
    root.updateWorldMatrix(true,false);child.g.updateWorldMatrix(true,true);delivery.update(current,child,visitors);
    for(let at of [7,32])if(Math.floor((clock-at)/STORY_LENGTH)>Math.floor((lastClock-at)/STORY_LENGTH)){if(at===7){steam.boost();pressureSteam.boost();sounds.storyWhistle();}else sounds.effect('bell');}
    const chuff=Math.floor(clock*1.6);if(Math.abs(current.trainOffset-lastOffset)>.00001&&chuff!==lastChuff){lastChuff=chuff;sounds.effect('chuff');}lastOffset=current.trainOffset;
    if(props.hangingSign)props.hangingSign.rotation.z=Math.sin(elapsed*1.8)*.028*weather.gust;if(props.secondHands)for(const h of props.secondHands)h.rotation.z=-elapsed*TAU/60;const signal=(.25+.75*night);M.signalRed.emissiveIntensity=(current.trainOffset>.004?.10:1.9)*signal;M.signalGreen.emissiveIntensity=(current.trainOffset>.004?2.2:.08)*signal;
    return current;
  }
  function interact(kind,index,camera){clickCount++;lastInteraction=kind;
    if(kind==='santa'||kind==='reindeer'){visitors.interact(kind,elapsedNow,camera);if(kind==='reindeer')sounds.effect('bell');return kind==='santa'?'圣诞老人转过头，向你挥手。':'圣诞邮差向你点了点头。';}
    if(kind==='window'){room.greet(index,elapsedNow,camera);return '候车室里的人走向窗边，向你问好。';}
    if(kind==='cat'||kind==='bird'){animals.interact(kind,elapsedNow);return kind==='cat'?'车站的小猫伸了个懒腰。':'知更鸟歪过头，打量这位访客。';}
    if(kind==='train'){if(current.time>=32){steam.boost();pressureSteam.boost();sounds.storyWhistle();return '圣诞邮差正在忙碌，列车稍后出发。';}if(current.time>=4&&current.time<28){steam.boost();pressureSteam.boost();sounds.storyWhistle();return '列车正在缓行，稍后回到站台。';}clock=Math.floor(clock/STORY_LENGTH)*STORY_LENGTH+4;running=true;return '站长举起了旗，列车准备缓缓出发。';}return '';
  }
  const windowTargets=props.windows.map((a,i)=>{const plane=new THREE.Mesh(new THREE.PlaneGeometry(a.width,a.height),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));plane.position.copy(a.center);plane.quaternion.setFromUnitVectors(V(0,0,1),a.normal);plane.visible=false;plane.userData.interaction='window';plane.userData.windowIndex=i;root.add(plane);return plane;});
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
  function pick(clientX,clientY,camera,rect){pointer.set((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);root.updateWorldMatrix(true,true);
    const hits=ray.intersectObject(root,true);for(const hit of hits){let o=hit.object,tag=null,index=undefined,visible=true;while(o&&o!==root){visible=visible&&o.visible;if(o.userData.interaction&&!tag){tag=o.userData.interaction;index=o.userData.windowIndex;}o=o.parent;}
      if(!visible&&tag!=='window')continue;if(!tag&&(hit.object.material?.transparent||!hit.object.visible))continue;if(tag){const position=root.worldToLocal(camera.position.clone());return interact(tag,index,position);}if(hit.object.isMesh&&visible&&!hit.object.material?.transparent)return '';}
    return '';
  }
  return {update,pick,interact,room,animals,powder,delivery,toggle(){running=!running;return running;},seek(value){clock=Math.max(0,value);lastClock=clock;running=true;},get running(){return running;},get time(){return clock;},diagnostics:()=>({seconds:clock,running,phase:current.phase,train:train.diagnostics(),gift:delivery.diagnostics(),room:room.diagnostics(),animals:animals.diagnostics(),powder:powder.diagnostics(),clicks:clickCount,lastInteraction})};
}

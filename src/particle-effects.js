import * as THREE from 'three';
import {SPHERE} from './atmosphere.js';

// Independent, texture-free point shaders keep the physical-material sampler budget
// unchanged. All coordinates are globe-local, so shaking transforms each effect once.
const LIMIT=5.07,ROOM=new THREE.Vector3(-.82,1.57,-.88);
const vertexShader=`attribute float aSize;attribute float aAlpha;attribute vec3 aColor;attribute float aPhase;
uniform float uHeight;varying float vAlpha;varying vec3 vColor;varying float vPhase;
void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vColor=aColor;vPhase=aPhase;
gl_PointSize=clamp(aSize*uHeight*projectionMatrix[1][1]*.5/max(.05,-p.z),.6,34.);gl_Position=projectionMatrix*p;}`;
const fragmentShader=`uniform float uKind;varying float vAlpha;varying vec3 vColor;varying float vPhase;
void main(){vec2 p=(gl_PointCoord-.5)*2.;float r=length(p);if(r>1.||vAlpha<.001)discard;
float shape=exp(-r*r*14.)*.7+exp(-r*r*4.)*.10;
if(uKind>1.5){float c=cos(vPhase),s=sin(vPhase);p=mat2(c,-s,s,c)*p;
float rays=exp(-min(abs(p.x),abs(p.y))*42.)*pow(max(0.,1.-max(abs(p.x),abs(p.y))),1.8);
shape=exp(-r*r*24.)*.75+rays*.75+exp(-r*r*4.)*.10;}
gl_FragColor=vec4(vColor,clamp(shape*vAlpha,0.,.95));
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;

function cloud(parent,count,kind,name){
  const geometry=new THREE.BufferGeometry(),arrays={position:new Float32Array(count*3),size:new Float32Array(count),alpha:new Float32Array(count),color:new Float32Array(count*3),phase:new Float32Array(count)};
  for(const [name,field,n]of[['position','position',3],['aSize','size',1],['aAlpha','alpha',1],['aColor','color',3],['aPhase','phase',1]])geometry.setAttribute(name,new THREE.BufferAttribute(arrays[field],n).setUsage(THREE.DynamicDrawUsage));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,blending:THREE.AdditiveBlending,uniforms:{uHeight:{value:1080},uKind:{value:kind}},vertexShader,fragmentShader});
  const points=new THREE.Points(geometry,material);points.name=name;points.frustumCulled=false;points.renderOrder=7;parent.add(points);
  return {points,arrays,material,upload(){for(const a of Object.values(geometry.attributes))a.needsUpdate=true;}};
}
const hash=n=>{const v=Math.sin(n*127.1+31.7)*43758.5453;return v-Math.floor(v);};

export function makeParticleEffects(root,{visitors,delivery}){
  const dust=cloud(root,144,0,'Warm pendant light · floating indoor motes'),embers=cloud(root,22,1,'Stove embers · confined behind the fire-door rim'),magic=cloud(root,420,2,'Christmas stardust · sleigh, parcel and landing');
  const pool=Array.from({length:420},()=>({age:99,life:1,p:new THREE.Vector3(),v:new THREE.Vector3(),size:0,seed:0,kind:0}));
  const source=new THREE.Vector3(),previousSource=new THREE.Vector3(),gift=new THREE.Vector3(),previousGift=new THREE.Vector3(),sample=new THREE.Vector3();
  let cursor=0,serial=0,trailCredit=0,giftCredit=0,hasSource=false,hadGift=false,previousClock=null,lastStage='',bursts=0,discontinuities=0,now=0,frameDt=0;
  const stats={outside:0,invalid:0,maximumRadius:0,alive:0,trail:0,parcel:0,landing:0};
  function emit(position,kind,initialAge=0){
    const p=pool[cursor];cursor=(cursor+1)%pool.length;const n=++serial,r=hash(n+3),a=hash(n+7)*Math.PI*2;
    p.p.copy(position);p.seed=hash(n+19);p.kind=kind;p.age=initialAge-frameDt;
    if(kind===2){const speed=.16+hash(n+6)*.22;p.p.x+=Math.cos(a)*.18;p.p.z+=Math.sin(a)*.18;p.v.set(Math.cos(a)*speed,.08+hash(n+8)*.14,Math.sin(a)*speed);p.life=1.6+hash(n+11)*.60;p.size=.065+hash(n+4)*.060;}
    else {p.p.add(sample.set(Math.cos(a),hash(n+2)-.5,Math.sin(a)).multiplyScalar(kind===0?.095:.055));p.v.set(Math.cos(a)*.045,-.04-r*.05,Math.sin(a)*.045);p.life=kind===0?2.0+r*1.6:.7+r*.8;p.size=(kind===0?.045:.033)+hash(n+4)*.045;}
    // Emitters are already inside the glass; this also guards future anchor edits.
    sample.copy(p.p).sub(SPHERE.center);if(sample.length()>LIMIT-.09)p.p.copy(sample.setLength(LIMIT-.09)).add(SPHERE.center);
  }
  function clear(){for(const p of pool)p.age=99;trailCredit=giftCredit=0;hasSource=hadGift=false;}
  function update(dt,t,night,state){
    dt=Math.max(0,Math.min(dt,1));frameDt=dt;now=t;
    const jumped=previousClock!==null&&(state.clock<previousClock-.001||Math.abs(state.clock-previousClock)>dt+.08);
    if(jumped){clear();discontinuities++;}previousClock=state.clock;
    const d=dust.arrays,e=embers.arrays;
    for(let i=0;i<144;i++){
      const phase=hash(i+1)*Math.PI*2,s=hash(i+70),h=hash(i+100),x=(i%2? .82:-.82)+Math.cos(phase+t*(.08+s*.035))*(.18+h*.39),y=.90+((h+t*(.008+s*.007))%1)*.93,z=-.08+Math.sin(phase*.73+t*.09)*(.16+s*.40);
      d.position.set([x+ROOM.x,y+ROOM.y,z+ROOM.z],i*3);d.size[i]=.009+s*.012;d.alpha[i]=(.18+night*.28)*(.6+.4*Math.sin(phase+t*.7)**2);d.phase[i]=phase;
      d.color.set([1.1,.73+s*.14,.39+s*.15],i*3);
    }
    for(let i=0;i<22;i++){
      const s=hash(i+40),age=(t*(.40+s*.3)+hash(i+9))%1,x=Math.sin(i*5.3+t*.9+age*3)*(.028+s*.04),y=.17+age*.18;
      e.position.set([ROOM.x+.72+x,ROOM.y+.79+y,ROOM.z-.55+.180+s*.006],i*3);e.size[i]=.010+s*.010;e.alpha[i]=Math.sin(age*Math.PI)**1.3*(.55+s*.4);e.phase[i]=0;e.color.set([1.7,.38+age*.34,.045],i*3);
    }
    root.updateWorldMatrix(true,false);visitors.deer.sleigh.updateWorldMatrix(true,false);source.set(-.74,-.25,0).applyMatrix4(visitors.deer.sleigh.matrixWorld);root.worldToLocal(source);
    if(!hasSource||source.distanceTo(previousSource)>.8)previousSource.copy(source);hasSource=true;
    trailCredit+=dt*52;const trails=Math.floor(trailCredit);trailCredit-=trails;for(let i=0;i<trails;i++){const f=(i+.5)/Math.max(1,trails);emit(sample.copy(previousSource).lerp(source,f),0,dt*(1-f));}previousSource.copy(source);
    const falling=delivery.stage==='falling'&&delivery.g.visible;
    if(falling){gift.copy(delivery.g.position).y+=.22;if(!hadGift||gift.distanceTo(previousGift)>1)previousGift.copy(gift);giftCredit+=dt*37;const count=Math.floor(giftCredit);giftCredit-=count;for(let i=0;i<count;i++){const f=(i+.5)/Math.max(1,count);emit(sample.copy(previousGift).lerp(gift,f),1,dt*(1-f));}previousGift.copy(gift);}
    else giftCredit=0;
    if(!jumped&&lastStage==='falling'&&delivery.stage==='landed'){gift.copy(delivery.g.position).y+=.075;for(let i=0;i<58;i++)emit(gift,2,Math.max(0,(state.dropAge??8)-8));bursts++;}
    hadGift=falling;lastStage=delivery.stage;
    stats.alive=stats.trail=stats.parcel=stats.landing=stats.outside=stats.invalid=0;stats.maximumRadius=0;
    const a=magic.arrays;
    for(let i=0;i<pool.length;i++){
      const p=pool[i],step=Math.min(dt,Math.max(0,p.age+dt));p.age+=dt;
      if(p.age>=p.life){a.alpha[i]=0;continue;}
      const f=p.age/p.life;p.v.x*=Math.exp(-step*.6);p.v.z*=Math.exp(-step*.6);p.p.addScaledVector(p.v,step);
      p.p.x+=Math.sin(t*2.1+p.seed*31)*step*.018;p.p.z+=Math.cos(t*1.7+p.seed*27)*step*.018;
      if(p.kind===2)p.v.y-=step*.19;
      // Fade rather than bounce at the glass. A star's entire quad has .09 margin.
      const radius=p.p.distanceTo(SPHERE.center);if(radius>LIMIT||p.kind===0&&p.p.y<6.18){p.age=p.life;a.alpha[i]=0;continue;}
      a.position[i*3]=p.p.x;a.position[i*3+1]=p.p.y;a.position[i*3+2]=p.p.z;a.size[i]=p.size*(.9+Math.sin(f*Math.PI)*.2);a.alpha[i]=Math.sin(Math.min(1,f*6)*Math.PI*.5)*(1-f)**1.4*(.57+night*.43)*(.65+.35*Math.sin(t*5+p.seed*30)**2);a.phase[i]=p.seed*6+t*(p.seed-.5)*.3;
      a.color.set(p.seed>.82?[.68,.90,1.35]:[1.65,1.02+p.seed*.25,.35+p.seed*.32],i*3);
      stats.alive++;stats[['trail','parcel','landing'][p.kind]]++;stats.maximumRadius=Math.max(stats.maximumRadius,radius);if(radius>SPHERE.radius-.09)stats.outside++;if(!Number.isFinite(p.p.x+p.p.y+p.p.z))stats.invalid++;
    }
    dust.upload();embers.upload();magic.upload();
  }
  return {update,resize(height,dpr){for(const c of [dust,embers,magic])c.material.uniforms.uHeight.value=height*dpr;},diagnostics:()=>({indoorMotes:144,fireEmbers:22,poolCapacity:420,...stats,landingBursts:bursts,seekResets:discontinuities,clock:now,depthTest:true,textureSamplers:0}),dust,embers,magic};
}

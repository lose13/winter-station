import * as THREE from 'three';
import {V,TAU,mesh,box,cyl,ball,torus,beam,pipe,group,batch} from './craft.js';
import {GROUND,terrainHeight} from './world-model.js';
import {makeFigure} from './life.js';
import {ease} from './story-clock.js';

function pathAt(points,f,out){
  const lengths=points.slice(1).map((p,i)=>p.distanceTo(points[i])),total=lengths.reduce((a,b)=>a+b,0);let distance=Math.max(0,Math.min(1,f))*total;
  for(let i=0;i<lengths.length;i++){if(distance<=lengths[i]||i===lengths.length-1)return out.copy(points[i]).lerp(points[i+1],lengths[i]?distance/lengths[i]:0);distance-=lengths[i];}return out.copy(points[0]);
}

export function makeRoomLife(root,M,windows){
  const g=group(root,-.82,GROUND+.08,-.88);g.name='Life inside the station · tea, reading and a flickering stove';
  const guest=makeFigure(g,M,{x:-.35,z:.65,scale:.90,rotation:0,coatColor:0x786054,scarfColor:0xcdbd92,name:'Waiting-room guest · hot tea and a window greeting'});guest.g.position.y=.79;
  const reader=makeFigure(g,M,{x:1.05,z:.02,scale:.73,rotation:-Math.PI/2,seated:true,coatColor:0x445c59,scarfColor:0xc9ad77,name:'Waiting-room reader · turning a page'});reader.g.position.y=1.0;reader.body.position.y=-.08;reader.arms.forEach(a=>a.position.y-=.08);reader.legs.forEach(l=>l.scale.setScalar(.72));
  const book=group(reader.g,0,.19,.20);box(book,.20,.016,.15,M.cream,0,0,0,.004);box(book,.21,.012,.16,M.red,0,-.012,0,.005);const page=mesh(book,new THREE.PlaneGeometry(.092,.14),M.cream,.048,.014,0);page.rotation.x=-Math.PI/2;
  reader.arms.forEach(a=>a.rotation.x=-.7);
  const cup=group(guest.arms[1],.027,-.23,.025);cyl(cup,.037,.030,.072,M.cream,0,.025,0,24);cyl(cup,.031,.031,.003,M.darkwood,0,.063,0,24);torus(cup,.026,.007,M.cream,.044,.025,0).scale.y=1.15;
  // Cast-iron stove with a dark glazed fire door and a narrow flue.
  const stove=group(g,.72,.79,-.55);box(stove,.31,.43,.25,M.black,0,.23,0,.035);for(let x of [-.11,.11])for(let z of [-.08,.08])beam(stove,[x,0,z],[x,.10,z],.018,M.iron);
  box(stove,.25,.27,.02,M.brass,0,.25,.139,.025);box(stove,.214,.235,.025,M.black,0,.25,.155,.02);cyl(stove,.038,.045,.14,M.iron,0,.52,-.04,20);pipe(stove,[[0,.55,-.04],[0,1.31,-.04],[-.12,1.44,-.04]],.035,M.black);ball(stove,.016,M.gold,.13,.23,.169);
  for(let i=0;i<3;i++){const log=cyl(stove,.025,.025,.16,M.darkwood,-.04+i*.04,.15,.175,12);log.rotation.z=.9+i*.4;}
  batch(stove);
  const flameMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uTime:{value:0},uNight:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 vUv;uniform float uTime;uniform float uNight;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 a=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(a),hash(a+vec2(1,0)),f.x),mix(hash(a+vec2(0,1)),hash(a+1.),f.x),f.y);}
    void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=noise(vec2(p.x*5.,p.y*7.-uTime*2.5));float n2=noise(vec2(p.x*11.,p.y*13.-uTime*4.));float width=(1.-p.y)*.65;float fire=smoothstep(.10,-.07,abs(p.x+sin(p.y*7.-uTime*3.)*.10)-width+(n-.5)*.27);fire*=smoothstep(1.,.72,p.y+(n2-.5)*.18);float hot=clamp((1.-p.y)*1.1-abs(p.x)*.6,0.,1.);vec3 color=mix(vec3(1.,.16,.025),vec3(1.,.85,.35),hot);gl_FragColor=vec4(color*(1.15+uNight*.25),fire*.86);}`});
  const flame=mesh(stove,new THREE.PlaneGeometry(.20,.23),flameMaterial,0,.27,.172);flame.castShadow=false;flame.renderOrder=1;const fireLight=new THREE.PointLight(0xff9b4a,1.4,1.65,2);fireLight.position.set(0,.29,.28);stove.add(fireLight);
  const steamPos=new Float32Array(8*3),steamAlpha=new Float32Array(8),steamGeo=new THREE.BufferGeometry();steamGeo.setAttribute('position',new THREE.BufferAttribute(steamPos,3));steamGeo.setAttribute('aAlpha',new THREE.BufferAttribute(steamAlpha,1));const steamMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uDpr:{value:1}},vertexShader:'attribute float aAlpha;uniform float uDpr;varying float vAlpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;gl_PointSize=clamp(85.*uDpr/-p.z,1.5*uDpr,7.*uDpr);gl_Position=projectionMatrix*p;}',fragmentShader:'varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.95,.92,.85,pow(1.-r,2.)*vAlpha);}'});
  // Small 3D wisps, not a painted glow over the window.
  const steam=new THREE.Points(steamGeo,steamMat);steam.renderOrder=5;root.add(steam);
  let greeting=null,lastStage='tea',lastGreeting=-1,idleBlend=null,lastRoomTime=0;
  function greet(index,t,camera=null){const a=windows[index]||windows[0],outward=camera?camera.clone().sub(a.center).setY(0).normalize():a.normal.clone(),right=V().crossVectors(V(0,1,0),a.normal),shift=THREE.MathUtils.clamp(outward.dot(right)/Math.max(.3,outward.dot(a.normal))*.27,-.18,.18),world=a.center.clone().addScaledVector(a.normal,-.27).addScaledVector(right,.10-shift),goal=V(world.x+.82,.79,world.z+.88),current=guest.g.position.clone();
    const points=[current];if(current.z<.45){const side=current.x<0?-1:1;if(Math.abs(current.x)<1.20)points.push(V(current.x,.79,-.86));points.push(V(side*1.39,.79,points.at(-1).z),V(side*1.39,.79,.65));}
    if(goal.z<.45){const side=goal.x<0?-1:1;points.push(V(side*1.39,.79,.65));if(Math.abs(a.normal.z)>.5)points.push(V(side*1.39,.79,-.86));}
    points.push(goal);greeting={start:t,points,normal:outward};idleBlend=null;lastGreeting=index;
  }
  const localCup=V(),tmp=V();function update(t,night){
    flameMaterial.uniforms.uTime.value=t;flameMaterial.uniforms.uNight.value=night;const flicker=1+Math.sin(t*7.1)*.055+Math.sin(t*11.7)*.035;fireLight.intensity=(.85+night*.65)*flicker;
    let walk=0,wave=0,heading=guest.g.rotation.y;const roomDt=Math.min(.2,Math.max(.001,t-lastRoomTime));lastRoomTime=t;
    if(greeting){const age=t-greeting.start;if(age<3.6){pathAt(greeting.points,ease(age/3.6),guest.g.position);pathAt(greeting.points,Math.min(1,ease(age/3.6)+.01),tmp);walk=1;heading=Math.atan2(tmp.x-guest.g.position.x,tmp.z-guest.g.position.z);lastStage='approaching window';}
      else if(age<9.6){guest.g.position.copy(greeting.points.at(-1));guest.g.rotation.y=Math.atan2(greeting.normal.x,greeting.normal.z);wave=1;lastStage='waving through window';}
      else if(age<13.4){pathAt(greeting.points,1-ease((age-9.6)/3.8),guest.g.position);pathAt(greeting.points,Math.max(0,1-ease((age-9.6)/3.8)-.01),tmp);guest.g.rotation.y=Math.atan2(tmp.x-guest.g.position.x,tmp.z-guest.g.position.z);walk=1;lastStage='returning to tea';}else {idleBlend={position:guest.g.position.clone(),start:t};greeting=null;}
    }
    if(!greeting){const f=.5-.5*Math.cos(t*.24);const target=V(-1.04+f*2.08,.79,.65);if(idleBlend){const blend=ease((t-idleBlend.start)/2.5);guest.g.position.copy(idleBlend.position).lerp(target,blend);if(blend>=1)idleBlend=null;}else guest.g.position.copy(target);heading=Math.sin(t*.24)>0?Math.PI/2:-Math.PI/2;walk=Math.abs(Math.sin(t*.24));lastStage='tea and a quiet stroll';}
    guest.g.rotation.y+=Math.atan2(Math.sin(heading-guest.g.rotation.y),Math.cos(heading-guest.g.rotation.y))*(1-Math.exp(-6*roomDt));const step=Math.sin(t*5.5)*.30*walk;guest.legs[0].rotation.x=step;guest.legs[1].rotation.x=-step;guest.arms[0].rotation.x=step*.3;guest.arms[1].rotation.x=-.78-Math.max(0,Math.sin(t*.7))*.2;
    guest.arms[0].rotation.z=wave?-2.2+Math.sin(t*5)*.25:0;cup.rotation.x=-guest.arms[1].rotation.x;
    reader.g.rotation.y=-Math.PI/2+Math.sin(t*.35)*.07;page.rotation.y=Math.max(0,Math.sin(t*.7))*.8;reader.arms[1].rotation.x=-.7+Math.sin(t*.7)*.06;
    cup.getWorldPosition(localCup);root.worldToLocal(localCup);for(let i=0;i<8;i++){const age=(t*.3+i/8)%1;steamPos.set([localCup.x+Math.sin(t+i)*.02*age,localCup.y+.07+age*.24,localCup.z+Math.cos(t+i)*.015*age],i*3);steamAlpha[i]=Math.sin(age*Math.PI)*.30;}steamGeo.attributes.position.needsUpdate=true;steamGeo.attributes.aAlpha.needsUpdate=true;
  }
  return {update,greet,guest,reader,steamMaterial:steamMat,diagnostics:()=>({residents:2,activity:lastStage,greetedWindow:lastGreeting,fireplace:true,teaSteam:true})};
}

export function makeSmallAnimals(root,M,sounds){
  const fur=new THREE.MeshStandardMaterial({color:0xb97544,roughness:.96}),white=new THREE.MeshStandardMaterial({color:0xe7d8bf,roughness:.97}),pink=new THREE.MeshStandardMaterial({color:0xbb8b83,roughness:.85});
  const cat=group(root);cat.name='Station cat · sleeping, stretching and investigating the snow';cat.userData.interaction='cat';const body=group(cat);ball(body,1,fur,0,.20,0,.23,.13,.115);ball(body,1,white,.10,.16,0,.14,.10,.116);
  const head=group(cat,.22,.31,0);ball(head,1,fur,0,0,0,.10,.085,.087);for(let s of [-1,1]){const ear=cyl(head,0,.045,.11,fur,-.035,.085,s*.055,3);ear.rotation.z=-.25;const inner=cyl(head,0,.025,.067,pink,-.025,.089,s*.057,3);inner.rotation.z=-.25;ball(head,.014,M.black,.071,.015,s*.045,.40,1,1);ball(head,.009,white,.079,.019,s*.047,.4,.4,.4);ball(head,.037,white,.071,-.035,s*.026,.7,.55,1);for(let j=0;j<3;j++)pipe(head,[[.086,-.028,s*.03],[.098,-.025+j*.012,s*.09],[.10,-.035+j*.018,s*.15]],.0018,M.cream);}ball(head,.015,pink,.097,-.018,0,.5,.6,1);
  const legs=[];for(let x of [-.14,.14])for(let s of [-1,1]){const leg=group(cat,x,.18,s*.078);beam(leg,[0,0,0],[.015,-.145,0],.029,fur,.021,12);ball(leg,.032,white,.027,-.15,0,1.6,.65,1);batch(leg);legs.push(leg);}
  const tail=group(cat,-.19,.21,0);pipe(tail,[[0,0,0],[-.16,.11,0],[-.20,.27,.02],[-.12,.38,.03]],.022,fur);pipe(tail,[[-.15,.35,.03],[-.12,.38,.03]],.024,white);batch(body);batch(head);batch(tail);
  const bird=group(root);bird.name='Robin · roof, flight and station-sign perch';bird.userData.interaction='bird';const brown=new THREE.MeshStandardMaterial({color:0x65574b,roughness:.95}),breast=new THREE.MeshStandardMaterial({color:0xbf663e,roughness:.92});
  const birdBody=group(bird);ball(birdBody,1,brown,0,.10,0,.065,.085,.10);ball(birdBody,1,breast,0,.092,.065,.052,.065,.055);ball(birdBody,.055,brown,0,.19,.038);for(let s of [-1,1])ball(birdBody,.008,M.black,s*.043,.20,.065);const beak=cyl(birdBody,0,.013,.055,M.gold,0,.185,.104,7);beak.rotation.x=Math.PI/2;beam(birdBody,[0,.03,-.06],[0,-.02,-.16],.022,brown,.006,10);
  for(let s of [-1,1]){beam(birdBody,[s*.024,.04,0],[s*.024,.003,.02],.005,M.darkwood);for(let toe of [-1,0,1])beam(birdBody,[s*.024,.005,.02],[s*.024+toe*.012,.003,.045],.003,M.darkwood);}
  const wings=[];for(let s of [-1,1]){const wing=group(bird,s*.035,.135,-.01);const w=ball(wing,1,brown,s*.06,-.015,-.025,.09,.023,.085);w.rotation.y=s*.25;for(let i=0;i<4;i++)beam(wing,[s*.025,-.013,-.01],[s*(.085+i*.01),-.015,-.085+i*.02],.005,M.aged,.0025,6);batch(wing);wings.push(wing);}batch(birdBody);
  let catUntil=-1,birdUntil=-1,lastBirdCycle=-1,catMode='sleeping',flying=false,catReactionPosition=null,lastAnimalTime=0;
  function interact(kind,t){if(kind==='cat'){catUntil=t+5;catReactionPosition=cat.position.clone();}if(kind==='bird'){birdUntil=t+3;sounds.effect('bird');}}
  const birdA=V(-2.42,4.13,.52),birdB=V(-2.9,GROUND+1.49,.03),flight=new THREE.CubicBezierCurve3(birdA,V(-3.02,5.0,1.0),V(-2.82,3.65,.62),birdB);
  function update(t){const animalDt=Math.min(.2,Math.max(.001,t-lastAnimalTime));lastAnimalTime=t;let p=t%40,move=0,f=0;if(t<catUntil){catMode='stretching';}else if(p<8||p>37){catMode='sleeping';f=0;}else if(p<11){catMode='stretching';f=0;}else if(p<20){catMode='walking';f=ease((p-11)/9);move=1;}else if(p<28){catMode='grooming';f=1;}else{catMode='walking';f=1-ease((p-28)/9);move=1;}
    cat.position.set(-2.94+f*.36,0,.45+f*.17);if(catReactionPosition&&t<catUntil+1.5)cat.position.lerp(catReactionPosition,1-ease((t-catUntil)/1.5));cat.position.y=terrainHeight(cat.position.x,cat.position.z)+.015;const heading=p>=28&&p<37?Math.PI-.44:-.44;cat.rotation.y+=Math.atan2(Math.sin(heading-cat.rotation.y),Math.cos(heading-cat.rotation.y))*(1-Math.exp(-5*animalDt));
    const stretch=catMode==='stretching'?Math.sin(Math.min(1,t<catUntil?(5-(catUntil-t))/5:(p-8)/3)*Math.PI):0;let rest=p<8?1:p<10?1-ease((p-8)/2):p>37?ease((p-37)/3):0;if(t<catUntil)rest*=1-ease((t-(catUntil-5))/.6)*(1-ease((t-(catUntil-.6))/.6));body.scale.set(1+stretch*.20,(1-rest*.32)*(1-stretch*.13)*(1+Math.sin(t*1.6)*.015),1);head.position.y=.31-rest*.12-stretch*.08;head.rotation.z=catMode==='grooming'?Math.sin(t*2.5)*.18:stretch*.3;head.rotation.y=catMode==='grooming'?.30:Math.sin(t*.8)*.04;tail.rotation.y=Math.sin(t*1.4)*.17;
    legs.forEach((l,i)=>l.rotation.z=move?Math.sin(t*7+(i===0||i===3?0:Math.PI))*.42:stretch*(i<2?-.25:.15));if(catMode==='grooming')legs[3].rotation.z=-1.1+Math.sin(t*2)*.15;
    const q=t%25;flying=q>=8&&q<11||q>=20&&q<23;let u=q<8?0:q<11?ease((q-8)/3):q<20?1:q<23?1-ease((q-20)/3):0;bird.position.copy(flight.getPoint(u));const tangent=flight.getTangent(Math.max(.001,Math.min(.999,u)));if(q>=20)tangent.negate();bird.rotation.y=flying?Math.atan2(tangent.x,tangent.z):Math.sin(t*.7)*.22;bird.rotation.x=flying?-Math.atan2(tangent.y,Math.hypot(tangent.x,tangent.z))*.35:0;
    wings.forEach((w,i)=>w.rotation.z=(i?1:-1)*(flying?.4+Math.sin(t*28)*.9:.12));birdBody.rotation.y=t<birdUntil?Math.sin(t*7)*.35:Math.sin(t*.5)*.08;
    const cycle=Math.floor(t/25);if(cycle!==lastBirdCycle){lastBirdCycle=cycle;sounds.effect('bird');}
  }
  return {update,interact,cat,bird,diagnostics:()=>({cat:catMode,robinFlying:flying})};
}

export function makeWindPowder(root){
  const n=180,positions=new Float32Array(n*3),alpha=new Float32Array(n),sizes=new Float32Array(n),geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(positions,3));geo.setAttribute('aAlpha',new THREE.BufferAttribute(alpha,1));geo.setAttribute('aSize',new THREE.BufferAttribute(sizes,1));for(let i=0;i<n;i++)sizes[i]=.025+(i%13)/13*.055;
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uDpr:{value:1}},vertexShader:'attribute float aAlpha;attribute float aSize;uniform float uDpr;varying float vAlpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;gl_PointSize=clamp(aSize*1000.*uDpr/-p.z,1.,7.*uDpr);gl_Position=projectionMatrix*p;}',fragmentShader:'varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.91,.97,1.,pow(1.-r,1.7)*vAlpha);}'});
  const points=new THREE.Points(geo,material);points.name='Wind-lifted roof and bough powder';points.renderOrder=6;root.add(points);
  const emitters=[[1.12,3.87,-.30],[.92,3.95,-1.55],[2.94,5.43,-1.65],[-2.77,5.15,-1.48],[1.10,4.72,-3.05],[3.62,3.25,.1]];let outside=0;
  function update(t,gust){outside=0;for(let i=0;i<n;i++){const e=emitters[i%emitters.length],age=(t*.43+i*.6180339)%1,f=(i%17)/17;let x=e[0]+age*(.75+f*.6)+Math.sin(t*2+i)*.10*age,y=e[1]-.85*age*age+Math.sin(age*Math.PI)*.10,z=e[2]+age*.35+Math.cos(i)*.08;
      const r=Math.hypot(x,y-4.15,z);alpha[i]=(r<5.08&&y>terrainHeight(x,z)+.05?1:0)*Math.sin(age*Math.PI)*gust*.65;if(alpha[i]&&r>5.12)outside++;if(r>5.08){const k=5.08/r;x*=k;y=4.15+(y-4.15)*k;z*=k;}positions.set([x,y,z],i*3);}geo.attributes.position.needsUpdate=true;geo.attributes.aAlpha.needsUpdate=true;}
  return {update,material,diagnostics:()=>({particles:n,outside})};
}

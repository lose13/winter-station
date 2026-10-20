import * as THREE from 'three';
import {V,TAU,rand,mesh,box,cyl,ball,torus,beam,pipe,group,extrude,snowLump,batch} from './craft.js';
import {GROUND,terrainHeight,makeTrees} from './world-model.js';

export function createTreeWind(M){
  const uniforms={uWindTime:{value:0},uWindGust:{value:0}};
  function modify(shader){Object.assign(shader.uniforms,uniforms);shader.vertexShader='uniform float uWindTime;uniform float uWindGust;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    float treeH=max(0.,position.y-1.49);
    float gust=(1.+uWindGust*.7);
    float phase=position.x*.37+position.z*.51;
    transformed.x+=(sin(uWindTime*1.12+phase)*.0047+sin(uWindTime*.63+phase*.8)*.0022)*treeH*treeH*gust;
    transformed.z+=cos(uWindTime*.94+phase)*.0042*treeH*treeH*gust;
  `);}
  const materials={...M};for(const name of ['pine','pineLight','trunk','snow']){const m=M[name].clone();m.onBeforeCompile=modify;m.customProgramCacheKey=()=> 'winter-tree-wind-v1';m.userData.treeWind=true;materials[name]=m;}
  const depth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking});depth.onBeforeCompile=modify;depth.customProgramCacheKey=()=> 'winter-tree-wind-depth-v1';
  function connect(root){root.traverse(o=>{if(o.isMesh&&o.material.userData.treeWind)o.customDepthMaterial=depth;});}
  function update(t,energy=0,gust=null){uniforms.uWindTime.value=t;uniforms.uWindGust.value=(gust??(.35+.3*Math.sin(t*.37)))+energy;}
  return {materials,connect,update,uniforms};
}

function bow(p,M,x,y,z,size=.13){const q=group(p,x,y,z);for(let s of [-1,1]){const loop=torus(q,size*.48,size*.12,M.red,s*size*.44,.015,0);loop.scale.set(1,.62,1);loop.rotation.z=s*.4;const tail=box(q,size*.3,size*.9,.027,M.red,s*size*.25,-size*.46,0,.014);tail.rotation.z=s*.19;}ball(q,size*.18,M.red,0,0,.018);return q;}
function gift(p,M,x,z,s,color){const q=group(p,x,terrainHeight(x,z)+s*.44,z,rand(-.3,.3));box(q,s,s*.85,s*.81,color,0,0,0,.025);box(q,s*.13,s*.87,s*.83,M.gold,0,0,0,.006);box(q,s*1.01,s*.87,s*.12,M.gold,0,0,0,.006);box(q,s*1.025,.045,s*.835,color,0,s*.41,0,.014);for(let side of [-1,1]){const b=torus(q,s*.14,s*.025,M.gold,side*s*.09,s*.47,0);b.rotation.x=Math.PI/2;b.rotation.y=side*.3;b.scale.set(1,.55,1);}return q;}
function star(p,mat,x,y,z,r=.16){const shape=new THREE.Shape();for(let i=0;i<10;i++){const a=i/10*TAU+Math.PI/2,radius=i%2?r*.43:r;const xx=Math.cos(a)*radius,yy=Math.sin(a)*radius;i?shape.lineTo(xx,yy):shape.moveTo(xx,yy);}shape.closePath();return extrude(p,shape,.04,mat,x,y,z,.008);}

export function makeChristmas(root,M,treeM){
  const g=group(root);g.name='Christmas at Winter Station · wreaths, gifts & warm fairy lights';
  const red=new THREE.MeshStandardMaterial({color:0xa92728,roughness:.38,metalness:.25});
  const green=new THREE.MeshStandardMaterial({color:0x315954,roughness:.45,metalness:.18});
  const bulbs=[new THREE.MeshStandardMaterial({color:0xffdaa1,emissive:0xffac41,emissiveIntensity:2.9}),new THREE.MeshStandardMaterial({color:0xd74f3b,emissive:0xff4a25,emissiveIntensity:1.8}),new THREE.MeshStandardMaterial({color:0xb8d5ac,emissive:0x9cce85,emissiveIntensity:1.9})];
  const points=[],phases=[];
  function bulb(x,y,z,i=0,r=.032){ball(g,r,bulbs[i%3],x,y,z);points.push(x,y,z);phases.push(i*.79);}
  // Three independently sagging garlands follow the front canopy.
  for(let section=0;section<3;section++){
    const pts=[];for(let i=0;i<=36;i++){const f=i/36,x=-2.54+section*1.145+f*1.145,y=GROUND+1.83-Math.sin(f*Math.PI)*.14,z=1.24;pts.push([x,y,z]);
      if(i%2===0){const twig=ball(g,1,i%4?M.pine:M.pineLight,x,y,z,.07,.043,.05);twig.rotation.z=Math.cos(f*Math.PI)*.4;}
      if(i%6===0)bulb(x,y-.042,z+.045,section*8+i);
      if(i%12===5)ball(g,.045,i%2?M.gold:red,x,y-.09,z+.022);
    }pipe(g,pts,.024,M.pine);bow(g,{...M,red},-2.54+section*1.145,GROUND+1.84,1.29,.11);
  }
  bow(g,{...M,red},.90,GROUND+1.84,1.29,.11);
  // A substantial wreath sits in the front gable, clear of the station name.
  const wreath=group(g,-.82,4.2,.249);torus(wreath,.245,.055,M.pine);for(let i=0;i<32;i++){const a=i/32*TAU;const b=ball(wreath,1,i%2?M.pine:M.pineLight,Math.sin(a)*.245,Math.cos(a)*.245,.013,.075,.027,.04);b.rotation.z=-a;}
  for(let i=0;i<9;i++){const a=i/9*TAU;ball(wreath,.036,i%3?M.gold:red,Math.sin(a)*.25,Math.cos(a)*.25,.056);}bow(wreath,{...M,red},0,-.19,.072,.13);
  // A separate, fully branched Christmas fir occupies the left forecourt.
  const tx=-3.08,tz=1.72,th=1.7;makeTrees(g,treeM,[[tx,tz,th]]);
  for(let i=0;i<43;i++){const f=i/42,a=f*TAU*3.6,r=.435*(1-f)+.04;const x=tx+Math.cos(a)*r,z=tz+Math.sin(a)*r,y=GROUND+.23+f*1.43;bulb(x,y,z,i,.031);if(i%5===0)ball(g,.055,i%2?red:M.gold,x,y-.07,z);}
  star(g,bulbs[0],tx,GROUND+1.87,tz,.16);
  gift(g,M,-3.34,1.96,.3,red);gift(g,M,-2.84,1.91,.26,green);gift(g,M,-3.43,1.52,.24,M.cream);gift(g,M,1.49,-.48,.26,red);
  // A small wool-scarved snowman beside the parcels.
  const man=group(g,-2.5,GROUND,2.8,.12);ball(man,.17,M.snow,0,.17,0,1,1.1,1);ball(man,.125,M.snow,0,.39,0);cyl(man,.15,.15,.028,M.black,0,.505,0,28);cyl(man,.09,.10,.13,M.black,0,.57,0,28);torus(man,.114,.024,red,0,.33,0).rotation.x=Math.PI/2;box(man,.046,.19,.022,red,.065,.25,.14,.012);for(let x of [-.041,.041])ball(man,.014,M.black,x,.418,.112);cyl(man,0,.024,.11,M.leather,0,.385,.145,7).rotation.x=Math.PI/2;for(let y of [.13,.2,.27])ball(man,.014,M.black,0,y,.17);for(let side of [-1,1])beam(man,[side*.12,.25,0],[side*.28,.37,.03],.013,M.trunk);
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geo.setAttribute('aPhase',new THREE.Float32BufferAttribute(phases,1));
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0},uDpr:{value:1},uNight:{value:1}},vertexShader:`attribute float aPhase;varying float vGlow;uniform float uTime;uniform float uDpr;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vGlow=.8+.2*sin(uTime*.9+aPhase);gl_PointSize=clamp(220.*uDpr/-p.z,3.,16.*uDpr);gl_Position=projectionMatrix*p;}`,fragmentShader:`varying float vGlow;uniform float uNight;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(max(0.,1.-r),2.5)*vGlow*(.16+uNight*.36);gl_FragColor=vec4(1.,.66,.29,a);}`});
  const lightGlows=new THREE.Points(geo,mat);lightGlows.renderOrder=7;lightGlows.frustumCulled=false;root.add(lightGlows);
  function update(t,night){mat.uniforms.uTime.value=t;mat.uniforms.uNight.value=night;bulbs.forEach((m,i)=>m.emissiveIntensity=(1.5+.9*night)*(.86+.14*Math.sin(t*.8+i*1.6)));}
  return {update,material:mat,bulbs,count:points.length/3};
}

export function makeFigure(parent,M,options){
  const {x,z,scale=1,rotation=0,coatColor=0x355667,scarfColor=0xab4034,hat='beanie',seated=false}=options;
  const g=group(parent,x,terrainHeight(x,z)+(seated?.43:0),z,rotation);g.scale.setScalar(scale);g.name=options.name||'Miniature winter traveller';
  const coat=new THREE.MeshStandardMaterial({color:coatColor,roughness:.88}),scarfMat=new THREE.MeshStandardMaterial({color:scarfColor,roughness:.98}),skin=new THREE.MeshStandardMaterial({color:0xd8b195,roughness:.93}),hair=new THREE.MeshStandardMaterial({color:0x3a2d27,roughness:.9});
  const body=group(g),bodyY=seated?.08:.30;
  const profile=[[0,0],[.125,0],[.145,.04],[.13,.20],[.105,.33],[.075,.35],[0,.35]].map(p=>new THREE.Vector2(...p));mesh(body,new THREE.LatheGeometry(profile,24),coat,0,bodyY,0);
  for(let s of [-1,1]){const lap=box(body,.04,.17,.018,coat,s*.045,bodyY+.24,.106,.012);lap.rotation.z=s*.2;}
  for(let y of [.09,.17,.25])ball(body,.011,M.brass,0,bodyY+y,.126,1,1,.5);
  cyl(body,.037,.045,.07,skin,0,bodyY+.37,0,16);ball(body,.09,skin,0,bodyY+.47,.003,.83,1.08,.88);
  mesh(body,new THREE.SphereGeometry(.093,20,14,0,TAU,0,Math.PI*.48),hair,0,bodyY+.51,-.005);
  for(let s of [-1,1]){ball(body,.008,M.black,s*.03,bodyY+.481,.075,1,.8,.55);ball(body,.016,skin,s*.075,bodyY+.46,.002,.7,1,.65);}ball(body,.015,skin,0,bodyY+.458,.083,.65,.8,1.25);
  if(hat==='cap'){cyl(body,.105,.099,.06,coat,0,bodyY+.56,0,28);box(body,.15,.018,.1,M.black,0,bodyY+.535,.069,.03);ball(body,.013,M.gold,0,bodyY+.56,.101);}
  else {mesh(body,new THREE.SphereGeometry(.104,20,14,0,TAU,0,Math.PI*.57),scarfMat,0,bodyY+.525,0);torus(body,.088,.018,scarfMat,0,bodyY+.525,0).rotation.x=Math.PI/2;ball(body,.032,scarfMat,0,bodyY+.635,0);}
  torus(body,.066,.031,scarfMat,0,bodyY+.366,0).rotation.x=Math.PI/2;const scarf=box(body,.058,.24,.025,scarfMat,.053,bodyY+.235,.127,.016);scarf.rotation.z=-.18;scarf.userData.dynamic=true;
  const arms=[];for(let s of [-1,1]){const arm=group(g,s*.116,bodyY+.29,0);ball(arm,.056,coat,0,-.015,0,1,.9,.9);beam(arm,[0,0,0],[s*.025,-.21,.015],.044,coat,.035,12);ball(arm,.039,scarfMat,s*.025,-.23,.018,.82,1,.82);arms.push(arm);batch(arm);}
  const legs=[];for(let s of [-1,1]){const leg=group(g,s*.064,seated?.02:.32,0);beam(leg,[0,0,0],[0,-.245,seated?.16:0],.041,M.darkwood,.035,12);ball(leg,.047,M.black,0,-.27,seated?.19:.026,.9,.68,1.65);legs.push(leg);batch(leg);}
  batch(body);return {g,body,arms,legs,scarf,baseY:g.position.y,options};
}

export function makePeople(root,M){
  const people=group(root);people.name='Six travellers · articulated miniature figures';
  const conductor=makeFigure(people,M,{x:.65,z:3.53,rotation:.3,coatColor:0x213e48,scarfColor:0xbaa57b,hat:'cap',name:'Stationmaster · waving the departure flag'});
  // A real cloth flag is attached to the stationmaster's moving arm.
  const flag=group(conductor.arms[1],.032,-.25,.02);beam(flag,[0,0,0],[0,-.25,0],.009,M.oak);
  const flagWind={uFlagTime:{value:0},uFlagGust:{value:0}},flagMat=new THREE.MeshStandardMaterial({color:0x83ad72,roughness:.91,side:THREE.DoubleSide});
  const bend=s=>{Object.assign(s.uniforms,flagWind);s.vertexShader='uniform float uFlagTime;uniform float uFlagGust;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.z+=sin(position.x*35.-uFlagTime*4.3)*.018*uv.x*(.2+uFlagGust);');};flagMat.onBeforeCompile=bend;flagMat.customProgramCacheKey=()=> 'station-flag-wind';
  const cloth=mesh(flag,new THREE.PlaneGeometry(.16,.11,12,6),flagMat,.075,-.16,0),flagDepth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});flagDepth.onBeforeCompile=bend;cloth.customDepthMaterial=flagDepth;
  const walker=makeFigure(people,M,{x:-.85,z:3.5,rotation:0,coatColor:0x8a4c3d,scarfColor:0xcab789,name:'Walking passenger · a suitcase and a wool scarf'});
  const bag=group(walker.arms[0],-.025,-.28,.02);box(bag,.18,.14,.085,M.leather,0,-.045,0,.021);torus(bag,.035,.009,M.darkwood,0,.038,0).scale.y=.6;for(let x of [-.055,.055])box(bag,.018,.14,.09,M.brass,x,-.045,0,.003);
  const parent=makeFigure(people,M,{x:3.55,z:1.45,rotation:-.4,coatColor:0x54695c,scarfColor:0xb89a61,name:'Mother · watching the snow'});
  const child=makeFigure(people,M,{x:3.10,z:2.38,scale:.73,rotation:.25,coatColor:0xa53432,scarfColor:0xe4d7b2,name:'Child · catching falling snow'});
  const reader=makeFigure(people,M,{x:-2.64,z:-.17,rotation:.28,coatColor:0x565465,scarfColor:0x8a3f39,seated:true,name:'Seated traveller · reading beside the luggage'});
  const book=group(reader.g,0,.28,.18,.05);box(book,.19,.014,.14,M.cream,0,0,0,.005);box(book,.195,.012,.145,M.engine,0,-.01,0,.006);reader.arms[0].rotation.x=-.65;reader.arms[1].rotation.x=-.65;
  const porter=makeFigure(people,M,{x:-.33,z:-2.62,rotation:2.1,coatColor:0x70654c,scarfColor:0x284849,hat:'cap',name:'Porter · waiting by the parcel trolley'});
  const all=[conductor,walker,parent,child,reader,porter];
  function update(t,gust=.2){
    flagWind.uFlagTime.value=t;flagWind.uFlagGust.value=gust;for(let i=0;i<all.length;i++){all[i].scarf.rotation.z=-.18+Math.sin(t*3+i)*.11*gust;all[i].scarf.rotation.x=Math.sin(t*2.2+i)*.10*gust;}
    conductor.arms[1].rotation.z=.14+Math.sin(t*.8)*.035;conductor.arms[1].rotation.x=.15;conductor.g.rotation.y=.3+Math.sin(t*.37)*.04;
    // The passenger walks a short, safe path in front of the platform and turns at each end.
    const cycle=t%20,moving=cycle<7||(cycle>10&&cycle<17),f=cycle<7?cycle/7:cycle<10?1:cycle<17?1-(cycle-10)/7:0;
    walker.g.position.x=-1.25+f*.8;walker.g.position.z=Math.sqrt(3.96*3.96-walker.g.position.x*walker.g.position.x)-.16;walker.g.rotation.y=cycle<8.5?Math.PI/2:-Math.PI/2;const step=moving?Math.sin(t*7)*.4:0;
    walker.legs[0].rotation.x=step;walker.legs[1].rotation.x=-step;walker.arms[0].rotation.x=-step*.48;walker.arms[1].rotation.x=step*.48;walker.g.position.y=walker.baseY+(moving?Math.abs(Math.sin(t*7))*.014:0);
    parent.g.rotation.y=-.4+Math.sin(t*.45)*.10;parent.arms[0].rotation.x=-.14+Math.sin(t*.8)*.035;
    child.arms[0].rotation.z=-.7-Math.sin(t*1.9)*.24;child.arms[1].rotation.z=.7+Math.sin(t*1.9+.6)*.25;child.g.position.y=child.baseY+Math.max(0,Math.sin(t*1.9))*.035;
    reader.g.rotation.z=Math.sin(t*.8)*.012;book.rotation.x=-.1+Math.sin(t*.6)*.025;porter.arms[0].rotation.x=-.35+Math.sin(t*.9)*.025;
  }
  return {update,count:all.length,people:all};
}

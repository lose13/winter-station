import * as THREE from 'three';
import {V,TAU,rand,mesh,box,cyl,ball,torus,beam,pipe,group,label,snowLump} from './craft.js';
import {GROUND,terrainHeight} from './world-model.js';

export const TRACK_R=3.22,TRACK_Z=-.16;
export function onTrack(a,r=TRACK_R){return V(Math.sin(a)*r,GROUND+.06,Math.cos(a)*r+TRACK_Z);}
function railCurve(r){const p=[];for(let i=0;i<=180;i++){const a=-1.85+i/180*3.98;p.push(V(Math.sin(a)*r,GROUND+.065,Math.cos(a)*r+TRACK_Z));}return new THREE.CatmullRomCurve3(p);}
export function makeTrack(root,M){const g=group(root);g.name='Curved rails, sleepers & snow drifts';
  for(let i=0;i<82;i++){const a=-1.85+i/81*3.98,v=onTrack(a),q=group(g,v.x,GROUND+.005,v.z,a);box(q,.105,.08,.91,M.darkwood,0,0,0,.012);for(let z of [-.245,.245]){box(q,.12,.04,.12,M.iron,0,.055,z,.008);for(let x of [-.043,.043])ball(q,.014,M.steel,x,.079,z);}if(i%4!==0){const z=rand()>.5?.38:-.38;snowLump(q,0,.08,z,.08,.035,.16,M.snow);}
    for(let j=0;j<4;j++){let z=rand(-.48,.48),x=rand(-.06,.06);ball(q,.035,M.gravel,x,-.01,z,1,.55,rand(.7,1.4));}}
  for(let r of [TRACK_R-.25,TRACK_R+.25]){const curve=railCurve(r);mesh(g,new THREE.TubeGeometry(curve,240,.032,8,false),M.steel);const foot=mesh(g,new THREE.TubeGeometry(curve,240,.046,8,false),M.iron);foot.position.y=-.045;for(let i=0;i<24;i++){let a=-1.82+i/23*3.9;if(a>-.58&&a<1.03)continue;let v=onTrack(a,r);const patch=snowLump(g,v.x,GROUND+.11,v.z,.14,.025,.04,M.snow);patch.rotation.y=a;}}
  // A narrow boarded crossing with countersunk metal nails.
  for(let x=-.95;x<-.05;x+=.115){const z=Math.sqrt(TRACK_R*TRACK_R-x*x)+TRACK_Z;box(g,.105,.04,.82,M.oak,x,GROUND+.10,z,.012);for(let s of [-1,1])ball(g,.008,M.iron,x,GROUND+.124,z+s*.31);}
  // Track end buffer stops with weathered red cross-bars.
  for(let a of [-1.82,2.1]){const v=onTrack(a);const q=group(g,v.x,GROUND+.08,v.z,a);for(let z of [-.28,.28]){beam(q,[-.12,0,z],[.06,.39,z],.025,M.iron);beam(q,[.23,0,z],[.06,.39,z],.025,M.iron);}box(q,.1,.11,.8,M.red,.05,.4,0,.012);snowLump(q,.05,.48,0,.11,.035,.4,M.snow);}
  return g;
}
function rivets(p,M,x1,x2,y,z,n=15){for(let i=0;i<n;i++)ball(p,.013,M.brass,x1+(x2-x1)*i/(n-1),y,z,1,1,.5);}
function wheel(p,M,x,y,z,r){const w=group(p,x,y,z);cyl(w,r,r,.09,M.black,0,0,0,40).rotation.x=Math.PI/2;const rim=torus(w,r-.025,.023,M.steel,0,0,z>0?.054:-.054);cyl(w,r*.72,r*.72,.1,M.engine,0,0,0,32).rotation.x=Math.PI/2;
  for(let i=0;i<12;i++){let a=i/12*TAU;beam(w,[Math.cos(a)*r*.18,Math.sin(a)*r*.18,z>0?.06:-.06],[Math.cos(a)*r*.77,Math.sin(a)*r*.77,z>0?.06:-.06],.017,M.brass,.014,6);}cyl(w,r*.19,r*.19,.15,M.brass,0,0,0,24).rotation.x=Math.PI/2;return w;}
export function makeTrain(root,M){
  makeTrack(root,M);const a=.65,v=onTrack(a),p=group(root,v.x,GROUND+.17,v.z,a);p.name='No. 24 · brass-riveted steam locomotive';
  // Chassis and buffer beam.
  box(p,2.5,.15,.92,M.black,-.03,.51,0,.025);box(p,2.29,.06,.94,M.red,-.04,.61,0,.018);
  for(let z of [-.53,.53]){
    for(let x of [-.65,-.01,.63])wheel(p,M,x,.31,z,.315);
    // Forged side rods, brass crank pins, springs and pistons.
    beam(p,[-.66,.24,z*1.14],[.65,.24,z*1.14],.025,M.steel);for(let x of [-.65,-.01,.63]){cyl(p,.045,.045,.04,M.brass,x,.24,z*1.18,16).rotation.x=Math.PI/2;for(let j=0;j<4;j++)box(p,.28,.014,.024,M.iron,x,.54+j*.02,z);}
    box(p,.33,.21,.18,M.black,.91,.35,z*.91,.05);beam(p,[.6,.26,z],[1.01,.36,z],.025,M.steel);
    box(p,2.21,.045,.12,M.iron,-.01,.69,z*.94,.008);rivets(p,M,-1.03,1,.61,z*.95,20);
  }
  // Lathed boiler, multiple metal bands, firebox and sand dome.
  cyl(p,.376,.376,1.57,M.engine,.23,1.04,0,64).rotation.z=-Math.PI/2;
  for(let x of [-.49,-.06,.46,.99])torus(p,.38,.025,M.brass,x,1.04,0).rotation.y=Math.PI/2;
  cyl(p,.395,.395,.14,M.black,1.03,1.04,0,64).rotation.z=Math.PI/2;
  cyl(p,.29,.29,.025,M.iron,1.115,1.04,0,48).rotation.z=Math.PI/2;
  torus(p,.285,.015,M.brass,1.135,1.04,0).rotation.y=Math.PI/2;
  for(let i=0;i<16;i++){let a=i/16*TAU;ball(p,.018,M.brass,1.145,1.04+Math.cos(a)*.33,Math.sin(a)*.33);}
  label(p,'24',.22,.22,1.16,1.03,0,{bg:'#1d302c',ink:'#e3c27e',fontScale:.7,border:false}).rotation.y=Math.PI/2;
  beam(p,[1.17,.94,-.12],[1.17,1.14,.12],.017,M.brass);beam(p,[1.17,1.14,-.12],[1.17,.94,.12],.017,M.brass);
  cyl(p,.18,.24,.3,M.black,.37,1.44,0,32);ball(p,.18,M.brass,.37,1.59,0,1,.43,1);
  cyl(p,.1,.15,.24,M.engine,-.19,1.43,0);ball(p,.11,M.brass,-.19,1.56,0,1,.4,1);
  // Flared chimney with rolled rim and soot-black interior.
  const chimneyProfile=[[0,0],[.13,0],[.12,.1],[.105,.32],[.19,.46],[.2,.5],[.145,.51],[.13,.45],[.08,.31],[.08,.12],[0,.12]].map(p=>new THREE.Vector2(...p));
  mesh(p,new THREE.LatheGeometry(chimneyProfile,40),M.black,.78,1.34,0);torus(p,.19,.018,M.brass,.78,1.83,0).rotation.x=Math.PI/2;
  for(let z of [-.34,.34]){
    pipe(p,[[-.63,1.27,z],[.12,1.3,z],[.64,1.25,z],[.87,.9,z],[.99,.55,z]],.023,M.brass);
    beam(p,[-.47,1.43,z],[.92,1.43,z],.014,M.steel);for(let x of [-.4,.22,.8])beam(p,[x,1.27,z],[x,1.43,z],.013,M.iron);
  }
  // Enclosed cab: four walls, glazed windows, panel seams and arched roof.
  box(p,.79,.79,.85,M.engine,-.92,1.1,0,.025);
  for(let z of [-.438,.438]){
    box(p,.65,.43,.035,M.darkwood,-.92,1.25,z,.035);box(p,.56,.34,.038,M.warm,-.92,1.28,z*1.05,.035);box(p,.024,.36,.04,M.brass,-.91,1.28,z*1.11);
    box(p,.66,.06,.05,M.brass,-.92,.89,z*1.04,.012);label(p,'NORD · 24',.55,.15,-.92,.79,z*1.06,{bg:'#1d3936',ink:'#d2b97f',fontScale:.49,border:false}).rotation.y=z<0?Math.PI:0;
    rivets(p,M,-1.27,-.57,.72,z,8);for(let i=0;i<3;i++){box(p,.32,.04,.18,M.iron,-1.13,.39+i*.11,z*1.13,.01);}
    pipe(p,[[-1.3,.7,z*1.1],[-1.3,1.46,z*1.1]],.018,M.brass);
  }
  for(let z of [-.21,.21]){box(p,.028,.33,.3,M.warm,-.512,1.27,z,.03);box(p,.03,.02,.35,M.brass,-.49,1.11,z);}
  // Smooth custom barrel roof, with naturally broken snow along the ridge.
  for(let i=0;i<11;i++)snowLump(p,-1.4+i*.091,1.83+Math.sin(i*.8)*.007,0,.12,.055,.44,M.snow);
  box(p,.87,.07,1.08,M.black,-.94,1.68,0,.035);snowLump(p,-.93,1.73,0,.48,.09,.49,M.snow);
  // Front headlamp, couplers, bell and cowcatcher.
  cyl(p,.12,.12,.15,M.brass,1.14,1.41,0).rotation.z=-Math.PI/2;cyl(p,.085,.085,.01,M.ember,1.223,1.41,0,32).rotation.z=-Math.PI/2;
  box(p,.16,.16,.97,M.red,1.28,.48,0,.02);for(let z of [-.33,.33]){cyl(p,.06,.06,.21,M.iron,1.39,.49,z,20).rotation.z=Math.PI/2;cyl(p,.105,.105,.035,M.black,1.51,.49,z,24).rotation.z=Math.PI/2;}
  for(let z=-.42;z<=.43;z+=.11)beam(p,[1.32,.41,z*.68],[1.52,.15,z],.019,M.iron);beam(p,[1.52,.15,-.45],[1.52,.15,.45],.022,M.iron);
  cyl(p,.08,.13,.12,M.brass,.02,1.53,.24,24);beam(p,[-.06,1.65,.24],[.1,1.65,.24],.015,M.brass);
  pipe(p,[[1.34,.46,0],[1.6,.46,0],[1.64,.36,0]],.026,M.iron);
  // Snow tucked along upper horizontal surfaces, leaving the moving machinery visible.
  for(let i=0;i<10;i++)snowLump(p,-.45+i*.145,1.405,rand(-.025,.025),.12,.035,.17,M.snow);
  const headPos=p.localToWorld(V(1.24,1.41,0));const head=new THREE.PointLight(0xffc378,3.4,2.4,2);head.position.copy(headPos);root.add(head);
  // Mahogany passenger coach behind the engine, placed tangent to the same curve.
  const ca=-.245,cv=onTrack(ca),car=group(root,cv.x,GROUND+.17,cv.z,ca);car.name='Nord Express · illuminated passenger carriage';
  box(car,1.94,.13,.92,M.black,0,.42,0,.02);box(car,1.78,1.08,.86,M.red,0,1,0,.03);box(car,1.82,.13,.91,M.engine,0,.64,0,.02);
  for(let z of [-.46,.46]){
    for(let x of [-.67,.67])wheel(car,M,x,.24,z,.22);
    for(let x of [-.59,-.2,.2,.59]){box(car,.3,.49,.027,M.darkwood,x,1.16,z,.022);box(car,.244,.415,.03,M.warm,x,1.16,z*1.055,.016);box(car,.021,.42,.035,M.brass,x,1.16,z*1.1);box(car,.32,.025,.045,M.brass,x,.93,z*1.06);}
    for(let x=-.84;x<.89;x+=.12)box(car,.009,.3,.01,M.darkwood,x,.8,z);box(car,1.76,.028,.035,M.brass,0,1.46,z);rivets(car,M,-.83,.83,.58,z,18);
    label(car,'N O R D   E X P R E S S',1.4,.13,0,.72,z*1.07,{bg:'#66392e',ink:'#ddc793',fontScale:.47,border:false}).rotation.y=z<0?Math.PI:0;
  }
  for(let x of [-.92,.92]){box(car,.025,.75,.34,M.engine,x,1.02,0,.025);box(car,.03,.4,.26,M.warm,x*1.02,1.15,0,.02);for(let z of [-.36,.36]){beam(car,[x,.47,z],[x,1.47,z],.015,M.brass);for(let i=0;i<2;i++)box(car,.16,.04,.4,M.iron,x,.32+i*.13,z*.5,.01);}}
  // Barrel-vaulted coach roof built as a continuous surface.
  const pos=[],idx=[],uv=[];for(let i=0;i<=20;i++)for(let j=0;j<=36;j++){let x=(i/20-.5)*2.07,z=(j/36-.5)*1.05,y=1.51+Math.sqrt(Math.max(0,.66*.66-z*z))*.43;pos.push(x,y,z);uv.push(i/20,j/36);if(i<20&&j<36){let k=i*37+j;idx.push(k,k+1,k+37,k+1,k+38,k+37);}}
  let geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();mesh(car,geo,M.snow);for(let i=0;i<15;i++)snowLump(car,(i/14-.5)*1.99,1.68,.48,.12,.035,.08,M.snow);
  for(let x of [-.6,0,.6]){cyl(car,.055,.065,.07,M.black,x,1.85,0);snowLump(car,x,1.9,0,.075,.03,.07,M.snow);}
  // Flexible coupling between cars follows the intervening arc.
  const c1=onTrack(.225);box(root,.1,.1,.12,M.iron,c1.x,GROUND+.59,c1.z).rotation.y=.2;
  root.updateMatrixWorld(true);return {steamOrigin:p.localToWorld(V(.78,1.91,0)),pressureOrigin:p.localToWorld(V(.02,1.67,.24)),head,headPos:p.localToWorld(V(1.23,1.41,0))};
}

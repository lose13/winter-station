import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

let seed=1924;
export function rand(a=0,b=1){seed=(seed*1664525+1013904223)>>>0;return a+(b-a)*(seed/4294967296);}
export const TAU=Math.PI*2;
export const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
export function texture(w,h,draw,srgb=true){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=srgb?THREE.SRGBColorSpace:THREE.NoColorSpace;t.anisotropy=8;return t;}
function noiseMap(type){return texture(1024,1024,(c,w,h)=>{
  if(type==='wood'){
    c.fillStyle='#39231b';c.fillRect(0,0,w,h);
    for(let i=0;i<5000;i++){const y=rand(0,h),s=rand(.2,2.5);c.strokeStyle=`rgba(${rand()>.5?'178,116,68':'8,6,6'},${rand(.04,.2)})`;c.lineWidth=s;c.beginPath();c.moveTo(0,y);for(let x=0;x<=w;x+=16)c.lineTo(x,y+Math.sin(x*.014+y*.028)*3+Math.sin(x*.043+y*.04));c.stroke();}
    for(let i=0;i<9;i++){let x=rand(0,w),y=rand(0,h);for(let j=1;j<30;j++){c.strokeStyle='#160e0b26';c.lineWidth=.8;c.beginPath();c.ellipse(x,y,j*rand(2,3),j*.42,0,0,TAU);c.stroke();}}
  }else if(type==='brick'){
    c.fillStyle='#69635b';c.fillRect(0,0,w,h);for(let row=0;row<16;row++)for(let col=-1;col<9;col++){
      let x=col*128+(row%2)*64,y=row*64;c.fillStyle=`rgb(${rand(101,132)},${rand(57,74)},${rand(43,58)})`;c.fillRect(x+3,y+3,122,58);c.fillStyle='#e3b6a615';c.fillRect(x+4,y+4,120,3);
    }for(let i=0;i<50000;i++){c.fillStyle=rand()>.5?'#20171018':'#f0ddc416';c.fillRect(rand(0,w),rand(0,h),rand(.5,2),rand(.5,2));}
  }else if(type==='plaster'){
    c.fillStyle='#c6bca5';c.fillRect(0,0,w,h);for(let i=0;i<60000;i++){c.fillStyle=rand()>.5?'#3e3a2b13':'#fffae41b';c.fillRect(rand(0,w),rand(0,h),rand(1,4),rand(1,4));}
  }else if(type==='snow'){
    c.fillStyle='#e1ebee';c.fillRect(0,0,w,h);for(let i=0;i<45000;i++){c.fillStyle=rand()>.5?'#92b1c214':'#ffffff70';c.fillRect(rand(0,w),rand(0,h),rand(.4,2),rand(.4,2));}
  }
});}
export function createMaterials(){
  const wood=noiseMap('wood'),brick=noiseMap('brick'),plaster=noiseMap('plaster'),snow=noiseMap('snow');
  const litGlass=texture(128,256,(c,w,h)=>{const g=c.createRadialGradient(w*.46,h*.66,5,w*.48,h*.56,h*.72);g.addColorStop(0,'#f0ddad');g.addColorStop(.4,'#c3ab7e');g.addColorStop(.78,'#7b6a49');g.addColorStop(1,'#423c2d');c.fillStyle=g;c.fillRect(0,0,w,h);for(let i=0;i<1500;i++){c.fillStyle=rand()>.6?'#f5e4c015':'#383c3410';c.fillRect(rand(0,w),rand(0,h),1,rand(1,3));}});
  const windowMat=new THREE.MeshStandardMaterial({color:0xffffff,map:litGlass,emissive:0xffcda0,emissiveMap:litGlass,emissiveIntensity:.36,roughness:.23,metalness:.04});windowMat.userData.noCastShadow=true;
  const lampGlass=new THREE.MeshPhysicalMaterial({color:0xe5d3aa,map:litGlass,roughness:.18,transmission:.37,thickness:.015,ior:1.46,emissive:0xffc48a,emissiveIntensity:.17});lampGlass.userData.noCastShadow=true;
  // Share the same physical-glass texture sample for color and emission. A second
  // sampler would exceed WebGL's 16-unit limit with the two interior shadow lights.
  lampGlass.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#ifdef USE_MAP\n totalEmissiveRadiance *= texture2D(map, vMapUv).rgb;\n#endif');};lampGlass.customProgramCacheKey=()=> 'station-lantern-shared-map';
  const filament=new THREE.MeshStandardMaterial({color:0xffecd0,emissive:0xffc18b,emissiveIntensity:5,roughness:.3});filament.userData.noCastShadow=true;
  const frost=texture(128,256,(c,w,h)=>{const edge=c.createLinearGradient(0,0,w,0);edge.addColorStop(0,'rgba(231,241,238,.7)');edge.addColorStop(.15,'rgba(245,246,230,.08)');edge.addColorStop(.5,'rgba(255,246,220,.025)');edge.addColorStop(.85,'rgba(245,246,230,.08)');edge.addColorStop(1,'rgba(231,241,238,.7)');c.fillStyle=edge;c.fillRect(0,0,w,h);for(let side of [-1,1])for(let i=0;i<16;i++){const x=side<0?4:124,y=12+i*15;c.strokeStyle='rgba(226,242,240,.3)';c.lineWidth=.8;c.beginPath();c.moveTo(x,y+10);c.lineTo(x-side*(4+i%4),y-9);for(let j=0;j<4;j++){c.moveTo(x-side*(1+j),y+6-j*4);c.lineTo(x-side*(8+j*1.2),y+4-j*5);}c.stroke();}});
  const windowGlass=new THREE.MeshStandardMaterial({color:0xffe5c4,map:frost,roughness:.24,metalness:.08,transparent:true,opacity:.36,emissive:0xffba70,emissiveIntensity:.05,depthWrite:false,side:THREE.DoubleSide});windowGlass.userData.noCastShadow=true;
  const mat=(color,roughness=.6,metalness=0,opts={})=>new THREE.MeshStandardMaterial({color,roughness,metalness,...opts});
  return {
    walnut:mat(0xb9a9a1,.38,0,{map:wood,bumpMap:wood,bumpScale:.035}),
    darkwood:mat(0x3a2319,.72), oak:mat(0x705039,.62,0,{map:wood}),
    brass:mat(0xb89553,.31,.82),gold:mat(0xd3b46c,.27,.8),aged:mat(0x5d533b,.53,.72),
    black:mat(0x142025,.36,.65),iron:mat(0x283638,.52,.6),steel:mat(0x8a999e,.3,.88),
    engine:mat(0x264442,.36,.65),red:mat(0x693b32,.49,.3),cream:mat(0xcab99a,.58),
    brick:mat(0xffffff,.93,0,{map:brick,bumpMap:brick,bumpScale:.022}),
    plaster:mat(0xffffff,.92,0,{map:plaster,bumpMap:plaster,bumpScale:.014}),
    roof:mat(0x28434c,.7,.2), snow:mat(0xffffff,.82,0,{map:snow,bumpMap:snow,bumpScale:.012}),
    snowShade:mat(0xc2d7df,.92),pine:mat(0x1a3631,.9),pineLight:mat(0x2e4b3d,.95),
    trunk:mat(0x554132,.91),stone:mat(0x889394,.94),gravel:mat(0x536567,.94),
    leather:mat(0x804e32,.72),cloth:mat(0x67756a,.96),glass:mat(0x373d2b,.2,.25),
    warm:windowMat,windowGlass,lampGlass,filament,
    ember:new THREE.MeshStandardMaterial({color:0xffc677,emissive:0xff952c,emissiveIntensity:3.1}),
    signalRed:new THREE.MeshStandardMaterial({color:0xff7960,emissive:0xff4020,emissiveIntensity:2.1}),
    signalGreen:new THREE.MeshStandardMaterial({color:0xb6dca3,emissive:0x83e58b,emissiveIntensity:1.8})
  };
}
const geoCache=new Map();
export function mesh(parent,geo,mat,x=0,y=0,z=0){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
export function box(p,w,h,d,m,x=0,y=0,z=0,bevel=0){let k=`b${w}_${h}_${d}_${bevel}`;if(!geoCache.has(k))geoCache.set(k,bevel?new RoundedBoxGeometry(w,h,d,2,bevel):new THREE.BoxGeometry(w,h,d));return mesh(p,geoCache.get(k),m,x,y,z);}
export function cyl(p,rt,rb,h,m,x=0,y=0,z=0,segments=32){const k=`c${rt}_${rb}_${h}_${segments}`;if(!geoCache.has(k))geoCache.set(k,new THREE.CylinderGeometry(rt,rb,h,segments));return mesh(p,geoCache.get(k),m,x,y,z);}
export function ball(p,r,m,x=0,y=0,z=0,sx=1,sy=1,sz=1){const k='s'+r;if(!geoCache.has(k))geoCache.set(k,new THREE.SphereGeometry(r,14,10));const b=mesh(p,geoCache.get(k),m,x,y,z);b.scale.set(sx,sy,sz);return b;}
export function torus(p,r,t,m,x=0,y=0,z=0,arc=TAU){return mesh(p,new THREE.TorusGeometry(r,t,8,64,arc),m,x,y,z);}
export function beam(p,a,b,r,mat,r2=r,segments=8){a=Array.isArray(a)?V(...a):a;b=Array.isArray(b)?V(...b):b;const d=b.clone().sub(a),o=cyl(p,r2,r,d.length(),mat,...a.clone().add(b).multiplyScalar(.5).toArray(),segments);o.quaternion.setFromUnitVectors(V(0,1,0),d.normalize());return o;}
export function pipe(p,points,r,mat){return mesh(p,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(pt=>V(...pt))),Math.max(16,points.length*6),r,8,false),mat);}
export function group(p,x=0,y=0,z=0,ry=0){const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;p.add(g);return g;}
export function label(p,text,w,h,x,y,z,opts={}){
  const t=texture(1024,Math.round(1024*h/w),(c,cw,ch)=>{
    c.fillStyle=opts.bg||'#182e31';c.fillRect(0,0,cw,ch);
    if(opts.border!==false){c.strokeStyle=opts.ink||'#e0c897';c.lineWidth=4;c.strokeRect(12,12,cw-24,ch-24);c.lineWidth=1;c.strokeRect(20,20,cw-40,ch-40);}
    c.fillStyle=opts.ink||'#e0c897';c.textAlign='center';c.textBaseline='middle';c.font=`${opts.weight||400} ${Math.floor(ch*(opts.fontScale||.46))}px ${opts.font||'Georgia'}`;
    const lines=text.split('\n');lines.forEach((l,i)=>c.fillText(l,cw/2,ch/2+(i-(lines.length-1)/2)*ch*.31,cw*.91));
  });
  const mat=new THREE.MeshStandardMaterial({map:t,roughness:.53,metalness:opts.metalness||.12});
  const o=mesh(p,new THREE.PlaneGeometry(w,h),mat,x,y,z);o.castShadow=false;return o;
}
export function arcShape(w,h){const s=new THREE.Shape();const r=w/2;s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.lineTo(-r,0);return s;}
export function extrude(p,shape,depth,mat,x,y,z,bevel=.025){const g=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:!!bevel,bevelThickness:bevel,bevelSize:bevel,bevelSegments:2,steps:1,curveSegments:24});return mesh(p,g,mat,x,y,z);}
export function snowLump(p,x,y,z,sx=.2,sy=.07,sz=.15,m){return ball(p,1,m,x,y,z,sx,sy,sz);}
export function batch(root){
  root.updateMatrixWorld(true);const buckets=new Map();const inv=new THREE.Matrix4().copy(root.matrixWorld).invert();const remove=[];
  root.traverse(o=>{if(!o.isMesh||o.userData.dynamic||Array.isArray(o.material))return;const key=o.material.uuid;let b=buckets.get(key);if(!b){b={mat:o.material,geos:[]};buckets.set(key,b);}const g=o.geometry.clone();if(g.index)g.copy(g.toNonIndexed());const matrix=new THREE.Matrix4().multiplyMatrices(inv,o.matrixWorld);g.applyMatrix4(matrix);g.deleteAttribute('uv1');g.deleteAttribute('tangent');b.geos.push(g);remove.push(o);});
  remove.forEach(o=>o.removeFromParent());let total=0;for(const b of buckets.values()){const g=mergeGeometries(b.geos,false);if(g){const o=mesh(root,g,b.mat);if(b.mat.userData.noCastShadow)o.castShadow=false;o.name='Batched · '+b.mat.uuid.slice(0,6);total+=g.attributes.position.count/3;}b.geos.forEach(g=>g.dispose());}return total;
}

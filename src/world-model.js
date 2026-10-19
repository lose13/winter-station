import * as THREE from 'three';
import {V,TAU,rand,mesh,box,cyl,ball,torus,beam,pipe,group,label,arcShape,extrude,snowLump,texture,batch} from './craft.js';

export const GROUND=1.49;
export function terrainHeight(x,z){return GROUND+.045*Math.sin(x*1.7+z*.8)+.025*Math.sin(z*3.3-x*.9)+.018*Math.cos(x*4.8+z*5);}

export function makeBase(root,M){
  const g=group(root);g.name='Turned walnut & engraved brass';
  const profile=[[0,-.18],[3.8,-.18],[4.22,-.17],[4.43,-.08],[4.59,.02],[4.67,.11],[4.68,.19],[4.62,.24],[4.53,.27],[4.46,.33],[4.44,.4],[4.44,.69],[4.47,.76],[4.6,.82],[4.67,.91],[4.67,1.02],[4.59,1.10],[4.39,1.14],[4.36,1.27],[0,1.27]].map(a=>new THREE.Vector2(...a));
  mesh(g,new THREE.LatheGeometry(profile,192),M.walnut);
  for(const [r,y,t] of [[4.65,.18,.035],[4.55,.3,.022],[4.46,.4,.018],[4.46,.72,.028],[4.64,.91,.045],[4.55,1.1,.025],[4.36,1.25,.055]]){const o=torus(g,r,t,M.brass,0,y,0);o.rotation.x=Math.PI/2;}
  cyl(g,4.32,4.32,.09,M.aged,0,1.25,0,160);
  // Fine radial fluting, engraved botanical scrolls and tiny brass studs.
  for(let i=0;i<144;i++){let a=i/144*TAU;const q=group(g,Math.sin(a)*4.45,.55,Math.cos(a)*4.45,a);box(q,.015,.23,.012,M.darkwood,0,0,0,.004);if(i%4===0)ball(q,.023,M.aged,0,.135,.012);}
  for(let i=0;i<40;i++){let a=i/40*TAU;const q=group(g,Math.sin(a)*4.475,.58,Math.cos(a)*4.475,a);for(let side of [-1,1]){pipe(q,[[0,-.1,0],[side*.08,-.04,.004],[side*.14,.07,.004],[side*.07,.1,.004],[side*.04,.055,.004]],.007,M.aged);for(let j=0;j<3;j++){const l=ball(q,.033,M.aged,side*(.05+j*.023),-.015+j*.032,.005,1.3,.4,.15);l.rotation.z=-side*.7;}}}
  const plaque=group(g,0,.6,4.49);box(plaque,2.35,.48,.07,M.brass,0,0,0,.06);box(plaque,2.21,.36,.02,M.aged,0,0,.044,.025);
  label(plaque,'W I N T E R   S T A T I O N',2.1,.25,0,.012,.058,{bg:'#534b35',ink:'#ead9ab',fontScale:.43,border:false,metalness:.55});
  for(let x of [-1.08,1.08]){ball(plaque,.027,M.gold,x,0,.065,1,1,.3);box(plaque,.022,.005,.006,M.darkwood,x,0,.075);}
  // Small manufacturing medallion on the reverse.
  const back=group(g,0,.55,-4.47,Math.PI);label(back,'THE LITTLE WORLD · 001\nWINTER / 1924',1.35,.32,0,0,.02,{fontScale:.28,bg:'#2c231c',ink:'#bba274'});
  return g;
}

export function makeGround(root,M){
  const g=group(root);g.name='Sculpted snow & slate footpath';cyl(g,4.29,4.29,.19,M.snowShade,0,1.31,0,160);
  const seg=160,rings=36,pts=[],uv=[],idx=[];
  for(let r=0;r<=rings;r++)for(let a=0;a<=seg;a++){let th=a/seg*TAU,rad=4.29*r/rings,x=Math.cos(th)*rad,z=Math.sin(th)*rad;pts.push(x,terrainHeight(x,z)-Math.pow(rad/4.29,18)*.055,z);uv.push(x/3,z/3);if(r<rings&&a<seg){let k=r*(seg+1)+a;idx.push(k,k+seg+1,k+1,k+1,k+seg+1,k+seg+2);}}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();mesh(g,geo,M.snow);
  // Individual worn paving slabs, snow in the joints.
  for(let z=-.1;z<2.2;z+=.32)for(let x=-1.1;x<.1;x+=.32){const p=box(g,rand(.23,.28),.055,rand(.23,.29),M.stone,x+rand(-.02,.02),terrainHeight(x,z)+.012,z+rand(-.02,.02),.035);p.rotation.y=rand(-.09,.09);if(rand()>.48)snowLump(g,x+.05,p.position.y+.03,z+.07,.11,.025,.08,M.snow);}
  // Paired, slightly sunk boot prints lead from the crossing to the platform.
  const footprintShape=new THREE.Shape();footprintShape.absellipse(0,0,.047,.095,0,TAU,false,0);
  for(let i=0;i<17;i++){let z=1.9-i*.143,x=-.44+Math.sin(i*.24)*.18+(i%2?.075:-.075);const o=mesh(g,new THREE.ShapeGeometry(footprintShape),M.snowShade,x,terrainHeight(x,z)+.008,z);o.rotation.x=-Math.PI/2;o.rotation.z=(i%2?.14:-.14);box(g,.049,.004,.036,M.snowShade,x,terrainHeight(x,z)+.01,z+.077,.012);}
  for(let i=0;i<140;i++){let a=rand(0,TAU),r=rand(3.6,4.15),x=Math.cos(a)*r,z=Math.sin(a)*r;if(z>1.6)continue;ball(g,.035,M.gravel,x,terrainHeight(x,z)-.005,z,rand(.7,1.8),rand(.3,.7),rand(.6,1.2));}
  return g;
}

function archedWindow(p,M,x,y,z,ry=0,w=.57,h=1.09){
  const q=group(p,x,y,z,ry);
  // Real annular frames surround an open aperture. No opaque luminous backing.
  const trim=arcShape(w+.11,h+.06);trim.holes.push(archHole(0,.03,w,h));extrude(q,trim,.065,M.cream,0,-.03,-.045,.008);
  const frame=arcShape(w,h);frame.holes.push(archHole(0,.035,w-.09,h-.08));extrude(q,frame,.035,M.darkwood,0,0,.027,.005);
  const pane=mesh(q,new THREE.ShapeGeometry(arcShape(w-.09,h-.08)),M.windowGlass,0,.035,.068);pane.castShadow=false;pane.renderOrder=1;
  box(q,.035,h-.07,.036,M.darkwood,0,h*.5,.083);box(q,w-.07,.035,.036,M.darkwood,0,h*.46,.084);box(q,w-.10,.026,.036,M.darkwood,0,h*.74,.084);
  box(q,w+.2,.07,.18,M.cream,0,-.045,.045,.015);snowLump(q,0,-.005,.084,w*.65,.04,.1,M.snow);
  for(let side of [-1,1]){box(q,.13,h-.18,.04,M.engine,side*(w*.5+.16),h*.43,.007,.012);for(let t=0;t<7;t++)box(q,.105,.018,.025,M.black,side*(w*.5+.16),.12+t*.103,.032);}
  // Narrow folded curtains are behind the glass, leaving the room and light unobstructed.
  for(let side of [-1,1])for(let j=0;j<3;j++){const cloth=box(q,.026,h*.64,.023,M.cloth,side*(w*.42-j*.012),h*.46,-.09-j*.008,.01);cloth.rotation.z=side*.025;}
  q.updateWorldMatrix(true,false);const center=q.localToWorld(V(0,.035+(h-.08)/2,.075)),normal=V(0,0,1).transformDirection(q.matrixWorld);
  p.userData.windows.push({center,normal,width:w-.09,height:h-.08});
  return q;
}

function archHole(x,y,w,h){
  const r=w/2,path=new THREE.Path();path.moveTo(x-r,y);path.lineTo(x-r,y+h-r);path.absarc(x,y+h-r,r,Math.PI,0,true);path.lineTo(x+r,y);path.closePath();return path;
}

function perforatedWall(p,M,width,z,rotation,windows){
  const wall=group(p,0,0,z,rotation),shape=new THREE.Shape();shape.moveTo(-width/2,.725);shape.lineTo(width/2,.725);shape.lineTo(width/2,2.355);shape.lineTo(-width/2,2.355);shape.closePath();
  for(const [x,y,w,h]of windows)shape.holes.push(archHole(x,y,w,h));extrude(wall,shape,.105,M.plaster,0,0,-.105,0);return wall;
}

function stationInterior(p,M){
  const g=group(p);g.name='Visible waiting room · ticket desk, benches and shaded pendants';
  box(g,3.06,.045,1.96,M.oak,0,.755,0);box(g,3.04,.045,1.94,M.cream,0,2.235,0);
  for(let x=-1.45;x<1.5;x+=.16)box(g,.008,.004,1.92,M.darkwood,x,.781,0);
  // Ticket counter and shelves create silhouettes and parallax through each real window.
  box(g,1.05,.46,.3,M.engine,-.08,1.01,-.53,.025);box(g,1.12,.055,.37,M.oak,-.08,1.27,-.53,.016);
  for(let x of [-.38,.18]){box(g,.44,.32,.018,M.darkwood,x,1.02,-.366,.012);box(g,.38,.26,.021,M.engine,x,1.02,-.352,.01);}
  box(g,.48,.06,.19,M.brass,-.09,1.32,-.52,.01);box(g,.15,.13,.16,M.black,.21,1.35,-.52,.018);
  for(let x of [-1.24,1.24]){box(g,.28,.065,.91,M.oak,x,.99,0,.012);box(g,.045,.32,.91,M.engine,x+Math.sign(x)*.12,1.17,0,.012);for(let z of [-.31,.31])box(g,.04,.24,.04,M.darkwood,x,.87,z);}
  for(let x of [-.82,.82]){
    beam(g,[x,2.22,-.08],[x,1.96,-.08],.01,M.brass);const shade=mesh(g,new THREE.SphereGeometry(.14,24,12,0,TAU,0,Math.PI*.52),M.cream,x,1.94,-.08);shade.scale.y=.57;
    torus(g,.139,.009,M.brass,x,1.935,-.08).rotation.x=Math.PI/2;ball(g,.048,M.filament,x,1.90,-.08);
    const light=new THREE.PointLight(0xffbd75,6,3,2);light.position.set(x,1.85,-.08);g.add(light);p.userData.interiorLights.push(light);
  }
  const poster=group(g,0,1.64,-.93);label(poster,'MERRY CHRISTMAS\nNORD EXPRESS',.78,.34,0,0,0,{bg:'#33423b',ink:'#f4d6a0',fontScale:.25});
  const parcels=group(g,-.7,.78,-.57);box(parcels,.25,.2,.23,M.red,0,.1,0,.016);box(parcels,.035,.205,.24,M.gold,0,.1,0);box(parcels,.255,.205,.027,M.gold,0,.1,0);
}

function roofSnow(p,M){
  const nx=58,nz=42,arr=[],uv=[],idx=[];for(let i=0;i<=nx;i++)for(let j=0;j<=nz;j++){
    let x=(i/nx-.5)*3.92,z=(j/nz-.5)*2.76,edge=Math.sin(j*.9)*.018+Math.sin(j*2.3)*.012;
    x+=Math.sign(x)*edge*Math.pow(Math.abs(x)/1.96,12);let y=3.36-Math.abs(x)*.62+.115+Math.sin(x*7+z*3)*.017+Math.sin(x*15-z*8)*.009;
    y-=Math.pow(Math.abs(z)/1.38,30)*.055;arr.push(x,y,z);uv.push(x,z);const bare=(x>1.46+Math.sin(z*12)*.075&&z>.33)||(x< -1.62+Math.sin(z*9)*.07&&z<-.4);if(i<nx&&j<nz&&!bare){let k=i*(nz+1)+j;idx.push(k,k+1,k+nz+1,k+1,k+nz+2,k+nz+1);}}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(arr,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();mesh(p,geo,M.snow);
  for(let side of [-1,1]){for(let j=0;j<28;j++)snowLump(p,side*1.93,2.25+rand(-.015,.025),(j/27-.5)*2.69,rand(.07,.12),rand(.055,.08),rand(.08,.12),M.snow);for(let j=0;j<13;j++){let z=rand(-1.3,1.3);const ice=cyl(p,0,.015,rand(.06,.22),M.snowShade,side*1.96,2.16-rand(0,.04),z,7);}}
}

export function makeStation(root,M){
  const p=group(root,-.82,GROUND+.08,-.88);p.name='Winter Station · individually modelled architecture';
  p.userData.windows=[];p.userData.interiorLights=[];
  box(p,3.43,.18,2.35,M.stone,0,0,0,.06);box(p,3.28,.66,2.15,M.brick,0,.4,0);
  perforatedWall(p,M,3.25,1.06,0,[[-1.03,.83,.57,1.06],[1.03,.83,.57,1.06]]);
  perforatedWall(p,M,3.25,-1.06,Math.PI,[[-1.02,.84,.51,1.03],[0,.84,.51,1.03],[1.02,.84,.51,1.03]]);
  for(let side of [-1,1]){const wall=perforatedWall(p,M,2.12,0,side*Math.PI/2,[[-.49,.84,.54,1.06],[.47,.84,.54,1.06]]);wall.position.x=side*1.625;}
  stationInterior(p,M);
  box(p,3.4,.09,2.23,M.cream,0,.75,0,.015);box(p,3.36,.09,2.25,M.darkwood,0,2.26,0);
  for(let x of [-1.61,1.61])for(let z of [-1.07,1.07]){box(p,.11,2.28,.11,M.darkwood,x,1.22,z,.012);for(let j=0;j<5;j++)box(p,.22,.12,.22,M.cream,x,.13+j*.14,z,.015);}
  for(let z of [-1.077,1.077]){
    for(let x of [-.58,.58])box(p,.072,1.38,.055,M.darkwood,x,1.5,z);
    for(let x of [-1.08,1.08]){beam(p,[x-.4,2.14,z],[x+.4,1.63,z],.028,M.darkwood);beam(p,[x+.4,2.14,z],[x-.4,1.63,z],.028,M.darkwood);}
    box(p,3.2,.067,.07,M.darkwood,0,1.92,z);
  }
  // Gables are closed solids, with timber trusses on both elevations.
  const tri=new THREE.Shape();tri.moveTo(-1.69,2.25);tri.lineTo(1.69,2.25);tri.lineTo(0,3.3);tri.closePath();extrude(p,tri,2.14,M.plaster,0,0,-1.07,0);
  for(let z of [-1.088,1.088]){beam(p,[-1.73,2.25,z],[0,3.34,z],.055,M.darkwood);beam(p,[0,3.34,z],[1.73,2.25,z],.055,M.darkwood);box(p,.08,.86,.075,M.darkwood,0,2.77,z);for(let x of [-.7,.7])beam(p,[0,2.35,z],[x,2.86,z],.035,M.darkwood);}
  for(let side of [-1,1]){let roof=box(p,2.29,.12,2.7,M.roof,side*.96,2.76,0,.02);roof.rotation.z=-side*.554;for(let z=-1.28;z<=1.3;z+=.18){const rib=beam(p,[0,3.35,z],[side*1.97,2.13,z],.012,M.black);}}
  roofSnow(p,M);
  for(let z of [-1.4,1.4]){beam(p,[-1.99,2.17,z],[0,3.4,z],.043,M.darkwood);beam(p,[0,3.4,z],[1.99,2.17,z],.043,M.darkwood);}
  for(let x of [-1.98,1.98]){beam(p,[x,2.13,-1.4],[x,2.13,1.4],.052,M.aged);pipe(p,[[x,2.12,-1.15],[x+.06,2.03,-1.15],[x+.07,.2,-1.15],[x+.14,.14,-1.15]],.032,M.aged);for(let y of [.5,1.3,1.9])torus(p,.042,.009,M.brass,x+.065,y,-1.15).rotation.x=Math.PI/2;}
  // Door with inset panels, a glazed transom and brass hardware.
  const d=group(p,0,.12,1.09);extrude(d,arcShape(.78,1.88),.07,M.cream,0,0,0);extrude(d,arcShape(.65,1.79),.03,M.engine,0,.035,.08);
  for(let x of [-.16,.16]){box(d,.23,.55,.03,M.darkwood,x,.37,.135,.016);box(d,.2,.48,.025,M.engine,x,.37,.154,.015);box(d,.23,.65,.025,M.warm,x,1.03,.14,.025);}
  box(d,.035,1.51,.03,M.brass,0,.87,.17);box(d,.6,.045,.04,M.darkwood,0,1.4,.17);ball(d,.032,M.gold,.22,.73,.2);box(d,.04,.14,.018,M.brass,.22,.75,.177,.01);
  for(let j=0;j<3;j++){box(p,1.15+j*.21,.085,.25,M.stone,0,-.02-j*.07,1.2+j*.2,.025);snowLump(p,.33,-.01-j*.07,1.2+j*.2,.18,.035,.13,M.snow);}
  for(let x of [-1.03,1.03])archedWindow(p,M,x,.83,1.09,0,.56,1.05);
  for(let side of [-1,1])for(let z of [-.49,.47])archedWindow(p,M,side*1.64,.84,z,side*Math.PI/2,.53,1.05);
  for(let x of [-1.02,0,1.02])archedWindow(p,M,x,.84,-1.1,Math.PI,.5,1.02);
  label(p,'W I N T E R  S T A T I O N',2.1,.29,0,2.055,1.19,{bg:'#23403d',ink:'#f1d9a4',fontScale:.43});
  label(p,'EST. 1924',.73,.18,0,2.74,1.12,{bg:'#c3b69a',ink:'#493d2e',fontScale:.58,border:false});
  // Platform canopy: scalloped valance, wrought brackets and snowy zinc roof.
  box(p,3.58,.08,.92,M.roof,0,1.86,1.61,.025);box(p,3.61,.085,.95,M.snow,0,1.94,1.61,.055);
  for(let x of [-1.53,1.53]){beam(p,[x,.05,2.01],[x,1.83,2.01],.038,M.engine);cyl(p,.075,.1,.12,M.black,x,.08,2.01);for(let side of [-1,1])pipe(p,[[x,1.25,2.01],[x+side*.3,1.57,2.01],[x+side*.28,1.74,2.01],[x+side*.12,1.69,2.01]],.018,M.brass);beam(p,[x,1.4,2.01],[x,1.85,1.39],.022,M.iron);}
  for(let x=-1.75;x<1.75;x+=.11){const q=torus(p,.055,.011,M.brass,x,1.81,2.08,Math.PI);q.rotation.z=Math.PI;}
  box(p,3.62,.1,.06,M.engine,0,1.81,2.08);
  // Chimney with individual brick courses, soot and snowy coping.
  box(p,.36,.9,.38,M.brick,-.88,3.12,-.55,.02);for(let y of [3.32,3.46,3.57])box(p,.42,.055,.44,M.cream,-.88,y,-.55,.015);box(p,.29,.015,.29,M.black,-.88,3.61,-.55);for(let x of [-1.05,-.71])snowLump(p,x,3.62,-.55,.08,.04,.24,M.snow);
  // Posters and a timetable with readable, locally generated lettering.
  const notice=group(p,1.7,1.25,0,Math.PI/2);box(notice,.42,.62,.04,M.darkwood,0,0,0,.02);label(notice,'DEPARTURES\n18:40 · NORD EXPRESS\n19:15 · WINTER LOCAL\n20:05 · LAST TRAIN',.36,.55,0,0,.025,{bg:'#d1c8ac',ink:'#364443',fontScale:.12});
  const poster=group(p,-1.69,1.3,-.1,-Math.PI/2);label(poster,'VISIT\nTHE ALPS\n1924',.4,.65,0,0,.015,{bg:'#506c71',ink:'#f3dfb8',fontScale:.22});
  return p;
}

function firFrond(variant=0,snow=false){
  const nu=22,nv=8,positions=[],uv=[],indices=[];
  for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){
    const t=i/nu,v=j/nv*2-1;
    const scallop=snow?1:(i%2?.79:1.1);
    const width=(snow?.205:.25)*Math.pow(1-t,.73)*Math.pow(Math.sin(Math.PI*(t*.94+.03)),.22)*scallop;
    const x=snow?.10+t*.86:t;
    const ridge=(snow?.145:.035)+Math.sqrt(Math.max(0,1-v*v))*(snow?.065:.055);
    const y=ridge-t*t*.14+Math.sin(t*19+variant+v*3)*(snow?.008:.012)-Math.pow(Math.abs(v),8)*(snow?.035:.01);
    positions.push(x,y,v*width);uv.push(t,j/nv);
    if(i<nu&&j<nv){const k=i*(nv+1)+j;indices.push(k,k+1,k+nv+1,k+1,k+nv+2,k+nv+1);}
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
export function makeTrees(root,M,trees=[[-3.15,-1.48,4.35],[2.58,-1.65,4.55],[.85,-3.2,3.9],[-1.75,-3.05,3.55],[3.3,.0,2.6],[-3.5,.65,2.1],[2.3,-2.95,2.8]]){
  const fronds=Array.from({length:4},(_,i)=>firFrond(i)),caps=Array.from({length:4},(_,i)=>firFrond(i,true));
  for(const [x,z,h] of trees){const g=group(root,x,terrainHeight(x,z),z,rand(0,TAU));g.name='Hand-shaped snow-laden fir';cyl(g,.042,.12,h*.9,M.trunk,0,h*.45,0,10);
    const tiers=11;for(let t=0;t<tiers;t++){let base=.2+t*h*.084,rad=(1-t/tiers)*h*.275+.018,branches=7+(t%2);
      for(let b=0;b<branches;b++){let a=b/branches*TAU+t*1.83+rand(-.16,.16),len=rad*rand(.78,1.15),y=base+rand(-.11,.11)*(h/3),end=[Math.cos(a)*len,y-.07,Math.sin(a)*len];beam(g,[0,y+.06,0],end,.022,M.trunk,.006,6);
        // Jagged needle fans and a continuous, irregular snow blanket follow each actual bough.
        const branch=group(g,0,y,0,-a),v=(b+t)%4;
        const main=mesh(branch,fronds[v],t%2?M.pine:M.pineLight);main.scale.set(len,h/3,len);
        for(let side of [-1,1]){const sub=mesh(branch,fronds[(v+1)%4],M.pine,len*.34,-.015,side*len*.07);sub.rotation.y=side*.6;sub.scale.set(len*.59,h/4,len*.55);}
        if(rand()>.08){const cap=mesh(branch,caps[v],M.snow);cap.scale.set(len,h/3,len*rand(.76,1.02));cap.rotation.x=rand(-.07,.07);}
        for(let j=0;j<6;j++){const f=.34+j*.10;for(let side of [-1,1])beam(branch,[f*len,.018,side*len*.07],[(f+.14)*len,.045,side*len*(.13-.08*f)],.006,M.pineLight,.0015,4);}
      }
    }
    cyl(g,0,.12,h*.14,M.pine,0,h*.96,0,11);cyl(g,0,.07,h*.095,M.snow,0,h*.988,0,11);
    for(let i=0;i<6;i++){const a=i/6*TAU;snowLump(g,Math.cos(a)*.19,.035,Math.sin(a)*.19,.24,.075,.23,M.snow);}
  }
}

function lamp(root,M,x,z,h,lights){
  const g=group(root,x,terrainHeight(x,z),z);cyl(g,.11,.17,.13,M.black,0,.03,0);cyl(g,.045,.065,h-.5,M.iron,0,(h-.5)/2,0,16);
  for(let y of [.22,h-.5])cyl(g,.073,.073,.055,M.brass,0,y,0,20);
  const top=h-.26;box(g,.3,.42,.3,M.lampGlass,0,top,0,.02);ball(g,.037,M.filament,0,top-.02,0);beam(g,[0,top+.20,0],[0,top+.02,0],.009,M.aged);for(let a of [-1,1])for(let b of [-1,1])beam(g,[a*.16,top-.23,b*.16],[a*.12,top+.23,b*.12],.016,M.iron);
  cyl(g,.10,.28,.19,M.black,0,top+.3,0,4).rotation.y=Math.PI/4;cyl(g,.08,.27,.11,M.snow,0,top+.39,0,4).rotation.y=Math.PI/4;ball(g,.042,M.brass,0,top+.49,0);
  const l=new THREE.PointLight(0xffbc6d,7,3.8,2);l.position.set(x,terrainHeight(x,z)+top,z);root.add(l);lights.push(l);return V(x,terrainHeight(x,z)+top,z);
}

function bench(root,M,x,z,ry){const g=group(root,x,terrainHeight(x,z),z,ry);for(let side of [-1,1]){for(let k of [0,.35])beam(g,[side*.47,.02,k],[side*.47,.42,k-.02],.025,M.iron);pipe(g,[[side*.47,.2,.33],[side*.47,.37,.32],[side*.47,.83,.47]],.022,M.iron);pipe(g,[[side*.47,.4,0],[side*.47,.58,-.02],[side*.47,.58,.26]],.021,M.iron);}
  for(let t=0;t<4;t++){box(g,1.12,.055,.075,M.oak,0,.43,t*.095,.013);box(g,1.12,.075,.045,M.oak,0,.58+t*.095,.41+t*.018,.011);}for(let i=0;i<7;i++)snowLump(g,(i/6-.5)*1.04,.93,.48,.11,.04,.07,M.snow);snowLump(g,-.32,.48,.17,.23,.04,.18,M.snow);return g;}

function suitcase(root,M,x,z,s,ry=0){const g=group(root,x,terrainHeight(x,z)+s*.25,z,ry);box(g,s,s*.5,s*.33,M.leather,0,0,0,.04);for(let a of [-.31,.31]){box(g,.035,s*.52,s*.35,M.oak,a*s,0,0,.008);box(g,.055,.08,.016,M.brass,a*s,.01,s*.18,.01);}pipe(g,[[-s*.13,s*.26,0],[-s*.13,s*.36,0],[s*.13,s*.36,0],[s*.13,s*.26,0]],.015,M.darkwood);for(let a of [-1,1])for(let b of [-1,1])ball(g,.025,M.brass,a*s*.43,b*s*.19,s*.17,1,1,.3);label(g,'NORD',s*.24,s*.13,.1*s,.08*s,s*.17+.005,{bg:'#d2bc87',ink:'#5b4132',fontScale:.5,border:false});return g;}

export function makeProps(root,M){
  const lights=[],glows=[];
  glows.push(lamp(root,M,-2.74,1.03,2.52,lights),lamp(root,M,2.8,.87,2.58,lights),lamp(root,M,.4,-2.5,2.35,lights));
  bench(root,M,-2.64,-.25,.28);bench(root,M,1.9,-.8,-.28);suitcase(root,M,-2.15,.19,.46,.15);suitcase(root,M,-2.04,.45,.35,-.2);suitcase(root,M,1.46,-.15,.4,.1);
  // A freestanding double-faced railway clock, its hands fixed at 18:42.
  const g=group(root,.92,GROUND,.18);cyl(g,.11,.19,.16,M.iron,0,0,0);cyl(g,.035,.065,2.39,M.engine,0,1.17,0);for(let y of [.25,1.9,2.32])cyl(g,.068,.068,.06,M.brass,0,y,0);
  pipe(g,[[0,2.2,0],[.02,2.57,0],[.25,2.68,0],[.4,2.57,0]],.033,M.iron);
  const c=group(g,.4,2.48,0);cyl(c,.36,.36,.16,M.brass).rotation.x=Math.PI/2;
  for(let side of [-1,1]){const face=group(c,0,0,side*.09,side<0?Math.PI:0);const t=texture(512,512,(ctx,w,h)=>{ctx.fillStyle='#e6debf';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#48504a';ctx.lineWidth=5;ctx.beginPath();ctx.arc(w/2,h/2,230,0,TAU);ctx.stroke();for(let k=0;k<60;k++){ctx.save();ctx.translate(w/2,h/2);ctx.rotate(k/60*TAU);ctx.lineWidth=k%5?2:5;ctx.beginPath();ctx.moveTo(0,-220);ctx.lineTo(0,k%5?-209:-196);ctx.stroke();ctx.restore();}ctx.fillStyle='#283936';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='34px Georgia';['XII','III','VI','IX'].forEach((n,i)=>{let a=i/4*TAU;ctx.fillText(n,w/2+Math.sin(a)*164,h/2-Math.cos(a)*164);});ctx.font='15px Georgia';ctx.fillText('WINTER STATION',256,325);});const mat=new THREE.MeshStandardMaterial({map:t,roughness:.6});mesh(face,new THREE.CircleGeometry(.319,64),mat,0,0,.003);for(const [len,ang,w]of[[.21,Math.PI*.4,.018],[.15,Math.PI*1.12,.027]]){const hand=box(face,w,len,.012,M.black,Math.sin(ang)*len*.4,Math.cos(ang)*len*.4,.018,.005);hand.rotation.z=-ang;}ball(face,.025,M.brass,0,0,.035,1,1,.4);}
  snowLump(c,0,.33,0,.33,.06,.14,M.snow);
  // Station signs, finials and fence along the rear platform.
  const sign=group(root,-2.9,GROUND,.03,.3);for(let x of [-.44,.44]){cyl(sign,.025,.035,1.4,M.engine,x,.7,0);ball(sign,.045,M.brass,x,1.43,0);}box(sign,1.03,.43,.065,M.engine,0,1.14,0,.025);label(sign,'WINTER STATION\nPLATFORM 01',.96,.36,0,1.14,.036,{fontScale:.29});snowLump(sign,0,1.39,0,.53,.045,.07,M.snow);
  for(let x=-2.6;x<2.1;x+=.24){cyl(root,.012,.014,.59,M.iron,x,GROUND+.28,-2.27,6);ball(root,.026,M.brass,x,GROUND+.59,-2.27);}for(let y of [.15,.48])beam(root,[-2.65,GROUND+y,-2.27],[2.11,GROUND+y,-2.27],.015,M.iron);
  // Semaphore: ladder, counterweight and two lit signal apertures.
  const sig=group(root,3.24,GROUND,-.28,-.3);box(sig,.25,.1,.25,M.stone,0,.02,0,.03);cyl(sig,.036,.055,2.18,M.iron,0,1.1,0);box(sig,.29,.56,.18,M.black,0,1.89,.07,.12);
  for(const [y,mat]of[[1.77,M.signalRed],[2,M.signalGreen]]){cyl(sig,.072,.072,.06,mat,0,y,.19,24).rotation.x=Math.PI/2;const hood=torus(sig,.089,.025,M.black,0,y,.22,Math.PI);}
  box(sig,.8,.10,.065,M.cream,-.31,2.18,0,.02);box(sig,.23,.1,.075,M.red,-.57,2.18,.006);for(let y=.2;y<2.1;y+=.14)beam(sig,[.12,y,-.13],[.25,y,-.13],.009,M.iron);for(let x of [.12,.25])beam(sig,[x,.1,-.13],[x,2.13,-.13],.012,M.iron);
  // A parcel trolley and a wooden crate at the back, for the reverse view.
  const cart=group(root,-.8,GROUND,-2.7,.12);box(cart,.7,.07,.48,M.oak,0,.22,0,.018);for(let x of [-.27,.27])for(let z of [-.18,.18])cyl(cart,.075,.075,.035,M.black,x,.1,z,18).rotation.z=Math.PI/2;
  pipe(cart,[[-.3,.22,-.2],[-.3,.74,-.2],[.3,.74,-.2],[.3,.22,-.2]],.021,M.iron);box(cart,.43,.39,.36,M.oak,.02,.46,0,.015);for(let y of [.35,.57])box(cart,.45,.04,.38,M.aged,.02,y,0);label(cart,'FRAGILE',.26,.11,.02,.47,.187,{bg:'#9d8662',ink:'#332c23',fontScale:.5,border:false});snowLump(cart,0,.67,.02,.25,.04,.2,M.snow);
  // Tiny winter wreath, each evergreen sprig and berry individually placed.
  const wreath=group(root,-.82,GROUND+1.79,.278);torus(wreath,.14,.035,M.pine,0,0,0);for(let i=0;i<15;i++){let a=i/15*TAU;ball(wreath,.023,M.red,Math.sin(a)*.14,Math.cos(a)*.14,.028);}
  return {lights,glows};
}

export function buildWorld(root,M,treeM=M){makeBase(root,M);makeGround(root,M);const station=makeStation(root,M);makeTrees(root,treeM);const props=makeProps(root,M);return {...props,windows:station.userData.windows,interiorLights:station.userData.interiorLights};}

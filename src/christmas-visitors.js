import * as THREE from 'three';
import {V,TAU,mesh,box,cyl,ball,torus,beam,pipe,group,batch} from './craft.js';

// Modelled in local space so every limb, antler and harness follows the flight.
function makeReindeer(parent,M){
  const g=group(parent);g.name='Flying reindeer · articulated winter messenger';
  const fur=new THREE.MeshStandardMaterial({color:0x98623c,roughness:.91});
  const darkFur=new THREE.MeshStandardMaterial({color:0x603f2a,roughness:.94});
  const cream=new THREE.MeshStandardMaterial({color:0xdcc8a4,roughness:.97});
  const horn=new THREE.MeshStandardMaterial({color:0xceb68c,roughness:.79});
  const red=new THREE.MeshStandardMaterial({color:0x9d252d,roughness:.76});
  const body=group(g);ball(body,1,fur,0,0,0,.50,.25,.21);ball(body,1,cream,-.07,-.13,0,.40,.12,.175);
  ball(body,1,darkFur,.27,.08,0,.24,.28,.205);const neck=ball(body,1,fur,.42,.28,0,.17,.37,.155);neck.rotation.z=-.40;
  for(let i=0;i<11;i++){const f=i/10;ball(body,.075,cream,.31+f*.19,.12+f*.4,.08+Math.sin(f*9)*.012,1,.75,.9);}
  const head=group(g,.56,.59,0);ball(head,1,fur,0,.01,0,.225,.155,.135);ball(head,1,cream,.172,-.055,0,.17,.091,.104);
  ball(head,.068,M.black,.292,-.035,0,.75,.8,1.0);ball(head,.043,red,.329,-.025,.003,.78,.8,1.02);
  for(let side of [-1,1]){
    const ear=ball(head,1,fur,-.078,.13,side*.16,.09,.045,.18);ear.rotation.x=side*.45;
    const earInner=ball(head,1,darkFur,-.062,.145,side*.20,.056,.025,.115);earInner.rotation.x=side*.45;
    ball(head,.026,M.black,.086,.037,side*.12,1,1,.45);ball(head,.009,M.snow,.091,.045,side*.133,1,1,.35);
    pipe(head,[[.19,-.102,side*.052],[.24,-.10,side*.063],[.28,-.085,side*.055]],.007,darkFur);
    const antler=group(head,-.08,.13,side*.074);
    pipe(antler,[[0,0,0],[-.10,.17,side*.06],[-.16,.36,side*.10],[-.10,.57,side*.13],[.02,.69,side*.11]],.022,horn);
    for(const [start,end,middle]of[[[-.10,.17,side*.06],[.13,.38,side*.03],[.04,.28,side*.05]],[[-.15,.34,side*.10],[-.37,.48,side*.20],[-.27,.43,side*.18]],[[-.12,.50,side*.12],[-.30,.69,side*.11],[-.24,.60,side*.13]]]){
      pipe(antler,[start,middle,end],.014,horn);ball(antler,.015,horn,...end,.7,1.2,.7);
    }
  }
  // Saddle leather, chest strap, brass buckles and five tiny sleigh bells.
  for(let x of [-.18,.18]){const strap=torus(body,.22,.022,red,x,0,0);strap.rotation.y=Math.PI/2;strap.scale.y=1.16;}
  pipe(body,[[.38,.18,-.17],[.44,-.08,-.15],[.25,-.24,0],[.44,-.08,.15],[.38,.18,.17]],.027,red);
  for(let side of [-1,1]){box(body,.075,.065,.02,M.brass,.17,.06,side*.224,.008);box(body,.046,.035,.024,red,.17,.06,side*.238,.004);}
  for(let i=0;i<5;i++){const a=(i/4-.5)*2.3;const bell=ball(body,.043,M.gold,.27,-.19-Math.cos(a)*.05,Math.sin(a)*.18);torus(body,.044,.005,M.aged,.27,-.19-Math.cos(a)*.05,Math.sin(a)*.18).rotation.y=Math.PI/2;ball(body,.012,M.black,.306,-.20-Math.cos(a)*.05,Math.sin(a)*.18);}
  const legs=[];
  for(let front of [-1,1])for(let side of [-1,1]){
    const leg=group(g,front*.32,-.13,side*.13);const thigh=ball(leg,1,fur,0,-.11,0,.075,.17,.065);thigh.rotation.z=front*.3;
    beam(leg,[0,-.12,0],[front*.12,-.30,0],.042,fur,.031,12);ball(leg,.043,darkFur,front*.12,-.30,0);
    beam(leg,[front*.12,-.3,0],[front*.05,-.52,.01],.027,cream,.020,12);ball(leg,1,M.black,front*.075,-.535,.01,.067,.045,.043);
    box(leg,.045,.003,.075,darkFur,front*.077,-.554,.012,.005);box(leg,.004,.034,.085,cream,front*.09,-.532,.011,.001);
    legs.push({g:leg,front,side});batch(leg);
  }
  const tail=group(g,-.46,.05,0);const t=ball(tail,1,cream,-.08,.055,0,.18,.058,.065);t.rotation.z=-.4;
  // A red scarf with long forked tails gives a clear silhouette in the upper air.
  const scarf=torus(g,.155,.034,red,.46,.43,0);scarf.rotation.z=-.4;scarf.rotation.x=Math.PI/2;
  const scarfTail=group(g,.38,.43,-.12);pipe(scarfTail,[[0,0,0],[-.3,.02,-.01],[-.56,-.04,-.06],[-.75,.02,-.06]],.045,red);
  for(let j=0;j<5;j++)beam(scarfTail,[-.73,.02+j*.008,-.06],[-.81,-.02+j*.008,-.06],.006,M.gold);
  batch(body);batch(head);batch(tail);batch(scarfTail);return {g,head,legs,tail,scarfTail};
}

function bentHat(parent,red,white){
  const centers=[[0,0,0,.129],[0,.105,0,.112],[.015,.23,0,.083],[.06,.335,.002,.054],[.145,.365,.012,.029],[.20,.31,.02,.002]],pos=[],uv=[],idx=[];
  for(let i=0;i<centers.length;i++)for(let j=0;j<=32;j++){const [x,y,z,r]=centers[i],a=j/32*TAU;pos.push(x+Math.cos(a)*r,y,z+Math.sin(a)*r*.85);uv.push(j/32,i/(centers.length-1));if(i<centers.length-1&&j<32){const k=i*33+j;idx.push(k,k+1,k+33,k+1,k+34,k+33);}}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(idx);geometry.computeVertexNormals();mesh(parent,geometry,red);
  torus(parent,.123,.027,white).rotation.x=Math.PI/2;ball(parent,.053,white,.20,.31,.02);
}

function makeSanta(parent,M,seat,angle){
  const g=group(parent,...seat.toArray(),angle);g.name='Santa Claus · sitting on the Nord Express roof';g.scale.setScalar(1.13);
  const red=new THREE.MeshStandardMaterial({color:0xb62d30,roughness:.86}),white=new THREE.MeshStandardMaterial({color:0xf7efdb,roughness:.98}),skin=new THREE.MeshStandardMaterial({color:0xe8b49a,roughness:.89});
  const body=group(g);ball(body,1,red,0,.22,0,.235,.29,.185);ball(body,1,red,0,.03,0,.22,.12,.19);
  const hem=torus(body,.205,.03,white,0,.025,0);hem.rotation.x=Math.PI/2;hem.scale.y=.84;
  const belt=torus(body,.218,.027,M.black,0,.16,0);belt.rotation.x=Math.PI/2;belt.scale.y=.85;
  box(body,.105,.083,.025,M.gold,0,.16,.186,.013);box(body,.068,.046,.029,M.black,0,.16,.203,.006);box(body,.015,.05,.034,M.gold,.013,.16,.22,.003);
  for(let y of [.29,.36,.43])ball(body,.014,M.gold,0,y,.166,1,1,.5);
  for(let s of [-1,1]){beam(body,[s*.116,.035,.01],[s*.14,-.035,.22],.08,red,.071,16);beam(body,[s*.14,-.035,.22],[s*.14,-.31,.27],.066,red,.05,16);torus(body,.052,.017,white,s*.14,-.26,.267).rotation.x=Math.PI/2;ball(body,1,M.black,s*.14,-.32,.31,.076,.066,.145);box(body,.145,.025,.26,M.black,s*.14,-.367,.31,.016);}
  const head=group(g,0,.53,.025);ball(head,1,skin,0,.105,0,.123,.137,.112);ball(head,.035,skin,0,.096,.114,1,.8,1);
  for(let s of [-1,1]){ball(head,.024,red,s*.083,.073,.088,1,.62,.24);ball(head,.012,M.black,s*.045,.13,.097,1,.9,.45);pipe(head,[[s*.023,.164,.102],[s*.045,.171,.106],[s*.068,.163,.096]],.012,white);const glasses=torus(head,.035,.0035,M.gold,s*.045,.125,.112);glasses.scale.y=.78;}
  beam(head,[-.015,.128,.117],[.015,.128,.117],.0035,M.gold,undefined,6);
  // Layered sculpted beard, curled moustache and sideburns, rather than a white sphere.
  ball(head,1,white,0,.012,.069,.13,.11,.07);for(let i=0;i<13;i++){const f=i/12,a=(f-.5)*Math.PI;const x=Math.sin(a)*.103,y=-.055+Math.abs(x)*.8;const tuft=ball(head,1,white,x,y,.095-Math.abs(x)*.23,.027,.07,.027);tuft.rotation.z=-a*.5;}
  for(let s of [-1,1]){const mustache=ball(head,1,white,s*.047,.06,.138,.066,.023,.026);mustache.rotation.z=s*.22;ball(head,1,white,s*.105,.093,.027,.026,.095,.059);}
  const hat=group(head,0,.21,-.008);bentHat(hat,red,white);batch(head);
  const arms=[];for(let s of [-1,1]){const arm=group(g,s*.185,.43,0);ball(arm,.080,red,0,-.04,0);beam(arm,[0,-.03,0],[s*.025,-.225,.02],.069,red,.052,16);torus(arm,.052,.019,white,s*.025,-.215,.02).rotation.x=Math.PI/2;ball(arm,1,red,s*.027,-.27,.025,.055,.071,.043);ball(arm,.028,red,-s*.014,-.263,.052);batch(arm);arms.push(arm);}
  const sack=group(g,-.22,.04,-.22);const sackMat=new THREE.MeshStandardMaterial({color:0x7a6540,roughness:.97});ball(sack,1,sackMat,0,.17,0,.20,.25,.19);cyl(sack,.06,.11,.11,sackMat,.025,.39,0,14);torus(sack,.065,.012,M.gold,.025,.41,0).rotation.x=Math.PI/2;pipe(sack,[[.07,.41,.03],[.13,.31,.03],[.09,.21,.08]],.009,M.gold);
  for(let [x,s,mat]of[[.31,.19,M.engine],[-.47,.21,red]]){box(g,s,s*.8,s,mat,x,-.005,-.05,.015);box(g,s*.15,s*.82,s*1.02,M.gold,x,-.005,-.05,.004);box(g,s*1.02,s*.82,s*.13,M.gold,x,-.005,-.05,.004);const ribbon=torus(g,s*.16,s*.025,M.gold,x,s*.43,-.05);ribbon.rotation.x=Math.PI/2;}
  batch(body);batch(sack);return {g,head,arms};
}

export function reindeerPose(t){
  const a=t*.24+.62;return {position:V(Math.cos(a)*1.86,7.04+Math.sin(t*.86)*.12,Math.sin(a)*1.60),yaw:Math.atan2(-Math.cos(a)*1.60,-Math.sin(a)*1.86),bank:Math.sin(t*.48)*.045};
}

export function makeChristmasVisitors(root,M,train){
  const deer=makeReindeer(root,M),santa=makeSanta(root,M,train.santaSeat,train.coachAngle);deer.g.scale.setScalar(.91);
  function update(t){const pose=reindeerPose(t);deer.g.position.copy(pose.position);deer.g.rotation.set(Math.sin(t*.72)*.025,pose.yaw,pose.bank);
    for(const leg of deer.legs)leg.g.rotation.z=leg.front*(.45+Math.sin(t*3.7+leg.side*.75)*.35);deer.head.rotation.z=Math.sin(t*1.1)*.045;deer.tail.rotation.y=Math.sin(t*4)*.2;deer.scarfTail.rotation.y=Math.sin(t*3.3)*.11;
    santa.arms[1].rotation.z=2.32+Math.sin(t*2.1)*.27;santa.arms[1].rotation.x=-.25;santa.arms[0].rotation.x=-.72;santa.arms[0].rotation.z=-.24;santa.head.rotation.y=Math.sin(t*.6)*.13;santa.g.rotation.z=Math.sin(t*.8)*.012;
  }
  function diagnostics(){const bounds=new THREE.Box3().setFromObject(deer.g),corners=[];for(let x of [bounds.min.x,bounds.max.x])for(let y of [bounds.min.y,bounds.max.y])for(let z of [bounds.min.z,bounds.max.z])corners.push(Math.hypot(x,y-4.15,z));return {flyingReindeer:1,santaOnTrain:true,reindeerPosition:deer.g.position.toArray(),boundingBoxMaxRadius:Math.max(...corners),santaWavingArm:santa.arms[1].rotation.z};}
  update(0);return {update,diagnostics,deer,santa};
}

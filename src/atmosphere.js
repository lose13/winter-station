import * as THREE from 'three';
import {V,rand,texture,mesh,torus,group} from './craft.js';
import {GROUND,terrainHeight} from './world-model.js';
import {onTrack} from './train.js';

export const SPHERE={center:V(0,4.15,0),radius:5.24,floor:1.38};
export function makeGlass(root,M){
  const glass=new THREE.MeshPhysicalMaterial({color:0xf5fbff,metalness:0,roughness:.035,transmission:1,thickness:.065,ior:1.46,transparent:true,opacity:.19,envMapIntensity:.62,clearcoat:1,clearcoatRoughness:.04,side:THREE.FrontSide,depthWrite:false});
  const geo=new THREE.SphereGeometry(SPHERE.radius,160,112,0,Math.PI*2,0,Math.acos((1.26-SPHERE.center.y)/SPHERE.radius));
  const shell=mesh(root,geo,glass,0,SPHERE.center.y,0);shell.name='Thin optical-glass shell · 65 mm equivalent';shell.castShadow=false;shell.receiveShadow=false;shell.renderOrder=3;
  // An optical edge, only visible at grazing angles. It does not tint the interior.
  const edge=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,uniforms:{uColor:{value:new THREE.Color(0xaed9e4)}},vertexShader:`varying vec3 vN;varying vec3 vEye;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vEye=-p.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform vec3 uColor;varying vec3 vN;varying vec3 vEye;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vEye))),4.5);gl_FragColor=vec4(uColor,f*.16);}`});
  const rim=mesh(root,geo,edge,0,SPHERE.center.y,0);rim.castShadow=false;rim.receiveShadow=false;rim.renderOrder=4;
  const ring=torus(root,4.367,.043,M.gold,0,1.26,0);ring.rotation.x=Math.PI/2;
  const inner=torus(root,4.325,.018,M.snowShade,0,1.31,0);inner.rotation.x=Math.PI/2;
  return {shell,rim,material:glass};
}

export function makeSnow(root,count=2600){
  const radius=SPHERE.radius-.12,center=SPHERE.center;
  const pos=new Float32Array(count*3),vel=new Float32Array(count*3),sizes=new Float32Array(count),alpha=new Float32Array(count),phase=new Float32Array(count),rest=new Float32Array(count);
  function spawn(i,high=false){let x,y,z;do{x=rand(-4.9,4.9);y=high?rand(4.7,8.95):rand(1.6,9.1);z=rand(-4.9,4.9);}while(x*x+(y-center.y)**2+z*z>(radius-.1)**2);pos.set([x,y,z],i*3);vel.set([rand(-.035,.035),rand(-.18,-.07),rand(-.035,.035)],i*3);rest[i]=0;}
  for(let i=0;i<count;i++){spawn(i);sizes[i]=rand(.040,.093);alpha[i]=rand(.60,.98);phase[i]=rand(0,Math.PI*2);}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3).setUsage(THREE.DynamicDrawUsage));geo.setAttribute('aSize',new THREE.BufferAttribute(sizes,1));geo.setAttribute('aAlpha',new THREE.BufferAttribute(alpha,1));geo.setAttribute('aPhase',new THREE.BufferAttribute(phase,1));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uDpr:{value:1},uBrightness:{value:.9},uBurst:{value:0},uTime:{value:0}},vertexShader:`attribute float aSize;attribute float aAlpha;attribute float aPhase;uniform float uDpr;uniform float uBurst;uniform float uTime;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vSpin=aPhase+uTime*.3;vShape=step(.076,aSize);gl_PointSize=clamp(aSize*1150.*uDpr*(1.+uBurst*.55)/-mv.z,1.9*uDpr,8.*uDpr);gl_Position=projectionMatrix*mv;}`,fragmentShader:`uniform float uBrightness;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;if(r>1.)discard;float soft=smoothstep(1.,.08,r);float arm=pow(abs(cos((atan(p.y,p.x)+vSpin)*3.)),9.)*smoothstep(1.,.45,r);float crystal=max(smoothstep(.52,.0,r),arm*.85);float a=mix(soft,crystal,vShape*.65);gl_FragColor=vec4(vec3(.9,.97,1.)*uBrightness,a*vAlpha);}`});
  const points=new THREE.Points(geo,material);points.renderOrder=6;points.frustumCulled=false;points.name='2600 individually simulated, sphere-constrained snow crystals';root.add(points);
  let energy=0,shakeCount=0,trainOffset=0;
  const collider=(x,y,z,oldY)=>{
    let floor=Math.max(terrainHeight(x,z)+.018,center.y-Math.sqrt(Math.max(0,radius*radius-x*x-z*z))+.018);
    // Sloped snow roof. Reject entry through the station walls as well as the roof.
    const lx=x+.82,lz=z+.88;
    if(Math.abs(lx)<1.98&&Math.abs(lz)<1.39){const roof=GROUND+.08+3.47-Math.abs(lx)*.62;
      if(y<roof&&y>GROUND+.12){if(oldY>=roof-.06||Math.abs(lx)<1.72&&Math.abs(lz)<1.10)return roof+.022;}}
    if(Math.abs(lx)<1.84&&z>.17&&z<1.22&&y<GROUND+2.1&&oldY>GROUND+1.97)floor=Math.max(floor,GROUND+2.1);
    // The carriages use conservative convex roof proxies.
    for(const [base,length,roof]of[[.65,1.46,GROUND+2.01],[-.245,1.08,GROUND+2.02]]){const a=base+trainOffset,p=onTrack(a),dx=x-p.x,dz=z-p.z,tx=dx*Math.cos(a)-dz*Math.sin(a),tz=dx*Math.sin(a)+dz*Math.cos(a);if(Math.abs(tx)<length&&Math.abs(tz)<.51&&oldY>roof-.1&&y<roof)floor=Math.max(floor,roof);}
    return floor;
  };
  function shake(){energy=1;shakeCount++;for(let i=0;i<count;i++){let k=i*3,x=pos[k],z=pos[k+2];vel[k]=rand(-1.35,1.35)-z*.45;vel[k+1]=rand(1.05,3.4);vel[k+2]=rand(-1.35,1.35)+x*.45;rest[i]=0;}}
  function update(dt,t,wind=0){energy*=Math.exp(-dt/3.5);material.uniforms.uBurst.value=energy;material.uniforms.uTime.value=t;
    for(let i=0;i<count;i++){let k=i*3;if(rest[i]>0){rest[i]+=dt;if(i<650&&rest[i]>3+phase[i])spawn(i,true);else continue;}
      let x=pos[k],y=pos[k+1],z=pos[k+2],oldY=y;const p=phase[i],turb=.027+energy*.28;
      vel[k]+=(Math.sin(t*.73+p+y*.8)*turb-z*energy*.33+wind*.14)*dt;vel[k+2]+=(Math.cos(t*.63+p+x*.6)*turb+x*energy*.33+wind*.055)*dt;
      vel[k+1]+=(-.27+Math.sin(t*1.1+p)*energy*.15)*dt;
      const damping=Math.exp(-dt*(.65+(!energy?.2:0)));vel[k]*=damping;vel[k+2]*=damping;vel[k+1]*=Math.exp(-dt*.38);vel[k+1]=Math.max(vel[k+1],-.18-sizes[i]*3.8);
      x+=vel[k]*dt;y+=vel[k+1]*dt;z+=vel[k+2]*dt;
      let dy=y-center.y,len=Math.sqrt(x*x+dy*dy+z*z);
      if(len>radius){const nx=x/len,ny=dy/len,nz=z/len,dot=vel[k]*nx+vel[k+1]*ny+vel[k+2]*nz;x=nx*(radius-.003);y=center.y+ny*(radius-.003);z=nz*(radius-.003);if(dot>0){vel[k]-=dot*nx*1.32;vel[k+1]-=dot*ny*1.32;vel[k+2]-=dot*nz*1.32;}}
      const floor=collider(x,y,z,oldY);if(y<floor){y=floor;if(Math.hypot(x,z)>4.27){vel[k]-=x*.24*dt;vel[k+2]-=z*.24*dt;vel[k+1]=Math.min(0,vel[k+1]);}else if(energy>.22){vel[k+1]=Math.abs(vel[k+1])*.22+energy*.25;}else{vel[k+1]=0;vel[k]*=.1;vel[k+2]*=.1;rest[i]=.001;}}
      pos[k]=x;pos[k+1]=y;pos[k+2]=z;
    }
    geo.attributes.position.needsUpdate=true;
  }
  function diagnostics(){let outside=0,invalid=0,moving=0,settled=0,maxRadius=0;for(let i=0;i<count;i++){let k=i*3,r=Math.hypot(pos[k],pos[k+1]-center.y,pos[k+2]);maxRadius=Math.max(r,maxRadius);if(r>SPHERE.radius-.09)outside++;if(!Number.isFinite(r))invalid++;if(rest[i]>0)settled++;else moving++;}return{count,outside,invalid,moving,settled,maxRadius,allowedRadius:radius,energy,shakeCount};}
  return {points,material,update,shake,diagnostics,setTrainOffset(value){trainOffset=value;},get energy(){return energy;}};
}

export function softTexture(color='255,229,190'){return texture(128,128,(c,w,h)=>{const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);g.addColorStop(0,`rgba(${color},.8)`);g.addColorStop(.12,`rgba(${color},.4)`);g.addColorStop(.42,`rgba(${color},.10)`);g.addColorStop(1,`rgba(${color},0)`);c.fillStyle=g;c.fillRect(0,0,w,h);});}
export function makeHalos(root,positions){const map=softTexture();const halos=[];for(const p of positions){const s=new THREE.Sprite(new THREE.SpriteMaterial({map,color:0xffd09a,transparent:true,opacity:.13,blending:THREE.AdditiveBlending,depthWrite:false}));s.position.copy(p);s.scale.set(.43,.51,1);s.renderOrder=7;root.add(s);halos.push(s);}return halos;}
export function makeSteam(root,origin,{kind='steam'}={}){
  const house=kind==='chimney',exhaust=kind==='exhaust',pressure=kind==='pressure',n=house?90:pressure?60:100,pos=new Float32Array(n*3),size=new Float32Array(n),opacity=new Float32Array(n),phases=Array.from({length:n},(_,i)=>i/n),drift=Array.from({length:n},()=>rand(-1,1));
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('aSize',new THREE.BufferAttribute(size,1));geo.setAttribute('aAlpha',new THREE.BufferAttribute(opacity,1));
  const cloud=texture(128,128,(c,w,h)=>{for(let i=0;i<8;i++){const a=i/8*Math.PI*2,x=64+Math.cos(a)*17,y=64+Math.sin(a)*15,r=35;const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(255,255,255,.42)');g.addColorStop(.45,'rgba(255,255,255,.25)');g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(0,0,w,h);}});
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{map:{value:cloud},uDpr:{value:1},uTime:{value:0},uColor:{value:new THREE.Color(exhaust?0x202326:0xdfe8ed)},uSoot:{value:exhaust?1:0}},vertexShader:`attribute float aSize;attribute float aAlpha;varying float vAlpha;varying float vAngle;uniform float uDpr;uniform float uTime;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vAngle=position.y*.8+uTime*.1;gl_PointSize=aSize*1000.*uDpr/-p.z;gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform sampler2D map;uniform vec3 uColor;uniform float uSoot;varying float vAlpha;varying float vAngle;void main(){vec2 p=gl_PointCoord-.5;float c=cos(vAngle),s=sin(vAngle);vec2 uv=mat2(c,-s,s,c)*p+.5;vec3 smokeColor=uColor+vec3(.035,.04,.045)*smoothstep(.15,.85,length(uv-.5)*2.)*uSoot;gl_FragColor=vec4(smokeColor,texture2D(map,uv).a*vAlpha);}`});
  const points=new THREE.Points(geo,mat);points.frustumCulled=false;points.renderOrder=7;points.name=house?'White smoke from the station chimney':exhaust?'Dark coal smoke from the locomotive stack':'White pressure-release steam';root.add(points);
  let burst=0,lastT=0;const trail=[];const emittedOrigin=V();function sourceAt(time){if(!trail.length)return origin;for(let i=trail.length-1;i>=0;i--)if(trail[i].t<=time)return trail[i].p;return trail[0].p;}
  function update(t){const dt=Math.max(0,t-lastT);lastT=t;if(!house){if(!trail.length||t-trail.at(-1).t>.065)trail.push({t,p:origin.clone()});while(trail.length>1&&trail[1].t<t-6)trail.shift();}burst*=Math.exp(-dt/1.4);mat.uniforms.uTime.value=t;for(let i=0;i<n;i++){const speed=house?.17:pressure?.43:.29,age=(t*speed+phases[i])%1,emitted=t-age/speed,pulse=house?1:.34+.66*Math.pow(Math.max(0,Math.sin(emitted*3.4)),2);const from=house?origin:sourceAt(emitted);pos[i*3]=from.x-age*(house?.65:.30)+Math.sin(t*.65+phases[i]*10)*age*.17;pos[i*3+1]=from.y+Math.pow(age,.78)*(house?2.32:pressure?.85+burst*.40:1.85+burst*.35);pos[i*3+2]=from.z+age*(pressure?.35:-.18)+drift[i]*age*.26;size[i]=.13+age*(house?.96:pressure?.48:.77)+burst*.08;const density=house?.145:pressure?.018+burst*.30:exhaust?.36:.23;opacity[i]=Math.pow(Math.sin(age*Math.PI),.8)*density*pulse*(1+burst*.55);}geo.attributes.position.needsUpdate=true;geo.attributes.aSize.needsUpdate=true;geo.attributes.aAlpha.needsUpdate=true;}
  return{update,material:mat,boost(){burst=1;},diagnostics(){return{kind,particles:n,burst};}};
}


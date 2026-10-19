import * as THREE from 'three';
import {V,texture,mesh} from './craft.js';
import {GROUND} from './world-model.js';

// Bounded, ray-integrated participating media. The proxy mesh only bounds the integral;
// its faces are never drawn as a solid or uniformly transparent cone.
function lightVolume(root,source,target,angle,length,density,color,light,aperture=null){
  const direction=target.clone().sub(source).normalize(),radius=Math.tan(angle)*length;
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:false,side:THREE.BackSide,blending:THREE.AdditiveBlending,
    uniforms:{uSource:{value:source.clone()},uDirection:{value:direction},uAngle:{value:angle},uLength:{value:length},uDensity:{value:density},uColor:{value:new THREE.Color(color)},uNight:{value:1},uDepth:{value:null},uResolution:{value:new THREE.Vector2(1920,1080)},uNear:{value:.1},uFar:{value:180},uForward:{value:V(0,0,-1)},uWindow:{value:aperture?1:0},uWindowCenter:{value:aperture?.center.clone()||V()},uWindowNormal:{value:aperture?.normal.clone()||V(0,0,1)},uWindowRight:{value:aperture?V().crossVectors(V(0,1,0),aperture.normal).normalize():V(1,0,0)},uWindowSize:{value:new THREE.Vector2(aperture?.width||1,aperture?.height||1)},uShadow:{value:null},uShadowMatrix:{value:light.shadow.matrix},uHasShadow:{value:0}},
    vertexShader:`varying vec3 vWorld;void main(){vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader:`#include <packing>
      varying vec3 vWorld;uniform vec3 uSource;uniform vec3 uDirection;uniform vec3 uColor;uniform float uAngle;uniform float uLength;uniform float uDensity;uniform float uNight;uniform sampler2D uDepth;uniform vec2 uResolution;uniform float uNear;uniform float uFar;uniform vec3 uForward;
      uniform float uWindow;uniform vec3 uWindowCenter;uniform vec3 uWindowNormal;uniform vec3 uWindowRight;uniform vec2 uWindowSize;uniform sampler2D uShadow;uniform mat4 uShadowMatrix;uniform float uHasShadow;
      float apertureMask(vec3 p){
        vec3 ray=p-uSource;float planeDistance=dot(uWindowCenter-uSource,uWindowNormal),along=dot(ray,uWindowNormal);if(along<=planeDistance)return 0.;
        vec3 hit=uSource+ray*(planeDistance/along)-uWindowCenter;vec2 xy=vec2(dot(hit,uWindowRight),hit.y);vec2 halfSize=uWindowSize*.5;
        float edge=min(halfSize.x-abs(xy.x),halfSize.y-abs(xy.y));float archY=xy.y-(halfSize.y-halfSize.x);
        if(archY>0.)edge=min(edge,halfSize.x-length(vec2(xy.x,archY)));
        float open=smoothstep(-.006,.014,edge);float bars=smoothstep(.012,.024,abs(xy.x));
        bars*=smoothstep(.008,.022,abs(xy.y+uWindowSize.y*.035));bars*=smoothstep(.007,.018,abs(xy.y-uWindowSize.y*.27));return open*bars;
      }
      float litAt(vec3 p){if(uHasShadow<.5)return 1.;vec4 shadow=uShadowMatrix*vec4(p,1.);vec3 sc=shadow.xyz/shadow.w;if(sc.x<0.||sc.x>1.||sc.y<0.||sc.y>1.||sc.z>1.)return 0.;float stored=unpackRGBAToDepth(texture2D(uShadow,sc.xy));return smoothstep(sc.z-.0018,sc.z-.0003,stored);}
      void main(){vec3 rd=normalize(vWorld-cameraPosition),co=cameraPosition-uSource;float c=cos(uAngle),dn=dot(rd,uDirection),cn=dot(co,uDirection);
        float A=dn*dn-c*c,B=2.*(dn*cn-c*c*dot(rd,co)),C=cn*cn-c*c*dot(co,co),D=B*B-4.*A*C;if(D<=0.||abs(A)<.00001||abs(dn)<.00001)discard;
        float r1=(-B-sqrt(D))/(2.*A),r2=(-B+sqrt(D))/(2.*A);float lo=min(r1,r2),hi=max(r1,r2);float cap1=-cn/dn,cap2=(uLength-cn)/dn;lo=max(max(lo,min(cap1,cap2)),0.);hi=min(hi,max(cap1,cap2));
        float sceneDepth=texture2D(uDepth,gl_FragCoord.xy/uResolution).x;float viewZ=uNear*uFar/((uFar-uNear)*sceneDepth-uFar);hi=min(hi,-viewZ/max(.01,dot(rd,uForward)));if(hi<=lo)discard;
        float sum=0.,stepSize=(hi-lo)/28.;for(int i=0;i<28;i++){vec3 p=cameraPosition+rd*(lo+(float(i)+.5)*stepSize);if(p.y<1.50)continue;
          vec3 q=p-uSource;float h=dot(q,uDirection),rad=length(q-uDirection*h)/max(.035,h*tan(uAngle));float edge=exp(-pow(rad,4.)*3.5);
          float aperture=uWindow>.5?apertureMask(p):1.;float ends=smoothstep(0.,.12,h)*(1.-smoothstep(uLength*.65,uLength,h));float atten=1./(1.+h*h*.20);sum+=edge*ends*atten*aperture*litAt(p)*stepSize;
        }float a=(1.-exp(-sum*uDensity))*(.12+.88*uNight);gl_FragColor=vec4(uColor,a);
      }`});
  mat.userData.sourceLocal=source.clone();mat.userData.directionLocal=direction.clone();mat.userData.aperture=aperture;mat.userData.light=light;const cone=mesh(root,new THREE.ConeGeometry(radius,length,48,1,true),mat);cone.position.copy(source).addScaledVector(direction,length/2);cone.quaternion.setFromUnitVectors(V(0,-1,0),direction);cone.castShadow=false;cone.receiveShadow=false;cone.renderOrder=2;cone.name=aperture?'Window light · aperture and mullion shadow integral':'Ray-integrated warm light shaft';return mat;
}

export function makePhotographicLights(root,lampPositions,train,windows=[]){
  const lights=[],volumes=[];
  const cookie=texture(256,256,(c,w,h)=>{c.fillStyle='#000';c.fillRect(0,0,w,h);c.shadowColor='#fff4d8';c.shadowBlur=7;c.fillStyle='#fff4d8';for(let x of [.14,.53])for(let y of [.12,.53])c.fillRect(w*x,h*y,w*.31,h*.33);c.shadowBlur=0;c.fillStyle='#090b09';c.fillRect(w*.47,h*.08,w*.065,h*.84);c.fillRect(w*.09,h*.465,w*.82,h*.065);});
  function spot(source,target,{power=18,angle=.43,distance=5,shadow=false,map=null,volume=.1,color=0xffd49b,aperture=null,resolution=1024}={}){
    const light=new THREE.SpotLight(color,power,distance,angle,.6,2);light.position.copy(source);light.target.position.copy(target);light.castShadow=shadow;if(map)light.map=map;
    if(shadow){light.shadow.mapSize.set(resolution,resolution);light.shadow.camera.near=.08;light.shadow.camera.far=distance;light.shadow.bias=-.00008;light.shadow.normalBias=aperture?.003:.018;light.shadow.radius=2;}
    root.add(light,light.target);lights.push({light,power});volumes.push(lightVolume(root,source,target,angle,source.distanceTo(target)+.12,volume,color,light,aperture));return light;
  }
  lampPositions.forEach((p,i)=>{const source=p.clone().add(V(0,-.20,0)),target=V(p.x+(i===0?.16:i===1?.3:-.12),GROUND+.035,p.z+(i===2?-.3:.95));spot(source,target,{power:24,angle:.48,shadow:i===0,volume:.23});});
  // Each projector is INSIDE the room. Actual wall openings and frame geometry shape
  // its shadow on the snow; the same aperture and shadow map shape airborne light.
  windows.forEach((aperture,i)=>{
    const source=aperture.center.clone().addScaledVector(aperture.normal,-.78).add(V(0,.52,0)),direction=aperture.center.clone().sub(source).normalize(),target=aperture.center.clone().addScaledVector(direction,2.85);
    spot(source,target,{power:48,angle:.66,shadow:true,volume:.31,distance:4.8,color:0xffce93,aperture,resolution:aperture.normal.x<-.5||aperture.normal.z<-.5?512:1024});
  });
  const head=spot(train.headPos.clone().add(V(.055,0,-.04)),V(4.02,GROUND+.04,.83),{power:14,angle:.22,distance:4.2,volume:.13,color:0xffe3b7});
  const forward=V();function update(t,night,camera,normalTarget){lights.forEach(({light,power},i)=>light.intensity=power*(.025+.975*night)*(1+Math.sin(t*1.4+i)*.006));root.updateWorldMatrix(true,false);if(camera)camera.getWorldDirection(forward);volumes.forEach(m=>{m.uniforms.uSource.value.copy(m.userData.sourceLocal).applyMatrix4(root.matrixWorld);m.uniforms.uDirection.value.copy(m.userData.directionLocal).transformDirection(root.matrixWorld);m.uniforms.uNight.value=night;
    const a=m.userData.aperture,l=m.userData.light;if(a){m.uniforms.uWindowCenter.value.copy(a.center).applyMatrix4(root.matrixWorld);m.uniforms.uWindowNormal.value.copy(a.normal).transformDirection(root.matrixWorld);m.uniforms.uWindowRight.value.crossVectors(V(0,1,0),a.normal).normalize().transformDirection(root.matrixWorld);}
    m.uniforms.uHasShadow.value=l.castShadow&&l.shadow.map?1:0;m.uniforms.uShadow.value=l.shadow.map?.texture||null;
    if(normalTarget){m.uniforms.uDepth.value=normalTarget.depthTexture;m.uniforms.uResolution.value.set(normalTarget.width,normalTarget.height);m.uniforms.uNear.value=camera.near;m.uniforms.uFar.value=camera.far;m.uniforms.uForward.value.copy(forward);}});}
  return {update,count:lights.length,volumes:volumes.length,windows:windows.length,shadowMaps:lights.filter(e=>e.light.castShadow).length};
}

import * as THREE from 'three';
import {SPHERE} from './atmosphere.js';
export const VIEWS=[
  {title:'收藏全景',caption:'The winter keeps its little secrets.',theta:.47,phi:1.32,r:25.7,target:[0,4.65,0],fov:35},
  {title:'雪夜站房',caption:'A warm light at the end of the line.',theta:-.11,phi:1.29,r:19.6,target:[-.65,3.72,-.45],fov:30},
  {title:'蒸汽来信',caption:'One last train, a thousand stories.',theta:1.07,phi:1.34,r:18.9,target:[.7,3.05,1.2],fov:28},
  {title:'松林侧影',caption:'Beyond the platform, the forest sleeps.',theta:-1.03,phi:1.28,r:24.1,target:[0,4.45,0],fov:34},
  {title:'屋顶落雪',caption:'Every rooftop holds a little winter.',theta:.32,phi:.64,r:24.2,target:[-.1,3.65,0],fov:34},
  {title:'时光背面',caption:'There is a story on the other side.',theta:3.06,phi:1.28,r:25.1,target:[0,4.6,0],fov:35}
];
export function poseFor(view){return new THREE.Vector3(...view.target).add(new THREE.Vector3().setFromSpherical(new THREE.Spherical(view.r,view.phi,view.theta)));}
export function createFlight(position,target,fov,view,duration=2.7){const from=new THREE.Spherical().setFromVector3(position.clone().sub(SPHERE.center)),end=new THREE.Spherical().setFromVector3(poseFor(view).sub(SPHERE.center));end.theta=from.theta+Math.atan2(Math.sin(end.theta-from.theta),Math.cos(end.theta-from.theta));return{from,end,targetFrom:target.clone(),targetTo:new THREE.Vector3(...view.target),fovFrom:fov,fovTo:view.fov,t:0,duration};}
const spherical=new THREE.Spherical();
export function sampleFlight(flight,progress,outPosition,outTarget){const f=Math.max(0,Math.min(1,progress)),s=f*f*f*(f*(f*6-15)+10);spherical.radius=THREE.MathUtils.lerp(flight.from.radius,flight.end.radius,s);spherical.phi=THREE.MathUtils.lerp(flight.from.phi,flight.end.phi,s);spherical.theta=THREE.MathUtils.lerp(flight.from.theta,flight.end.theta,s);outPosition.setFromSpherical(spherical).add(SPHERE.center);outTarget.lerpVectors(flight.targetFrom,flight.targetTo,s);return THREE.MathUtils.lerp(flight.fovFrom,flight.fovTo,s);}

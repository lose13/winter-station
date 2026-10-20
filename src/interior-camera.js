import * as THREE from 'three';

// Poses are authored in the existing station's local coordinates, above its real
// wooden floor. Entering a sealed miniature uses an opaque dissolve, not a flight
// through its wall. Once inside, only the look direction and lens can change.
const ORIGIN=new THREE.Vector3(-.82,1.57,-.88);
export const ROOM_NEAR=.025;
export const ROOM_VIEWS=[
  {id:'waiting-room',title:'候车室全景',caption:'A little warmth, behind the frosted glass.',position:[-1.30,1.62,.83],target:[.35,1.25,-.35],fov:70,portrait:{target:[.75,1.30,-.20],fov:76}},
  {id:'window-tea',title:'窗边茶话',caption:'Snow outside. A cup of tea inside.',position:[.26,1.55,-.17],target:[-.18,1.35,.80],fov:66,portrait:{target:[-.90,1.38,.79],fov:72}},
  {id:'fireside-reading',title:'炉边阅读',caption:'One more page before the last train.',position:[.45,1.42,.46],target:[.96,1.19,-.30],fov:64,portrait:{position:[.40,1.65,.80],target:[.94,1.20,-.19],fov:76}}
];
export function roomPose(index,portrait=false){
  const view=ROOM_VIEWS[THREE.MathUtils.clamp(index,0,ROOM_VIEWS.length-1)];
  const composition=portrait?{...view,...view.portrait}:view;
  return {view,portrait,baseFov:composition.fov,position:new THREE.Vector3(...composition.position).add(ORIGIN),target:new THREE.Vector3(...composition.target).add(ORIGIN)};
}
export function createRoomLook(index,portrait=false){
  const pose=roomPose(index,portrait),direction=pose.target.clone().sub(pose.position),spherical=new THREE.Spherical().setFromVector3(direction);
  return {...pose,theta:spherical.theta,phi:spherical.phi,yaw:0,pitch:0,yawTarget:0,pitchTarget:0,fov:pose.baseFov,fovTarget:pose.baseFov};
}
const direction=new THREE.Vector3(),sphere=new THREE.Spherical();
export function sampleRoomLook(look,yaw,pitch,outPosition,outTarget,matrix=null){
  sphere.set(1.6,look.phi+THREE.MathUtils.clamp(pitch,-.35,.35),look.theta+yaw);
  direction.setFromSpherical(sphere);outPosition.copy(look.position);outTarget.copy(look.position).add(direction);
  if(matrix){outPosition.applyMatrix4(matrix);outTarget.applyMatrix4(matrix);}
}
export function roomLens(value){return THREE.MathUtils.clamp(value,48,76);}

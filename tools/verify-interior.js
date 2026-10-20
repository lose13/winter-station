import * as THREE from 'three';
import assert from 'node:assert/strict';
import {makeStation} from '../src/world-model.js';
import {ROOM_VIEWS,ROOM_NEAR,createRoomLook,sampleRoomLook,roomLens} from '../src/interior-camera.js';

export function verifyInteriorCameras(){
  const M=new Proxy({}, {get:(o,k)=>o[k]??(o[k]=new THREE.MeshStandardMaterial({side:THREE.DoubleSide}))});M.windowGlass.transparent=true;
  const previousDocument=globalThis.document;globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})})};
  const root=new THREE.Group();let station;try{station=makeStation(root,M);}finally{if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;}
  assert.equal(ROOM_VIEWS.length,3);const ids=new Set(ROOM_VIEWS.map(v=>v.id));assert.equal(ids.size,3);
  const ray=new THREE.Raycaster(),position=new THREE.Vector3(),target=new THREE.Vector3(),direction=new THREE.Vector3(),right=new THREE.Vector3(),up=new THREE.Vector3(),corner=new THREE.Vector3(),fixed=new THREE.Vector3(),normalUp=new THREE.Vector3(0,1,0);
  const camera=new THREE.PerspectiveCamera();camera.near=ROOM_NEAR;let rays=0,minimumClearance=Infinity;
  for(const rotation of [[0,0],[.013,.025],[-.013,-.025]]){
    root.rotation.set(rotation[0],0,rotation[1]);root.updateMatrixWorld(true);
    for(let index=0;index<ROOM_VIEWS.length;index++)for(const portrait of [false,true]){
      const look=createRoomLook(index,portrait),aspect=portrait?390/844:16/9;fixed.copy(look.position).applyMatrix4(root.matrixWorld);
      for(const axis of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){
        ray.set(fixed,new THREE.Vector3(...axis));ray.far=4;const hit=ray.intersectObject(station,true).find(h=>!h.object.material?.transparent);if(hit)minimumClearance=Math.min(minimumClearance,hit.distance);
      }
      for(const yaw of [-Math.PI,-Math.PI*.75,-Math.PI*.5,-Math.PI*.25,0,Math.PI*.25,Math.PI*.5,Math.PI*.75,Math.PI])for(const pitch of [-.35,0,.35])for(const lens of [48,look.fov,76]){
        sampleRoomLook(look,yaw,pitch,position,target,root.matrixWorld);assert.ok(position.distanceTo(fixed)<1e-10,'Looking around translates the camera into furniture');
        camera.position.copy(position);camera.aspect=aspect;camera.fov=lens;camera.lookAt(target);camera.updateMatrixWorld(true);camera.getWorldDirection(direction);right.setFromMatrixColumn(camera.matrixWorld,0);up.setFromMatrixColumn(camera.matrixWorld,1);
        const halfH=ROOM_NEAR*Math.tan(THREE.MathUtils.degToRad(lens)/2),halfW=halfH*aspect;
        for(const [x,y] of [[-1,-1],[-1,1],[1,-1],[1,1],[0,0]]){
          corner.copy(position).addScaledVector(direction,ROOM_NEAR).addScaledVector(right,x*halfW).addScaledVector(up,y*halfH);normalUp.copy(corner).sub(position);const distance=normalUp.length();normalUp.normalize();ray.set(position,normalUp);ray.far=distance+.015;
          const hit=ray.intersectObject(station,true).find(h=>!h.object.material?.transparent);assert.ok(!hit,'Interior near plane intersects a wall, ceiling or furniture');rays++;
        }
      }
    }
  }
  assert.ok(minimumClearance>.075);assert.equal(roomLens(10),48);assert.equal(roomLens(150),76);
  root.rotation.set(0,0,0);root.updateMatrixWorld(true);ray.set(new THREE.Vector3(-.82,2.5,-.88),new THREE.Vector3(0,-1,0));ray.far=.3;
  const floor=ray.intersectObject(station,true).find(h=>!h.object.material?.transparent);assert.ok(floor&&(floor.object.material===M.oak||floor.object.material===M.darkwood),'The exterior moulding hides the oak floor');
  return {roomViews:ROOM_VIEWS.map(v=>v.id),near:ROOM_NEAR,nearPlaneRays:rays,wallOrFurnitureIntersections:0,minimumAxisClearance:minimumClearance,stationaryLookPassed:true,shakeTransforms:3,portraitAndLandscape:true,lensRange:[48,76],oakFloorVisible:true,pendantShadowLights:station.userData.interiorLights.filter(l=>l.castShadow).length};
}

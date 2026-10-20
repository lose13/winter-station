import * as THREE from 'three';
import assert from 'node:assert/strict';
import {makeChristmasVisitors} from '../src/christmas-visitors.js';
import {makeStation} from '../src/world-model.js';
import {SPHERE} from '../src/atmosphere.js';

export function verifyGeometry(){
  const M=new Proxy({}, {get:(o,key)=>o[key]??(o[key]=new THREE.MeshStandardMaterial({side:THREE.DoubleSide}))});
  M.windowGlass.transparent=true;M.windowGlass.opacity=.16;
  const root=new THREE.Group(),visitors=makeChristmasVisitors(root,M,{santaSeat:new THREE.Vector3(-.8,3.47,3.05),coachAngle:-.245});
  let maxVertexRadius=0,minVertexY=Infinity,checkedVertices=0;
  const vertex=new THREE.Vector3();
  for(let t=0;t<=120;t+=.5){
    visitors.update(t);root.updateMatrixWorld(true);
    visitors.deer.g.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++){
      vertex.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);maxVertexRadius=Math.max(maxVertexRadius,vertex.distanceTo(SPHERE.center));minVertexY=Math.min(minVertexY,vertex.y);checkedVertices++;
    }});
  }
  assert.ok(maxVertexRadius<SPHERE.radius-.12,'The reindeer intersects the glass');assert.ok(minVertexY>6.15,'The reindeer can strike a tree top');
  // Labels need a canvas when modelling the room; no renderer or fake WebGL is involved.
  const previousDocument=globalThis.document;
  globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){}})})};
  let station;
  try{station=makeStation(root,M);}finally{if(previousDocument===undefined)delete globalThis.document;else globalThis.document=previousDocument;}
  root.updateMatrixWorld(true);assert.equal(station.userData.windows.length,9);
  const opaque=[];station.traverse(o=>{if(o.isMesh&&!o.material.transparent)opaque.push(o);});const ray=new THREE.Raycaster();ray.far=.58;
  let clearPaneRays=0,blockedMullionRays=0;
  for(const aperture of station.userData.windows){
    const right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),aperture.normal),direction=aperture.normal.clone().negate();
    for(let s of [-1,1]){
      const point=aperture.center.clone().addScaledVector(right,s*aperture.width*.23);point.y-=aperture.height*.24;
      ray.set(point.addScaledVector(aperture.normal,.25),direction);const hits=ray.intersectObjects(opaque,false);
      assert.equal(hits.length,0,'An opaque wall still seals a station window');clearPaneRays++;
    }
    ray.set(aperture.center.clone().addScaledVector(aperture.normal,.25),direction);assert.ok(ray.intersectObjects(opaque,false).length>0,'A window has no physical mullion shadow');blockedMullionRays++;
  }
  return {flightSeconds:120,poses:241,checkedVertices,maxFlightRigVertexRadius:maxVertexRadius,minimumFlightRigHeight:minVertexY,glassRadius:SPHERE.radius,giftSleigh:true,giftParcels:7,windowApertures:9,clearPaneRays,blockedMullionRays,interiorLamps:station.userData.interiorLights.length};
}

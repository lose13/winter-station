import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import {createMaterials,V,rand,mesh,cyl,torus,batch,texture} from './craft.js';
import {buildWorld} from './world-model.js';
import {makeTrain} from './train.js';
import {makeGlass,makeSnow,makeSteam,makeHalos,softTexture,SPHERE} from './atmosphere.js';
import {Soundscape} from './audio.js';
import {VIEWS as views,createFlight,sampleFlight} from './camera-route.js';
import {createTreeWind,makeChristmas,makePeople} from './life.js';
import {makePhotographicLights} from './lighting.js';
import {makeChristmasVisitors} from './christmas-visitors.js';
import {makeStationStory} from './station-story.js';
import {makeParticleEffects} from './particle-effects.js';
import {ROOM_VIEWS,ROOM_NEAR,createRoomLook,sampleRoomLook,roomLens} from './interior-camera.js';

const $=s=>document.querySelector(s),query=new URLSearchParams(location.search),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const runtimeErrors=[];window.addEventListener('error',e=>runtimeErrors.push(e.message));window.addEventListener('unhandledrejection',e=>runtimeErrors.push(String(e.reason)));
let toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2600);}
function fail(error){$('#loading').classList.add('done');$('#error').hidden=false;$('#error p').textContent='请使用支持 WebGL 2 的 Chrome 或 Edge，并启用硬件加速。错误信息：'+error.message;console.error(error);}

async function init(){
  const canvas=$('#world');const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance',preserveDrawingBuffer:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.14;renderer.outputColorSpace=THREE.SRGBColorSpace;
  const scene=new THREE.Scene();scene.background=new THREE.Color(0x14232b);scene.fog=new THREE.FogExp2(0x14232b,.014);
  const camera=new THREE.PerspectiveCamera(35,innerWidth/innerHeight,.1,180);camera.position.set(12,10.5,21);let baseFov=35;
  const pmrem=new THREE.PMREMGenerator(renderer),env=new THREE.Scene();env.background=new THREE.Color(0x60727a);
  // Only three long softboxes: restrained photographic highlights, without bright cubes.
  const cardMap=texture(64,256,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,0);g.addColorStop(0,'#172126');g.addColorStop(.25,'#dde7e5');g.addColorStop(.5,'#ffffff');g.addColorStop(.75,'#dde7e5');g.addColorStop(1,'#172126');c.fillStyle=g;c.fillRect(0,0,w,h);});
  for(const [x,y,z,w,h]of[[-7,5,1,.75,9],[7,5,-2,.7,8],[-2,10,-3,5,.45]]){const card=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:cardMap,color:new THREE.Color(2,2,2),side:THREE.DoubleSide}));card.position.set(x,y,z);card.lookAt(0,4,0);env.add(card);}
  scene.environment=pmrem.fromScene(env,.02).texture;scene.environmentIntensity=.44;env.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});pmrem.dispose();
  const controls=new OrbitControls(camera,canvas);controls.target.set(0,4.7,0);controls.enableDamping=true;controls.dampingFactor=.055;controls.enablePan=false;controls.rotateSpeed=.5;controls.zoomSpeed=.7;controls.minDistance=14.5;controls.maxDistance=35;controls.minPolarAngle=.42;controls.maxPolarAngle=1.57;controls.autoRotate=!reduced&&!query.has('still');controls.autoRotateSpeed=1.2;
  const M=createMaterials();
  const globe=new THREE.Group();globe.name='Winter Station · complete collectible';scene.add(globe);
  const staticModels=new THREE.Group();globe.add(staticModels);
  const treeWind=createTreeWind(M),props=buildWorld(staticModels,M,treeWind.materials);const train=makeTrain(staticModels,M,globe);const christmas=makeChristmas(staticModels,M,treeWind.materials);
  staticModels.updateMatrixWorld(true);
  const triangles=batch(staticModels)+train.triangles;treeWind.connect(staticModels);const people=makePeople(globe,M),visitors=makeChristmasVisitors(globe,M,train);
  const glass=makeGlass(globe,M),snow=makeSnow(globe,2600),steam=makeSteam(globe,train.steamOrigin,{kind:'exhaust'}),pressureSteam=makeSteam(globe,train.pressureOrigin,{kind:'pressure'}),chimneySmoke=makeSteam(globe,V(-1.70,5.21,-1.43),{kind:'chimney'}),halos=makeHalos(globe,[...props.glows,train.headPos]);
  const photographicLights=makePhotographicLights(globe,props.glows,train,props.windows);
  // Raised photography plinth, with an oiled satin surface and a fine brass edge.
  const floorMat=new THREE.MeshStandardMaterial({color:0x132024,roughness:.42,metalness:.23});cyl(scene,6.65,6.75,.34,floorMat,0,-.38,0,160);torus(scene,6.66,.018,M.aged,0,-.22,0).rotation.x=Math.PI/2;
  const floor=mesh(scene,new THREE.PlaneGeometry(2000,2000),new THREE.MeshStandardMaterial({color:0x111c22,roughness:.49,metalness:.16}),0,-.56,0);floor.rotation.x=-Math.PI/2;floor.castShadow=false;
  // An authored soft contact shadow under the turned base complements real shadows.
  const contact=mesh(scene,new THREE.PlaneGeometry(11.1,11.1),new THREE.MeshBasicMaterial({map:texture(256,256,(c,w,h)=>{const r=c.createRadialGradient(w/2,h/2,40,w/2,h/2,w/2);r.addColorStop(0,'rgba(0,0,0,.65)');r.addColorStop(.7,'rgba(0,0,0,.42)');r.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=r;c.fillRect(0,0,w,h);}),transparent:true,depthWrite:false}),0,-.203,0);contact.rotation.x=-Math.PI/2;contact.castShadow=false;
  const hemi=new THREE.HemisphereLight(0xa6c9e2,0x5b5540,1.15);scene.add(hemi);
  const moon=new THREE.DirectionalLight(0xb4d9f6,2.7);moon.position.set(-6,12,7);moon.castShadow=true;moon.shadow.mapSize.set(2048,2048);moon.shadow.camera.left=-7;moon.shadow.camera.right=7;moon.shadow.camera.top=12;moon.shadow.camera.bottom=-5;moon.shadow.camera.near=.5;moon.shadow.camera.far=34;moon.shadow.normalBias=.035;moon.shadow.bias=-.00013;moon.shadow.radius=3;moon.target.position.set(0,2,0);scene.add(moon,moon.target);
  const warmFill=new THREE.DirectionalLight(0xffd8a0,1.15);warmFill.position.set(5,6,9);scene.add(warmFill);
  const rim=new THREE.DirectionalLight(0x81bce9,2.25);rim.position.set(3,9,-7);scene.add(rim);
  const interior=new THREE.PointLight(0xffb85f,12,7,2);interior.position.set(-.82,3.06,.12);globe.add(interior);
  // Out-of-focus practical lights in the studio, physically located behind the collectible.
  const bokehMap=softTexture('241,191,120');for(let i=0;i<16;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:bokehMap,color:0xffc78c,transparent:true,opacity:rand(.14,.32),depthWrite:false,blending:THREE.AdditiveBlending,fog:false}));s.position.set(rand(-27,28),rand(1.4,13),rand(-29,-19));const r=rand(.15,.55);s.scale.set(r,r,1);scene.add(s);}
  const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
  const ao=new GTAOPass(scene,camera,innerWidth,innerHeight);ao.updateGtaoMaterial({radius:.22,thickness:1,distanceFallOff:.9,scale:1});ao.blendIntensity=.65;
  const originalOverride=ao.overrideVisibility.bind(ao);ao.overrideVisibility=()=>{originalOverride();scene.traverse(o=>{if(o.isSprite||o.material?.transparent)o.visible=false;});};composer.addPass(ao);
  // Fill one current-frame opaque depth/normal buffer before the beauty pass. Both GTAO
  // and the volumetric lights consume it; glass, snow and shafts never occlude it.
  ao.setGBuffer(ao.normalRenderTarget.depthTexture,ao.normalRenderTarget.texture);
  const bloom=new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.20,.55,1.3);composer.addPass(bloom);composer.addPass(new OutputPass());const fxaa=new ShaderPass(FXAAShader);composer.addPass(fxaa);
  let transition=null,night=1,nightTarget=1,shakeAge=99,activeView=0,elapsed=0,frames=0,frameAccum=0,fps=0,visible=true,frameOffset=.115,frameOffsetTarget=.115;
  let roomLook=null,roomIndex=-1,roomSaved=null,roomDrag=null,navFade=null,coverAlpha=0;
  let pendantShadowFrame=-1;
  document.body.dataset.scene='exterior';
  const sounds=new Soundscape(),nightColor=new THREE.Color(0x14232b),dayColor=new THREE.Color(0x3b4e56),moonNight=new THREE.Color(0xb4d9f6),moonDay=new THREE.Color(0xffe4bb);
  const narrative=makeStationStory(globe,M,{train,people,visitors,props,sounds,steam,pressureSteam});if(query.has('qa')&&query.has('story'))narrative.seek(Number(query.get('story'))||0);
  const particles=makeParticleEffects(globe,{visitors,delivery:narrative.delivery});
  const tmp=new THREE.Vector3(),sphere=new THREE.Spherical(),clock=new THREE.Clock();
  function setOrbit(value){value=!!value&&!roomLook&&!roomSaved;controls.autoRotate=value;$('#orbit').setAttribute('aria-pressed',value);}
  setOrbit(controls.autoRotate);
  function framing(){const w=innerWidth,h=innerHeight;camera.aspect=w/h;camera.fov=roomLook?baseFov:THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(baseFov)*.5)*Math.max(1,.95/camera.aspect)));camera.setViewOffset(w,h,roomLook?0:-w*(w<700?0:frameOffset),roomLook?0:h*(w<700?-.035:0),w,h);camera.updateProjectionMatrix();}
  function coverNavigation(switchScene){transition=null;controls.enabled=false;roomDrag=null;navFade={phase:'out',age:0,from:coverAlpha,switchScene};document.body.dataset.travel='room-changing';}
  function updateCover(dt){
    if(!navFade)return;const fade=navFade;fade.age+=dt;
    if(fade.phase==='out'){const f=Math.min(1,fade.age/(reduced?.08:.26));coverAlpha=THREE.MathUtils.lerp(fade.from,1,f*f*(3-2*f));if(f>=1){fade.phase='covered';fade.age=0;}}
    else if(fade.phase==='covered'){fade.switchScene();coverAlpha=1;fade.phase='in';fade.age=0;document.body.dataset.travel='room-changing';}
    else {const f=Math.min(1,fade.age/(reduced?.12:.42));coverAlpha=1-f*f*(3-2*f);if(f>=1){navFade=null;controls.enabled=!roomLook&&!transition;document.body.dataset.travel=transition?'moving':'ready';}}
    $('#camera-curtain').style.opacity=String(coverAlpha);
  }
  function roomUI(inside){
    document.body.dataset.scene=inside?'interior':'exterior';$('#room-panel').hidden=!inside;$('#inside').setAttribute('aria-pressed',inside);$('#inside span').textContent=inside?'球外':'进站';$('#inside').title=inside?'返回雪景球 · I / Esc':'走进候车室 · I';$('#orbit').disabled=inside;
    $('.interaction-hint span').innerHTML=inside?'拖动环顾 <i>·</i> 滚轮调整视野 <i>·</i> Esc 返回球外':'拖动旋转 <i>·</i> 滚轮靠近 <i>·</i> 点击模型发现回应';canvas.setAttribute('aria-label',inside?'3D 候车室，拖动环顾，滚轮调整视野':'3D 雪景球，拖动旋转，滚轮缩放');
  }
  function syncRoomURL(index){const url=new URL(location.href);if(index>=0)url.searchParams.set('room',ROOM_VIEWS[index].id);else url.searchParams.delete('room');try{history.replaceState(null,'',url.href);}catch{/* Some file viewers disallow history updates; navigation remains available. */}}
  function applyRoomCamera(dt=0){
    if(!roomLook)return;const look=roomLook;look.yaw=THREE.MathUtils.damp(look.yaw,look.yawTarget,8,dt);look.pitch=THREE.MathUtils.damp(look.pitch,look.pitchTarget,8,dt);look.fov=THREE.MathUtils.damp(look.fov,look.fovTarget,7,dt);baseFov=look.fov;
    globe.updateWorldMatrix(true,false);sampleRoomLook(look,look.yaw,look.pitch,camera.position,controls.target,globe.matrixWorld);framing();camera.lookAt(controls.target);
  }
  function enterRoom(index=0,instant=false){
    index=THREE.MathUtils.clamp(index,0,ROOM_VIEWS.length-1);
    if(!roomSaved)roomSaved={position:camera.position.clone(),target:controls.target.clone(),fov:baseFov,auto:controls.autoRotate,view:activeView};
    const apply=()=>{roomIndex=index;roomLook=createRoomLook(index,innerWidth/innerHeight<.8);controls.enabled=false;setOrbit(false);camera.near=ROOM_NEAR;renderer.toneMappingExposure=.90;roomUI(true);syncRoomURL(index);$('#room-title').textContent=ROOM_VIEWS[index].title;document.querySelectorAll('[data-room]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.room)===index));applyRoomCamera();if(index===1)narrative.room.greet(0,elapsed,globe.worldToLocal(camera.position.clone()));};
    if(instant){transition=null;apply();document.body.dataset.travel='ready';}else coverNavigation(apply);
  }
  function leaveRoom(destination=null){
    if(!roomSaved)return;const saved=roomSaved;
    coverNavigation(()=>{roomLook=null;roomIndex=-1;roomSaved=null;camera.near=.1;renderer.toneMappingExposure=1.14;baseFov=saved.fov;camera.position.copy(saved.position);controls.target.copy(saved.target);roomUI(false);syncRoomURL(-1);setOrbit(destination===null&&saved.auto);controls.enableDamping=false;controls.update(0);controls.enableDamping=true;framing();camera.lookAt(controls.target);$('#inside').focus({preventScroll:true});if(destination!==null)selectView(destination);});
  }
  function selectView(i,instant=false){
    if(roomLook||roomSaved){leaveRoom(i);return;}
    i=Math.max(0,Math.min(5,i));const v=views[i];controls.enableDamping=false;controls.update(0);controls.enableDamping=true;
    transition=createFlight(camera.position,controls.target,baseFov,v,reduced?.25:2.7);if(instant)transition.t=3;controls.enabled=false;activeView=i;setOrbit(false);document.body.dataset.travel='moving';
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.view)===i));$('#view-number').textContent=`0${i+1} / 06`;$('#view-title').textContent=v.caption;
  }
  function cancelTravel(){if(transition){transition=null;controls.enabled=!roomLook&&!navFade;document.body.dataset.travel=navFade?'room-changing':'ready';}}
  function shake(){snow.shake();shakeAge=0;$('#shake-state').textContent='雪花正在翻腾，片刻后会慢慢落定。';toast('雪花扬起，冬天重新开始。');}
  function setNight(value){nightTarget=value?1:0;$('#daynight').setAttribute('aria-pressed',!!value);$('#daynight span').textContent=value?'雪夜':'冬昼';}
  function toggleUI(force){document.body.classList.toggle('ui-hidden',force===undefined?!document.body.classList.contains('ui-hidden'):force);frameOffsetTarget=document.body.classList.contains('ui-hidden')?0:.115;}
  $('#story').onclick=()=>{const on=narrative.toggle();$('#story').setAttribute('aria-pressed',on);toast(on?'车站的小故事继续了。':'故事已暂停，可以慢慢欣赏。');};$('#shake').onclick=shake;$('#orbit').onclick=()=>{cancelTravel();setOrbit(!controls.autoRotate);};$('#daynight').onclick=()=>setNight(!nightTarget);$('#hide-ui').onclick=()=>toggleUI(true);$('#reset').onclick=()=>{selectView(0);toast('回到冬日的第一眼。');};
  $('#whistle').onclick=async()=>{steam.boost();pressureSteam.boost();try{await sounds.toot();$('#whistle').classList.add('is-playing');toast('呜—— 冬日列车即将出发。');}catch(e){toast('鸣笛音效未能加载，请检查音频文件。');runtimeErrors.push('whistle: '+e.message);}};sounds.whistle.addEventListener('ended',()=>$('#whistle').classList.remove('is-playing'));
  for(let kind of ['music','ambient'])$(`#${kind}`).onclick=async()=>{try{const on=await sounds.toggle(kind);$(`#${kind}`).setAttribute('aria-pressed',on);toast(on?(kind==='music'?'原创圆舞曲 · Christmas at Winter Station':'环境音 · 冬风、蒸汽与远处的钟声'):(kind==='music'?'音乐已关闭':'环境音已关闭'));}catch(e){toast('音频未能播放，请检查 assets 文件夹是否完整。');runtimeErrors.push('audio: '+e.message);}};
  document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>selectView(Number(b.dataset.view)));
  $('#inside').onclick=()=>roomLook||roomSaved?leaveRoom():enterRoom();$('#leave-station').onclick=()=>leaveRoom();document.querySelectorAll('[data-room]').forEach(b=>b.onclick=()=>enterRoom(Number(b.dataset.room)));
  let clickStart=null;canvas.addEventListener('pointerdown',e=>{if(navFade)return;cancelTravel();setOrbit(false);clickStart={x:e.clientX,y:e.clientY,t:performance.now()};if(roomLook){roomDrag={id:e.pointerId,x:e.clientX,y:e.clientY,yaw:roomLook.yawTarget,pitch:roomLook.pitchTarget};canvas.setPointerCapture(e.pointerId);}});
  canvas.addEventListener('pointermove',e=>{if(!roomLook||!roomDrag||roomDrag.id!==e.pointerId)return;roomLook.yawTarget=roomDrag.yaw-(e.clientX-roomDrag.x)*.0036;roomLook.pitchTarget=THREE.MathUtils.clamp(roomDrag.pitch-(e.clientY-roomDrag.y)*.0026,-.35,.35);});
  function releasePointer(){roomDrag=null;clickStart=null;}canvas.addEventListener('pointercancel',releasePointer);canvas.addEventListener('lostpointercapture',releasePointer);window.addEventListener('blur',releasePointer);
  canvas.addEventListener('pointerup',e=>{if(!navFade&&clickStart&&Math.hypot(e.clientX-clickStart.x,e.clientY-clickStart.y)<7&&performance.now()-clickStart.t<700){const message=narrative.pick(e.clientX,e.clientY,camera,canvas.getBoundingClientRect());if(message)toast(message);}releasePointer();if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);});
  canvas.addEventListener('wheel',e=>{if(roomLook){e.preventDefault();roomLook.fovTarget=roomLens(roomLook.fovTarget+e.deltaY*.035);}}, {passive:false});controls.addEventListener('start',()=>setOrbit(false));
  window.addEventListener('keydown',e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const k=e.key.toLowerCase();if(k==='h')toggleUI();if(k==='escape'){toggleUI(false);if(roomSaved)leaveRoom();}if(k==='i')$('#inside').click();if(k===' '){e.preventDefault();shake();}if(k==='p')$('#story').click();if(k==='n')setNight(!nightTarget);if(k==='a')$('#orbit').click();if(k==='r')selectView(0);if(k==='m')$('#music').click();if(k==='e')$('#ambient').click();if(k==='w')$('#whistle').click();if(/^[1-6]$/.test(k))selectView(Number(k)-1);if(/^[7-9]$/.test(k))enterRoom(Number(k)-7);});
  function resize(){if(roomLook&&roomLook.portrait!==(innerWidth/innerHeight<.8)){const previous=roomLook,next=createRoomLook(roomIndex,innerWidth/innerHeight<.8);next.yaw=previous.yaw;next.pitch=previous.pitch;next.yawTarget=previous.yawTarget;next.pitchTarget=previous.pitchTarget;next.fovTarget=roomLens(next.baseFov+previous.fovTarget-previous.baseFov);next.fov=next.fovTarget;roomLook=next;applyRoomCamera();}renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(innerWidth,innerHeight);composer.setPixelRatio(renderer.getPixelRatio());composer.setSize(innerWidth,innerHeight);framing();const dpr=renderer.getPixelRatio();particles.resize(innerHeight,dpr);fxaa.material.uniforms.resolution.value.set(1/(innerWidth*dpr),1/(innerHeight*dpr));snow.material.uniforms.uDpr.value=dpr;steam.material.uniforms.uDpr.value=dpr;pressureSteam.material.uniforms.uDpr.value=dpr;chimneySmoke.material.uniforms.uDpr.value=dpr;christmas.material.uniforms.uDpr.value=dpr;narrative.powder.material.uniforms.uDpr.value=dpr;narrative.room.steamMaterial.uniforms.uDpr.value=dpr;}
  window.addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{visible=!document.hidden;clock.getDelta();if(!visible)sounds.pauseForHidden();else sounds.resume();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();toast('图形上下文已暂停，请重新加载页面。');});
  resize();selectView(Number(query.get('view')||0),true);if(query.get('day')==='1')setNight(false);
  if(query.has('room')){baseFov=sampleFlight(transition,1,camera.position,controls.target);transition=null;const requested=ROOM_VIEWS.findIndex(v=>v.id===query.get('room'));enterRoom(requested>=0?requested:Number(query.get('room'))||0,true);}
  let qaPanel=null;
  const gl=renderer.getContext(),debugInfo=gl.getExtension('WEBGL_debug_renderer_info'),gpu=debugInfo?gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL):'unavailable';
  function diagnostics(){return {ready:true,revision:'1.7.0',webgl:renderer.capabilities.isWebGL2?'WebGL 2':'WebGL',gpu,viewport:[innerWidth,innerHeight],pixelRatio:renderer.getPixelRatio(),drawCallsAllPasses:renderer.info.render.calls,trianglesAllPasses:renderer.info.render.triangles,modelTriangles:triangles,fps:Math.round(fps),view:activeView,camera:camera.position.toArray(),cameraClearance:Number(camera.position.distanceTo(SPHERE.center).toFixed(2)),transition:!!transition||!!navFade,navigation:{mode:roomLook?'interior':'exterior',room:roomLook?.view.id||null,roomIndex,near:camera.near,fov:camera.fov,look:roomLook?[roomLook.yaw,roomLook.pitch]:null,lensTarget:roomLook?.fovTarget||null,fade:coverAlpha,exteriorControlsEnabled:controls.enabled},night:Number(night.toFixed(3)),autoOrbit:controls.autoRotate,uiHidden:document.body.classList.contains('ui-hidden'),snow:snow.diagnostics(),story:narrative.diagnostics(),particles:particles.diagnostics(),life:{people:people.count+2,fairyLights:christmas.count,windTime:treeWind.uniforms.uWindTime.value,windGust:treeWind.uniforms.uWindGust.value,walkerPosition:people.people[1].g.position.toArray(),walkingLegAngle:people.people[1].legs[0].rotation.x,conductorArm:people.people[0].arms[1].rotation.z,locomotive:steam.diagnostics(),pressureValve:pressureSteam.diagnostics(),chimney:chimneySmoke.diagnostics(),christmasVisitors:visitors.diagnostics(),lighting:{projectedLights:photographicLights.count,volumetricBeams:photographicLights.volumes,windowApertures:photographicLights.windows,shadowMaps:photographicLights.shadowMaps,depthClipped:true,shadowClipped:true,interiorRooms:true,interiorShadowMaps:props.interiorLights.filter(l=>l.castShadow).length}},audio:sounds.diagnostics(),externalRequests:performance.getEntriesByType('resource').filter(e=>new URL(e.name).origin!==location.origin&&!e.name.startsWith('data:')).map(e=>e.name),errors:runtimeErrors.slice()};}
  window.WinterStation={ready:true,view:selectView,shake,setNight,diagnostics,toggleUI,controls,scene,camera,renderer,snow};
  if(query.has('qa')){qaPanel=document.createElement('pre');qaPanel.id='qa-output';qaPanel.className='ui';qaPanel.style.cssText='position:fixed;z-index:8;right:20px;top:80px;max-height:75vh;overflow:auto;background:#071319e8;color:#bbd9d0;font:10px monospace;padding:12px;border:1px solid #426461;max-width:340px;pointer-events:none';document.body.append(qaPanel);}
  if(query.has('qa')){const panel=document.createElement('div');panel.id='qa-controls';panel.className='ui';panel.style.cssText='position:fixed;right:20px;bottom:105px;display:flex;gap:5px;z-index:8';for(const [id,label,action]of[['qa-depart','发车片段',()=>narrative.seek(6.5)],['qa-delivery','投递片段',()=>narrative.seek(32)],['qa-landing','落地星光',()=>narrative.seek(38)],['qa-window','窗边问候',()=>narrative.room.greet(1,elapsed)],['qa-start','循环起点',()=>narrative.seek(0)]]){const b=document.createElement('button');b.id=id;b.textContent=label;b.style.cssText='background:#253839;color:#e1ca9d;border:1px solid #687266;padding:8px;font-size:10px';b.onclick=action;panel.append(b);}document.body.append(panel);}
  let qaClock=0,lastStoryPhase='';
  function tick(){requestAnimationFrame(tick);const rawdt=clock.getDelta(),motionDt=Math.min(rawdt,1),dt=Math.min(rawdt,.035);if(!visible)return;elapsed+=motionDt;
    updateCover(motionDt);
    if(transition){const tr=transition;tr.t+=motionDt;const f=Math.min(1,tr.t/tr.duration);baseFov=sampleFlight(tr,f,camera.position,controls.target);framing();camera.lookAt(controls.target);if(f>=1){transition=null;controls.enabled=true;controls.update(0);document.body.dataset.travel='ready';}}
    else if(!roomLook&&!navFade)controls.update(motionDt);
    if(Math.abs(frameOffset-frameOffsetTarget)>.00001){frameOffset=THREE.MathUtils.damp(frameOffset,frameOffsetTarget,4.5,motionDt);framing();}
    night=THREE.MathUtils.damp(night,nightTarget,1.3,motionDt);scene.background.copy(dayColor).lerp(nightColor,night);scene.fog.color.copy(scene.background);hemi.intensity=THREE.MathUtils.lerp(2.5,.75,night);moon.intensity=THREE.MathUtils.lerp(3.7,1.35,night);moon.color.copy(moonDay).lerp(moonNight,night);rim.intensity=THREE.MathUtils.lerp(1.5,1.6,night);warmFill.intensity=THREE.MathUtils.lerp(1.2,.48,night);scene.environmentIntensity=THREE.MathUtils.lerp(.58,.30,night);interior.intensity=THREE.MathUtils.lerp(.5,1.5,night);M.warm.emissiveIntensity=THREE.MathUtils.lerp(.10,.38,night);M.lampGlass.emissiveIntensity=THREE.MathUtils.lerp(.03,.17,night);M.ember.emissiveIntensity=THREE.MathUtils.lerp(1.3,2.3,night);
    const pendantFrame=Math.floor(elapsed*20);props.interiorLights.forEach(l=>{l.intensity=THREE.MathUtils.lerp(.7,6.5,night)*(roomLook?.55:1);if(pendantFrame!==pendantShadowFrame||shakeAge<1.8)l.shadow.needsUpdate=true;});pendantShadowFrame=pendantFrame;if(roomLook)interior.intensity=THREE.MathUtils.lerp(.3,.85,night);M.windowGlass.emissiveIntensity=THREE.MathUtils.lerp(.01,.05,night);props.lights.forEach((l,i)=>l.intensity=(.35+night*1.0)*(1+Math.sin(elapsed*1.6+i*2)*.018));halos.forEach(s=>s.material.opacity=.04+night*.09);snow.material.uniforms.uBrightness.value=.76+night*.18;
    shakeAge+=motionDt;const jiggle=shakeAge<1.8?Math.exp(-shakeAge*3.2):0;globe.rotation.z=Math.sin(shakeAge*21)*.025*jiggle;globe.rotation.x=Math.sin(shakeAge*17)*.013*jiggle;
    const story=narrative.update(motionDt,elapsed,night);particles.update(motionDt,elapsed,night,{clock:narrative.time,dropAge:story.dropAge});snow.setTrainOffset(story.trainOffset);const snowSteps=Math.max(1,Math.ceil(motionDt*60));for(let i=0;i<snowSteps;i++)snow.update(motionDt/snowSteps,elapsed-motionDt+(i+1)*motionDt/snowSteps,story.gust);steam.update(elapsed);pressureSteam.update(elapsed);chimneySmoke.update(elapsed);treeWind.update(elapsed,snow.energy*.6,story.gust);christmas.update(elapsed,night);halos.at(-1).position.copy(train.headPos);$('#story').setAttribute('aria-pressed',narrative.running);document.body.dataset.gift=narrative.delivery.stage;document.body.dataset.story=story.phase;if(lastStoryPhase!==story.phase){$('#story-moment').textContent='车站小故事 · '+story.phase;lastStoryPhase=story.phase;}if(roomLook)applyRoomCamera(motionDt);photographicLights.update(elapsed,night,camera,ao.normalRenderTarget,!!roomLook);if(shakeAge>13&&shakeAge<14)$('#shake-state').textContent='每一片雪，都找到了自己的归处。';
    document.body.dataset.lighting=night<.005?'day':night>.995?'night':'changing';renderer.info.autoReset=false;renderer.info.reset();renderer.shadowMap.needsUpdate=true;ao.overrideVisibility();ao.renderOverride(renderer,ao.normalMaterial,ao.normalRenderTarget,0x7777ff,1);ao.restoreVisibility();composer.render();frames++;frameAccum+=rawdt;qaClock+=motionDt;if(frameAccum>1){fps=frames/frameAccum;frameAccum=0;frames=0;}if(qaPanel&&qaClock>.5){qaPanel.textContent=JSON.stringify(diagnostics(),null,2);qaClock=0;}
  }
  // Compile the assembled materials once before removing the curtain.
  renderer.compile(scene,camera);tick();setTimeout(()=>{$('#loading').classList.add('done');document.body.dataset.ready='true';},300);
  if(!query.has('still')&&!reduced)setTimeout(()=>{if(activeView===0&&!transition)setOrbit(true);},3400);
  console.info('Winter Station ready', {triangles,version:THREE.REVISION,offline:true});
}

init().catch(fail);

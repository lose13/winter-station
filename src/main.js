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
  const treeWind=createTreeWind(M),props=buildWorld(staticModels,M,treeWind.materials);const train=makeTrain(staticModels,M);const christmas=makeChristmas(staticModels,M,treeWind.materials);
  staticModels.updateMatrixWorld(true);
  const triangles=batch(staticModels);treeWind.connect(staticModels);const people=makePeople(globe,M);
  const glass=makeGlass(globe,M),snow=makeSnow(globe,2600),steam=makeSteam(globe,train.steamOrigin,{kind:'exhaust'}),pressureSteam=makeSteam(globe,train.pressureOrigin,{kind:'pressure'}),chimneySmoke=makeSteam(globe,V(-1.70,5.21,-1.43),{kind:'chimney'}),halos=makeHalos(globe,[...props.glows,train.headPos]);
  const photographicLights=makePhotographicLights(globe,props.glows,train);
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
  const sounds=new Soundscape(),nightColor=new THREE.Color(0x14232b),dayColor=new THREE.Color(0x3b4e56),moonNight=new THREE.Color(0xb4d9f6),moonDay=new THREE.Color(0xffe4bb);
  const tmp=new THREE.Vector3(),sphere=new THREE.Spherical(),clock=new THREE.Clock();
  function setOrbit(value){controls.autoRotate=value;$('#orbit').setAttribute('aria-pressed',value);}
  setOrbit(controls.autoRotate);
  function framing(){const w=innerWidth,h=innerHeight;camera.aspect=w/h;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(baseFov)*.5)*Math.max(1,.95/camera.aspect)));camera.setViewOffset(w,h,-w*(w<700?0:frameOffset),h*(w<700?-.035:0),w,h);camera.updateProjectionMatrix();}
  function selectView(i,instant=false){
    i=Math.max(0,Math.min(5,i));const v=views[i];controls.enableDamping=false;controls.update(0);controls.enableDamping=true;
    transition=createFlight(camera.position,controls.target,baseFov,v,reduced?.25:2.7);if(instant)transition.t=3;controls.enabled=false;activeView=i;setOrbit(false);document.body.dataset.travel='moving';
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.view)===i));$('#view-number').textContent=`0${i+1} / 06`;$('#view-title').textContent=v.caption;
  }
  function cancelTravel(){if(transition){transition=null;controls.enabled=true;document.body.dataset.travel='ready';}}
  function shake(){snow.shake();shakeAge=0;$('#shake-state').textContent='雪花正在翻腾，片刻后会慢慢落定。';toast('雪花扬起，冬天重新开始。');}
  function setNight(value){nightTarget=value?1:0;$('#daynight').setAttribute('aria-pressed',!!value);$('#daynight span').textContent=value?'雪夜':'冬昼';}
  function toggleUI(force){document.body.classList.toggle('ui-hidden',force===undefined?!document.body.classList.contains('ui-hidden'):force);frameOffsetTarget=document.body.classList.contains('ui-hidden')?0:.115;}
  $('#shake').onclick=shake;$('#orbit').onclick=()=>{cancelTravel();setOrbit(!controls.autoRotate);};$('#daynight').onclick=()=>setNight(!nightTarget);$('#hide-ui').onclick=()=>toggleUI(true);$('#reset').onclick=()=>{selectView(0);toast('回到冬日的第一眼。');};
  $('#whistle').onclick=async()=>{steam.boost();pressureSteam.boost();try{await sounds.toot();$('#whistle').classList.add('is-playing');toast('呜—— 冬日列车即将出发。');}catch(e){toast('鸣笛音效未能加载，请检查音频文件。');runtimeErrors.push('whistle: '+e.message);}};sounds.whistle.addEventListener('ended',()=>$('#whistle').classList.remove('is-playing'));
  for(let kind of ['music','ambient'])$(`#${kind}`).onclick=async()=>{try{const on=await sounds.toggle(kind);$(`#${kind}`).setAttribute('aria-pressed',on);toast(on?(kind==='music'?'原创圆舞曲 · Christmas at Winter Station':'环境音 · 冬风、蒸汽与远处的钟声'):(kind==='music'?'音乐已关闭':'环境音已关闭'));}catch(e){toast('音频未能播放，请检查 assets 文件夹是否完整。');runtimeErrors.push('audio: '+e.message);}};
  document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>selectView(Number(b.dataset.view)));
  canvas.addEventListener('pointerdown',()=>{cancelTravel();setOrbit(false);});controls.addEventListener('start',()=>setOrbit(false));
  window.addEventListener('keydown',e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const k=e.key.toLowerCase();if(k==='h')toggleUI();if(k==='escape')toggleUI(false);if(k===' '){e.preventDefault();shake();}if(k==='n')setNight(!nightTarget);if(k==='a')$('#orbit').click();if(k==='r')selectView(0);if(k==='m')$('#music').click();if(k==='e')$('#ambient').click();if(k==='w')$('#whistle').click();if(/^[1-6]$/.test(k))selectView(Number(k)-1);});
  function resize(){renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setSize(innerWidth,innerHeight);composer.setPixelRatio(renderer.getPixelRatio());composer.setSize(innerWidth,innerHeight);framing();const dpr=renderer.getPixelRatio();fxaa.material.uniforms.resolution.value.set(1/(innerWidth*dpr),1/(innerHeight*dpr));snow.material.uniforms.uDpr.value=dpr;steam.material.uniforms.uDpr.value=dpr;pressureSteam.material.uniforms.uDpr.value=dpr;chimneySmoke.material.uniforms.uDpr.value=dpr;christmas.material.uniforms.uDpr.value=dpr;}
  window.addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{visible=!document.hidden;clock.getDelta();if(!visible)sounds.pauseForHidden();else sounds.resume();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();toast('图形上下文已暂停，请重新加载页面。');});
  resize();selectView(Number(query.get('view')||0),true);if(query.get('day')==='1')setNight(false);
  let qaPanel=null;
  const gl=renderer.getContext(),debugInfo=gl.getExtension('WEBGL_debug_renderer_info'),gpu=debugInfo?gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL):'unavailable';
  function diagnostics(){return {ready:true,revision:'1.3.0',webgl:renderer.capabilities.isWebGL2?'WebGL 2':'WebGL',gpu,viewport:[innerWidth,innerHeight],pixelRatio:renderer.getPixelRatio(),drawCallsAllPasses:renderer.info.render.calls,trianglesAllPasses:renderer.info.render.triangles,modelTriangles:triangles,fps:Math.round(fps),view:activeView,camera:camera.position.toArray(),cameraClearance:Number(camera.position.distanceTo(SPHERE.center).toFixed(2)),transition:!!transition,night:Number(night.toFixed(3)),autoOrbit:controls.autoRotate,uiHidden:document.body.classList.contains('ui-hidden'),snow:snow.diagnostics(),life:{people:people.count,fairyLights:christmas.count,windTime:treeWind.uniforms.uWindTime.value,windGust:treeWind.uniforms.uWindGust.value,walkerPosition:people.people[1].g.position.toArray(),walkingLegAngle:people.people[1].legs[0].rotation.x,conductorArm:people.people[0].arms[1].rotation.z,locomotive:steam.diagnostics(),pressureValve:pressureSteam.diagnostics(),chimney:chimneySmoke.diagnostics(),lighting:{projectedLights:photographicLights.count,volumetricBeams:photographicLights.volumes,shadowMaps:photographicLights.shadowMaps,depthClipped:true}},audio:sounds.diagnostics(),externalRequests:performance.getEntriesByType('resource').filter(e=>new URL(e.name).origin!==location.origin&&!e.name.startsWith('data:')).map(e=>e.name),errors:runtimeErrors.slice()};}
  window.WinterStation={ready:true,view:selectView,shake,setNight,diagnostics,toggleUI,controls,scene,camera,renderer,snow};
  if(query.has('qa')){qaPanel=document.createElement('pre');qaPanel.id='qa-output';qaPanel.className='ui';qaPanel.style.cssText='position:fixed;z-index:8;right:20px;top:80px;max-height:75vh;overflow:auto;background:#071319e8;color:#bbd9d0;font:10px monospace;padding:12px;border:1px solid #426461;max-width:340px;pointer-events:none';document.body.append(qaPanel);}
  let qaClock=0;
  function tick(){requestAnimationFrame(tick);const rawdt=clock.getDelta(),motionDt=Math.min(rawdt,1),dt=Math.min(rawdt,.035);if(!visible)return;elapsed+=motionDt;
    if(transition){const tr=transition;tr.t+=motionDt;const f=Math.min(1,tr.t/tr.duration);baseFov=sampleFlight(tr,f,camera.position,controls.target);framing();camera.lookAt(controls.target);if(f>=1){transition=null;controls.enabled=true;controls.update(0);document.body.dataset.travel='ready';}}
    else controls.update(motionDt);
    if(Math.abs(frameOffset-frameOffsetTarget)>.00001){frameOffset=THREE.MathUtils.damp(frameOffset,frameOffsetTarget,4.5,motionDt);framing();}
    night=THREE.MathUtils.damp(night,nightTarget,1.3,motionDt);scene.background.copy(dayColor).lerp(nightColor,night);scene.fog.color.copy(scene.background);hemi.intensity=THREE.MathUtils.lerp(2.5,.75,night);moon.intensity=THREE.MathUtils.lerp(3.7,1.35,night);moon.color.copy(moonDay).lerp(moonNight,night);rim.intensity=THREE.MathUtils.lerp(1.5,1.6,night);warmFill.intensity=THREE.MathUtils.lerp(1.2,.48,night);scene.environmentIntensity=THREE.MathUtils.lerp(.58,.30,night);interior.intensity=THREE.MathUtils.lerp(.5,1.5,night);M.warm.emissiveIntensity=THREE.MathUtils.lerp(.10,.38,night);M.lampGlass.emissiveIntensity=THREE.MathUtils.lerp(.03,.17,night);M.ember.emissiveIntensity=THREE.MathUtils.lerp(1.3,2.3,night);
    props.lights.forEach((l,i)=>l.intensity=(.35+night*1.0)*(1+Math.sin(elapsed*1.6+i*2)*.018));halos.forEach(s=>s.material.opacity=.04+night*.09);snow.material.uniforms.uBrightness.value=.76+night*.18;
    shakeAge+=motionDt;const jiggle=shakeAge<1.8?Math.exp(-shakeAge*3.2):0;globe.rotation.z=Math.sin(shakeAge*21)*.025*jiggle;globe.rotation.x=Math.sin(shakeAge*17)*.013*jiggle;
    snow.update(dt,elapsed);steam.update(elapsed);pressureSteam.update(elapsed);chimneySmoke.update(elapsed);treeWind.update(elapsed,snow.energy*.6);christmas.update(elapsed,night);people.update(elapsed);photographicLights.update(elapsed,night,camera,ao.normalRenderTarget);if(shakeAge>13&&shakeAge<14)$('#shake-state').textContent='每一片雪，都找到了自己的归处。';
    document.body.dataset.lighting=night<.005?'day':night>.995?'night':'changing';renderer.info.autoReset=false;renderer.info.reset();renderer.shadowMap.needsUpdate=true;ao.overrideVisibility();ao.renderOverride(renderer,ao.normalMaterial,ao.normalRenderTarget,0x7777ff,1);ao.restoreVisibility();composer.render();frames++;frameAccum+=rawdt;qaClock+=motionDt;if(frameAccum>1){fps=frames/frameAccum;frameAccum=0;frames=0;}if(qaPanel&&qaClock>.5){qaPanel.textContent=JSON.stringify(diagnostics(),null,2);qaClock=0;}
  }
  // Compile the assembled materials once before removing the curtain.
  renderer.compile(scene,camera);tick();setTimeout(()=>{$('#loading').classList.add('done');document.body.dataset.ready='true';},300);
  if(!query.has('still')&&!reduced)setTimeout(()=>{if(activeView===0&&!transition)setOrbit(true);},3400);
  console.info('Winter Station ready', {triangles,version:THREE.REVISION,offline:true});
}

init().catch(fail);




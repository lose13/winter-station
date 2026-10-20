(()=>{var es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,_h=1,Wd=2;var Du=1,Ic=2,ci=3,Hn=0,en=1,Fe=2,He=0,Rs=1,dn=2,yh=3,Mh=4,Dc=5,Rn=100,Xd=101,qd=102,Yd=103,Zd=104,js=200,$d=201,Jd=202,Kd=203,cl=204,hl=205,oa=206,jd=207,aa=208,Qd=209,tf=210,ef=211,nf=212,sf=213,rf=214,ul=0,dl=1,fl=2,Ds=3,pl=4,ml=5,gl=6,xl=7,Lu=0,of=1,af=2,Ci=0,Lc=1,Uc=2,Nc=3,kr=4,lf=5,Fc=6,Oc=7;var Uu=300,Ls=301,Us=302,vl=303,_l=304,la=306,fi=1e3,Wi=1001,yl=1002,nn=1003,cf=1004;var Jr=1005;var $n=1006,Ca=1007;var Xi=1008;var Vn=1009,Nu=1010,Fu=1011,Ar=1012,zc=1013,qi=1014,hi=1015,mn=1016,Bc=1017,kc=1018,Ii=1020,Ou=35902,zu=1021,Bu=1022,Sn=1023,ku=1024,Hu=1025,Cs=1026,Di=1027,Vu=1028,Hc=1029,Gu=1030,Vc=1031;var Gc=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Ml=35840,Sl=35841,bl=35842,El=35843,wl=36196,Tl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Il=37811,Dl=37812,Ll=37813,Ul=37814,Nl=37815,Fl=37816,Ol=37817,zl=37818,Bl=37819,kl=37820,Hl=37821,Io=36492,Vl=36494,Gl=36495,Wu=36283,Wl=36284,Xl=36285,ql=36286;var Do=2300,Yl=2301,Pa=2302,Sh=2400,bh=2401,Eh=2402;var hf=3200,ca=3201;var Wc=0,uf=1,Zn="",tn="srgb",Qs="srgb-linear",ha="linear",be="srgb";var ls=7680;var wh=519,df=512,ff=513,pf=514,Xu=515,mf=516,gf=517,xf=518,vf=519,Zl=35044,ua=35048;var Th="300 es",ui=2e3,Lo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,Sr=Math.PI/180,Ns=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function _f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yf(i,t,e){return i!==t?(e-i)/(t-i):0}function br(i,t,e){return(1-e)*i+e*t}function Mf(i,t,e,n){return br(i,t,1-Math.exp(-e*n))}function Sf(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tf(i,t){return i+Math.random()*(t-i)}function Af(i){return i*(.5-Math.random())}function Rf(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(i){return i*Sr}function Pf(i){return i*Ns}function If(i){return(i&i-1)===0&&i!==0}function Df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he={DEG2RAD:Sr,RAD2DEG:Ns,generateUUID:Jn,clamp:Be,euclideanModulo:Xc,mapLinear:_f,inverseLerp:yf,lerp:br,damp:Mf,pingpong:Sf,smoothstep:bf,smootherstep:Ef,randInt:wf,randFloat:Tf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Df,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Uf,normalize:Ee,denormalize:Bn},Q=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],R=s[2],E=s[5],S=s[8];return r[0]=a*x+o*y+l*R,r[3]=a*m+o*_+l*E,r[6]=a*p+o*v+l*S,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*E,r[7]=c*p+h*v+u*S,r[2]=d*x+f*y+g*R,r[5]=d*m+f*_+g*E,r[8]=d*p+f*v+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new re;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=Uo("canvas");return i.style.display="block",i}var Rh={};function yr(i){i in Rh||(Rh[i]=!0,console.warn(i))}function Ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Of(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fe={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ch=[.64,.33,.3,.6,.15,.06],Ph=[.2126,.7152,.0722],Ih=[.3127,.329],Dh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[Qs]:{primaries:Ch,whitePoint:Ih,transfer:ha,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ph,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Ch,whitePoint:Ih,transfer:be,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ph,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var cs,$l=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Uo("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bf=0,No=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,fn=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wi,s=Wi,r=$n,a=Xi,o=Sn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Jn(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fi:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fi:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Uu;fn.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(f+1)/2,R=(p+1)/2,E=(h+d)/4,S=(u+x)/4,w=(g+m)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=S/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fo=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),E=Math.atan2(R,p*y);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let v=o*y;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new I,Uh=new Gn,Yi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),jr.subVectors(this.max,dr),hs.subVectors(t.a,dr),us.subVectors(t.b,dr),ds.subVectors(t.c,dr),Si.subVectors(us,hs),bi.subVectors(ds,us),Fi.subVectors(hs,ds);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Fi.z,Fi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Fi.z,0,-Fi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Fi.y,Fi.x,0];return!Ua(e,hs,us,ds,jr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,hs,us,ds,jr))?!1:(Qr.crossVectors(Si,bi),e=[Qr.x,Qr.y,Qr.z],Ua(e,hs,us,ds,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Kr=new Yi,hs=new I,us=new I,ds=new I,Si=new I,bi=new I,Fi=new I,dr=new I,jr=new I,Qr=new I,Oi=new I;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hf=new Yi,fr=new I,Na=new I,Fs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Na)),this.expandByPoint(fr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new I,Fa=new I,to=new I,Ei=new I,Oa=new I,eo=new I,za=new I,Zi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fa.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(to),o=Ei.dot(this.direction),l=-Ei.dot(to),c=Ei.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fa).addScaledVector(to,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),eo.subVectors(n,t),za.crossVectors(Oa,eo);let a=this.direction.dot(za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);let l=o*this.direction.dot(eo.crossVectors(Ei,eo));if(l<0)return null;let c=o*this.direction.dot(Oa.cross(Ei));if(c<0||l+c>a)return null;let h=-o*Ei.dot(za);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),a=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Gf)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),wi.crossVectors(n,yn),wi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),wi.crossVectors(n,yn)),wi.normalize(),no.crossVectors(yn,wi),s[0]=wi.x,s[4]=no.x,s[8]=yn.x,s[1]=wi.y,s[5]=no.y,s[9]=yn.y,s[2]=wi.z,s[6]=no.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],R=n[15],E=s[0],S=s[4],w=s[8],M=s[12],b=s[1],C=s[5],U=s[9],D=s[13],N=s[2],B=s[6],O=s[10],et=s[14],H=s[3],G=s[7],$=s[11],nt=s[15];return r[0]=a*E+o*b+l*N+c*H,r[4]=a*S+o*C+l*B+c*G,r[8]=a*w+o*U+l*O+c*$,r[12]=a*M+o*D+l*et+c*nt,r[1]=h*E+u*b+d*N+f*H,r[5]=h*S+u*C+d*B+f*G,r[9]=h*w+u*U+d*O+f*$,r[13]=h*M+u*D+d*et+f*nt,r[2]=g*E+x*b+m*N+p*H,r[6]=g*S+x*C+m*B+p*G,r[10]=g*w+x*U+m*O+p*$,r[14]=g*M+x*D+m*et+p*nt,r[3]=y*E+_*b+v*N+R*H,r[7]=y*S+_*C+v*B+R*G,r[11]=y*w+_*U+v*O+R*$,r[15]=y*M+_*D+v*et+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,E=e*y+n*_+s*v+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=y*S,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*S,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*S,t[4]=_*S,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*S,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*S,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*S,t[8]=v*S,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*S,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*S,t[12]=R*S,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*S,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*S,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,_=l*h,v=l*u,R=n.x,E=n.y,S=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+v)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*S,s[9]=(m-y)*S,s[10]=(1-(d+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),o=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);let c=1/r,h=1/a,u=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ui){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===ui)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Lo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ui){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===ui)g=(a+r)*u,x=-2*u;else if(o===Lo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new I,Fn=new pe,Vf=new I(0,0,0),Gf=new I(1,1,1),wi=new I,no=new I,yn=new I,Nh=new pe,Fh=new Gn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,Oh=new I,ps=new Gn,oi=new pe,io=new I,pr=new I,Xf=new I,qf=new Gn,zh=new I(1,0,0),Bh=new I(0,1,0),kh=new I(0,0,1),Hh={type:"added"},Yf={type:"removed"},ms={type:"childadded",child:null},Ba={type:"childremoved",child:null},Ve=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Kn,n=new Gn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new re}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(pr,io,this.up):oi.lookAt(io,pr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(oi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hh),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new I(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new I,ai=new I,ka=new I,li=new I,gs=new I,xs=new I,Vh=new I,Ha=new I,Va=new I,Ga=new I,Wa=new we,Xa=new we,qa=new we,Ri=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ai.subVectors(n,e),ka.subVectors(t,e);let a=On.dot(On),o=On.dot(ai),l=On.dot(ka),c=ai.dot(ai),h=ai.dot(ka),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ai.subVectors(t,e),On.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gs.subVectors(s,n),xs.subVectors(r,n),Ha.subVectors(t,n);let l=gs.dot(Ha),c=xs.dot(Ha);if(l<=0&&c<=0)return e.copy(n);Va.subVectors(t,s);let h=gs.dot(Va),u=xs.dot(Va);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gs,a);Ga.subVectors(t,r);let f=gs.dot(Ga),g=xs.dot(Ga);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(xs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(gs,a).addScaledVector(xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},so={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Xc(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return fe.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Be(Qe.r*255,0,255))*65536+Math.round(Be(Qe.g*255,0,255))*256+Math.round(Be(Qe.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=tn){fe.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(so);let n=br(Ti.h,so.h,e),s=br(Ti.s,so.s,e),r=br(Ti.l,so.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ft;Ft.NAMES=Yu;var Zf=0,jn=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Jn(),this.name="",this.blending=Rs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new I,ro=new Q,ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}};var Oo=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zo=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=0,An=new pe,Za=new Ve,vs=new I,Mn=new Yi,mr=new Yi,Ye=new I,ae=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?zo:Oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Mn.min,mr.min),Mn.expandByPoint(Ye),Ye.addVectors(Mn.max,mr.max),Mn.expandByPoint(Ye)):(Mn.expandByPoint(mr.min),Mn.expandByPoint(mr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),Ye.add(vs)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new I,l[w]=new I;let c=new I,h=new I,u=new I,d=new Q,f=new Q,g=new Q,x=new I,m=new I;function p(w,M,b){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[w].add(x),o[M].add(x),o[b].add(x),l[w].add(m),l[M].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let w=0,M=y.length;w<M;++w){let b=y[w],C=b.start,U=b.count;for(let D=C,N=C+U;D<N;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new I,v=new I,R=new I,E=new I;function S(w){R.fromBufferAttribute(s,w),E.copy(R);let M=o[w];_.copy(M),_.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(E,M);let C=v.dot(l[w])<0?-1:1;a.setXYZW(w,_.x,_.y,_.z,C)}for(let w=0,M=y.length;w<M;++w){let b=y[w],C=b.start,U=b.count;for(let D=C,N=C+U;D<N;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new pe,zi=new Zi,oo=new Fs,Wh=new I,ao=new I,lo=new I,co=new I,$a=new I,ho=new I,Xh=new I,uo=new I,ke=class extends Ve{constructor(t=new ae,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&($a.fromBufferAttribute(u,t),a?ho.addScaledVector($a,h):ho.addScaledVector($a.sub(e),h))}e.add(ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(oo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(oo,Wh)===null||zi.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let E=o.getX(v),S=o.getX(v+1),w=o.getX(v+2);s=fo(this,p,t,n,c,h,u,E,S,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=fo(this,a,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=_;v<R;v+=3){let E=v,S=v+1,w=v+2;s=fo(this,p,t,n,c,h,u,E,S,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=fo(this,a,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hn,o),l===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ao),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=Jf(i,t,e,n,ao,lo,co,Xh);if(h){let u=new I;Ri.getBarycoord(Xh,ao,lo,co,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,l,c,u,new Q)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Ri.getNormal(ao,lo,co,d.normal),h.face=d,h.barycoord=u}return h}var mi=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(x,m,p,y,_,v,R,E,S,w,M){let b=v/S,C=R/w,U=v/2,D=R/2,N=E/2,B=S+1,O=w+1,et=0,H=0,G=new I;for(let $=0;$<O;$++){let nt=$*C-D;for(let it=0;it<B;it++){let j=it*b-U;G[x]=j*y,G[m]=nt*_,G[p]=N,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(it/S),u.push(1-$/w),et+=1}}for(let $=0;$<w;$++)for(let nt=0;nt<S;nt++){let it=d+nt+B*$,j=d+nt+B*($+1),V=d+(nt+1)+B*($+1),Y=d+(nt+1)+B*$;l.push(it,j,Y),l.push(j,V,Y),H+=6}o.addGroup(f,H,M),f+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Kf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var gn={clone:Os,merge:on},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Bo=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new I,qh=new Q,Yh=new Q,Je=class extends Bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_s=-90,ys=1,jl=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(_s,ys,t,e);s.layers=this.layers,this.add(s);let r=new Je(_s,ys,t,e);r.layers=this.layers,this.add(r);let a=new Je(_s,ys,t,e);a.layers=this.layers,this.add(a);let o=new Je(_s,ys,t,e);o.layers=this.layers,this.add(o);let l=new Je(_s,ys,t,e);l.layers=this.layers,this.add(l);let c=new Je(_s,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends fn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ql=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mi(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:He});r.uniforms.tEquirect.value=e;let a=new ke(s,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=$n),new jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ja=new I,tp=new I,ep=new re,zn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ja.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new Fs,po=new I,Cr=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+y).normalize(),n[3].setComponents(l-a,d-h,m-g,v-y).normalize(),n[4].setComponents(l-o,d-u,m-x,v-_).normalize(),e===ui)n[5].setComponents(l+o,d+u,m+x,v+_).normalize();else if(e===Lo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function np(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ke=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),E=y+1+c*p;f.push(_,v,E),f.push(v,R,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:xp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:bp,color_pars_vertex:Ep,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Pp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Lp,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:zp,envmap_physical_pars_fragment:$p,envmap_vertex:Bp,fog_vertex:kp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Kp,lights_phong_fragment:jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:xm,morphtarget_pars_vertex:vm,morphtarget_vertex:_m,normal_fragment_begin:ym,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:bm,normal_vertex:Em,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Pm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Lm,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Bm,shadowmap_vertex:km,shadowmask_pars_fragment:Hm,skinbase_vertex:Vm,skinning_pars_vertex:Gm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Jm,transmission_pars_fragment:Km,uv_pars_fragment:jm,uv_pars_vertex:Qm,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:l0,depth_frag:c0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:x0,meshlambert_vert:v0,meshlambert_frag:_0,meshmatcap_vert:y0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:E0,meshphong_frag:w0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:P0,points_frag:I0,shadow_vert:D0,shadow_frag:L0,sprite_vert:U0,sprite_frag:N0},bt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Yn={basic:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:on([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:on([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:on([bt.points,bt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:on([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:on([bt.common,bt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:on([bt.sprite,bt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:on([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:on([bt.lights,bt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var mo={r:0,b:0,g:0},ki=new Kn,F0=new pe;function O0(i,t,e,n,s,r,a){let o=new Ft(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===la)?(h===void 0&&(h=new ke(new mi(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Os(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(ki)),h.material.toneMapped=fe.getTransfer(v.colorSpace)!==be,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ke(new Ke(2,2),new le({name:"BackgroundMaterial",uniforms:Os(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(mo,Zu(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function z0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,C,U,D,N){let B=!1,O=u(D,U,C);r!==O&&(r=O,c(r.object)),B=f(b,D,U,N),B&&g(b,D,U,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(b,C,U,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,U){let D=U.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let B=N[C.id];B===void 0&&(B={},N[C.id]=B);let O=B[D];return O===void 0&&(O=d(l()),B[D]=O),O}function d(b){let C=[],U=[],D=[];for(let N=0;N<e;N++)C[N]=0,U[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,C,U,D){let N=r.attributes,B=C.attributes,O=0,et=U.getAttributes();for(let H in et)if(et[H].location>=0){let $=N[H],nt=B[H];if(nt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function g(b,C,U,D){let N={},B=C.attributes,O=0,et=U.getAttributes();for(let H in et)if(et[H].location>=0){let $=B[H];$===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&($=b.instanceColor));let nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),N[H]=nt,O++}r.attributes=N,r.attributesNum=O,r.index=D}function x(){let b=r.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){let U=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;U[b]=1,D[b]===0&&(i.enableVertexAttribArray(b),D[b]=1),N[b]!==C&&(i.vertexAttribDivisor(b,C),N[b]=C)}function y(){let b=r.newAttributes,C=r.enabledAttributes;for(let U=0,D=C.length;U<D;U++)C[U]!==b[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function _(b,C,U,D,N,B,O){O===!0?i.vertexAttribIPointer(b,C,U,N,B):i.vertexAttribPointer(b,C,U,D,N,B)}function v(b,C,U,D){x();let N=D.attributes,B=U.getAttributes(),O=C.defaultAttributeValues;for(let et in B){let H=B[et];if(H.location>=0){let G=N[et];if(G===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(G=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(G=b.instanceColor)),G!==void 0){let $=G.normalized,nt=G.itemSize,it=t.get(G);if(it===void 0)continue;let j=it.buffer,V=it.type,Y=it.bytesPerElement,ut=V===i.INT||V===i.UNSIGNED_INT||G.gpuType===zc;if(G.isInterleavedBufferAttribute){let ct=G.data,Tt=ct.stride,Ct=G.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,ct.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let zt=0;zt<H.locationSize;zt++)_(H.location+zt,nt/H.locationSize,V,$,Tt*Y,(Ct+nt/H.locationSize*zt)*Y,ut)}else{if(G.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct,G.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ct=0;ct<H.locationSize;ct++)m(H.location+ct);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ct=0;ct<H.locationSize;ct++)_(H.location+ct,nt/H.locationSize,V,$,nt*Y,nt/H.locationSize*ct*Y,ut)}}else if(O!==void 0){let $=O[et];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}y()}function R(){w();for(let b in n){let C=n[b];for(let U in C){let D=C[U];for(let N in D)h(D[N].object),delete D[N];delete C[U]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let U in C){let D=C[U];for(let N in D)h(D[N].object),delete D[N];delete C[U]}delete n[b.id]}function S(b){for(let C in n){let U=n[C];if(U[b.id]===void 0)continue;let D=U[b.id];for(let N in D)h(D[N].object),delete D[N];delete U[b.id]}}function w(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function B0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function k0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Sn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let w=S===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Vn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==hi&&!w)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function H0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,_,f);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function V0(i){let t=new WeakMap;function e(a,o){return o===vl?a.mapping=Ls:o===_l&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vl||o===_l)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ql(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=class extends Bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,Zh=[.125,.215,.35,.446,.526,.582],Gi=20,Ka=new zs,$h=new Ft,ja=null,Qa=0,tl=0,el=!1,Vi=(1+Math.sqrt(5))/2,Ms=1/Vi,Jh=[new I(-Vi,Ms,0),new I(Vi,Ms,0),new I(-Ms,0,Vi),new I(Ms,0,Vi),new I(0,Vi,-Ms),new I(0,Vi,Ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Qa,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:mn,format:Sn,colorSpace:Qs,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=W0(r,t,e)}return s}_compileMaterial(t){let e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,s){let o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=Ci,h.autoClear=!1;let f=new Wn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new ke(new mi,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy($h),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;go(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(s-r-1)%Jh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);let p=[],y=0;for(let S=0;S<Gi;++S){let w=S/x,M=Math.exp(-w*w/2);p.push(M),S===0?y+=M:S<m&&(y+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-Ts?s-_+Ts:0),E=4*(this._cubeSize-v);go(e,R,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Ka)}};function G0(i){let t=[],e=[],n=[],s=i,r=i-Ts+1+Zh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ts?l=Zh[a-i+Ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){let S=E%3*2/3-1,w=E>2?0:-1,M=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];y.set(M,x*g*E),_.set(d,m*g*E);let b=[E,E,E,E,E,E];v.set(b,p*g*E)}let R=new ae;R.setAttribute("position",new ye(y,x)),R.setAttribute("uv",new ye(_,m)),R.setAttribute("faceIndex",new ye(v,p)),t.push(R),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W0(i,t,e){let n=new Float32Array(Gi),s=new I(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function jh(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function Qh(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===vl||l===_l,h=l===Ls||l===Us;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Bs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Bs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],E=y[_+1],S=y[_+2];d.push(R,E,E,S,S,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,E=_+1,S=_+2;d.push(R,E,E,S,S,R)}}else return;let m=new(qu(d)?zo:Oo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Z0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){let n=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*R*4*u),S=new Fo(E,v,R,u);S.type=hi,S.needsUpdate=!0;let w=_*4;for(let b=0;b<u;b++){let C=m[b],U=p[b],D=y[b],N=v*R*4*b;for(let B=0;B<C.count;B++){let O=B*w;f===!0&&(s.fromBufferAttribute(C,B),E[N+O+0]=s.x,E[N+O+1]=s.y,E[N+O+2]=s.z,E[N+O+3]=0),g===!0&&(s.fromBufferAttribute(U,B),E[N+O+4]=s.x,E[N+O+5]=s.y,E[N+O+6]=s.z,E[N+O+7]=0),x===!0&&(s.fromBufferAttribute(D,B),E[N+O+8]=s.x,E[N+O+9]=s.y,E[N+O+10]=s.z,E[N+O+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:S,size:new Q(v,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function K0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ks=class extends fn{constructor(t,e,n,s,r,a,o,l,c,h=Cs){if(h!==Cs&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=qi),n===void 0&&h===Di&&(n=Ii),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ju=new fn,tu=new ks(1,1),Ku=new Fo,ju=new Kl,Qu=new ko,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),We(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),We(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),We(e,n)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=Xu,r=tu):r=Ju,e.setTexture2D(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function xg(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function yg(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Ig(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){let n=this.cache,s=t.length,r=da(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ju,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=da(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ju,r[a])}function Ng(i,t,e){let n=this.cache,s=t.length,r=da(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=da(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ku,r[a])}function Og(i){switch(i){case 5126:return vg;case 35664:return _g;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function ou(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ou(e,c===void 0?new tc(o,i,t):new ec(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new nc(o),ou(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Bg=37297,kg=0;function Hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lu=new re;function Vg(i){fe._getMatrix(lu,fe.workingColorSpace,i);let t=`mat3( ${lu.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case ha:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),a)}else return s}function Gg(i,t){let e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wg(i,t){let e;switch(t){case Lc:e="Linear";break;case Uc:e="Reinhard";break;case Nc:e="Cineon";break;case kr:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xo=new I;function Xg(){fe.getLuminanceCoefficients(xo);let i=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function hu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace($g,Kg)}var Jg=new Map;function Kg(i,t){let e=oe[t];if(e===void 0){let n=Jg.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(jg,Qg)}function Qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function ex(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Us:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Us&&(t="ENVMAP_MODE_REFRACTION"),t}function ix(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function sx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=tx(e),c=ex(e),h=nx(e),u=ix(e),d=sx(e),f=qg(e),g=Yg(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?oe.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=ic(a),a=hu(a,e),a=uu(a,e),o=ic(o),o=hu(o,e),o=uu(o,e),a=du(a),o=du(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+a,v=y+p+o,R=au(s,s.VERTEX_SHADER,_),E=au(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(E).trim(),B=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{let et=cu(s,R,"vertex"),H=cu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+et+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||N==="")&&(O=!1);O&&(C.diagnostics={runnable:B,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(R),s.deleteShader(E),w=new Is(s,x),M=Zg(s,x)}let w;this.getUniforms=function(){return w===void 0&&S(this),w};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Bg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}var ox=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function ax(i,t,e,n,s,r,a){let o=new Rr,l=new sc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,C,U,D){let N=U.fog,B=D.geometry,O=M.isMeshStandardMaterial?U.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),H=et&&et.mapping===la?et.image.height:null,G=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=$!==void 0?$.length:0,it=0;B.morphAttributes.position!==void 0&&(it=1),B.morphAttributes.normal!==void 0&&(it=2),B.morphAttributes.color!==void 0&&(it=3);let j,V,Y,ut;if(G){let ve=Yn[G];j=ve.vertexShader,V=ve.fragmentShader}else j=M.vertexShader,V=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),ut=l.getFragmentShaderID(M);let ct=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Ct=D.isInstancedMesh===!0,zt=D.isBatchedMesh===!0,ie=!!M.map,lt=!!M.matcap,mt=!!et,L=!!M.aoMap,Lt=!!M.lightMap,tt=!!M.bumpMap,Et=!!M.normalMap,gt=!!M.displacementMap,Nt=!!M.emissiveMap,Mt=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,W=M.clearcoat>0,st=M.dispersion>0,ht=M.iridescence>0,rt=M.sheen>0,Ut=M.transmission>0,ft=T&&!!M.anisotropyMap,St=W&&!!M.clearcoatMap,ee=W&&!!M.clearcoatNormalMap,pt=W&&!!M.clearcoatRoughnessMap,It=ht&&!!M.iridescenceMap,Bt=ht&&!!M.iridescenceThicknessMap,qt=rt&&!!M.sheenColorMap,Dt=rt&&!!M.sheenRoughnessMap,ce=!!M.specularMap,Zt=!!M.specularColorMap,de=!!M.specularIntensityMap,F=Ut&&!!M.transmissionMap,yt=Ut&&!!M.thicknessMap,K=!!M.gradientMap,ot=!!M.alphaMap,Rt=M.alphaTest>0,wt=!!M.alphaHash,$t=!!M.extensions,Ae=Ci;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Ue={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:V,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:zt,batchingColor:zt&&D._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&D.instanceColor!==null,instancingMorph:Ct&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Qs,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:lt,envMap:mt,envMapMode:mt&&et.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Lt,bumpMap:tt,normalMap:Et,displacementMap:d&&gt,emissiveMap:Nt,normalMapObjectSpace:Et&&M.normalMapType===uf,normalMapTangentSpace:Et&&M.normalMapType===Wc,metalnessMap:Mt,roughnessMap:P,anisotropy:T,anisotropyMap:ft,clearcoat:W,clearcoatMap:St,clearcoatNormalMap:ee,clearcoatRoughnessMap:pt,dispersion:st,iridescence:ht,iridescenceMap:It,iridescenceThicknessMap:Bt,sheen:rt,sheenColorMap:qt,sheenRoughnessMap:Dt,specularMap:ce,specularColorMap:Zt,specularIntensityMap:de,transmission:Ut,transmissionMap:F,thicknessMap:yt,gradientMap:K,opaque:M.transparent===!1&&M.blending===Rs&&M.alphaToCoverage===!1,alphaMap:ot,alphaTest:Rt,alphaHash:wt,combine:M.combine,mapUv:ie&&x(M.map.channel),aoMapUv:L&&x(M.aoMap.channel),lightMapUv:Lt&&x(M.lightMap.channel),bumpMapUv:tt&&x(M.bumpMap.channel),normalMapUv:Et&&x(M.normalMap.channel),displacementMapUv:gt&&x(M.displacementMap.channel),emissiveMapUv:Nt&&x(M.emissiveMap.channel),metalnessMapUv:Mt&&x(M.metalnessMap.channel),roughnessMapUv:P&&x(M.roughnessMap.channel),anisotropyMapUv:ft&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(M.sheenRoughnessMap.channel),specularMapUv:ce&&x(M.specularMap.channel),specularColorMapUv:Zt&&x(M.specularColorMap.channel),specularIntensityMapUv:de&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:yt&&x(M.thicknessMap.channel),alphaMapUv:ot&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Et||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ie||ot),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&fe.getTransfer(M.map.colorSpace)===be,decodeVideoTextureEmissive:Nt&&M.emissiveMap.isVideoTexture===!0&&fe.getTransfer(M.emissiveMap.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fe,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(b,M),_(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let b=g[M.type],C;if(b){let U=Yn[b];C=gn.clone(U.uniforms)}else C=M.uniforms;return C}function R(M,b){let C;for(let U=0,D=h.length;U<D;U++){let N=h[U];if(N.cacheKey===b){C=N,++C.usedTimes;break}}return C===void 0&&(C=new rx(i,b,M,r),h.push(C)),C}function E(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function S(M){l.remove(M)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:w}}function lx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||cx),n.length>1&&n.sort(d||pu),s.length>1&&s.sort(d||pu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function hx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mu,i.set(n,[a])):s>=r.length?(a=new mu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function dx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fx=0;function px(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mx(i){let t=new ux,e=dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new pe,a=new pe;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,R=0,E=0,S=0;c.sort(px);for(let M=0,b=c.length;M<b;M++){let C=c[M],U=C.color,D=C.intensity,N=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*D,u+=U.g*D,d+=U.b*D;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],D);S++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,H=e.get(C);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=O,f++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(U).multiplyScalar(D),O.distance=N,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[x]=O;let et=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,et.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=et.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=B,v++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(U).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let et=C.shadow,H=e.get(C);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(D),O.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==y||w.numPointShadows!==_||w.numSpotShadows!==v||w.numSpotMaps!==R||w.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,w.directionalLength=f,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=y,w.numPointShadows=_,w.numSpotShadows=v,w.numSpotMaps=R,w.numLightProbes=S,n.version=fx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function gu(i){let t=new mx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gu(i),t.set(s,[o])):r>=a.length?(o=new gu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hs=class extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oc=class extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _x(i,t,e){let n=new Cr,s=new Q,r=new Q,a=new we,o=new Hs({depthPacking:ca}),l=new oc,c={},h=e.maxTextureSize,u={[Hn]:en,[en]:Hn,[Fe]:Fe},d=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:xx,fragmentShader:vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(E,S,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(He),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=p!==ci&&this.type===ci,N=p===ci&&this.type!==ci;for(let B=0,O=E.length;B<O;B++){let et=E[B],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let G=H.getFrameExtents();if(s.multiply(G),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,H.mapSize.y=r.y)),H.map===null||D===!0||N===!0){let nt=this.type!==ci?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new Ze(s.x,s.y,nt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let $=H.getViewportCount();for(let nt=0;nt<$;nt++){let it=H.getViewport(nt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),U.viewport(a),H.updateMatrices(et,nt),n=H.getFrustum(),v(S,w,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===ci&&y(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,C)};function y(E,S){let w=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ze(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,w,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,w,f,x,null)}function _(E,S,w,M){let b=null,C=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)b=C;else if(b=w.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let U=b.uuid,D=S.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let B=N[D];B===void 0&&(B=b.clone(),N[D]=B,S.addEventListener("dispose",R)),b=B}if(b.visible=S.visible,b.wireframe=S.wireframe,M===ci?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=w}return b}function v(E,S,w,M,b){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ci)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let D=t.update(E),N=E.material;if(Array.isArray(N)){let B=D.groups;for(let O=0,et=B.length;O<et;O++){let H=B[O],G=N[H.materialIndex];if(G&&G.visible){let $=_(E,G,M,b);E.onBeforeShadow(i,E,S,w,D,$,H),i.renderBufferDirect(w,null,D,$,E,H),E.onAfterShadow(i,E,S,w,D,$,H)}}}else if(N.visible){let B=_(E,N,M,b);E.onBeforeShadow(i,E,S,w,D,B,null),i.renderBufferDirect(w,null,D,B,E,null),E.onAfterShadow(i,E,S,w,D,B,null)}}let U=E.children;for(let D=0,N=U.length;D<N;D++)v(U[D],S,w,M,b)}function R(E){E.target.removeEventListener("dispose",R);for(let w in c){let M=c[w],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var yx={[ul]:dl,[fl]:gl,[pl]:xl,[Ds]:ml,[dl]:ul,[gl]:fl,[xl]:pl,[ml]:Ds};function Mx(i,t){function e(){let F=!1,yt=new we,K=null,ot=new we(0,0,0,0);return{setMask:function(Rt){K!==Rt&&!F&&(i.colorMask(Rt,Rt,Rt,Rt),K=Rt)},setLocked:function(Rt){F=Rt},setClear:function(Rt,wt,$t,Ae,Ue){Ue===!0&&(Rt*=Ae,wt*=Ae,$t*=Ae),yt.set(Rt,wt,$t,Ae),ot.equals(yt)===!1&&(i.clearColor(Rt,wt,$t,Ae),ot.copy(yt))},reset:function(){F=!1,K=null,ot.set(-1,0,0,0)}}}function n(){let F=!1,yt=!1,K=null,ot=null,Rt=null;return{setReversed:function(wt){if(yt!==wt){let $t=t.get("EXT_clip_control");yt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Ae=Rt;Rt=null,this.setClear(Ae)}yt=wt},getReversed:function(){return yt},setTest:function(wt){wt?ct(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(wt){K!==wt&&!F&&(i.depthMask(wt),K=wt)},setFunc:function(wt){if(yt&&(wt=yx[wt]),ot!==wt){switch(wt){case ul:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=wt}},setLocked:function(wt){F=wt},setClear:function(wt){Rt!==wt&&(yt&&(wt=1-wt),i.clearDepth(wt),Rt=wt)},reset:function(){F=!1,K=null,ot=null,Rt=null,yt=!1}}}function s(){let F=!1,yt=null,K=null,ot=null,Rt=null,wt=null,$t=null,Ae=null,Ue=null;return{setTest:function(ve){F||(ve?ct(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(ve){yt!==ve&&!F&&(i.stencilMask(ve),yt=ve)},setFunc:function(ve,cn,$e){(K!==ve||ot!==cn||Rt!==$e)&&(i.stencilFunc(ve,cn,$e),K=ve,ot=cn,Rt=$e)},setOp:function(ve,cn,$e){(wt!==ve||$t!==cn||Ae!==$e)&&(i.stencilOp(ve,cn,$e),wt=ve,$t=cn,Ae=$e)},setLocked:function(ve){F=ve},setClear:function(ve){Ue!==ve&&(i.clearStencil(ve),Ue=ve)},reset:function(){F=!1,yt=null,K=null,ot=null,Rt=null,wt=null,$t=null,Ae=null,Ue=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,R=null,E=null,S=new Ft(0,0,0),w=0,M=!1,b=null,C=null,U=null,D=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,et=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=et>=2);let G=null,$={},nt=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),j=new we().fromArray(nt),V=new we().fromArray(it);function Y(F,yt,K,ot){let Rt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(F,wt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<K;$t++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(yt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return wt}let ut={};ut[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Ds),tt(!1),Et(_h),ct(i.CULL_FACE),L(He);function ct(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Tt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ct(F,yt){return u[F]!==yt?(i.bindFramebuffer(F,yt),u[F]=yt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function zt(F,yt){let K=f,ot=!1;if(F){K=d.get(yt),K===void 0&&(K=[],d.set(yt,K));let Rt=F.textures;if(K.length!==Rt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,$t=Rt.length;wt<$t;wt++)K[wt]=i.COLOR_ATTACHMENT0+wt;K.length=Rt.length,ot=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ot=!0);ot&&i.drawBuffers(K)}function ie(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let lt={[Rn]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[qd]:i.FUNC_REVERSE_SUBTRACT};lt[Yd]=i.MIN,lt[Zd]=i.MAX;let mt={[js]:i.ZERO,[$d]:i.ONE,[Jd]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[tf]:i.SRC_ALPHA_SATURATE,[aa]:i.DST_COLOR,[oa]:i.DST_ALPHA,[Kd]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[jd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[sf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,yt,K,ot,Rt,wt,$t,Ae,Ue,ve){if(F===He){x===!0&&(Tt(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),F!==Dc){if(F!==m||ve!==M){if((p!==Rn||v!==Rn)&&(i.blendEquation(i.FUNC_ADD),p=Rn,v=Rn),ve)switch(F){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,_=null,R=null,E=null,S.set(0,0,0),w=0,m=F,M=ve}return}Rt=Rt||yt,wt=wt||K,$t=$t||ot,(yt!==p||Rt!==v)&&(i.blendEquationSeparate(lt[yt],lt[Rt]),p=yt,v=Rt),(K!==y||ot!==_||wt!==R||$t!==E)&&(i.blendFuncSeparate(mt[K],mt[ot],mt[wt],mt[$t]),y=K,_=ot,R=wt,E=$t),(Ae.equals(S)===!1||Ue!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ue),S.copy(Ae),w=Ue),m=F,M=!1}function Lt(F,yt){F.side===Fe?Tt(i.CULL_FACE):ct(i.CULL_FACE);let K=F.side===en;yt&&(K=!K),tt(K),F.blending===Rs&&F.transparent===!1?L(He):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ot=F.stencilWrite;o.setTest(ot),ot&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function Et(F){F!==Gd?(ct(i.CULL_FACE),F!==C&&(F===_h?i.cullFace(i.BACK):F===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=F}function gt(F){F!==U&&(O&&i.lineWidth(F),U=F)}function Nt(F,yt,K){F?(ct(i.POLYGON_OFFSET_FILL),(D!==yt||N!==K)&&(i.polygonOffset(yt,K),D=yt,N=K)):Tt(i.POLYGON_OFFSET_FILL)}function Mt(F){F?ct(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+B-1),G!==F&&(i.activeTexture(F),G=F)}function T(F,yt,K){K===void 0&&(G===null?K=i.TEXTURE0+B-1:K=G);let ot=$[K];ot===void 0&&(ot={type:void 0,texture:void 0},$[K]=ot),(ot.type!==F||ot.texture!==yt)&&(G!==K&&(i.activeTexture(K),G=K),i.bindTexture(F,yt||ut[F]),ot.type=F,ot.texture=yt)}function W(){let F=$[G];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(F){j.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function Dt(F){V.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),V.copy(F))}function ce(F,yt){let K=c.get(yt);K===void 0&&(K=new WeakMap,c.set(yt,K));let ot=K.get(F);ot===void 0&&(ot=i.getUniformBlockIndex(yt,F.name),K.set(F,ot))}function Zt(F,yt){let ot=c.get(yt).get(F);l.get(yt)!==ot&&(i.uniformBlockBinding(yt,ot,F.__bindingPointIndex),l.set(yt,ot))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,$={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,R=null,E=null,S=new Ft(0,0,0),w=0,M=!1,b=null,C=null,U=null,D=null,N=null,j.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Tt,bindFramebuffer:Ct,drawBuffers:zt,useProgram:ie,setBlending:L,setMaterial:Lt,setFlipSided:tt,setCullFace:Et,setLineWidth:gt,setPolygonOffset:Nt,setScissorTest:Mt,activeTexture:P,bindTexture:T,unbindTexture:W,compressedTexImage2D:st,compressedTexImage3D:ht,texImage2D:It,texImage3D:Bt,updateUBOMapping:ce,uniformBlockBinding:Zt,texStorage2D:ee,texStorage3D:pt,texSubImage2D:rt,texSubImage3D:Ut,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:qt,viewport:Dt,reset:de}}function xu(i,t,e,n){let s=Sx(n);switch(e){case zu:return i*t;case ku:return i*t;case Hu:return i*t*2;case Vu:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case Gu:return i*t*2/s.components*s.byteLength;case Vc:return i*t*2/s.components*s.byteLength;case Bu:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Gc:return i*t*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case El:return Math.max(i,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wu:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sx(i){switch(i){case Vn:case Nu:return{byteLength:1,components:1};case Ar:case Fu:case mn:return{byteLength:2,components:1};case Bc:case kc:return{byteLength:2,components:4};case qi:case zc:case hi:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):Uo("canvas")}function x(P,T,W){let st=1,ht=Mt(P);if((ht.width>W||ht.height>W)&&(st=W/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let rt=Math.floor(st*ht.width),Ut=Math.floor(st*ht.height);u===void 0&&(u=g(rt,Ut));let ft=T?g(rt,Ut):u;return ft.width=rt,ft.height=Ut,ft.getContext("2d").drawImage(P,0,0,rt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Ut+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,T,W,st,ht=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let rt=T;if(T===i.RED&&(W===i.FLOAT&&(rt=i.R32F),W===i.HALF_FLOAT&&(rt=i.R16F),W===i.UNSIGNED_BYTE&&(rt=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.R8UI),W===i.UNSIGNED_SHORT&&(rt=i.R16UI),W===i.UNSIGNED_INT&&(rt=i.R32UI),W===i.BYTE&&(rt=i.R8I),W===i.SHORT&&(rt=i.R16I),W===i.INT&&(rt=i.R32I)),T===i.RG&&(W===i.FLOAT&&(rt=i.RG32F),W===i.HALF_FLOAT&&(rt=i.RG16F),W===i.UNSIGNED_BYTE&&(rt=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RG8UI),W===i.UNSIGNED_SHORT&&(rt=i.RG16UI),W===i.UNSIGNED_INT&&(rt=i.RG32UI),W===i.BYTE&&(rt=i.RG8I),W===i.SHORT&&(rt=i.RG16I),W===i.INT&&(rt=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),W===i.UNSIGNED_INT&&(rt=i.RGB32UI),W===i.BYTE&&(rt=i.RGB8I),W===i.SHORT&&(rt=i.RGB16I),W===i.INT&&(rt=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),W===i.UNSIGNED_INT&&(rt=i.RGBA32UI),W===i.BYTE&&(rt=i.RGBA8I),W===i.SHORT&&(rt=i.RGBA16I),W===i.INT&&(rt=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),T===i.RGBA){let Ut=ht?ha:fe.getTransfer(st);W===i.FLOAT&&(rt=i.RGBA32F),W===i.HALF_FLOAT&&(rt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(rt=Ut===be?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(P,T){let W;return P?T===null||T===qi||T===Ii?W=i.DEPTH24_STENCIL8:T===hi?W=i.DEPTH32F_STENCIL8:T===Ar&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===Ii?W=i.DEPTH_COMPONENT24:T===hi?W=i.DEPTH_COMPONENT32F:T===Ar&&(W=i.DEPTH_COMPONENT16),W}function R(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){let T=P.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T)}function S(P){let T=P.target;T.removeEventListener("dispose",S),b(T)}function w(P){let T=n.get(P);if(T.__webglInit===void 0)return;let W=P.source,st=d.get(W);if(st){let ht=st[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&M(P),Object.keys(st).length===0&&d.delete(W)}n.remove(P)}function M(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let W=P.source,st=d.get(W);delete st[T.__cacheKey],a.memory.textures--}function b(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(T.__webglFramebuffer[st]))for(let ht=0;ht<T.__webglFramebuffer[st].length;ht++)i.deleteFramebuffer(T.__webglFramebuffer[st][ht]);else i.deleteFramebuffer(T.__webglFramebuffer[st]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[st])}else{if(Array.isArray(T.__webglFramebuffer))for(let st=0;st<T.__webglFramebuffer.length;st++)i.deleteFramebuffer(T.__webglFramebuffer[st]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let st=0;st<T.__webglColorRenderbuffer.length;st++)T.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[st]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=P.textures;for(let st=0,ht=W.length;st<ht;st++){let rt=n.get(W[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(W[st])}n.remove(P)}let C=0;function U(){C=0}function D(){let P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function N(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function B(P,T){let W=n.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){let st=P.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,P,T);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function O(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){V(W,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function et(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){V(W,P,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function H(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}let G={[fi]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},$={[nn]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},nt={[df]:i.NEVER,[vf]:i.ALWAYS,[ff]:i.LESS,[Xu]:i.LEQUAL,[pf]:i.EQUAL,[xf]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function it(P,T){if(T.type===hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Ca||T.magFilter===Jr||T.magFilter===Xi||T.minFilter===$n||T.minFilter===Ca||T.minFilter===Jr||T.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,G[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,G[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,G[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,$[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==Jr&&T.minFilter!==Xi||T.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function j(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));let st=T.source,ht=d.get(st);ht===void 0&&(ht={},d.set(st,ht));let rt=N(T);if(rt!==P.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ht[rt].usedTimes++;let Ut=ht[P.__cacheKey];Ut!==void 0&&(ht[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(T)),P.__cacheKey=rt,P.__webglTexture=ht[rt].texture}return W}function V(P,T,W){let st=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(st=i.TEXTURE_3D);let ht=j(P,T),rt=T.source;e.bindTexture(st,P.__webglTexture,i.TEXTURE0+W);let Ut=n.get(rt);if(rt.version!==Ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+W);let ft=fe.getPrimaries(fe.workingColorSpace),St=T.colorSpace===Zn?null:fe.getPrimaries(T.colorSpace),ee=T.colorSpace===Zn||ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let pt=x(T.image,!1,s.maxTextureSize);pt=Nt(T,pt);let It=r.convert(T.format,T.colorSpace),Bt=r.convert(T.type),qt=_(T.internalFormat,It,Bt,T.colorSpace,T.isVideoTexture);it(st,T);let Dt,ce=T.mipmaps,Zt=T.isVideoTexture!==!0,de=Ut.__version===void 0||ht===!0,F=rt.dataReady,yt=R(T,pt);if(T.isDepthTexture)qt=v(T.format===Di,T.type),de&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,qt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,It,Bt,null));else if(T.isDataTexture)if(ce.length>0){Zt&&de&&e.texStorage2D(i.TEXTURE_2D,yt,qt,ce[0].width,ce[0].height);for(let K=0,ot=ce.length;K<ot;K++)Dt=ce[K],Zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,It,Bt,Dt.data):e.texImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,It,Bt,Dt.data);T.generateMipmaps=!1}else Zt?(de&&e.texStorage2D(i.TEXTURE_2D,yt,qt,pt.width,pt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,It,Bt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,It,Bt,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,qt,ce[0].width,ce[0].height,pt.depth);for(let K=0,ot=ce.length;K<ot;K++)if(Dt=ce[K],T.format!==Sn)if(It!==null)if(Zt){if(F)if(T.layerUpdates.size>0){let Rt=xu(Dt.width,Dt.height,T.format,T.type);for(let wt of T.layerUpdates){let $t=Dt.data.subarray(wt*Rt/Dt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,wt,Dt.width,Dt.height,1,It,$t)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,pt.depth,It,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,qt,Dt.width,Dt.height,pt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,pt.depth,It,Bt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,qt,Dt.width,Dt.height,pt.depth,0,It,Bt,Dt.data)}else{Zt&&de&&e.texStorage2D(i.TEXTURE_2D,yt,qt,ce[0].width,ce[0].height);for(let K=0,ot=ce.length;K<ot;K++)Dt=ce[K],T.format!==Sn?It!==null?Zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,It,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,It,Bt,Dt.data):e.texImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,It,Bt,Dt.data)}else if(T.isDataArrayTexture)if(Zt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,qt,pt.width,pt.height,pt.depth),F)if(T.layerUpdates.size>0){let K=xu(pt.width,pt.height,T.format,T.type);for(let ot of T.layerUpdates){let Rt=pt.data.subarray(ot*K/pt.data.BYTES_PER_ELEMENT,(ot+1)*K/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,It,Bt,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,It,Bt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,pt.width,pt.height,pt.depth,0,It,Bt,pt.data);else if(T.isData3DTexture)Zt?(de&&e.texStorage3D(i.TEXTURE_3D,yt,qt,pt.width,pt.height,pt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,It,Bt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,pt.width,pt.height,pt.depth,0,It,Bt,pt.data);else if(T.isFramebufferTexture){if(de)if(Zt)e.texStorage2D(i.TEXTURE_2D,yt,qt,pt.width,pt.height);else{let K=pt.width,ot=pt.height;for(let Rt=0;Rt<yt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,qt,K,ot,0,It,Bt,null),K>>=1,ot>>=1}}else if(ce.length>0){if(Zt&&de){let K=Mt(ce[0]);e.texStorage2D(i.TEXTURE_2D,yt,qt,K.width,K.height)}for(let K=0,ot=ce.length;K<ot;K++)Dt=ce[K],Zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,It,Bt,Dt):e.texImage2D(i.TEXTURE_2D,K,qt,It,Bt,Dt);T.generateMipmaps=!1}else if(Zt){if(de){let K=Mt(pt);e.texStorage2D(i.TEXTURE_2D,yt,qt,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Bt,pt)}else e.texImage2D(i.TEXTURE_2D,0,qt,It,Bt,pt);m(T)&&p(st),Ut.__version=rt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Y(P,T,W){if(T.image.length!==6)return;let st=j(P,T),ht=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let rt=n.get(ht);if(ht.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);let Ut=fe.getPrimaries(fe.workingColorSpace),ft=T.colorSpace===Zn?null:fe.getPrimaries(T.colorSpace),St=T.colorSpace===Zn||Ut===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ee=T.isCompressedTexture||T.image[0].isCompressedTexture,pt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let ot=0;ot<6;ot++)!ee&&!pt?It[ot]=x(T.image[ot],!0,s.maxCubemapSize):It[ot]=pt?T.image[ot].image:T.image[ot],It[ot]=Nt(T,It[ot]);let Bt=It[0],qt=r.convert(T.format,T.colorSpace),Dt=r.convert(T.type),ce=_(T.internalFormat,qt,Dt,T.colorSpace),Zt=T.isVideoTexture!==!0,de=rt.__version===void 0||st===!0,F=ht.dataReady,yt=R(T,Bt);it(i.TEXTURE_CUBE_MAP,T);let K;if(ee){Zt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ce,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){K=It[ot].mipmaps;for(let Rt=0;Rt<K.length;Rt++){let wt=K[Rt];T.format!==Sn?qt!==null?Zt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,wt.width,wt.height,qt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,ce,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,wt.width,wt.height,qt,Dt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,ce,wt.width,wt.height,0,qt,Dt,wt.data)}}}else{if(K=T.mipmaps,Zt&&de){K.length>0&&yt++;let ot=Mt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ce,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,It[ot].width,It[ot].height,qt,Dt,It[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ce,It[ot].width,It[ot].height,0,qt,Dt,It[ot].data);for(let Rt=0;Rt<K.length;Rt++){let $t=K[Rt].image[ot].image;Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,$t.width,$t.height,qt,Dt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,ce,$t.width,$t.height,0,qt,Dt,$t.data)}}else{Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,qt,Dt,It[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ce,qt,Dt,It[ot]);for(let Rt=0;Rt<K.length;Rt++){let wt=K[Rt];Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,qt,Dt,wt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,ce,qt,Dt,wt.image[ot])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ut(P,T,W,st,ht,rt){let Ut=r.convert(W.format,W.colorSpace),ft=r.convert(W.type),St=_(W.internalFormat,Ut,ft,W.colorSpace),ee=n.get(T),pt=n.get(W);if(pt.__renderTarget=T,!ee.__hasExternalTextures){let It=Math.max(1,T.width>>rt),Bt=Math.max(1,T.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,St,It,Bt,T.depth,0,Ut,ft,null):e.texImage2D(ht,rt,St,It,Bt,0,Ut,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ht,pt.__webglTexture,0,tt(T)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ht,pt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let st=T.depthTexture,ht=st&&st.isDepthTexture?st.type:null,rt=v(T.stencilBuffer,ht),Ut=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=tt(T);Et(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,rt,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,rt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,P)}else{let st=T.textures;for(let ht=0;ht<st.length;ht++){let rt=st[ht],Ut=r.convert(rt.format,rt.colorSpace),ft=r.convert(rt.type),St=_(rt.internalFormat,Ut,ft,rt.colorSpace),ee=tt(T);W&&Et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,St,T.width,T.height):Et(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,St,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,St,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(T.depthTexture);st.__renderTarget=T,(!st.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);let ht=st.__webglTexture,rt=tt(T);if(T.depthTexture.format===Cs)Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Di)Et(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ct(P){let T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let st=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),st){let ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=st}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[st]),T.__webglDepthbuffer[st]===void 0)T.__webglDepthbuffer[st]=i.createRenderbuffer(),ct(T.__webglDepthbuffer[st],P,!1);else{let ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ct(T.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(P,T,W){let st=n.get(P);T!==void 0&&ut(st.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ct(P)}function ie(P){let T=P.texture,W=n.get(P),st=n.get(T);P.addEventListener("dispose",S);let ht=P.textures,rt=P.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=T.version,a.memory.textures++),rt){W.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ft]=[];for(let St=0;St<T.mipmaps.length;St++)W.__webglFramebuffer[ft][St]=i.createFramebuffer()}else W.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)W.__webglFramebuffer[ft]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let ft=0,St=ht.length;ft<St;ft++){let ee=n.get(ht[ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Et(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let St=ht[ft];W.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ft]);let ee=r.convert(St.format,St.colorSpace),pt=r.convert(St.type),It=_(St.internalFormat,ee,pt,St.colorSpace,P.isXRRenderTarget===!0),Bt=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,It,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,W.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),it(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)ut(W.__webglFramebuffer[ft][St],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else ut(W.__webglFramebuffer[ft],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ft=0,St=ht.length;ft<St;ft++){let ee=ht[ft],pt=n.get(ee);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),it(i.TEXTURE_2D,ee),ut(W.__webglFramebuffer,P,ee,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,st.__webglTexture),it(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)ut(W.__webglFramebuffer[St],P,T,i.COLOR_ATTACHMENT0,ft,St);else ut(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&p(ft),e.unbindTexture()}P.depthBuffer&&Ct(P)}function lt(P){let T=P.textures;for(let W=0,st=T.length;W<st;W++){let ht=T[W];if(m(ht)){let rt=y(P),Ut=n.get(ht).__webglTexture;e.bindTexture(rt,Ut),p(rt),e.unbindTexture()}}}let mt=[],L=[];function Lt(P){if(P.samples>0){if(Et(P)===!1){let T=P.textures,W=P.width,st=P.height,ht=i.COLOR_BUFFER_BIT,rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(P),ft=T.length>1;if(ft)for(let St=0;St<T.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let St=0;St<T.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);let ee=n.get(T[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,W,st,0,0,W,st,ht,i.NEAREST),l===!0&&(mt.length=0,L.length=0,mt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(mt.push(rt),L.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let St=0;St<T.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);let ee=n.get(T[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function tt(P){return Math.min(s.maxSamples,P.samples)}function Et(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Nt(P,T){let W=P.colorSpace,st=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Qs&&W!==Zn&&(fe.getTransfer(W)===be?(st!==Sn||ht!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Et}function Ex(i,t){function e(n,s=Zn){let r,a=fe.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===zu)return i.ALPHA;if(n===Bu)return i.RGB;if(n===Sn)return i.RGBA;if(n===ku)return i.LUMINANCE;if(n===Hu)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Vu)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===Gu)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Po)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Tl)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===zl||n===Bl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Vl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wu||n===Wl||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ac=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},kn=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},wx={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ax=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new le({vertexShader:Tx,fragmentShader:Ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new lc,m=e.getContextAttributes(),p=null,y=null,_=[],v=[],R=new Q,E=null,S=new Je;S.viewport=new we;let w=new Je;w.viewport=new we;let M=[S,w],b=new ac,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=_[V];return Y===void 0&&(Y=new Er,_[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=_[V];return Y===void 0&&(Y=new Er,_[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=_[V];return Y===void 0&&(Y=new Er,_[V]=Y),Y.getHandSpace()};function D(V){let Y=v.indexOf(V.inputSource);if(Y===-1)return;let ut=_[Y];ut!==void 0&&(ut.update(V.inputSource,V.frame,c||a),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let V=0;V<_.length;V++){let Y=v[V];Y!==null&&(v[V]=null,_[V].disconnect(Y))}C=null,U=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ze(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ut=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Di:Cs,ut=m.stencil?Ii:qi);let Tt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ze(d.textureWidth,d.textureHeight,{format:Sn,type:Vn,depthTexture:new ks(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(V){for(let Y=0;Y<V.removed.length;Y++){let ut=V.removed[Y],ct=v.indexOf(ut);ct>=0&&(v[ct]=null,_[ct].disconnect(ut))}for(let Y=0;Y<V.added.length;Y++){let ut=V.added[Y],ct=v.indexOf(ut);if(ct===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=v.length){v.push(ut),ct=Ct;break}else if(v[Ct]===null){v[Ct]=ut,ct=Ct;break}if(ct===-1)break}let Tt=_[ct];Tt&&Tt.connect(ut)}}let O=new I,et=new I;function H(V,Y,ut){O.setFromMatrixPosition(Y.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);let ct=O.distanceTo(et),Tt=Y.projectionMatrix.elements,Ct=ut.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),ie=Tt[14]/(Tt[10]+1),lt=(Tt[9]+1)/Tt[5],mt=(Tt[9]-1)/Tt[5],L=(Tt[8]-1)/Tt[0],Lt=(Ct[8]+1)/Ct[0],tt=zt*L,Et=zt*Lt,gt=ct/(-L+Lt),Nt=gt*-L;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Nt),V.translateZ(gt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Tt[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Mt=zt+gt,P=ie+gt,T=tt-Nt,W=Et+(ct-Nt),st=lt*ie/P*Mt,ht=mt*ie/P*Mt;V.projectionMatrix.makePerspective(T,W,st,ht,Mt,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function G(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Y=V.near,ut=V.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),b.near=w.near=S.near=Y,b.far=w.far=S.far=ut,(C!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,U=b.far),S.layers.mask=V.layers.mask|2,w.layers.mask=V.layers.mask|4,b.layers.mask=S.layers.mask|w.layers.mask;let ct=V.parent,Tt=b.cameras;G(b,ct);for(let Ct=0;Ct<Tt.length;Ct++)G(Tt[Ct],ct);Tt.length===2?H(b,S,w):b.projectionMatrix.copy(S.projectionMatrix),$(V,b,ct)};function $(V,Y,ut){ut===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ns*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let nt=null;function it(V,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;ut.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let Ct=0;Ct<ut.length;Ct++){let zt=ut[Ct],ie=null;if(f!==null)ie=f.getViewport(zt);else{let mt=u.getViewSubImage(d,zt);ie=mt.viewport,Ct===0&&(t.setRenderTargetTextures(y,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(y))}let lt=M[Ct];lt===void 0&&(lt=new Je,lt.layers.enable(Ct),lt.viewport=new we,M[Ct]=lt),lt.matrix.fromArray(zt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(zt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ct===0&&(b.matrix.copy(lt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(lt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Ct=u.getDepthInformation(ut[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,s.renderState)}}for(let ut=0;ut<_.length;ut++){let ct=v[ut],Tt=_[ut];ct!==null&&Tt!==void 0&&Tt.update(ct,Y,c||a)}nt&&nt(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let j=new $u;j.setAnimationLoop(it),this.setAnimationLoop=function(V){nt=V},this.dispose=function(){}}},Hi=new Kn,Rx=new pe;function Cx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,Hi.copy(v),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Px(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,S=v.length;E<S;E++){let w=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,b=w.length;M<b;M++){let C=w[M];if(f(C,E,M,R)===!0){let U=C.__offset,D=Array.isArray(C.value)?C.value:[C.value],N=0;for(let B=0;B<D.length;B++){let O=D[B],et=x(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,U+N,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,N),N+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,R){let E=y.value,S=_+"_"+v;if(R[S]===void 0)return typeof E=="number"||typeof E=="boolean"?R[S]=E:R[S]=E.clone(),!0;{let w=R[S];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return R[S]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(y){let _=y.uniforms,v=0,R=16;for(let S=0,w=_.length;S<w;S++){let M=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,C=M.length;b<C;b++){let U=M[b],D=Array.isArray(U.value)?U.value:[U.value];for(let N=0,B=D.length;N<B;N++){let O=D[N],et=x(O),H=v%R,G=H%et.boundary,$=H+G;v+=G,$!==0&&R-$<et.storage&&(v+=R-$),U.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=et.storage}}}let E=v%R;return E>0&&(v+=R-E),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ho=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,R=!1,E=0,S=0,w=null,M=-1,b=null,C=new we,U=new we,D=null,N=new Ft(0),B=0,O=e.width,et=e.height,H=1,G=null,$=null,nt=new we(0,0,O,et),it=new we(0,0,O,et),j=!1,V=new Cr,Y=!1,ut=!1,ct=new pe,Tt=new pe,Ct=new I,zt=new we,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function mt(){return w===null?H:1}let L=n;function Lt(A,z){return e.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),L===null){let z="webgl2";if(L=Lt(z,A),L===null)throw Lt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,Et,gt,Nt,Mt,P,T,W,st,ht,rt,Ut,ft,St,ee,pt,It,Bt,qt,Dt,ce,Zt,de,F;function yt(){tt=new q0(L),tt.init(),Zt=new Ex(L,tt),Et=new k0(L,tt,t,Zt),gt=new Mx(L,tt),Et.reverseDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),Nt=new $0(L),Mt=new lx,P=new bx(L,tt,gt,Mt,Et,Zt,Nt),T=new V0(v),W=new X0(v),st=new np(L),de=new z0(L,st),ht=new Y0(L,st,Nt,de),rt=new K0(L,ht,st,Nt),qt=new J0(L,Et,P),pt=new H0(Mt),Ut=new ax(v,T,W,tt,Et,de,pt),ft=new Cx(v,Mt),St=new hx,ee=new gx(tt),Bt=new O0(v,T,W,gt,rt,f,l),It=new _x(v,rt,Et),F=new Px(L,Nt,Et,gt),Dt=new B0(L,tt,Nt),ce=new Z0(L,tt,Nt),Nt.programs=Ut.programs,v.capabilities=Et,v.extensions=tt,v.properties=Mt,v.renderLists=St,v.shadowMap=It,v.state=gt,v.info=Nt}yt();let K=new cc(v,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(O,et,!1))},this.getSize=function(A){return A.set(O,et)},this.setSize=function(A,z,Z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,et=z,e.width=Math.floor(A*H),e.height=Math.floor(z*H),Z===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(O*H,et*H).floor()},this.setDrawingBufferSize=function(A,z,Z){O=A,et=z,H=Z,e.width=Math.floor(A*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,z,Z,J){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,z,Z,J),gt.viewport(C.copy(nt).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,z,Z,J){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,z,Z,J),gt.scissor(U.copy(it).multiplyScalar(H).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){gt.setScissorTest(j=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(A=!0,z=!0,Z=!0){let J=0;if(A){let k=!1;if(w!==null){let vt=w.texture.format;k=vt===Gc||vt===Vc||vt===Hc}if(k){let vt=w.texture.type,Pt=vt===Vn||vt===qi||vt===Ar||vt===Ii||vt===Bc||vt===kc,kt=Bt.getClearColor(),Ht=Bt.getClearAlpha(),Qt=kt.r,se=kt.g,Vt=kt.b;Pt?(g[0]=Qt,g[1]=se,g[2]=Vt,g[3]=Ht,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Qt,x[1]=se,x[2]=Vt,x[3]=Ht,L.clearBufferiv(L.COLOR,0,x))}else J|=L.COLOR_BUFFER_BIT}z&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),St.dispose(),ee.dispose(),Mt.dispose(),T.dispose(),W.dispose(),rt.dispose(),de.dispose(),F.dispose(),Ut.dispose(),K.dispose(),K.removeEventListener("sessionstart",or),K.removeEventListener("sessionend",ar),ni.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=Nt.autoReset,z=It.enabled,Z=It.autoUpdate,J=It.needsUpdate,k=It.type;yt(),Nt.autoReset=A,It.enabled=z,It.autoUpdate=Z,It.needsUpdate=J,It.type=k}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){let z=A.target;z.removeEventListener("dispose",$t),Ae(z)}function Ae(A){Ue(A),Mt.remove(A)}function Ue(A){let z=Mt.get(A).programs;z!==void 0&&(z.forEach(function(Z){Ut.releaseProgram(Z)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,J,k,vt){z===null&&(z=ie);let Pt=k.isMesh&&k.matrixWorld.determinant()<0,kt=wn(A,z,Z,J,k);gt.setMaterial(J,Pt);let Ht=Z.index,Qt=1;if(J.wireframe===!0){if(Ht=ht.getWireframeAttribute(Z),Ht===void 0)return;Qt=2}let se=Z.drawRange,Vt=Z.attributes.position,_e=se.start*Qt,Ce=(se.start+se.count)*Qt;vt!==null&&(_e=Math.max(_e,vt.start*Qt),Ce=Math.min(Ce,(vt.start+vt.count)*Qt)),Ht!==null?(_e=Math.max(_e,0),Ce=Math.min(Ce,Ht.count)):Vt!=null&&(_e=Math.max(_e,0),Ce=Math.min(Ce,Vt.count));let Pe=Ce-_e;if(Pe<0||Pe===1/0)return;de.setup(k,J,kt,Z,Ht);let un,Me=Dt;if(Ht!==null&&(un=st.get(Ht),Me=ce,Me.setIndex(un)),k.isMesh)J.wireframe===!0?(gt.setLineWidth(J.wireframeLinewidth*mt()),Me.setMode(L.LINES)):Me.setMode(L.TRIANGLES);else if(k.isLine){let Wt=J.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*mt()),k.isLineSegments?Me.setMode(L.LINES):k.isLineLoop?Me.setMode(L.LINE_LOOP):Me.setMode(L.LINE_STRIP)}else k.isPoints?Me.setMode(L.POINTS):k.isSprite&&Me.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Wt=k._multiDrawStarts,ii=k._multiDrawCounts,Se=k._multiDrawCount,Un=Ht?st.get(Ht).bytesPerElement:1,as=Mt.get(J).currentProgram.getUniforms();for(let _n=0;_n<Se;_n++)as.setValue(L,"_gl_DrawID",_n),Me.render(Wt[_n]/Un,ii[_n])}else if(k.isInstancedMesh)Me.renderInstances(_e,Pe,k.count);else if(Z.isInstancedBufferGeometry){let Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ii=Math.min(Z.instanceCount,Wt);Me.renderInstances(_e,Pe,ii)}else Me.render(_e,Pe)};function ve(A,z,Z){A.transparent===!0&&A.side===Fe&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,at(A,z,Z),A.side=Hn,A.needsUpdate=!0,at(A,z,Z),A.side=Fe):at(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),p=ee.get(Z),p.init(z),_.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==Z&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let vt=k.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){let kt=vt[Pt];ve(kt,Z,k),J.add(kt)}else ve(vt,Z,k),J.add(vt)}),_.pop(),p=null,J},this.compileAsync=function(A,z,Z=null){let J=this.compile(A,z,Z);return new Promise(k=>{function vt(){if(J.forEach(function(Pt){Mt.get(Pt).currentProgram.isReady()&&J.delete(Pt)}),J.size===0){k(A);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let cn=null;function $e(A){cn&&cn(A)}function or(){ni.stop()}function ar(){ni.start()}let ni=new $u;ni.setAnimationLoop($e),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(A){cn=A,K.setAnimationLoop(A),A===null?ni.stop():ni.start()},K.addEventListener("sessionstart",or),K.addEventListener("sessionend",ar),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,w),p=ee.get(A,_.length),p.init(z),_.push(p),Tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),V.setFromProjectionMatrix(Tt),ut=this.localClippingEnabled,Y=pt.init(this.clippingPlanes,ut),m=St.get(A,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){let vt=v.xr.getDepthSensingMesh();vt!==null&&rs(vt,z,-1/0,v.sortObjects)}rs(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(G,$),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&Bt.addToRenderList(m,A),this.info.render.frame++,Y===!0&&pt.beginShadows();let Z=p.state.shadowsArray;It.render(Z,A,z),Y===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){let vt=z.cameras;if(k.length>0)for(let Pt=0,kt=vt.length;Pt<kt;Pt++){let Ht=vt[Pt];lr(J,k,A,Ht)}lt&&Bt.render(A);for(let Pt=0,kt=vt.length;Pt<kt;Pt++){let Ht=vt[Pt];os(m,A,Ht,Ht.viewport)}}else k.length>0&&lr(J,k,A,z),lt&&Bt.render(A),os(m,A,z);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,z),de.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&pt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function rs(A,z,Z,J){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){J&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);let Pt=rt.update(A),kt=A.material;kt.visible&&m.push(A,Pt,kt,Z,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){let Pt=rt.update(A),kt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(kt)){let Ht=Pt.groups;for(let Qt=0,se=Ht.length;Qt<se;Qt++){let Vt=Ht[Qt],_e=kt[Vt.materialIndex];_e&&_e.visible&&m.push(A,Pt,_e,Z,zt.z,Vt)}}else kt.visible&&m.push(A,Pt,kt,Z,zt.z,null)}}let vt=A.children;for(let Pt=0,kt=vt.length;Pt<kt;Pt++)rs(vt[Pt],z,Z,J)}function os(A,z,Z,J){let k=A.opaque,vt=A.transmissive,Pt=A.transparent;p.setupLightsView(Z),Y===!0&&pt.setGlobalState(v.clippingPlanes,Z),J&&gt.viewport(C.copy(J)),k.length>0&&Ni(k,z,Z),vt.length>0&&Ni(vt,z,Z),Pt.length>0&&Ni(Pt,z,Z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function lr(A,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ze(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?mn:Vn,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let vt=p.state.transmissionRenderTarget[J.id],Pt=J.viewport||C;vt.setSize(Pt.z,Pt.w);let kt=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),lt&&Bt.render(Z);let Ht=v.toneMapping;v.toneMapping=Ci;let Qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Y===!0&&pt.setGlobalState(v.clippingPlanes,J),Ni(A,Z,J),P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Vt=0,_e=z.length;Vt<_e;Vt++){let Ce=z[Vt],Pe=Ce.object,un=Ce.geometry,Me=Ce.material,Wt=Ce.group;if(Me.side===Fe&&Pe.layers.test(J.layers)){let ii=Me.side;Me.side=en,Me.needsUpdate=!0,X(Pe,Z,J,un,Me,Wt),Me.side=ii,Me.needsUpdate=!0,se=!0}}se===!0&&(P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt))}v.setRenderTarget(kt),v.setClearColor(N,B),Qt!==void 0&&(J.viewport=Qt),v.toneMapping=Ht}function Ni(A,z,Z){let J=z.isScene===!0?z.overrideMaterial:null;for(let k=0,vt=A.length;k<vt;k++){let Pt=A[k],kt=Pt.object,Ht=Pt.geometry,Qt=J===null?Pt.material:J,se=Pt.group;kt.layers.test(Z.layers)&&X(kt,z,Z,Ht,Qt,se)}}function X(A,z,Z,J,k,vt){A.onBeforeRender(v,z,Z,J,k,vt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,z,Z,J,A,vt),k.transparent===!0&&k.side===Fe&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,v.renderBufferDirect(Z,z,J,k,A,vt),k.side=Hn,k.needsUpdate=!0,v.renderBufferDirect(Z,z,J,k,A,vt),k.side=Fe):v.renderBufferDirect(Z,z,J,k,A,vt),A.onAfterRender(v,z,Z,J,k,vt)}function at(A,z,Z){z.isScene!==!0&&(z=ie);let J=Mt.get(A),k=p.state.lights,vt=p.state.shadowsArray,Pt=k.state.version,kt=Ut.getParameters(A,k.state,vt,z,Z),Ht=Ut.getProgramCacheKey(kt),Qt=J.programs;J.environment=A.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(A.isMeshStandardMaterial?W:T).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",$t),Qt=new Map,J.programs=Qt);let se=Qt.get(Ht);if(se!==void 0){if(J.currentProgram===se&&J.lightsStateVersion===Pt)return Re(A,kt),se}else kt.uniforms=Ut.getUniforms(A),A.onBeforeCompile(kt,v),se=Ut.acquireProgram(kt,Ht),Qt.set(Ht,se),J.uniforms=kt.uniforms;let Vt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=pt.uniform),Re(A,kt),J.needsLights=cr(A),J.lightsStateVersion=Pt,J.needsLights&&(Vt.ambientLightColor.value=k.state.ambient,Vt.lightProbe.value=k.state.probe,Vt.directionalLights.value=k.state.directional,Vt.directionalLightShadows.value=k.state.directionalShadow,Vt.spotLights.value=k.state.spot,Vt.spotLightShadows.value=k.state.spotShadow,Vt.rectAreaLights.value=k.state.rectArea,Vt.ltc_1.value=k.state.rectAreaLTC1,Vt.ltc_2.value=k.state.rectAreaLTC2,Vt.pointLights.value=k.state.point,Vt.pointLightShadows.value=k.state.pointShadow,Vt.hemisphereLights.value=k.state.hemi,Vt.directionalShadowMap.value=k.state.directionalShadowMap,Vt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Vt.spotShadowMap.value=k.state.spotShadowMap,Vt.spotLightMatrix.value=k.state.spotLightMatrix,Vt.spotLightMap.value=k.state.spotLightMap,Vt.pointShadowMap.value=k.state.pointShadowMap,Vt.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=se,J.uniformsList=null,se}function ne(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Is.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Re(A,z){let Z=Mt.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function wn(A,z,Z,J,k){z.isScene!==!0&&(z=ie),P.resetTextureUnits();let vt=z.fog,Pt=J.isMeshStandardMaterial?z.environment:null,kt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Qs,Ht=(J.isMeshStandardMaterial?W:T).get(J.envMap||Pt),Qt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!Z.morphAttributes.position,_e=!!Z.morphAttributes.normal,Ce=!!Z.morphAttributes.color,Pe=Ci;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let un=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=un!==void 0?un.length:0,Wt=Mt.get(J),ii=p.state.lights;if(Y===!0&&(ut===!0||A!==b)){let Tn=A===b&&J.id===M;pt.setState(J,A,Tn)}let Se=!1;J.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ii.state.version||Wt.outputColorSpace!==kt||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isBatchedMesh&&Wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Wt.instancingMorph===!1&&k.morphTexture!==null||Wt.envMap!==Ht||J.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==pt.numPlanes||Wt.numIntersection!==pt.numIntersection)||Wt.vertexAlphas!==Qt||Wt.vertexTangents!==se||Wt.morphTargets!==Vt||Wt.morphNormals!==_e||Wt.morphColors!==Ce||Wt.toneMapping!==Pe||Wt.morphTargetsCount!==Me)&&(Se=!0):(Se=!0,Wt.__version=J.version);let Un=Wt.currentProgram;Se===!0&&(Un=at(J,z,k));let as=!1,_n=!1,hr=!1,Ie=Un.getUniforms(),qn=Wt.uniforms;if(gt.useProgram(Un.program)&&(as=!0,_n=!0,hr=!0),J.id!==M&&(M=J.id,_n=!0),as||b!==A){gt.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),Of(ct),zf(ct),Ie.setValue(L,"projectionMatrix",ct)):Ie.setValue(L,"projectionMatrix",A.projectionMatrix),Ie.setValue(L,"viewMatrix",A.matrixWorldInverse);let yi=Ie.map.cameraPosition;yi!==void 0&&yi.setValue(L,Ct.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,_n=!0,hr=!0)}if(k.isSkinnedMesh){Ie.setOptional(L,k,"bindMatrix"),Ie.setOptional(L,k,"bindMatrixInverse");let Tn=k.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ie.setValue(L,"boneTexture",Tn.boneTexture,P))}k.isBatchedMesh&&(Ie.setOptional(L,k,"batchingTexture"),Ie.setValue(L,"batchingTexture",k._matricesTexture,P),Ie.setOptional(L,k,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",k._indirectTexture,P),Ie.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",k._colorsTexture,P));let ur=Z.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&qt.update(k,Z,Un),(_n||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,Ie.setValue(L,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(qn.envMap.value=Ht,qn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(qn.envMapIntensity.value=z.environmentIntensity),_n&&(Ie.setValue(L,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&hn(qn,hr),vt&&J.fog===!0&&ft.refreshFogUniforms(qn,vt),ft.refreshMaterialUniforms(qn,J,H,et,p.state.transmissionRenderTarget[A.id]),Is.upload(L,ne(Wt),qn,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Is.upload(L,ne(Wt),qn,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(L,"center",k.center),Ie.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ie.setValue(L,"normalMatrix",k.normalMatrix),Ie.setValue(L,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Tn=J.uniformsGroups;for(let yi=0,Mi=Tn.length;yi<Mi;yi++){let vh=Tn[yi];F.update(vh,Un),F.bind(vh,Un)}}return Un}function hn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function cr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,Z){Mt.get(A.texture).__webglTexture=z,Mt.get(A.depthTexture).__webglTexture=Z;let J=Mt.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let Z=Mt.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){w=A,E=z,S=Z;let J=!0,k=null,vt=!1,Pt=!1;if(A){let Ht=Mt.get(A);if(Ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ht.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ht.__hasExternalTextures)P.rebindTextures(A,Mt.get(A.texture).__webglTexture,Mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Vt=A.depthTexture;if(Ht.__boundDepthTexture!==Vt){if(Vt!==null&&Mt.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Pt=!0);let se=Mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[z])?k=se[z][Z]:k=se[z],vt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=Mt.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?k=se[Z]:k=se,C.copy(A.viewport),U.copy(A.scissor),D=A.scissorTest}else C.copy(nt).multiplyScalar(H).floor(),U.copy(it).multiplyScalar(H).floor(),D=j;if(gt.bindFramebuffer(L.FRAMEBUFFER,k)&&J&&gt.drawBuffers(A,k),gt.viewport(C),gt.scissor(U),gt.setScissorTest(D),vt){let Ht=Mt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ht.__webglTexture,Z)}else if(Pt){let Ht=Mt.get(A.texture),Qt=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,Z||0,Qt)}M=-1},this.readRenderTargetPixels=function(A,z,Z,J,k,vt,Pt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(kt=kt[Pt]),kt){gt.bindFramebuffer(L.FRAMEBUFFER,kt);try{let Ht=A.texture,Qt=Ht.format,se=Ht.type;if(!Et.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-k&&L.readPixels(z,Z,J,k,Zt.convert(Qt),Zt.convert(se),vt)}finally{let Ht=w!==null?Mt.get(w).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,J,k,vt,Pt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(kt=kt[Pt]),kt){let Ht=A.texture,Qt=Ht.format,se=Ht.type;if(!Et.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-k){gt.bindFramebuffer(L.FRAMEBUFFER,kt);let Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(z,Z,J,k,Zt.convert(Qt),Zt.convert(se),0);let _e=w!==null?Mt.get(w).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,_e);let Ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ff(L,Ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(Vt),L.deleteSync(Ce),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,Z=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);let J=Math.pow(2,-Z),k=Math.floor(A.image.width*J),vt=Math.floor(A.image.height*J),Pt=z!==null?z.x:0,kt=z!==null?z.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Pt,kt,k,vt),gt.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,J=null,k=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],z=arguments[2],k=arguments[3]||0,Z=null);let vt,Pt,kt,Ht,Qt,se,Vt,_e,Ce,Pe=A.isCompressedTexture?A.mipmaps[k]:A.image;Z!==null?(vt=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,kt=Z.isBox3?Z.max.z-Z.min.z:1,Ht=Z.min.x,Qt=Z.min.y,se=Z.isBox3?Z.min.z:0):(vt=Pe.width,Pt=Pe.height,kt=Pe.depth||1,Ht=0,Qt=0,se=0),J!==null?(Vt=J.x,_e=J.y,Ce=J.z):(Vt=0,_e=0,Ce=0);let un=Zt.convert(z.format),Me=Zt.convert(z.type),Wt;z.isData3DTexture?(P.setTexture3D(z,0),Wt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Wt=L.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let ii=L.getParameter(L.UNPACK_ROW_LENGTH),Se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),as=L.getParameter(L.UNPACK_SKIP_ROWS),_n=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,se);let hr=A.isDataArrayTexture||A.isData3DTexture,Ie=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let qn=Mt.get(A),ur=Mt.get(z),Tn=Mt.get(qn.__renderTarget),yi=Mt.get(ur.__renderTarget);gt.bindFramebuffer(L.READ_FRAMEBUFFER,Tn.__webglFramebuffer),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<kt;Mi++)hr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(A).__webglTexture,k,se+Mi),A.isDepthTexture?(Ie&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(z).__webglTexture,k,Ce+Mi),L.blitFramebuffer(Ht,Qt,vt,Pt,Vt,_e,vt,Pt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ie?L.copyTexSubImage3D(Wt,k,Vt,_e,Ce+Mi,Ht,Qt,vt,Pt):L.copyTexSubImage2D(Wt,k,Vt,_e,Ce+Mi,Ht,Qt,vt,Pt);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Wt,k,Vt,_e,Ce,vt,Pt,kt,un,Me,Pe.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Wt,k,Vt,_e,Ce,vt,Pt,kt,un,Pe.data):L.texSubImage3D(Wt,k,Vt,_e,Ce,vt,Pt,kt,un,Me,Pe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,Vt,_e,vt,Pt,un,Me,Pe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,Vt,_e,Pe.width,Pe.height,un,Pe.data):L.texSubImage2D(L.TEXTURE_2D,k,Vt,_e,vt,Pt,un,Me,Pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ii),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,as),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),k===0&&z.generateMipmaps&&L.generateMipmap(Wt),gt.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z=null,J=null,k=0){return A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,A=arguments[2],z=arguments[3],k=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,Z,J,k)},this.initRenderTarget=function(A){Mt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),gt.unbindTexture()},this.resetState=function(){E=0,S=0,w=null,gt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}},Vo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Pr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new I,Ir=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$i=class extends jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,gr=new I,bs=new I,Es=new I,ws=new Q,xr=new Q,td=new pe,vo=new I,vr=new I,_o=new I,vu=new Q,il=new Q,_u=new Q,Vs=class extends Ve{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Go(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Ir(n,3,0,!1)),Ss.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;yo(vo.set(-.5,-.5,0),Es,a,bs,s,r),yo(vr.set(.5,-.5,0),Es,a,bs,s,r),yo(_o.set(.5,.5,0),Es,a,bs,s,r),vu.set(0,0),il.set(1,0),_u.set(1,1);let o=t.ray.intersectTriangle(vo,vr,_o,!1,gr);if(o===null&&(yo(vr.set(-.5,.5,0),Es,a,bs,s,r),il.set(0,1),o=t.ray.intersectTriangle(vo,_o,vr,!1,gr),o===null))return;let l=t.ray.origin.distanceTo(gr);l<t.near||l>t.far||e.push({distance:l,point:gr.clone(),uv:Ri.getInterpolation(gr,vo,vr,_o,vu,il,_u,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yo(i,t,e,n,s,r){ws.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(xr.x=r*ws.x-s*ws.y,xr.y=s*ws.x+r*ws.y):xr.copy(ws),i.copy(t),i.x+=xr.x,i.y+=xr.y,i.applyMatrix4(td)}var Gs=class extends fn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hc=class extends jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yu=new pe,uc=new Zi,Mo=new Fs,So=new I,Cn=class extends Ve{constructor(t=new ae,e=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;yu.copy(s).invert(),uc.copy(t.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);So.fromBufferAttribute(u,m),Mu(So,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)So.fromBufferAttribute(u,g),Mu(So,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mu(i,t,e,n,s,r,a){let o=uc.distanceSqToPoint(i);if(o<e){let l=new I;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Wo=class extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Q:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,l=new pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Dr=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends Dr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var bo=new I,sl=new Yc,rl=new Yc,ol=new Yc,Ji=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),rl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ix(i,t){let e=1-i;return e*e*t}function Dx(i,t){return 2*(1-i)*i*t}function Lx(i,t){return i*i*t}function wr(i,t,e,n){return Ix(i,t)+Dx(i,e)+Lx(i,n)}function Ux(i,t){let e=1-i;return e*e*e*t}function Nx(i,t){let e=1-i;return 3*e*e*i*t}function Fx(i,t){return 3*(1-i)*i*i*t}function Ox(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return Ux(i,t)+Nx(i,e)+Fx(i,n)+Ox(i,s)}var Xo=class extends Pn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lr=class extends Pn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y),Tr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends Pn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fc=class extends Pn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends Pn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends Pn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y),wr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Su(o,l.x,c.x,h.x,u.x),Su(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Q().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:Ji,CubicBezierCurve:Xo,CubicBezierCurve3:Lr,EllipseCurve:Dr,LineCurve:qo,LineCurve3:fc,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Zo,SplineCurve:$o}),pc=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}},Ws=class extends pc{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qo(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Yo(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xo(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Dr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Li=class i extends ae{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new Q,f=new I,g=new I,x=new I,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),R=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),o.push(d.x,d.y);let S=l[3*E+0]*v,w=l[3*E+1],M=l[3*E+0]*R;c.push(S,w,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,E=v+t.length,S=v+t.length+1,w=v+1;r.push(R,E,w),r.push(S,w,E)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ko=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ur=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function y(){let v=new I,R=new I,E=0,S=(e-t)/n;for(let w=0;w<=r;w++){let M=[],b=w/r,C=b*(e-t)+t;for(let U=0;U<=s;U++){let D=U/s,N=D*l+o,B=Math.sin(N),O=Math.cos(N);R.x=C*B,R.y=-b*n+m,R.z=C*O,u.push(R.x,R.y,R.z),v.set(B,S,O).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-b),M.push(g++)}x.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let b=x[M][w],C=x[M+1][w],U=x[M+1][w+1],D=x[M][w+1];(t>0||M!==0)&&(h.push(b,C,D),E+=3),(e>0||M!==r-1)&&(h.push(C,U,D),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){let R=g,E=new Q,S=new I,w=0,M=v===!0?t:e,b=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let N=U/s*l+o,B=Math.cos(N),O=Math.sin(N);S.x=M*O,S.y=m*b,S.z=M*B,u.push(S.x,S.y,S.z),d.push(0,b,0),E.x=B*.5+.5,E.y=O*.5*b+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){let D=R+U,N=C+U;v===!0?h.push(N,N+1,D):h.push(N+1,N,D),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jo=class i extends Ur{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pn=class extends Ws{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}},zx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ed(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Gx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Nr(r,a,e,o,l,f,0),a}};function ed(i,t,e,n,s){let r,a;if(s===tv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=bu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=bu(r,i[r],i[r+1],a);return a&&fa(a,a.next)&&(Or(a),a=a.next),a}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fa(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Zx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?kx(i,n,s,r):Bx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Or(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Hx(Ki(i),t,e),Nr(i,t,e,n,s,r,2)):a===2&&Vx(i,t,e,n,s,r):Nr(Ki(i),t,e,n,s,r,1);break}}}function Bx(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&As(s,o,r,l,a,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ne(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=mc(f,g,t,e,n),y=mc(x,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&As(o,h,l,u,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&As(o,h,l,u,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&As(o,h,l,u,c,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&As(o,h,l,u,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!fa(s,r)&&nd(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function Vx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kx(a,o)){let l=id(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Nr(a,t,e,n,s,r,0),Nr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ed(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jx(c));for(s.sort(Wx),r=0;r<s.length;r++)e=Xx(s[r],e);return e}function Wx(i,t){return i.x-t.x}function Xx(i,t){let e=qx(i,t);if(!e)return t;let n=id(e,i);return Ki(n,n.next),Ki(e,e.next)}function qx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&As(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Fr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Yx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Yx(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Zx(i,t,e,n){let s=i;do s.z===0&&(s.z=mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$x(s)}function $x(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Kx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!jx(i,t)&&(Fr(i,t)&&Fr(t,i)&&Qx(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||fa(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fa(i,t){return i.x===t.x&&i.y===t.y}function nd(i,t,e,n){let s=wo(Ne(i,t,e)),r=wo(Ne(i,t,n)),a=wo(Ne(e,n,i)),o=wo(Ne(e,n,t));return!!(s!==r&&a!==o||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||a===0&&Eo(e,i,n)||o===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function jx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function Qx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function id(i,t){let e=new gc(i.i,i.x,i.y),n=new gc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bu(i,t,e,n){let s=new gc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Pi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),wu(n,t);let a=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wu(n,e[l]);let o=zx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xs=class i extends ae{constructor(t=new pn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ev,_,v=!1,R,E,S,w;p&&(_=p.getSpacedPoints(h),v=!0,d=!1,R=p.computeFrenetFrames(h,!1),E=new I,S=new I,w=new I),d||(m=0,f=0,g=0,x=0);let M=o.extractPoints(c),b=M.shape,C=M.holes;if(!Pi.isClockWise(b)){b=b.reverse();for(let lt=0,mt=C.length;lt<mt;lt++){let L=C[lt];Pi.isClockWise(L)&&(C[lt]=L.reverse())}}let D=Pi.triangulateShape(b,C),N=b;for(let lt=0,mt=C.length;lt<mt;lt++){let L=C[lt];b=b.concat(L)}function B(lt,mt,L){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(mt,L)}let O=b.length,et=D.length;function H(lt,mt,L){let Lt,tt,Et,gt=lt.x-mt.x,Nt=lt.y-mt.y,Mt=L.x-lt.x,P=L.y-lt.y,T=gt*gt+Nt*Nt,W=gt*P-Nt*Mt;if(Math.abs(W)>Number.EPSILON){let st=Math.sqrt(T),ht=Math.sqrt(Mt*Mt+P*P),rt=mt.x-Nt/st,Ut=mt.y+gt/st,ft=L.x-P/ht,St=L.y+Mt/ht,ee=((ft-rt)*P-(St-Ut)*Mt)/(gt*P-Nt*Mt);Lt=rt+gt*ee-lt.x,tt=Ut+Nt*ee-lt.y;let pt=Lt*Lt+tt*tt;if(pt<=2)return new Q(Lt,tt);Et=Math.sqrt(pt/2)}else{let st=!1;gt>Number.EPSILON?Mt>Number.EPSILON&&(st=!0):gt<-Number.EPSILON?Mt<-Number.EPSILON&&(st=!0):Math.sign(Nt)===Math.sign(P)&&(st=!0),st?(Lt=-Nt,tt=gt,Et=Math.sqrt(T)):(Lt=gt,tt=Nt,Et=Math.sqrt(T/2))}return new Q(Lt/Et,tt/Et)}let G=[];for(let lt=0,mt=N.length,L=mt-1,Lt=lt+1;lt<mt;lt++,L++,Lt++)L===mt&&(L=0),Lt===mt&&(Lt=0),G[lt]=H(N[lt],N[L],N[Lt]);let $=[],nt,it=G.concat();for(let lt=0,mt=C.length;lt<mt;lt++){let L=C[lt];nt=[];for(let Lt=0,tt=L.length,Et=tt-1,gt=Lt+1;Lt<tt;Lt++,Et++,gt++)Et===tt&&(Et=0),gt===tt&&(gt=0),nt[Lt]=H(L[Lt],L[Et],L[gt]);$.push(nt),it=it.concat(nt)}for(let lt=0;lt<m;lt++){let mt=lt/m,L=f*Math.cos(mt*Math.PI/2),Lt=g*Math.sin(mt*Math.PI/2)+x;for(let tt=0,Et=N.length;tt<Et;tt++){let gt=B(N[tt],G[tt],Lt);ct(gt.x,gt.y,-L)}for(let tt=0,Et=C.length;tt<Et;tt++){let gt=C[tt];nt=$[tt];for(let Nt=0,Mt=gt.length;Nt<Mt;Nt++){let P=B(gt[Nt],nt[Nt],Lt);ct(P.x,P.y,-L)}}}let j=g+x;for(let lt=0;lt<O;lt++){let mt=d?B(b[lt],it[lt],j):b[lt];v?(S.copy(R.normals[0]).multiplyScalar(mt.x),E.copy(R.binormals[0]).multiplyScalar(mt.y),w.copy(_[0]).add(S).add(E),ct(w.x,w.y,w.z)):ct(mt.x,mt.y,0)}for(let lt=1;lt<=h;lt++)for(let mt=0;mt<O;mt++){let L=d?B(b[mt],it[mt],j):b[mt];v?(S.copy(R.normals[lt]).multiplyScalar(L.x),E.copy(R.binormals[lt]).multiplyScalar(L.y),w.copy(_[lt]).add(S).add(E),ct(w.x,w.y,w.z)):ct(L.x,L.y,u/h*lt)}for(let lt=m-1;lt>=0;lt--){let mt=lt/m,L=f*Math.cos(mt*Math.PI/2),Lt=g*Math.sin(mt*Math.PI/2)+x;for(let tt=0,Et=N.length;tt<Et;tt++){let gt=B(N[tt],G[tt],Lt);ct(gt.x,gt.y,u+L)}for(let tt=0,Et=C.length;tt<Et;tt++){let gt=C[tt];nt=$[tt];for(let Nt=0,Mt=gt.length;Nt<Mt;Nt++){let P=B(gt[Nt],nt[Nt],Lt);v?ct(P.x,P.y+_[h-1].y,_[h-1].x+L):ct(P.x,P.y,u+L)}}}V(),Y();function V(){let lt=s.length/3;if(d){let mt=0,L=O*mt;for(let Lt=0;Lt<et;Lt++){let tt=D[Lt];Tt(tt[2]+L,tt[1]+L,tt[0]+L)}mt=h+m*2,L=O*mt;for(let Lt=0;Lt<et;Lt++){let tt=D[Lt];Tt(tt[0]+L,tt[1]+L,tt[2]+L)}}else{for(let mt=0;mt<et;mt++){let L=D[mt];Tt(L[2],L[1],L[0])}for(let mt=0;mt<et;mt++){let L=D[mt];Tt(L[0]+O*h,L[1]+O*h,L[2]+O*h)}}n.addGroup(lt,s.length/3-lt,0)}function Y(){let lt=s.length/3,mt=0;ut(N,mt),mt+=N.length;for(let L=0,Lt=C.length;L<Lt;L++){let tt=C[L];ut(tt,mt),mt+=tt.length}n.addGroup(lt,s.length/3-lt,1)}function ut(lt,mt){let L=lt.length;for(;--L>=0;){let Lt=L,tt=L-1;tt<0&&(tt=lt.length-1);for(let Et=0,gt=h+m*2;Et<gt;Et++){let Nt=O*Et,Mt=O*(Et+1),P=mt+Lt+Nt,T=mt+tt+Nt,W=mt+tt+Mt,st=mt+Lt+Mt;Ct(P,T,W,st)}}}function ct(lt,mt,L){l.push(lt),l.push(mt),l.push(L)}function Tt(lt,mt,L){zt(lt),zt(mt),zt(L);let Lt=s.length/3,tt=y.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);ie(tt[0]),ie(tt[1]),ie(tt[2])}function Ct(lt,mt,L,Lt){zt(lt),zt(mt),zt(Lt),zt(mt),zt(L),zt(Lt);let tt=s.length/3,Et=y.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);ie(Et[0]),ie(Et[1]),ie(Et[3]),ie(Et[1]),ie(Et[2]),ie(Et[3])}function zt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function ie(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return nv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new i(n,t.options)}},ev={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-g),new Q(x,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-g),new Q(m,1-p)]}};function nv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zr=class i extends ae{constructor(t=new pn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Pi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Pi.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=Pi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],_=y[0]+u,v=y[1]+u,R=y[2]+u;n.push(_,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return iv(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function iv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var bn=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],R=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(_,v,E),(p!==n-1||l<Math.PI)&&f.push(v,R,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qo=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ji=class i extends ae{constructor(t=new Zo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new Q,h=new I,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);let v=a.normals[_],R=a.binormals[_];for(let E=0;E<=s;E++){let S=E/s*Math.PI*2,w=Math.sin(S),M=-Math.cos(S);l.x=M*v.x+w*R.x,l.y=M*v.y+w*R.y,l.z=M*v.z+w*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let R=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),S=(s+1)*_+v,w=(s+1)*(_-1)+v;g.push(R,E,w),g.push(E,S,w)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ta=class extends le{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Xt=class extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qs=class extends Xt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ea=class extends jn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function To(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xc=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bh:r=t,o=2*e-n;break;case Eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:a=t,l=2*n-e;break;case Eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+_*a[l+R]+v*a[u+R];return r}},vc=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},_c=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=To(e,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:To(t.times,Array),values:To(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&sv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Yl;var Qi=class extends Xn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Do;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Xn{};yc.prototype.ValueTypeName="color";var Mc=class extends Xn{};Mc.prototype.ValueTypeName="number";var Sc=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},na=class extends Xn{InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Xn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Do;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Xn{};bc.prototype.ValueTypeName="vector";var Ec=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},rv=new Ec,wc=class{constructor(t){this.manager=t!==void 0?t:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ia=class extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},al=new pe,Tu=new I,Au=new I,Br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Tc=class extends Br{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ns*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},$s=class extends Zs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ru=new pe,_r=new I,ll=new I,Ac=class extends Br{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},Qn=class extends Zs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rc=class extends Br{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ks=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Cu(){return performance.now()}var Zc="\\[\\]\\.:\\/",ov=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",av="[^"+Zc.replace("\\.","")+"]",lv=/((?:WC+[\/:])*)/.source.replace("WC",$c),cv=/(WCOD+)?/.source.replace("WCOD",av),hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),dv=new RegExp("^"+lv+cv+hv+uv+"$"),fv=["material","materials","bones","map"],Cc=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ov,"")}static parseTrackName(t){let e=dv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Cc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var Pu=new pe,sa=class{constructor(t,e,n=0,s=1/0){this.ray=new Zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(t,e=!0,n=[]){return Pc(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pc(t[s],this,n,e);return n.sort(Iu),n}};function Iu(i,t){return i.distance-t.distance}function Pc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Pc(r[a],t,e,!0)}}var an=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ra=class extends pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var sd={type:"change"},Kc={type:"start"},od={type:"end"},pa=new Zi,rd=new zn,pv=Math.cos(70*he.DEG2RAD),Xe=new I,xn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jc=1e-6,ma=class extends ra{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Gn,this._lastTargetPosition=new I,this._quat=new Gn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new an,this._sphericalDelta=new an,this._scale=1,this._panOffset=new I,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new I,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gv.bind(this),this._onPointerDown=mv.bind(this),this._onPointerUp=xv.bind(this),this._onContextMenu=Ev.bind(this),this._onMouseWheel=yv.bind(this),this._onKeyDown=Mv.bind(this),this._onTouchStart=Sv.bind(this),this._onTouchMove=bv.bind(this),this._onMouseDown=vv.bind(this),this._onMouseMove=_v.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Tv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sd),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Xe.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<pv?this.object.lookAt(this.target):(rd.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(rd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jc||this._lastTargetPosition.distanceToSquared(this.target)>Jc?(this.dispatchEvent(sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xe.copy(s).sub(this.target);let r=Xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function mv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Kc)}function _v(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(od))}function Mv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Sv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Kc)}function bv(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function Ev(i){this.enabled!==!1&&i.preventDefault()}function wv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Av=new zs(-1,1,1,-1,0,1),jc=class extends ae{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},Rv=new jc,ti=class{constructor(t){this._mesh=new ke(Rv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Av)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new pe},cameraProjectionMatrixInverse:{value:new pe},cameraWorldMatrix:{value:new pe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Vr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ga={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function ad(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Cv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Gs(s,t,t);return r.wrapS=fi,r.wrapT=fi,r.needsUpdate=!0,r}function Cv(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Gr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Qc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraProjectionMatrixInverse:{value:new pe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Qc(i,t,e){let n=Pv(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Pv(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var Ui={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xa=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,x=e-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+h,_=x-p+h,v=g-1+2*h,R=x-1+2*h,E=l&255,S=c&255,w=this.perm[E+this.perm[S]]%12,M=this.perm[E+m+this.perm[S+p]]%12,b=this.perm[E+1+this.perm[S+1]]%12,C=.5-g*g-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[w],g,x));let U=.5-y*y-_*_;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[M],y,_));let D=.5-v*v-R*R;return D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[b],v,R)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,y=t-x,_=e-m,v=n-p,R,E,S,w,M,b;y>=_?_>=v?(R=1,E=0,S=0,w=1,M=1,b=0):y>=v?(R=1,E=0,S=0,w=1,M=0,b=1):(R=0,E=0,S=1,w=1,M=0,b=1):_<v?(R=0,E=0,S=1,w=0,M=1,b=1):y<v?(R=0,E=1,S=0,w=0,M=1,b=1):(R=0,E=1,S=0,w=1,M=1,b=0);let C=y-R+f,U=_-E+f,D=v-S+f,N=y-w+2*f,B=_-M+2*f,O=v-b+2*f,et=y-1+3*f,H=_-1+3*f,G=v-1+3*f,$=h&255,nt=u&255,it=d&255,j=this.perm[$+this.perm[nt+this.perm[it]]]%12,V=this.perm[$+R+this.perm[nt+E+this.perm[it+S]]]%12,Y=this.perm[$+w+this.perm[nt+M+this.perm[it+b]]]%12,ut=this.perm[$+1+this.perm[nt+1+this.perm[it+1]]]%12,ct=.6-y*y-_*_-v*v;ct<0?s=0:(ct*=ct,s=ct*ct*this.dot3(this.grad3[j],y,_,v));let Tt=.6-C*C-U*U-D*D;Tt<0?r=0:(Tt*=Tt,r=Tt*Tt*this.dot3(this.grad3[V],C,U,D));let Ct=.6-N*N-B*B-O*O;Ct<0?a=0:(Ct*=Ct,a=Ct*Ct*this.dot3(this.grad3[Y],N,B,O));let zt=.6-et*et-H*H-G*G;return zt<0?o=0:(zt*=zt,o=zt*zt*this.dot3(this.grad3[ut],et,H,G)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(t+e+n+s)*l,m=Math.floor(t+x),p=Math.floor(e+x),y=Math.floor(n+x),_=Math.floor(s+x),v=(m+p+y+_)*c,R=m-v,E=p-v,S=y-v,w=_-v,M=t-R,b=e-E,C=n-S,U=s-w,D=M>b?32:0,N=M>C?16:0,B=b>C?8:0,O=M>U?4:0,et=b>U?2:0,H=C>U?1:0,G=D+N+B+O+et+H,$=a[G][0]>=3?1:0,nt=a[G][1]>=3?1:0,it=a[G][2]>=3?1:0,j=a[G][3]>=3?1:0,V=a[G][0]>=2?1:0,Y=a[G][1]>=2?1:0,ut=a[G][2]>=2?1:0,ct=a[G][3]>=2?1:0,Tt=a[G][0]>=1?1:0,Ct=a[G][1]>=1?1:0,zt=a[G][2]>=1?1:0,ie=a[G][3]>=1?1:0,lt=M-$+c,mt=b-nt+c,L=C-it+c,Lt=U-j+c,tt=M-V+2*c,Et=b-Y+2*c,gt=C-ut+2*c,Nt=U-ct+2*c,Mt=M-Tt+3*c,P=b-Ct+3*c,T=C-zt+3*c,W=U-ie+3*c,st=M-1+4*c,ht=b-1+4*c,rt=C-1+4*c,Ut=U-1+4*c,ft=m&255,St=p&255,ee=y&255,pt=_&255,It=o[ft+o[St+o[ee+o[pt]]]]%32,Bt=o[ft+$+o[St+nt+o[ee+it+o[pt+j]]]]%32,qt=o[ft+V+o[St+Y+o[ee+ut+o[pt+ct]]]]%32,Dt=o[ft+Tt+o[St+Ct+o[ee+zt+o[pt+ie]]]]%32,ce=o[ft+1+o[St+1+o[ee+1+o[pt+1]]]]%32,Zt=.6-M*M-b*b-C*C-U*U;Zt<0?h=0:(Zt*=Zt,h=Zt*Zt*this.dot4(r[It],M,b,C,U));let de=.6-lt*lt-mt*mt-L*L-Lt*Lt;de<0?u=0:(de*=de,u=de*de*this.dot4(r[Bt],lt,mt,L,Lt));let F=.6-tt*tt-Et*Et-gt*gt-Nt*Nt;F<0?d=0:(F*=F,d=F*F*this.dot4(r[qt],tt,Et,gt,Nt));let yt=.6-Mt*Mt-P*P-T*T-W*W;yt<0?f=0:(yt*=yt,f=yt*yt*this.dot4(r[Dt],Mt,P,T,W));let K=.6-st*st-ht*ht-rt*rt-Ut*Ut;return K<0?g=0:(K*=K,g=K*K*this.dot4(r[ce],st,ht,rt,Ut)),27*(h+u+d+f+g)}};var Wr=class i extends ln{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ad(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ze(this.width,this.height,{type:mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new le({defines:Object.assign({},Hr.defines),uniforms:gn.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,blending:He,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ea,this.normalMaterial.blending=He,this.pdMaterial=new le({defines:Object.assign({},Gr.defines),uniforms:gn.clone(Gr.uniforms),vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new le({defines:Object.assign({},Vr.defines),uniforms:gn.clone(Vr.uniforms),vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader,blending:He}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new le({uniforms:gn.clone(Ui.uniforms),vertexShader:Ui.vertexShader,fragmentShader:Ui.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:aa,blendDst:js,blendEquation:Rn,blendSrcAlpha:oa,blendDstAlpha:js,blendEquationAlpha:Rn}),this.blendMaterial=new le({uniforms:gn.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Dc,blendSrc:aa,blendDst:js,blendEquation:Rn,blendSrcAlpha:oa,blendDstAlpha:js,blendEquationAlpha:Rn}),this.fsQuad=new ti(null),this.originalClearColor=new Ft,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ks,this.depthTexture.format=Di,this.depthTexture.type=Ii,this.normalRenderTarget=new Ze(this.width,this.height,{minFilter:nn,magFilter:nn,type:mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=He,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=He,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=He,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new xa,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Gs(s,t,t,Sn,Vn);return r.wrapS=fi,r.wrapT=fi,r.needsUpdate=!0,r}};Wr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var er=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gn.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ti(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xr=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},va=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _a=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new er(Ui),this.copyPass.material.blending=He,this.clock=new Ks}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(a instanceof Xr?n=!0:a instanceof va&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ya=class extends ln{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ld={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var nr=class i extends ln{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,a,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ze(r,a,{type:mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ze(r,a,{type:mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=ld;this.highPassUniforms=gn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ui;this.copyUniforms=gn.clone(h.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new Wn,this.fsQuad=new ti(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};nr.BlurDirectionX=new Q(1,0);nr.BlurDirectionY=new Q(0,1);var cd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ma=class extends ln{constructor(){super();let t=cd;this.uniforms=gn.clone(t.uniforms),this.material=new ta({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var hd={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var qr=new I;function In(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;qr.copy(t),qr[n]=0,qr.normalize();let c=.5*a/(a+o),h=1-qr.angleTo(i)/l;return Math.sign(qr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Sa=class extends mi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new I,l=new I,c=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=In(g,l,"z","y",r,n),d[p+1]=1-In(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-In(g,l,"z","y",r,n),d[p+1]=1-In(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-In(g,l,"x","z",r,t),d[p+1]=In(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-In(g,l,"x","z",r,t),d[p+1]=1-In(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-In(g,l,"x","y",r,t),d[p+1]=1-In(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=In(g,l,"x","y",r,t),d[p+1]=1-In(g,l,"y","x",r,e);break}}};function dd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ae,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ud(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=ud(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ud(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ye(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var th=1924;function _t(i=0,t=1){return th=th*1664525+1013904223>>>0,i+(t-i)*(th/4294967296)}var me=Math.PI*2,At=(i=0,t=0,e=0)=>new I(i,t,e);function Dn(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Wo(s);return r.colorSpace=n?tn:Zn,r.anisotropy=8,r}function ba(i){return Dn(1024,1024,(t,e,n)=>{if(i==="wood"){t.fillStyle="#39231b",t.fillRect(0,0,e,n);for(let s=0;s<5e3;s++){let r=_t(0,n),a=_t(.2,2.5);t.strokeStyle=`rgba(${_t()>.5?"178,116,68":"8,6,6"},${_t(.04,.2)})`,t.lineWidth=a,t.beginPath(),t.moveTo(0,r);for(let o=0;o<=e;o+=16)t.lineTo(o,r+Math.sin(o*.014+r*.028)*3+Math.sin(o*.043+r*.04));t.stroke()}for(let s=0;s<9;s++){let r=_t(0,e),a=_t(0,n);for(let o=1;o<30;o++)t.strokeStyle="#160e0b26",t.lineWidth=.8,t.beginPath(),t.ellipse(r,a,o*_t(2,3),o*.42,0,0,me),t.stroke()}}else if(i==="brick"){t.fillStyle="#69635b",t.fillRect(0,0,e,n);for(let s=0;s<16;s++)for(let r=-1;r<9;r++){let a=r*128+s%2*64,o=s*64;t.fillStyle=`rgb(${_t(101,132)},${_t(57,74)},${_t(43,58)})`,t.fillRect(a+3,o+3,122,58),t.fillStyle="#e3b6a615",t.fillRect(a+4,o+4,120,3)}for(let s=0;s<5e4;s++)t.fillStyle=_t()>.5?"#20171018":"#f0ddc416",t.fillRect(_t(0,e),_t(0,n),_t(.5,2),_t(.5,2))}else if(i==="plaster"){t.fillStyle="#c6bca5",t.fillRect(0,0,e,n);for(let s=0;s<6e4;s++)t.fillStyle=_t()>.5?"#3e3a2b13":"#fffae41b",t.fillRect(_t(0,e),_t(0,n),_t(1,4),_t(1,4))}else if(i==="snow"){t.fillStyle="#e1ebee",t.fillRect(0,0,e,n);for(let s=0;s<45e3;s++)t.fillStyle=_t()>.5?"#92b1c214":"#ffffff70",t.fillRect(_t(0,e),_t(0,n),_t(.4,2),_t(.4,2))}})}function fd(){let i=ba("wood"),t=ba("brick"),e=ba("plaster"),n=ba("snow"),s=Dn(128,256,(u,d,f)=>{let g=u.createRadialGradient(d*.46,f*.66,5,d*.48,f*.56,f*.72);g.addColorStop(0,"#f0ddad"),g.addColorStop(.4,"#c3ab7e"),g.addColorStop(.78,"#7b6a49"),g.addColorStop(1,"#423c2d"),u.fillStyle=g,u.fillRect(0,0,d,f);for(let x=0;x<1500;x++)u.fillStyle=_t()>.6?"#f5e4c015":"#383c3410",u.fillRect(_t(0,d),_t(0,f),1,_t(1,3))}),r=new Xt({color:16777215,map:s,emissive:16764320,emissiveMap:s,emissiveIntensity:.36,roughness:.23,metalness:.04});r.userData.noCastShadow=!0;let a=new qs({color:15061930,map:s,roughness:.18,transmission:.37,thickness:.015,ior:1.46,emissive:16761994,emissiveIntensity:.17});a.userData.noCastShadow=!0,a.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#ifdef USE_MAP
 totalEmissiveRadiance *= texture2D(map, vMapUv).rgb;
#endif`)},a.customProgramCacheKey=()=>"station-lantern-shared-map";let o=new Xt({color:16772304,emissive:16761227,emissiveIntensity:5,roughness:.3});o.userData.noCastShadow=!0;let l=Dn(128,256,(u,d,f)=>{let g=u.createLinearGradient(0,0,d,0);g.addColorStop(0,"rgba(231,241,238,.7)"),g.addColorStop(.15,"rgba(245,246,230,.08)"),g.addColorStop(.5,"rgba(255,246,220,.025)"),g.addColorStop(.85,"rgba(245,246,230,.08)"),g.addColorStop(1,"rgba(231,241,238,.7)"),u.fillStyle=g,u.fillRect(0,0,d,f);for(let x of[-1,1])for(let m=0;m<16;m++){let p=x<0?4:124,y=12+m*15;u.strokeStyle="rgba(226,242,240,.3)",u.lineWidth=.8,u.beginPath(),u.moveTo(p,y+10),u.lineTo(p-x*(4+m%4),y-9);for(let _=0;_<4;_++)u.moveTo(p-x*(1+_),y+6-_*4),u.lineTo(p-x*(8+_*1.2),y+4-_*5);u.stroke()}}),c=new Xt({color:16770500,map:l,roughness:.24,metalness:.08,transparent:!0,opacity:.36,emissive:16759408,emissiveIntensity:.05,depthWrite:!1,side:Fe});c.userData.noCastShadow=!0;let h=(u,d=.6,f=0,g={})=>new Xt({color:u,roughness:d,metalness:f,...g});return{walnut:h(12167585,.38,0,{map:i,bumpMap:i,bumpScale:.035}),darkwood:h(3810073,.72),oak:h(7360569,.62,0,{map:i}),brass:h(12096851,.31,.82),gold:h(13874284,.27,.8),aged:h(6116155,.53,.72),black:h(1318949,.36,.65),iron:h(2635320,.52,.6),steel:h(9083294,.3,.88),engine:h(2507842,.36,.65),red:h(6896434,.49,.3),cream:h(13285786,.58),brick:h(16777215,.93,0,{map:t,bumpMap:t,bumpScale:.022}),plaster:h(16777215,.92,0,{map:e,bumpMap:e,bumpScale:.014}),roof:h(2638668,.7,.2),snow:h(16777215,.82,0,{map:n,bumpMap:n,bumpScale:.012}),snowShade:h(12769247,.92),pine:h(1717809,.9),pineLight:h(3033917,.95),trunk:h(5587250,.91),stone:h(8950676,.94),gravel:h(5465447,.94),leather:h(8408626,.72),cloth:h(6780266,.96),glass:h(3620139,.2,.25),warm:r,windowGlass:c,lampGlass:a,filament:o,ember:new Xt({color:16762487,emissive:16749868,emissiveIntensity:3.1}),signalRed:new Xt({color:16742752,emissive:16728096,emissiveIntensity:2.1}),signalGreen:new Xt({color:11984035,emissive:8643979,emissiveIntensity:1.8})}}var gi=new Map;function jt(i,t,e,n=0,s=0,r=0){let a=new ke(t,e);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function q(i,t,e,n,s,r=0,a=0,o=0,l=0){let c=`b${t}_${e}_${n}_${l}`;return gi.has(c)||gi.set(c,l?new Sa(t,e,n,2,l):new mi(t,e,n)),jt(i,gi.get(c),s,r,a,o)}function Gt(i,t,e,n,s,r=0,a=0,o=0,l=32){let c=`c${t}_${e}_${n}_${l}`;return gi.has(c)||gi.set(c,new Ur(t,e,n,l)),jt(i,gi.get(c),s,r,a,o)}function dt(i,t,e,n=0,s=0,r=0,a=1,o=1,l=1){let c="s"+t;gi.has(c)||gi.set(c,new bn(t,14,10));let h=jt(i,gi.get(c),e,n,s,r);return h.scale.set(a,o,l),h}function te(i,t,e,n,s=0,r=0,a=0,o=me){return jt(i,new Qo(t,e,8,64,o),n,s,r,a)}function Ot(i,t,e,n,s,r=n,a=8){t=Array.isArray(t)?At(...t):t,e=Array.isArray(e)?At(...e):e;let o=e.clone().sub(t),l=Gt(i,r,n,o.length(),s,...t.clone().add(e).multiplyScalar(.5).toArray(),a);return l.quaternion.setFromUnitVectors(At(0,1,0),o.normalize()),l}function ue(i,t,e,n){return jt(i,new ji(new Ji(t.map(s=>At(...s))),Math.max(16,t.length*6),e,8,!1),n)}function xt(i,t=0,e=0,n=0,s=0){let r=new kn;return r.position.set(t,e,n),r.rotation.y=s,i.add(r),r}function sn(i,t,e,n,s,r,a,o={}){let l=Dn(1024,Math.round(1024*n/e),(u,d,f)=>{u.fillStyle=o.bg||"#182e31",u.fillRect(0,0,d,f),o.border!==!1&&(u.strokeStyle=o.ink||"#e0c897",u.lineWidth=4,u.strokeRect(12,12,d-24,f-24),u.lineWidth=1,u.strokeRect(20,20,d-40,f-40)),u.fillStyle=o.ink||"#e0c897",u.textAlign="center",u.textBaseline="middle",u.font=`${o.weight||400} ${Math.floor(f*(o.fontScale||.46))}px ${o.font||"Georgia"}`;let g=t.split(`
`);g.forEach((x,m)=>u.fillText(x,d/2,f/2+(m-(g.length-1)/2)*f*.31,d*.91))}),c=new Xt({map:l,roughness:.53,metalness:o.metalness||.12}),h=jt(i,new Ke(e,n),c,s,r,a);return h.castShadow=!1,h}function ir(i,t){let e=new pn,n=i/2;return e.moveTo(-n,0),e.lineTo(n,0),e.lineTo(n,t-n),e.absarc(0,t-n,n,0,Math.PI,!1),e.lineTo(-n,0),e}function xi(i,t,e,n,s,r,a,o=.025){let l=new Xs(t,{depth:e,bevelEnabled:!!o,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:1,curveSegments:24});return jt(i,l,n,s,r,a)}function Oe(i,t,e,n,s=.2,r=.07,a=.15,o){return dt(i,1,o,t,e,n,s,r,a)}function ge(i){i.updateMatrixWorld(!0);let t=new Map,e=new pe().copy(i.matrixWorld).invert(),n=[];i.traverse(r=>{if(!r.isMesh||r.userData.dynamic||Array.isArray(r.material))return;let a=r.material.uuid,o=t.get(a);o||(o={mat:r.material,geos:[]},t.set(a,o));let l=r.geometry.clone();l.index&&l.copy(l.toNonIndexed());let c=new pe().multiplyMatrices(e,r.matrixWorld);l.applyMatrix4(c),l.deleteAttribute("uv1"),l.deleteAttribute("tangent"),o.geos.push(l),n.push(r)}),n.forEach(r=>r.removeFromParent());let s=0;for(let r of t.values()){let a=dd(r.geos,!1);if(a){let o=jt(i,a,r.mat);r.mat.userData.noCastShadow&&(o.castShadow=!1),o.name="Batched \xB7 "+r.mat.uuid.slice(0,6),s+=a.attributes.position.count/3}r.geos.forEach(o=>o.dispose())}return s}var Jt=1.49;function Le(i,t){return Jt+.045*Math.sin(i*1.7+t*.8)+.025*Math.sin(t*3.3-i*.9)+.018*Math.cos(i*4.8+t*5)}function Iv(i,t){let e=xt(i);e.name="Turned walnut & engraved brass";let n=[[0,-.18],[3.8,-.18],[4.22,-.17],[4.43,-.08],[4.59,.02],[4.67,.11],[4.68,.19],[4.62,.24],[4.53,.27],[4.46,.33],[4.44,.4],[4.44,.69],[4.47,.76],[4.6,.82],[4.67,.91],[4.67,1.02],[4.59,1.1],[4.39,1.14],[4.36,1.27],[0,1.27]].map(a=>new Q(...a));jt(e,new Li(n,192),t.walnut);for(let[a,o,l]of[[4.65,.18,.035],[4.55,.3,.022],[4.46,.4,.018],[4.46,.72,.028],[4.64,.91,.045],[4.55,1.1,.025],[4.36,1.25,.055]]){let c=te(e,a,l,t.brass,0,o,0);c.rotation.x=Math.PI/2}Gt(e,4.32,4.32,.09,t.aged,0,1.25,0,160);for(let a=0;a<144;a++){let o=a/144*me,l=xt(e,Math.sin(o)*4.45,.55,Math.cos(o)*4.45,o);q(l,.015,.23,.012,t.darkwood,0,0,0,.004),a%4===0&&dt(l,.023,t.aged,0,.135,.012)}for(let a=0;a<40;a++){let o=a/40*me,l=xt(e,Math.sin(o)*4.475,.58,Math.cos(o)*4.475,o);for(let c of[-1,1]){ue(l,[[0,-.1,0],[c*.08,-.04,.004],[c*.14,.07,.004],[c*.07,.1,.004],[c*.04,.055,.004]],.007,t.aged);for(let h=0;h<3;h++){let u=dt(l,.033,t.aged,c*(.05+h*.023),-.015+h*.032,.005,1.3,.4,.15);u.rotation.z=-c*.7}}}let s=xt(e,0,.6,4.49);q(s,2.35,.48,.07,t.brass,0,0,0,.06),q(s,2.21,.36,.02,t.aged,0,0,.044,.025),sn(s,"W I N T E R   S T A T I O N",2.1,.25,0,.012,.058,{bg:"#534b35",ink:"#ead9ab",fontScale:.43,border:!1,metalness:.55});for(let a of[-1.08,1.08])dt(s,.027,t.gold,a,0,.065,1,1,.3),q(s,.022,.005,.006,t.darkwood,a,0,.075);let r=xt(e,0,.55,-4.47,Math.PI);return sn(r,`THE LITTLE WORLD \xB7 001
WINTER / 1924`,1.35,.32,0,0,.02,{fontScale:.28,bg:"#2c231c",ink:"#bba274"}),e}function Dv(i,t){let e=xt(i);e.name="Sculpted snow & slate footpath",Gt(e,4.29,4.29,.19,t.snowShade,0,1.31,0,160);let n=160,s=36,r=[],a=[],o=[];for(let h=0;h<=s;h++)for(let u=0;u<=n;u++){let d=u/n*me,f=4.29*h/s,g=Math.cos(d)*f,x=Math.sin(d)*f;if(r.push(g,Le(g,x)-Math.pow(f/4.29,18)*.055,x),a.push(g/3,x/3),h<s&&u<n){let m=h*(n+1)+u;o.push(m,m+n+1,m+1,m+1,m+n+1,m+n+2)}}let l=new ae;l.setAttribute("position",new Yt(r,3)),l.setAttribute("uv",new Yt(a,2)),l.setIndex(o),l.computeVertexNormals(),jt(e,l,t.snow);for(let h=-.1;h<2.2;h+=.32)for(let u=-1.1;u<.1;u+=.32){let d=q(e,_t(.23,.28),.055,_t(.23,.29),t.stone,u+_t(-.02,.02),Le(u,h)+.012,h+_t(-.02,.02),.035);d.rotation.y=_t(-.09,.09),_t()>.48&&Oe(e,u+.05,d.position.y+.03,h+.07,.11,.025,.08,t.snow)}let c=new pn;c.absellipse(0,0,.047,.095,0,me,!1,0);for(let h=0;h<17;h++){let u=1.9-h*.143,d=-.44+Math.sin(h*.24)*.18+(h%2?.075:-.075),f=jt(e,new zr(c),t.snowShade,d,Le(d,u)+.008,u);f.rotation.x=-Math.PI/2,f.rotation.z=h%2?.14:-.14,q(e,.049,.004,.036,t.snowShade,d,Le(d,u)+.01,u+.077,.012)}for(let h=0;h<140;h++){let u=_t(0,me),d=_t(3.6,4.15),f=Math.cos(u)*d,g=Math.sin(u)*d;g>1.6||dt(e,.035,t.gravel,f,Le(f,g)-.005,g,_t(.7,1.8),_t(.3,.7),_t(.6,1.2))}return e}function eh(i,t,e,n,s,r=0,a=.57,o=1.09){let l=xt(i,e,n,s,r),c=ir(a+.11,o+.06);c.holes.push(rh(0,.03,a,o)),xi(l,c,.065,t.cream,0,-.03,-.045,.008);let h=ir(a,o);h.holes.push(rh(0,.035,a-.09,o-.08)),xi(l,h,.035,t.darkwood,0,0,.027,.005);let u=new zr(ir(a-.09,o-.08)),d=u.attributes.uv;for(let m=0;m<d.count;m++)d.setXY(m,d.getX(m)/(a-.09)+.5,d.getY(m)/(o-.08));let f=jt(l,u,t.windowGlass,0,.035,.068);f.castShadow=!1,f.renderOrder=1,q(l,.035,o-.07,.036,t.darkwood,0,o*.5,.083),q(l,a-.07,.035,.036,t.darkwood,0,o*.46,.084),q(l,a-.1,.026,.036,t.darkwood,0,o*.74,.084),q(l,a+.2,.07,.18,t.cream,0,-.045,.045,.015),Oe(l,0,-.005,.084,a*.65,.04,.1,t.snow);for(let m of[-1,1]){q(l,.13,o-.18,.04,t.engine,m*(a*.5+.16),o*.43,.007,.012);for(let p=0;p<7;p++)q(l,.105,.018,.025,t.black,m*(a*.5+.16),.12+p*.103,.032)}for(let m of[-1,1])for(let p=0;p<3;p++){let y=q(l,.026,o*.64,.023,t.cloth,m*(a*.42-p*.012),o*.46,-.09-p*.008,.01);y.rotation.z=m*.025}l.updateWorldMatrix(!0,!1);let g=l.localToWorld(At(0,.035+(o-.08)/2,.075)),x=At(0,0,1).transformDirection(l.matrixWorld);return i.userData.windows.push({center:g,normal:x,width:a-.09,height:o-.08}),l}function rh(i,t,e,n){let s=e/2,r=new Ws;return r.moveTo(i-s,t),r.lineTo(i-s,t+n-s),r.absarc(i,t+n-s,s,Math.PI,0,!0),r.lineTo(i+s,t),r.closePath(),r}function nh(i,t,e,n,s,r){let a=xt(i,0,0,n,s),o=new pn;o.moveTo(-e/2,.725),o.lineTo(e/2,.725),o.lineTo(e/2,2.355),o.lineTo(-e/2,2.355),o.closePath();for(let[l,c,h,u]of r)o.holes.push(rh(l,c,h,u));return xi(a,o,.105,t.plaster,0,0,-.105,0),a}function Lv(i,t){let e=xt(i);e.name="Visible waiting room \xB7 ticket desk, benches and shaded pendants",q(e,3.06,.045,1.96,t.oak,0,.755,0),q(e,3.04,.045,1.94,t.cream,0,2.235,0);for(let a=-1.45;a<1.5;a+=.16)q(e,.008,.004,1.92,t.darkwood,a,.781,0);q(e,1.05,.46,.3,t.engine,-.08,1.01,-.53,.025),q(e,1.12,.055,.37,t.oak,-.08,1.27,-.53,.016);for(let a of[-.38,.18])q(e,.44,.32,.018,t.darkwood,a,1.02,-.366,.012),q(e,.38,.26,.021,t.engine,a,1.02,-.352,.01);q(e,.48,.06,.19,t.brass,-.09,1.32,-.52,.01),q(e,.15,.13,.16,t.black,.21,1.35,-.52,.018);for(let a of[-1.05,1.05]){q(e,.28,.065,.91,t.oak,a,.99,0,.012),q(e,.045,.32,.91,t.engine,a+Math.sign(a)*.12,1.17,0,.012);for(let o of[-.31,.31])q(e,.04,.24,.04,t.darkwood,a,.87,o)}for(let a of[-.82,.82]){Ot(e,[a,2.22,-.08],[a,1.96,-.08],.01,t.brass);let o=jt(e,new bn(.14,24,12,0,me,0,Math.PI*.52),t.cream,a,1.94,-.08);o.scale.y=.57,te(e,.139,.009,t.brass,a,1.935,-.08).rotation.x=Math.PI/2,dt(e,.048,t.filament,a,1.9,-.08);let l=new $s(16762763,6,3,1.12,.65,2);l.position.set(a,1.85,-.08),l.target.position.set(a,.8,-.08),l.castShadow=!0,l.shadow.mapSize.set(512,512),l.shadow.camera.near=.04,l.shadow.camera.far=3,l.shadow.normalBias=.003,l.shadow.bias=-8e-5,l.shadow.autoUpdate=!1,l.shadow.needsUpdate=!0,e.add(l,l.target),i.userData.interiorLights.push(l)}let n=xt(e,-.51,1.61,-.935);q(n,.49,.5,.025,t.darkwood),sn(n,`MERRY
CHRISTMAS
NORD EXPRESS
1924`,.43,.44,0,0,.017,{bg:"#33423b",ink:"#f4d6a0",fontScale:.18});let s=xt(e,-.7,.78,-.57);q(s,.25,.2,.23,t.red,0,.1,0,.016),q(s,.035,.205,.24,t.gold,0,.1,0),q(s,.255,.205,.027,t.gold,0,.1,0),q(e,.72,1.25,.05,t.darkwood,0,1.405,.932,.012),q(e,.62,1.15,.018,t.engine,0,1.405,.899,.008);for(let a of[-.145,.145])for(let o of[1.13,1.68])q(e,.24,.45,.012,t.darkwood,a,o,.884,.008),q(e,.2,.4,.012,t.engine,a,o,.875,.006);q(e,.028,1.1,.02,t.brass,0,1.4,.866),q(e,.035,.14,.018,t.brass,-.23,1.35,.869,.006),dt(e,.024,t.gold,-.23,1.35,.845);let r=xt(e,0,2.087,.91,Math.PI);sn(r,"PLATFORM  1",.54,.105,0,0,0,{bg:"#33423b",ink:"#edd9af",fontScale:.43}),q(e,.28,.085,.045,t.oak,.53,1.9,.92,.009);for(let a of[.45,.53,.61])ue(e,[[a,1.88,.91],[a,1.83,.87],[a,1.85,.845]],.008,t.brass);q(e,.13,.36,.025,t.cloth,.53,1.65,.88,.015);for(let a of[-.947,.947])q(e,3.02,.1,.025,t.darkwood,0,.835,a);for(let a of[-1.505,1.505])q(e,.025,.1,1.89,t.darkwood,a,.835,0)}function Uv(i,t){let s=[],r=[],a=[];for(let l=0;l<=58;l++)for(let c=0;c<=42;c++){let h=(l/58-.5)*3.92,u=(c/42-.5)*2.76,d=Math.sin(c*.9)*.018+Math.sin(c*2.3)*.012;h+=Math.sign(h)*d*Math.pow(Math.abs(h)/1.96,12);let f=3.36-Math.abs(h)*.62+.115+Math.sin(h*7+u*3)*.017+Math.sin(h*15-u*8)*.009;f-=Math.pow(Math.abs(u)/1.38,30)*.055,s.push(h,f,u),r.push(h,u);let g=h>1.46+Math.sin(u*12)*.075&&u>.33||h<-1.62+Math.sin(u*9)*.07&&u<-.4;if(l<58&&c<42&&!g){let x=l*43+c;a.push(x,x+1,x+42+1,x+1,x+42+2,x+42+1)}}let o=new ae;o.setAttribute("position",new Yt(s,3)),o.setAttribute("uv",new Yt(r,2)),o.setIndex(a),o.computeVertexNormals(),jt(i,o,t.snow);for(let l of[-1,1]){for(let c=0;c<28;c++)Oe(i,l*1.93,2.25+_t(-.015,.025),(c/27-.5)*2.69,_t(.07,.12),_t(.055,.08),_t(.08,.12),t.snow);for(let c=0;c<13;c++){let h=_t(-1.3,1.3),u=Gt(i,0,.015,_t(.06,.22),t.snowShade,l*1.96,2.16-_t(0,.04),h,7)}}}function Nv(i,t){let e=xt(i,-.82,Jt+.08,-.88);e.name="Winter Station \xB7 individually modelled architecture",e.userData.windows=[],e.userData.interiorLights=[],q(e,3.43,.18,2.35,t.stone,0,0,0,.06),q(e,3.28,.66,2.15,t.brick,0,.4,0),nh(e,t,3.25,1.06,0,[[-1.03,.83,.57,1.06],[1.03,.83,.57,1.06]]),nh(e,t,3.25,-1.06,Math.PI,[[-1.02,.84,.51,1.03],[0,.84,.51,1.03],[1.02,.84,.51,1.03]]);for(let o of[-1,1]){let l=nh(e,t,2.12,0,o*Math.PI/2,[[o*.49,.84,.54,1.06],[-o*.47,.84,.54,1.06]]);l.position.x=o*1.625}Lv(e,t);for(let o of[-1.055,1.055])q(e,3.4,.09,.12,t.cream,0,.75,o,.015);for(let o of[-1.64,1.64])q(e,.12,.09,1.99,t.cream,o,.75,0,.015);q(e,3.36,.09,2.25,t.darkwood,0,2.26,0);for(let o of[-1.61,1.61])for(let l of[-1.07,1.07]){q(e,.11,2.28,.11,t.darkwood,o,1.22,l,.012);for(let c=0;c<5;c++)q(e,.22,.12,.22,t.cream,o,.13+c*.14,l,.015)}for(let o of[-1.077,1.077]){for(let l of[-.58,.58])q(e,.072,1.38,.055,t.darkwood,l,1.5,o);for(let l of[-1.08,1.08])Ot(e,[l-.4,2.14,o],[l+.4,1.63,o],.028,t.darkwood),Ot(e,[l+.4,2.14,o],[l-.4,1.63,o],.028,t.darkwood);q(e,3.2,.067,.07,t.darkwood,0,1.92,o)}let n=new pn;n.moveTo(-1.69,2.25),n.lineTo(1.69,2.25),n.lineTo(0,3.3),n.closePath(),xi(e,n,2.14,t.plaster,0,0,-1.07,0);for(let o of[-1.088,1.088]){Ot(e,[-1.73,2.25,o],[0,3.34,o],.055,t.darkwood),Ot(e,[0,3.34,o],[1.73,2.25,o],.055,t.darkwood),q(e,.08,.86,.075,t.darkwood,0,2.77,o);for(let l of[-.7,.7])Ot(e,[0,2.35,o],[l,2.86,o],.035,t.darkwood)}for(let o of[-1,1]){let l=q(e,2.29,.12,2.7,t.roof,o*.96,2.76,0,.02);l.rotation.z=-o*.554;for(let c=-1.28;c<=1.3;c+=.18){let h=Ot(e,[0,3.35,c],[o*1.97,2.13,c],.012,t.black)}}Uv(e,t);for(let o of[-1.4,1.4])Ot(e,[-1.99,2.17,o],[0,3.4,o],.043,t.darkwood),Ot(e,[0,3.4,o],[1.99,2.17,o],.043,t.darkwood);for(let o of[-1.98,1.98]){Ot(e,[o,2.13,-1.4],[o,2.13,1.4],.052,t.aged),ue(e,[[o,2.12,-1.15],[o+.06,2.03,-1.15],[o+.07,.2,-1.15],[o+.14,.14,-1.15]],.032,t.aged);for(let l of[.5,1.3,1.9])te(e,.042,.009,t.brass,o+.065,l,-1.15).rotation.x=Math.PI/2}let s=xt(e,0,.12,1.09);xi(s,ir(.78,1.88),.07,t.cream,0,0,0),xi(s,ir(.65,1.79),.03,t.engine,0,.035,.08);for(let o of[-.16,.16])q(s,.23,.55,.03,t.darkwood,o,.37,.135,.016),q(s,.2,.48,.025,t.engine,o,.37,.154,.015),q(s,.23,.65,.025,t.warm,o,1.03,.14,.025);q(s,.035,1.51,.03,t.brass,0,.87,.17),q(s,.6,.045,.04,t.darkwood,0,1.4,.17),dt(s,.032,t.gold,.22,.73,.2),q(s,.04,.14,.018,t.brass,.22,.75,.177,.01);for(let o=0;o<3;o++)q(e,1.15+o*.21,.085,.25,t.stone,0,-.02-o*.07,1.2+o*.2,.025),Oe(e,.33,-.01-o*.07,1.2+o*.2,.18,.035,.13,t.snow);for(let o of[-1.03,1.03])eh(e,t,o,.83,1.09,0,.56,1.05);for(let o of[-1,1])for(let l of[-.49,.47])eh(e,t,o*1.64,.84,l,o*Math.PI/2,.53,1.05);for(let o of[-1.02,0,1.02])eh(e,t,o,.84,-1.1,Math.PI,.5,1.02);sn(e,"W I N T E R  S T A T I O N",2.1,.29,0,2.055,1.19,{bg:"#23403d",ink:"#f1d9a4",fontScale:.43}),sn(e,"EST. 1924",.73,.18,0,2.74,1.12,{bg:"#c3b69a",ink:"#493d2e",fontScale:.58,border:!1}),q(e,3.58,.08,.92,t.roof,0,1.86,1.61,.025),q(e,3.61,.085,.95,t.snow,0,1.94,1.61,.055);for(let o of[-1.53,1.53]){Ot(e,[o,.05,2.01],[o,1.83,2.01],.038,t.engine),Gt(e,.075,.1,.12,t.black,o,.08,2.01);for(let l of[-1,1])ue(e,[[o,1.25,2.01],[o+l*.3,1.57,2.01],[o+l*.28,1.74,2.01],[o+l*.12,1.69,2.01]],.018,t.brass);Ot(e,[o,1.4,2.01],[o,1.85,1.39],.022,t.iron)}for(let o=-1.75;o<1.75;o+=.11){let l=te(e,.055,.011,t.brass,o,1.81,2.08,Math.PI);l.rotation.z=Math.PI}q(e,3.62,.1,.06,t.engine,0,1.81,2.08),q(e,.36,.9,.38,t.brick,-.88,3.12,-.55,.02);for(let o of[3.32,3.46,3.57])q(e,.42,.055,.44,t.cream,-.88,o,-.55,.015);q(e,.29,.015,.29,t.black,-.88,3.61,-.55);for(let o of[-1.05,-.71])Oe(e,o,3.62,-.55,.08,.04,.24,t.snow);let r=xt(e,1.7,1.25,0,Math.PI/2);q(r,.42,.62,.04,t.darkwood,0,0,0,.02),sn(r,`DEPARTURES
18:40 \xB7 NORD EXPRESS
19:15 \xB7 WINTER LOCAL
20:05 \xB7 LAST TRAIN`,.36,.55,0,0,.025,{bg:"#d1c8ac",ink:"#364443",fontScale:.12});let a=xt(e,-1.69,1.3,-.1,-Math.PI/2);return sn(a,`VISIT
THE ALPS
1924`,.4,.65,0,0,.015,{bg:"#506c71",ink:"#f3dfb8",fontScale:.22}),e}function pd(i=0,t=!1){let s=[],r=[],a=[];for(let l=0;l<=22;l++)for(let c=0;c<=8;c++){let h=l/22,u=c/8*2-1,d=t?1:l%2?.79:1.1,f=(t?.205:.25)*Math.pow(1-h,.73)*Math.pow(Math.sin(Math.PI*(h*.94+.03)),.22)*d,g=t?.1+h*.86:h,m=(t?.145:.035)+Math.sqrt(Math.max(0,1-u*u))*(t?.065:.055)-h*h*.14+Math.sin(h*19+i+u*3)*(t?.008:.012)-Math.pow(Math.abs(u),8)*(t?.035:.01);if(s.push(g,m,u*f),r.push(h,c/8),l<22&&c<8){let p=l*9+c;a.push(p,p+1,p+8+1,p+1,p+8+2,p+8+1)}}let o=new ae;return o.setAttribute("position",new Yt(s,3)),o.setAttribute("uv",new Yt(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function oh(i,t,e=[[-3.15,-1.48,4.35],[2.58,-1.65,4.55],[.85,-3.2,3.9],[-1.75,-3.05,3.55],[3.3,0,2.6],[-3.5,.65,2.1],[2.3,-2.95,2.8]]){let n=Array.from({length:4},(r,a)=>pd(a)),s=Array.from({length:4},(r,a)=>pd(a,!0));for(let[r,a,o]of e){let l=xt(i,r,Le(r,a),a,_t(0,me));l.name="Hand-shaped snow-laden fir",Gt(l,.042,.12,o*.9,t.trunk,0,o*.45,0,10);let c=11;for(let h=0;h<c;h++){let u=.2+h*o*.084,d=(1-h/c)*o*.275+.018,f=7+h%2;for(let g=0;g<f;g++){let x=g/f*me+h*1.83+_t(-.16,.16),m=d*_t(.78,1.15),p=u+_t(-.11,.11)*(o/3),y=[Math.cos(x)*m,p-.07,Math.sin(x)*m];Ot(l,[0,p+.06,0],y,.022,t.trunk,.006,6);let _=xt(l,0,p,0,-x),v=(g+h)%4;jt(_,n[v],h%2?t.pine:t.pineLight).scale.set(m,o/3,m);for(let E of[-1,1]){let S=jt(_,n[(v+1)%4],t.pine,m*.34,-.015,E*m*.07);S.rotation.y=E*.6,S.scale.set(m*.59,o/4,m*.55)}if(_t()>.08){let E=jt(_,s[v],t.snow);E.scale.set(m,o/3,m*_t(.76,1.02)),E.rotation.x=_t(-.07,.07)}for(let E=0;E<6;E++){let S=.34+E*.1;for(let w of[-1,1])Ot(_,[S*m,.018,w*m*.07],[(S+.14)*m,.045,w*m*(.13-.08*S)],.006,t.pineLight,.0015,4)}}}Gt(l,0,.12,o*.14,t.pine,0,o*.96,0,11),Gt(l,0,.07,o*.095,t.snow,0,o*.988,0,11);for(let h=0;h<6;h++){let u=h/6*me;Oe(l,Math.cos(u)*.19,.035,Math.sin(u)*.19,.24,.075,.23,t.snow)}}}function ih(i,t,e,n,s,r){let a=xt(i,e,Le(e,n),n);Gt(a,.11,.17,.13,t.black,0,.03,0),Gt(a,.045,.065,s-.5,t.iron,0,(s-.5)/2,0,16);for(let c of[.22,s-.5])Gt(a,.073,.073,.055,t.brass,0,c,0,20);let o=s-.26;q(a,.3,.42,.3,t.lampGlass,0,o,0,.02),dt(a,.037,t.filament,0,o-.02,0),Ot(a,[0,o+.2,0],[0,o+.02,0],.009,t.aged);for(let c of[-1,1])for(let h of[-1,1])Ot(a,[c*.16,o-.23,h*.16],[c*.12,o+.23,h*.12],.016,t.iron);Gt(a,.1,.28,.19,t.black,0,o+.3,0,4).rotation.y=Math.PI/4,Gt(a,.08,.27,.11,t.snow,0,o+.39,0,4).rotation.y=Math.PI/4,dt(a,.042,t.brass,0,o+.49,0);let l=new Qn(16759917,7,3.8,2);return l.position.set(e,Le(e,n)+o,n),i.add(l),r.push(l),At(e,Le(e,n)+o,n)}function md(i,t,e,n,s){let r=xt(i,e,Le(e,n),n,s);for(let a of[-1,1]){for(let o of[0,.35])Ot(r,[a*.47,.02,o],[a*.47,.42,o-.02],.025,t.iron);ue(r,[[a*.47,.2,.33],[a*.47,.37,.32],[a*.47,.83,.47]],.022,t.iron),ue(r,[[a*.47,.4,0],[a*.47,.58,-.02],[a*.47,.58,.26]],.021,t.iron)}for(let a=0;a<4;a++)q(r,1.12,.055,.075,t.oak,0,.43,a*.095,.013),q(r,1.12,.075,.045,t.oak,0,.58+a*.095,.41+a*.018,.011);for(let a=0;a<7;a++)Oe(r,(a/6-.5)*1.04,.93,.48,.11,.04,.07,t.snow);return Oe(r,-.32,.48,.17,.23,.04,.18,t.snow),r}function sh(i,t,e,n,s,r=0){let a=xt(i,e,Le(e,n)+s*.25,n,r);q(a,s,s*.5,s*.33,t.leather,0,0,0,.04);for(let o of[-.31,.31])q(a,.035,s*.52,s*.35,t.oak,o*s,0,0,.008),q(a,.055,.08,.016,t.brass,o*s,.01,s*.18,.01);ue(a,[[-s*.13,s*.26,0],[-s*.13,s*.36,0],[s*.13,s*.36,0],[s*.13,s*.26,0]],.015,t.darkwood);for(let o of[-1,1])for(let l of[-1,1])dt(a,.025,t.brass,o*s*.43,l*s*.19,s*.17,1,1,.3);return sn(a,"NORD",s*.24,s*.13,.1*s,.08*s,s*.17+.005,{bg:"#d2bc87",ink:"#5b4132",fontScale:.5,border:!1}),a}function Fv(i,t){let e=[],n=[],s=[];n.push(ih(i,t,-2.74,1.03,2.52,e),ih(i,t,2.8,.87,2.58,e),ih(i,t,.4,-2.5,2.35,e)),md(i,t,-2.64,-.25,.28),md(i,t,1.9,-.8,-.28),sh(i,t,-2.15,.19,.46,.15),sh(i,t,-2.04,.45,.35,-.2),sh(i,t,1.46,-.15,.4,.1);let r=xt(i,.92,Jt,.18);Gt(r,.11,.19,.16,t.iron,0,0,0),Gt(r,.035,.065,2.39,t.engine,0,1.17,0);for(let d of[.25,1.9,2.32])Gt(r,.068,.068,.06,t.brass,0,d,0);ue(r,[[0,2.2,0],[.02,2.57,0],[.25,2.68,0],[.4,2.57,0]],.033,t.iron);let a=xt(r,.4,2.48,0);Gt(a,.36,.36,.16,t.brass).rotation.x=Math.PI/2;for(let d of[-1,1]){let f=xt(a,0,0,d*.09,d<0?Math.PI:0),g=Dn(512,512,(p,y,_)=>{p.fillStyle="#e6debf",p.fillRect(0,0,y,_),p.strokeStyle="#48504a",p.lineWidth=5,p.beginPath(),p.arc(y/2,_/2,230,0,me),p.stroke();for(let v=0;v<60;v++)p.save(),p.translate(y/2,_/2),p.rotate(v/60*me),p.lineWidth=v%5?2:5,p.beginPath(),p.moveTo(0,-220),p.lineTo(0,v%5?-209:-196),p.stroke(),p.restore();p.fillStyle="#283936",p.textAlign="center",p.textBaseline="middle",p.font="34px Georgia",["XII","III","VI","IX"].forEach((v,R)=>{let E=R/4*me;p.fillText(v,y/2+Math.sin(E)*164,_/2-Math.cos(E)*164)}),p.font="15px Georgia",p.fillText("WINTER STATION",256,325)}),x=new Xt({map:g,roughness:.6});jt(f,new Ko(.319,64),x,0,0,.003);for(let[p,y,_]of[[.21,Math.PI*.4,.018],[.15,Math.PI*1.12,.027]]){let v=q(f,_,p,.012,t.black,Math.sin(y)*p*.4,Math.cos(y)*p*.4,.018,.005);v.rotation.z=-y}let m=xt(f,0,0,.031);Ot(m,[0,-.055,0],[0,.25,0],.004,t.red,void 0,5),m.traverse(p=>{p.isMesh&&(p.userData.dynamic=!0)}),s.push(m),dt(f,.025,t.brass,0,0,.035,1,1,.4)}Oe(a,0,.33,0,.33,.06,.14,t.snow);let o=xt(i,-2.9,Jt,.03,.3);for(let d of[-.44,.44])Gt(o,.025,.035,1.4,t.engine,d,.7,0),dt(o,.045,t.brass,d,1.43,0);let l=xt(o,0,1.39,0);q(l,1.03,.43,.065,t.engine,0,-.25,0,.025),sn(l,`WINTER STATION
PLATFORM 01`,.96,.36,0,-.25,.036,{fontScale:.29}),Oe(l,0,0,0,.53,.045,.07,t.snow),l.traverse(d=>{d.isMesh&&(d.userData.dynamic=!0)});for(let d=-2.6;d<2.1;d+=.24)Gt(i,.012,.014,.59,t.iron,d,Jt+.28,-2.27,6),dt(i,.026,t.brass,d,Jt+.59,-2.27);for(let d of[.15,.48])Ot(i,[-2.65,Jt+d,-2.27],[2.11,Jt+d,-2.27],.015,t.iron);let c=xt(i,3.24,Jt,-.28,-.3);q(c,.25,.1,.25,t.stone,0,.02,0,.03),Gt(c,.036,.055,2.18,t.iron,0,1.1,0),q(c,.29,.56,.18,t.black,0,1.89,.07,.12);for(let[d,f]of[[1.77,t.signalRed],[2,t.signalGreen]]){Gt(c,.072,.072,.06,f,0,d,.19,24).rotation.x=Math.PI/2;let g=te(c,.089,.025,t.black,0,d,.22,Math.PI)}q(c,.8,.1,.065,t.cream,-.31,2.18,0,.02),q(c,.23,.1,.075,t.red,-.57,2.18,.006);for(let d=.2;d<2.1;d+=.14)Ot(c,[.12,d,-.13],[.25,d,-.13],.009,t.iron);for(let d of[.12,.25])Ot(c,[d,.1,-.13],[d,2.13,-.13],.012,t.iron);let h=xt(i,-.8,Jt,-2.7,.12);q(h,.7,.07,.48,t.oak,0,.22,0,.018);for(let d of[-.27,.27])for(let f of[-.18,.18])Gt(h,.075,.075,.035,t.black,d,.1,f,18).rotation.z=Math.PI/2;ue(h,[[-.3,.22,-.2],[-.3,.74,-.2],[.3,.74,-.2],[.3,.22,-.2]],.021,t.iron),q(h,.43,.39,.36,t.oak,.02,.46,0,.015);for(let d of[.35,.57])q(h,.45,.04,.38,t.aged,.02,d,0);sn(h,"FRAGILE",.26,.11,.02,.47,.187,{bg:"#9d8662",ink:"#332c23",fontScale:.5,border:!1}),Oe(h,0,.67,.02,.25,.04,.2,t.snow);let u=xt(i,-.82,Jt+1.79,.278);te(u,.14,.035,t.pine,0,0,0);for(let d=0;d<15;d++){let f=d/15*me;dt(u,.023,t.red,Math.sin(f)*.14,Math.cos(f)*.14,.028)}return{lights:e,glows:n,hangingSign:l,secondHands:s}}function gd(i,t,e=t){Iv(i,t),Dv(i,t);let n=Nv(i,t);return oh(i,e),{...Fv(i,t),windows:n.userData.windows,interiorLights:n.userData.interiorLights}}var is=3.22,lh=-.16;function ei(i,t=is){return At(Math.sin(i)*t,Jt+.06,Math.cos(i)*t+lh)}function Ov(i){let t=[];for(let e=0;e<=180;e++){let n=-1.85+e/180*3.98;t.push(At(Math.sin(n)*i,Jt+.065,Math.cos(n)*i+lh))}return new Ji(t)}function zv(i,t){let e=xt(i);e.name="Curved rails, sleepers & snow drifts";for(let n=0;n<82;n++){let s=-1.85+n/81*3.98,r=ei(s),a=xt(e,r.x,Jt+.005,r.z,s);q(a,.105,.08,.91,t.darkwood,0,0,0,.012);for(let o of[-.245,.245]){q(a,.12,.04,.12,t.iron,0,.055,o,.008);for(let l of[-.043,.043])dt(a,.014,t.steel,l,.079,o)}if(n%4!==0){let o=_t()>.5?.38:-.38;Oe(a,0,.08,o,.08,.035,.16,t.snow)}for(let o=0;o<4;o++){let l=_t(-.48,.48),c=_t(-.06,.06);dt(a,.035,t.gravel,c,-.01,l,1,.55,_t(.7,1.4))}}for(let n of[is-.25,is+.25]){let s=Ov(n);jt(e,new ji(s,240,.032,8,!1),t.steel);let r=jt(e,new ji(s,240,.046,8,!1),t.iron);r.position.y=-.045;for(let a=0;a<24;a++){let o=-1.82+a/23*3.9;if(o>-.58&&o<1.03)continue;let l=ei(o,n),c=Oe(e,l.x,Jt+.11,l.z,.14,.025,.04,t.snow);c.rotation.y=o}}for(let n=-.95;n<-.05;n+=.115){let s=Math.sqrt(is*is-n*n)+lh;q(e,.105,.04,.82,t.oak,n,Jt+.1,s,.012);for(let r of[-1,1])dt(e,.008,t.iron,n,Jt+.124,s+r*.31)}for(let n of[-1.82,2.1]){let s=ei(n),r=xt(e,s.x,Jt+.08,s.z,n);for(let a of[-.28,.28])Ot(r,[-.12,0,a],[.06,.39,a],.025,t.iron),Ot(r,[.23,0,a],[.06,.39,a],.025,t.iron);q(r,.1,.11,.8,t.red,.05,.4,0,.012),Oe(r,.05,.48,0,.11,.035,.4,t.snow)}return e}function ah(i,t,e,n,s,r,a=15){for(let o=0;o<a;o++)dt(i,.013,t.brass,e+(n-e)*o/(a-1),s,r,1,1,.5)}function xd(i,t,e,n,s,r){let a=xt(i,e,n,s);Gt(a,r,r,.09,t.black,0,0,0,40).rotation.x=Math.PI/2;let o=te(a,r-.025,.023,t.steel,0,0,s>0?.054:-.054);Gt(a,r*.72,r*.72,.1,t.engine,0,0,0,32).rotation.x=Math.PI/2;for(let l=0;l<12;l++){let c=l/12*me;Ot(a,[Math.cos(c)*r*.18,Math.sin(c)*r*.18,s>0?.06:-.06],[Math.cos(c)*r*.77,Math.sin(c)*r*.77,s>0?.06:-.06],.017,t.brass,.014,6)}return Gt(a,r*.19,r*.19,.15,t.brass,0,0,0,24).rotation.x=Math.PI/2,a}function vd(i,t,e=i){zv(i,t);let n=[],s=[],r=.65,a=ei(r),o=xt(e,a.x,Jt+.17,a.z,r);o.name="No. 24 \xB7 brass-riveted steam locomotive",o.userData.interaction="train",q(o,2.5,.15,.92,t.black,-.03,.51,0,.025),q(o,2.29,.06,.94,t.red,-.04,.61,0,.018);for(let S of[-.53,.53]){for(let M of[-.65,-.01,.63]){let b=xd(o,t,M,.31,S,.315);ge(b),b.traverse(C=>{C.isMesh&&(C.userData.dynamic=!0)}),n.push({g:b,r:.315})}let w=xt(o,0,.24,S*1.14);Ot(w,[-.66,0,0],[.65,0,0],.025,t.steel);for(let M of[-.65,-.01,.63])Gt(w,.045,.045,.04,t.brass,M,0,S*.04,16).rotation.x=Math.PI/2;ge(w),w.traverse(M=>{M.isMesh&&(M.userData.dynamic=!0)}),s.push(w);for(let M of[-.65,-.01,.63])for(let b=0;b<4;b++)q(o,.28,.014,.024,t.iron,M,.54+b*.02,S);q(o,.33,.21,.18,t.black,.91,.35,S*.91,.05),Ot(o,[.6,.26,S],[1.01,.36,S],.025,t.steel),q(o,2.21,.045,.12,t.iron,-.01,.69,S*.94,.008),ah(o,t,-1.03,1,.61,S*.95,20)}Gt(o,.376,.376,1.57,t.engine,.23,1.04,0,64).rotation.z=-Math.PI/2;for(let S of[-.49,-.06,.46,.99])te(o,.38,.025,t.brass,S,1.04,0).rotation.y=Math.PI/2;Gt(o,.395,.395,.14,t.black,1.03,1.04,0,64).rotation.z=Math.PI/2,Gt(o,.29,.29,.025,t.iron,1.115,1.04,0,48).rotation.z=Math.PI/2,te(o,.285,.015,t.brass,1.135,1.04,0).rotation.y=Math.PI/2;for(let S=0;S<16;S++){let w=S/16*me;dt(o,.018,t.brass,1.145,1.04+Math.cos(w)*.33,Math.sin(w)*.33)}sn(o,"24",.22,.22,1.16,1.03,0,{bg:"#1d302c",ink:"#e3c27e",fontScale:.7,border:!1}).rotation.y=Math.PI/2,Ot(o,[1.17,.94,-.12],[1.17,1.14,.12],.017,t.brass),Ot(o,[1.17,1.14,-.12],[1.17,.94,.12],.017,t.brass),Gt(o,.18,.24,.3,t.black,.37,1.44,0,32),dt(o,.18,t.brass,.37,1.59,0,1,.43,1),Gt(o,.1,.15,.24,t.engine,-.19,1.43,0),dt(o,.11,t.brass,-.19,1.56,0,1,.4,1);let l=[[0,0],[.13,0],[.12,.1],[.105,.32],[.19,.46],[.2,.5],[.145,.51],[.13,.45],[.08,.31],[.08,.12],[0,.12]].map(S=>new Q(...S));jt(o,new Li(l,40),t.black,.78,1.34,0),te(o,.19,.018,t.brass,.78,1.83,0).rotation.x=Math.PI/2;for(let S of[-.34,.34]){ue(o,[[-.63,1.27,S],[.12,1.3,S],[.64,1.25,S],[.87,.9,S],[.99,.55,S]],.023,t.brass),Ot(o,[-.47,1.43,S],[.92,1.43,S],.014,t.steel);for(let w of[-.4,.22,.8])Ot(o,[w,1.27,S],[w,1.43,S],.013,t.iron)}q(o,.79,.79,.85,t.engine,-.92,1.1,0,.025);for(let S of[-.438,.438]){q(o,.65,.43,.035,t.darkwood,-.92,1.25,S,.035),q(o,.56,.34,.038,t.warm,-.92,1.28,S*1.05,.035),q(o,.024,.36,.04,t.brass,-.91,1.28,S*1.11),q(o,.66,.06,.05,t.brass,-.92,.89,S*1.04,.012),sn(o,"NORD \xB7 24",.55,.15,-.92,.79,S*1.06,{bg:"#1d3936",ink:"#d2b97f",fontScale:.49,border:!1}).rotation.y=S<0?Math.PI:0,ah(o,t,-1.27,-.57,.72,S,8);for(let w=0;w<3;w++)q(o,.32,.04,.18,t.iron,-1.13,.39+w*.11,S*1.13,.01);ue(o,[[-1.3,.7,S*1.1],[-1.3,1.46,S*1.1]],.018,t.brass)}for(let S of[-.21,.21])q(o,.028,.33,.3,t.warm,-.512,1.27,S,.03),q(o,.03,.02,.35,t.brass,-.49,1.11,S);for(let S=0;S<11;S++)Oe(o,-1.4+S*.091,1.83+Math.sin(S*.8)*.007,0,.12,.055,.44,t.snow);q(o,.87,.07,1.08,t.black,-.94,1.68,0,.035),Oe(o,-.93,1.73,0,.48,.09,.49,t.snow),Gt(o,.12,.12,.15,t.brass,1.14,1.41,0).rotation.z=-Math.PI/2,Gt(o,.085,.085,.01,t.ember,1.223,1.41,0,32).rotation.z=-Math.PI/2,q(o,.16,.16,.97,t.red,1.28,.48,0,.02);for(let S of[-.33,.33])Gt(o,.06,.06,.21,t.iron,1.39,.49,S,20).rotation.z=Math.PI/2,Gt(o,.105,.105,.035,t.black,1.51,.49,S,24).rotation.z=Math.PI/2;for(let S=-.42;S<=.43;S+=.11)Ot(o,[1.32,.41,S*.68],[1.52,.15,S],.019,t.iron);Ot(o,[1.52,.15,-.45],[1.52,.15,.45],.022,t.iron),Gt(o,.08,.13,.12,t.brass,.02,1.53,.24,24),Ot(o,[-.06,1.65,.24],[.1,1.65,.24],.015,t.brass),ue(o,[[1.34,.46,0],[1.6,.46,0],[1.64,.36,0]],.026,t.iron);for(let S=0;S<10;S++)Oe(o,-.45+S*.145,1.405,_t(-.025,.025),.12,.035,.17,t.snow);let c=At(),h=new Qn(16761720,3.4,2.4,2);h.position.set(1.24,1.41,0),o.add(h);let u=-.245,d=ei(u),f=xt(e,d.x,Jt+.17,d.z,u);f.name="Nord Express \xB7 illuminated passenger carriage",f.userData.interaction="train",q(f,1.94,.13,.92,t.black,0,.42,0,.02),q(f,1.78,1.08,.86,t.red,0,1,0,.03),q(f,1.82,.13,.91,t.engine,0,.64,0,.02);for(let S of[-.46,.46]){for(let w of[-.67,.67]){let M=xd(f,t,w,.24,S,.22);ge(M),M.traverse(b=>{b.isMesh&&(b.userData.dynamic=!0)}),n.push({g:M,r:.22})}for(let w of[-.59,-.2,.2,.59])q(f,.3,.49,.027,t.darkwood,w,1.16,S,.022),q(f,.244,.415,.03,t.warm,w,1.16,S*1.055,.016),q(f,.021,.42,.035,t.brass,w,1.16,S*1.1),q(f,.32,.025,.045,t.brass,w,.93,S*1.06);for(let w=-.84;w<.89;w+=.12)q(f,.009,.3,.01,t.darkwood,w,.8,S);q(f,1.76,.028,.035,t.brass,0,1.46,S),ah(f,t,-.83,.83,.58,S,18),sn(f,"N O R D   E X P R E S S",1.4,.13,0,.72,S*1.07,{bg:"#66392e",ink:"#ddc793",fontScale:.47,border:!1}).rotation.y=S<0?Math.PI:0}for(let S of[-.92,.92]){q(f,.025,.75,.34,t.engine,S,1.02,0,.025),q(f,.03,.4,.26,t.warm,S*1.02,1.15,0,.02);for(let w of[-.36,.36]){Ot(f,[S,.47,w],[S,1.47,w],.015,t.brass);for(let M=0;M<2;M++)q(f,.16,.04,.4,t.iron,S,.32+M*.13,w*.5,.01)}}let g=[],x=[],m=[];for(let S=0;S<=20;S++)for(let w=0;w<=36;w++){let M=(S/20-.5)*2.07,b=(w/36-.5)*1.05,C=1.51+Math.sqrt(Math.max(0,.66*.66-b*b))*.43;if(g.push(M,C,b),m.push(S/20,w/36),S<20&&w<36){let U=S*37+w;x.push(U,U+1,U+37,U+1,U+38,U+37)}}let p=new ae;p.setAttribute("position",new Yt(g,3)),p.setAttribute("uv",new Yt(m,2)),p.setIndex(x),p.computeVertexNormals(),jt(f,p,t.snow);for(let S=0;S<15;S++)Oe(f,(S/14-.5)*1.99,1.68,.48,.12,.035,.08,t.snow);for(let S of[-.6,0,.6])Gt(f,.055,.065,.07,t.black,S,1.85,0),Oe(f,S,1.9,0,.075,.03,.07,t.snow);let y=ei(.225),_=q(e,.34,.1,.12,t.iron,y.x,Jt+.59,y.z);_.userData.dynamic=!0,ge(o),ge(f);let v=0,R={engine:o,coach:f,wheels:n,rods:s,head:h,headPos:c,steamOrigin:At(),pressureOrigin:At(),santaSeat:At(),headDirection:At(),coachAngle:u,triangles:0,update:E,diagnostics:()=>({offsetRadians:v,distance:v*is,wheelAngle:n[0].g.rotation.z})};function E(S=0){v=S;for(let[b,C]of[[o,r],[f,u]]){let U=ei(C+v);b.position.set(U.x,Jt+.17,U.z),b.rotation.y=C+v,b.updateMatrix()}let w=v*is;for(let b of n)b.g.rotation.z=-w/b.r;for(let b of s)b.position.x=-Math.sin(w/.315)*.07,b.position.y=.31-Math.cos(w/.315)*.07;let M=ei(.225+v);_.position.set(M.x,Jt+.59,M.z),_.rotation.y=.225+v,R.headPos.set(1.23,1.41,0).applyMatrix4(o.matrix),R.steamOrigin.set(.78,1.91,0).applyMatrix4(o.matrix),R.pressureOrigin.set(.02,1.67,.24).applyMatrix4(o.matrix),R.santaSeat.set(-.16,1.81,.23).applyMatrix4(f.matrix),R.coachAngle=u+v,R.headDirection.set(Math.cos(r+v),0,-Math.sin(r+v))}for(let S of[o,f])S.traverse(w=>{w.isMesh&&(R.triangles+=(w.geometry.index?.count||w.geometry.attributes.position.count)/3)});return E(0),R}var qe={center:At(0,4.15,0),radius:5.24,floor:1.38};function _d(i,t){let e=new qs({color:16120831,metalness:0,roughness:.035,transmission:1,thickness:.065,ior:1.46,transparent:!0,opacity:.19,envMapIntensity:.62,clearcoat:1,clearcoatRoughness:.04,side:Hn,depthWrite:!1}),n=new bn(qe.radius,160,112,0,Math.PI*2,0,Math.acos((1.26-qe.center.y)/qe.radius)),s=jt(i,n,e,0,qe.center.y,0);s.name="Thin optical-glass shell \xB7 65 mm equivalent",s.castShadow=!1,s.receiveShadow=!1,s.renderOrder=3;let r=new le({transparent:!0,depthWrite:!1,side:Hn,uniforms:{uColor:{value:new Ft(11459044)}},vertexShader:"varying vec3 vN;varying vec3 vEye;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vEye=-p.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 uColor;varying vec3 vN;varying vec3 vEye;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vEye))),4.5);gl_FragColor=vec4(uColor,f*.16);}"}),a=jt(i,n,r,0,qe.center.y,0);a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=4;let o=te(i,4.367,.043,t.gold,0,1.26,0);o.rotation.x=Math.PI/2;let l=te(i,4.325,.018,t.snowShade,0,1.31,0);return l.rotation.x=Math.PI/2,{shell:s,rim:a,material:e}}function yd(i,t=2600){let e=qe.radius-.12,n=qe.center,s=new Float32Array(t*3),r=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t);function h(R,E=!1){let S,w,M;do S=_t(-4.9,4.9),w=E?_t(4.7,8.95):_t(1.6,9.1),M=_t(-4.9,4.9);while(S*S+(w-n.y)**2+M*M>(e-.1)**2);s.set([S,w,M],R*3),r.set([_t(-.035,.035),_t(-.18,-.07),_t(-.035,.035)],R*3),c[R]=0}for(let R=0;R<t;R++)h(R),a[R]=_t(.04,.093),o[R]=_t(.6,.98),l[R]=_t(0,Math.PI*2);let u=new ae;u.setAttribute("position",new ye(s,3).setUsage(ua)),u.setAttribute("aSize",new ye(a,1)),u.setAttribute("aAlpha",new ye(o,1)),u.setAttribute("aPhase",new ye(l,1));let d=new le({transparent:!0,depthWrite:!1,uniforms:{uDpr:{value:1},uBrightness:{value:.9},uBurst:{value:0},uTime:{value:0}},vertexShader:"attribute float aSize;attribute float aAlpha;attribute float aPhase;uniform float uDpr;uniform float uBurst;uniform float uTime;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vSpin=aPhase+uTime*.3;vShape=step(.076,aSize);gl_PointSize=clamp(aSize*1150.*uDpr*(1.+uBurst*.55)/-mv.z,1.9*uDpr,8.*uDpr);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uBrightness;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;if(r>1.)discard;float soft=smoothstep(1.,.08,r);float arm=pow(abs(cos((atan(p.y,p.x)+vSpin)*3.)),9.)*smoothstep(1.,.45,r);float crystal=max(smoothstep(.52,.0,r),arm*.85);float a=mix(soft,crystal,vShape*.65);gl_FragColor=vec4(vec3(.9,.97,1.)*uBrightness,a*vAlpha);}"}),f=new Cn(u,d);f.renderOrder=6,f.frustumCulled=!1,f.name="2600 individually simulated, sphere-constrained snow crystals",i.add(f);let g=0,x=0,m=0,p=(R,E,S,w)=>{let M=Math.max(Le(R,S)+.018,n.y-Math.sqrt(Math.max(0,e*e-R*R-S*S))+.018),b=R+.82,C=S+.88;if(Math.abs(b)<1.98&&Math.abs(C)<1.39){let U=Jt+.08+3.47-Math.abs(b)*.62;if(E<U&&E>Jt+.12&&(w>=U-.06||Math.abs(b)<1.72&&Math.abs(C)<1.1))return U+.022}Math.abs(b)<1.84&&S>.17&&S<1.22&&E<Jt+2.1&&w>Jt+1.97&&(M=Math.max(M,Jt+2.1));for(let[U,D,N]of[[.65,1.46,Jt+2.01],[-.245,1.08,Jt+2.02]]){let B=U+m,O=ei(B),et=R-O.x,H=S-O.z,G=et*Math.cos(B)-H*Math.sin(B),$=et*Math.sin(B)+H*Math.cos(B);Math.abs(G)<D&&Math.abs($)<.51&&w>N-.1&&E<N&&(M=Math.max(M,N))}return M};function y(){g=1,x++;for(let R=0;R<t;R++){let E=R*3,S=s[E],w=s[E+2];r[E]=_t(-1.35,1.35)-w*.45,r[E+1]=_t(1.05,3.4),r[E+2]=_t(-1.35,1.35)+S*.45,c[R]=0}}function _(R,E,S=0){g*=Math.exp(-R/3.5),d.uniforms.uBurst.value=g,d.uniforms.uTime.value=E;for(let w=0;w<t;w++){let M=w*3;if(c[w]>0)if(c[w]+=R,w<650&&c[w]>3+l[w])h(w,!0);else continue;let b=s[M],C=s[M+1],U=s[M+2],D=C,N=l[w],B=.027+g*.28;r[M]+=(Math.sin(E*.73+N+C*.8)*B-U*g*.33+S*.14)*R,r[M+2]+=(Math.cos(E*.63+N+b*.6)*B+b*g*.33+S*.055)*R,r[M+1]+=(-.27+Math.sin(E*1.1+N)*g*.15)*R;let O=Math.exp(-R*(.65+(g?0:.2)));r[M]*=O,r[M+2]*=O,r[M+1]*=Math.exp(-R*.38),r[M+1]=Math.max(r[M+1],-.18-a[w]*3.8),b+=r[M]*R,C+=r[M+1]*R,U+=r[M+2]*R;let et=C-n.y,H=Math.sqrt(b*b+et*et+U*U);if(H>e){let $=b/H,nt=et/H,it=U/H,j=r[M]*$+r[M+1]*nt+r[M+2]*it;b=$*(e-.003),C=n.y+nt*(e-.003),U=it*(e-.003),j>0&&(r[M]-=j*$*1.32,r[M+1]-=j*nt*1.32,r[M+2]-=j*it*1.32)}let G=p(b,C,U,D);C<G&&(C=G,Math.hypot(b,U)>4.27?(r[M]-=b*.24*R,r[M+2]-=U*.24*R,r[M+1]=Math.min(0,r[M+1])):g>.22?r[M+1]=Math.abs(r[M+1])*.22+g*.25:(r[M+1]=0,r[M]*=.1,r[M+2]*=.1,c[w]=.001)),s[M]=b,s[M+1]=C,s[M+2]=U}u.attributes.position.needsUpdate=!0}function v(){let R=0,E=0,S=0,w=0,M=0;for(let b=0;b<t;b++){let C=b*3,U=Math.hypot(s[C],s[C+1]-n.y,s[C+2]);M=Math.max(U,M),U>qe.radius-.09&&R++,Number.isFinite(U)||E++,c[b]>0?w++:S++}return{count:t,outside:R,invalid:E,moving:S,settled:w,maxRadius:M,allowedRadius:e,energy:g,shakeCount:x}}return{points:f,material:d,update:_,shake:y,diagnostics:v,setTrainOffset(R){m=R},get energy(){return g}}}function ch(i="255,229,190"){return Dn(128,128,(t,e,n)=>{let s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);s.addColorStop(0,`rgba(${i},.8)`),s.addColorStop(.12,`rgba(${i},.4)`),s.addColorStop(.42,`rgba(${i},.10)`),s.addColorStop(1,`rgba(${i},0)`),t.fillStyle=s,t.fillRect(0,0,e,n)})}function Md(i,t){let e=ch(),n=[];for(let s of t){let r=new Vs(new $i({map:e,color:16765082,transparent:!0,opacity:.13,blending:dn,depthWrite:!1}));r.position.copy(s),r.scale.set(.43,.51,1),r.renderOrder=7,i.add(r),n.push(r)}return n}function Ea(i,t,{kind:e="steam"}={}){let n=e==="chimney",s=e==="exhaust",r=e==="pressure",a=n?90:r?60:100,o=new Float32Array(a*3),l=new Float32Array(a),c=new Float32Array(a),h=Array.from({length:a},(E,S)=>S/a),u=Array.from({length:a},()=>_t(-1,1)),d=new ae;d.setAttribute("position",new ye(o,3)),d.setAttribute("aSize",new ye(l,1)),d.setAttribute("aAlpha",new ye(c,1));let f=Dn(128,128,(E,S,w)=>{for(let M=0;M<8;M++){let b=M/8*Math.PI*2,C=64+Math.cos(b)*17,U=64+Math.sin(b)*15,N=E.createRadialGradient(C,U,0,C,U,35);N.addColorStop(0,"rgba(255,255,255,.42)"),N.addColorStop(.45,"rgba(255,255,255,.25)"),N.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=N,E.fillRect(0,0,S,w)}}),g=new le({transparent:!0,depthWrite:!1,uniforms:{map:{value:f},uDpr:{value:1},uTime:{value:0},uColor:{value:new Ft(s?2106150:14674157)},uSoot:{value:s?1:0}},vertexShader:"attribute float aSize;attribute float aAlpha;varying float vAlpha;varying float vAngle;uniform float uDpr;uniform float uTime;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vAngle=position.y*.8+uTime*.1;gl_PointSize=aSize*1000.*uDpr/-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:"uniform sampler2D map;uniform vec3 uColor;uniform float uSoot;varying float vAlpha;varying float vAngle;void main(){vec2 p=gl_PointCoord-.5;float c=cos(vAngle),s=sin(vAngle);vec2 uv=mat2(c,-s,s,c)*p+.5;vec3 smokeColor=uColor+vec3(.035,.04,.045)*smoothstep(.15,.85,length(uv-.5)*2.)*uSoot;gl_FragColor=vec4(smokeColor,texture2D(map,uv).a*vAlpha);}"}),x=new Cn(d,g);x.frustumCulled=!1,x.renderOrder=7,x.name=n?"White smoke from the station chimney":s?"Dark coal smoke from the locomotive stack":"White pressure-release steam",i.add(x);let m=0,p=0,y=[],_=At();function v(E){if(!y.length)return t;for(let S=y.length-1;S>=0;S--)if(y[S].t<=E)return y[S].p;return y[0].p}function R(E){let S=Math.max(0,E-p);if(p=E,!n)for((!y.length||E-y.at(-1).t>.065)&&y.push({t:E,p:t.clone()});y.length>1&&y[1].t<E-6;)y.shift();m*=Math.exp(-S/1.4),g.uniforms.uTime.value=E;for(let w=0;w<a;w++){let M=n?.17:r?.43:.29,b=(E*M+h[w])%1,C=E-b/M,U=n?1:.34+.66*Math.pow(Math.max(0,Math.sin(C*3.4)),2),D=n?t:v(C);o[w*3]=D.x-b*(n?.65:.3)+Math.sin(E*.65+h[w]*10)*b*.17,o[w*3+1]=D.y+Math.pow(b,.78)*(n?2.32:r?.85+m*.4:1.85+m*.35),o[w*3+2]=D.z+b*(r?.35:-.18)+u[w]*b*.26,l[w]=.13+b*(n?.96:r?.48:.77)+m*.08;let N=n?.145:r?.018+m*.3:s?.36:.23;c[w]=Math.pow(Math.sin(b*Math.PI),.8)*N*U*(1+m*.55)}d.attributes.position.needsUpdate=!0,d.attributes.aSize.needsUpdate=!0,d.attributes.aAlpha.needsUpdate=!0}return{update:R,material:g,boost(){m=1},diagnostics(){return{kind:e,particles:a,burst:m}}}}var wa=class{constructor(){this.music=new Audio("assets/winter-station-music.mp3"),this.ambient=new Audio("assets/winter-station-ambience.mp3"),this.whistle=new Audio("assets/train-whistle.mp3"),this.whistle.volume=.48,this.whistle.preload="none",this.whistleCount=0,this.music.loop=this.ambient.loop=!0,this.music.volume=0,this.ambient.volume=0,this.music.preload=this.ambient.preload="none",this.states={music:!1,ambient:!1},this.targets={music:.36,ambient:.12},this.fadeTimers={},this.effectCounts={bell:0,bird:0,chuff:0}}async toggle(t){let e=this[t],n=!this.states[t];if(clearInterval(this.fadeTimers[t]),n){if(await e.play(),this.states[t]=!0,t==="ambient")try{await this.effectsContext()}catch{}}else this.states[t]=!1;let s=e.volume,r=n?this.targets[t]:0,a=performance.now();return this.fadeTimers[t]=setInterval(()=>{let o=Math.min(1,(performance.now()-a)/800);e.volume=s+(r-s)*o,o===1&&(clearInterval(this.fadeTimers[t]),n||e.pause())},30),n}async toot(){this.whistle.currentTime=0,await this.whistle.play(),this.whistleCount++}async effectsContext(){if(!this.fx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.fx=new t,this.fxGain=this.fx.createGain(),this.fxGain.gain.value=.1;let e=this.fx.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=5,this.fxGain.connect(e),e.connect(this.fx.destination)}return this.fx.state==="suspended"&&await this.fx.resume(),this.fx}effect(t){if(!this.states.ambient||!this.fx||this.fx.state!=="running")return;this.effectCounts[t]=(this.effectCounts[t]||0)+1;let e=this.fx,n=e.currentTime;if(t==="bell"&&[1046.5,1318.51,1567.98].forEach((s,r)=>{let a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s,o.gain.setValueAtTime(0,n+r*.055),o.gain.linearRampToValueAtTime(.15,n+r*.055+.008),o.gain.exponentialRampToValueAtTime(1e-4,n+r*.055+.75),a.connect(o),o.connect(this.fxGain),a.start(n+r*.055),a.stop(n+r*.055+.78),a.onended=()=>{a.disconnect(),o.disconnect()}}),t==="bird")for(let s=0;s<2;s++){let r=e.createOscillator(),a=e.createGain(),o=n+s*.15;r.frequency.setValueAtTime(1750,o),r.frequency.exponentialRampToValueAtTime(2600,o+.065),r.frequency.exponentialRampToValueAtTime(1950,o+.12),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.07,o+.012),a.gain.exponentialRampToValueAtTime(1e-4,o+.13),r.connect(a),a.connect(this.fxGain),r.start(o),r.stop(o+.14),r.onended=()=>{r.disconnect(),a.disconnect()}}if(t==="chuff"){let s=e.createBuffer(1,Math.ceil(e.sampleRate*.22),e.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/r.length*6);let a=e.createBufferSource(),o=e.createBiquadFilter(),l=e.createGain();a.buffer=s,o.type="lowpass",o.frequency.value=950,l.gain.value=.18,a.connect(o),o.connect(l),l.connect(this.fxGain),a.start(n),a.onended=()=>{a.disconnect(),o.disconnect(),l.disconnect()}}}storyWhistle(){this.states.ambient&&this.toot().catch(()=>{})}diagnostics(){return{...Object.fromEntries(["music","ambient","whistle"].map(e=>[e,{enabled:this.states[e]||!1,playing:!this[e].paused,loaded:this[e].readyState,duration:this[e].duration||0,plays:e==="whistle"?this.whistleCount:void 0,source:this[e].getAttribute("src").startsWith("data:")?"embedded original MP3":this[e].getAttribute("src")}])),effects:{state:this.fx?.state||"not enabled",counts:{...this.effectCounts},followsAmbientSwitch:!0}}}pauseForHidden(){for(let t of["music","ambient"])this.states[t]&&this[t].pause();this.whistle.pause(),this.fx?.suspend().catch(()=>{})}resume(){for(let t of["music","ambient"])this.states[t]&&this[t].play().catch(()=>{});this.states.ambient&&this.fx?.resume().catch(()=>{})}};var Sd=[{title:"\u6536\u85CF\u5168\u666F",caption:"The winter keeps its little secrets.",theta:.47,phi:1.32,r:25.7,target:[0,4.65,0],fov:35},{title:"\u96EA\u591C\u7AD9\u623F",caption:"A warm light at the end of the line.",theta:-.11,phi:1.29,r:19.6,target:[-.65,3.72,-.45],fov:30},{title:"\u84B8\u6C7D\u6765\u4FE1",caption:"One last train, a thousand stories.",theta:1.07,phi:1.34,r:18.9,target:[.7,3.05,1.2],fov:28},{title:"\u677E\u6797\u4FA7\u5F71",caption:"Beyond the platform, the forest sleeps.",theta:-1.03,phi:1.28,r:24.1,target:[0,4.45,0],fov:34},{title:"\u5C4B\u9876\u843D\u96EA",caption:"Every rooftop holds a little winter.",theta:.32,phi:.64,r:24.2,target:[-.1,3.65,0],fov:34},{title:"\u65F6\u5149\u80CC\u9762",caption:"There is a story on the other side.",theta:3.06,phi:1.28,r:25.1,target:[0,4.6,0],fov:35}];function Bv(i){return new I(...i.target).add(new I().setFromSpherical(new an(i.r,i.phi,i.theta)))}function bd(i,t,e,n,s=2.7){let r=new an().setFromVector3(i.clone().sub(qe.center)),a=new an().setFromVector3(Bv(n).sub(qe.center));return a.theta=r.theta+Math.atan2(Math.sin(a.theta-r.theta),Math.cos(a.theta-r.theta)),{from:r,end:a,targetFrom:t.clone(),targetTo:new I(...n.target),fovFrom:e,fovTo:n.fov,t:0,duration:s}}var Ta=new an;function hh(i,t,e,n){let s=Math.max(0,Math.min(1,t)),r=s*s*s*(s*(s*6-15)+10);return Ta.radius=he.lerp(i.from.radius,i.end.radius,r),Ta.phi=he.lerp(i.from.phi,i.end.phi,r),Ta.theta=he.lerp(i.from.theta,i.end.theta,r),e.setFromSpherical(Ta).add(qe.center),n.lerpVectors(i.targetFrom,i.targetTo,r),he.lerp(i.fovFrom,i.fovTo,r)}function Ed(i){let t={uWindTime:{value:0},uWindGust:{value:0}};function e(o){Object.assign(o.uniforms,t),o.vertexShader=`uniform float uWindTime;uniform float uWindGust;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float treeH=max(0.,position.y-1.49);
    float gust=(1.+uWindGust*.7);
    float phase=position.x*.37+position.z*.51;
    transformed.x+=(sin(uWindTime*1.12+phase)*.0047+sin(uWindTime*.63+phase*.8)*.0022)*treeH*treeH*gust;
    transformed.z+=cos(uWindTime*.94+phase)*.0042*treeH*treeH*gust;
  `)}let n={...i};for(let o of["pine","pineLight","trunk","snow"]){let l=i[o].clone();l.onBeforeCompile=e,l.customProgramCacheKey=()=>"winter-tree-wind-v1",l.userData.treeWind=!0,n[o]=l}let s=new Hs({depthPacking:ca});s.onBeforeCompile=e,s.customProgramCacheKey=()=>"winter-tree-wind-depth-v1";function r(o){o.traverse(l=>{l.isMesh&&l.material.userData.treeWind&&(l.customDepthMaterial=s)})}function a(o,l=0,c=null){t.uWindTime.value=o,t.uWindGust.value=(c??.35+.3*Math.sin(o*.37))+l}return{materials:n,connect:r,update:a,uniforms:t}}function uh(i,t,e,n,s,r=.13){let a=xt(i,e,n,s);for(let o of[-1,1]){let l=te(a,r*.48,r*.12,t.red,o*r*.44,.015,0);l.scale.set(1,.62,1),l.rotation.z=o*.4;let c=q(a,r*.3,r*.9,.027,t.red,o*r*.25,-r*.46,0,.014);c.rotation.z=o*.19}return dt(a,r*.18,t.red,0,0,.018),a}function Aa(i,t,e,n,s,r){let a=xt(i,e,Le(e,n)+s*.44,n,_t(-.3,.3));q(a,s,s*.85,s*.81,r,0,0,0,.025),q(a,s*.13,s*.87,s*.83,t.gold,0,0,0,.006),q(a,s*1.01,s*.87,s*.12,t.gold,0,0,0,.006),q(a,s*1.025,.045,s*.835,r,0,s*.41,0,.014);for(let o of[-1,1]){let l=te(a,s*.14,s*.025,t.gold,o*s*.09,s*.47,0);l.rotation.x=Math.PI/2,l.rotation.y=o*.3,l.scale.set(1,.55,1)}return a}function kv(i,t,e,n,s,r=.16){let a=new pn;for(let o=0;o<10;o++){let l=o/10*me+Math.PI/2,c=o%2?r*.43:r,h=Math.cos(l)*c,u=Math.sin(l)*c;o?a.lineTo(h,u):a.moveTo(h,u)}return a.closePath(),xi(i,a,.04,t,e,n,s,.008)}function wd(i,t,e){let n=xt(i);n.name="Christmas at Winter Station \xB7 wreaths, gifts & warm fairy lights";let s=new Xt({color:11085608,roughness:.38,metalness:.25}),r=new Xt({color:3234132,roughness:.45,metalness:.18}),a=[new Xt({color:16767649,emissive:16755777,emissiveIntensity:2.9}),new Xt({color:14110523,emissive:16730661,emissiveIntensity:1.8}),new Xt({color:12113324,emissive:10276485,emissiveIntensity:1.9})],o=[],l=[];function c(_,v,R,E=0,S=.032){dt(n,S,a[E%3],_,v,R),o.push(_,v,R),l.push(E*.79)}for(let _=0;_<3;_++){let v=[];for(let R=0;R<=36;R++){let E=R/36,S=-2.54+_*1.145+E*1.145,w=Jt+1.83-Math.sin(E*Math.PI)*.14,M=1.24;if(v.push([S,w,M]),R%2===0){let b=dt(n,1,R%4?t.pine:t.pineLight,S,w,M,.07,.043,.05);b.rotation.z=Math.cos(E*Math.PI)*.4}R%6===0&&c(S,w-.042,M+.045,_*8+R),R%12===5&&dt(n,.045,R%2?t.gold:s,S,w-.09,M+.022)}ue(n,v,.024,t.pine),uh(n,{...t,red:s},-2.54+_*1.145,Jt+1.84,1.29,.11)}uh(n,{...t,red:s},.9,Jt+1.84,1.29,.11);let h=xt(n,-.82,4.2,.249);te(h,.245,.055,t.pine);for(let _=0;_<32;_++){let v=_/32*me,R=dt(h,1,_%2?t.pine:t.pineLight,Math.sin(v)*.245,Math.cos(v)*.245,.013,.075,.027,.04);R.rotation.z=-v}for(let _=0;_<9;_++){let v=_/9*me;dt(h,.036,_%3?t.gold:s,Math.sin(v)*.25,Math.cos(v)*.25,.056)}uh(h,{...t,red:s},0,-.19,.072,.13);let u=-3.08,d=1.72;oh(n,e,[[u,d,1.7]]);for(let _=0;_<43;_++){let v=_/42,R=v*me*3.6,E=.435*(1-v)+.04,S=u+Math.cos(R)*E,w=d+Math.sin(R)*E,M=Jt+.23+v*1.43;c(S,M,w,_,.031),_%5===0&&dt(n,.055,_%2?s:t.gold,S,M-.07,w)}kv(n,a[0],u,Jt+1.87,d,.16),Aa(n,t,-3.34,1.96,.3,s),Aa(n,t,-2.84,1.91,.26,r),Aa(n,t,-3.43,1.52,.24,t.cream),Aa(n,t,1.49,-.48,.26,s);let g=xt(n,-2.5,Jt,2.8,.12);dt(g,.17,t.snow,0,.17,0,1,1.1,1),dt(g,.125,t.snow,0,.39,0),Gt(g,.15,.15,.028,t.black,0,.505,0,28),Gt(g,.09,.1,.13,t.black,0,.57,0,28),te(g,.114,.024,s,0,.33,0).rotation.x=Math.PI/2,q(g,.046,.19,.022,s,.065,.25,.14,.012);for(let _ of[-.041,.041])dt(g,.014,t.black,_,.418,.112);Gt(g,0,.024,.11,t.leather,0,.385,.145,7).rotation.x=Math.PI/2;for(let _ of[.13,.2,.27])dt(g,.014,t.black,0,_,.17);for(let _ of[-1,1])Ot(g,[_*.12,.25,0],[_*.28,.37,.03],.013,t.trunk);let x=new ae;x.setAttribute("position",new Yt(o,3)),x.setAttribute("aPhase",new Yt(l,1));let m=new le({transparent:!0,depthWrite:!1,blending:dn,uniforms:{uTime:{value:0},uDpr:{value:1},uNight:{value:1}},vertexShader:"attribute float aPhase;varying float vGlow;uniform float uTime;uniform float uDpr;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vGlow=.8+.2*sin(uTime*.9+aPhase);gl_PointSize=clamp(220.*uDpr/-p.z,3.,16.*uDpr);gl_Position=projectionMatrix*p;}",fragmentShader:"varying float vGlow;uniform float uNight;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(max(0.,1.-r),2.5)*vGlow*(.16+uNight*.36);gl_FragColor=vec4(1.,.66,.29,a);}"}),p=new Cn(x,m);p.renderOrder=7,p.frustumCulled=!1,i.add(p);function y(_,v){m.uniforms.uTime.value=_,m.uniforms.uNight.value=v,a.forEach((R,E)=>R.emissiveIntensity=(1.5+.9*v)*(.86+.14*Math.sin(_*.8+E*1.6)))}return{update:y,material:m,bulbs:a,count:o.length/3}}function vi(i,t,e){let{x:n,z:s,scale:r=1,rotation:a=0,coatColor:o=3495527,scarfColor:l=11223092,hat:c="beanie",seated:h=!1}=e,u=xt(i,n,Le(n,s)+(h?.43:0),s,a);u.scale.setScalar(r),u.name=e.name||"Miniature winter traveller";let d=new Xt({color:o,roughness:.88}),f=new Xt({color:l,roughness:.98}),g=new Xt({color:14201237,roughness:.93}),x=new Xt({color:3812647,roughness:.9}),m=xt(u),p=h?.08:.3,y=[[0,0],[.125,0],[.145,.04],[.13,.2],[.105,.33],[.075,.35],[0,.35]].map(E=>new Q(...E));jt(m,new Li(y,24),d,0,p,0);for(let E of[-1,1]){let S=q(m,.04,.17,.018,d,E*.045,p+.24,.106,.012);S.rotation.z=E*.2}for(let E of[.09,.17,.25])dt(m,.011,t.brass,0,p+E,.126,1,1,.5);Gt(m,.037,.045,.07,g,0,p+.37,0,16),dt(m,.09,g,0,p+.47,.003,.83,1.08,.88),jt(m,new bn(.093,20,14,0,me,0,Math.PI*.48),x,0,p+.51,-.005);for(let E of[-1,1])dt(m,.008,t.black,E*.03,p+.481,.075,1,.8,.55),dt(m,.016,g,E*.075,p+.46,.002,.7,1,.65);dt(m,.015,g,0,p+.458,.083,.65,.8,1.25),c==="cap"?(Gt(m,.105,.099,.06,d,0,p+.56,0,28),q(m,.15,.018,.1,t.black,0,p+.535,.069,.03),dt(m,.013,t.gold,0,p+.56,.101)):(jt(m,new bn(.104,20,14,0,me,0,Math.PI*.57),f,0,p+.525,0),te(m,.088,.018,f,0,p+.525,0).rotation.x=Math.PI/2,dt(m,.032,f,0,p+.635,0)),te(m,.066,.031,f,0,p+.366,0).rotation.x=Math.PI/2;let _=q(m,.058,.24,.025,f,.053,p+.235,.127,.016);_.rotation.z=-.18,_.userData.dynamic=!0;let v=[];for(let E of[-1,1]){let S=xt(u,E*.116,p+.29,0);dt(S,.056,d,0,-.015,0,1,.9,.9),Ot(S,[0,0,0],[E*.025,-.21,.015],.044,d,.035,12),dt(S,.039,f,E*.025,-.23,.018,.82,1,.82),v.push(S),ge(S)}let R=[];for(let E of[-1,1]){let S=xt(u,E*.064,h?.02:.32,0);Ot(S,[0,0,0],[0,-.245,h?.16:0],.041,t.darkwood,.035,12),dt(S,.047,t.black,0,-.27,h?.19:.026,.9,.68,1.65),R.push(S),ge(S)}return ge(m),{g:u,body:m,arms:v,legs:R,scarf:_,baseY:u.position.y,options:e}}function Td(i,t){let e=xt(i);e.name="Six travellers \xB7 articulated miniature figures";let n=vi(e,t,{x:.65,z:3.53,rotation:.3,coatColor:2178632,scarfColor:12232059,hat:"cap",name:"Stationmaster \xB7 waving the departure flag"}),s=xt(n.arms[1],.032,-.25,.02);Ot(s,[0,0,0],[0,-.25,0],.009,t.oak);let r={uFlagTime:{value:0},uFlagGust:{value:0}},a=new Xt({color:8629618,roughness:.91,side:Fe}),o=_=>{Object.assign(_.uniforms,r),_.vertexShader=`uniform float uFlagTime;uniform float uFlagGust;
`+_.vertexShader,_.vertexShader=_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=sin(position.x*35.-uFlagTime*4.3)*.018*uv.x*(.2+uFlagGust);`)};a.onBeforeCompile=o,a.customProgramCacheKey=()=>"station-flag-wind";let l=jt(s,new Ke(.16,.11,12,6),a,.075,-.16,0),c=new Hs({depthPacking:ca,side:Fe});c.onBeforeCompile=o,l.customDepthMaterial=c;let h=vi(e,t,{x:-.85,z:3.5,rotation:0,coatColor:9063485,scarfColor:13285257,name:"Walking passenger \xB7 a suitcase and a wool scarf"}),u=xt(h.arms[0],-.025,-.28,.02);q(u,.18,.14,.085,t.leather,0,-.045,0,.021),te(u,.035,.009,t.darkwood,0,.038,0).scale.y=.6;for(let _ of[-.055,.055])q(u,.018,.14,.09,t.brass,_,-.045,0,.003);let d=vi(e,t,{x:3.55,z:1.45,rotation:-.4,coatColor:5531996,scarfColor:12098145,name:"Mother \xB7 watching the snow"}),f=vi(e,t,{x:3.1,z:2.38,scale:.73,rotation:.25,coatColor:10826802,scarfColor:14997426,name:"Child \xB7 catching falling snow"}),g=vi(e,t,{x:-2.64,z:-.17,rotation:.28,coatColor:5657701,scarfColor:9060153,seated:!0,name:"Seated traveller \xB7 reading beside the luggage"}),x=xt(g.g,0,.28,.18,.05);q(x,.19,.014,.14,t.cream,0,0,0,.005),q(x,.195,.012,.145,t.engine,0,-.01,0,.006),g.arms[0].rotation.x=-.65,g.arms[1].rotation.x=-.65;let m=vi(e,t,{x:-.33,z:-2.62,rotation:2.1,coatColor:7365964,scarfColor:2639945,hat:"cap",name:"Porter \xB7 waiting by the parcel trolley"}),p=[n,h,d,f,g,m];function y(_,v=.2){r.uFlagTime.value=_,r.uFlagGust.value=v;for(let M=0;M<p.length;M++)p[M].scarf.rotation.z=-.18+Math.sin(_*3+M)*.11*v,p[M].scarf.rotation.x=Math.sin(_*2.2+M)*.1*v;n.arms[1].rotation.z=.14+Math.sin(_*.8)*.035,n.arms[1].rotation.x=.15,n.g.rotation.y=.3+Math.sin(_*.37)*.04;let R=_%20,E=R<7||R>10&&R<17,S=R<7?R/7:R<10?1:R<17?1-(R-10)/7:0;h.g.position.x=-1.25+S*.8,h.g.position.z=Math.sqrt(3.96*3.96-h.g.position.x*h.g.position.x)-.16,h.g.rotation.y=R<8.5?Math.PI/2:-Math.PI/2;let w=E?Math.sin(_*7)*.4:0;h.legs[0].rotation.x=w,h.legs[1].rotation.x=-w,h.arms[0].rotation.x=-w*.48,h.arms[1].rotation.x=w*.48,h.g.position.y=h.baseY+(E?Math.abs(Math.sin(_*7))*.014:0),d.g.rotation.y=-.4+Math.sin(_*.45)*.1,d.arms[0].rotation.x=-.14+Math.sin(_*.8)*.035,f.arms[0].rotation.z=-.7-Math.sin(_*1.9)*.24,f.arms[1].rotation.z=.7+Math.sin(_*1.9+.6)*.25,f.g.position.y=f.baseY+Math.max(0,Math.sin(_*1.9))*.035,g.g.rotation.z=Math.sin(_*.8)*.012,x.rotation.x=-.1+Math.sin(_*.6)*.025,m.arms[0].rotation.x=-.35+Math.sin(_*.9)*.025}return{update:y,count:p.length,people:p}}function Hv(i,t,e,n,s,r,a,o,l=null){let c=e.clone().sub(t).normalize(),h=Math.tan(n)*s,u=new le({transparent:!0,depthWrite:!1,depthTest:!1,side:en,blending:dn,uniforms:{uSource:{value:t.clone()},uDirection:{value:c},uAngle:{value:n},uLength:{value:s},uDensity:{value:r},uColor:{value:new Ft(a)},uNight:{value:1},uDepth:{value:null},uResolution:{value:new Q(1920,1080)},uNear:{value:.1},uFar:{value:180},uForward:{value:At(0,0,-1)},uSphereCenter:{value:At(0,4.15,0)},uWindowUp:{value:At(0,1,0)},uWindow:{value:l?1:0},uWindowCenter:{value:l?.center.clone()||At()},uWindowNormal:{value:l?.normal.clone()||At(0,0,1)},uWindowRight:{value:l?At().crossVectors(At(0,1,0),l.normal).normalize():At(1,0,0)},uWindowSize:{value:new Q(l?.width||1,l?.height||1)},uShadow:{value:null},uShadowMatrix:{value:o.shadow.matrix},uHasShadow:{value:0}},vertexShader:"varying vec3 vWorld;void main(){vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`#include <packing>
      varying vec3 vWorld;uniform vec3 uSource;uniform vec3 uDirection;uniform vec3 uColor;uniform float uAngle;uniform float uLength;uniform float uDensity;uniform float uNight;uniform sampler2D uDepth;uniform vec2 uResolution;uniform float uNear;uniform float uFar;uniform vec3 uForward;
      uniform vec3 uSphereCenter;uniform vec3 uWindowUp;uniform float uWindow;uniform vec3 uWindowCenter;uniform vec3 uWindowNormal;uniform vec3 uWindowRight;uniform vec2 uWindowSize;uniform sampler2D uShadow;uniform mat4 uShadowMatrix;uniform float uHasShadow;
      float apertureMask(vec3 p){
        vec3 ray=p-uSource;float planeDistance=dot(uWindowCenter-uSource,uWindowNormal),along=dot(ray,uWindowNormal);if(along<=planeDistance)return 0.;
        vec3 hit=uSource+ray*(planeDistance/along)-uWindowCenter;vec2 xy=vec2(dot(hit,uWindowRight),dot(hit,uWindowUp));vec2 halfSize=uWindowSize*.5;
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
        float sum=0.,stepSize=(hi-lo)/40.;for(int i=0;i<40;i++){vec3 p=cameraPosition+rd*(lo+(float(i)+.5)*stepSize);float shell=1.-smoothstep(4.70,5.10,length(p-uSphereCenter));if(p.y<1.50||shell<=0.)continue;
          vec3 q=p-uSource;float h=dot(q,uDirection),rad=length(q-uDirection*h)/max(.035,h*tan(uAngle));float edge=exp(-pow(rad,4.)*3.5);
          float aperture=uWindow>.5?apertureMask(p):1.;if(aperture<.001)continue;float ends=smoothstep(0.,.12,h)*(1.-smoothstep(uLength*.57,uLength,h));float atten=1./(1.+h*h*.20);sum+=edge*ends*atten*aperture*litAt(p)*shell*stepSize;
        }float a=(1.-exp(-sum*uDensity))*(.12+.88*uNight);gl_FragColor=vec4(uColor,a);
      }`});u.userData.sourceLocal=t.clone(),u.userData.directionLocal=c.clone(),u.userData.aperture=l,u.userData.density=r,u.userData.light=o;let d=jt(i,new jo(h,s,48,1,!0),u);return d.position.copy(t).addScaledVector(c,s/2),d.quaternion.setFromUnitVectors(At(0,-1,0),c),d.castShadow=!1,d.receiveShadow=!1,d.renderOrder=2,u.userData.proxy=d,u.userData.length=s,d.name=l?"Window light \xB7 aperture and mullion shadow integral":"Ray-integrated warm light shaft",u}function Ad(i,t,e,n=[]){let s=[],r=[];function a(f,g,{power:x=18,angle:m=.43,distance:p=5,shadow:y=!1,map:_=null,volume:v=.1,color:R=16766107,aperture:E=null,resolution:S=1024}={}){let w=new $s(R,x,p,m,.6,2);return w.position.copy(f),w.target.position.copy(g),w.castShadow=y,_&&(w.map=_),y&&(w.shadow.autoUpdate=!1,w.shadow.needsUpdate=!0,w.shadow.mapSize.set(S,S),w.shadow.camera.near=.08,w.shadow.camera.far=p,w.shadow.bias=-8e-5,w.shadow.normalBias=E?.003:.018,w.shadow.radius=2),i.add(w,w.target),s.push({light:w,power:x,aperture:E}),r.push(Hv(i,f,g,m,f.distanceTo(g)+.12,v,R,w,E)),w}t.forEach((f,g)=>{let x=f.clone().add(At(0,-.2,0)),m=At(f.x+(g===0?.16:g===1?.3:-.12),Jt+.035,f.z+(g===2?-.3:.95));a(x,m,{power:24,angle:.48,shadow:g===0,volume:.23})}),n.forEach((f,g)=>{let x=f.center.clone().addScaledVector(f.normal,-.78).add(At(0,.52,0)),m=f.center.clone().sub(x).normalize(),p=f.center.clone().addScaledVector(m,2.85);a(x,p,{power:36,angle:.58,shadow:!0,volume:.23,distance:4.8,color:16761469,aperture:f,resolution:f.normal.x<-.5||f.normal.z<-.5?512:1024})});let o=e.headPos.clone().addScaledVector(e.headDirection,.03),l=o.clone().addScaledVector(e.headDirection,1.3);l.y=Jt+.04;let c=a(o,l,{power:14,angle:.22,distance:4.2,volume:.13,color:16769975}),h=At(),u=-1;function d(f,g,x,m,p=!1){let y=r.at(-1),_=e.headPos.clone().addScaledVector(e.headDirection,.03),v=_.clone().addScaledVector(e.headDirection,1.3);v.y=Jt+.04,c.position.copy(_),c.target.position.copy(v),y.userData.sourceLocal.copy(_),y.userData.directionLocal.copy(v).sub(_).normalize(),y.userData.proxy.position.copy(_).addScaledVector(y.userData.directionLocal,y.userData.length/2),y.userData.proxy.quaternion.setFromUnitVectors(At(0,-1,0),y.userData.directionLocal);let R=Math.floor(f*20),E=R!==u||Math.abs(i.rotation.z)+Math.abs(i.rotation.x)>5e-4;u=R,s.forEach(({light:S,power:w,aperture:M},b)=>{S.intensity=w*(p&&M?.1:1)*(.025+.975*g)*(1+Math.sin(f*1.4+b)*.006),S.castShadow&&(E||!S.shadow.map)&&(S.shadow.needsUpdate=!0)}),i.updateWorldMatrix(!0,!1),x&&x.getWorldDirection(h),r.forEach(S=>{S.uniforms.uSource.value.copy(S.userData.sourceLocal).applyMatrix4(i.matrixWorld),S.uniforms.uDirection.value.copy(S.userData.directionLocal).transformDirection(i.matrixWorld),S.uniforms.uNight.value=g,S.uniforms.uDensity.value=S.userData.density*(p&&S.userData.aperture?.1:1),S.uniforms.uSphereCenter.value.set(0,4.15,0).applyMatrix4(i.matrixWorld),S.uniforms.uWindowUp.value.set(0,1,0).transformDirection(i.matrixWorld);let w=S.userData.aperture,M=S.userData.light;w&&(S.uniforms.uWindowCenter.value.copy(w.center).applyMatrix4(i.matrixWorld),S.uniforms.uWindowNormal.value.copy(w.normal).transformDirection(i.matrixWorld),S.uniforms.uWindowRight.value.crossVectors(At(0,1,0),w.normal).normalize().transformDirection(i.matrixWorld)),S.uniforms.uHasShadow.value=M.castShadow&&M.shadow.map?1:0,S.uniforms.uShadow.value=M.shadow.map?.texture||null,m&&(S.uniforms.uDepth.value=m.depthTexture,S.uniforms.uResolution.value.set(m.width,m.height),S.uniforms.uNear.value=x.near,S.uniforms.uFar.value=x.far,S.uniforms.uForward.value.copy(h))})}return{update:d,count:s.length,volumes:r.length,windows:n.length,shadowMaps:s.filter(f=>f.light.castShadow).length}}function Vv(i,t){let e=xt(i,-1.66,-.035,0);e.name="Flying gift sleigh \xB7 lacquered wood, brass runners and seven parcels";let n=new Xt({color:10037292,roughness:.32,metalness:.18}),s=new Xt({color:5516588,roughness:.93}),r=new Xt({color:2974803,roughness:.65}),a=new Xt({color:5140875,roughness:.71}),o=new pn;o.moveTo(-.6,-.1),o.bezierCurveTo(-.75,.06,-.76,.42,-.62,.48),o.quadraticCurveTo(-.47,.51,-.39,.36),o.quadraticCurveTo(-.15,.17,.29,.22),o.quadraticCurveTo(.55,.31,.62,.1),o.quadraticCurveTo(.63,-.01,.46,-.1),o.closePath(),q(e,1.06,.08,.64,t.oak,-.04,-.055,0,.025),q(e,1,.055,.54,s,-.07,.005,0,.025);for(let d of[-1,1]){jt(e,new Xs(o,{depth:.045,bevelEnabled:!0,bevelSegments:3,bevelThickness:.012,bevelSize:.012,curveSegments:24}),n,0,0,d*.31-.022),ue(e,[[-.64,.45,d*.343],[-.54,.48,d*.343],[-.38,.34,d*.343],[-.11,.23,d*.343],[.27,.25,d*.343],[.48,.25,d*.343],[.59,.11,d*.343]],.017,t.gold),ue(e,[[-.62,-.1,d*.347],[-.31,-.12,d*.347],[.28,-.12,d*.347],[.5,-.075,d*.347]],.012,t.brass),ue(e,[[-.81,-.33,d*.37],[-.6,-.39,d*.37],[.39,-.39,d*.37],[.66,-.34,d*.37],[.79,-.18,d*.37],[.77,-.055,d*.37],[.66,-.025,d*.37],[.61,-.1,d*.37]],.024,t.brass),ue(e,[[-.8,-.35,d*.37],[-.55,-.413,d*.37],[.4,-.413,d*.37],[.65,-.36,d*.37]],.008,t.gold);for(let f of[-.4,.36])Ot(e,[f,-.08,d*.27],[f+.045,-.37,d*.37],.016,t.gold),Ot(e,[f-.12,-.13,d*.29],[f+.1,-.34,d*.36],.011,t.aged);ue(e,[[-.29,.04,d*.35],[-.17,.16,d*.35],[-.02,.14,d*.35],[.035,.065,d*.35],[.12,.035,d*.35],[.23,.11,d*.35]],.009,t.gold);for(let f=0;f<3;f++){let g=dt(e,1,t.gold,-.17+f*.105,.11-f*.018,d*.351,.037,.014,.006);g.rotation.z=f%2?.5:-.5}dt(e,.03,t.gold,-.64,.49,d*.34),dt(e,.025,t.gold,.48,.26,d*.34)}q(e,.08,.42,.58,n,-.6,.21,0,.055),q(e,.055,.27,.5,s,-.548,.24,0,.045);function l(d,f,g,x,m,p,y,_=0){let v=xt(e,d,f,g,_);q(v,x,m,p,y,0,m/2,0,.019),q(v,x*.14,m*1.012,p*1.015,t.gold,0,m/2,0,.004),q(v,x*1.015,m*1.012,p*.13,t.gold,0,m/2,0,.004),q(v,x*1.035,.025,p*1.035,y,0,m,0,.007);for(let R of[-1,1]){let E=te(v,x*.14,x*.022,t.gold,R*x*.1,m+.023,0);E.rotation.x=Math.PI/2,E.rotation.y=R*.35,E.scale.y=.62}return v}l(-.34,.025,-.08,.36,.39,.34,r,-.09),l(.19,.025,.055,.34,.31,.39,n,.1),l(-.34,.445,-.08,.26,.22,.25,t.cream,.15),l(.2,.36,.055,.25,.24,.28,a,-.12),l(-.02,.035,-.22,.2,.48,.18,t.red,.15),l(-.21,.03,.2,.22,.23,.2,a,.11),l(.39,.05,-.19,.16,.18,.16,r,-.1);let c=new Xt({color:10849112,roughness:.98}),h=xt(e,-.4,.21,.16);dt(h,1,c,0,.24,0,.17,.29,.18),Gt(h,.048,.09,.11,c,0,.51,0,14),te(h,.055,.012,t.gold,0,.53,0).rotation.x=Math.PI/2,ue(h,[[.03,.53,.03],[.13,.49,.04],[.11,.35,.09]],.009,t.gold),ge(e);let u=xt(i);for(let d of[-1,1]){let f=[[-.18,.12,d*.235],[-.53,-.015,d*.28],[-.81,-.015,d*.33],[-1.08,.09,d*.32]];ue(u,f,.01,t.leather),ue(u,f.map(([g,x,m])=>[g,x+.009,m]),.0035,t.gold),te(u,.027,.006,t.brass,-.18,.12,d*.235).rotation.y=Math.PI/2}return ge(u),e}function Gv(i,t){let e=xt(i);e.name="Flying reindeer \xB7 articulated winter messenger";let n=new Xt({color:9986620,roughness:.91}),s=new Xt({color:6307626,roughness:.94}),r=new Xt({color:14469284,roughness:.97}),a=new Xt({color:13547148,roughness:.79}),o=new Xt({color:10298669,roughness:.76}),l=xt(e);dt(l,1,n,0,0,0,.5,.25,.21),dt(l,1,r,-.07,-.13,0,.4,.12,.175),dt(l,1,s,.27,.08,0,.24,.28,.205);let c=dt(l,1,n,.42,.28,0,.17,.37,.155);c.rotation.z=-.4;for(let y=0;y<11;y++){let _=y/10;dt(l,.075,r,.31+_*.19,.12+_*.4,.08+Math.sin(_*9)*.012,1,.75,.9)}let h=xt(e,.56,.59,0);dt(h,1,n,0,.01,0,.225,.155,.135),dt(h,1,r,.172,-.055,0,.17,.091,.104),dt(h,.068,t.black,.292,-.035,0,.75,.8,1);let u=new Xt({color:12334129,roughness:.42,emissive:16732462,emissiveIntensity:.06});dt(h,.043,u,.329,-.025,.003,.78,.8,1.02);for(let y of[-1,1]){let _=dt(h,1,n,-.078,.13,y*.16,.09,.045,.18);_.rotation.x=y*.45;let v=dt(h,1,s,-.062,.145,y*.2,.056,.025,.115);v.rotation.x=y*.45,dt(h,.026,t.black,.086,.037,y*.12,1,1,.45),dt(h,.009,t.snow,.091,.045,y*.133,1,1,.35),ue(h,[[.19,-.102,y*.052],[.24,-.1,y*.063],[.28,-.085,y*.055]],.007,s);let R=xt(h,-.08,.13,y*.074);ue(R,[[0,0,0],[-.1,.17,y*.06],[-.16,.36,y*.1],[-.1,.57,y*.13],[.02,.69,y*.11]],.022,a);for(let[E,S,w]of[[[-.1,.17,y*.06],[.13,.38,y*.03],[.04,.28,y*.05]],[[-.15,.34,y*.1],[-.37,.48,y*.2],[-.27,.43,y*.18]],[[-.12,.5,y*.12],[-.3,.69,y*.11],[-.24,.6,y*.13]]])ue(R,[E,w,S],.014,a),dt(R,.015,a,...S,.7,1.2,.7)}for(let y of[-.18,.18]){let _=te(l,.22,.022,o,y,0,0);_.rotation.y=Math.PI/2,_.scale.y=1.16}ue(l,[[.38,.18,-.17],[.44,-.08,-.15],[.25,-.24,0],[.44,-.08,.15],[.38,.18,.17]],.027,o);for(let y of[-1,1])q(l,.075,.065,.02,t.brass,.17,.06,y*.224,.008),q(l,.046,.035,.024,o,.17,.06,y*.238,.004);for(let y=0;y<5;y++){let _=(y/4-.5)*2.3,v=dt(l,.043,t.gold,.27,-.19-Math.cos(_)*.05,Math.sin(_)*.18);te(l,.044,.005,t.aged,.27,-.19-Math.cos(_)*.05,Math.sin(_)*.18).rotation.y=Math.PI/2,dt(l,.012,t.black,.306,-.2-Math.cos(_)*.05,Math.sin(_)*.18)}let d=[];for(let y of[-1,1])for(let _ of[-1,1]){let v=xt(e,y*.32,-.13,_*.13),R=dt(v,1,n,0,-.11,0,.075,.17,.065);R.rotation.z=y*.3,Ot(v,[0,-.12,0],[y*.12,-.3,0],.042,n,.031,12),dt(v,.043,s,y*.12,-.3,0),Ot(v,[y*.12,-.3,0],[y*.05,-.52,.01],.027,r,.02,12),dt(v,1,t.black,y*.075,-.535,.01,.067,.045,.043),q(v,.045,.003,.075,s,y*.077,-.554,.012,.005),q(v,.004,.034,.085,r,y*.09,-.532,.011,.001),d.push({g:v,front:y,side:_}),ge(v)}let f=xt(e,-.46,.05,0),g=dt(f,1,r,-.08,.055,0,.18,.058,.065);g.rotation.z=-.4;let x=te(e,.155,.034,o,.46,.43,0);x.rotation.z=-.4,x.rotation.x=Math.PI/2;let m=xt(e,.38,.43,-.12);ue(m,[[0,0,0],[-.3,.02,-.01],[-.56,-.04,-.06],[-.75,.02,-.06]],.045,o);for(let y=0;y<5;y++)Ot(m,[-.73,.02+y*.008,-.06],[-.81,-.02+y*.008,-.06],.006,t.gold);let p=Vv(e,t);return ge(l),ge(h),ge(f),ge(m),e.userData.interaction="reindeer",{g:e,head:h,legs:d,tail:f,scarfTail:m,sleigh:p,noseMaterial:u}}function Wv(i,t,e){let n=[[0,0,0,.129],[0,.105,0,.112],[.015,.23,0,.083],[.06,.335,.002,.054],[.145,.365,.012,.029],[.2,.31,.02,.002]],s=[],r=[],a=[];for(let l=0;l<n.length;l++)for(let c=0;c<=32;c++){let[h,u,d,f]=n[l],g=c/32*me;if(s.push(h+Math.cos(g)*f,u,d+Math.sin(g)*f*.85),r.push(c/32,l/(n.length-1)),l<n.length-1&&c<32){let x=l*33+c;a.push(x,x+1,x+33,x+1,x+34,x+33)}}let o=new ae;o.setAttribute("position",new Yt(s,3)),o.setAttribute("uv",new Yt(r,2)),o.setIndex(a),o.computeVertexNormals(),jt(i,o,t),te(i,.123,.027,e).rotation.x=Math.PI/2,dt(i,.053,e,.2,.31,.02)}function Xv(i,t,e,n){let s=xt(i,...e.toArray(),n);s.name="Santa Claus \xB7 sitting on the Nord Express roof",s.scale.setScalar(1.13);let r=new Xt({color:11939120,roughness:.86}),a=new Xt({color:16248795,roughness:.98}),o=new Xt({color:15250586,roughness:.89}),l=xt(s);dt(l,1,r,0,.22,0,.235,.29,.185),dt(l,1,r,0,.03,0,.22,.12,.19);let c=te(l,.205,.03,a,0,.025,0);c.rotation.x=Math.PI/2,c.scale.y=.84;let h=te(l,.218,.027,t.black,0,.16,0);h.rotation.x=Math.PI/2,h.scale.y=.85,q(l,.105,.083,.025,t.gold,0,.16,.186,.013),q(l,.068,.046,.029,t.black,0,.16,.203,.006),q(l,.015,.05,.034,t.gold,.013,.16,.22,.003);for(let m of[.29,.36,.43])dt(l,.014,t.gold,0,m,.166,1,1,.5);for(let m of[-1,1])Ot(l,[m*.116,.035,.01],[m*.14,-.035,.22],.08,r,.071,16),Ot(l,[m*.14,-.035,.22],[m*.14,-.31,.27],.066,r,.05,16),te(l,.052,.017,a,m*.14,-.26,.267).rotation.x=Math.PI/2,dt(l,1,t.black,m*.14,-.32,.31,.076,.066,.145),q(l,.145,.025,.26,t.black,m*.14,-.367,.31,.016);let u=xt(s,0,.53,.025);dt(u,1,o,0,.105,0,.123,.137,.112),dt(u,.035,o,0,.096,.114,1,.8,1);for(let m of[-1,1]){dt(u,.024,r,m*.083,.073,.088,1,.62,.24),dt(u,.012,t.black,m*.045,.13,.097,1,.9,.45),ue(u,[[m*.023,.164,.102],[m*.045,.171,.106],[m*.068,.163,.096]],.012,a);let p=te(u,.035,.0035,t.gold,m*.045,.125,.112);p.scale.y=.78}Ot(u,[-.015,.128,.117],[.015,.128,.117],.0035,t.gold,void 0,6),dt(u,1,a,0,.012,.069,.13,.11,.07);for(let m=0;m<13;m++){let p=m/12,y=(p-.5)*Math.PI,_=Math.sin(y)*.103,v=-.055+Math.abs(_)*.8,R=dt(u,1,a,_,v,.095-Math.abs(_)*.23,.027,.07,.027);R.rotation.z=-y*.5}for(let m of[-1,1]){let p=dt(u,1,a,m*.047,.06,.138,.066,.023,.026);p.rotation.z=m*.22,dt(u,1,a,m*.105,.093,.027,.026,.095,.059)}let d=xt(u,0,.21,-.008);Wv(d,r,a),ge(u);let f=[];for(let m of[-1,1]){let p=xt(s,m*.185,.43,0);dt(p,.08,r,0,-.04,0),Ot(p,[0,-.03,0],[m*.025,-.225,.02],.069,r,.052,16),te(p,.052,.019,a,m*.025,-.215,.02).rotation.x=Math.PI/2,dt(p,1,r,m*.027,-.27,.025,.055,.071,.043),dt(p,.028,r,-m*.014,-.263,.052),ge(p),f.push(p)}let g=xt(s,-.22,.04,-.22),x=new Xt({color:8021312,roughness:.97});dt(g,1,x,0,.17,0,.2,.25,.19),Gt(g,.06,.11,.11,x,.025,.39,0,14),te(g,.065,.012,t.gold,.025,.41,0).rotation.x=Math.PI/2,ue(g,[[.07,.41,.03],[.13,.31,.03],[.09,.21,.08]],.009,t.gold);for(let[m,p,y]of[[.31,.19,t.engine],[-.47,.21,r]]){q(s,p,p*.8,p,y,m,-.005,-.05,.015),q(s,p*.15,p*.82,p*1.02,t.gold,m,-.005,-.05,.004),q(s,p*1.02,p*.82,p*.13,t.gold,m,-.005,-.05,.004);let _=te(s,p*.16,p*.025,t.gold,m,p*.43,-.05);_.rotation.x=Math.PI/2}return ge(l),ge(g),{g:s,head:u,arms:f}}function qv(i){let t=i*.24+.62;return{position:At(Math.cos(t)*1.86,7.04+Math.sin(i*.86)*.12,Math.sin(t)*1.6),yaw:Math.atan2(-Math.cos(t)*1.6,-Math.sin(t)*1.86),bank:Math.sin(i*.48)*.045}}function Rd(i,t,e){let n=Gv(i,t),s=Xv(i,t,e.santaSeat,e.coachAngle);n.g.scale.setScalar(.91),s.g.userData.interaction="santa";let r=-1,a=-1,o=0;function l(u,d,f){u==="santa"&&(r=d+5,f&&(o=he.clamp(Math.atan2(f.x-s.g.position.x,f.z-s.g.position.z)-e.coachAngle,-.65,.65))),u==="reindeer"&&(a=d+3.2)}function c(u,{elapsed:d=u,thankful:f=!1}={}){let g=qv(u);n.g.position.copy(g.position),n.g.rotation.set(Math.sin(u*.72)*.025,g.yaw,g.bank),s.g.position.copy(e.santaSeat),s.g.rotation.y=e.coachAngle;for(let m of n.legs)m.g.rotation.z=m.front*(.45+Math.sin(u*3.7+m.side*.75)*.35);n.head.rotation.z=Math.sin(u*1.1)*.045,n.tail.rotation.y=Math.sin(u*4)*.2,n.scarfTail.rotation.y=Math.sin(u*3.3)*.11,n.sleigh.rotation.x=Math.sin(u*.91)*.026,n.sleigh.rotation.z=Math.sin(u*.86+.5)*.014;let x=d<r||f;s.arms[1].rotation.z=(x?2.35:1.5)+Math.sin(d*(x?4.5:1.3))*(x?.37:.12),s.arms[1].rotation.x=-.25,s.arms[0].rotation.x=-.72,s.arms[0].rotation.z=-.24,s.head.rotation.y=d<r?o:Math.sin(u*.6)*.13,s.g.rotation.z=Math.sin(u*.8)*.012,d<a?(n.head.rotation.z+=Math.sin(d*6)*.17,n.head.rotation.y=Math.sin(d*4)*.2):n.head.rotation.y=0,n.noseMaterial.emissiveIntensity=d<a?.25+Math.max(0,Math.sin(d*6))*.9:.06}function h(){return{flyingReindeer:1,giftSleigh:!0,giftParcels:7,tethered:!0,santaOnTrain:!0,reindeerPosition:n.g.position.toArray(),sleighPosition:n.sleigh.getWorldPosition(At()).toArray(),santaWavingArm:s.arms[1].rotation.z}}return c(0),{update:c,diagnostics:h,interact:l,deer:n,santa:s}}var xe=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function dh(i){let t=(i%72+72)%72,e=0;t>=8&&t<16?e=.105*xe((t-8)/8):t>=16&&t<19?e=.105:t>=19&&t<28&&(e=.105*(1-xe((t-19)/9)));let n=t>=4&&t<28,s=t-32;return{time:t,cycle:Math.floor(i/72),trainOffset:e,flag:n?xe((t-4)/1.5)*(1-xe((t-26)/2)):0,sendOff:t>=7&&t<20?xe((t-7)/2)*(1-xe((t-18)/2)):0,dropAge:s,delivery:t>=32&&t<66,phase:t<4?"\u5019\u8F66":t<8?"\u4E3E\u65D7\u9E23\u7B1B":t<19?"\u5217\u8F66\u7F13\u884C":t<28?"\u56DE\u5230\u7AD9\u53F0":t<32?"\u7B49\u5F85\u5723\u8BDE\u90AE\u5DEE":t<40?"\u793C\u7269\u964D\u843D":t<47?"\u9886\u53D6\u793C\u7269":t<59?"\u5411\u5723\u8BDE\u8001\u4EBA\u81F4\u8C22":"\u51AC\u591C\u5C0F\u61A9",delivered:Math.max(0,Math.floor((i-40)/72)+1)}}function Cd(i){let t=(i%19+19)%19;return{gust:.12+.88*(xe((t-3)/2)*(1-xe((t-8)/3))),direction:[.92,.38]}}function Ra(i,t,e){let n=i.slice(1).map((a,o)=>a.distanceTo(i[o])),s=n.reduce((a,o)=>a+o,0),r=Math.max(0,Math.min(1,t))*s;for(let a=0;a<n.length;a++){if(r<=n[a]||a===n.length-1)return e.copy(i[a]).lerp(i[a+1],n[a]?r/n[a]:0);r-=n[a]}return e.copy(i[0])}function Pd(i,t,e){let n=xt(i,-.82,Jt+.08,-.88);n.name="Life inside the station \xB7 tea, reading and a flickering stove";let s=vi(n,t,{x:-.35,z:.65,scale:.9,rotation:0,coatColor:7888980,scarfColor:13483410,name:"Waiting-room guest \xB7 hot tea and a window greeting"});s.g.position.y=.79;let r=vi(n,t,{x:1.05,z:.02,scale:.73,rotation:-Math.PI/2,seated:!0,coatColor:4480089,scarfColor:13217143,name:"Waiting-room reader \xB7 turning a page"});r.g.position.y=1,r.body.position.y=-.08,r.arms.forEach(C=>C.position.y-=.08),r.legs.forEach(C=>C.scale.setScalar(.72));let a=xt(r.g,0,.19,.2);q(a,.2,.016,.15,t.cream,0,0,0,.004),q(a,.21,.012,.16,t.red,0,-.012,0,.005);let o=jt(a,new Ke(.092,.14),t.cream,.048,.014,0);o.rotation.x=-Math.PI/2,r.arms.forEach(C=>C.rotation.x=-.7);let l=xt(s.arms[1],.027,-.23,.025);Gt(l,.037,.03,.072,t.cream,0,.025,0,24),Gt(l,.031,.031,.003,t.darkwood,0,.063,0,24),te(l,.026,.007,t.cream,.044,.025,0).scale.y=1.15;let c=xt(n,.72,.79,-.55);q(c,.31,.43,.25,t.black,0,.23,0,.035);for(let C of[-.11,.11])for(let U of[-.08,.08])Ot(c,[C,0,U],[C,.1,U],.018,t.iron);q(c,.25,.27,.02,t.brass,0,.25,.139,.025),q(c,.214,.235,.025,t.black,0,.25,.155,.02),Gt(c,.038,.045,.14,t.iron,0,.52,-.04,20),ue(c,[[0,.55,-.04],[0,1.31,-.04],[-.12,1.44,-.04]],.035,t.black),dt(c,.016,t.gold,.13,.23,.169);for(let C=0;C<3;C++){let U=Gt(c,.025,.025,.16,t.darkwood,-.04+C*.04,.15,.175,12);U.rotation.z=.9+C*.4}ge(c);let h=new le({transparent:!0,depthWrite:!1,side:Fe,uniforms:{uTime:{value:0},uNight:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;uniform float uTime;uniform float uNight;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 a=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(a),hash(a+vec2(1,0)),f.x),mix(hash(a+vec2(0,1)),hash(a+1.),f.x),f.y);}
    void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=noise(vec2(p.x*5.,p.y*7.-uTime*2.5));float n2=noise(vec2(p.x*11.,p.y*13.-uTime*4.));float width=(1.-p.y)*.65;float fire=smoothstep(.10,-.07,abs(p.x+sin(p.y*7.-uTime*3.)*.10)-width+(n-.5)*.27);fire*=smoothstep(1.,.72,p.y+(n2-.5)*.18);float hot=clamp((1.-p.y)*1.1-abs(p.x)*.6,0.,1.);vec3 color=mix(vec3(1.,.16,.025),vec3(1.,.85,.35),hot);gl_FragColor=vec4(color*(1.15+uNight*.25),fire*.86);}`}),u=jt(c,new Ke(.2,.23),h,0,.27,.172);u.castShadow=!1,u.renderOrder=1;let d=new Qn(16751434,1.4,1.65,2);d.position.set(0,.29,.28),c.add(d);let f=new Float32Array(24),g=new Float32Array(8),x=new ae;x.setAttribute("position",new ye(f,3)),x.setAttribute("aAlpha",new ye(g,1));let m=new le({transparent:!0,depthWrite:!1,uniforms:{uDpr:{value:1}},vertexShader:"attribute float aAlpha;uniform float uDpr;varying float vAlpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;gl_PointSize=clamp(85.*uDpr/-p.z,1.5*uDpr,7.*uDpr);gl_Position=projectionMatrix*p;}",fragmentShader:"varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.95,.92,.85,pow(1.-r,2.)*vAlpha);}"}),p=new Cn(x,m);p.renderOrder=5,i.add(p);let y=null,_="tea",v=-1,R=null,E=0;function S(C,U,D=null){let N=e[C]||e[0],B=D?D.clone().sub(N.center).setY(0).normalize():N.normal.clone(),O=At().crossVectors(At(0,1,0),N.normal),et=he.clamp(B.dot(O)/Math.max(.3,B.dot(N.normal))*.27,-.18,.18),H=N.center.clone().addScaledVector(N.normal,-.27).addScaledVector(O,.1-et),G=At(H.x+.82,.79,H.z+.88),$=s.g.position.clone(),nt=[$];if($.z<.45){let it=$.x<0?-1:1;Math.abs($.x)<1.2&&nt.push(At($.x,.79,-.86)),nt.push(At(it*1.39,.79,nt.at(-1).z),At(it*1.39,.79,.65))}if(G.z<.45){let it=G.x<0?-1:1;nt.push(At(it*1.39,.79,.65)),Math.abs(N.normal.z)>.5&&nt.push(At(it*1.39,.79,-.86))}nt.push(G),y={start:U,points:nt,normal:B},R=null,v=C}let w=At(),M=At();function b(C,U){h.uniforms.uTime.value=C,h.uniforms.uNight.value=U;let D=1+Math.sin(C*7.1)*.055+Math.sin(C*11.7)*.035;d.intensity=(.85+U*.65)*D;let N=0,B=0,O=s.g.rotation.y,et=Math.min(.2,Math.max(.001,C-E));if(E=C,y){let G=C-y.start;G<3.6?(Ra(y.points,xe(G/3.6),s.g.position),Ra(y.points,Math.min(1,xe(G/3.6)+.01),M),N=1,O=Math.atan2(M.x-s.g.position.x,M.z-s.g.position.z),_="approaching window"):G<9.6?(s.g.position.copy(y.points.at(-1)),s.g.rotation.y=Math.atan2(y.normal.x,y.normal.z),B=1,_="waving through window"):G<13.4?(Ra(y.points,1-xe((G-9.6)/3.8),s.g.position),Ra(y.points,Math.max(0,1-xe((G-9.6)/3.8)-.01),M),s.g.rotation.y=Math.atan2(M.x-s.g.position.x,M.z-s.g.position.z),N=1,_="returning to tea"):(R={position:s.g.position.clone(),start:C},y=null)}if(!y){let G=.5-.5*Math.cos(C*.24),$=At(-1.04+G*2.08,.79,.65);if(R){let nt=xe((C-R.start)/2.5);s.g.position.copy(R.position).lerp($,nt),nt>=1&&(R=null)}else s.g.position.copy($);O=Math.sin(C*.24)>0?Math.PI/2:-Math.PI/2,N=Math.abs(Math.sin(C*.24)),_="tea and a quiet stroll"}s.g.rotation.y+=Math.atan2(Math.sin(O-s.g.rotation.y),Math.cos(O-s.g.rotation.y))*(1-Math.exp(-6*et));let H=Math.sin(C*5.5)*.3*N;s.legs[0].rotation.x=H,s.legs[1].rotation.x=-H,s.arms[0].rotation.x=H*.3,s.arms[1].rotation.x=-.78-Math.max(0,Math.sin(C*.7))*.2,s.arms[0].rotation.z=B?-2.2+Math.sin(C*5)*.25:0,l.rotation.x=-s.arms[1].rotation.x,r.g.rotation.y=-Math.PI/2+Math.sin(C*.35)*.07,o.rotation.y=Math.max(0,Math.sin(C*.7))*.8,r.arms[1].rotation.x=-.7+Math.sin(C*.7)*.06,l.getWorldPosition(w),i.worldToLocal(w);for(let G=0;G<8;G++){let $=(C*.3+G/8)%1;f.set([w.x+Math.sin(C+G)*.02*$,w.y+.07+$*.24,w.z+Math.cos(C+G)*.015*$],G*3),g[G]=Math.sin($*Math.PI)*.3}x.attributes.position.needsUpdate=!0,x.attributes.aAlpha.needsUpdate=!0}return{update:b,greet:S,guest:s,reader:r,steamMaterial:m,diagnostics:()=>({residents:2,activity:_,greetedWindow:v,fireplace:!0,teaSteam:!0})}}function Id(i,t,e){let n=new Xt({color:12154180,roughness:.96}),s=new Xt({color:15194303,roughness:.97}),r=new Xt({color:12290947,roughness:.85}),a=xt(i);a.name="Station cat \xB7 sleeping, stretching and investigating the snow",a.userData.interaction="cat";let o=xt(a);dt(o,1,n,0,.2,0,.23,.13,.115),dt(o,1,s,.1,.16,0,.14,.1,.116);let l=xt(a,.22,.31,0);dt(l,1,n,0,0,0,.1,.085,.087);for(let D of[-1,1]){let N=Gt(l,0,.045,.11,n,-.035,.085,D*.055,3);N.rotation.z=-.25;let B=Gt(l,0,.025,.067,r,-.025,.089,D*.057,3);B.rotation.z=-.25,dt(l,.014,t.black,.071,.015,D*.045,.4,1,1),dt(l,.009,s,.079,.019,D*.047,.4,.4,.4),dt(l,.037,s,.071,-.035,D*.026,.7,.55,1);for(let O=0;O<3;O++)ue(l,[[.086,-.028,D*.03],[.098,-.025+O*.012,D*.09],[.1,-.035+O*.018,D*.15]],.0018,t.cream)}dt(l,.015,r,.097,-.018,0,.5,.6,1);let c=[];for(let D of[-.14,.14])for(let N of[-1,1]){let B=xt(a,D,.18,N*.078);Ot(B,[0,0,0],[.015,-.145,0],.029,n,.021,12),dt(B,.032,s,.027,-.15,0,1.6,.65,1),ge(B),c.push(B)}let h=xt(a,-.19,.21,0);ue(h,[[0,0,0],[-.16,.11,0],[-.2,.27,.02],[-.12,.38,.03]],.022,n),ue(h,[[-.15,.35,.03],[-.12,.38,.03]],.024,s),ge(o),ge(l),ge(h);let u=xt(i);u.name="Robin \xB7 roof, flight and station-sign perch",u.userData.interaction="bird";let d=new Xt({color:6641483,roughness:.95}),f=new Xt({color:12543550,roughness:.92}),g=xt(u);dt(g,1,d,0,.1,0,.065,.085,.1),dt(g,1,f,0,.092,.065,.052,.065,.055),dt(g,.055,d,0,.19,.038);for(let D of[-1,1])dt(g,.008,t.black,D*.043,.2,.065);let x=Gt(g,0,.013,.055,t.gold,0,.185,.104,7);x.rotation.x=Math.PI/2,Ot(g,[0,.03,-.06],[0,-.02,-.16],.022,d,.006,10);for(let D of[-1,1]){Ot(g,[D*.024,.04,0],[D*.024,.003,.02],.005,t.darkwood);for(let N of[-1,0,1])Ot(g,[D*.024,.005,.02],[D*.024+N*.012,.003,.045],.003,t.darkwood)}let m=[];for(let D of[-1,1]){let N=xt(u,D*.035,.135,-.01),B=dt(N,1,d,D*.06,-.015,-.025,.09,.023,.085);B.rotation.y=D*.25;for(let O=0;O<4;O++)Ot(N,[D*.025,-.013,-.01],[D*(.085+O*.01),-.015,-.085+O*.02],.005,t.aged,.0025,6);ge(N),m.push(N)}ge(g);let p=-1,y=-1,_=-1,v="sleeping",R=!1,E=null,S=0;function w(D,N){D==="cat"&&(p=N+5,E=a.position.clone()),D==="bird"&&(y=N+3,e.effect("bird"))}let M=At(-2.42,4.13,.52),b=At(-2.9,Jt+1.49,.03),C=new Lr(M,At(-3.02,5,1),At(-2.82,3.65,.62),b);function U(D){let N=Math.min(.2,Math.max(.001,D-S));S=D;let B=D%40,O=0,et=0;D<p?v="stretching":B<8||B>37?(v="sleeping",et=0):B<11?(v="stretching",et=0):B<20?(v="walking",et=xe((B-11)/9),O=1):B<28?(v="grooming",et=1):(v="walking",et=1-xe((B-28)/9),O=1),a.position.set(-2.94+et*.36,0,.45+et*.17),E&&D<p+1.5&&a.position.lerp(E,1-xe((D-p)/1.5)),a.position.y=Le(a.position.x,a.position.z)+.015;let H=B>=28&&B<37?Math.PI-.44:-.44;a.rotation.y+=Math.atan2(Math.sin(H-a.rotation.y),Math.cos(H-a.rotation.y))*(1-Math.exp(-5*N));let G=v==="stretching"?Math.sin(Math.min(1,D<p?(5-(p-D))/5:(B-8)/3)*Math.PI):0,$=B<8?1:B<10?1-xe((B-8)/2):B>37?xe((B-37)/3):0;D<p&&($*=1-xe((D-(p-5))/.6)*(1-xe((D-(p-.6))/.6))),o.scale.set(1+G*.2,(1-$*.32)*(1-G*.13)*(1+Math.sin(D*1.6)*.015),1),l.position.y=.31-$*.12-G*.08,l.rotation.z=v==="grooming"?Math.sin(D*2.5)*.18:G*.3,l.rotation.y=v==="grooming"?.3:Math.sin(D*.8)*.04,h.rotation.y=Math.sin(D*1.4)*.17,c.forEach((Y,ut)=>Y.rotation.z=O?Math.sin(D*7+(ut===0||ut===3?0:Math.PI))*.42:G*(ut<2?-.25:.15)),v==="grooming"&&(c[3].rotation.z=-1.1+Math.sin(D*2)*.15);let nt=D%25;R=nt>=8&&nt<11||nt>=20&&nt<23;let it=nt<8?0:nt<11?xe((nt-8)/3):nt<20?1:nt<23?1-xe((nt-20)/3):0;u.position.copy(C.getPoint(it));let j=C.getTangent(Math.max(.001,Math.min(.999,it)));nt>=20&&j.negate(),u.rotation.y=R?Math.atan2(j.x,j.z):Math.sin(D*.7)*.22,u.rotation.x=R?-Math.atan2(j.y,Math.hypot(j.x,j.z))*.35:0,m.forEach((Y,ut)=>Y.rotation.z=(ut?1:-1)*(R?.4+Math.sin(D*28)*.9:.12)),g.rotation.y=D<y?Math.sin(D*7)*.35:Math.sin(D*.5)*.08;let V=Math.floor(D/25);V!==_&&(_=V,e.effect("bird"))}return{update:U,interact:w,cat:a,bird:u,diagnostics:()=>({cat:v,robinFlying:R})}}function Dd(i){let e=new Float32Array(540),n=new Float32Array(180),s=new Float32Array(180),r=new ae;r.setAttribute("position",new ye(e,3)),r.setAttribute("aAlpha",new ye(n,1)),r.setAttribute("aSize",new ye(s,1));for(let u=0;u<180;u++)s[u]=.025+u%13/13*.055;let a=new le({transparent:!0,depthWrite:!1,uniforms:{uDpr:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;uniform float uDpr;varying float vAlpha;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;gl_PointSize=clamp(aSize*1000.*uDpr/-p.z,1.,7.*uDpr);gl_Position=projectionMatrix*p;}",fragmentShader:"varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.91,.97,1.,pow(1.-r,1.7)*vAlpha);}"}),o=new Cn(r,a);o.name="Wind-lifted roof and bough powder",o.renderOrder=6,i.add(o);let l=[[1.12,3.87,-.3],[.92,3.95,-1.55],[2.94,5.43,-1.65],[-2.77,5.15,-1.48],[1.1,4.72,-3.05],[3.62,3.25,.1]],c=0;function h(u,d){c=0;for(let f=0;f<180;f++){let g=l[f%l.length],x=(u*.43+f*.6180339)%1,m=f%17/17,p=g[0]+x*(.75+m*.6)+Math.sin(u*2+f)*.1*x,y=g[1]-.85*x*x+Math.sin(x*Math.PI)*.1,_=g[2]+x*.35+Math.cos(f)*.08,v=Math.hypot(p,y-4.15,_);if(n[f]=(v<5.08&&y>Le(p,_)+.05?1:0)*Math.sin(x*Math.PI)*d*.65,n[f]&&v>5.12&&c++,v>5.08){let R=5.08/v;p*=R,y=4.15+(y-4.15)*R,_*=R}e.set([p,y,_],f*3)}r.attributes.position.needsUpdate=!0,r.attributes.aAlpha.needsUpdate=!0}return{update:h,material:a,diagnostics:()=>({particles:180,outside:c})}}var Ud=At(3.62,Le(3.62,1.95)+.035,1.95),fh=At(2.72,Le(2.72,3)+.035,3);function Yv(i,t,e=At()){if(i<=2.8){let n=xe(i/2.8),s=1-n;e.copy(t).multiplyScalar(s*s*s).addScaledVector(t.clone().add(At(.35,.12,.06)),3*s*s*n).addScaledVector(At(2.85,6.4,2.1),3*s*n*n).addScaledVector(At(3.25,5.9,2.17),n*n*n)}else e.copy(At(3.25,5.9,2.17)).lerp(Ud,xe((i-2.8)/5.2));return e}function Ld(i,t){let e=new Xt({color:11548981,roughness:.43,metalness:.12}),n=xt(i);q(n,.22,.19,.22,e,0,.105,0,.017),q(n,.035,.194,.225,t.gold,0,.105,0,.004),q(n,.225,.194,.033,t.gold,0,.105,0,.004),q(n,.235,.025,.235,e,0,.205,0,.006);for(let s of[-1,1]){let r=te(n,.039,.006,t.gold,s*.025,.23,0);r.rotation.x=Math.PI/2,r.scale.y=.65}return ge(n),n}function Zv(i,t){let e=xt(i);e.name="Christmas air mail \xB7 a real parachute and a ribbon-wrapped parcel";let n=Ld(e,t),s=xt(e);s.name="Eight cloth panels and four suspension lines";let r=new Xt({color:15392188,roughness:.92,side:Fe}),a=new Xt({color:11025721,roughness:.88,side:Fe});for(let g=0;g<8;g++){let x=jt(s,new bn(.41,8,10,g/8*me,me/8,0,Math.PI/2),g%2?r:a,0,.74,0);x.scale.y=.55;let m=g/8*me,p=(g+1)/8*me;Ot(s,[Math.cos(m)*.41,.74,Math.sin(m)*.41],[Math.cos(p)*.41,.74,Math.sin(p)*.41],.004,t.gold)}for(let g=0;g<4;g++){let x=g/4*me+Math.PI/4;Ot(s,[Math.cos(x)*.085,.2,Math.sin(x)*.085],[Math.cos(x)*.39,.74,Math.sin(x)*.39],.0035,t.cream)}ge(s);let o=xt(i);o.name="Delivered Christmas parcels beside the snowy forecourt";let l=[],c=[fh.clone(),fh.clone().add(At(-.25,0,.03)),fh.clone().add(At(-.25,0,.2))];for(let g=0;g<3;g++){let x=Ld(o,t);x.position.copy(c[g]),l.push(x)}let h=At(),u=-1,d="waiting";function f(g,x,m){let p=g.dropAge,y=g.cycle;p>=0&&y!==u&&(i.updateWorldMatrix(!0,!1),m.deer.sleigh.getWorldPosition(h),i.worldToLocal(h),h.y+=.19,u=y),e.visible=p>=0&&p<32;let _=1;if(e.visible){if(p<8)Yv(p,h,e.position),s.scale.setScalar(xe(p/.9)),e.rotation.set(Math.sin(p*2.2)*.035,Math.sin(p)*.14,Math.sin(p*2)*.06),d="falling";else{if(e.position.copy(Ud),e.rotation.set(0,0,0),s.scale.setScalar(1-xe((p-8)/1)),d="landed",p>=12){let R=x.g.localToWorld(At(-.1,.35,.22));i.worldToLocal(R),p<14?e.position.lerp(R,xe((p-12)/2)):e.position.copy(R),d="received"}p>=28&&(e.position.lerp(c[Math.min(2,y)],xe((p-28)/4)),d="putting down")}n.scale.setScalar(_)}else d=g.delivered?"parked":"waiting";let v=Math.min(3,Math.max(0,Math.floor((g.cycle*72+g.time-64)/72)+1));l.forEach((R,E)=>R.visible=E<v&&!(p>=28&&p<32&&E===Math.min(2,y)))}return{update:f,g:e,chute:s,parked:o,get stage(){return d},diagnostics:()=>({stage:d,position:e.position.toArray(),visible:e.visible,parked:l.filter(g=>g.visible).length})}}function Yr(i,t,e,n){let s=Math.hypot(i.x,i.z+.16),r=Math.hypot(t.x,t.z+.16),a=Math.atan2(i.x,i.z+.16),o=Math.atan2(t.x,t.z+.16),l=a+(o-a)*e,c=s+(r-s)*e;return n.set(Math.sin(l)*c,0,Math.cos(l)*c-.16),n.y=Le(n.x,n.z),n}function Nd(i,t,{train:e,people:n,visitors:s,props:r,sounds:a,steam:o,pressureSteam:l}){let c=Pd(i,t,r.windows),h=Id(i,t,a),u=Dd(i),d=Zv(i,t),f=0,g=!0,x=0,m=0,p=-1,y=0,_="none",v=dh(0),R=0,E=n.people[3],S=n.people[2],w=n.people[0],M=At(3.1,0,2.38),b=At(3.45,0,2.18),C=At(2.86,0,2.8),U=At();function D(G,$,nt){R=$,x=f,g&&(f+=G),v=dh(f);let it=Cd($);v.gust=it.gust,e.update(v.trainOffset),n.update($,it.gust),w.arms[1].rotation.z=.14+v.flag*(2.18+Math.sin($*3)*.16),S.g.position.set(3.55+v.trainOffset/.105*.14,S.baseY,1.45+v.trainOffset/.105*.055),E.g.position.set(M.x,E.baseY,M.z),E.g.rotation.set(0,.25,0),v.sendOff?(E.g.rotation.y=-1.15,E.arms[1].rotation.z=2.22+Math.sin($*5)*.28,S.arms[0].rotation.z=-1.3):S.arms[0].rotation.z=0;let j=v.dropAge;if(j>=5&&j<40){let ut=0;if(j<11){let ct=xe((j-5)/6);Yr(M,b,ct,E.g.position),ut=Math.sin(Math.PI*(j-5)/6),E.g.rotation.y=2.5}else j<23?(Yr(M,b,1,E.g.position),E.g.rotation.y=2.5+Math.atan2(Math.sin(-1.35-2.5),Math.cos(-1.35-2.5))*xe((j-14)/2)):j<28?(Yr(b,C,xe((j-23)/5),E.g.position),E.g.rotation.y=-.5,ut=Math.sin(Math.PI*(j-23)/5)):j<32?(Yr(b,C,1,E.g.position),E.g.rotation.y=-.6):(Yr(C,M,xe((j-32)/8),E.g.position),E.g.rotation.y=2.3-2.05*xe((j-38)/2),ut=Math.sin(Math.PI*(j-32)/8));E.arms[0].rotation.x=j>=11&&j<31?-.9:-.2,E.arms[1].rotation.z=j>=14&&j<23?2.2+Math.sin($*5)*.25:.35,E.arms[1].rotation.x=j>=11&&j<14?-.9:0,E.legs[0].rotation.x=Math.sin($*8)*.42*ut,E.legs[1].rotation.x=-E.legs[0].rotation.x,E.g.position.y=Le(E.g.position.x,E.g.position.z)+Math.abs(Math.sin($*8))*.012*ut,E.g.rotation.x=j>=11&&j<14?-.13*Math.sin((j-11)/3*Math.PI):j>=28&&j<32?-.18*Math.sin((j-28)/4*Math.PI):0,S.g.rotation.y=.9}else E.legs.forEach(ut=>ut.rotation.x=0);s.update($,{elapsed:$,thankful:j>=14&&j<23}),c.update($,nt),h.update($),u.update($,it.gust),i.updateWorldMatrix(!0,!1),E.g.updateWorldMatrix(!0,!0),d.update(v,E,s);for(let ut of[7,32])Math.floor((f-ut)/72)>Math.floor((x-ut)/72)&&(ut===7?(o.boost(),l.boost(),a.storyWhistle()):a.effect("bell"));let V=Math.floor(f*1.6);if(Math.abs(v.trainOffset-m)>1e-5&&V!==p&&(p=V,a.effect("chuff")),m=v.trainOffset,r.hangingSign&&(r.hangingSign.rotation.z=Math.sin($*1.8)*.028*it.gust),r.secondHands)for(let ut of r.secondHands)ut.rotation.z=-$*me/60;let Y=.25+.75*nt;return t.signalRed.emissiveIntensity=(v.trainOffset>.004?.1:1.9)*Y,t.signalGreen.emissiveIntensity=(v.trainOffset>.004?2.2:.08)*Y,v}function N(G,$,nt){return y++,_=G,G==="santa"||G==="reindeer"?(s.interact(G,R,nt),G==="reindeer"&&a.effect("bell"),G==="santa"?"\u5723\u8BDE\u8001\u4EBA\u8F6C\u8FC7\u5934\uFF0C\u5411\u4F60\u6325\u624B\u3002":"\u5723\u8BDE\u90AE\u5DEE\u5411\u4F60\u70B9\u4E86\u70B9\u5934\u3002"):G==="window"?(c.greet($,R,nt),"\u5019\u8F66\u5BA4\u91CC\u7684\u4EBA\u8D70\u5411\u7A97\u8FB9\uFF0C\u5411\u4F60\u95EE\u597D\u3002"):G==="cat"||G==="bird"?(h.interact(G,R),G==="cat"?"\u8F66\u7AD9\u7684\u5C0F\u732B\u4F38\u4E86\u4E2A\u61D2\u8170\u3002":"\u77E5\u66F4\u9E1F\u6B6A\u8FC7\u5934\uFF0C\u6253\u91CF\u8FD9\u4F4D\u8BBF\u5BA2\u3002"):G==="train"?v.time>=32?(o.boost(),l.boost(),a.storyWhistle(),"\u5723\u8BDE\u90AE\u5DEE\u6B63\u5728\u5FD9\u788C\uFF0C\u5217\u8F66\u7A0D\u540E\u51FA\u53D1\u3002"):v.time>=4&&v.time<28?(o.boost(),l.boost(),a.storyWhistle(),"\u5217\u8F66\u6B63\u5728\u7F13\u884C\uFF0C\u7A0D\u540E\u56DE\u5230\u7AD9\u53F0\u3002"):(f=Math.floor(f/72)*72+4,g=!0,"\u7AD9\u957F\u4E3E\u8D77\u4E86\u65D7\uFF0C\u5217\u8F66\u51C6\u5907\u7F13\u7F13\u51FA\u53D1\u3002"):""}let B=r.windows.map((G,$)=>{let nt=new ke(new Ke(G.width,G.height),new Wn({side:Fe}));return nt.position.copy(G.center),nt.quaternion.setFromUnitVectors(At(0,0,1),G.normal),nt.visible=!1,nt.userData.interaction="window",nt.userData.windowIndex=$,i.add(nt),nt}),O=new sa,et=new Q;function H(G,$,nt,it){et.set((G-it.left)/it.width*2-1,-($-it.top)/it.height*2+1),O.setFromCamera(et,nt),i.updateWorldMatrix(!0,!0);let j=O.intersectObject(i,!0);for(let V of j){let Y=V.object,ut=null,ct,Tt=!0;for(;Y&&Y!==i;)Tt=Tt&&Y.visible,Y.userData.interaction&&!ut&&(ut=Y.userData.interaction,ct=Y.userData.windowIndex),Y=Y.parent;if(!(!Tt&&ut!=="window")&&!(!ut&&(V.object.material?.transparent||!V.object.visible))){if(ut){let Ct=i.worldToLocal(nt.position.clone());return N(ut,ct,Ct)}if(V.object.isMesh&&Tt&&!V.object.material?.transparent)return""}}return""}return{update:D,pick:H,interact:N,room:c,animals:h,powder:u,delivery:d,toggle(){return g=!g,g},seek(G){f=Math.max(0,G),x=f,g=!0},get running(){return g},get time(){return f},diagnostics:()=>({seconds:f,running:g,phase:v.phase,train:e.diagnostics(),gift:d.diagnostics(),room:c.diagnostics(),animals:h.diagnostics(),powder:u.diagnostics(),clicks:y,lastInteraction:_})}}var ph=5.07,rr=new I(-.82,1.57,-.88),$v=`attribute float aSize;attribute float aAlpha;attribute vec3 aColor;attribute float aPhase;
uniform float uHeight;varying float vAlpha;varying vec3 vColor;varying float vPhase;
void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vColor=aColor;vPhase=aPhase;
gl_PointSize=clamp(aSize*uHeight*projectionMatrix[1][1]*.5/max(.05,-p.z),.6,34.);gl_Position=projectionMatrix*p;}`,Jv=`uniform float uKind;varying float vAlpha;varying vec3 vColor;varying float vPhase;
void main(){vec2 p=(gl_PointCoord-.5)*2.;float r=length(p);if(r>1.||vAlpha<.001)discard;
float shape=exp(-r*r*14.)*.7+exp(-r*r*4.)*.10;
if(uKind>1.5){float c=cos(vPhase),s=sin(vPhase);p=mat2(c,-s,s,c)*p;
float rays=exp(-min(abs(p.x),abs(p.y))*42.)*pow(max(0.,1.-max(abs(p.x),abs(p.y))),1.8);
shape=exp(-r*r*24.)*.75+rays*.75+exp(-r*r*4.)*.10;}
gl_FragColor=vec4(vColor,clamp(shape*vAlpha,0.,.95));
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;function mh(i,t,e,n){let s=new ae,r={position:new Float32Array(t*3),size:new Float32Array(t),alpha:new Float32Array(t),color:new Float32Array(t*3),phase:new Float32Array(t)};for(let[l,c,h]of[["position","position",3],["aSize","size",1],["aAlpha","alpha",1],["aColor","color",3],["aPhase","phase",1]])s.setAttribute(l,new ye(r[c],h).setUsage(ua));let a=new le({transparent:!0,depthWrite:!1,depthTest:!0,blending:dn,uniforms:{uHeight:{value:1080},uKind:{value:e}},vertexShader:$v,fragmentShader:Jv}),o=new Cn(s,a);return o.name=n,o.frustumCulled=!1,o.renderOrder=7,i.add(o),{points:o,arrays:r,material:a,upload(){for(let l of Object.values(s.attributes))l.needsUpdate=!0}}}var vn=i=>{let t=Math.sin(i*127.1+31.7)*43758.5453;return t-Math.floor(t)};function Fd(i,{visitors:t,delivery:e}){let n=mh(i,144,0,"Warm pendant light \xB7 floating indoor motes"),s=mh(i,22,1,"Stove embers \xB7 confined behind the fire-door rim"),r=mh(i,420,2,"Christmas stardust \xB7 sleigh, parcel and landing"),a=Array.from({length:420},()=>({age:99,life:1,p:new I,v:new I,size:0,seed:0,kind:0})),o=new I,l=new I,c=new I,h=new I,u=new I,d=0,f=0,g=0,x=0,m=!1,p=!1,y=null,_="",v=0,R=0,E=0,S=0,w={outside:0,invalid:0,maximumRadius:0,alive:0,trail:0,parcel:0,landing:0};function M(U,D,N=0){let B=a[d];d=(d+1)%a.length;let O=++f,et=vn(O+3),H=vn(O+7)*Math.PI*2;if(B.p.copy(U),B.seed=vn(O+19),B.kind=D,B.age=N-S,D===2){let G=.16+vn(O+6)*.22;B.p.x+=Math.cos(H)*.18,B.p.z+=Math.sin(H)*.18,B.v.set(Math.cos(H)*G,.08+vn(O+8)*.14,Math.sin(H)*G),B.life=1.6+vn(O+11)*.6,B.size=.065+vn(O+4)*.06}else B.p.add(u.set(Math.cos(H),vn(O+2)-.5,Math.sin(H)).multiplyScalar(D===0?.095:.055)),B.v.set(Math.cos(H)*.045,-.04-et*.05,Math.sin(H)*.045),B.life=D===0?2+et*1.6:.7+et*.8,B.size=(D===0?.045:.033)+vn(O+4)*.045;u.copy(B.p).sub(qe.center),u.length()>ph-.09&&B.p.copy(u.setLength(ph-.09)).add(qe.center)}function b(){for(let U of a)U.age=99;g=x=0,m=p=!1}function C(U,D,N,B){U=Math.max(0,Math.min(U,1)),S=U,E=D;let O=y!==null&&(B.clock<y-.001||Math.abs(B.clock-y)>U+.08);O&&(b(),R++),y=B.clock;let et=n.arrays,H=s.arrays;for(let it=0;it<144;it++){let j=vn(it+1)*Math.PI*2,V=vn(it+70),Y=vn(it+100),ut=(it%2?.82:-.82)+Math.cos(j+D*(.08+V*.035))*(.18+Y*.39),ct=.9+(Y+D*(.008+V*.007))%1*.93,Tt=-.08+Math.sin(j*.73+D*.09)*(.16+V*.4);et.position.set([ut+rr.x,ct+rr.y,Tt+rr.z],it*3),et.size[it]=.009+V*.012,et.alpha[it]=(.18+N*.28)*(.6+.4*Math.sin(j+D*.7)**2),et.phase[it]=j,et.color.set([1.1,.73+V*.14,.39+V*.15],it*3)}for(let it=0;it<22;it++){let j=vn(it+40),V=(D*(.4+j*.3)+vn(it+9))%1,Y=Math.sin(it*5.3+D*.9+V*3)*(.028+j*.04),ut=.17+V*.18;H.position.set([rr.x+.72+Y,rr.y+.79+ut,rr.z-.55+.18+j*.006],it*3),H.size[it]=.01+j*.01,H.alpha[it]=Math.sin(V*Math.PI)**1.3*(.55+j*.4),H.phase[it]=0,H.color.set([1.7,.38+V*.34,.045],it*3)}i.updateWorldMatrix(!0,!1),t.deer.sleigh.updateWorldMatrix(!0,!1),o.set(-.74,-.25,0).applyMatrix4(t.deer.sleigh.matrixWorld),i.worldToLocal(o),(!m||o.distanceTo(l)>.8)&&l.copy(o),m=!0,g+=U*52;let G=Math.floor(g);g-=G;for(let it=0;it<G;it++){let j=(it+.5)/Math.max(1,G);M(u.copy(l).lerp(o,j),0,U*(1-j))}l.copy(o);let $=e.stage==="falling"&&e.g.visible;if($){c.copy(e.g.position).y+=.22,(!p||c.distanceTo(h)>1)&&h.copy(c),x+=U*37;let it=Math.floor(x);x-=it;for(let j=0;j<it;j++){let V=(j+.5)/Math.max(1,it);M(u.copy(h).lerp(c,V),1,U*(1-V))}h.copy(c)}else x=0;if(!O&&_==="falling"&&e.stage==="landed"){c.copy(e.g.position).y+=.075;for(let it=0;it<58;it++)M(c,2,Math.max(0,(B.dropAge??8)-8));v++}p=$,_=e.stage,w.alive=w.trail=w.parcel=w.landing=w.outside=w.invalid=0,w.maximumRadius=0;let nt=r.arrays;for(let it=0;it<a.length;it++){let j=a[it],V=Math.min(U,Math.max(0,j.age+U));if(j.age+=U,j.age>=j.life){nt.alpha[it]=0;continue}let Y=j.age/j.life;j.v.x*=Math.exp(-V*.6),j.v.z*=Math.exp(-V*.6),j.p.addScaledVector(j.v,V),j.p.x+=Math.sin(D*2.1+j.seed*31)*V*.018,j.p.z+=Math.cos(D*1.7+j.seed*27)*V*.018,j.kind===2&&(j.v.y-=V*.19);let ut=j.p.distanceTo(qe.center);if(ut>ph||j.kind===0&&j.p.y<6.18){j.age=j.life,nt.alpha[it]=0;continue}nt.position[it*3]=j.p.x,nt.position[it*3+1]=j.p.y,nt.position[it*3+2]=j.p.z,nt.size[it]=j.size*(.9+Math.sin(Y*Math.PI)*.2),nt.alpha[it]=Math.sin(Math.min(1,Y*6)*Math.PI*.5)*(1-Y)**1.4*(.57+N*.43)*(.65+.35*Math.sin(D*5+j.seed*30)**2),nt.phase[it]=j.seed*6+D*(j.seed-.5)*.3,nt.color.set(j.seed>.82?[.68,.9,1.35]:[1.65,1.02+j.seed*.25,.35+j.seed*.32],it*3),w.alive++,w[["trail","parcel","landing"][j.kind]]++,w.maximumRadius=Math.max(w.maximumRadius,ut),ut>qe.radius-.09&&w.outside++,Number.isFinite(j.p.x+j.p.y+j.p.z)||w.invalid++}n.upload(),s.upload(),r.upload()}return{update:C,resize(U,D){for(let N of[n,s,r])N.material.uniforms.uHeight.value=U*D},diagnostics:()=>({indoorMotes:144,fireEmbers:22,poolCapacity:420,...w,landingBursts:v,seekResets:R,clock:E,depthTest:!0,textureSamplers:0}),dust:n,embers:s,magic:r}}var Od=new I(-.82,1.57,-.88),kd=.025,ss=[{id:"waiting-room",title:"\u5019\u8F66\u5BA4\u5168\u666F",caption:"A little warmth, behind the frosted glass.",position:[-1.3,1.62,.83],target:[.35,1.25,-.35],fov:70,portrait:{target:[.75,1.3,-.2],fov:76}},{id:"window-tea",title:"\u7A97\u8FB9\u8336\u8BDD",caption:"Snow outside. A cup of tea inside.",position:[.26,1.55,-.17],target:[-.18,1.35,.8],fov:66,portrait:{target:[-.9,1.38,.79],fov:72}},{id:"fireside-reading",title:"\u7089\u8FB9\u9605\u8BFB",caption:"One more page before the last train.",position:[.45,1.42,.46],target:[.96,1.19,-.3],fov:64,portrait:{position:[.4,1.65,.8],target:[.94,1.2,-.19],fov:76}}];function Kv(i,t=!1){let e=ss[he.clamp(i,0,ss.length-1)],n=t?{...e,...e.portrait}:e;return{view:e,portrait:t,baseFov:n.fov,position:new I(...n.position).add(Od),target:new I(...n.target).add(Od)}}function gh(i,t=!1){let e=Kv(i,t),n=e.target.clone().sub(e.position),s=new an().setFromVector3(n);return{...e,theta:s.theta,phi:s.phi,yaw:0,pitch:0,yawTarget:0,pitchTarget:0,fov:e.baseFov,fovTarget:e.baseFov}}var zd=new I,Bd=new an;function Hd(i,t,e,n,s,r=null){Bd.set(1.6,i.phi+he.clamp(e,-.35,.35),i.theta+t),zd.setFromSpherical(Bd),n.copy(i.position),s.copy(i.position).add(zd),r&&(n.applyMatrix4(r),s.applyMatrix4(r))}function xh(i){return he.clamp(i,48,76)}var Kt=i=>document.querySelector(i),Ln=new URLSearchParams(location.search),Zr=matchMedia("(prefers-reduced-motion: reduce)").matches,$r=[];window.addEventListener("error",i=>$r.push(i.message));window.addEventListener("unhandledrejection",i=>$r.push(String(i.reason)));var Vd;function _i(i){Kt("#toast").textContent=i,Kt("#toast").classList.add("show"),clearTimeout(Vd),Vd=setTimeout(()=>Kt("#toast").classList.remove("show"),2600)}function Qv(i){Kt("#loading").classList.add("done"),Kt("#error").hidden=!1,Kt("#error p").textContent="\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome \u6216 Edge\uFF0C\u5E76\u542F\u7528\u786C\u4EF6\u52A0\u901F\u3002\u9519\u8BEF\u4FE1\u606F\uFF1A"+i.message,console.error(i)}async function t_(){let i=Kt("#world"),t=new Ho({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Ic,t.shadowMap.autoUpdate=!1,t.toneMapping=kr,t.toneMappingExposure=1.14,t.outputColorSpace=tn;let e=new Pr;e.background=new Ft(1319723),e.fog=new Vo(1319723,.014);let n=new Je(35,innerWidth/innerHeight,.1,180);n.position.set(12,10.5,21);let s=35,r=new Bs(t),a=new Pr;a.background=new Ft(6320762);let o=Dn(64,256,(X,at,ne)=>{let Re=X.createLinearGradient(0,0,at,0);Re.addColorStop(0,"#172126"),Re.addColorStop(.25,"#dde7e5"),Re.addColorStop(.5,"#ffffff"),Re.addColorStop(.75,"#dde7e5"),Re.addColorStop(1,"#172126"),X.fillStyle=Re,X.fillRect(0,0,at,ne)});for(let[X,at,ne,Re,wn]of[[-7,5,1,.75,9],[7,5,-2,.7,8],[-2,10,-3,5,.45]]){let hn=new ke(new Ke(Re,wn),new Wn({map:o,color:new Ft(2,2,2),side:Fe}));hn.position.set(X,at,ne),hn.lookAt(0,4,0),a.add(hn)}e.environment=r.fromScene(a,.02).texture,e.environmentIntensity=.44,a.traverse(X=>{X.isMesh&&(X.geometry.dispose(),X.material.dispose())}),r.dispose();let l=new ma(n,i);l.target.set(0,4.7,0),l.enableDamping=!0,l.dampingFactor=.055,l.enablePan=!1,l.rotateSpeed=.5,l.zoomSpeed=.7,l.minDistance=14.5,l.maxDistance=35,l.minPolarAngle=.42,l.maxPolarAngle=1.57,l.autoRotate=!Zr&&!Ln.has("still"),l.autoRotateSpeed=1.2;let c=fd(),h=new kn;h.name="Winter Station \xB7 complete collectible",e.add(h);let u=new kn;h.add(u);let d=Ed(c),f=gd(u,c,d.materials),g=vd(u,c,h),x=wd(u,c,d.materials);u.updateMatrixWorld(!0);let m=ge(u)+g.triangles;d.connect(u);let p=Td(h,c),y=Rd(h,c,g),_=_d(h,c),v=yd(h,2600),R=Ea(h,g.steamOrigin,{kind:"exhaust"}),E=Ea(h,g.pressureOrigin,{kind:"pressure"}),S=Ea(h,At(-1.7,5.21,-1.43),{kind:"chimney"}),w=Md(h,[...f.glows,g.headPos]),M=Ad(h,f.glows,g,f.windows),b=new Xt({color:1253412,roughness:.42,metalness:.23});Gt(e,6.65,6.75,.34,b,0,-.38,0,160),te(e,6.66,.018,c.aged,0,-.22,0).rotation.x=Math.PI/2;let C=jt(e,new Ke(2e3,2e3),new Xt({color:1121314,roughness:.49,metalness:.16}),0,-.56,0);C.rotation.x=-Math.PI/2,C.castShadow=!1;let U=jt(e,new Ke(11.1,11.1),new Wn({map:Dn(256,256,(X,at,ne)=>{let Re=X.createRadialGradient(at/2,ne/2,40,at/2,ne/2,at/2);Re.addColorStop(0,"rgba(0,0,0,.65)"),Re.addColorStop(.7,"rgba(0,0,0,.42)"),Re.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=Re,X.fillRect(0,0,at,ne)}),transparent:!0,depthWrite:!1}),0,-.203,0);U.rotation.x=-Math.PI/2,U.castShadow=!1;let D=new ia(10930658,5985600,1.15);e.add(D);let N=new Js(11852278,2.7);N.position.set(-6,12,7),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.camera.left=-7,N.shadow.camera.right=7,N.shadow.camera.top=12,N.shadow.camera.bottom=-5,N.shadow.camera.near=.5,N.shadow.camera.far=34,N.shadow.normalBias=.035,N.shadow.bias=-13e-5,N.shadow.radius=3,N.target.position.set(0,2,0),e.add(N,N.target);let B=new Js(16767136,1.15);B.position.set(5,6,9),e.add(B);let O=new Js(8502505,2.25);O.position.set(3,9,-7),e.add(O);let et=new Qn(16758879,12,7,2);et.position.set(-.82,3.06,.12),h.add(et);let H=ch("241,191,120");for(let X=0;X<16;X++){let at=new Vs(new $i({map:H,color:16762764,transparent:!0,opacity:_t(.14,.32),depthWrite:!1,blending:dn,fog:!1}));at.position.set(_t(-27,28),_t(1.4,13),_t(-29,-19));let ne=_t(.15,.55);at.scale.set(ne,ne,1),e.add(at)}let G=new _a(t);G.addPass(new ya(e,n));let $=new Wr(e,n,innerWidth,innerHeight);$.updateGtaoMaterial({radius:.22,thickness:1,distanceFallOff:.9,scale:1}),$.blendIntensity=.65;let nt=$.overrideVisibility.bind($);$.overrideVisibility=()=>{nt(),e.traverse(X=>{(X.isSprite||X.material?.transparent)&&(X.visible=!1)})},G.addPass($),$.setGBuffer($.normalRenderTarget.depthTexture,$.normalRenderTarget.texture);let it=new nr(new Q(innerWidth,innerHeight),.2,.55,1.3);G.addPass(it),G.addPass(new Ma);let j=new er(hd);G.addPass(j);let V=null,Y=1,ut=1,ct=99,Tt=0,Ct=0,zt=0,ie=0,lt=0,mt=!0,L=.115,Lt=.115,tt=null,Et=-1,gt=null,Nt=null,Mt=null,P=0,T=-1;document.body.dataset.scene="exterior";let W=new wa,st=new Ft(1319723),ht=new Ft(3886678),rt=new Ft(11852278),Ut=new Ft(16770235),ft=Nd(h,c,{train:g,people:p,visitors:y,props:f,sounds:W,steam:R,pressureSteam:E});Ln.has("qa")&&Ln.has("story")&&ft.seek(Number(Ln.get("story"))||0);let St=Fd(h,{visitors:y,delivery:ft.delivery}),ee=new I,pt=new an,It=new Ks;function Bt(X){X=!!X&&!tt&&!gt,l.autoRotate=X,Kt("#orbit").setAttribute("aria-pressed",X)}Bt(l.autoRotate);function qt(){let X=innerWidth,at=innerHeight;n.aspect=X/at,n.fov=tt?s:he.radToDeg(2*Math.atan(Math.tan(he.degToRad(s)*.5)*Math.max(1,.95/n.aspect))),n.setViewOffset(X,at,tt?0:-X*(X<700?0:L),tt?0:at*(X<700?-.035:0),X,at),n.updateProjectionMatrix()}function Dt(X){V=null,l.enabled=!1,Nt=null,Mt={phase:"out",age:0,from:P,switchScene:X},document.body.dataset.travel="room-changing"}function ce(X){if(!Mt)return;let at=Mt;if(at.age+=X,at.phase==="out"){let ne=Math.min(1,at.age/(Zr?.08:.26));P=he.lerp(at.from,1,ne*ne*(3-2*ne)),ne>=1&&(at.phase="covered",at.age=0)}else if(at.phase==="covered")at.switchScene(),P=1,at.phase="in",at.age=0,document.body.dataset.travel="room-changing";else{let ne=Math.min(1,at.age/(Zr?.12:.42));P=1-ne*ne*(3-2*ne),ne>=1&&(Mt=null,l.enabled=!tt&&!V,document.body.dataset.travel=V?"moving":"ready")}Kt("#camera-curtain").style.opacity=String(P)}function Zt(X){document.body.dataset.scene=X?"interior":"exterior",Kt("#room-panel").hidden=!X,Kt("#inside").setAttribute("aria-pressed",X),Kt("#inside span").textContent=X?"\u7403\u5916":"\u8FDB\u7AD9",Kt("#inside").title=X?"\u8FD4\u56DE\u96EA\u666F\u7403 \xB7 I / Esc":"\u8D70\u8FDB\u5019\u8F66\u5BA4 \xB7 I",Kt("#orbit").disabled=X,Kt(".interaction-hint span").innerHTML=X?"\u62D6\u52A8\u73AF\u987E <i>\xB7</i> \u6EDA\u8F6E\u8C03\u6574\u89C6\u91CE <i>\xB7</i> Esc \u8FD4\u56DE\u7403\u5916":"\u62D6\u52A8\u65CB\u8F6C <i>\xB7</i> \u6EDA\u8F6E\u9760\u8FD1 <i>\xB7</i> \u70B9\u51FB\u6A21\u578B\u53D1\u73B0\u56DE\u5E94",i.setAttribute("aria-label",X?"3D \u5019\u8F66\u5BA4\uFF0C\u62D6\u52A8\u73AF\u987E\uFF0C\u6EDA\u8F6E\u8C03\u6574\u89C6\u91CE":"3D \u96EA\u666F\u7403\uFF0C\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E")}function de(X){let at=new URL(location.href);X>=0?at.searchParams.set("room",ss[X].id):at.searchParams.delete("room");try{history.replaceState(null,"",at.href)}catch{}}function F(X=0){if(!tt)return;let at=tt;at.yaw=he.damp(at.yaw,at.yawTarget,8,X),at.pitch=he.damp(at.pitch,at.pitchTarget,8,X),at.fov=he.damp(at.fov,at.fovTarget,7,X),s=at.fov,h.updateWorldMatrix(!0,!1),Hd(at,at.yaw,at.pitch,n.position,l.target,h.matrixWorld),qt(),n.lookAt(l.target)}function yt(X=0,at=!1){X=he.clamp(X,0,ss.length-1),gt||(gt={position:n.position.clone(),target:l.target.clone(),fov:s,auto:l.autoRotate,view:Tt});let ne=()=>{Et=X,tt=gh(X,innerWidth/innerHeight<.8),l.enabled=!1,Bt(!1),n.near=kd,t.toneMappingExposure=.9,Zt(!0),de(X),Kt("#room-title").textContent=ss[X].title,document.querySelectorAll("[data-room]").forEach(Re=>Re.setAttribute("aria-pressed",Number(Re.dataset.room)===X)),F(),X===1&&ft.room.greet(0,Ct,h.worldToLocal(n.position.clone()))};at?(V=null,ne(),document.body.dataset.travel="ready"):Dt(ne)}function K(X=null){if(!gt)return;let at=gt;Dt(()=>{tt=null,Et=-1,gt=null,n.near=.1,t.toneMappingExposure=1.14,s=at.fov,n.position.copy(at.position),l.target.copy(at.target),Zt(!1),de(-1),Bt(X===null&&at.auto),l.enableDamping=!1,l.update(0),l.enableDamping=!0,qt(),n.lookAt(l.target),Kt("#inside").focus({preventScroll:!0}),X!==null&&ot(X)})}function ot(X,at=!1){if(tt||gt){K(X);return}X=Math.max(0,Math.min(5,X));let ne=Sd[X];l.enableDamping=!1,l.update(0),l.enableDamping=!0,V=bd(n.position,l.target,s,ne,Zr?.25:2.7),at&&(V.t=3),l.enabled=!1,Tt=X,Bt(!1),document.body.dataset.travel="moving",document.querySelectorAll("[data-view]").forEach(Re=>Re.setAttribute("aria-pressed",Number(Re.dataset.view)===X)),Kt("#view-number").textContent=`0${X+1} / 06`,Kt("#view-title").textContent=ne.caption}function Rt(){V&&(V=null,l.enabled=!tt&&!Mt,document.body.dataset.travel=Mt?"room-changing":"ready")}function wt(){v.shake(),ct=0,Kt("#shake-state").textContent="\u96EA\u82B1\u6B63\u5728\u7FFB\u817E\uFF0C\u7247\u523B\u540E\u4F1A\u6162\u6162\u843D\u5B9A\u3002",_i("\u96EA\u82B1\u626C\u8D77\uFF0C\u51AC\u5929\u91CD\u65B0\u5F00\u59CB\u3002")}function $t(X){ut=X?1:0,Kt("#daynight").setAttribute("aria-pressed",!!X),Kt("#daynight span").textContent=X?"\u96EA\u591C":"\u51AC\u663C"}function Ae(X){document.body.classList.toggle("ui-hidden",X===void 0?!document.body.classList.contains("ui-hidden"):X),Lt=document.body.classList.contains("ui-hidden")?0:.115}Kt("#story").onclick=()=>{let X=ft.toggle();Kt("#story").setAttribute("aria-pressed",X),_i(X?"\u8F66\u7AD9\u7684\u5C0F\u6545\u4E8B\u7EE7\u7EED\u4E86\u3002":"\u6545\u4E8B\u5DF2\u6682\u505C\uFF0C\u53EF\u4EE5\u6162\u6162\u6B23\u8D4F\u3002")},Kt("#shake").onclick=wt,Kt("#orbit").onclick=()=>{Rt(),Bt(!l.autoRotate)},Kt("#daynight").onclick=()=>$t(!ut),Kt("#hide-ui").onclick=()=>Ae(!0),Kt("#reset").onclick=()=>{ot(0),_i("\u56DE\u5230\u51AC\u65E5\u7684\u7B2C\u4E00\u773C\u3002")},Kt("#whistle").onclick=async()=>{R.boost(),E.boost();try{await W.toot(),Kt("#whistle").classList.add("is-playing"),_i("\u545C\u2014\u2014 \u51AC\u65E5\u5217\u8F66\u5373\u5C06\u51FA\u53D1\u3002")}catch(X){_i("\u9E23\u7B1B\u97F3\u6548\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u97F3\u9891\u6587\u4EF6\u3002"),$r.push("whistle: "+X.message)}},W.whistle.addEventListener("ended",()=>Kt("#whistle").classList.remove("is-playing"));for(let X of["music","ambient"])Kt(`#${X}`).onclick=async()=>{try{let at=await W.toggle(X);Kt(`#${X}`).setAttribute("aria-pressed",at),_i(at?X==="music"?"\u539F\u521B\u5706\u821E\u66F2 \xB7 Christmas at Winter Station":"\u73AF\u5883\u97F3 \xB7 \u51AC\u98CE\u3001\u84B8\u6C7D\u4E0E\u8FDC\u5904\u7684\u949F\u58F0":X==="music"?"\u97F3\u4E50\u5DF2\u5173\u95ED":"\u73AF\u5883\u97F3\u5DF2\u5173\u95ED")}catch(at){_i("\u97F3\u9891\u672A\u80FD\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5 assets \u6587\u4EF6\u5939\u662F\u5426\u5B8C\u6574\u3002"),$r.push("audio: "+at.message)}};document.querySelectorAll("[data-view]").forEach(X=>X.onclick=()=>ot(Number(X.dataset.view))),Kt("#inside").onclick=()=>tt||gt?K():yt(),Kt("#leave-station").onclick=()=>K(),document.querySelectorAll("[data-room]").forEach(X=>X.onclick=()=>yt(Number(X.dataset.room)));let Ue=null;i.addEventListener("pointerdown",X=>{Mt||(Rt(),Bt(!1),Ue={x:X.clientX,y:X.clientY,t:performance.now()},tt&&(Nt={id:X.pointerId,x:X.clientX,y:X.clientY,yaw:tt.yawTarget,pitch:tt.pitchTarget},i.setPointerCapture(X.pointerId)))}),i.addEventListener("pointermove",X=>{!tt||!Nt||Nt.id!==X.pointerId||(tt.yawTarget=Nt.yaw-(X.clientX-Nt.x)*.0036,tt.pitchTarget=he.clamp(Nt.pitch-(X.clientY-Nt.y)*.0026,-.35,.35))});function ve(){Nt=null,Ue=null}i.addEventListener("pointercancel",ve),i.addEventListener("lostpointercapture",ve),window.addEventListener("blur",ve),i.addEventListener("pointerup",X=>{if(!Mt&&Ue&&Math.hypot(X.clientX-Ue.x,X.clientY-Ue.y)<7&&performance.now()-Ue.t<700){let at=ft.pick(X.clientX,X.clientY,n,i.getBoundingClientRect());at&&_i(at)}ve(),i.hasPointerCapture(X.pointerId)&&i.releasePointerCapture(X.pointerId)}),i.addEventListener("wheel",X=>{tt&&(X.preventDefault(),tt.fovTarget=xh(tt.fovTarget+X.deltaY*.035))},{passive:!1}),l.addEventListener("start",()=>Bt(!1)),window.addEventListener("keydown",X=>{if(X.target instanceof HTMLInputElement||X.target instanceof HTMLTextAreaElement)return;let at=X.key.toLowerCase();at==="h"&&Ae(),at==="escape"&&(Ae(!1),gt&&K()),at==="i"&&Kt("#inside").click(),at===" "&&(X.preventDefault(),wt()),at==="p"&&Kt("#story").click(),at==="n"&&$t(!ut),at==="a"&&Kt("#orbit").click(),at==="r"&&ot(0),at==="m"&&Kt("#music").click(),at==="e"&&Kt("#ambient").click(),at==="w"&&Kt("#whistle").click(),/^[1-6]$/.test(at)&&ot(Number(at)-1),/^[7-9]$/.test(at)&&yt(Number(at)-7)});function cn(){if(tt&&tt.portrait!==innerWidth/innerHeight<.8){let at=tt,ne=gh(Et,innerWidth/innerHeight<.8);ne.yaw=at.yaw,ne.pitch=at.pitch,ne.yawTarget=at.yawTarget,ne.pitchTarget=at.pitchTarget,ne.fovTarget=xh(ne.baseFov+at.fovTarget-at.baseFov),ne.fov=ne.fovTarget,tt=ne,F()}t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.setSize(innerWidth,innerHeight),G.setPixelRatio(t.getPixelRatio()),G.setSize(innerWidth,innerHeight),qt();let X=t.getPixelRatio();St.resize(innerHeight,X),j.material.uniforms.resolution.value.set(1/(innerWidth*X),1/(innerHeight*X)),v.material.uniforms.uDpr.value=X,R.material.uniforms.uDpr.value=X,E.material.uniforms.uDpr.value=X,S.material.uniforms.uDpr.value=X,x.material.uniforms.uDpr.value=X,ft.powder.material.uniforms.uDpr.value=X,ft.room.steamMaterial.uniforms.uDpr.value=X}if(window.addEventListener("resize",cn),document.addEventListener("visibilitychange",()=>{mt=!document.hidden,It.getDelta(),mt?W.resume():W.pauseForHidden()}),i.addEventListener("webglcontextlost",X=>{X.preventDefault(),_i("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6682\u505C\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002")}),cn(),ot(Number(Ln.get("view")||0),!0),Ln.get("day")==="1"&&$t(!1),Ln.has("room")){s=hh(V,1,n.position,l.target),V=null;let X=ss.findIndex(at=>at.id===Ln.get("room"));yt(X>=0?X:Number(Ln.get("room"))||0,!0)}let $e=null,or=t.getContext(),ar=or.getExtension("WEBGL_debug_renderer_info"),ni=ar?or.getParameter(ar.UNMASKED_RENDERER_WEBGL):"unavailable";function rs(){return{ready:!0,revision:"1.7.0",webgl:t.capabilities.isWebGL2?"WebGL 2":"WebGL",gpu:ni,viewport:[innerWidth,innerHeight],pixelRatio:t.getPixelRatio(),drawCallsAllPasses:t.info.render.calls,trianglesAllPasses:t.info.render.triangles,modelTriangles:m,fps:Math.round(lt),view:Tt,camera:n.position.toArray(),cameraClearance:Number(n.position.distanceTo(qe.center).toFixed(2)),transition:!!V||!!Mt,navigation:{mode:tt?"interior":"exterior",room:tt?.view.id||null,roomIndex:Et,near:n.near,fov:n.fov,look:tt?[tt.yaw,tt.pitch]:null,lensTarget:tt?.fovTarget||null,fade:P,exteriorControlsEnabled:l.enabled},night:Number(Y.toFixed(3)),autoOrbit:l.autoRotate,uiHidden:document.body.classList.contains("ui-hidden"),snow:v.diagnostics(),story:ft.diagnostics(),particles:St.diagnostics(),life:{people:p.count+2,fairyLights:x.count,windTime:d.uniforms.uWindTime.value,windGust:d.uniforms.uWindGust.value,walkerPosition:p.people[1].g.position.toArray(),walkingLegAngle:p.people[1].legs[0].rotation.x,conductorArm:p.people[0].arms[1].rotation.z,locomotive:R.diagnostics(),pressureValve:E.diagnostics(),chimney:S.diagnostics(),christmasVisitors:y.diagnostics(),lighting:{projectedLights:M.count,volumetricBeams:M.volumes,windowApertures:M.windows,shadowMaps:M.shadowMaps,depthClipped:!0,shadowClipped:!0,interiorRooms:!0,interiorShadowMaps:f.interiorLights.filter(X=>X.castShadow).length}},audio:W.diagnostics(),externalRequests:performance.getEntriesByType("resource").filter(X=>new URL(X.name).origin!==location.origin&&!X.name.startsWith("data:")).map(X=>X.name),errors:$r.slice()}}if(window.WinterStation={ready:!0,view:ot,shake:wt,setNight:$t,diagnostics:rs,toggleUI:Ae,controls:l,scene:e,camera:n,renderer:t,snow:v},Ln.has("qa")&&($e=document.createElement("pre"),$e.id="qa-output",$e.className="ui",$e.style.cssText="position:fixed;z-index:8;right:20px;top:80px;max-height:75vh;overflow:auto;background:#071319e8;color:#bbd9d0;font:10px monospace;padding:12px;border:1px solid #426461;max-width:340px;pointer-events:none",document.body.append($e)),Ln.has("qa")){let X=document.createElement("div");X.id="qa-controls",X.className="ui",X.style.cssText="position:fixed;right:20px;bottom:105px;display:flex;gap:5px;z-index:8";for(let[at,ne,Re]of[["qa-depart","\u53D1\u8F66\u7247\u6BB5",()=>ft.seek(6.5)],["qa-delivery","\u6295\u9012\u7247\u6BB5",()=>ft.seek(32)],["qa-landing","\u843D\u5730\u661F\u5149",()=>ft.seek(38)],["qa-window","\u7A97\u8FB9\u95EE\u5019",()=>ft.room.greet(1,Ct)],["qa-start","\u5FAA\u73AF\u8D77\u70B9",()=>ft.seek(0)]]){let wn=document.createElement("button");wn.id=at,wn.textContent=ne,wn.style.cssText="background:#253839;color:#e1ca9d;border:1px solid #687266;padding:8px;font-size:10px",wn.onclick=Re,X.append(wn)}document.body.append(X)}let os=0,lr="";function Ni(){requestAnimationFrame(Ni);let X=It.getDelta(),at=Math.min(X,1),ne=Math.min(X,.035);if(!mt)return;if(Ct+=at,ce(at),V){let A=V;A.t+=at;let z=Math.min(1,A.t/A.duration);s=hh(A,z,n.position,l.target),qt(),n.lookAt(l.target),z>=1&&(V=null,l.enabled=!0,l.update(0),document.body.dataset.travel="ready")}else!tt&&!Mt&&l.update(at);Math.abs(L-Lt)>1e-5&&(L=he.damp(L,Lt,4.5,at),qt()),Y=he.damp(Y,ut,1.3,at),e.background.copy(ht).lerp(st,Y),e.fog.color.copy(e.background),D.intensity=he.lerp(2.5,.75,Y),N.intensity=he.lerp(3.7,1.35,Y),N.color.copy(Ut).lerp(rt,Y),O.intensity=he.lerp(1.5,1.6,Y),B.intensity=he.lerp(1.2,.48,Y),e.environmentIntensity=he.lerp(.58,.3,Y),et.intensity=he.lerp(.5,1.5,Y),c.warm.emissiveIntensity=he.lerp(.1,.38,Y),c.lampGlass.emissiveIntensity=he.lerp(.03,.17,Y),c.ember.emissiveIntensity=he.lerp(1.3,2.3,Y);let Re=Math.floor(Ct*20);f.interiorLights.forEach(A=>{A.intensity=he.lerp(.7,6.5,Y)*(tt?.55:1),(Re!==T||ct<1.8)&&(A.shadow.needsUpdate=!0)}),T=Re,tt&&(et.intensity=he.lerp(.3,.85,Y)),c.windowGlass.emissiveIntensity=he.lerp(.01,.05,Y),f.lights.forEach((A,z)=>A.intensity=(.35+Y*1)*(1+Math.sin(Ct*1.6+z*2)*.018)),w.forEach(A=>A.material.opacity=.04+Y*.09),v.material.uniforms.uBrightness.value=.76+Y*.18,ct+=at;let wn=ct<1.8?Math.exp(-ct*3.2):0;h.rotation.z=Math.sin(ct*21)*.025*wn,h.rotation.x=Math.sin(ct*17)*.013*wn;let hn=ft.update(at,Ct,Y);St.update(at,Ct,Y,{clock:ft.time,dropAge:hn.dropAge}),v.setTrainOffset(hn.trainOffset);let cr=Math.max(1,Math.ceil(at*60));for(let A=0;A<cr;A++)v.update(at/cr,Ct-at+(A+1)*at/cr,hn.gust);R.update(Ct),E.update(Ct),S.update(Ct),d.update(Ct,v.energy*.6,hn.gust),x.update(Ct,Y),w.at(-1).position.copy(g.headPos),Kt("#story").setAttribute("aria-pressed",ft.running),document.body.dataset.gift=ft.delivery.stage,document.body.dataset.story=hn.phase,lr!==hn.phase&&(Kt("#story-moment").textContent="\u8F66\u7AD9\u5C0F\u6545\u4E8B \xB7 "+hn.phase,lr=hn.phase),tt&&F(at),M.update(Ct,Y,n,$.normalRenderTarget,!!tt),ct>13&&ct<14&&(Kt("#shake-state").textContent="\u6BCF\u4E00\u7247\u96EA\uFF0C\u90FD\u627E\u5230\u4E86\u81EA\u5DF1\u7684\u5F52\u5904\u3002"),document.body.dataset.lighting=Y<.005?"day":Y>.995?"night":"changing",t.info.autoReset=!1,t.info.reset(),t.shadowMap.needsUpdate=!0,$.overrideVisibility(),$.renderOverride(t,$.normalMaterial,$.normalRenderTarget,7829503,1),$.restoreVisibility(),G.render(),zt++,ie+=X,os+=at,ie>1&&(lt=zt/ie,ie=0,zt=0),$e&&os>.5&&($e.textContent=JSON.stringify(rs(),null,2),os=0)}t.compile(e,n),Ni(),setTimeout(()=>{Kt("#loading").classList.add("done"),document.body.dataset.ready="true"},300),!Ln.has("still")&&!Zr&&setTimeout(()=>{Tt===0&&!V&&Bt(!0)},3400),console.info("Winter Station ready",{triangles:m,version:"170",offline:!0})}t_().catch(Qv);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

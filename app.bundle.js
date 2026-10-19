(()=>{var Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Qc=1,pd=2;var hu=1,cc=2,Zn=3,An=0,We=1,ln=2,Ie=0,ds=1,pn=2,th=3,eh=4,hc=5,fn=100,md=101,gd=102,_d=103,xd=104,Us=200,vd=201,yd=202,Sd=203,Ha=204,Va=205,ko=206,Md=207,Ho=208,bd=209,Ed=210,wd=211,Td=212,Ad=213,Rd=214,Ga=0,Wa=1,Xa=2,gs=3,qa=4,Ya=5,Za=6,$a=7,uu=0,Cd=1,Pd=2,gi=0,uc=1,dc=2,fc=3,gr=4,Id=5,pc=6,mc=7;var du=300,_s=301,xs=302,Ja=303,Ka=304,Vo=306,jn=1e3,Di=1001,ja=1002,Xe=1003,Dd=1004;var Rr=1005;var Nn=1006,aa=1007;var Li=1008;var Rn=1009,fu=1010,pu=1011,sr=1012,gc=1013,Ui=1014,$n=1015,tn=1016,_c=1017,xc=1018,xi=1020,mu=35902,gu=1021,_u=1022,cn=1023,xu=1024,vu=1025,fs=1026,vi=1027,yu=1028,vc=1029,Su=1030,yc=1031;var Sc=1033,so=33776,ro=33777,oo=33778,ao=33779,Qa=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,vl=37821,lo=36492,yl=36494,Sl=36495,Mu=36283,Ml=36284,bl=36285,El=36286;var co=2300,wl=2301,la=2302,nh=2400,ih=2401,sh=2402;var Ld=3200,Mc=3201;var bc=0,Ud=1,Un="",Ge="srgb",Ns="srgb-linear",Go="linear",de="srgb";var qi=7680;var rh=519,Nd=512,Fd=513,Od=514,bu=515,Bd=516,zd=517,kd=518,Hd=519,Tl=35044,Eu=35048;var oh="300 es",Jn=2e3,ho=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,Qs=Math.PI/180,vs=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Ec(i,t){return(i%t+t)%t}function Vd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gd(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Wd(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Xd(i,t=1){return t-Math.abs(Ec(i,t*2)-t)}function qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $d(i,t){return i+Math.random()*(t-i)}function Jd(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(ah=i);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(i){return i*Qs}function Qd(i){return i*vs}function tf(i){return(i&i-1)===0&&i!==0}function ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),p=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var we={DEG2RAD:Qs,RAD2DEG:vs,generateUUID:Fn,clamp:Pe,euclideanModulo:Ec,mapLinear:Vd,inverseLerp:Gd,lerp:tr,damp:Wd,pingpong:Xd,smoothstep:qd,smootherstep:Yd,randInt:Zd,randFloat:$d,randFloatSpread:Jd,seededRandom:Kd,degToRad:jd,radToDeg:Qd,isPowerOfTwo:tf,ceilPowerOfTwo:ef,floorPowerOfTwo:nf,setQuaternionFromProperEuler:sf,normalize:pe,denormalize:wn},X=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=s[0],d=s[3],f=s[6],E=s[1],v=s[4],x=s[7],C=s[2],b=s[5],T=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*d+o*v+l*b,r[6]=a*f+o*x+l*T,r[1]=c*_+h*E+u*C,r[4]=c*d+h*v+u*b,r[7]=c*f+h*x+u*T,r[2]=p*_+m*E+g*C,r[5]=p*d+m*v+g*b,r[8]=p*f+m*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,g=e*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=p*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ca=new $t;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){let i=uo("canvas");return i.style.display="block",i}var lh={};function Ks(i){i in lh||(lh[i]=!0,console.warn(i))}function of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function af(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Go:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ch=[.64,.33,.3,.6,.15,.06],hh=[.2126,.7152,.0722],uh=[.3127,.329],dh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ns]:{primaries:ch,whitePoint:uh,transfer:Go,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:ch,whitePoint:uh,transfer:de,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});var Yi,Al=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=uo("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cf=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hf=0,Qe=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=Nn,a=Li,o=cn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=du;Qe.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],_=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(m+1)/2,C=(f+1)/2,b=(h+p)/4,T=(u+_)/4,I=(g+d)/4;return v>x&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=T/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(u-_)/E,this.z=(p-h)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==p||c!==m||h!==g){let d=1-o,f=l*p+c*m+h*g+u*_,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let C=Math.sqrt(v),b=Math.atan2(C,f*E);d=Math.sin(d*b)/C,o=Math.sin(o*b)/C}let x=o*E;if(l=l*d+p*x,c=c*d+m*x,h=h*d+g*x,u=u*d+_*x,d===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*p,t[e+1]=l*g+h*p+c*u-o*m,t[e+2]=c*g+h*m+o*p-l*u,t[e+3]=h*g-o*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new L,ph=new Cn,ti=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Pr.subVectors(this.max,Gs),Zi.subVectors(t.a,Gs),$i.subVectors(t.b,Gs),Ji.subVectors(t.c,Gs),ci.subVectors($i,Zi),hi.subVectors(Ji,$i),Ei.subVectors(Zi,Ji);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ei.y,Ei.x,0];return!da(e,Zi,$i,Ji,Pr)||(e=[1,0,0,0,1,0,0,0,1],!da(e,Zi,$i,Ji,Pr))?!1:(Ir.crossVectors(ci,hi),e=[Ir.x,Ir.y,Ir.z],da(e,Zi,$i,Ji,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,Cr=new ti,Zi=new L,$i=new L,Ji=new L,ci=new L,hi=new L,Ei=new L,Gs=new L,Pr=new L,Ir=new L,wi=new L;function da(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var uf=new ti,Ws=new L,fa=new L,ys=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(fa)),this.expandByPoint(Ws.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new L,pa=new L,Dr=new L,ui=new L,ma=new L,Lr=new L,ga=new L,Ss=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(pa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),o=ui.dot(this.direction),l=-ui.dot(Dr),c=ui.lengthSq(),h=Math.abs(1-a*a),u,p,m,g;if(h>0)if(u=a*l-o,p=a*o-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(Dr,p),m}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),Lr.subVectors(n,t),ga.crossVectors(ma,Lr);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let l=o*this.direction.dot(Lr.crossVectors(ui,Lr));if(l<0)return null;let c=o*this.direction.dot(ma.cross(ui));if(c<0||l+c>a)return null;let h=-o*ui.dot(ga);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,d)}set(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=p-_*c,e[9]=-o*l,e[2]=_-p*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*h,m=l*u,g=c*h,_=c*u;e[0]=p+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*h,m=l*u,g=c*h,_=c*u;e[0]=p-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+_,e[1]=l*u,e[5]=_*c+p,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-p*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=p-_*u}else if(t.order==="XZY"){let p=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,ff)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(n,on),di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(n,on)),di.normalize(),Ur.crossVectors(on,di),s[0]=di.x,s[4]=Ur.x,s[8]=on.x,s[1]=di.y,s[5]=Ur.y,s[9]=on.y,s[2]=di.z,s[6]=Ur.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],d=n[10],f=n[14],E=n[3],v=n[7],x=n[11],C=n[15],b=s[0],T=s[4],I=s[8],M=s[12],y=s[1],P=s[5],z=s[9],F=s[13],O=s[2],j=s[6],k=s[10],it=s[14],G=s[3],nt=s[7],at=s[11],gt=s[15];return r[0]=a*b+o*y+l*O+c*G,r[4]=a*T+o*P+l*j+c*nt,r[8]=a*I+o*z+l*k+c*at,r[12]=a*M+o*F+l*it+c*gt,r[1]=h*b+u*y+p*O+m*G,r[5]=h*T+u*P+p*j+m*nt,r[9]=h*I+u*z+p*k+m*at,r[13]=h*M+u*F+p*it+m*gt,r[2]=g*b+_*y+d*O+f*G,r[6]=g*T+_*P+d*j+f*nt,r[10]=g*I+_*z+d*k+f*at,r[14]=g*M+_*F+d*it+f*gt,r[3]=E*b+v*y+x*O+C*G,r[7]=E*T+v*P+x*j+C*nt,r[11]=E*I+v*z+x*k+C*at,r[15]=E*M+v*F+x*it+C*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*m-n*l*m)+_*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],f=t[15],E=u*d*c-_*p*c+_*l*m-o*d*m-u*l*f+o*p*f,v=g*p*c-h*d*c-g*l*m+a*d*m+h*l*f-a*p*f,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*f+a*u*f,C=g*u*l-h*_*l-g*o*p+a*_*p+h*o*d-a*u*d,b=e*E+n*v+s*x+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=E*T,t[1]=(_*p*r-u*d*r-_*s*m+n*d*m+u*s*f-n*p*f)*T,t[2]=(o*d*r-_*l*r+_*s*c-n*d*c-o*s*f+n*l*f)*T,t[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*m-n*l*m)*T,t[4]=v*T,t[5]=(h*d*r-g*p*r+g*s*m-e*d*m-h*s*f+e*p*f)*T,t[6]=(g*l*r-a*d*r-g*s*c+e*d*c+a*s*f-e*l*f)*T,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*m+e*l*m)*T,t[8]=x*T,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*T,t[12]=C*T,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*d+e*u*d)*T,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*d-e*o*d)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*p+e*o*p)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,g=r*u,_=a*h,d=a*u,f=o*u,E=l*c,v=l*h,x=l*u,C=n.x,b=n.y,T=n.z;return s[0]=(1-(_+f))*C,s[1]=(m+x)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(m-x)*b,s[5]=(1-(p+f))*b,s[6]=(d+E)*b,s[7]=0,s[8]=(g+v)*T,s[9]=(d-E)*T,s[10]=(1-(p+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),m,g;if(o===Jn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ho)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),p=(e+t)*c,m=(n+s)*h,g,_;if(o===Jn)g=(a+r)*u,_=-2*u;else if(o===ho)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new L,Mn=new oe,df=new L(0,0,0),ff=new L(1,1,1),di=new L,Ur=new L,on=new L,mh=new oe,gh=new Cn,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pf=0,_h=new L,ji=new Cn,Xn=new oe,Nr=new L,Xs=new L,mf=new L,gf=new Cn,xh=new L(1,0,0),vh=new L(0,1,0),yh=new L(0,0,1),Sh={type:"added"},_f={type:"removed"},Qi={type:"childadded",child:null},_a={type:"childremoved",child:null},De=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new On,n=new Cn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return _h.copy(t).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Xs,Nr,this.up):Xn.lookAt(Nr,Xs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Xn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new L,qn=new L,xa=new L,Yn=new L,ts=new L,es=new L,Mh=new L,va=new L,ya=new L,Sa=new L,Ma=new ge,ba=new ge,Ea=new ge,mi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),qn.subVectors(n,e),xa.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(qn),l=bn.dot(xa),c=qn.dot(qn),h=qn.dot(xa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ma.setScalar(0),ba.setScalar(0),Ea.setScalar(0),Ma.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(ba,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),qn.subVectors(t,e),bn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),es.subVectors(r,n),va.subVectors(t,n);let l=ts.dot(va),c=es.dot(va);if(l<=0&&c<=0)return e.copy(n);ya.subVectors(t,s);let h=ts.dot(ya),u=es.dot(ya);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);Sa.subVectors(t,r);let m=ts.dot(Sa),g=es.dot(Sa);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Mh.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Mh,o);let f=1/(d+_+p);return a=_*f,o=p*f,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Ec(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wa(a,r,t+1/3),this.g=wa(a,r,t),this.b=wa(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return re.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Pe(Ve.r*255,0,255))*65536+Math.round(Pe(Ve.g*255,0,255))*256+Math.round(Pe(Ve.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ge){re.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Fr);let n=tr(fi.h,Fr.h,e),s=tr(fi.s,Fr.s,e),r=tr(fi.l,Fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Pt;Pt.NAMES=Tu;var xf=0,Bn=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Fn(),this.name="",this.blending=ds,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ei=class extends Bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new L,Or=new X,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}};var go=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zt=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},vf=0,dn=new oe,Ta=new De,ns=new L,an=new ti,qs=new ti,Fe=new L,ae=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?_o:go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(an.min,qs.min),an.expandByPoint(Fe),Fe.addVectors(an.max,qs.max),an.expandByPoint(Fe)):(an.expandByPoint(qs.min),an.expandByPoint(qs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Fe.add(ns)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;let c=new L,h=new L,u=new L,p=new X,m=new X,g=new X,_=new L,d=new L;function f(I,M,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(p),g.sub(p);let P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[M].add(_),o[y].add(_),l[I].add(d),l[M].add(d),l[y].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,M=E.length;I<M;++I){let y=E[I],P=y.start,z=y.count;for(let F=P,O=P+z;F<O;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new L,x=new L,C=new L,b=new L;function T(I){C.fromBufferAttribute(s,I),b.copy(C);let M=o[I];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(b,M);let P=x.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,M=E.length;I<M;++I){let y=E[I],P=y.start,z=y.count;for(let F=P,O=P+z;F<O;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new Ee(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new oe,Ti=new Ss,Br=new ys,Eh=new L,zr=new L,kr=new L,Hr=new L,Aa=new L,Vr=new L,wh=new L,Gr=new L,ze=class extends De{constructor(t=new ae,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Aa.fromBufferAttribute(u,t),a?Vr.addScaledVector(Aa,h):Vr.addScaledVector(Aa.sub(e),h))}e.add(Vr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Br.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Br,Eh)===null||Ti.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(bh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let d=p[g],f=a[d.materialIndex],E=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let x=E,C=v;x<C;x+=3){let b=o.getX(x),T=o.getX(x+1),I=o.getX(x+2);s=Wr(this,f,t,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let E=o.getX(d),v=o.getX(d+1),x=o.getX(d+2);s=Wr(this,a,t,n,c,h,u,E,v,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let d=p[g],f=a[d.materialIndex],E=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let x=E,C=v;x<C;x+=3){let b=x,T=x+1,I=x+2;s=Wr(this,f,t,n,c,h,u,b,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let E=d,v=d+1,x=d+2;s=Wr(this,a,t,n,c,h,u,E,v,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function yf(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Hr);let h=yf(i,t,e,n,zr,kr,Hr,wh);if(h){let u=new L;mi.getBarycoord(wh,zr,kr,Hr,u),s&&(h.uv=mi.getInterpolatedAttribute(s,o,l,c,u,new X)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,l,c,u,new X)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new L,materialIndex:0};mi.getNormal(zr,kr,Hr,p.normal),h.face=p,h.barycoord=u}return h}var ni=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(_,d,f,E,v,x,C,b,T,I,M){let y=x/T,P=C/I,z=x/2,F=C/2,O=b/2,j=T+1,k=I+1,it=0,G=0,nt=new L;for(let at=0;at<k;at++){let gt=at*P-F;for(let Bt=0;Bt<j;Bt++){let Qt=Bt*y-z;nt[_]=Qt*E,nt[d]=gt*v,nt[f]=O,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[d]=0,nt[f]=b>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Bt/T),u.push(1-at/I),it+=1}}for(let at=0;at<I;at++)for(let gt=0;gt<T;gt++){let Bt=p+gt+j*at,Qt=p+gt+j*(at+1),q=p+(gt+1)+j*(at+1),Q=p+(gt+1)+j*at;l.push(Bt,Qt,Q),l.push(Qt,q,Q),G+=6}o.addGroup(m,G,M),m+=G,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var en={clone:Ms,merge:$e},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends Bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xo=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new L,Th=new X,Ah=new X,Be=class extends xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Th,Ah),e.subVectors(Ah,Th)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,Pl=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Be(is,ss,t,e);r.layers=this.layers,this.add(r);let a=new Be(is,ss,t,e);a.layers=this.layers,this.add(a);let o=new Be(is,ss,t,e);o.layers=this.layers,this.add(o);let l=new Be(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new Be(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vo=class extends Qe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Ie});r.uniforms.tEquirect.value=e;let a=new ze(s,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Nn),new Pl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ra=new L,Ef=new L,wf=new $t,En=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ra.subVectors(n,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wf.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new ys,Xr=new L,rr=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],_=s[10],d=s[11],f=s[12],E=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,d-m,x-f).normalize(),n[1].setComponents(l+r,p+c,d+m,x+f).normalize(),n[2].setComponents(l+a,p+h,d+g,x+E).normalize(),n[3].setComponents(l-a,p-h,d-g,x-E).normalize(),n[4].setComponents(l-o,p-u,d-_,x-v).normalize(),e===Jn)n[5].setComponents(l+o,p+u,d+_,x+v).normalize();else if(e===ho)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){let g=u[p],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zn=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,p=e/l,m=[],g=[],_=[],d=[];for(let f=0;f<h;f++){let E=f*p-a;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-E,0),_.push(0,0,1),d.push(v/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let v=E+c*f,x=E+c*(f+1),C=E+1+c*(f+1),b=E+1+c*f;m.push(v,x,b),m.push(x,C,b)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Tp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Lf,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:Zf,color_vertex:$f,common:Jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:tp,emissivemap_fragment:ep,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:xp,lights_toon_fragment:yp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:Ep,lights_physical_pars_fragment:wp,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Rp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Dp,map_fragment:Lp,map_pars_fragment:Up,map_particle_fragment:Np,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Gp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Qp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:xm,tonemapping_pars_fragment:vm,transmission_fragment:ym,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Em,worldpos_vertex:wm,background_vert:Tm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Im,depth_vert:Dm,depth_frag:Lm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:Fm,equirect_frag:Om,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Hm,meshlambert_vert:Vm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:$m,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},xt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ln={basic:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:$e([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:$e([xt.lights,xt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ln.physical={uniforms:$e([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var qr={r:0,b:0,g:0},Ri=new On,o0=new oe;function a0(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1,x=g(E);x===null?f(o,l):x&&x.isColor&&(f(x,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Vo)?(h===void 0&&(h=new ze(new ni(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Ms(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Ri)),h.material.toneMapped=re.getTransfer(x.colorSpace)!==de,(u!==x||p!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ze(new zn(2,2),new le({name:"BackgroundMaterial",uniforms:Ms(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=re.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(qr,Au(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:d}}function l0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(y,P,z,F,O){let j=!1,k=u(F,z,P);r!==k&&(r=k,c(r.object)),j=m(y,F,z,O),j&&g(y,F,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(y,P,z,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,z){let F=z.wireframe===!0,O=n[y.id];O===void 0&&(O={},n[y.id]=O);let j=O[P.id];j===void 0&&(j={},O[P.id]=j);let k=j[F];return k===void 0&&(k=p(l()),j[F]=k),k}function p(y){let P=[],z=[],F=[];for(let O=0;O<e;O++)P[O]=0,z[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,P,z,F){let O=r.attributes,j=P.attributes,k=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let at=O[G],gt=j[G];if(gt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),at===void 0||at.attribute!==gt||gt&&at.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(y,P,z,F){let O={},j=P.attributes,k=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let at=j[G];at===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));let gt={};gt.attribute=at,at&&at.data&&(gt.data=at.data),O[G]=gt,k++}r.attributes=O,r.attributesNum=k,r.index=F}function _(){let y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function d(y){f(y,0)}function f(y,P){let z=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;z[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),O[y]!==P&&(i.vertexAttribDivisor(y,P),O[y]=P)}function E(){let y=r.newAttributes,P=r.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function v(y,P,z,F,O,j,k){k===!0?i.vertexAttribIPointer(y,P,z,O,j):i.vertexAttribPointer(y,P,z,F,O,j)}function x(y,P,z,F){_();let O=F.attributes,j=z.getAttributes(),k=P.defaultAttributeValues;for(let it in j){let G=j[it];if(G.location>=0){let nt=O[it];if(nt===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){let at=nt.normalized,gt=nt.itemSize,Bt=t.get(nt);if(Bt===void 0)continue;let Qt=Bt.buffer,q=Bt.type,Q=Bt.bytesPerElement,Mt=q===i.INT||q===i.UNSIGNED_INT||nt.gpuType===gc;if(nt.isInterleavedBufferAttribute){let rt=nt.data,Tt=rt.stride,At=nt.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)f(G.location+It,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<G.locationSize;It++)d(G.location+It);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let It=0;It<G.locationSize;It++)v(G.location+It,gt/G.locationSize,q,at,Tt*Q,(At+gt/G.locationSize*It)*Q,Mt)}else{if(nt.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)f(G.location+rt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<G.locationSize;rt++)v(G.location+rt,gt/G.locationSize,q,at,gt*Q,gt/G.locationSize*rt*Q,Mt)}}else if(k!==void 0){let at=k[it];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(G.location,at);break;case 3:i.vertexAttrib3fv(G.location,at);break;case 4:i.vertexAttrib4fv(G.location,at);break;default:i.vertexAttrib1fv(G.location,at)}}}}E()}function C(){I();for(let y in n){let P=n[y];for(let z in P){let F=P[z];for(let O in F)h(F[O].object),delete F[O];delete P[z]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let z in P){let F=P[z];for(let O in F)h(F[O].object),delete F[O];delete P[z]}delete n[y.id]}function T(y){for(let P in n){let z=n[P];if(z[y.id]===void 0)continue;let F=z[y.id];for(let O in F)h(F[O].object),delete F[O];delete z[y.id]}}function I(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function c0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,p){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function u0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new En,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){let g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let E=r?0:n,v=E*4,x=f.clippingState||null;l.value=x,x=h(g,p,v,m);for(let C=0;C!==v;++C)x[C]=e[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,g){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let f=m+_*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(E,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function d0(i){let t=new WeakMap;function e(a,o){return o===Ja?a.mapping=_s:o===Ka&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ja||o===Ka)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bs=class extends xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hs=4,Rh=[.125,.215,.35,.446,.526,.582],Ii=20,Ca=new bs,Ch=new Pt,Pa=null,Ia=0,Da=0,La=!1,Pi=(1+Math.sqrt(5))/2,rs=1/Pi,Ph=[new L(-Pi,rs,0),new L(Pi,rs,0),new L(-rs,0,Pi),new L(rs,0,Pi),new L(0,Pi,-rs),new L(0,Pi,rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,Ia,Da),this._renderer.xr.enabled=La,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:tn,format:cn,colorSpace:Ns,depthBuffer:!1},s=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){let e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,s){let o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ch),h.toneMapping=gi,h.autoClear=!1;let m=new ei({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new ze(new ni,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Ch),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;Yr(s,E*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ph[(s-r-1)%Ph.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):Ii;d>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ii}`);let f=[],E=0;for(let T=0;T<Ii;++T){let I=T/_,M=Math.exp(-I*I/2);f.push(M),T===0?E+=M:T<d&&(E+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;let x=this._sizeLods[s],C=3*x*(s>v-hs?s-v+hs:0),b=4*(this._cubeSize-x);Yr(e,C,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Ca)}};function f0(i){let t=[],e=[],n=[],s=i,r=i-hs+1+Rh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-hs?l=Rh[a-i+hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,f=1,E=new Float32Array(_*g*m),v=new Float32Array(d*g*m),x=new Float32Array(f*g*m);for(let b=0;b<m;b++){let T=b%3*2/3-1,I=b>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];E.set(M,_*g*b),v.set(p,d*g*b);let y=[b,b,b,b,b,b];x.set(y,f*g*b)}let C=new ae;C.setAttribute("position",new Ee(E,_)),C.setAttribute("uv",new Ee(v,d)),C.setAttribute("faceIndex",new Ee(x,f)),t.push(C),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){let n=new Float32Array(Ii),s=new L(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Dh(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function Lh(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ie,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function m0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ja||l===Ka,h=l===_s||l===xs;if(c||h){let u=t.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Es(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Es(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function g0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let v=0,x=E.length;v<x;v+=3){let C=E[v+0],b=E[v+1],T=E[v+2];p.push(C,b,b,T,T,C)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,x=E.length/3-1;v<x;v+=3){let C=v+0,b=v+1,T=v+2;p.push(C,b,b,T,T,C)}}else return;let d=new(wu(p)?_o:go)(p,1);d.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function x0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*a,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];e.update(d,n,1)}function u(p,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*C*4*u),T=new po(b,x,C,u);T.type=$n,T.needsUpdate=!0;let I=v*4;for(let y=0;y<u;y++){let P=d[y],z=f[y],F=E[y],O=x*C*4*y;for(let j=0;j<P.count;j++){let k=j*I;m===!0&&(s.fromBufferAttribute(P,j),b[O+k+0]=s.x,b[O+k+1]=s.y,b[O+k+2]=s.z,b[O+k+3]=0),g===!0&&(s.fromBufferAttribute(z,j),b[O+k+4]=s.x,b[O+k+5]=s.y,b[O+k+6]=s.z,b[O+k+7]=0),_===!0&&(s.fromBufferAttribute(F,j),b[O+k+8]=s.x,b[O+k+9]=s.y,b[O+k+10]=s.z,b[O+k+11]=F.itemSize===4?s.w:1)}}p={count:u,texture:T,size:new X(x,C)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function S0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ws=class extends Qe{constructor(t,e,n,s,r,a,o,l,c,h=fs){if(h!==fs&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Ui),n===void 0&&h===vi&&(n=xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new Qe,Uh=new ws(1,1),Pu=new po,Iu=new Cl,Du=new vo,Nh=[],Fh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),zh=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=Fh[t];e===void 0&&(e=new Int32Array(t),Fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),Ue(e,n)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Ue(e,n)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),Ue(e,n)}}function C0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=bu,r=Uh):r=Cu,e.setTexture2D(t||r,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Du,s)}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function H0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return E0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z0(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function J0(i,t){i.uniform2iv(this.addr,t)}function K0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Cu,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Du,r[a])}function og(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pu,r[a])}function ag(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return $0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}var Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}},Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function kh(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){let n=i.name,s=n.length;for(Ua.lastIndex=0;;){let r=Ua.exec(n),a=Ua.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kh(e,c===void 0?new Dl(o,i,t):new Ll(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ul(o),kh(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);lg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cg=37297,hg=0;function ug(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Vh=new $t;function dg(i){re._getMatrix(Vh,re.workingColorSpace,i);let t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ug(i.getShaderSource(t),a)}else return s}function fg(i,t){let e=dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,t){let e;switch(t){case uc:e="Linear";break;case dc:e="Reinhard";break;case fc:e="Cineon";break;case gr:e="ACESFilmic";break;case pc:e="AgX";break;case mc:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zr=new L;function mg(){re.getLuminanceCoefficients(Zr);let i=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function _g(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function js(i){return i!==""}function Wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(vg,Sg)}var yg=new Map;function Sg(i,t){let e=Jt[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(Mg,bg)}function bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Eg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xs&&(t="ENVMAP_MODE_REFRACTION"),t}function Ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Pd:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Eg(e),c=wg(e),h=Tg(e),u=Ag(e),p=Rg(e),m=gg(e),g=_g(r),_=s.createProgram(),d,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`)):(d=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==gi?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=Nl(a),a=Wh(a,e),a=Xh(a,e),o=Nl(o),o=Wh(o,e),o=Xh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=E+d+a,x=E+f+o,C=Hh(s,s.VERTEX_SHADER,v),b=Hh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(C).trim(),O=s.getShaderInfoLog(b).trim(),j=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,b);else{let it=Gh(s,C,"vertex"),G=Gh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+it+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||O==="")&&(k=!1);k&&(P.diagnostics={runnable:j,programLog:z,vertexShader:{log:F,prefix:d},fragmentShader:{log:O,prefix:f}})}s.deleteShader(C),s.deleteShader(b),I=new ms(s,_),M=xg(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,cg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}var Pg=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ol(t),e.set(t,n)),n}},Ol=class{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}};function Ig(i,t,e,n,s,r,a){let o=new mo,l=new Fl,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,y,P,z,F){let O=z.fog,j=F.geometry,k=M.isMeshStandardMaterial?z.environment:null,it=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),G=it&&it.mapping===Vo?it.image.height:null,nt=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=at!==void 0?at.length:0,Bt=0;j.morphAttributes.position!==void 0&&(Bt=1),j.morphAttributes.normal!==void 0&&(Bt=2),j.morphAttributes.color!==void 0&&(Bt=3);let Qt,q,Q,Mt;if(nt){let fe=Ln[nt];Qt=fe.vertexShader,q=fe.fragmentShader}else Qt=M.vertexShader,q=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);let rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,qt=!!M.map,tt=!!M.matcap,lt=!!it,D=!!M.aoMap,Rt=!!M.lightMap,st=!!M.bumpMap,St=!!M.normalMap,ct=!!M.displacementMap,Ft=!!M.emissiveMap,yt=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,et=M.iridescence>0,$=M.sheen>0,wt=M.transmission>0,dt=S&&!!M.anisotropyMap,_t=B&&!!M.clearcoatMap,Wt=B&&!!M.clearcoatNormalMap,ot=B&&!!M.clearcoatRoughnessMap,vt=et&&!!M.iridescenceMap,Ot=et&&!!M.iridescenceThicknessMap,kt=$&&!!M.sheenColorMap,Et=$&&!!M.sheenRoughnessMap,jt=!!M.specularMap,Ht=!!M.specularColorMap,se=!!M.specularIntensityMap,R=wt&&!!M.transmissionMap,K=wt&&!!M.thicknessMap,H=!!M.gradientMap,J=!!M.alphaMap,pt=M.alphaTest>0,mt=!!M.alphaHash,Yt=!!M.extensions,Ae=gi;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let ke={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:Qt,fragmentShader:q,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ns,alphaToCoverage:!!M.alphaToCoverage,map:qt,matcap:tt,envMap:lt,envMapMode:lt&&it.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Rt,bumpMap:st,normalMap:St,displacementMap:p&&ct,emissiveMap:Ft,normalMapObjectSpace:St&&M.normalMapType===Ud,normalMapTangentSpace:St&&M.normalMapType===bc,metalnessMap:yt,roughnessMap:A,anisotropy:S,anisotropyMap:dt,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Wt,clearcoatRoughnessMap:ot,dispersion:Z,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Ot,sheen:$,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:jt,specularColorMap:Ht,specularIntensityMap:se,transmission:wt,transmissionMap:R,thicknessMap:K,gradientMap:H,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:mt,combine:M.combine,mapUv:qt&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:Rt&&_(M.lightMap.channel),bumpMapUv:st&&_(M.bumpMap.channel),normalMapUv:St&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:Ft&&_(M.emissiveMap.channel),metalnessMapUv:yt&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:dt&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(M.sheenRoughnessMap.channel),specularMapUv:jt&&_(M.specularMap.channel),specularColorMapUv:Ht&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:R&&_(M.transmissionMap.channel),thicknessMapUv:K&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(St||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(qt||J),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:qt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Yt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function f(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=g[M.type],P;if(y){let z=Ln[y];P=en.clone(z.uniforms)}else P=M.uniforms;return P}function C(M,y){let P;for(let z=0,F=h.length;z<F;z++){let O=h[z];if(O.cacheKey===y){P=O,++P.usedTimes;break}}return P===void 0&&(P=new Cg(i,y,M,r),h.push(P)),P}function b(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:I}}function Dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,m,g,_,d){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=d),t++,f}function o(u,p,m,g,_,d){let f=a(u,p,m,g,_,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,p,m,g,_,d){let f=a(u,p,m,g,_,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Lg),n.length>1&&n.sort(p||Zh),s.length>1&&s.sort(p||Zh)}function h(){for(let u=t,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ug(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new $h,i.set(n,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Fg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Og=0;function Bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){let t=new Ng,e=Fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new oe,a=new oe;function o(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,d=0,f=0,E=0,v=0,x=0,C=0,b=0,T=0;c.sort(Bg);for(let M=0,y=c.length;M<y;M++){let P=c[M],z=P.color,F=P.intensity,O=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*F,u+=z.g*F,p+=z.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);T++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,G=e.get(P);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=k,m++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(z).multiplyScalar(F),k.distance=O,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;let it=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,it.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=it.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,x++}_++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(z).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=k,d++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let it=P.shadow,G=e.get(P);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=k,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==d||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==v||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=d,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=T,n.version=Og++)}function l(c,h){let u=0,p=0,m=0,g=0,_=0,d=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let v=c[f];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),u++}else if(v.isSpotLight){let x=n.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),m++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Jh(i){let t=new zg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jh(i),t.set(s,[o])):r>=a.length?(o=new Jh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var or=class extends Bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bl=class extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Gg(i,t,e){let n=new rr,s=new X,r=new X,a=new ge,o=new or({depthPacking:Mc}),l=new Bl,c={},h=e.maxTextureSize,u={[An]:We,[We]:An,[ln]:ln},p=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let f=this.type;this.render=function(b,T,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ie),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=f!==Zn&&this.type===Zn,O=f===Zn&&this.type!==Zn;for(let j=0,k=b.length;j<k;j++){let it=b[j],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||F===!0||O===!0){let gt=this.type!==Zn?{minFilter:Xe,magFilter:Xe}:{};G.map!==null&&G.map.dispose(),G.map=new Oe(s.x,s.y,gt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let at=G.getViewportCount();for(let gt=0;gt<at;gt++){let Bt=G.getViewport(gt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(a),G.updateMatrices(it,gt),n=G.getFrustum(),x(T,I,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&E(G,I),G.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(M,y,P)};function E(b,T){let I=t.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Oe(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,p,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,m,_,null)}function v(b,T,I,M){let y=null,P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=y.uuid,F=T.uuid,O=c[z];O===void 0&&(O={},c[z]=O);let j=O[F];j===void 0&&(j=y.clone(),O[F]=j,T.addEventListener("dispose",C)),y=j}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=I}return y}function x(b,T,I,M,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let F=t.update(b),O=b.material;if(Array.isArray(O)){let j=F.groups;for(let k=0,it=j.length;k<it;k++){let G=j[k],nt=O[G.materialIndex];if(nt&&nt.visible){let at=v(b,nt,M,y);b.onBeforeShadow(i,b,T,I,F,at,G),i.renderBufferDirect(I,null,F,at,b,G),b.onAfterShadow(i,b,T,I,F,at,G)}}}else if(O.visible){let j=v(b,O,M,y);b.onBeforeShadow(i,b,T,I,F,j,null),i.renderBufferDirect(I,null,F,j,b,null),b.onAfterShadow(i,b,T,I,F,j,null)}}let z=b.children;for(let F=0,O=z.length;F<O;F++)x(z[F],T,I,M,y)}function C(b){b.target.removeEventListener("dispose",C);for(let I in c){let M=c[I],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Wg={[Ga]:Wa,[Xa]:Za,[qa]:$a,[gs]:Ya,[Wa]:Ga,[Za]:Xa,[$a]:qa,[Ya]:gs};function Xg(i,t){function e(){let R=!1,K=new ge,H=null,J=new ge(0,0,0,0);return{setMask:function(pt){H!==pt&&!R&&(i.colorMask(pt,pt,pt,pt),H=pt)},setLocked:function(pt){R=pt},setClear:function(pt,mt,Yt,Ae,ke){ke===!0&&(pt*=Ae,mt*=Ae,Yt*=Ae),K.set(pt,mt,Yt,Ae),J.equals(K)===!1&&(i.clearColor(pt,mt,Yt,Ae),J.copy(K))},reset:function(){R=!1,H=null,J.set(-1,0,0,0)}}}function n(){let R=!1,K=!1,H=null,J=null,pt=null;return{setReversed:function(mt){if(K!==mt){let Yt=t.get("EXT_clip_control");K?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=pt;pt=null,this.setClear(Ae)}K=mt},getReversed:function(){return K},setTest:function(mt){mt?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(mt){H!==mt&&!R&&(i.depthMask(mt),H=mt)},setFunc:function(mt){if(K&&(mt=Wg[mt]),J!==mt){switch(mt){case Ga:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=mt}},setLocked:function(mt){R=mt},setClear:function(mt){pt!==mt&&(K&&(mt=1-mt),i.clearDepth(mt),pt=mt)},reset:function(){R=!1,H=null,J=null,pt=null,K=!1}}}function s(){let R=!1,K=null,H=null,J=null,pt=null,mt=null,Yt=null,Ae=null,ke=null;return{setTest:function(fe){R||(fe?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(fe){K!==fe&&!R&&(i.stencilMask(fe),K=fe)},setFunc:function(fe,vn,Hn){(H!==fe||J!==vn||pt!==Hn)&&(i.stencilFunc(fe,vn,Hn),H=fe,J=vn,pt=Hn)},setOp:function(fe,vn,Hn){(mt!==fe||Yt!==vn||Ae!==Hn)&&(i.stencilOp(fe,vn,Hn),mt=fe,Yt=vn,Ae=Hn)},setLocked:function(fe){R=fe},setClear:function(fe){ke!==fe&&(i.clearStencil(fe),ke=fe)},reset:function(){R=!1,K=null,H=null,J=null,pt=null,mt=null,Yt=null,Ae=null,ke=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,m=[],g=null,_=!1,d=null,f=null,E=null,v=null,x=null,C=null,b=null,T=new Pt(0,0,0),I=0,M=!1,y=null,P=null,z=null,F=null,O=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=it>=2);let nt=null,at={},gt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Qt=new ge().fromArray(gt),q=new ge().fromArray(Bt);function Q(R,K,H,J){let pt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(R,mt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<H;Yt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(K+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return mt}let Mt={};Mt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(gs),st(!1),St(Qc),rt(i.CULL_FACE),D(Ie);function rt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Tt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function At(R,K){return u[R]!==K?(i.bindFramebuffer(R,K),u[R]=K,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function It(R,K){let H=m,J=!1;if(R){H=p.get(K),H===void 0&&(H=[],p.set(K,H));let pt=R.textures;if(H.length!==pt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Yt=pt.length;mt<Yt;mt++)H[mt]=i.COLOR_ATTACHMENT0+mt;H.length=pt.length,J=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,J=!0);J&&i.drawBuffers(H)}function qt(R){return g!==R?(i.useProgram(R),g=R,!0):!1}let tt={[fn]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};tt[_d]=i.MIN,tt[xd]=i.MAX;let lt={[Us]:i.ZERO,[vd]:i.ONE,[yd]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Ho]:i.DST_COLOR,[ko]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(R,K,H,J,pt,mt,Yt,Ae,ke,fe){if(R===Ie){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),R!==hc){if(R!==d||fe!==M){if((f!==fn||x!==fn)&&(i.blendEquation(i.FUNC_ADD),f=fn,x=fn),fe)switch(R){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,v=null,C=null,b=null,T.set(0,0,0),I=0,d=R,M=fe}return}pt=pt||K,mt=mt||H,Yt=Yt||J,(K!==f||pt!==x)&&(i.blendEquationSeparate(tt[K],tt[pt]),f=K,x=pt),(H!==E||J!==v||mt!==C||Yt!==b)&&(i.blendFuncSeparate(lt[H],lt[J],lt[mt],lt[Yt]),E=H,v=J,C=mt,b=Yt),(Ae.equals(T)===!1||ke!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ke),T.copy(Ae),I=ke),d=R,M=!1}function Rt(R,K){R.side===ln?Tt(i.CULL_FACE):rt(i.CULL_FACE);let H=R.side===We;K&&(H=!H),st(H),R.blending===ds&&R.transparent===!1?D(Ie):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let J=R.stencilWrite;o.setTest(J),J&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(R){y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),y=R)}function St(R){R!==fd?(rt(i.CULL_FACE),R!==P&&(R===Qc?i.cullFace(i.BACK):R===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),P=R}function ct(R){R!==z&&(k&&i.lineWidth(R),z=R)}function Ft(R,K,H){R?(rt(i.POLYGON_OFFSET_FILL),(F!==K||O!==H)&&(i.polygonOffset(K,H),F=K,O=H)):Tt(i.POLYGON_OFFSET_FILL)}function yt(R){R?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function A(R){R===void 0&&(R=i.TEXTURE0+j-1),nt!==R&&(i.activeTexture(R),nt=R)}function S(R,K,H){H===void 0&&(nt===null?H=i.TEXTURE0+j-1:H=nt);let J=at[H];J===void 0&&(J={type:void 0,texture:void 0},at[H]=J),(J.type!==R||J.texture!==K)&&(nt!==H&&(i.activeTexture(H),nt=H),i.bindTexture(R,K||Mt[R]),J.type=R,J.texture=K)}function B(){let R=at[nt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(R){Qt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Qt.copy(R))}function Et(R){q.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),q.copy(R))}function jt(R,K){let H=c.get(K);H===void 0&&(H=new WeakMap,c.set(K,H));let J=H.get(R);J===void 0&&(J=i.getUniformBlockIndex(K,R.name),H.set(R,J))}function Ht(R,K){let J=c.get(K).get(R);l.get(K)!==J&&(i.uniformBlockBinding(K,J,R.__bindingPointIndex),l.set(K,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,at={},u={},p=new WeakMap,m=[],g=null,_=!1,d=null,f=null,E=null,v=null,x=null,C=null,b=null,T=new Pt(0,0,0),I=0,M=!1,y=null,P=null,z=null,F=null,O=null,Qt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:At,drawBuffers:It,useProgram:qt,setBlending:D,setMaterial:Rt,setFlipSided:st,setCullFace:St,setLineWidth:ct,setPolygonOffset:Ft,setScissorTest:yt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:vt,texImage3D:Ot,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:ot,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:kt,viewport:Et,reset:se}}function Kh(i,t,e,n){let s=qg(n);switch(e){case gu:return i*t;case xu:return i*t;case vu:return i*t*2;case yu:return i*t/s.components*s.byteLength;case vc:return i*t/s.components*s.byteLength;case Su:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case _u:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case el:return Math.max(i,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case yl:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mu:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bl:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qg(i){switch(i){case Rn:case fu:return{byteLength:1,components:1};case sr:case pu:case tn:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Ui:case gc:case $n:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new X,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):uo("canvas")}function _(A,S,B){let Z=1,et=yt(A);if((et.width>B||et.height>B)&&(Z=B/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Z*et.width),wt=Math.floor(Z*et.height);u===void 0&&(u=g($,wt));let dt=S?g($,wt):u;return dt.width=$,dt.height=wt,dt.getContext("2d").drawImage(A,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+wt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function d(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,S,B,Z,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){let wt=et?Go:re.getTransfer(Z);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=wt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,S){let B;return A?S===null||S===Ui||S===xi?B=i.DEPTH24_STENCIL8:S===$n?B=i.DEPTH32F_STENCIL8:S===sr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===xi?B=i.DEPTH_COMPONENT24:S===$n?B=i.DEPTH_COMPONENT32F:S===sr&&(B=i.DEPTH_COMPONENT16),B}function C(A,S){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){let S=A.target;S.removeEventListener("dispose",b),I(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),y(S)}function I(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,Z=p.get(B);if(Z){let et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(A),Object.keys(Z).length===0&&p.delete(B)}n.remove(A)}function M(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,Z=p.get(B);delete Z[S.__cacheKey],a.memory.textures--}function y(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let Z=0,et=B.length;Z<et;Z++){let $=n.get(B[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(A)}let P=0;function z(){P=0}function F(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function O(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){let B=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function k(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function it(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function G(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let nt={[jn]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},at={[Xe]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},gt={[Nd]:i.NEVER,[Hd]:i.ALWAYS,[Fd]:i.LESS,[bu]:i.LEQUAL,[Od]:i.EQUAL,[kd]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function Bt(A,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===aa||S.magFilter===Rr||S.magFilter===Li||S.minFilter===Nn||S.minFilter===aa||S.minFilter===Rr||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==Rr&&S.minFilter!==Li||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));let Z=S.source,et=p.get(Z);et===void 0&&(et={},p.set(Z,et));let $=O(S);if($!==A.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[$].usedTimes++;let wt=et[A.__cacheKey];wt!==void 0&&(et[A.__cacheKey].usedTimes--,wt.usedTimes===0&&M(S)),A.__cacheKey=$,A.__webglTexture=et[$].texture}return B}function q(A,S,B){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);let et=Qt(A,S),$=S.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+B);let wt=n.get($);if($.version!==wt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);let dt=re.getPrimaries(re.workingColorSpace),_t=S.colorSpace===Un?null:re.getPrimaries(S.colorSpace),Wt=S.colorSpace===Un||dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let ot=_(S.image,!1,s.maxTextureSize);ot=Ft(S,ot);let vt=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type),kt=v(S.internalFormat,vt,Ot,S.colorSpace,S.isVideoTexture);Bt(Z,S);let Et,jt=S.mipmaps,Ht=S.isVideoTexture!==!0,se=wt.__version===void 0||et===!0,R=$.dataReady,K=C(S,ot);if(S.isDepthTexture)kt=x(S.format===vi,S.type),se&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,kt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,vt,Ot,null));else if(S.isDataTexture)if(jt.length>0){Ht&&se&&e.texStorage2D(i.TEXTURE_2D,K,kt,jt[0].width,jt[0].height);for(let H=0,J=jt.length;H<J;H++)Et=jt[H],Ht?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Et.width,Et.height,vt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,H,kt,Et.width,Et.height,0,vt,Ot,Et.data);S.generateMipmaps=!1}else Ht?(se&&e.texStorage2D(i.TEXTURE_2D,K,kt,ot.width,ot.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,vt,Ot,ot.data)):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,vt,Ot,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,kt,jt[0].width,jt[0].height,ot.depth);for(let H=0,J=jt.length;H<J;H++)if(Et=jt[H],S.format!==cn)if(vt!==null)if(Ht){if(R)if(S.layerUpdates.size>0){let pt=Kh(Et.width,Et.height,S.format,S.type);for(let mt of S.layerUpdates){let Yt=Et.data.subarray(mt*pt/Et.data.BYTES_PER_ELEMENT,(mt+1)*pt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,mt,Et.width,Et.height,1,vt,Yt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Et.width,Et.height,ot.depth,vt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,kt,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Et.width,Et.height,ot.depth,vt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,kt,Et.width,Et.height,ot.depth,0,vt,Ot,Et.data)}else{Ht&&se&&e.texStorage2D(i.TEXTURE_2D,K,kt,jt[0].width,jt[0].height);for(let H=0,J=jt.length;H<J;H++)Et=jt[H],S.format!==cn?vt!==null?Ht?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,Et.width,Et.height,vt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,H,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Et.width,Et.height,vt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,H,kt,Et.width,Et.height,0,vt,Ot,Et.data)}else if(S.isDataArrayTexture)if(Ht){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,kt,ot.width,ot.height,ot.depth),R)if(S.layerUpdates.size>0){let H=Kh(ot.width,ot.height,S.format,S.type);for(let J of S.layerUpdates){let pt=ot.data.subarray(J*H/ot.data.BYTES_PER_ELEMENT,(J+1)*H/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ot.width,ot.height,1,vt,Ot,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Ot,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,ot.width,ot.height,ot.depth,0,vt,Ot,ot.data);else if(S.isData3DTexture)Ht?(se&&e.texStorage3D(i.TEXTURE_3D,K,kt,ot.width,ot.height,ot.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Ot,ot.data)):e.texImage3D(i.TEXTURE_3D,0,kt,ot.width,ot.height,ot.depth,0,vt,Ot,ot.data);else if(S.isFramebufferTexture){if(se)if(Ht)e.texStorage2D(i.TEXTURE_2D,K,kt,ot.width,ot.height);else{let H=ot.width,J=ot.height;for(let pt=0;pt<K;pt++)e.texImage2D(i.TEXTURE_2D,pt,kt,H,J,0,vt,Ot,null),H>>=1,J>>=1}}else if(jt.length>0){if(Ht&&se){let H=yt(jt[0]);e.texStorage2D(i.TEXTURE_2D,K,kt,H.width,H.height)}for(let H=0,J=jt.length;H<J;H++)Et=jt[H],Ht?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt,Ot,Et):e.texImage2D(i.TEXTURE_2D,H,kt,vt,Ot,Et);S.generateMipmaps=!1}else if(Ht){if(se){let H=yt(ot);e.texStorage2D(i.TEXTURE_2D,K,kt,H.width,H.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ot,ot)}else e.texImage2D(i.TEXTURE_2D,0,kt,vt,Ot,ot);d(S)&&f(Z),wt.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,B){if(S.image.length!==6)return;let Z=Qt(A,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let $=n.get(et);if(et.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);let wt=re.getPrimaries(re.workingColorSpace),dt=S.colorSpace===Un?null:re.getPrimaries(S.colorSpace),_t=S.colorSpace===Un||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Wt&&!ot?vt[J]=_(S.image[J],!0,s.maxCubemapSize):vt[J]=ot?S.image[J].image:S.image[J],vt[J]=Ft(S,vt[J]);let Ot=vt[0],kt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),jt=v(S.internalFormat,kt,Et,S.colorSpace),Ht=S.isVideoTexture!==!0,se=$.__version===void 0||Z===!0,R=et.dataReady,K=C(S,Ot);Bt(i.TEXTURE_CUBE_MAP,S);let H;if(Wt){Ht&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,K,jt,Ot.width,Ot.height);for(let J=0;J<6;J++){H=vt[J].mipmaps;for(let pt=0;pt<H.length;pt++){let mt=H[pt];S.format!==cn?kt!==null?Ht?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,mt.width,mt.height,kt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,jt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,mt.width,mt.height,kt,Et,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,jt,mt.width,mt.height,0,kt,Et,mt.data)}}}else{if(H=S.mipmaps,Ht&&se){H.length>0&&K++;let J=yt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,K,jt,J.width,J.height)}for(let J=0;J<6;J++)if(ot){Ht?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,kt,Et,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,vt[J].width,vt[J].height,0,kt,Et,vt[J].data);for(let pt=0;pt<H.length;pt++){let Yt=H[pt].image[J].image;Ht?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Yt.width,Yt.height,kt,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,jt,Yt.width,Yt.height,0,kt,Et,Yt.data)}}else{Ht?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,kt,Et,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,kt,Et,vt[J]);for(let pt=0;pt<H.length;pt++){let mt=H[pt];Ht?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,kt,Et,mt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,jt,kt,Et,mt.image[J])}}}d(S)&&f(i.TEXTURE_CUBE_MAP),$.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Mt(A,S,B,Z,et,$){let wt=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),_t=v(B.internalFormat,wt,dt,B.colorSpace),Wt=n.get(S),ot=n.get(B);if(ot.__renderTarget=S,!Wt.__hasExternalTextures){let vt=Math.max(1,S.width>>$),Ot=Math.max(1,S.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,_t,vt,Ot,S.depth,0,wt,dt,null):e.texImage2D(et,$,_t,vt,Ot,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,ot.__webglTexture,0,st(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,ot.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,$=x(S.stencilBuffer,et),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=st(S);St(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{let Z=S.textures;for(let et=0;et<Z.length;et++){let $=Z[et],wt=r.convert($.format,$.colorSpace),dt=r.convert($.type),_t=v($.internalFormat,wt,dt,$.colorSpace),Wt=st(S);B&&St(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,_t,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let et=Z.__webglTexture,$=st(S);if(S.depthTexture.format===fs)St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===vi)St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function At(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[Z],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,S,B){let Z=n.get(A);S!==void 0&&Mt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&At(A)}function qt(A){let S=A.texture,B=n.get(A),Z=n.get(S);A.addEventListener("dispose",T);let et=A.textures,$=A.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let _t=0;_t<S.mipmaps.length;_t++)B.__webglFramebuffer[dt][_t]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,_t=et.length;dt<_t;dt++){let Wt=n.get(et[dt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let _t=et[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);let Wt=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),vt=v(_t.internalFormat,Wt,ot,_t.colorSpace,A.isXRRenderTarget===!0),Ot=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)Mt(B.__webglFramebuffer[dt][_t],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else Mt(B.__webglFramebuffer[dt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,_t=et.length;dt<_t;dt++){let Wt=et[dt],ot=n.get(Wt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Bt(i.TEXTURE_2D,Wt),Mt(B.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),d(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Bt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)Mt(B.__webglFramebuffer[_t],A,S,i.COLOR_ATTACHMENT0,dt,_t);else Mt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,dt,0);d(S)&&f(dt),e.unbindTexture()}A.depthBuffer&&At(A)}function tt(A){let S=A.textures;for(let B=0,Z=S.length;B<Z;B++){let et=S[B];if(d(et)){let $=E(A),wt=n.get(et).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}let lt=[],D=[];function Rt(A){if(A.samples>0){if(St(A)===!1){let S=A.textures,B=A.width,Z=A.height,et=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),dt=S.length>1;if(dt)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let Wt=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,et,i.NEAREST),l===!0&&(lt.length=0,D.length=0,lt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(lt.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let Wt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function St(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ft(A,S){let B=A.colorSpace,Z=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ns&&B!==Un&&(re.getTransfer(B)===de?(Z!==cn||et!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=St}function Zg(i,t){function e(n,s=Un){let r,a=re.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.BYTE;if(n===pu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===_u)return i.RGB;if(n===cn)return i.RGBA;if(n===xu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===Su)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===yl||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mu||n===Ml||n===bl||n===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var zl=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Tn=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),f=this._getHandJoint(c,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`,kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new le({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null,_=new kl,d=e.getContextAttributes(),f=null,E=null,v=[],x=[],C=new X,b=null,T=new Be;T.viewport=new ge;let I=new Be;I.viewport=new ge;let M=[T,I],y=new zl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new er,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new er,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new er,v[q]=Q),Q.getHandSpace()};function F(q){let Q=x.indexOf(q.inputSource);if(Q===-1)return;let Mt=v[Q];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,c||a),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){let Q=x[q];Q!==null&&(x[q]=null,v[q].disconnect(Q))}P=null,z=null,_.reset(),t.setRenderTarget(f),m=null,p=null,u=null,s=null,E=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Oe(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,Mt=null,rt=null;d.depth&&(rt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?vi:fs,Mt=d.stencil?xi:Ui);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new Oe(p.textureWidth,p.textureHeight,{format:cn,type:Rn,depthTexture:new ws(p.textureWidth,p.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let Q=0;Q<q.removed.length;Q++){let Mt=q.removed[Q],rt=x.indexOf(Mt);rt>=0&&(x[rt]=null,v[rt].disconnect(Mt))}for(let Q=0;Q<q.added.length;Q++){let Mt=q.added[Q],rt=x.indexOf(Mt);if(rt===-1){for(let At=0;At<v.length;At++)if(At>=x.length){x.push(Mt),rt=At;break}else if(x[At]===null){x[At]=Mt,rt=At;break}if(rt===-1)break}let Tt=v[rt];Tt&&Tt.connect(Mt)}}let k=new L,it=new L;function G(q,Q,Mt){k.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);let rt=k.distanceTo(it),Tt=Q.projectionMatrix.elements,At=Mt.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),qt=Tt[14]/(Tt[10]+1),tt=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],D=(Tt[8]-1)/Tt[0],Rt=(At[8]+1)/At[0],st=It*D,St=It*Rt,ct=rt/(-D+Rt),Ft=ct*-D;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ft),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let yt=It+ct,A=qt+ct,S=st-Ft,B=St+(rt-Ft),Z=tt*qt/A*yt,et=lt*qt/A*yt;q.projectionMatrix.makePerspective(S,B,Z,et,yt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,Mt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),y.near=I.near=T.near=Q,y.far=I.far=T.far=Mt,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),T.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,y.layers.mask=T.layers.mask|I.layers.mask;let rt=q.parent,Tt=y.cameras;nt(y,rt);for(let At=0;At<Tt.length;At++)nt(Tt[At],rt);Tt.length===2?G(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),at(q,y,rt)};function at(q,Q,Mt){Mt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function Bt(q,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let Mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let rt=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let At=0;At<Mt.length;At++){let It=Mt[At],qt=null;if(m!==null)qt=m.getViewport(It);else{let lt=u.getViewSubImage(p,It);qt=lt.viewport,At===0&&(t.setRenderTargetTextures(E,lt.colorTexture,p.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(E))}let tt=M[At];tt===void 0&&(tt=new Be,tt.layers.enable(At),tt.viewport=new ge,M[At]=tt),tt.matrix.fromArray(It.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(It.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(qt.x,qt.y,qt.width,qt.height),At===0&&(y.matrix.copy(tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(tt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let At=u.getDepthInformation(Mt[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let Mt=0;Mt<v.length;Mt++){let rt=x[Mt],Tt=v[Mt];rt!==null&&Tt!==void 0&&Tt.update(rt,Q,c||a)}gt&&gt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Qt=new Ru;Qt.setAnimationLoop(Bt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}},Ci=new On,jg=new oe;function Qg(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Au(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,E,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,x)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),_(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,E,v):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===We&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===We&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let E=t.get(f),v=E.envMap,x=E.envMapRotation;v&&(d.envMap.value=v,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),d.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Ci)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,E,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*E,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,E){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){let E=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let x=v.program;n.uniformBlockBinding(E,x)}function c(E,v){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",d));let C=v.program;n.updateUBOMapping(E,C);let b=t.render.frame;r[E.id]!==b&&(p(E),r[E.id]=b)}function h(E){let v=u();E.__bindingPointIndex=v;let x=i.createBuffer(),C=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let v=s[E.id],x=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,T=x.length;b<T;b++){let I=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,y=I.length;M<y;M++){let P=I[M];if(m(P,b,M,C)===!0){let z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],O=0;for(let j=0;j<F.length;j++){let k=F[j],it=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+O,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,v,x,C){let b=E.value,T=v+"_"+x;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{let I=C[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return C[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(E){let v=E.uniforms,x=0,C=16;for(let T=0,I=v.length;T<I;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,P=M.length;y<P;y++){let z=M[y],F=Array.isArray(z.value)?z.value:[z.value];for(let O=0,j=F.length;O<j;O++){let k=F[O],it=_(k),G=x%C,nt=G%it.boundary,at=G+nt;x+=nt,at!==0&&C-at<it.storage&&(x+=C-at),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=it.storage}}}let b=x%C;return b>0&&(x+=C-b),E.__size=x,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function d(E){let v=E.target;v.removeEventListener("dispose",d);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var yo=class{constructor(t={}){let{canvas:e=rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),d=null,f=null,E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=gi,this.toneMappingExposure=1;let x=this,C=!1,b=0,T=0,I=null,M=-1,y=null,P=new ge,z=new ge,F=null,O=new Pt(0),j=0,k=e.width,it=e.height,G=1,nt=null,at=null,gt=new ge(0,0,k,it),Bt=new ge(0,0,k,it),Qt=!1,q=new rr,Q=!1,Mt=!1,rt=new oe,Tt=new oe,At=new L,It=new ge,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function lt(){return I===null?G:1}let D=n;function Rt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){let U="webgl2";if(D=Rt(U,w),D===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,St,ct,Ft,yt,A,S,B,Z,et,$,wt,dt,_t,Wt,ot,vt,Ot,kt,Et,jt,Ht,se,R;function K(){st=new g0(D),st.init(),Ht=new Zg(D,st),St=new h0(D,st,t,Ht),ct=new Xg(D,st),St.reverseDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),Ft=new v0(D),yt=new Dg,A=new Yg(D,st,ct,yt,St,Ht,Ft),S=new d0(x),B=new m0(x),Z=new Tf(D),se=new l0(D,Z),et=new _0(D,Z,Ft,se),$=new S0(D,et,Z,Ft),kt=new y0(D,St,A),ot=new u0(yt),wt=new Ig(x,S,B,st,St,se,ot),dt=new Qg(x,yt),_t=new Ug,Wt=new kg(st),Ot=new a0(x,S,B,ct,$,m,l),vt=new Gg(x,$,St),R=new t_(D,Ft,St,ct),Et=new c0(D,st,Ft),jt=new x0(D,st,Ft),Ft.programs=wt.programs,x.capabilities=St,x.extensions=st,x.properties=yt,x.renderLists=_t,x.shadowMap=vt,x.state=ct,x.info=Ft}K();let H=new Hl(x,D);this.xr=H,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(k,it,!1))},this.getSize=function(w){return w.set(k,it)},this.setSize=function(w,U,V=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,it=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(k*G,it*G).floor()},this.setDrawingBufferSize=function(w,U,V){k=w,it=U,G=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,U,V,W){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,V,W),ct.viewport(P.copy(gt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,U,V,W){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,U,V,W),ct.scissor(z.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){ct.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,U=!0,V=!0){let W=0;if(w){let N=!1;if(I!==null){let ht=I.texture.format;N=ht===Sc||ht===yc||ht===vc}if(N){let ht=I.texture.type,bt=ht===Rn||ht===Ui||ht===sr||ht===xi||ht===_c||ht===xc,Dt=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Xt=Dt.r,Zt=Dt.g,Ut=Dt.b;bt?(g[0]=Xt,g[1]=Zt,g[2]=Ut,g[3]=Lt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=Ut,_[3]=Lt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),_t.dispose(),Wt.dispose(),yt.dispose(),S.dispose(),B.dispose(),$.dispose(),se.dispose(),R.dispose(),wt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Xc),H.removeEventListener("sessionend",qc),bi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=Ft.autoReset,U=vt.enabled,V=vt.autoUpdate,W=vt.needsUpdate,N=vt.type;K(),Ft.autoReset=w,vt.enabled=U,vt.autoUpdate=V,vt.needsUpdate=W,vt.type=N}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){let U=w.target;U.removeEventListener("dispose",Yt),Ae(U)}function Ae(w){ke(w),yt.remove(w)}function ke(w){let U=yt.get(w).programs;U!==void 0&&(U.forEach(function(V){wt.releaseProgram(V)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,W,N,ht){U===null&&(U=qt);let bt=N.isMesh&&N.matrixWorld.determinant()<0,Dt=hd(w,U,V,W,N);ct.setMaterial(W,bt);let Lt=V.index,Xt=1;if(W.wireframe===!0){if(Lt=et.getWireframeAttribute(V),Lt===void 0)return;Xt=2}let Zt=V.drawRange,Ut=V.attributes.position,ce=Zt.start*Xt,ve=(Zt.start+Zt.count)*Xt;ht!==null&&(ce=Math.max(ce,ht.start*Xt),ve=Math.min(ve,(ht.start+ht.count)*Xt)),Lt!==null?(ce=Math.max(ce,0),ve=Math.min(ve,Lt.count)):Ut!=null&&(ce=Math.max(ce,0),ve=Math.min(ve,Ut.count));let ye=ve-ce;if(ye<0||ye===1/0)return;se.setup(N,W,Dt,V,Lt);let je,he=Et;if(Lt!==null&&(je=Z.get(Lt),he=jt,he.setIndex(je)),N.isMesh)W.wireframe===!0?(ct.setLineWidth(W.wireframeLinewidth*lt()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(N.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),ct.setLineWidth(Nt*lt()),N.isLineSegments?he.setMode(D.LINES):N.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else N.isPoints?he.setMode(D.POINTS):N.isSprite&&he.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)he.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))he.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Nt=N._multiDrawStarts,Vn=N._multiDrawCounts,ue=N._multiDrawCount,yn=Lt?Z.get(Lt).bytesPerElement:1,Xi=yt.get(W).currentProgram.getUniforms();for(let rn=0;rn<ue;rn++)Xi.setValue(D,"_gl_DrawID",rn),he.render(Nt[rn]/yn,Vn[rn])}else if(N.isInstancedMesh)he.renderInstances(ce,ye,N.count);else if(V.isInstancedBufferGeometry){let Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vn=Math.min(V.instanceCount,Nt);he.renderInstances(ce,ye,Vn)}else he.render(ce,ye)};function fe(w,U,V){w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,Ar(w,U,V),w.side=An,w.needsUpdate=!0,Ar(w,U,V),w.side=ln):Ar(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),f=Wt.get(V),f.init(U),v.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ht=N.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){let Dt=ht[bt];fe(Dt,V,N),W.add(Dt)}else fe(ht,V,N),W.add(ht)}),v.pop(),f=null,W},this.compileAsync=function(w,U,V=null){let W=this.compile(w,U,V);return new Promise(N=>{function ht(){if(W.forEach(function(bt){yt.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){N(w);return}setTimeout(ht,10)}st.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let vn=null;function Hn(w){vn&&vn(w)}function Xc(){bi.stop()}function qc(){bi.start()}let bi=new Ru;bi.setAnimationLoop(Hn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){vn=w,H.setAnimationLoop(w),w===null?bi.stop():bi.start()},H.addEventListener("sessionstart",Xc),H.addEventListener("sessionend",qc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,I),f=Wt.get(w,v.length),f.init(U),v.push(f),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Tt),Mt=this.localClippingEnabled,Q=ot.init(this.clippingPlanes,Mt),d=_t.get(w,E.length),d.init(),E.push(d),H.enabled===!0&&H.isPresenting===!0){let ht=x.xr.getDepthSensingMesh();ht!==null&&oa(ht,U,-1/0,x.sortObjects)}oa(w,U,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(nt,at),tt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,tt&&Ot.addToRenderList(d,w),this.info.render.frame++,Q===!0&&ot.beginShadows();let V=f.state.shadowsArray;vt.render(V,w,U),Q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=d.opaque,N=d.transmissive;if(f.setupLights(),U.isArrayCamera){let ht=U.cameras;if(N.length>0)for(let bt=0,Dt=ht.length;bt<Dt;bt++){let Lt=ht[bt];Zc(W,N,w,Lt)}tt&&Ot.render(w);for(let bt=0,Dt=ht.length;bt<Dt;bt++){let Lt=ht[bt];Yc(d,w,Lt,Lt.viewport)}}else N.length>0&&Zc(W,N,w,U),tt&&Ot.render(w),Yc(d,w,U);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,U),se.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(f=v[v.length-1],Q===!0&&ot.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?d=E[E.length-1]:d=null};function oa(w,U,V,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){W&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let bt=$.update(w),Dt=w.material;Dt.visible&&d.push(w,bt,Dt,V,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let bt=$.update(w),Dt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),It.copy(bt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Dt)){let Lt=bt.groups;for(let Xt=0,Zt=Lt.length;Xt<Zt;Xt++){let Ut=Lt[Xt],ce=Dt[Ut.materialIndex];ce&&ce.visible&&d.push(w,bt,ce,V,It.z,Ut)}}else Dt.visible&&d.push(w,bt,Dt,V,It.z,null)}}let ht=w.children;for(let bt=0,Dt=ht.length;bt<Dt;bt++)oa(ht[bt],U,V,W)}function Yc(w,U,V,W){let N=w.opaque,ht=w.transmissive,bt=w.transparent;f.setupLightsView(V),Q===!0&&ot.setGlobalState(x.clippingPlanes,V),W&&ct.viewport(P.copy(W)),N.length>0&&Tr(N,U,V),ht.length>0&&Tr(ht,U,V),bt.length>0&&Tr(bt,U,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Zc(w,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Oe(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?tn:Rn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let ht=f.state.transmissionRenderTarget[W.id],bt=W.viewport||P;ht.setSize(bt.z,bt.w);let Dt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(O),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Ot.render(V);let Lt=x.toneMapping;x.toneMapping=gi;let Xt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Q===!0&&ot.setGlobalState(x.clippingPlanes,W),Tr(w,V,W),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),st.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,ce=U.length;Ut<ce;Ut++){let ve=U[Ut],ye=ve.object,je=ve.geometry,he=ve.material,Nt=ve.group;if(he.side===ln&&ye.layers.test(W.layers)){let Vn=he.side;he.side=We,he.needsUpdate=!0,$c(ye,V,W,je,he,Nt),he.side=Vn,he.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}x.setRenderTarget(Dt),x.setClearColor(O,j),Xt!==void 0&&(W.viewport=Xt),x.toneMapping=Lt}function Tr(w,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ht=w.length;N<ht;N++){let bt=w[N],Dt=bt.object,Lt=bt.geometry,Xt=W===null?bt.material:W,Zt=bt.group;Dt.layers.test(V.layers)&&$c(Dt,U,V,Lt,Xt,Zt)}}function $c(w,U,V,W,N,ht){w.onBeforeRender(x,U,V,W,N,ht),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,V,W,w,ht),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,x.renderBufferDirect(V,U,W,N,w,ht),N.side=An,N.needsUpdate=!0,x.renderBufferDirect(V,U,W,N,w,ht),N.side=ln):x.renderBufferDirect(V,U,W,N,w,ht),w.onAfterRender(x,U,V,W,N,ht)}function Ar(w,U,V){U.isScene!==!0&&(U=qt);let W=yt.get(w),N=f.state.lights,ht=f.state.shadowsArray,bt=N.state.version,Dt=wt.getParameters(w,N.state,ht,U,V),Lt=wt.getProgramCacheKey(Dt),Xt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",Yt),Xt=new Map,W.programs=Xt);let Zt=Xt.get(Lt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===bt)return Kc(w,Dt),Zt}else Dt.uniforms=wt.getUniforms(w),w.onBeforeCompile(Dt,x),Zt=wt.acquireProgram(Dt,Lt),Xt.set(Lt,Zt),W.uniforms=Dt.uniforms;let Ut=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=ot.uniform),Kc(w,Dt),W.needsLights=dd(w),W.lightsStateVersion=bt,W.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function Jc(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=ms.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Kc(w,U){let V=yt.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function hd(w,U,V,W,N){U.isScene!==!0&&(U=qt),A.resetTextureUnits();let ht=U.fog,bt=W.isMeshStandardMaterial?U.environment:null,Dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ns,Lt=(W.isMeshStandardMaterial?B:S).get(W.envMap||bt),Xt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!V.morphAttributes.position,ce=!!V.morphAttributes.normal,ve=!!V.morphAttributes.color,ye=gi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=x.toneMapping);let je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=je!==void 0?je.length:0,Nt=yt.get(W),Vn=f.state.lights;if(Q===!0&&(Mt===!0||w!==y)){let un=w===y&&W.id===M;ot.setState(W,w,un)}let ue=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Vn.state.version||Nt.outputColorSpace!==Dt||N.isBatchedMesh&&Nt.batching===!1||!N.isBatchedMesh&&Nt.batching===!0||N.isBatchedMesh&&Nt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Nt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Nt.instancing===!1||!N.isInstancedMesh&&Nt.instancing===!0||N.isSkinnedMesh&&Nt.skinning===!1||!N.isSkinnedMesh&&Nt.skinning===!0||N.isInstancedMesh&&Nt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Nt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Nt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Nt.instancingMorph===!1&&N.morphTexture!==null||Nt.envMap!==Lt||W.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==Xt||Nt.vertexTangents!==Zt||Nt.morphTargets!==Ut||Nt.morphNormals!==ce||Nt.morphColors!==ve||Nt.toneMapping!==ye||Nt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Nt.__version=W.version);let yn=Nt.currentProgram;ue===!0&&(yn=Ar(W,U,N));let Xi=!1,rn=!1,Hs=!1,Se=yn.getUniforms(),Dn=Nt.uniforms;if(ct.useProgram(yn.program)&&(Xi=!0,rn=!0,Hs=!0),W.id!==M&&(M=W.id,rn=!0),Xi||y!==w){ct.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),af(rt),lf(rt),Se.setValue(D,"projectionMatrix",rt)):Se.setValue(D,"projectionMatrix",w.projectionMatrix),Se.setValue(D,"viewMatrix",w.matrixWorldInverse);let ai=Se.map.cameraPosition;ai!==void 0&&ai.setValue(D,At.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Se.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,rn=!0,Hs=!0)}if(N.isSkinnedMesh){Se.setOptional(D,N,"bindMatrix"),Se.setOptional(D,N,"bindMatrixInverse");let un=N.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Se.setValue(D,"boneTexture",un.boneTexture,A))}N.isBatchedMesh&&(Se.setOptional(D,N,"batchingTexture"),Se.setValue(D,"batchingTexture",N._matricesTexture,A),Se.setOptional(D,N,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",N._indirectTexture,A),Se.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",N._colorsTexture,A));let Vs=V.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&kt.update(N,V,yn),(rn||Nt.receiveShadow!==N.receiveShadow)&&(Nt.receiveShadow=N.receiveShadow,Se.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Dn.envMap.value=Lt,Dn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Dn.envMapIntensity.value=U.environmentIntensity),rn&&(Se.setValue(D,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&ud(Dn,Hs),ht&&W.fog===!0&&dt.refreshFogUniforms(Dn,ht),dt.refreshMaterialUniforms(Dn,W,G,it,f.state.transmissionRenderTarget[w.id]),ms.upload(D,Jc(Nt),Dn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ms.upload(D,Jc(Nt),Dn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Se.setValue(D,"center",N.center),Se.setValue(D,"modelViewMatrix",N.modelViewMatrix),Se.setValue(D,"normalMatrix",N.normalMatrix),Se.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let un=W.uniformsGroups;for(let ai=0,li=un.length;ai<li;ai++){let jc=un[ai];R.update(jc,yn),R.bind(jc,yn)}}return yn}function ud(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function dd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,V){yt.get(w.texture).__webglTexture=U,yt.get(w.depthTexture).__webglTexture=V;let W=yt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let V=yt.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){I=w,b=U,T=V;let W=!0,N=null,ht=!1,bt=!1;if(w){let Lt=yt.get(w);if(Lt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Lt.__hasExternalTextures)A.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ut=w.depthTexture;if(Lt.__boundDepthTexture!==Ut){if(Ut!==null&&yt.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);let Zt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[U])?N=Zt[U][V]:N=Zt[U],ht=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?N=Zt[V]:N=Zt,P.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else P.copy(gt).multiplyScalar(G).floor(),z.copy(Bt).multiplyScalar(G).floor(),F=Qt;if(ct.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&ct.drawBuffers(w,N),ct.viewport(P),ct.scissor(z),ct.setScissorTest(F),ht){let Lt=yt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,V)}else if(bt){let Lt=yt.get(w.texture),Xt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,Xt)}M=-1},this.readRenderTargetPixels=function(w,U,V,W,N,ht,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){ct.bindFramebuffer(D.FRAMEBUFFER,Dt);try{let Lt=w.texture,Xt=Lt.format,Zt=Lt.type;if(!St.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&V>=0&&V<=w.height-N&&D.readPixels(U,V,W,N,Ht.convert(Xt),Ht.convert(Zt),ht)}finally{let Lt=I!==null?yt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,W,N,ht,bt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){let Lt=w.texture,Xt=Lt.format,Zt=Lt.type;if(!St.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&V>=0&&V<=w.height-N){ct.bindFramebuffer(D.FRAMEBUFFER,Dt);let Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(U,V,W,N,Ht.convert(Xt),Ht.convert(Zt),0);let ce=I!==null?yt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,ce);let ve=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await of(D,ve,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Ut),D.deleteSync(ve),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(w.image.width*W),ht=Math.floor(w.image.height*W),bt=U!==null?U.x:0,Dt=U!==null?U.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,bt,Dt,N,ht),ct.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,W=null,N=0){w.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let ht,bt,Dt,Lt,Xt,Zt,Ut,ce,ve,ye=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(ht=V.max.x-V.min.x,bt=V.max.y-V.min.y,Dt=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Xt=V.min.y,Zt=V.isBox3?V.min.z:0):(ht=ye.width,bt=ye.height,Dt=ye.depth||1,Lt=0,Xt=0,Zt=0),W!==null?(Ut=W.x,ce=W.y,ve=W.z):(Ut=0,ce=0,ve=0);let je=Ht.convert(U.format),he=Ht.convert(U.type),Nt;U.isData3DTexture?(A.setTexture3D(U,0),Nt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Nt=D.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Vn=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xi=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);let Hs=w.isDataArrayTexture||w.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Dn=yt.get(w),Vs=yt.get(U),un=yt.get(Dn.__renderTarget),ai=yt.get(Vs.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,un.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<Dt;li++)Hs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,N,Zt+li),w.isDepthTexture?(Se&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,N,ve+li),D.blitFramebuffer(Lt,Xt,ht,bt,Ut,ce,ht,bt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Se?D.copyTexSubImage3D(Nt,N,Ut,ce,ve+li,Lt,Xt,ht,bt):D.copyTexSubImage2D(Nt,N,Ut,ce,ve+li,Lt,Xt,ht,bt);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Nt,N,Ut,ce,ve,ht,bt,Dt,je,he,ye.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,N,Ut,ce,ve,ht,bt,Dt,je,ye.data):D.texSubImage3D(Nt,N,Ut,ce,ve,ht,bt,Dt,je,he,ye):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Ut,ce,ht,bt,je,he,ye.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Ut,ce,ye.width,ye.height,je,ye.data):D.texSubImage2D(D.TEXTURE_2D,N,Ut,ce,ht,bt,je,he,ye);D.pixelStorei(D.UNPACK_ROW_LENGTH,Vn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),N===0&&U.generateMipmaps&&D.generateMipmap(Nt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,W=null,N=0){return w.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,W,N)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){b=0,T=0,I=null,ct.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},So=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ar=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new L,lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ni=class extends Bn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Ys=new L,as=new L,ls=new L,cs=new X,Zs=new X,Lu=new oe,$r=new L,$s=new L,Jr=new L,jh=new X,Na=new X,Qh=new X,Ts=class extends De{constructor(t=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mo(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new lr(n,3,0,!1)),os.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new X(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Kr($r.set(-.5,-.5,0),ls,a,as,s,r),Kr($s.set(.5,-.5,0),ls,a,as,s,r),Kr(Jr.set(.5,.5,0),ls,a,as,s,r),jh.set(0,0),Na.set(1,0),Qh.set(1,1);let o=t.ray.intersectTriangle($r,$s,Jr,!1,Ys);if(o===null&&(Kr($s.set(-.5,.5,0),ls,a,as,s,r),Na.set(0,1),o=t.ray.intersectTriangle($r,Jr,$s,!1,Ys),o===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:mi.getInterpolation(Ys,$r,$s,Jr,jh,Na,Qh,new X),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Kr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*cs.x-s*cs.y,Zs.y=s*cs.x+r*cs.y):Zs.copy(cs),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(Lu)}var As=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,h=Xe,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vl=class extends Bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tu=new oe,Gl=new Ss,jr=new ys,Qr=new L,Fi=class extends De{constructor(t=new ae,e=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;tu.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,_=m;g<_;g++){let d=c.getX(g);Qr.fromBufferAttribute(u,d),eu(Qr,d,l,s,t,e,this)}}else{let p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=p,_=m;g<_;g++)Qr.fromBufferAttribute(u,g),eu(Qr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function eu(i,t,e,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<e){let l=new L;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var bo=class extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new X:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new oe;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Pe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Pe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new X){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wl=class extends cr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,m*=h,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var to=new L,Fa=new Tc,Oa=new Tc,Ba=new Tc,Oi=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(to.subVectors(s[0],s[1]).add(s[0]),c=to);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(to.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=to),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Fa.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,_,d),Oa.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,_,d),Ba.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Oa.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ba.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Fa.calc(l),Oa.calc(l),Ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function e_(i,t){let e=1-i;return e*e*t}function n_(i,t){return 2*(1-i)*i*t}function i_(i,t){return i*i*t}function nr(i,t,e,n){return e_(i,t)+n_(i,e)+i_(i,n)}function s_(i,t){let e=1-i;return e*e*e*t}function r_(i,t){let e=1-i;return 3*e*e*i*t}function o_(i,t){return 3*(1-i)*i*i*t}function a_(i,t){return i*i*i*t}function ir(i,t,e,n,s){return s_(i,t)+r_(i,e)+o_(i,n)+a_(i,s)}var Eo=class extends mn{constructor(t=new X,e=new X,n=new X,s=new X){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xl=class extends mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y),ir(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends mn{constructor(t=new X,e=new X){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ql=class extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends mn{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y),nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new X){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:Oi,CubicBezierCurve:Eo,CubicBezierCurve3:Xl,EllipseCurve:cr,LineCurve:wo,LineCurve3:ql,QuadraticBezierCurve:To,QuadraticBezierCurve3:Ao,SplineCurve:Ro}),Yl=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},Rs=class extends Yl{constructor(t){super(),this.type="Path",this.currentPoint=new X,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wo(this.currentPoint.clone(),new X(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new To(this.currentPoint.clone(),new X(t,e),new X(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Eo(this.currentPoint.clone(),new X(t,e),new X(n,s),new X(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new cr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},yi=class i extends ae{constructor(t=[new X(0,-.5),new X(.5,0),new X(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,p=new X,m=new L,g=new L,_=new L,d=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:d=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,m.x=f*1,m.y=-d,m.z=f*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:d=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let E=0;E<=e;E++){let v=n+E*h*s,x=Math.sin(v),C=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*C,a.push(u.x,u.y,u.z),p.x=E/e,p.y=b/(t.length-1),o.push(p.x,p.y);let T=l[3*b+0]*x,I=l[3*b+1],M=l[3*b+0]*C;c.push(T,I,M)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){let x=v+E*t.length,C=x,b=x+t.length,T=x+t.length+1,I=x+1;r.push(C,b,I),r.push(T,I,b)}this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("uv",new zt(o,2)),this.setAttribute("normal",new zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Po=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new X;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(o,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hr=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],g=0,_=[],d=n/2,f=0;E(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(m,2));function E(){let x=new L,C=new L,b=0,T=(e-t)/n;for(let I=0;I<=r;I++){let M=[],y=I/r,P=y*(e-t)+t;for(let z=0;z<=s;z++){let F=z/s,O=F*l+o,j=Math.sin(O),k=Math.cos(O);C.x=P*j,C.y=-y*n+d,C.z=P*k,u.push(C.x,C.y,C.z),x.set(j,T,k).normalize(),p.push(x.x,x.y,x.z),m.push(F,1-y),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let y=_[M][I],P=_[M+1][I],z=_[M+1][I+1],F=_[M][I+1];(t>0||M!==0)&&(h.push(y,P,F),b+=3),(e>0||M!==r-1)&&(h.push(P,z,F),b+=3)}c.addGroup(f,b,0),f+=b}function v(x){let C=g,b=new X,T=new L,I=0,M=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,d*y,0),p.push(0,y,0),m.push(.5,.5),g++;let P=g;for(let z=0;z<=s;z++){let O=z/s*l+o,j=Math.cos(O),k=Math.sin(O);T.x=M*k,T.y=d*y,T.z=M*j,u.push(T.x,T.y,T.z),p.push(0,y,0),b.x=j*.5+.5,b.y=k*.5*y+.5,m.push(b.x,b.y),g++}for(let z=0;z<s;z++){let F=C+z,O=P+z;x===!0?h.push(O,O+1,F):h.push(O+1,O,F),I+=3}c.addGroup(f,I,x===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Io=class i extends hr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gn=class extends Rs{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rs().fromJSON(s))}return this}},l_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Uu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,p,m;if(n&&(r=f_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],p=i[g+1],u<o&&(o=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return ur(r,a,e,o,l,m,0),a}};function Uu(i,t,e,n,s){let r,a;if(s===E_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=iu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=iu(r,i[r],i[r+1],a);return a&&Xo(a,a.next)&&(fr(a),a=a.next),a}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xo(e,e.next)||be(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,a){if(!i)return;!a&&r&&x_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?h_(i,n,s,r):c_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=u_(Bi(i),t,e),ur(i,t,e,n,s,r,2)):a===2&&d_(i,t,e,n,s,r):ur(Bi(i),t,e,n,s,r,1);break}}}function c_(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=m&&us(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function h_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,_=o>l?o>c?o:c:l>c?l:c,d=h>u?h>p?h:p:u>p?u:p,f=Zl(m,g,t,e,n),E=Zl(_,d,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=f&&x&&x.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==a&&us(o,h,l,u,c,p,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==a&&us(o,h,l,u,c,p,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==a&&us(o,h,l,u,c,p,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=E;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==a&&us(o,h,l,u,c,p,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function u_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Xo(s,r)&&Nu(s,n,n.next,r)&&dr(s,r)&&dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function d_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S_(a,o)){let l=Fu(a,o);a=Bi(a,a.next),l=Bi(l,l.next),ur(a,t,e,n,s,r,0),ur(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function f_(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Uu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(y_(c));for(s.sort(p_),r=0;r<s.length;r++)e=m_(s[r],e);return e}function p_(i,t){return i.x-t.x}function m_(i,t){let e=g_(i,t);if(!e)return t;let n=Fu(e,i);return Bi(n,n.next),Bi(e,e.next)}function g_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&us(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&__(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function __(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function x_(i,t,e,n){let s=i;do s.z===0&&(s.z=Zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v_(s)}function v_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function y_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function us(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function S_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!M_(i,t)&&(dr(i,t)&&dr(t,i)&&b_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Xo(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xo(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){let s=no(be(i,t,e)),r=no(be(i,t,n)),a=no(be(e,n,i)),o=no(be(e,n,t));return!!(s!==r&&a!==o||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||a===0&&eo(e,i,n)||o===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function M_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function b_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fu(i,t){let e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function iu(i,t,e,n){let s=new $l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _i=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];su(t),ru(n,t);let a=t.length;e.forEach(su);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ru(n,e[l]);let o=l_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function su(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ru(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Do=class i extends ae{constructor(t=new gn([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new zt(s,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:w_,v,x=!1,C,b,T,I;f&&(v=f.getSpacedPoints(h),x=!0,p=!1,C=f.computeFrenetFrames(h,!1),b=new L,T=new L,I=new L),p||(d=0,m=0,g=0,_=0);let M=o.extractPoints(c),y=M.shape,P=M.holes;if(!_i.isClockWise(y)){y=y.reverse();for(let tt=0,lt=P.length;tt<lt;tt++){let D=P[tt];_i.isClockWise(D)&&(P[tt]=D.reverse())}}let F=_i.triangulateShape(y,P),O=y;for(let tt=0,lt=P.length;tt<lt;tt++){let D=P[tt];y=y.concat(D)}function j(tt,lt,D){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,D)}let k=y.length,it=F.length;function G(tt,lt,D){let Rt,st,St,ct=tt.x-lt.x,Ft=tt.y-lt.y,yt=D.x-tt.x,A=D.y-tt.y,S=ct*ct+Ft*Ft,B=ct*A-Ft*yt;if(Math.abs(B)>Number.EPSILON){let Z=Math.sqrt(S),et=Math.sqrt(yt*yt+A*A),$=lt.x-Ft/Z,wt=lt.y+ct/Z,dt=D.x-A/et,_t=D.y+yt/et,Wt=((dt-$)*A-(_t-wt)*yt)/(ct*A-Ft*yt);Rt=$+ct*Wt-tt.x,st=wt+Ft*Wt-tt.y;let ot=Rt*Rt+st*st;if(ot<=2)return new X(Rt,st);St=Math.sqrt(ot/2)}else{let Z=!1;ct>Number.EPSILON?yt>Number.EPSILON&&(Z=!0):ct<-Number.EPSILON?yt<-Number.EPSILON&&(Z=!0):Math.sign(Ft)===Math.sign(A)&&(Z=!0),Z?(Rt=-Ft,st=ct,St=Math.sqrt(S)):(Rt=ct,st=Ft,St=Math.sqrt(S/2))}return new X(Rt/St,st/St)}let nt=[];for(let tt=0,lt=O.length,D=lt-1,Rt=tt+1;tt<lt;tt++,D++,Rt++)D===lt&&(D=0),Rt===lt&&(Rt=0),nt[tt]=G(O[tt],O[D],O[Rt]);let at=[],gt,Bt=nt.concat();for(let tt=0,lt=P.length;tt<lt;tt++){let D=P[tt];gt=[];for(let Rt=0,st=D.length,St=st-1,ct=Rt+1;Rt<st;Rt++,St++,ct++)St===st&&(St=0),ct===st&&(ct=0),gt[Rt]=G(D[Rt],D[St],D[ct]);at.push(gt),Bt=Bt.concat(gt)}for(let tt=0;tt<d;tt++){let lt=tt/d,D=m*Math.cos(lt*Math.PI/2),Rt=g*Math.sin(lt*Math.PI/2)+_;for(let st=0,St=O.length;st<St;st++){let ct=j(O[st],nt[st],Rt);rt(ct.x,ct.y,-D)}for(let st=0,St=P.length;st<St;st++){let ct=P[st];gt=at[st];for(let Ft=0,yt=ct.length;Ft<yt;Ft++){let A=j(ct[Ft],gt[Ft],Rt);rt(A.x,A.y,-D)}}}let Qt=g+_;for(let tt=0;tt<k;tt++){let lt=p?j(y[tt],Bt[tt],Qt):y[tt];x?(T.copy(C.normals[0]).multiplyScalar(lt.x),b.copy(C.binormals[0]).multiplyScalar(lt.y),I.copy(v[0]).add(T).add(b),rt(I.x,I.y,I.z)):rt(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<k;lt++){let D=p?j(y[lt],Bt[lt],Qt):y[lt];x?(T.copy(C.normals[tt]).multiplyScalar(D.x),b.copy(C.binormals[tt]).multiplyScalar(D.y),I.copy(v[tt]).add(T).add(b),rt(I.x,I.y,I.z)):rt(D.x,D.y,u/h*tt)}for(let tt=d-1;tt>=0;tt--){let lt=tt/d,D=m*Math.cos(lt*Math.PI/2),Rt=g*Math.sin(lt*Math.PI/2)+_;for(let st=0,St=O.length;st<St;st++){let ct=j(O[st],nt[st],Rt);rt(ct.x,ct.y,u+D)}for(let st=0,St=P.length;st<St;st++){let ct=P[st];gt=at[st];for(let Ft=0,yt=ct.length;Ft<yt;Ft++){let A=j(ct[Ft],gt[Ft],Rt);x?rt(A.x,A.y+v[h-1].y,v[h-1].x+D):rt(A.x,A.y,u+D)}}}q(),Q();function q(){let tt=s.length/3;if(p){let lt=0,D=k*lt;for(let Rt=0;Rt<it;Rt++){let st=F[Rt];Tt(st[2]+D,st[1]+D,st[0]+D)}lt=h+d*2,D=k*lt;for(let Rt=0;Rt<it;Rt++){let st=F[Rt];Tt(st[0]+D,st[1]+D,st[2]+D)}}else{for(let lt=0;lt<it;lt++){let D=F[lt];Tt(D[2],D[1],D[0])}for(let lt=0;lt<it;lt++){let D=F[lt];Tt(D[0]+k*h,D[1]+k*h,D[2]+k*h)}}n.addGroup(tt,s.length/3-tt,0)}function Q(){let tt=s.length/3,lt=0;Mt(O,lt),lt+=O.length;for(let D=0,Rt=P.length;D<Rt;D++){let st=P[D];Mt(st,lt),lt+=st.length}n.addGroup(tt,s.length/3-tt,1)}function Mt(tt,lt){let D=tt.length;for(;--D>=0;){let Rt=D,st=D-1;st<0&&(st=tt.length-1);for(let St=0,ct=h+d*2;St<ct;St++){let Ft=k*St,yt=k*(St+1),A=lt+Rt+Ft,S=lt+st+Ft,B=lt+st+yt,Z=lt+Rt+yt;At(A,S,B,Z)}}}function rt(tt,lt,D){l.push(tt),l.push(lt),l.push(D)}function Tt(tt,lt,D){It(tt),It(lt),It(D);let Rt=s.length/3,st=E.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);qt(st[0]),qt(st[1]),qt(st[2])}function At(tt,lt,D,Rt){It(tt),It(lt),It(Rt),It(lt),It(D),It(Rt);let st=s.length/3,St=E.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);qt(St[0]),qt(St[1]),qt(St[3]),qt(St[1]),qt(St[2]),qt(St[3])}function It(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function qt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return T_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,t.options)}},w_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new X(r,a),new X(o,l),new X(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-u),new X(p,1-g),new X(_,1-f)]:[new X(o,1-l),new X(h,1-u),new X(m,1-g),new X(d,1-f)]}};function T_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pr=class i extends ae{constructor(t=new gn([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(a,2));function c(h){let u=s.length/3,p=h.extractPoints(e),m=p.shape,g=p.holes;_i.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,f=g.length;d<f;d++){let E=g[d];_i.isClockWise(E)===!0&&(g[d]=E.reverse())}let _=_i.triangulateShape(m,g);for(let d=0,f=g.length;d<f;d++){let E=g[d];m=m.concat(E)}for(let d=0,f=m.length;d<f;d++){let E=m[d];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let d=0,f=_.length;d<f;d++){let E=_[d],v=E[0]+u,x=E[1]+u,C=E[2]+u;n.push(v,x,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return A_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function A_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Pn=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,p=new L,m=[],g=[],_=[],d=[];for(let f=0;f<=n;f++){let E=[],v=f/n,x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let b=C/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),d.push(b+x,1-v),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let v=h[f][E+1],x=h[f][E],C=h[f+1][E],b=h[f+1][E+1];(f!==0||a>0)&&m.push(v,x,b),(f!==n-1||l<Math.PI)&&m.push(x,C,b)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Lo=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,p=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,E=(s+1)*m+g;a.push(_,d,E),a.push(d,f,E)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var zi=class i extends ae{constructor(t=new Ao(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new X,h=new L,u=[],p=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(m,2));function _(){for(let v=0;v<e;v++)d(v);d(r===!1?e:0),E(),f()}function d(v){h=t.getPointAt(v/e,h);let x=a.normals[v],C=a.binormals[v];for(let b=0;b<=s;b++){let T=b/s*Math.PI*2,I=Math.sin(T),M=-Math.cos(T);l.x=M*x.x+I*C.x,l.y=M*x.y+I*C.y,l.z=M*x.z+I*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let C=(s+1)*(v-1)+(x-1),b=(s+1)*v+(x-1),T=(s+1)*v+x,I=(s+1)*(v-1)+x;g.push(C,b,I),g.push(b,T,I)}}function E(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Uo=class extends le{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ee=class extends Bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends ee{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var No=class extends Bn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function R_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ih:r=t,o=2*e-n;break;case sh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:a=t,l=2*n-e;break;case sh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,d=_*g,f=-p*d+2*p*_-p*g,E=(1+p)*d+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-m)*d+(1.5+m)*_+.5*g,x=m*d-m*_;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+E*a[c+C]+v*a[l+C]+x*a[u+C];return r}},Kl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},jl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&R_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,p=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[p+g]||_!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,p=a*n;for(let m=0;m!==n;++m)e[p+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=wl;var ki=class extends In{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=co;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends In{};Ql.prototype.ValueTypeName="color";var tc=class extends In{};tc.prototype.ValueTypeName="number";var ec=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fo=class extends In{InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends In{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=co;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends In{};nc.prototype.ValueTypeName="vector";var ic=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},C_=new ic,sc=class{constructor(t){this.manager=t!==void 0?t:C_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Oo=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},za=new oe,ou=new L,au=new L,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rc=class extends mr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=vs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Bo=class extends Is{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},lu=new oe,Js=new L,ka=new L,oc=class extends mr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu)}},ii=class extends Is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ac=class extends mr{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ls=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function cu(){return performance.now()}var Ac="\\[\\]\\.:\\/",P_=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",I_="[^"+Ac.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",Rc),L_=/(WCOD+)?/.source.replace("WCOD",I_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),N_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),F_=new RegExp("^"+D_+L_+U_+N_+"$"),O_=["material","materials","bones","map"],lc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(t){let e=F_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=lc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vx=new Float32Array(1);var _n=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zo=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ou={type:"change"},Pc={type:"start"},zu={type:"end"},qo=new Ss,Bu=new En,B_=Math.cos(70*we.DEG2RAD),Ne=new L,nn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cc=1e-6,Yo=class extends zo{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Cn,this._lastTargetPosition=new L,this._quat=new Cn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _n,this._sphericalDelta=new _n,this._scale=1,this._panOffset=new L,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new L,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=Z_.bind(this),this._onMouseWheel=W_.bind(this),this._onKeyDown=X_.bind(this),this._onTouchStart=q_.bind(this),this._onTouchMove=Y_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=G_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ne.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<B_?this.object.lookAt(this.target):(Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Bu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cc||this._lastTargetPosition.distanceToSquared(this.target)>Cc?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new X,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function k_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Pc)}function G_(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function W_(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zu))}function X_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function q_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Pc)}function Y_(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function Z_(i){this.enabled!==!1&&i.preventDefault()}function $_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Je=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},K_=new bs(-1,1,1,-1,0,1),Ic=class extends ae{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}},j_=new Ic,kn=class{constructor(t){this._mesh=new ze(j_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,K_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var _r={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new X},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},xr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Zo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ku(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Q_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new As(s,t,t);return r.wrapS=jn,r.wrapT=jn,r.needsUpdate=!0,r}function Q_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var vr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Dc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new X},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Dc(i,t,e){let n=tx(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function tx(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var Si={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var $o=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,m=c-u,g=t-p,_=e-m,d,f;g>_?(d=1,f=0):(d=0,f=1);let E=g-d+h,v=_-f+h,x=g-1+2*h,C=_-1+2*h,b=l&255,T=c&255,I=this.perm[b+this.perm[T]]%12,M=this.perm[b+d+this.perm[T+f]]%12,y=this.perm[b+1+this.perm[T+1]]%12,P=.5-g*g-_*_;P<0?n=0:(P*=P,n=P*P*this.dot(this.grad3[I],g,_));let z=.5-E*E-v*v;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[M],E,v));let F=.5-x*x-C*C;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[y],x,C)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),p=Math.floor(n+c),m=1/6,g=(h+u+p)*m,_=h-g,d=u-g,f=p-g,E=t-_,v=e-d,x=n-f,C,b,T,I,M,y;E>=v?v>=x?(C=1,b=0,T=0,I=1,M=1,y=0):E>=x?(C=1,b=0,T=0,I=1,M=0,y=1):(C=0,b=0,T=1,I=1,M=0,y=1):v<x?(C=0,b=0,T=1,I=0,M=1,y=1):E<x?(C=0,b=1,T=0,I=0,M=1,y=1):(C=0,b=1,T=0,I=1,M=1,y=0);let P=E-C+m,z=v-b+m,F=x-T+m,O=E-I+2*m,j=v-M+2*m,k=x-y+2*m,it=E-1+3*m,G=v-1+3*m,nt=x-1+3*m,at=h&255,gt=u&255,Bt=p&255,Qt=this.perm[at+this.perm[gt+this.perm[Bt]]]%12,q=this.perm[at+C+this.perm[gt+b+this.perm[Bt+T]]]%12,Q=this.perm[at+I+this.perm[gt+M+this.perm[Bt+y]]]%12,Mt=this.perm[at+1+this.perm[gt+1+this.perm[Bt+1]]]%12,rt=.6-E*E-v*v-x*x;rt<0?s=0:(rt*=rt,s=rt*rt*this.dot3(this.grad3[Qt],E,v,x));let Tt=.6-P*P-z*z-F*F;Tt<0?r=0:(Tt*=Tt,r=Tt*Tt*this.dot3(this.grad3[q],P,z,F));let At=.6-O*O-j*j-k*k;At<0?a=0:(At*=At,a=At*At*this.dot3(this.grad3[Q],O,j,k));let It=.6-it*it-G*G-nt*nt;return It<0?o=0:(It*=It,o=It*It*this.dot3(this.grad3[Mt],it,G,nt)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,p,m,g,_=(t+e+n+s)*l,d=Math.floor(t+_),f=Math.floor(e+_),E=Math.floor(n+_),v=Math.floor(s+_),x=(d+f+E+v)*c,C=d-x,b=f-x,T=E-x,I=v-x,M=t-C,y=e-b,P=n-T,z=s-I,F=M>y?32:0,O=M>P?16:0,j=y>P?8:0,k=M>z?4:0,it=y>z?2:0,G=P>z?1:0,nt=F+O+j+k+it+G,at=a[nt][0]>=3?1:0,gt=a[nt][1]>=3?1:0,Bt=a[nt][2]>=3?1:0,Qt=a[nt][3]>=3?1:0,q=a[nt][0]>=2?1:0,Q=a[nt][1]>=2?1:0,Mt=a[nt][2]>=2?1:0,rt=a[nt][3]>=2?1:0,Tt=a[nt][0]>=1?1:0,At=a[nt][1]>=1?1:0,It=a[nt][2]>=1?1:0,qt=a[nt][3]>=1?1:0,tt=M-at+c,lt=y-gt+c,D=P-Bt+c,Rt=z-Qt+c,st=M-q+2*c,St=y-Q+2*c,ct=P-Mt+2*c,Ft=z-rt+2*c,yt=M-Tt+3*c,A=y-At+3*c,S=P-It+3*c,B=z-qt+3*c,Z=M-1+4*c,et=y-1+4*c,$=P-1+4*c,wt=z-1+4*c,dt=d&255,_t=f&255,Wt=E&255,ot=v&255,vt=o[dt+o[_t+o[Wt+o[ot]]]]%32,Ot=o[dt+at+o[_t+gt+o[Wt+Bt+o[ot+Qt]]]]%32,kt=o[dt+q+o[_t+Q+o[Wt+Mt+o[ot+rt]]]]%32,Et=o[dt+Tt+o[_t+At+o[Wt+It+o[ot+qt]]]]%32,jt=o[dt+1+o[_t+1+o[Wt+1+o[ot+1]]]]%32,Ht=.6-M*M-y*y-P*P-z*z;Ht<0?h=0:(Ht*=Ht,h=Ht*Ht*this.dot4(r[vt],M,y,P,z));let se=.6-tt*tt-lt*lt-D*D-Rt*Rt;se<0?u=0:(se*=se,u=se*se*this.dot4(r[Ot],tt,lt,D,Rt));let R=.6-st*st-St*St-ct*ct-Ft*Ft;R<0?p=0:(R*=R,p=R*R*this.dot4(r[kt],st,St,ct,Ft));let K=.6-yt*yt-A*A-S*S-B*B;K<0?m=0:(K*=K,m=K*K*this.dot4(r[Et],yt,A,S,B));let H=.6-Z*Z-et*et-$*$-wt*wt;return H<0?g=0:(H*=H,g=H*H*this.dot4(r[jt],Z,et,$,wt)),27*(h+u+p+m+g)}};var yr=class i extends Je{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ku(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Oe(this.width,this.height,{type:tn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new le({defines:Object.assign({},_r.defines),uniforms:en.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:Ie,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new No,this.normalMaterial.blending=Ie,this.pdMaterial=new le({defines:Object.assign({},vr.defines),uniforms:en.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new le({defines:Object.assign({},xr.defines),uniforms:en.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,blending:Ie}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new le({uniforms:en.clone(Si.uniforms),vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ho,blendDst:Us,blendEquation:fn,blendSrcAlpha:ko,blendDstAlpha:Us,blendEquationAlpha:fn}),this.blendMaterial=new le({uniforms:en.clone(Zo.uniforms),vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:hc,blendSrc:Ho,blendDst:Us,blendEquation:fn,blendSrcAlpha:ko,blendDstAlpha:Us,blendEquationAlpha:fn}),this.fsQuad=new kn(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ws,this.depthTexture.format=vi,this.depthTexture.type=xi,this.normalRenderTarget=new Oe(this.width,this.height,{minFilter:Xe,magFilter:Xe,type:tn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Dc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ie,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new $o,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new As(s,t,t,cn,Rn);return r.wrapS=jn,r.wrapT=jn,r.needsUpdate=!0,r}};yr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Os=class extends Je{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=en.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sr=class extends Je{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jo=class extends Je{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new X);this._width=n.width,this._height=n.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Os(Si),this.copyPass.material.blending=Ie,this.clock=new Ls}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sr!==void 0&&(a instanceof Sr?n=!0:a instanceof Jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jo=class extends Je{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Bs=class i extends Je{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new X(t.x,t.y):new X(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,a,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Oe(r,a,{type:tn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Oe(r,a,{type:tn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=Hu;this.highPassUniforms=en.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new X(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Si;this.copyUniforms=en.clone(h.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new ei,this.fsQuad=new kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new X(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Bs.BlurDirectionX=new X(1,0);Bs.BlurDirectionY=new X(0,1);var Vu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qo=class extends Je{constructor(){super();let t=Vu;this.uniforms=en.clone(t.uniforms),this.material=new Uo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gu={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

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
			
		}`};var Mr=new L;function xn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Mr.copy(t),Mr[n]=0,Mr.normalize();let c=.5*a/(a+o),h=1-Mr.angleTo(i)/l;return Math.sign(Mr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var ta=class extends ni{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,m=h.length/6,g=new L,_=.5/s;for(let d=0,f=0;d<h.length;d+=3,f+=2)switch(o.fromArray(h,d),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[d+0]=c.x*Math.sign(o.x)+l.x*r,h[d+1]=c.y*Math.sign(o.y)+l.y*r,h[d+2]=c.z*Math.sign(o.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),p[f+0]=xn(g,l,"z","y",r,n),p[f+1]=1-xn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),p[f+0]=1-xn(g,l,"z","y",r,n),p[f+1]=1-xn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),p[f+0]=1-xn(g,l,"x","z",r,t),p[f+1]=xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),p[f+0]=1-xn(g,l,"x","z",r,t),p[f+1]=1-xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),p[f+0]=1-xn(g,l,"x","y",r,t),p[f+1]=1-xn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),p[f+0]=xn(g,l,"x","y",r,t),p[f+1]=1-xn(g,l,"y","x",r,e);break}}};function Xu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ae,c=0;for(let h=0;h<i.length;++h){let u=i[h],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let p=0;p<i.length;++p){let m=i[p].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Wu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let m=[];for(let _=0;_<a[h].length;++_)m.push(a[h][_][p]);let g=Wu(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Wu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ee(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let p=0,m=h.count;p<m;p++)for(let g=0;g<e;g++){let _=h.getComponent(p,g);o.setComponent(p+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Lc=1924;function ut(i=0,t=1){return Lc=Lc*1664525+1013904223>>>0,i+(t-i)*(Lc/4294967296)}var xe=Math.PI*2,ne=(i=0,t=0,e=0)=>new L(i,t,e);function hn(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new bo(s);return r.colorSpace=n?Ge:Un,r.anisotropy=8,r}function ea(i){return hn(1024,1024,(t,e,n)=>{if(i==="wood"){t.fillStyle="#39231b",t.fillRect(0,0,e,n);for(let s=0;s<5e3;s++){let r=ut(0,n),a=ut(.2,2.5);t.strokeStyle=`rgba(${ut()>.5?"178,116,68":"8,6,6"},${ut(.04,.2)})`,t.lineWidth=a,t.beginPath(),t.moveTo(0,r);for(let o=0;o<=e;o+=16)t.lineTo(o,r+Math.sin(o*.014+r*.028)*3+Math.sin(o*.043+r*.04));t.stroke()}for(let s=0;s<9;s++){let r=ut(0,e),a=ut(0,n);for(let o=1;o<30;o++)t.strokeStyle="#160e0b26",t.lineWidth=.8,t.beginPath(),t.ellipse(r,a,o*ut(2,3),o*.42,0,0,xe),t.stroke()}}else if(i==="brick"){t.fillStyle="#69635b",t.fillRect(0,0,e,n);for(let s=0;s<16;s++)for(let r=-1;r<9;r++){let a=r*128+s%2*64,o=s*64;t.fillStyle=`rgb(${ut(101,132)},${ut(57,74)},${ut(43,58)})`,t.fillRect(a+3,o+3,122,58),t.fillStyle="#e3b6a615",t.fillRect(a+4,o+4,120,3)}for(let s=0;s<5e4;s++)t.fillStyle=ut()>.5?"#20171018":"#f0ddc416",t.fillRect(ut(0,e),ut(0,n),ut(.5,2),ut(.5,2))}else if(i==="plaster"){t.fillStyle="#c6bca5",t.fillRect(0,0,e,n);for(let s=0;s<6e4;s++)t.fillStyle=ut()>.5?"#3e3a2b13":"#fffae41b",t.fillRect(ut(0,e),ut(0,n),ut(1,4),ut(1,4))}else if(i==="snow"){t.fillStyle="#e1ebee",t.fillRect(0,0,e,n);for(let s=0;s<45e3;s++)t.fillStyle=ut()>.5?"#92b1c214":"#ffffff70",t.fillRect(ut(0,e),ut(0,n),ut(.4,2),ut(.4,2))}})}function qu(){let i=ea("wood"),t=ea("brick"),e=ea("plaster"),n=ea("snow"),s=hn(128,256,(h,u,p)=>{let m=h.createRadialGradient(u*.46,p*.66,5,u*.48,p*.56,p*.72);m.addColorStop(0,"#f0ddad"),m.addColorStop(.4,"#c3ab7e"),m.addColorStop(.78,"#7b6a49"),m.addColorStop(1,"#423c2d"),h.fillStyle=m,h.fillRect(0,0,u,p);for(let g=0;g<1500;g++)h.fillStyle=ut()>.6?"#f5e4c015":"#383c3410",h.fillRect(ut(0,u),ut(0,p),1,ut(1,3))}),r=new ee({color:16777215,map:s,emissive:16764320,emissiveMap:s,emissiveIntensity:.36,roughness:.23,metalness:.04});r.userData.noCastShadow=!0;let a=new Cs({color:15061930,map:s,roughness:.18,transmission:.37,thickness:.015,ior:1.46,emissive:16761994,emissiveMap:s,emissiveIntensity:.17});a.userData.noCastShadow=!0;let o=new ee({color:16772304,emissive:16761227,emissiveIntensity:5,roughness:.3});o.userData.noCastShadow=!0;let l=new ee({color:16770500,roughness:.19,metalness:.08,transparent:!0,opacity:.16,emissive:16759408,emissiveIntensity:.05,depthWrite:!1,side:ln});l.userData.noCastShadow=!0;let c=(h,u=.6,p=0,m={})=>new ee({color:h,roughness:u,metalness:p,...m});return{walnut:c(12167585,.38,0,{map:i,bumpMap:i,bumpScale:.035}),darkwood:c(3810073,.72),oak:c(7360569,.62,0,{map:i}),brass:c(12096851,.31,.82),gold:c(13874284,.27,.8),aged:c(6116155,.53,.72),black:c(1318949,.36,.65),iron:c(2635320,.52,.6),steel:c(9083294,.3,.88),engine:c(2507842,.36,.65),red:c(6896434,.49,.3),cream:c(13285786,.58),brick:c(16777215,.93,0,{map:t,bumpMap:t,bumpScale:.022}),plaster:c(16777215,.92,0,{map:e,bumpMap:e,bumpScale:.014}),roof:c(2638668,.7,.2),snow:c(16777215,.82,0,{map:n,bumpMap:n,bumpScale:.012}),snowShade:c(12769247,.92),pine:c(1717809,.9),pineLight:c(3033917,.95),trunk:c(5587250,.91),stone:c(8950676,.94),gravel:c(5465447,.94),leather:c(8408626,.72),cloth:c(6780266,.96),glass:c(3620139,.2,.25),warm:r,windowGlass:l,lampGlass:a,filament:o,ember:new ee({color:16762487,emissive:16749868,emissiveIntensity:3.1}),signalRed:new ee({color:16742752,emissive:16728096,emissiveIntensity:2.1}),signalGreen:new ee({color:11984035,emissive:8643979,emissiveIntensity:1.8})}}var ri=new Map;function te(i,t,e,n=0,s=0,r=0){let a=new ze(t,e);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Y(i,t,e,n,s,r=0,a=0,o=0,l=0){let c=`b${t}_${e}_${n}_${l}`;return ri.has(c)||ri.set(c,l?new ta(t,e,n,2,l):new ni(t,e,n)),te(i,ri.get(c),s,r,a,o)}function Vt(i,t,e,n,s,r=0,a=0,o=0,l=32){let c=`c${t}_${e}_${n}_${l}`;return ri.has(c)||ri.set(c,new hr(t,e,n,l)),te(i,ri.get(c),s,r,a,o)}function ft(i,t,e,n=0,s=0,r=0,a=1,o=1,l=1){let c="s"+t;ri.has(c)||ri.set(c,new Pn(t,14,10));let h=te(i,ri.get(c),e,n,s,r);return h.scale.set(a,o,l),h}function ie(i,t,e,n,s=0,r=0,a=0,o=xe){return te(i,new Lo(t,e,8,64,o),n,s,r,a)}function Gt(i,t,e,n,s,r=n,a=8){t=Array.isArray(t)?ne(...t):t,e=Array.isArray(e)?ne(...e):e;let o=e.clone().sub(t),l=Vt(i,r,n,o.length(),s,...t.clone().add(e).multiplyScalar(.5).toArray(),a);return l.quaternion.setFromUnitVectors(ne(0,1,0),o.normalize()),l}function Te(i,t,e,n){return te(i,new zi(new Oi(t.map(s=>ne(...s))),Math.max(16,t.length*6),e,8,!1),n)}function Ct(i,t=0,e=0,n=0,s=0){let r=new Tn;return r.position.set(t,e,n),r.rotation.y=s,i.add(r),r}function Ke(i,t,e,n,s,r,a,o={}){let l=hn(1024,Math.round(1024*n/e),(u,p,m)=>{u.fillStyle=o.bg||"#182e31",u.fillRect(0,0,p,m),o.border!==!1&&(u.strokeStyle=o.ink||"#e0c897",u.lineWidth=4,u.strokeRect(12,12,p-24,m-24),u.lineWidth=1,u.strokeRect(20,20,p-40,m-40)),u.fillStyle=o.ink||"#e0c897",u.textAlign="center",u.textBaseline="middle",u.font=`${o.weight||400} ${Math.floor(m*(o.fontScale||.46))}px ${o.font||"Georgia"}`;let g=t.split(`
`);g.forEach((_,d)=>u.fillText(_,p/2,m/2+(d-(g.length-1)/2)*m*.31,p*.91))}),c=new ee({map:l,roughness:.53,metalness:o.metalness||.12}),h=te(i,new zn(e,n),c,s,r,a);return h.castShadow=!1,h}function zs(i,t){let e=new gn,n=i/2;return e.moveTo(-n,0),e.lineTo(n,0),e.lineTo(n,t-n),e.absarc(0,t-n,n,0,Math.PI,!1),e.lineTo(-n,0),e}function oi(i,t,e,n,s,r,a,o=.025){let l=new Do(t,{depth:e,bevelEnabled:!!o,bevelThickness:o,bevelSize:o,bevelSegments:2,steps:1,curveSegments:24});return te(i,l,n,s,r,a)}function Re(i,t,e,n,s=.2,r=.07,a=.15,o){return ft(i,1,o,t,e,n,s,r,a)}function qe(i){i.updateMatrixWorld(!0);let t=new Map,e=new oe().copy(i.matrixWorld).invert(),n=[];i.traverse(r=>{if(!r.isMesh||r.userData.dynamic||Array.isArray(r.material))return;let a=r.material.uuid,o=t.get(a);o||(o={mat:r.material,geos:[]},t.set(a,o));let l=r.geometry.clone();l.index&&l.copy(l.toNonIndexed());let c=new oe().multiplyMatrices(e,r.matrixWorld);l.applyMatrix4(c),l.deleteAttribute("uv1"),l.deleteAttribute("tangent"),o.geos.push(l),n.push(r)}),n.forEach(r=>r.removeFromParent());let s=0;for(let r of t.values()){let a=Xu(r.geos,!1);if(a){let o=te(i,a,r.mat);r.mat.userData.noCastShadow&&(o.castShadow=!1),o.name="Batched \xB7 "+r.mat.uuid.slice(0,6),s+=a.attributes.position.count/3}r.geos.forEach(o=>o.dispose())}return s}var Kt=1.49;function Ye(i,t){return Kt+.045*Math.sin(i*1.7+t*.8)+.025*Math.sin(t*3.3-i*.9)+.018*Math.cos(i*4.8+t*5)}function ex(i,t){let e=Ct(i);e.name="Turned walnut & engraved brass";let n=[[0,-.18],[3.8,-.18],[4.22,-.17],[4.43,-.08],[4.59,.02],[4.67,.11],[4.68,.19],[4.62,.24],[4.53,.27],[4.46,.33],[4.44,.4],[4.44,.69],[4.47,.76],[4.6,.82],[4.67,.91],[4.67,1.02],[4.59,1.1],[4.39,1.14],[4.36,1.27],[0,1.27]].map(a=>new X(...a));te(e,new yi(n,192),t.walnut);for(let[a,o,l]of[[4.65,.18,.035],[4.55,.3,.022],[4.46,.4,.018],[4.46,.72,.028],[4.64,.91,.045],[4.55,1.1,.025],[4.36,1.25,.055]]){let c=ie(e,a,l,t.brass,0,o,0);c.rotation.x=Math.PI/2}Vt(e,4.32,4.32,.09,t.aged,0,1.25,0,160);for(let a=0;a<144;a++){let o=a/144*xe,l=Ct(e,Math.sin(o)*4.45,.55,Math.cos(o)*4.45,o);Y(l,.015,.23,.012,t.darkwood,0,0,0,.004),a%4===0&&ft(l,.023,t.aged,0,.135,.012)}for(let a=0;a<40;a++){let o=a/40*xe,l=Ct(e,Math.sin(o)*4.475,.58,Math.cos(o)*4.475,o);for(let c of[-1,1]){Te(l,[[0,-.1,0],[c*.08,-.04,.004],[c*.14,.07,.004],[c*.07,.1,.004],[c*.04,.055,.004]],.007,t.aged);for(let h=0;h<3;h++){let u=ft(l,.033,t.aged,c*(.05+h*.023),-.015+h*.032,.005,1.3,.4,.15);u.rotation.z=-c*.7}}}let s=Ct(e,0,.6,4.49);Y(s,2.35,.48,.07,t.brass,0,0,0,.06),Y(s,2.21,.36,.02,t.aged,0,0,.044,.025),Ke(s,"W I N T E R   S T A T I O N",2.1,.25,0,.012,.058,{bg:"#534b35",ink:"#ead9ab",fontScale:.43,border:!1,metalness:.55});for(let a of[-1.08,1.08])ft(s,.027,t.gold,a,0,.065,1,1,.3),Y(s,.022,.005,.006,t.darkwood,a,0,.075);let r=Ct(e,0,.55,-4.47,Math.PI);return Ke(r,`THE LITTLE WORLD \xB7 001
WINTER / 1924`,1.35,.32,0,0,.02,{fontScale:.28,bg:"#2c231c",ink:"#bba274"}),e}function nx(i,t){let e=Ct(i);e.name="Sculpted snow & slate footpath",Vt(e,4.29,4.29,.19,t.snowShade,0,1.31,0,160);let n=160,s=36,r=[],a=[],o=[];for(let h=0;h<=s;h++)for(let u=0;u<=n;u++){let p=u/n*xe,m=4.29*h/s,g=Math.cos(p)*m,_=Math.sin(p)*m;if(r.push(g,Ye(g,_)-Math.pow(m/4.29,18)*.055,_),a.push(g/3,_/3),h<s&&u<n){let d=h*(n+1)+u;o.push(d,d+n+1,d+1,d+1,d+n+1,d+n+2)}}let l=new ae;l.setAttribute("position",new zt(r,3)),l.setAttribute("uv",new zt(a,2)),l.setIndex(o),l.computeVertexNormals(),te(e,l,t.snow);for(let h=-.1;h<2.2;h+=.32)for(let u=-1.1;u<.1;u+=.32){let p=Y(e,ut(.23,.28),.055,ut(.23,.29),t.stone,u+ut(-.02,.02),Ye(u,h)+.012,h+ut(-.02,.02),.035);p.rotation.y=ut(-.09,.09),ut()>.48&&Re(e,u+.05,p.position.y+.03,h+.07,.11,.025,.08,t.snow)}let c=new gn;c.absellipse(0,0,.047,.095,0,xe,!1,0);for(let h=0;h<17;h++){let u=1.9-h*.143,p=-.44+Math.sin(h*.24)*.18+(h%2?.075:-.075),m=te(e,new pr(c),t.snowShade,p,Ye(p,u)+.008,u);m.rotation.x=-Math.PI/2,m.rotation.z=h%2?.14:-.14,Y(e,.049,.004,.036,t.snowShade,p,Ye(p,u)+.01,u+.077,.012)}for(let h=0;h<140;h++){let u=ut(0,xe),p=ut(3.6,4.15),m=Math.cos(u)*p,g=Math.sin(u)*p;g>1.6||ft(e,.035,t.gravel,m,Ye(m,g)-.005,g,ut(.7,1.8),ut(.3,.7),ut(.6,1.2))}return e}function Uc(i,t,e,n,s,r=0,a=.57,o=1.09){let l=Ct(i,e,n,s,r),c=zs(a+.11,o+.06);c.holes.push(Bc(0,.03,a,o)),oi(l,c,.065,t.cream,0,-.03,-.045,.008);let h=zs(a,o);h.holes.push(Bc(0,.035,a-.09,o-.08)),oi(l,h,.035,t.darkwood,0,0,.027,.005);let u=te(l,new pr(zs(a-.09,o-.08)),t.windowGlass,0,.035,.068);u.castShadow=!1,u.renderOrder=1,Y(l,.035,o-.07,.036,t.darkwood,0,o*.5,.083),Y(l,a-.07,.035,.036,t.darkwood,0,o*.46,.084),Y(l,a-.1,.026,.036,t.darkwood,0,o*.74,.084),Y(l,a+.2,.07,.18,t.cream,0,-.045,.045,.015),Re(l,0,-.005,.084,a*.65,.04,.1,t.snow);for(let g of[-1,1]){Y(l,.13,o-.18,.04,t.engine,g*(a*.5+.16),o*.43,.007,.012);for(let _=0;_<7;_++)Y(l,.105,.018,.025,t.black,g*(a*.5+.16),.12+_*.103,.032)}for(let g of[-1,1])for(let _=0;_<3;_++){let d=Y(l,.026,o*.64,.023,t.cloth,g*(a*.42-_*.012),o*.46,-.09-_*.008,.01);d.rotation.z=g*.025}l.updateWorldMatrix(!0,!1);let p=l.localToWorld(ne(0,.035+(o-.08)/2,.075)),m=ne(0,0,1).transformDirection(l.matrixWorld);return i.userData.windows.push({center:p,normal:m,width:a-.09,height:o-.08}),l}function Bc(i,t,e,n){let s=e/2,r=new Rs;return r.moveTo(i-s,t),r.lineTo(i-s,t+n-s),r.absarc(i,t+n-s,s,Math.PI,0,!0),r.lineTo(i+s,t),r.closePath(),r}function Nc(i,t,e,n,s,r){let a=Ct(i,0,0,n,s),o=new gn;o.moveTo(-e/2,.725),o.lineTo(e/2,.725),o.lineTo(e/2,2.355),o.lineTo(-e/2,2.355),o.closePath();for(let[l,c,h,u]of r)o.holes.push(Bc(l,c,h,u));return oi(a,o,.105,t.plaster,0,0,-.105,0),a}function ix(i,t){let e=Ct(i);e.name="Visible waiting room \xB7 ticket desk, benches and shaded pendants",Y(e,3.06,.045,1.96,t.oak,0,.755,0),Y(e,3.04,.045,1.94,t.cream,0,2.235,0);for(let r=-1.45;r<1.5;r+=.16)Y(e,.008,.004,1.92,t.darkwood,r,.781,0);Y(e,1.05,.46,.3,t.engine,-.08,1.01,-.53,.025),Y(e,1.12,.055,.37,t.oak,-.08,1.27,-.53,.016);for(let r of[-.38,.18])Y(e,.44,.32,.018,t.darkwood,r,1.02,-.366,.012),Y(e,.38,.26,.021,t.engine,r,1.02,-.352,.01);Y(e,.48,.06,.19,t.brass,-.09,1.32,-.52,.01),Y(e,.15,.13,.16,t.black,.21,1.35,-.52,.018);for(let r of[-1.24,1.24]){Y(e,.28,.065,.91,t.oak,r,.99,0,.012),Y(e,.045,.32,.91,t.engine,r+Math.sign(r)*.12,1.17,0,.012);for(let a of[-.31,.31])Y(e,.04,.24,.04,t.darkwood,r,.87,a)}for(let r of[-.82,.82]){Gt(e,[r,2.22,-.08],[r,1.96,-.08],.01,t.brass);let a=te(e,new Pn(.14,24,12,0,xe,0,Math.PI*.52),t.cream,r,1.94,-.08);a.scale.y=.57,ie(e,.139,.009,t.brass,r,1.935,-.08).rotation.x=Math.PI/2,ft(e,.048,t.filament,r,1.9,-.08);let o=new ii(16760181,6,3,2);o.position.set(r,1.85,-.08),e.add(o),i.userData.interiorLights.push(o)}let n=Ct(e,0,1.64,-.93);Ke(n,`MERRY CHRISTMAS
NORD EXPRESS`,.78,.34,0,0,0,{bg:"#33423b",ink:"#f4d6a0",fontScale:.25});let s=Ct(e,-.7,.78,-.57);Y(s,.25,.2,.23,t.red,0,.1,0,.016),Y(s,.035,.205,.24,t.gold,0,.1,0),Y(s,.255,.205,.027,t.gold,0,.1,0)}function sx(i,t){let s=[],r=[],a=[];for(let l=0;l<=58;l++)for(let c=0;c<=42;c++){let h=(l/58-.5)*3.92,u=(c/42-.5)*2.76,p=Math.sin(c*.9)*.018+Math.sin(c*2.3)*.012;h+=Math.sign(h)*p*Math.pow(Math.abs(h)/1.96,12);let m=3.36-Math.abs(h)*.62+.115+Math.sin(h*7+u*3)*.017+Math.sin(h*15-u*8)*.009;m-=Math.pow(Math.abs(u)/1.38,30)*.055,s.push(h,m,u),r.push(h,u);let g=h>1.46+Math.sin(u*12)*.075&&u>.33||h<-1.62+Math.sin(u*9)*.07&&u<-.4;if(l<58&&c<42&&!g){let _=l*43+c;a.push(_,_+1,_+42+1,_+1,_+42+2,_+42+1)}}let o=new ae;o.setAttribute("position",new zt(s,3)),o.setAttribute("uv",new zt(r,2)),o.setIndex(a),o.computeVertexNormals(),te(i,o,t.snow);for(let l of[-1,1]){for(let c=0;c<28;c++)Re(i,l*1.93,2.25+ut(-.015,.025),(c/27-.5)*2.69,ut(.07,.12),ut(.055,.08),ut(.08,.12),t.snow);for(let c=0;c<13;c++){let h=ut(-1.3,1.3),u=Vt(i,0,.015,ut(.06,.22),t.snowShade,l*1.96,2.16-ut(0,.04),h,7)}}}function rx(i,t){let e=Ct(i,-.82,Kt+.08,-.88);e.name="Winter Station \xB7 individually modelled architecture",e.userData.windows=[],e.userData.interiorLights=[],Y(e,3.43,.18,2.35,t.stone,0,0,0,.06),Y(e,3.28,.66,2.15,t.brick,0,.4,0),Nc(e,t,3.25,1.06,0,[[-1.03,.83,.57,1.06],[1.03,.83,.57,1.06]]),Nc(e,t,3.25,-1.06,Math.PI,[[-1.02,.84,.51,1.03],[0,.84,.51,1.03],[1.02,.84,.51,1.03]]);for(let o of[-1,1]){let l=Nc(e,t,2.12,0,o*Math.PI/2,[[-.49,.84,.54,1.06],[.47,.84,.54,1.06]]);l.position.x=o*1.625}ix(e,t),Y(e,3.4,.09,2.23,t.cream,0,.75,0,.015),Y(e,3.36,.09,2.25,t.darkwood,0,2.26,0);for(let o of[-1.61,1.61])for(let l of[-1.07,1.07]){Y(e,.11,2.28,.11,t.darkwood,o,1.22,l,.012);for(let c=0;c<5;c++)Y(e,.22,.12,.22,t.cream,o,.13+c*.14,l,.015)}for(let o of[-1.077,1.077]){for(let l of[-.58,.58])Y(e,.072,1.38,.055,t.darkwood,l,1.5,o);for(let l of[-1.08,1.08])Gt(e,[l-.4,2.14,o],[l+.4,1.63,o],.028,t.darkwood),Gt(e,[l+.4,2.14,o],[l-.4,1.63,o],.028,t.darkwood);Y(e,3.2,.067,.07,t.darkwood,0,1.92,o)}let n=new gn;n.moveTo(-1.69,2.25),n.lineTo(1.69,2.25),n.lineTo(0,3.3),n.closePath(),oi(e,n,2.14,t.plaster,0,0,-1.07,0);for(let o of[-1.088,1.088]){Gt(e,[-1.73,2.25,o],[0,3.34,o],.055,t.darkwood),Gt(e,[0,3.34,o],[1.73,2.25,o],.055,t.darkwood),Y(e,.08,.86,.075,t.darkwood,0,2.77,o);for(let l of[-.7,.7])Gt(e,[0,2.35,o],[l,2.86,o],.035,t.darkwood)}for(let o of[-1,1]){let l=Y(e,2.29,.12,2.7,t.roof,o*.96,2.76,0,.02);l.rotation.z=-o*.554;for(let c=-1.28;c<=1.3;c+=.18){let h=Gt(e,[0,3.35,c],[o*1.97,2.13,c],.012,t.black)}}sx(e,t);for(let o of[-1.4,1.4])Gt(e,[-1.99,2.17,o],[0,3.4,o],.043,t.darkwood),Gt(e,[0,3.4,o],[1.99,2.17,o],.043,t.darkwood);for(let o of[-1.98,1.98]){Gt(e,[o,2.13,-1.4],[o,2.13,1.4],.052,t.aged),Te(e,[[o,2.12,-1.15],[o+.06,2.03,-1.15],[o+.07,.2,-1.15],[o+.14,.14,-1.15]],.032,t.aged);for(let l of[.5,1.3,1.9])ie(e,.042,.009,t.brass,o+.065,l,-1.15).rotation.x=Math.PI/2}let s=Ct(e,0,.12,1.09);oi(s,zs(.78,1.88),.07,t.cream,0,0,0),oi(s,zs(.65,1.79),.03,t.engine,0,.035,.08);for(let o of[-.16,.16])Y(s,.23,.55,.03,t.darkwood,o,.37,.135,.016),Y(s,.2,.48,.025,t.engine,o,.37,.154,.015),Y(s,.23,.65,.025,t.warm,o,1.03,.14,.025);Y(s,.035,1.51,.03,t.brass,0,.87,.17),Y(s,.6,.045,.04,t.darkwood,0,1.4,.17),ft(s,.032,t.gold,.22,.73,.2),Y(s,.04,.14,.018,t.brass,.22,.75,.177,.01);for(let o=0;o<3;o++)Y(e,1.15+o*.21,.085,.25,t.stone,0,-.02-o*.07,1.2+o*.2,.025),Re(e,.33,-.01-o*.07,1.2+o*.2,.18,.035,.13,t.snow);for(let o of[-1.03,1.03])Uc(e,t,o,.83,1.09,0,.56,1.05);for(let o of[-1,1])for(let l of[-.49,.47])Uc(e,t,o*1.64,.84,l,o*Math.PI/2,.53,1.05);for(let o of[-1.02,0,1.02])Uc(e,t,o,.84,-1.1,Math.PI,.5,1.02);Ke(e,"W I N T E R  S T A T I O N",2.1,.29,0,2.055,1.19,{bg:"#23403d",ink:"#f1d9a4",fontScale:.43}),Ke(e,"EST. 1924",.73,.18,0,2.74,1.12,{bg:"#c3b69a",ink:"#493d2e",fontScale:.58,border:!1}),Y(e,3.58,.08,.92,t.roof,0,1.86,1.61,.025),Y(e,3.61,.085,.95,t.snow,0,1.94,1.61,.055);for(let o of[-1.53,1.53]){Gt(e,[o,.05,2.01],[o,1.83,2.01],.038,t.engine),Vt(e,.075,.1,.12,t.black,o,.08,2.01);for(let l of[-1,1])Te(e,[[o,1.25,2.01],[o+l*.3,1.57,2.01],[o+l*.28,1.74,2.01],[o+l*.12,1.69,2.01]],.018,t.brass);Gt(e,[o,1.4,2.01],[o,1.85,1.39],.022,t.iron)}for(let o=-1.75;o<1.75;o+=.11){let l=ie(e,.055,.011,t.brass,o,1.81,2.08,Math.PI);l.rotation.z=Math.PI}Y(e,3.62,.1,.06,t.engine,0,1.81,2.08),Y(e,.36,.9,.38,t.brick,-.88,3.12,-.55,.02);for(let o of[3.32,3.46,3.57])Y(e,.42,.055,.44,t.cream,-.88,o,-.55,.015);Y(e,.29,.015,.29,t.black,-.88,3.61,-.55);for(let o of[-1.05,-.71])Re(e,o,3.62,-.55,.08,.04,.24,t.snow);let r=Ct(e,1.7,1.25,0,Math.PI/2);Y(r,.42,.62,.04,t.darkwood,0,0,0,.02),Ke(r,`DEPARTURES
18:40 \xB7 NORD EXPRESS
19:15 \xB7 WINTER LOCAL
20:05 \xB7 LAST TRAIN`,.36,.55,0,0,.025,{bg:"#d1c8ac",ink:"#364443",fontScale:.12});let a=Ct(e,-1.69,1.3,-.1,-Math.PI/2);return Ke(a,`VISIT
THE ALPS
1924`,.4,.65,0,0,.015,{bg:"#506c71",ink:"#f3dfb8",fontScale:.22}),e}function Yu(i=0,t=!1){let s=[],r=[],a=[];for(let l=0;l<=22;l++)for(let c=0;c<=8;c++){let h=l/22,u=c/8*2-1,p=t?1:l%2?.79:1.1,m=(t?.205:.25)*Math.pow(1-h,.73)*Math.pow(Math.sin(Math.PI*(h*.94+.03)),.22)*p,g=t?.1+h*.86:h,d=(t?.145:.035)+Math.sqrt(Math.max(0,1-u*u))*(t?.065:.055)-h*h*.14+Math.sin(h*19+i+u*3)*(t?.008:.012)-Math.pow(Math.abs(u),8)*(t?.035:.01);if(s.push(g,d,u*m),r.push(h,c/8),l<22&&c<8){let f=l*9+c;a.push(f,f+1,f+8+1,f+1,f+8+2,f+8+1)}}let o=new ae;return o.setAttribute("position",new zt(s,3)),o.setAttribute("uv",new zt(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function zc(i,t,e=[[-3.15,-1.48,4.35],[2.58,-1.65,4.55],[.85,-3.2,3.9],[-1.75,-3.05,3.55],[3.3,0,2.6],[-3.5,.65,2.1],[2.3,-2.95,2.8]]){let n=Array.from({length:4},(r,a)=>Yu(a)),s=Array.from({length:4},(r,a)=>Yu(a,!0));for(let[r,a,o]of e){let l=Ct(i,r,Ye(r,a),a,ut(0,xe));l.name="Hand-shaped snow-laden fir",Vt(l,.042,.12,o*.9,t.trunk,0,o*.45,0,10);let c=11;for(let h=0;h<c;h++){let u=.2+h*o*.084,p=(1-h/c)*o*.275+.018,m=7+h%2;for(let g=0;g<m;g++){let _=g/m*xe+h*1.83+ut(-.16,.16),d=p*ut(.78,1.15),f=u+ut(-.11,.11)*(o/3),E=[Math.cos(_)*d,f-.07,Math.sin(_)*d];Gt(l,[0,f+.06,0],E,.022,t.trunk,.006,6);let v=Ct(l,0,f,0,-_),x=(g+h)%4;te(v,n[x],h%2?t.pine:t.pineLight).scale.set(d,o/3,d);for(let b of[-1,1]){let T=te(v,n[(x+1)%4],t.pine,d*.34,-.015,b*d*.07);T.rotation.y=b*.6,T.scale.set(d*.59,o/4,d*.55)}if(ut()>.08){let b=te(v,s[x],t.snow);b.scale.set(d,o/3,d*ut(.76,1.02)),b.rotation.x=ut(-.07,.07)}for(let b=0;b<6;b++){let T=.34+b*.1;for(let I of[-1,1])Gt(v,[T*d,.018,I*d*.07],[(T+.14)*d,.045,I*d*(.13-.08*T)],.006,t.pineLight,.0015,4)}}}Vt(l,0,.12,o*.14,t.pine,0,o*.96,0,11),Vt(l,0,.07,o*.095,t.snow,0,o*.988,0,11);for(let h=0;h<6;h++){let u=h/6*xe;Re(l,Math.cos(u)*.19,.035,Math.sin(u)*.19,.24,.075,.23,t.snow)}}}function Fc(i,t,e,n,s,r){let a=Ct(i,e,Ye(e,n),n);Vt(a,.11,.17,.13,t.black,0,.03,0),Vt(a,.045,.065,s-.5,t.iron,0,(s-.5)/2,0,16);for(let c of[.22,s-.5])Vt(a,.073,.073,.055,t.brass,0,c,0,20);let o=s-.26;Y(a,.3,.42,.3,t.lampGlass,0,o,0,.02),ft(a,.037,t.filament,0,o-.02,0),Gt(a,[0,o+.2,0],[0,o+.02,0],.009,t.aged);for(let c of[-1,1])for(let h of[-1,1])Gt(a,[c*.16,o-.23,h*.16],[c*.12,o+.23,h*.12],.016,t.iron);Vt(a,.1,.28,.19,t.black,0,o+.3,0,4).rotation.y=Math.PI/4,Vt(a,.08,.27,.11,t.snow,0,o+.39,0,4).rotation.y=Math.PI/4,ft(a,.042,t.brass,0,o+.49,0);let l=new ii(16759917,7,3.8,2);return l.position.set(e,Ye(e,n)+o,n),i.add(l),r.push(l),ne(e,Ye(e,n)+o,n)}function Zu(i,t,e,n,s){let r=Ct(i,e,Ye(e,n),n,s);for(let a of[-1,1]){for(let o of[0,.35])Gt(r,[a*.47,.02,o],[a*.47,.42,o-.02],.025,t.iron);Te(r,[[a*.47,.2,.33],[a*.47,.37,.32],[a*.47,.83,.47]],.022,t.iron),Te(r,[[a*.47,.4,0],[a*.47,.58,-.02],[a*.47,.58,.26]],.021,t.iron)}for(let a=0;a<4;a++)Y(r,1.12,.055,.075,t.oak,0,.43,a*.095,.013),Y(r,1.12,.075,.045,t.oak,0,.58+a*.095,.41+a*.018,.011);for(let a=0;a<7;a++)Re(r,(a/6-.5)*1.04,.93,.48,.11,.04,.07,t.snow);return Re(r,-.32,.48,.17,.23,.04,.18,t.snow),r}function Oc(i,t,e,n,s,r=0){let a=Ct(i,e,Ye(e,n)+s*.25,n,r);Y(a,s,s*.5,s*.33,t.leather,0,0,0,.04);for(let o of[-.31,.31])Y(a,.035,s*.52,s*.35,t.oak,o*s,0,0,.008),Y(a,.055,.08,.016,t.brass,o*s,.01,s*.18,.01);Te(a,[[-s*.13,s*.26,0],[-s*.13,s*.36,0],[s*.13,s*.36,0],[s*.13,s*.26,0]],.015,t.darkwood);for(let o of[-1,1])for(let l of[-1,1])ft(a,.025,t.brass,o*s*.43,l*s*.19,s*.17,1,1,.3);return Ke(a,"NORD",s*.24,s*.13,.1*s,.08*s,s*.17+.005,{bg:"#d2bc87",ink:"#5b4132",fontScale:.5,border:!1}),a}function ox(i,t){let e=[],n=[];n.push(Fc(i,t,-2.74,1.03,2.52,e),Fc(i,t,2.8,.87,2.58,e),Fc(i,t,.4,-2.5,2.35,e)),Zu(i,t,-2.64,-.25,.28),Zu(i,t,1.9,-.8,-.28),Oc(i,t,-2.15,.19,.46,.15),Oc(i,t,-2.04,.45,.35,-.2),Oc(i,t,1.46,-.15,.4,.1);let s=Ct(i,.92,Kt,.18);Vt(s,.11,.19,.16,t.iron,0,0,0),Vt(s,.035,.065,2.39,t.engine,0,1.17,0);for(let h of[.25,1.9,2.32])Vt(s,.068,.068,.06,t.brass,0,h,0);Te(s,[[0,2.2,0],[.02,2.57,0],[.25,2.68,0],[.4,2.57,0]],.033,t.iron);let r=Ct(s,.4,2.48,0);Vt(r,.36,.36,.16,t.brass).rotation.x=Math.PI/2;for(let h of[-1,1]){let u=Ct(r,0,0,h*.09,h<0?Math.PI:0),p=hn(512,512,(g,_,d)=>{g.fillStyle="#e6debf",g.fillRect(0,0,_,d),g.strokeStyle="#48504a",g.lineWidth=5,g.beginPath(),g.arc(_/2,d/2,230,0,xe),g.stroke();for(let f=0;f<60;f++)g.save(),g.translate(_/2,d/2),g.rotate(f/60*xe),g.lineWidth=f%5?2:5,g.beginPath(),g.moveTo(0,-220),g.lineTo(0,f%5?-209:-196),g.stroke(),g.restore();g.fillStyle="#283936",g.textAlign="center",g.textBaseline="middle",g.font="34px Georgia",["XII","III","VI","IX"].forEach((f,E)=>{let v=E/4*xe;g.fillText(f,_/2+Math.sin(v)*164,d/2-Math.cos(v)*164)}),g.font="15px Georgia",g.fillText("WINTER STATION",256,325)}),m=new ee({map:p,roughness:.6});te(u,new Po(.319,64),m,0,0,.003);for(let[g,_,d]of[[.21,Math.PI*.4,.018],[.15,Math.PI*1.12,.027]]){let f=Y(u,d,g,.012,t.black,Math.sin(_)*g*.4,Math.cos(_)*g*.4,.018,.005);f.rotation.z=-_}ft(u,.025,t.brass,0,0,.035,1,1,.4)}Re(r,0,.33,0,.33,.06,.14,t.snow);let a=Ct(i,-2.9,Kt,.03,.3);for(let h of[-.44,.44])Vt(a,.025,.035,1.4,t.engine,h,.7,0),ft(a,.045,t.brass,h,1.43,0);Y(a,1.03,.43,.065,t.engine,0,1.14,0,.025),Ke(a,`WINTER STATION
PLATFORM 01`,.96,.36,0,1.14,.036,{fontScale:.29}),Re(a,0,1.39,0,.53,.045,.07,t.snow);for(let h=-2.6;h<2.1;h+=.24)Vt(i,.012,.014,.59,t.iron,h,Kt+.28,-2.27,6),ft(i,.026,t.brass,h,Kt+.59,-2.27);for(let h of[.15,.48])Gt(i,[-2.65,Kt+h,-2.27],[2.11,Kt+h,-2.27],.015,t.iron);let o=Ct(i,3.24,Kt,-.28,-.3);Y(o,.25,.1,.25,t.stone,0,.02,0,.03),Vt(o,.036,.055,2.18,t.iron,0,1.1,0),Y(o,.29,.56,.18,t.black,0,1.89,.07,.12);for(let[h,u]of[[1.77,t.signalRed],[2,t.signalGreen]]){Vt(o,.072,.072,.06,u,0,h,.19,24).rotation.x=Math.PI/2;let p=ie(o,.089,.025,t.black,0,h,.22,Math.PI)}Y(o,.8,.1,.065,t.cream,-.31,2.18,0,.02),Y(o,.23,.1,.075,t.red,-.57,2.18,.006);for(let h=.2;h<2.1;h+=.14)Gt(o,[.12,h,-.13],[.25,h,-.13],.009,t.iron);for(let h of[.12,.25])Gt(o,[h,.1,-.13],[h,2.13,-.13],.012,t.iron);let l=Ct(i,-.8,Kt,-2.7,.12);Y(l,.7,.07,.48,t.oak,0,.22,0,.018);for(let h of[-.27,.27])for(let u of[-.18,.18])Vt(l,.075,.075,.035,t.black,h,.1,u,18).rotation.z=Math.PI/2;Te(l,[[-.3,.22,-.2],[-.3,.74,-.2],[.3,.74,-.2],[.3,.22,-.2]],.021,t.iron),Y(l,.43,.39,.36,t.oak,.02,.46,0,.015);for(let h of[.35,.57])Y(l,.45,.04,.38,t.aged,.02,h,0);Ke(l,"FRAGILE",.26,.11,.02,.47,.187,{bg:"#9d8662",ink:"#332c23",fontScale:.5,border:!1}),Re(l,0,.67,.02,.25,.04,.2,t.snow);let c=Ct(i,-.82,Kt+1.79,.278);ie(c,.14,.035,t.pine,0,0,0);for(let h=0;h<15;h++){let u=h/15*xe;ft(c,.023,t.red,Math.sin(u)*.14,Math.cos(u)*.14,.028)}return{lights:e,glows:n}}function $u(i,t,e=t){ex(i,t),nx(i,t);let n=rx(i,t);return zc(i,e),{...ox(i,t),windows:n.userData.windows,interiorLights:n.userData.interiorLights}}var br=3.22,Hc=-.16;function Mi(i,t=br){return ne(Math.sin(i)*t,Kt+.06,Math.cos(i)*t+Hc)}function ax(i){let t=[];for(let e=0;e<=180;e++){let n=-1.85+e/180*3.98;t.push(ne(Math.sin(n)*i,Kt+.065,Math.cos(n)*i+Hc))}return new Oi(t)}function lx(i,t){let e=Ct(i);e.name="Curved rails, sleepers & snow drifts";for(let n=0;n<82;n++){let s=-1.85+n/81*3.98,r=Mi(s),a=Ct(e,r.x,Kt+.005,r.z,s);Y(a,.105,.08,.91,t.darkwood,0,0,0,.012);for(let o of[-.245,.245]){Y(a,.12,.04,.12,t.iron,0,.055,o,.008);for(let l of[-.043,.043])ft(a,.014,t.steel,l,.079,o)}if(n%4!==0){let o=ut()>.5?.38:-.38;Re(a,0,.08,o,.08,.035,.16,t.snow)}for(let o=0;o<4;o++){let l=ut(-.48,.48),c=ut(-.06,.06);ft(a,.035,t.gravel,c,-.01,l,1,.55,ut(.7,1.4))}}for(let n of[br-.25,br+.25]){let s=ax(n);te(e,new zi(s,240,.032,8,!1),t.steel);let r=te(e,new zi(s,240,.046,8,!1),t.iron);r.position.y=-.045;for(let a=0;a<24;a++){let o=-1.82+a/23*3.9;if(o>-.58&&o<1.03)continue;let l=Mi(o,n),c=Re(e,l.x,Kt+.11,l.z,.14,.025,.04,t.snow);c.rotation.y=o}}for(let n=-.95;n<-.05;n+=.115){let s=Math.sqrt(br*br-n*n)+Hc;Y(e,.105,.04,.82,t.oak,n,Kt+.1,s,.012);for(let r of[-1,1])ft(e,.008,t.iron,n,Kt+.124,s+r*.31)}for(let n of[-1.82,2.1]){let s=Mi(n),r=Ct(e,s.x,Kt+.08,s.z,n);for(let a of[-.28,.28])Gt(r,[-.12,0,a],[.06,.39,a],.025,t.iron),Gt(r,[.23,0,a],[.06,.39,a],.025,t.iron);Y(r,.1,.11,.8,t.red,.05,.4,0,.012),Re(r,.05,.48,0,.11,.035,.4,t.snow)}return e}function kc(i,t,e,n,s,r,a=15){for(let o=0;o<a;o++)ft(i,.013,t.brass,e+(n-e)*o/(a-1),s,r,1,1,.5)}function Ju(i,t,e,n,s,r){let a=Ct(i,e,n,s);Vt(a,r,r,.09,t.black,0,0,0,40).rotation.x=Math.PI/2;let o=ie(a,r-.025,.023,t.steel,0,0,s>0?.054:-.054);Vt(a,r*.72,r*.72,.1,t.engine,0,0,0,32).rotation.x=Math.PI/2;for(let l=0;l<12;l++){let c=l/12*xe;Gt(a,[Math.cos(c)*r*.18,Math.sin(c)*r*.18,s>0?.06:-.06],[Math.cos(c)*r*.77,Math.sin(c)*r*.77,s>0?.06:-.06],.017,t.brass,.014,6)}return Vt(a,r*.19,r*.19,.15,t.brass,0,0,0,24).rotation.x=Math.PI/2,a}function Ku(i,t){lx(i,t);let e=.65,n=Mi(e),s=Ct(i,n.x,Kt+.17,n.z,e);s.name="No. 24 \xB7 brass-riveted steam locomotive",Y(s,2.5,.15,.92,t.black,-.03,.51,0,.025),Y(s,2.29,.06,.94,t.red,-.04,.61,0,.018);for(let d of[-.53,.53]){for(let f of[-.65,-.01,.63])Ju(s,t,f,.31,d,.315);Gt(s,[-.66,.24,d*1.14],[.65,.24,d*1.14],.025,t.steel);for(let f of[-.65,-.01,.63]){Vt(s,.045,.045,.04,t.brass,f,.24,d*1.18,16).rotation.x=Math.PI/2;for(let E=0;E<4;E++)Y(s,.28,.014,.024,t.iron,f,.54+E*.02,d)}Y(s,.33,.21,.18,t.black,.91,.35,d*.91,.05),Gt(s,[.6,.26,d],[1.01,.36,d],.025,t.steel),Y(s,2.21,.045,.12,t.iron,-.01,.69,d*.94,.008),kc(s,t,-1.03,1,.61,d*.95,20)}Vt(s,.376,.376,1.57,t.engine,.23,1.04,0,64).rotation.z=-Math.PI/2;for(let d of[-.49,-.06,.46,.99])ie(s,.38,.025,t.brass,d,1.04,0).rotation.y=Math.PI/2;Vt(s,.395,.395,.14,t.black,1.03,1.04,0,64).rotation.z=Math.PI/2,Vt(s,.29,.29,.025,t.iron,1.115,1.04,0,48).rotation.z=Math.PI/2,ie(s,.285,.015,t.brass,1.135,1.04,0).rotation.y=Math.PI/2;for(let d=0;d<16;d++){let f=d/16*xe;ft(s,.018,t.brass,1.145,1.04+Math.cos(f)*.33,Math.sin(f)*.33)}Ke(s,"24",.22,.22,1.16,1.03,0,{bg:"#1d302c",ink:"#e3c27e",fontScale:.7,border:!1}).rotation.y=Math.PI/2,Gt(s,[1.17,.94,-.12],[1.17,1.14,.12],.017,t.brass),Gt(s,[1.17,1.14,-.12],[1.17,.94,.12],.017,t.brass),Vt(s,.18,.24,.3,t.black,.37,1.44,0,32),ft(s,.18,t.brass,.37,1.59,0,1,.43,1),Vt(s,.1,.15,.24,t.engine,-.19,1.43,0),ft(s,.11,t.brass,-.19,1.56,0,1,.4,1);let r=[[0,0],[.13,0],[.12,.1],[.105,.32],[.19,.46],[.2,.5],[.145,.51],[.13,.45],[.08,.31],[.08,.12],[0,.12]].map(d=>new X(...d));te(s,new yi(r,40),t.black,.78,1.34,0),ie(s,.19,.018,t.brass,.78,1.83,0).rotation.x=Math.PI/2;for(let d of[-.34,.34]){Te(s,[[-.63,1.27,d],[.12,1.3,d],[.64,1.25,d],[.87,.9,d],[.99,.55,d]],.023,t.brass),Gt(s,[-.47,1.43,d],[.92,1.43,d],.014,t.steel);for(let f of[-.4,.22,.8])Gt(s,[f,1.27,d],[f,1.43,d],.013,t.iron)}Y(s,.79,.79,.85,t.engine,-.92,1.1,0,.025);for(let d of[-.438,.438]){Y(s,.65,.43,.035,t.darkwood,-.92,1.25,d,.035),Y(s,.56,.34,.038,t.warm,-.92,1.28,d*1.05,.035),Y(s,.024,.36,.04,t.brass,-.91,1.28,d*1.11),Y(s,.66,.06,.05,t.brass,-.92,.89,d*1.04,.012),Ke(s,"NORD \xB7 24",.55,.15,-.92,.79,d*1.06,{bg:"#1d3936",ink:"#d2b97f",fontScale:.49,border:!1}).rotation.y=d<0?Math.PI:0,kc(s,t,-1.27,-.57,.72,d,8);for(let f=0;f<3;f++)Y(s,.32,.04,.18,t.iron,-1.13,.39+f*.11,d*1.13,.01);Te(s,[[-1.3,.7,d*1.1],[-1.3,1.46,d*1.1]],.018,t.brass)}for(let d of[-.21,.21])Y(s,.028,.33,.3,t.warm,-.512,1.27,d,.03),Y(s,.03,.02,.35,t.brass,-.49,1.11,d);for(let d=0;d<11;d++)Re(s,-1.4+d*.091,1.83+Math.sin(d*.8)*.007,0,.12,.055,.44,t.snow);Y(s,.87,.07,1.08,t.black,-.94,1.68,0,.035),Re(s,-.93,1.73,0,.48,.09,.49,t.snow),Vt(s,.12,.12,.15,t.brass,1.14,1.41,0).rotation.z=-Math.PI/2,Vt(s,.085,.085,.01,t.ember,1.223,1.41,0,32).rotation.z=-Math.PI/2,Y(s,.16,.16,.97,t.red,1.28,.48,0,.02);for(let d of[-.33,.33])Vt(s,.06,.06,.21,t.iron,1.39,.49,d,20).rotation.z=Math.PI/2,Vt(s,.105,.105,.035,t.black,1.51,.49,d,24).rotation.z=Math.PI/2;for(let d=-.42;d<=.43;d+=.11)Gt(s,[1.32,.41,d*.68],[1.52,.15,d],.019,t.iron);Gt(s,[1.52,.15,-.45],[1.52,.15,.45],.022,t.iron),Vt(s,.08,.13,.12,t.brass,.02,1.53,.24,24),Gt(s,[-.06,1.65,.24],[.1,1.65,.24],.015,t.brass),Te(s,[[1.34,.46,0],[1.6,.46,0],[1.64,.36,0]],.026,t.iron);for(let d=0;d<10;d++)Re(s,-.45+d*.145,1.405,ut(-.025,.025),.12,.035,.17,t.snow);let a=s.localToWorld(ne(1.24,1.41,0)),o=new ii(16761720,3.4,2.4,2);o.position.copy(a),i.add(o);let l=-.245,c=Mi(l),h=Ct(i,c.x,Kt+.17,c.z,l);h.name="Nord Express \xB7 illuminated passenger carriage",Y(h,1.94,.13,.92,t.black,0,.42,0,.02),Y(h,1.78,1.08,.86,t.red,0,1,0,.03),Y(h,1.82,.13,.91,t.engine,0,.64,0,.02);for(let d of[-.46,.46]){for(let f of[-.67,.67])Ju(h,t,f,.24,d,.22);for(let f of[-.59,-.2,.2,.59])Y(h,.3,.49,.027,t.darkwood,f,1.16,d,.022),Y(h,.244,.415,.03,t.warm,f,1.16,d*1.055,.016),Y(h,.021,.42,.035,t.brass,f,1.16,d*1.1),Y(h,.32,.025,.045,t.brass,f,.93,d*1.06);for(let f=-.84;f<.89;f+=.12)Y(h,.009,.3,.01,t.darkwood,f,.8,d);Y(h,1.76,.028,.035,t.brass,0,1.46,d),kc(h,t,-.83,.83,.58,d,18),Ke(h,"N O R D   E X P R E S S",1.4,.13,0,.72,d*1.07,{bg:"#66392e",ink:"#ddc793",fontScale:.47,border:!1}).rotation.y=d<0?Math.PI:0}for(let d of[-.92,.92]){Y(h,.025,.75,.34,t.engine,d,1.02,0,.025),Y(h,.03,.4,.26,t.warm,d*1.02,1.15,0,.02);for(let f of[-.36,.36]){Gt(h,[d,.47,f],[d,1.47,f],.015,t.brass);for(let E=0;E<2;E++)Y(h,.16,.04,.4,t.iron,d,.32+E*.13,f*.5,.01)}}let u=[],p=[],m=[];for(let d=0;d<=20;d++)for(let f=0;f<=36;f++){let E=(d/20-.5)*2.07,v=(f/36-.5)*1.05,x=1.51+Math.sqrt(Math.max(0,.66*.66-v*v))*.43;if(u.push(E,x,v),m.push(d/20,f/36),d<20&&f<36){let C=d*37+f;p.push(C,C+1,C+37,C+1,C+38,C+37)}}let g=new ae;g.setAttribute("position",new zt(u,3)),g.setAttribute("uv",new zt(m,2)),g.setIndex(p),g.computeVertexNormals(),te(h,g,t.snow);for(let d=0;d<15;d++)Re(h,(d/14-.5)*1.99,1.68,.48,.12,.035,.08,t.snow);for(let d of[-.6,0,.6])Vt(h,.055,.065,.07,t.black,d,1.85,0),Re(h,d,1.9,0,.075,.03,.07,t.snow);let _=Mi(.225);return Y(i,.1,.1,.12,t.iron,_.x,Kt+.59,_.z).rotation.y=.2,i.updateMatrixWorld(!0),{steamOrigin:s.localToWorld(ne(.78,1.91,0)),pressureOrigin:s.localToWorld(ne(.02,1.67,.24)),head:o,headPos:s.localToWorld(ne(1.23,1.41,0)),santaSeat:h.localToWorld(ne(-.16,1.81,.02)),coachAngle:l}}var sn={center:ne(0,4.15,0),radius:5.24,floor:1.38};function ju(i,t){let e=new Cs({color:16120831,metalness:0,roughness:.035,transmission:1,thickness:.065,ior:1.46,transparent:!0,opacity:.19,envMapIntensity:.62,clearcoat:1,clearcoatRoughness:.04,side:An,depthWrite:!1}),n=new Pn(sn.radius,160,112,0,Math.PI*2,0,Math.acos((1.26-sn.center.y)/sn.radius)),s=te(i,n,e,0,sn.center.y,0);s.name="Thin optical-glass shell \xB7 65 mm equivalent",s.castShadow=!1,s.receiveShadow=!1,s.renderOrder=3;let r=new le({transparent:!0,depthWrite:!1,side:An,uniforms:{uColor:{value:new Pt(11459044)}},vertexShader:"varying vec3 vN;varying vec3 vEye;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vEye=-p.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 uColor;varying vec3 vN;varying vec3 vEye;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vEye))),4.5);gl_FragColor=vec4(uColor,f*.16);}"}),a=te(i,n,r,0,sn.center.y,0);a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=4;let o=ie(i,4.367,.043,t.gold,0,1.26,0);o.rotation.x=Math.PI/2;let l=ie(i,4.325,.018,t.snowShade,0,1.31,0);return l.rotation.x=Math.PI/2,{shell:s,rim:a,material:e}}function Qu(i,t=2600){let e=sn.radius-.12,n=sn.center,s=new Float32Array(t*3),r=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t);function h(x,C=!1){let b,T,I;do b=ut(-4.9,4.9),T=C?ut(4.7,8.95):ut(1.6,9.1),I=ut(-4.9,4.9);while(b*b+(T-n.y)**2+I*I>(e-.1)**2);s.set([b,T,I],x*3),r.set([ut(-.035,.035),ut(-.18,-.07),ut(-.035,.035)],x*3),c[x]=0}for(let x=0;x<t;x++)h(x),a[x]=ut(.04,.093),o[x]=ut(.6,.98),l[x]=ut(0,Math.PI*2);let u=new ae;u.setAttribute("position",new Ee(s,3).setUsage(Eu)),u.setAttribute("aSize",new Ee(a,1)),u.setAttribute("aAlpha",new Ee(o,1)),u.setAttribute("aPhase",new Ee(l,1));let p=new le({transparent:!0,depthWrite:!1,uniforms:{uDpr:{value:1},uBrightness:{value:.9},uBurst:{value:0},uTime:{value:0}},vertexShader:"attribute float aSize;attribute float aAlpha;attribute float aPhase;uniform float uDpr;uniform float uBurst;uniform float uTime;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vSpin=aPhase+uTime*.3;vShape=step(.076,aSize);gl_PointSize=clamp(aSize*1150.*uDpr*(1.+uBurst*.55)/-mv.z,1.9*uDpr,8.*uDpr);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uBrightness;varying float vAlpha;varying float vSpin;varying float vShape;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;if(r>1.)discard;float soft=smoothstep(1.,.08,r);float arm=pow(abs(cos((atan(p.y,p.x)+vSpin)*3.)),9.)*smoothstep(1.,.45,r);float crystal=max(smoothstep(.52,.0,r),arm*.85);float a=mix(soft,crystal,vShape*.65);gl_FragColor=vec4(vec3(.9,.97,1.)*uBrightness,a*vAlpha);}"}),m=new Fi(u,p);m.renderOrder=6,m.frustumCulled=!1,m.name="2600 individually simulated, sphere-constrained snow crystals",i.add(m);let g=0,_=0,d=(x,C,b,T)=>{let I=Math.max(Ye(x,b)+.018,n.y-Math.sqrt(Math.max(0,e*e-x*x-b*b))+.018),M=x+.82,y=b+.88;if(Math.abs(M)<1.98&&Math.abs(y)<1.39){let P=Kt+.08+3.47-Math.abs(M)*.62;if(C<P&&C>Kt+.12&&(T>=P-.06||Math.abs(M)<1.72&&Math.abs(y)<1.1))return P+.022}Math.abs(M)<1.84&&b>.17&&b<1.22&&C<Kt+2.1&&T>Kt+1.97&&(I=Math.max(I,Kt+2.1));for(let[P,z,F]of[[.65,1.46,Kt+2.01],[-.245,1.08,Kt+2.02]]){let O=Mi(P),j=x-O.x,k=b-O.z,it=j*Math.cos(P)-k*Math.sin(P),G=j*Math.sin(P)+k*Math.cos(P);Math.abs(it)<z&&Math.abs(G)<.51&&T>F-.1&&C<F&&(I=Math.max(I,F))}return I};function f(){g=1,_++;for(let x=0;x<t;x++){let C=x*3,b=s[C],T=s[C+2];r[C]=ut(-1.35,1.35)-T*.45,r[C+1]=ut(1.05,3.4),r[C+2]=ut(-1.35,1.35)+b*.45,c[x]=0}}function E(x,C){g*=Math.exp(-x/3.5),p.uniforms.uBurst.value=g,p.uniforms.uTime.value=C;for(let b=0;b<t;b++){let T=b*3;if(c[b]>0)if(c[b]+=x,b<650&&c[b]>3+l[b])h(b,!0);else continue;let I=s[T],M=s[T+1],y=s[T+2],P=M,z=l[b],F=.027+g*.28;r[T]+=(Math.sin(C*.73+z+M*.8)*F-y*g*.33)*x,r[T+2]+=(Math.cos(C*.63+z+I*.6)*F+I*g*.33)*x,r[T+1]+=(-.27+Math.sin(C*1.1+z)*g*.15)*x;let O=Math.exp(-x*(.65+(g?0:.2)));r[T]*=O,r[T+2]*=O,r[T+1]*=Math.exp(-x*.38),r[T+1]=Math.max(r[T+1],-.18-a[b]*3.8),I+=r[T]*x,M+=r[T+1]*x,y+=r[T+2]*x;let j=M-n.y,k=Math.sqrt(I*I+j*j+y*y);if(k>e){let G=I/k,nt=j/k,at=y/k,gt=r[T]*G+r[T+1]*nt+r[T+2]*at;I=G*(e-.003),M=n.y+nt*(e-.003),y=at*(e-.003),gt>0&&(r[T]-=gt*G*1.32,r[T+1]-=gt*nt*1.32,r[T+2]-=gt*at*1.32)}let it=d(I,M,y,P);M<it&&(M=it,Math.hypot(I,y)>4.27?(r[T]-=I*.24*x,r[T+2]-=y*.24*x,r[T+1]=Math.min(0,r[T+1])):g>.22?r[T+1]=Math.abs(r[T+1])*.22+g*.25:(r[T+1]=0,r[T]*=.1,r[T+2]*=.1,c[b]=.001)),s[T]=I,s[T+1]=M,s[T+2]=y}u.attributes.position.needsUpdate=!0}function v(){let x=0,C=0,b=0,T=0,I=0;for(let M=0;M<t;M++){let y=M*3,P=Math.hypot(s[y],s[y+1]-n.y,s[y+2]);I=Math.max(P,I),P>sn.radius-.09&&x++,Number.isFinite(P)||C++,c[M]>0?T++:b++}return{count:t,outside:x,invalid:C,moving:b,settled:T,maxRadius:I,allowedRadius:e,energy:g,shakeCount:_}}return{points:m,material:p,update:E,shake:f,diagnostics:v,get energy(){return g}}}function Vc(i="255,229,190"){return hn(128,128,(t,e,n)=>{let s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);s.addColorStop(0,`rgba(${i},.8)`),s.addColorStop(.12,`rgba(${i},.4)`),s.addColorStop(.42,`rgba(${i},.10)`),s.addColorStop(1,`rgba(${i},0)`),t.fillStyle=s,t.fillRect(0,0,e,n)})}function td(i,t){let e=Vc(),n=[];for(let s of t){let r=new Ts(new Ni({map:e,color:16765082,transparent:!0,opacity:.13,blending:pn,depthWrite:!1}));r.position.copy(s),r.scale.set(.43,.51,1),r.renderOrder=7,i.add(r),n.push(r)}return n}function na(i,t,{kind:e="steam"}={}){let n=e==="chimney",s=e==="exhaust",r=e==="pressure",a=n?90:r?60:100,o=new Float32Array(a*3),l=new Float32Array(a),c=new Float32Array(a),h=Array.from({length:a},(v,x)=>x/a),u=Array.from({length:a},()=>ut(-1,1)),p=new ae;p.setAttribute("position",new Ee(o,3)),p.setAttribute("aSize",new Ee(l,1)),p.setAttribute("aAlpha",new Ee(c,1));let m=hn(128,128,(v,x,C)=>{for(let b=0;b<8;b++){let T=b/8*Math.PI*2,I=64+Math.cos(T)*17,M=64+Math.sin(T)*15,P=v.createRadialGradient(I,M,0,I,M,35);P.addColorStop(0,"rgba(255,255,255,.42)"),P.addColorStop(.45,"rgba(255,255,255,.25)"),P.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=P,v.fillRect(0,0,x,C)}}),g=new le({transparent:!0,depthWrite:!1,uniforms:{map:{value:m},uDpr:{value:1},uTime:{value:0},uColor:{value:new Pt(s?2106150:14674157)},uSoot:{value:s?1:0}},vertexShader:"attribute float aSize;attribute float aAlpha;varying float vAlpha;varying float vAngle;uniform float uDpr;uniform float uTime;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vAlpha=aAlpha;vAngle=position.y*.8+uTime*.1;gl_PointSize=aSize*1000.*uDpr/-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:"uniform sampler2D map;uniform vec3 uColor;uniform float uSoot;varying float vAlpha;varying float vAngle;void main(){vec2 p=gl_PointCoord-.5;float c=cos(vAngle),s=sin(vAngle);vec2 uv=mat2(c,-s,s,c)*p+.5;vec3 smokeColor=uColor+vec3(.035,.04,.045)*smoothstep(.15,.85,length(uv-.5)*2.)*uSoot;gl_FragColor=vec4(smokeColor,texture2D(map,uv).a*vAlpha);}"}),_=new Fi(p,g);_.frustumCulled=!1,_.renderOrder=7,_.name=n?"White smoke from the station chimney":s?"Dark coal smoke from the locomotive stack":"White pressure-release steam",i.add(_);let d=0,f=0;function E(v){let x=Math.max(0,v-f);f=v,d*=Math.exp(-x/1.4),g.uniforms.uTime.value=v;for(let C=0;C<a;C++){let b=n?.17:r?.43:.29,T=(v*b+h[C])%1,I=v-T/b,M=n?1:.34+.66*Math.pow(Math.max(0,Math.sin(I*3.4)),2);o[C*3]=t.x-T*(n?.65:.3)+Math.sin(v*.65+h[C]*10)*T*.17,o[C*3+1]=t.y+Math.pow(T,.78)*(n?2.32:r?.85+d*.4:1.85+d*.35),o[C*3+2]=t.z+T*(r?.35:-.18)+u[C]*T*.26,l[C]=.13+T*(n?.96:r?.48:.77)+d*.08;let y=n?.145:r?.018+d*.3:s?.36:.23;c[C]=Math.pow(Math.sin(T*Math.PI),.8)*y*M*(1+d*.55)}p.attributes.position.needsUpdate=!0,p.attributes.aSize.needsUpdate=!0,p.attributes.aAlpha.needsUpdate=!0}return{update:E,material:g,boost(){d=1},diagnostics(){return{kind:e,particles:a,burst:d}}}}var ia=class{constructor(){this.music=new Audio("assets/winter-station-music.mp3"),this.ambient=new Audio("assets/winter-station-ambience.mp3"),this.whistle=new Audio("assets/train-whistle.mp3"),this.whistle.volume=.48,this.whistle.preload="none",this.whistleCount=0,this.music.loop=this.ambient.loop=!0,this.music.volume=0,this.ambient.volume=0,this.music.preload=this.ambient.preload="none",this.states={music:!1,ambient:!1},this.targets={music:.36,ambient:.12},this.fadeTimers={}}async toggle(t){let e=this[t],n=!this.states[t];clearInterval(this.fadeTimers[t]),n?(await e.play(),this.states[t]=!0):this.states[t]=!1;let s=e.volume,r=n?this.targets[t]:0,a=performance.now();return this.fadeTimers[t]=setInterval(()=>{let o=Math.min(1,(performance.now()-a)/800);e.volume=s+(r-s)*o,o===1&&(clearInterval(this.fadeTimers[t]),n||e.pause())},30),n}async toot(){this.whistle.currentTime=0,await this.whistle.play(),this.whistleCount++}diagnostics(){return Object.fromEntries(["music","ambient","whistle"].map(t=>[t,{enabled:this.states[t]||!1,playing:!this[t].paused,loaded:this[t].readyState,duration:this[t].duration||0,plays:t==="whistle"?this.whistleCount:void 0,source:this[t].getAttribute("src").startsWith("data:")?"embedded original MP3":this[t].getAttribute("src")}]))}pauseForHidden(){for(let t of["music","ambient"])this.states[t]&&this[t].pause();this.whistle.pause()}resume(){for(let t of["music","ambient"])this.states[t]&&this[t].play().catch(()=>{})}};var ed=[{title:"\u6536\u85CF\u5168\u666F",caption:"The winter keeps its little secrets.",theta:.47,phi:1.32,r:25.7,target:[0,4.65,0],fov:35},{title:"\u96EA\u591C\u7AD9\u623F",caption:"A warm light at the end of the line.",theta:-.11,phi:1.29,r:19.6,target:[-.65,3.72,-.45],fov:30},{title:"\u84B8\u6C7D\u6765\u4FE1",caption:"One last train, a thousand stories.",theta:1.07,phi:1.34,r:18.9,target:[.7,3.05,1.2],fov:28},{title:"\u677E\u6797\u4FA7\u5F71",caption:"Beyond the platform, the forest sleeps.",theta:-1.03,phi:1.28,r:24.1,target:[0,4.45,0],fov:34},{title:"\u5C4B\u9876\u843D\u96EA",caption:"Every rooftop holds a little winter.",theta:.32,phi:.64,r:24.2,target:[-.1,3.65,0],fov:34},{title:"\u65F6\u5149\u80CC\u9762",caption:"There is a story on the other side.",theta:3.06,phi:1.28,r:25.1,target:[0,4.6,0],fov:35}];function cx(i){return new L(...i.target).add(new L().setFromSpherical(new _n(i.r,i.phi,i.theta)))}function nd(i,t,e,n,s=2.7){let r=new _n().setFromVector3(i.clone().sub(sn.center)),a=new _n().setFromVector3(cx(n).sub(sn.center));return a.theta=r.theta+Math.atan2(Math.sin(a.theta-r.theta),Math.cos(a.theta-r.theta)),{from:r,end:a,targetFrom:t.clone(),targetTo:new L(...n.target),fovFrom:e,fovTo:n.fov,t:0,duration:s}}var sa=new _n;function id(i,t,e,n){let s=Math.max(0,Math.min(1,t)),r=s*s*s*(s*(s*6-15)+10);return sa.radius=we.lerp(i.from.radius,i.end.radius,r),sa.phi=we.lerp(i.from.phi,i.end.phi,r),sa.theta=we.lerp(i.from.theta,i.end.theta,r),e.setFromSpherical(sa).add(sn.center),n.lerpVectors(i.targetFrom,i.targetTo,r),we.lerp(i.fovFrom,i.fovTo,r)}function sd(i){let t={uWindTime:{value:0},uWindGust:{value:0}};function e(o){Object.assign(o.uniforms,t),o.vertexShader=`uniform float uWindTime;uniform float uWindGust;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float treeH=max(0.,position.y-1.49);
    float gust=(1.+uWindGust*.7);
    float phase=position.x*.37+position.z*.51;
    transformed.x+=(sin(uWindTime*1.12+phase)*.0047+sin(uWindTime*.63+phase*.8)*.0022)*treeH*treeH*gust;
    transformed.z+=cos(uWindTime*.94+phase)*.0042*treeH*treeH*gust;
  `)}let n={...i};for(let o of["pine","pineLight","trunk","snow"]){let l=i[o].clone();l.onBeforeCompile=e,l.customProgramCacheKey=()=>"winter-tree-wind-v1",l.userData.treeWind=!0,n[o]=l}let s=new or({depthPacking:Mc});s.onBeforeCompile=e,s.customProgramCacheKey=()=>"winter-tree-wind-depth-v1";function r(o){o.traverse(l=>{l.isMesh&&l.material.userData.treeWind&&(l.customDepthMaterial=s)})}function a(o,l=0){t.uWindTime.value=o,t.uWindGust.value=.35+.3*Math.sin(o*.37)+l}return{materials:n,connect:r,update:a,uniforms:t}}function Gc(i,t,e,n,s,r=.13){let a=Ct(i,e,n,s);for(let o of[-1,1]){let l=ie(a,r*.48,r*.12,t.red,o*r*.44,.015,0);l.scale.set(1,.62,1),l.rotation.z=o*.4;let c=Y(a,r*.3,r*.9,.027,t.red,o*r*.25,-r*.46,0,.014);c.rotation.z=o*.19}return ft(a,r*.18,t.red,0,0,.018),a}function ra(i,t,e,n,s,r){let a=Ct(i,e,Ye(e,n)+s*.44,n,ut(-.3,.3));Y(a,s,s*.85,s*.81,r,0,0,0,.025),Y(a,s*.13,s*.87,s*.83,t.gold,0,0,0,.006),Y(a,s*1.01,s*.87,s*.12,t.gold,0,0,0,.006),Y(a,s*1.025,.045,s*.835,r,0,s*.41,0,.014);for(let o of[-1,1]){let l=ie(a,s*.14,s*.025,t.gold,o*s*.09,s*.47,0);l.rotation.x=Math.PI/2,l.rotation.y=o*.3,l.scale.set(1,.55,1)}return a}function hx(i,t,e,n,s,r=.16){let a=new gn;for(let o=0;o<10;o++){let l=o/10*xe+Math.PI/2,c=o%2?r*.43:r,h=Math.cos(l)*c,u=Math.sin(l)*c;o?a.lineTo(h,u):a.moveTo(h,u)}return a.closePath(),oi(i,a,.04,t,e,n,s,.008)}function rd(i,t,e){let n=Ct(i);n.name="Christmas at Winter Station \xB7 wreaths, gifts & warm fairy lights";let s=new ee({color:11085608,roughness:.38,metalness:.25}),r=new ee({color:3234132,roughness:.45,metalness:.18}),a=[new ee({color:16767649,emissive:16755777,emissiveIntensity:2.9}),new ee({color:14110523,emissive:16730661,emissiveIntensity:1.8}),new ee({color:12113324,emissive:10276485,emissiveIntensity:1.9})],o=[],l=[];function c(v,x,C,b=0,T=.032){ft(n,T,a[b%3],v,x,C),o.push(v,x,C),l.push(b*.79)}for(let v=0;v<3;v++){let x=[];for(let C=0;C<=36;C++){let b=C/36,T=-2.54+v*1.145+b*1.145,I=Kt+1.83-Math.sin(b*Math.PI)*.14,M=1.24;if(x.push([T,I,M]),C%2===0){let y=ft(n,1,C%4?t.pine:t.pineLight,T,I,M,.07,.043,.05);y.rotation.z=Math.cos(b*Math.PI)*.4}C%6===0&&c(T,I-.042,M+.045,v*8+C),C%12===5&&ft(n,.045,C%2?t.gold:s,T,I-.09,M+.022)}Te(n,x,.024,t.pine),Gc(n,{...t,red:s},-2.54+v*1.145,Kt+1.84,1.29,.11)}Gc(n,{...t,red:s},.9,Kt+1.84,1.29,.11);let h=Ct(n,-.82,4.2,.249);ie(h,.245,.055,t.pine);for(let v=0;v<32;v++){let x=v/32*xe,C=ft(h,1,v%2?t.pine:t.pineLight,Math.sin(x)*.245,Math.cos(x)*.245,.013,.075,.027,.04);C.rotation.z=-x}for(let v=0;v<9;v++){let x=v/9*xe;ft(h,.036,v%3?t.gold:s,Math.sin(x)*.25,Math.cos(x)*.25,.056)}Gc(h,{...t,red:s},0,-.19,.072,.13);let u=-3.08,p=1.72;zc(n,e,[[u,p,1.7]]);for(let v=0;v<43;v++){let x=v/42,C=x*xe*3.6,b=.435*(1-x)+.04,T=u+Math.cos(C)*b,I=p+Math.sin(C)*b,M=Kt+.23+x*1.43;c(T,M,I,v,.031),v%5===0&&ft(n,.055,v%2?s:t.gold,T,M-.07,I)}hx(n,a[0],u,Kt+1.87,p,.16),ra(n,t,-3.34,1.96,.3,s),ra(n,t,-2.84,1.91,.26,r),ra(n,t,-3.43,1.52,.24,t.cream),ra(n,t,1.49,-.48,.26,s);let g=Ct(n,-2.5,Kt,2.8,.12);ft(g,.17,t.snow,0,.17,0,1,1.1,1),ft(g,.125,t.snow,0,.39,0),Vt(g,.15,.15,.028,t.black,0,.505,0,28),Vt(g,.09,.1,.13,t.black,0,.57,0,28),ie(g,.114,.024,s,0,.33,0).rotation.x=Math.PI/2,Y(g,.046,.19,.022,s,.065,.25,.14,.012);for(let v of[-.041,.041])ft(g,.014,t.black,v,.418,.112);Vt(g,0,.024,.11,t.leather,0,.385,.145,7).rotation.x=Math.PI/2;for(let v of[.13,.2,.27])ft(g,.014,t.black,0,v,.17);for(let v of[-1,1])Gt(g,[v*.12,.25,0],[v*.28,.37,.03],.013,t.trunk);let _=new ae;_.setAttribute("position",new zt(o,3)),_.setAttribute("aPhase",new zt(l,1));let d=new le({transparent:!0,depthWrite:!1,blending:pn,uniforms:{uTime:{value:0},uDpr:{value:1},uNight:{value:1}},vertexShader:"attribute float aPhase;varying float vGlow;uniform float uTime;uniform float uDpr;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vGlow=.8+.2*sin(uTime*.9+aPhase);gl_PointSize=clamp(220.*uDpr/-p.z,3.,16.*uDpr);gl_Position=projectionMatrix*p;}",fragmentShader:"varying float vGlow;uniform float uNight;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(max(0.,1.-r),2.5)*vGlow*(.16+uNight*.36);gl_FragColor=vec4(1.,.66,.29,a);}"}),f=new Fi(_,d);f.renderOrder=7,f.frustumCulled=!1,i.add(f);function E(v,x){d.uniforms.uTime.value=v,d.uniforms.uNight.value=x,a.forEach((C,b)=>C.emissiveIntensity=(1.5+.9*x)*(.86+.14*Math.sin(v*.8+b*1.6)))}return{update:E,material:d,bulbs:a,count:o.length/3}}function ks(i,t,e){let{x:n,z:s,scale:r=1,rotation:a=0,coatColor:o=3495527,scarfColor:l=11223092,hat:c="beanie",seated:h=!1}=e,u=Ct(i,n,Ye(n,s)+(h?.43:0),s,a);u.scale.setScalar(r),u.name=e.name||"Miniature winter traveller";let p=new ee({color:o,roughness:.88}),m=new ee({color:l,roughness:.98}),g=new ee({color:14201237,roughness:.93}),_=new ee({color:3812647,roughness:.9}),d=Ct(u),f=h?.08:.3,E=[[0,0],[.125,0],[.145,.04],[.13,.2],[.105,.33],[.075,.35],[0,.35]].map(b=>new X(...b));te(d,new yi(E,24),p,0,f,0);for(let b of[-1,1]){let T=Y(d,.04,.17,.018,p,b*.045,f+.24,.106,.012);T.rotation.z=b*.2}for(let b of[.09,.17,.25])ft(d,.011,t.brass,0,f+b,.126,1,1,.5);Vt(d,.037,.045,.07,g,0,f+.37,0,16),ft(d,.09,g,0,f+.47,.003,.83,1.08,.88),te(d,new Pn(.093,20,14,0,xe,0,Math.PI*.48),_,0,f+.51,-.005);for(let b of[-1,1])ft(d,.008,t.black,b*.03,f+.481,.075,1,.8,.55),ft(d,.016,g,b*.075,f+.46,.002,.7,1,.65);ft(d,.015,g,0,f+.458,.083,.65,.8,1.25),c==="cap"?(Vt(d,.105,.099,.06,p,0,f+.56,0,28),Y(d,.15,.018,.1,t.black,0,f+.535,.069,.03),ft(d,.013,t.gold,0,f+.56,.101)):(te(d,new Pn(.104,20,14,0,xe,0,Math.PI*.57),m,0,f+.525,0),ie(d,.088,.018,m,0,f+.525,0).rotation.x=Math.PI/2,ft(d,.032,m,0,f+.635,0)),ie(d,.066,.031,m,0,f+.366,0).rotation.x=Math.PI/2;let v=Y(d,.058,.24,.025,m,.053,f+.235,.127,.016);v.rotation.z=-.18;let x=[];for(let b of[-1,1]){let T=Ct(u,b*.116,f+.29,0);ft(T,.056,p,0,-.015,0,1,.9,.9),Gt(T,[0,0,0],[b*.025,-.21,.015],.044,p,.035,12),ft(T,.039,m,b*.025,-.23,.018,.82,1,.82),x.push(T),qe(T)}let C=[];for(let b of[-1,1]){let T=Ct(u,b*.064,h?.02:.32,0);Gt(T,[0,0,0],[0,-.245,h?.16:0],.041,t.darkwood,.035,12),ft(T,.047,t.black,0,-.27,h?.19:.026,.9,.68,1.65),C.push(T),qe(T)}return qe(d),{g:u,body:d,arms:x,legs:C,scarf:v,baseY:u.position.y,options:e}}function od(i,t){let e=Ct(i);e.name="Six travellers \xB7 articulated miniature figures";let n=ks(e,t,{x:.65,z:3.53,rotation:.3,coatColor:2178632,scarfColor:12232059,hat:"cap",name:"Stationmaster \xB7 waving the departure flag"}),s=Ct(n.arms[1],.032,-.25,.02);Gt(s,[0,0,0],[0,-.25,0],.009,t.oak),Y(s,.16,.11,.008,t.signalGreen,.075,-.16,0,.004);let r=ks(e,t,{x:-.85,z:3.5,rotation:0,coatColor:9063485,scarfColor:13285257,name:"Walking passenger \xB7 a suitcase and a wool scarf"}),a=Ct(r.arms[0],-.025,-.28,.02);Y(a,.18,.14,.085,t.leather,0,-.045,0,.021),ie(a,.035,.009,t.darkwood,0,.038,0).scale.y=.6;for(let g of[-.055,.055])Y(a,.018,.14,.09,t.brass,g,-.045,0,.003);let o=ks(e,t,{x:3.55,z:1.45,rotation:-.4,coatColor:5531996,scarfColor:12098145,name:"Mother \xB7 watching the snow"}),l=ks(e,t,{x:3.22,z:2,scale:.73,rotation:.25,coatColor:10826802,scarfColor:14997426,name:"Child \xB7 catching falling snow"}),c=ks(e,t,{x:-2.64,z:-.17,rotation:.28,coatColor:5657701,scarfColor:9060153,seated:!0,name:"Seated traveller \xB7 reading beside the luggage"}),h=Ct(c.g,0,.28,.18,.05);Y(h,.19,.014,.14,t.cream,0,0,0,.005),Y(h,.195,.012,.145,t.engine,0,-.01,0,.006),c.arms[0].rotation.x=-.65,c.arms[1].rotation.x=-.65;let u=ks(e,t,{x:-.33,z:-2.62,rotation:2.1,coatColor:7365964,scarfColor:2639945,hat:"cap",name:"Porter \xB7 waiting by the parcel trolley"}),p=[n,r,o,l,c,u];function m(g){n.arms[1].rotation.z=2.23+Math.sin(g*2.5)*.23,n.arms[1].rotation.x=.15,n.g.rotation.y=.3+Math.sin(g*.37)*.04;let _=g%20,d=_<7||_>10&&_<17,f=_<7?_/7:_<10?1:_<17?1-(_-10)/7:0;r.g.position.x=-1.25+f*.8,r.g.position.z=Math.sqrt(3.78*3.78-r.g.position.x*r.g.position.x)-.16,r.g.rotation.y=_<8.5?Math.PI/2:-Math.PI/2;let E=d?Math.sin(g*7)*.4:0;r.legs[0].rotation.x=E,r.legs[1].rotation.x=-E,r.arms[0].rotation.x=-E*.48,r.arms[1].rotation.x=E*.48,r.g.position.y=r.baseY+(d?Math.abs(Math.sin(g*7))*.014:0),o.g.rotation.y=-.4+Math.sin(g*.45)*.1,o.arms[0].rotation.x=-.14+Math.sin(g*.8)*.035,l.arms[0].rotation.z=-.7-Math.sin(g*1.9)*.24,l.arms[1].rotation.z=.7+Math.sin(g*1.9+.6)*.25,l.g.position.y=l.baseY+Math.max(0,Math.sin(g*1.9))*.035,c.g.rotation.z=Math.sin(g*.8)*.012,h.rotation.x=-.1+Math.sin(g*.6)*.025,u.arms[0].rotation.x=-.35+Math.sin(g*.9)*.025}return{update:m,count:p.length,people:p}}function ux(i,t,e,n,s,r,a,o,l=null){let c=e.clone().sub(t).normalize(),h=Math.tan(n)*s,u=new le({transparent:!0,depthWrite:!1,depthTest:!1,side:We,blending:pn,uniforms:{uSource:{value:t.clone()},uDirection:{value:c},uAngle:{value:n},uLength:{value:s},uDensity:{value:r},uColor:{value:new Pt(a)},uNight:{value:1},uDepth:{value:null},uResolution:{value:new X(1920,1080)},uNear:{value:.1},uFar:{value:180},uForward:{value:ne(0,0,-1)},uWindow:{value:l?1:0},uWindowCenter:{value:l?.center.clone()||ne()},uWindowNormal:{value:l?.normal.clone()||ne(0,0,1)},uWindowRight:{value:l?ne().crossVectors(ne(0,1,0),l.normal).normalize():ne(1,0,0)},uWindowSize:{value:new X(l?.width||1,l?.height||1)},uShadow:{value:null},uShadowMatrix:{value:o.shadow.matrix},uHasShadow:{value:0}},vertexShader:"varying vec3 vWorld;void main(){vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`#include <packing>
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
      }`});u.userData.sourceLocal=t.clone(),u.userData.directionLocal=c.clone(),u.userData.aperture=l,u.userData.light=o;let p=te(i,new Io(h,s,48,1,!0),u);return p.position.copy(t).addScaledVector(c,s/2),p.quaternion.setFromUnitVectors(ne(0,-1,0),c),p.castShadow=!1,p.receiveShadow=!1,p.renderOrder=2,p.name=l?"Window light \xB7 aperture and mullion shadow integral":"Ray-integrated warm light shaft",u}function ad(i,t,e,n=[]){let s=[],r=[],a=hn(256,256,(u,p,m)=>{u.fillStyle="#000",u.fillRect(0,0,p,m),u.shadowColor="#fff4d8",u.shadowBlur=7,u.fillStyle="#fff4d8";for(let g of[.14,.53])for(let _ of[.12,.53])u.fillRect(p*g,m*_,p*.31,m*.33);u.shadowBlur=0,u.fillStyle="#090b09",u.fillRect(p*.47,m*.08,p*.065,m*.84),u.fillRect(p*.09,m*.465,p*.82,m*.065)});function o(u,p,{power:m=18,angle:g=.43,distance:_=5,shadow:d=!1,map:f=null,volume:E=.1,color:v=16766107,aperture:x=null,resolution:C=1024}={}){let b=new Bo(v,m,_,g,.6,2);return b.position.copy(u),b.target.position.copy(p),b.castShadow=d,f&&(b.map=f),d&&(b.shadow.mapSize.set(C,C),b.shadow.camera.near=.08,b.shadow.camera.far=_,b.shadow.bias=-8e-5,b.shadow.normalBias=x?.003:.018,b.shadow.radius=2),i.add(b,b.target),s.push({light:b,power:m}),r.push(ux(i,u,p,g,u.distanceTo(p)+.12,E,v,b,x)),b}t.forEach((u,p)=>{let m=u.clone().add(ne(0,-.2,0)),g=ne(u.x+(p===0?.16:p===1?.3:-.12),Kt+.035,u.z+(p===2?-.3:.95));o(m,g,{power:24,angle:.48,shadow:p===0,volume:.23})}),n.forEach((u,p)=>{let m=u.center.clone().addScaledVector(u.normal,-.78).add(ne(0,.52,0)),g=u.center.clone().sub(m).normalize(),_=u.center.clone().addScaledVector(g,2.85);o(m,_,{power:48,angle:.66,shadow:!0,volume:.31,distance:4.8,color:16764563,aperture:u,resolution:u.normal.x<-.5||u.normal.z<-.5?512:1024})});let l=o(e.headPos.clone().add(ne(.055,0,-.04)),ne(4.02,Kt+.04,.83),{power:14,angle:.22,distance:4.2,volume:.13,color:16769975}),c=ne();function h(u,p,m,g){s.forEach(({light:_,power:d},f)=>_.intensity=d*(.025+.975*p)*(1+Math.sin(u*1.4+f)*.006)),i.updateWorldMatrix(!0,!1),m&&m.getWorldDirection(c),r.forEach(_=>{_.uniforms.uSource.value.copy(_.userData.sourceLocal).applyMatrix4(i.matrixWorld),_.uniforms.uDirection.value.copy(_.userData.directionLocal).transformDirection(i.matrixWorld),_.uniforms.uNight.value=p;let d=_.userData.aperture,f=_.userData.light;d&&(_.uniforms.uWindowCenter.value.copy(d.center).applyMatrix4(i.matrixWorld),_.uniforms.uWindowNormal.value.copy(d.normal).transformDirection(i.matrixWorld),_.uniforms.uWindowRight.value.crossVectors(ne(0,1,0),d.normal).normalize().transformDirection(i.matrixWorld)),_.uniforms.uHasShadow.value=f.castShadow&&f.shadow.map?1:0,_.uniforms.uShadow.value=f.shadow.map?.texture||null,g&&(_.uniforms.uDepth.value=g.depthTexture,_.uniforms.uResolution.value.set(g.width,g.height),_.uniforms.uNear.value=m.near,_.uniforms.uFar.value=m.far,_.uniforms.uForward.value.copy(c))})}return{update:h,count:s.length,volumes:r.length,windows:n.length,shadowMaps:s.filter(u=>u.light.castShadow).length}}function dx(i,t){let e=Ct(i);e.name="Flying reindeer \xB7 articulated winter messenger";let n=new ee({color:9986620,roughness:.91}),s=new ee({color:6307626,roughness:.94}),r=new ee({color:14469284,roughness:.97}),a=new ee({color:13547148,roughness:.79}),o=new ee({color:10298669,roughness:.76}),l=Ct(e);ft(l,1,n,0,0,0,.5,.25,.21),ft(l,1,r,-.07,-.13,0,.4,.12,.175),ft(l,1,s,.27,.08,0,.24,.28,.205);let c=ft(l,1,n,.42,.28,0,.17,.37,.155);c.rotation.z=-.4;for(let d=0;d<11;d++){let f=d/10;ft(l,.075,r,.31+f*.19,.12+f*.4,.08+Math.sin(f*9)*.012,1,.75,.9)}let h=Ct(e,.56,.59,0);ft(h,1,n,0,.01,0,.225,.155,.135),ft(h,1,r,.172,-.055,0,.17,.091,.104),ft(h,.068,t.black,.292,-.035,0,.75,.8,1),ft(h,.043,o,.329,-.025,.003,.78,.8,1.02);for(let d of[-1,1]){let f=ft(h,1,n,-.078,.13,d*.16,.09,.045,.18);f.rotation.x=d*.45;let E=ft(h,1,s,-.062,.145,d*.2,.056,.025,.115);E.rotation.x=d*.45,ft(h,.026,t.black,.086,.037,d*.12,1,1,.45),ft(h,.009,t.snow,.091,.045,d*.133,1,1,.35),Te(h,[[.19,-.102,d*.052],[.24,-.1,d*.063],[.28,-.085,d*.055]],.007,s);let v=Ct(h,-.08,.13,d*.074);Te(v,[[0,0,0],[-.1,.17,d*.06],[-.16,.36,d*.1],[-.1,.57,d*.13],[.02,.69,d*.11]],.022,a);for(let[x,C,b]of[[[-.1,.17,d*.06],[.13,.38,d*.03],[.04,.28,d*.05]],[[-.15,.34,d*.1],[-.37,.48,d*.2],[-.27,.43,d*.18]],[[-.12,.5,d*.12],[-.3,.69,d*.11],[-.24,.6,d*.13]]])Te(v,[x,b,C],.014,a),ft(v,.015,a,...C,.7,1.2,.7)}for(let d of[-.18,.18]){let f=ie(l,.22,.022,o,d,0,0);f.rotation.y=Math.PI/2,f.scale.y=1.16}Te(l,[[.38,.18,-.17],[.44,-.08,-.15],[.25,-.24,0],[.44,-.08,.15],[.38,.18,.17]],.027,o);for(let d of[-1,1])Y(l,.075,.065,.02,t.brass,.17,.06,d*.224,.008),Y(l,.046,.035,.024,o,.17,.06,d*.238,.004);for(let d=0;d<5;d++){let f=(d/4-.5)*2.3,E=ft(l,.043,t.gold,.27,-.19-Math.cos(f)*.05,Math.sin(f)*.18);ie(l,.044,.005,t.aged,.27,-.19-Math.cos(f)*.05,Math.sin(f)*.18).rotation.y=Math.PI/2,ft(l,.012,t.black,.306,-.2-Math.cos(f)*.05,Math.sin(f)*.18)}let u=[];for(let d of[-1,1])for(let f of[-1,1]){let E=Ct(e,d*.32,-.13,f*.13),v=ft(E,1,n,0,-.11,0,.075,.17,.065);v.rotation.z=d*.3,Gt(E,[0,-.12,0],[d*.12,-.3,0],.042,n,.031,12),ft(E,.043,s,d*.12,-.3,0),Gt(E,[d*.12,-.3,0],[d*.05,-.52,.01],.027,r,.02,12),ft(E,1,t.black,d*.075,-.535,.01,.067,.045,.043),Y(E,.045,.003,.075,s,d*.077,-.554,.012,.005),Y(E,.004,.034,.085,r,d*.09,-.532,.011,.001),u.push({g:E,front:d,side:f}),qe(E)}let p=Ct(e,-.46,.05,0),m=ft(p,1,r,-.08,.055,0,.18,.058,.065);m.rotation.z=-.4;let g=ie(e,.155,.034,o,.46,.43,0);g.rotation.z=-.4,g.rotation.x=Math.PI/2;let _=Ct(e,.38,.43,-.12);Te(_,[[0,0,0],[-.3,.02,-.01],[-.56,-.04,-.06],[-.75,.02,-.06]],.045,o);for(let d=0;d<5;d++)Gt(_,[-.73,.02+d*.008,-.06],[-.81,-.02+d*.008,-.06],.006,t.gold);return qe(l),qe(h),qe(p),qe(_),{g:e,head:h,legs:u,tail:p,scarfTail:_}}function fx(i,t,e){let n=[[0,0,0,.129],[0,.105,0,.112],[.015,.23,0,.083],[.06,.335,.002,.054],[.145,.365,.012,.029],[.2,.31,.02,.002]],s=[],r=[],a=[];for(let l=0;l<n.length;l++)for(let c=0;c<=32;c++){let[h,u,p,m]=n[l],g=c/32*xe;if(s.push(h+Math.cos(g)*m,u,p+Math.sin(g)*m*.85),r.push(c/32,l/(n.length-1)),l<n.length-1&&c<32){let _=l*33+c;a.push(_,_+1,_+33,_+1,_+34,_+33)}}let o=new ae;o.setAttribute("position",new zt(s,3)),o.setAttribute("uv",new zt(r,2)),o.setIndex(a),o.computeVertexNormals(),te(i,o,t),ie(i,.123,.027,e).rotation.x=Math.PI/2,ft(i,.053,e,.2,.31,.02)}function px(i,t,e,n){let s=Ct(i,...e.toArray(),n);s.name="Santa Claus \xB7 sitting on the Nord Express roof",s.scale.setScalar(1.13);let r=new ee({color:11939120,roughness:.86}),a=new ee({color:16248795,roughness:.98}),o=new ee({color:15250586,roughness:.89}),l=Ct(s);ft(l,1,r,0,.22,0,.235,.29,.185),ft(l,1,r,0,.03,0,.22,.12,.19);let c=ie(l,.205,.03,a,0,.025,0);c.rotation.x=Math.PI/2,c.scale.y=.84;let h=ie(l,.218,.027,t.black,0,.16,0);h.rotation.x=Math.PI/2,h.scale.y=.85,Y(l,.105,.083,.025,t.gold,0,.16,.186,.013),Y(l,.068,.046,.029,t.black,0,.16,.203,.006),Y(l,.015,.05,.034,t.gold,.013,.16,.22,.003);for(let d of[.29,.36,.43])ft(l,.014,t.gold,0,d,.166,1,1,.5);for(let d of[-1,1])Gt(l,[d*.116,.035,.01],[d*.14,-.035,.22],.08,r,.071,16),Gt(l,[d*.14,-.035,.22],[d*.14,-.31,.27],.066,r,.05,16),ie(l,.052,.017,a,d*.14,-.26,.267).rotation.x=Math.PI/2,ft(l,1,t.black,d*.14,-.32,.31,.076,.066,.145),Y(l,.145,.025,.26,t.black,d*.14,-.367,.31,.016);let u=Ct(s,0,.53,.025);ft(u,1,o,0,.105,0,.123,.137,.112),ft(u,.035,o,0,.096,.114,1,.8,1);for(let d of[-1,1]){ft(u,.024,r,d*.083,.073,.088,1,.62,.24),ft(u,.012,t.black,d*.045,.13,.097,1,.9,.45),Te(u,[[d*.023,.164,.102],[d*.045,.171,.106],[d*.068,.163,.096]],.012,a);let f=ie(u,.035,.0035,t.gold,d*.045,.125,.112);f.scale.y=.78}Gt(u,[-.015,.128,.117],[.015,.128,.117],.0035,t.gold,void 0,6),ft(u,1,a,0,.012,.069,.13,.11,.07);for(let d=0;d<13;d++){let f=d/12,E=(f-.5)*Math.PI,v=Math.sin(E)*.103,x=-.055+Math.abs(v)*.8,C=ft(u,1,a,v,x,.095-Math.abs(v)*.23,.027,.07,.027);C.rotation.z=-E*.5}for(let d of[-1,1]){let f=ft(u,1,a,d*.047,.06,.138,.066,.023,.026);f.rotation.z=d*.22,ft(u,1,a,d*.105,.093,.027,.026,.095,.059)}let p=Ct(u,0,.21,-.008);fx(p,r,a),qe(u);let m=[];for(let d of[-1,1]){let f=Ct(s,d*.185,.43,0);ft(f,.08,r,0,-.04,0),Gt(f,[0,-.03,0],[d*.025,-.225,.02],.069,r,.052,16),ie(f,.052,.019,a,d*.025,-.215,.02).rotation.x=Math.PI/2,ft(f,1,r,d*.027,-.27,.025,.055,.071,.043),ft(f,.028,r,-d*.014,-.263,.052),qe(f),m.push(f)}let g=Ct(s,-.22,.04,-.22),_=new ee({color:8021312,roughness:.97});ft(g,1,_,0,.17,0,.2,.25,.19),Vt(g,.06,.11,.11,_,.025,.39,0,14),ie(g,.065,.012,t.gold,.025,.41,0).rotation.x=Math.PI/2,Te(g,[[.07,.41,.03],[.13,.31,.03],[.09,.21,.08]],.009,t.gold);for(let[d,f,E]of[[.31,.19,t.engine],[-.47,.21,r]]){Y(s,f,f*.8,f,E,d,-.005,-.05,.015),Y(s,f*.15,f*.82,f*1.02,t.gold,d,-.005,-.05,.004),Y(s,f*1.02,f*.82,f*.13,t.gold,d,-.005,-.05,.004);let v=ie(s,f*.16,f*.025,t.gold,d,f*.43,-.05);v.rotation.x=Math.PI/2}return qe(l),qe(g),{g:s,head:u,arms:m}}function mx(i){let t=i*.24+.62;return{position:ne(Math.cos(t)*1.86,7.04+Math.sin(i*.86)*.12,Math.sin(t)*1.6),yaw:Math.atan2(-Math.cos(t)*1.6,-Math.sin(t)*1.86),bank:Math.sin(i*.48)*.045}}function ld(i,t,e){let n=dx(i,t),s=px(i,t,e.santaSeat,e.coachAngle);n.g.scale.setScalar(.91);function r(o){let l=mx(o);n.g.position.copy(l.position),n.g.rotation.set(Math.sin(o*.72)*.025,l.yaw,l.bank);for(let c of n.legs)c.g.rotation.z=c.front*(.45+Math.sin(o*3.7+c.side*.75)*.35);n.head.rotation.z=Math.sin(o*1.1)*.045,n.tail.rotation.y=Math.sin(o*4)*.2,n.scarfTail.rotation.y=Math.sin(o*3.3)*.11,s.arms[1].rotation.z=2.32+Math.sin(o*2.1)*.27,s.arms[1].rotation.x=-.25,s.arms[0].rotation.x=-.72,s.arms[0].rotation.z=-.24,s.head.rotation.y=Math.sin(o*.6)*.13,s.g.rotation.z=Math.sin(o*.8)*.012}function a(){let o=new ti().setFromObject(n.g),l=[];for(let c of[o.min.x,o.max.x])for(let h of[o.min.y,o.max.y])for(let u of[o.min.z,o.max.z])l.push(Math.hypot(c,h-4.15,u));return{flyingReindeer:1,santaOnTrain:!0,reindeerPosition:n.g.position.toArray(),boundingBoxMaxRadius:Math.max(...l),santaWavingArm:s.arms[1].rotation.z}}return r(0),{update:r,diagnostics:a,deer:n,santa:s}}var me=i=>document.querySelector(i),Er=new URLSearchParams(location.search),Wc=matchMedia("(prefers-reduced-motion: reduce)").matches,wr=[];window.addEventListener("error",i=>wr.push(i.message));window.addEventListener("unhandledrejection",i=>wr.push(String(i.reason)));var cd;function Wi(i){me("#toast").textContent=i,me("#toast").classList.add("show"),clearTimeout(cd),cd=setTimeout(()=>me("#toast").classList.remove("show"),2600)}function _x(i){me("#loading").classList.add("done"),me("#error").hidden=!1,me("#error p").textContent="\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome \u6216 Edge\uFF0C\u5E76\u542F\u7528\u786C\u4EF6\u52A0\u901F\u3002\u9519\u8BEF\u4FE1\u606F\uFF1A"+i.message,console.error(i)}async function xx(){let i=me("#world"),t=new yo({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=cc,t.shadowMap.autoUpdate=!1,t.toneMapping=gr,t.toneMappingExposure=1.14,t.outputColorSpace=Ge;let e=new ar;e.background=new Pt(1319723),e.fog=new So(1319723,.014);let n=new Be(35,innerWidth/innerHeight,.1,180);n.position.set(12,10.5,21);let s=35,r=new Es(t),a=new ar;a.background=new Pt(6320762);let o=hn(64,256,(R,K,H)=>{let J=R.createLinearGradient(0,0,K,0);J.addColorStop(0,"#172126"),J.addColorStop(.25,"#dde7e5"),J.addColorStop(.5,"#ffffff"),J.addColorStop(.75,"#dde7e5"),J.addColorStop(1,"#172126"),R.fillStyle=J,R.fillRect(0,0,K,H)});for(let[R,K,H,J,pt]of[[-7,5,1,.75,9],[7,5,-2,.7,8],[-2,10,-3,5,.45]]){let mt=new ze(new zn(J,pt),new ei({map:o,color:new Pt(2,2,2),side:ln}));mt.position.set(R,K,H),mt.lookAt(0,4,0),a.add(mt)}e.environment=r.fromScene(a,.02).texture,e.environmentIntensity=.44,a.traverse(R=>{R.isMesh&&(R.geometry.dispose(),R.material.dispose())}),r.dispose();let l=new Yo(n,i);l.target.set(0,4.7,0),l.enableDamping=!0,l.dampingFactor=.055,l.enablePan=!1,l.rotateSpeed=.5,l.zoomSpeed=.7,l.minDistance=14.5,l.maxDistance=35,l.minPolarAngle=.42,l.maxPolarAngle=1.57,l.autoRotate=!Wc&&!Er.has("still"),l.autoRotateSpeed=1.2;let c=qu(),h=new Tn;h.name="Winter Station \xB7 complete collectible",e.add(h);let u=new Tn;h.add(u);let p=sd(c),m=$u(u,c,p.materials),g=Ku(u,c),_=rd(u,c,p.materials);u.updateMatrixWorld(!0);let d=qe(u);p.connect(u);let f=od(h,c),E=ld(h,c,g),v=ju(h,c),x=Qu(h,2600),C=na(h,g.steamOrigin,{kind:"exhaust"}),b=na(h,g.pressureOrigin,{kind:"pressure"}),T=na(h,ne(-1.7,5.21,-1.43),{kind:"chimney"}),I=td(h,[...m.glows,g.headPos]),M=ad(h,m.glows,g,m.windows),y=new ee({color:1253412,roughness:.42,metalness:.23});Vt(e,6.65,6.75,.34,y,0,-.38,0,160),ie(e,6.66,.018,c.aged,0,-.22,0).rotation.x=Math.PI/2;let P=te(e,new zn(2e3,2e3),new ee({color:1121314,roughness:.49,metalness:.16}),0,-.56,0);P.rotation.x=-Math.PI/2,P.castShadow=!1;let z=te(e,new zn(11.1,11.1),new ei({map:hn(256,256,(R,K,H)=>{let J=R.createRadialGradient(K/2,H/2,40,K/2,H/2,K/2);J.addColorStop(0,"rgba(0,0,0,.65)"),J.addColorStop(.7,"rgba(0,0,0,.42)"),J.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=J,R.fillRect(0,0,K,H)}),transparent:!0,depthWrite:!1}),0,-.203,0);z.rotation.x=-Math.PI/2,z.castShadow=!1;let F=new Oo(10930658,5985600,1.15);e.add(F);let O=new Ds(11852278,2.7);O.position.set(-6,12,7),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),O.shadow.camera.left=-7,O.shadow.camera.right=7,O.shadow.camera.top=12,O.shadow.camera.bottom=-5,O.shadow.camera.near=.5,O.shadow.camera.far=34,O.shadow.normalBias=.035,O.shadow.bias=-13e-5,O.shadow.radius=3,O.target.position.set(0,2,0),e.add(O,O.target);let j=new Ds(16767136,1.15);j.position.set(5,6,9),e.add(j);let k=new Ds(8502505,2.25);k.position.set(3,9,-7),e.add(k);let it=new ii(16758879,12,7,2);it.position.set(-.82,3.06,.12),h.add(it);let G=Vc("241,191,120");for(let R=0;R<16;R++){let K=new Ts(new Ni({map:G,color:16762764,transparent:!0,opacity:ut(.14,.32),depthWrite:!1,blending:pn,fog:!1}));K.position.set(ut(-27,28),ut(1.4,13),ut(-29,-19));let H=ut(.15,.55);K.scale.set(H,H,1),e.add(K)}let nt=new Ko(t);nt.addPass(new jo(e,n));let at=new yr(e,n,innerWidth,innerHeight);at.updateGtaoMaterial({radius:.22,thickness:1,distanceFallOff:.9,scale:1}),at.blendIntensity=.65;let gt=at.overrideVisibility.bind(at);at.overrideVisibility=()=>{gt(),e.traverse(R=>{(R.isSprite||R.material?.transparent)&&(R.visible=!1)})},nt.addPass(at),at.setGBuffer(at.normalRenderTarget.depthTexture,at.normalRenderTarget.texture);let Bt=new Bs(new X(innerWidth,innerHeight),.2,.55,1.3);nt.addPass(Bt),nt.addPass(new Qo);let Qt=new Os(Gu);nt.addPass(Qt);let q=null,Q=1,Mt=1,rt=99,Tt=0,At=0,It=0,qt=0,tt=0,lt=!0,D=.115,Rt=.115,st=new ia,St=new Pt(1319723),ct=new Pt(3886678),Ft=new Pt(11852278),yt=new Pt(16770235),A=new L,S=new _n,B=new Ls;function Z(R){l.autoRotate=R,me("#orbit").setAttribute("aria-pressed",R)}Z(l.autoRotate);function et(){let R=innerWidth,K=innerHeight;n.aspect=R/K,n.fov=we.radToDeg(2*Math.atan(Math.tan(we.degToRad(s)*.5)*Math.max(1,.95/n.aspect))),n.setViewOffset(R,K,-R*(R<700?0:D),K*(R<700?-.035:0),R,K),n.updateProjectionMatrix()}function $(R,K=!1){R=Math.max(0,Math.min(5,R));let H=ed[R];l.enableDamping=!1,l.update(0),l.enableDamping=!0,q=nd(n.position,l.target,s,H,Wc?.25:2.7),K&&(q.t=3),l.enabled=!1,Tt=R,Z(!1),document.body.dataset.travel="moving",document.querySelectorAll("[data-view]").forEach(J=>J.setAttribute("aria-pressed",Number(J.dataset.view)===R)),me("#view-number").textContent=`0${R+1} / 06`,me("#view-title").textContent=H.caption}function wt(){q&&(q=null,l.enabled=!0,document.body.dataset.travel="ready")}function dt(){x.shake(),rt=0,me("#shake-state").textContent="\u96EA\u82B1\u6B63\u5728\u7FFB\u817E\uFF0C\u7247\u523B\u540E\u4F1A\u6162\u6162\u843D\u5B9A\u3002",Wi("\u96EA\u82B1\u626C\u8D77\uFF0C\u51AC\u5929\u91CD\u65B0\u5F00\u59CB\u3002")}function _t(R){Mt=R?1:0,me("#daynight").setAttribute("aria-pressed",!!R),me("#daynight span").textContent=R?"\u96EA\u591C":"\u51AC\u663C"}function Wt(R){document.body.classList.toggle("ui-hidden",R===void 0?!document.body.classList.contains("ui-hidden"):R),Rt=document.body.classList.contains("ui-hidden")?0:.115}me("#shake").onclick=dt,me("#orbit").onclick=()=>{wt(),Z(!l.autoRotate)},me("#daynight").onclick=()=>_t(!Mt),me("#hide-ui").onclick=()=>Wt(!0),me("#reset").onclick=()=>{$(0),Wi("\u56DE\u5230\u51AC\u65E5\u7684\u7B2C\u4E00\u773C\u3002")},me("#whistle").onclick=async()=>{C.boost(),b.boost();try{await st.toot(),me("#whistle").classList.add("is-playing"),Wi("\u545C\u2014\u2014 \u51AC\u65E5\u5217\u8F66\u5373\u5C06\u51FA\u53D1\u3002")}catch(R){Wi("\u9E23\u7B1B\u97F3\u6548\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u97F3\u9891\u6587\u4EF6\u3002"),wr.push("whistle: "+R.message)}},st.whistle.addEventListener("ended",()=>me("#whistle").classList.remove("is-playing"));for(let R of["music","ambient"])me(`#${R}`).onclick=async()=>{try{let K=await st.toggle(R);me(`#${R}`).setAttribute("aria-pressed",K),Wi(K?R==="music"?"\u539F\u521B\u5706\u821E\u66F2 \xB7 Christmas at Winter Station":"\u73AF\u5883\u97F3 \xB7 \u51AC\u98CE\u3001\u84B8\u6C7D\u4E0E\u8FDC\u5904\u7684\u949F\u58F0":R==="music"?"\u97F3\u4E50\u5DF2\u5173\u95ED":"\u73AF\u5883\u97F3\u5DF2\u5173\u95ED")}catch(K){Wi("\u97F3\u9891\u672A\u80FD\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5 assets \u6587\u4EF6\u5939\u662F\u5426\u5B8C\u6574\u3002"),wr.push("audio: "+K.message)}};document.querySelectorAll("[data-view]").forEach(R=>R.onclick=()=>$(Number(R.dataset.view))),i.addEventListener("pointerdown",()=>{wt(),Z(!1)}),l.addEventListener("start",()=>Z(!1)),window.addEventListener("keydown",R=>{if(R.target instanceof HTMLInputElement||R.target instanceof HTMLTextAreaElement)return;let K=R.key.toLowerCase();K==="h"&&Wt(),K==="escape"&&Wt(!1),K===" "&&(R.preventDefault(),dt()),K==="n"&&_t(!Mt),K==="a"&&me("#orbit").click(),K==="r"&&$(0),K==="m"&&me("#music").click(),K==="e"&&me("#ambient").click(),K==="w"&&me("#whistle").click(),/^[1-6]$/.test(K)&&$(Number(K)-1)});function ot(){t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.setSize(innerWidth,innerHeight),nt.setPixelRatio(t.getPixelRatio()),nt.setSize(innerWidth,innerHeight),et();let R=t.getPixelRatio();Qt.material.uniforms.resolution.value.set(1/(innerWidth*R),1/(innerHeight*R)),x.material.uniforms.uDpr.value=R,C.material.uniforms.uDpr.value=R,b.material.uniforms.uDpr.value=R,T.material.uniforms.uDpr.value=R,_.material.uniforms.uDpr.value=R}window.addEventListener("resize",ot),document.addEventListener("visibilitychange",()=>{lt=!document.hidden,B.getDelta(),lt?st.resume():st.pauseForHidden()}),i.addEventListener("webglcontextlost",R=>{R.preventDefault(),Wi("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6682\u505C\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002")}),ot(),$(Number(Er.get("view")||0),!0),Er.get("day")==="1"&&_t(!1);let vt=null,Ot=t.getContext(),kt=Ot.getExtension("WEBGL_debug_renderer_info"),Et=kt?Ot.getParameter(kt.UNMASKED_RENDERER_WEBGL):"unavailable";function jt(){return{ready:!0,revision:"1.4.0",webgl:t.capabilities.isWebGL2?"WebGL 2":"WebGL",gpu:Et,viewport:[innerWidth,innerHeight],pixelRatio:t.getPixelRatio(),drawCallsAllPasses:t.info.render.calls,trianglesAllPasses:t.info.render.triangles,modelTriangles:d,fps:Math.round(tt),view:Tt,camera:n.position.toArray(),cameraClearance:Number(n.position.distanceTo(sn.center).toFixed(2)),transition:!!q,night:Number(Q.toFixed(3)),autoOrbit:l.autoRotate,uiHidden:document.body.classList.contains("ui-hidden"),snow:x.diagnostics(),life:{people:f.count,fairyLights:_.count,windTime:p.uniforms.uWindTime.value,windGust:p.uniforms.uWindGust.value,walkerPosition:f.people[1].g.position.toArray(),walkingLegAngle:f.people[1].legs[0].rotation.x,conductorArm:f.people[0].arms[1].rotation.z,locomotive:C.diagnostics(),pressureValve:b.diagnostics(),chimney:T.diagnostics(),christmasVisitors:E.diagnostics(),lighting:{projectedLights:M.count,volumetricBeams:M.volumes,windowApertures:M.windows,shadowMaps:M.shadowMaps,depthClipped:!0,shadowClipped:!0,interiorRooms:!0}},audio:st.diagnostics(),externalRequests:performance.getEntriesByType("resource").filter(R=>new URL(R.name).origin!==location.origin&&!R.name.startsWith("data:")).map(R=>R.name),errors:wr.slice()}}window.WinterStation={ready:!0,view:$,shake:dt,setNight:_t,diagnostics:jt,toggleUI:Wt,controls:l,scene:e,camera:n,renderer:t,snow:x},Er.has("qa")&&(vt=document.createElement("pre"),vt.id="qa-output",vt.className="ui",vt.style.cssText="position:fixed;z-index:8;right:20px;top:80px;max-height:75vh;overflow:auto;background:#071319e8;color:#bbd9d0;font:10px monospace;padding:12px;border:1px solid #426461;max-width:340px;pointer-events:none",document.body.append(vt));let Ht=0;function se(){requestAnimationFrame(se);let R=B.getDelta(),K=Math.min(R,1),H=Math.min(R,.035);if(!lt)return;if(At+=K,q){let pt=q;pt.t+=K;let mt=Math.min(1,pt.t/pt.duration);s=id(pt,mt,n.position,l.target),et(),n.lookAt(l.target),mt>=1&&(q=null,l.enabled=!0,l.update(0),document.body.dataset.travel="ready")}else l.update(K);Math.abs(D-Rt)>1e-5&&(D=we.damp(D,Rt,4.5,K),et()),Q=we.damp(Q,Mt,1.3,K),e.background.copy(ct).lerp(St,Q),e.fog.color.copy(e.background),F.intensity=we.lerp(2.5,.75,Q),O.intensity=we.lerp(3.7,1.35,Q),O.color.copy(yt).lerp(Ft,Q),k.intensity=we.lerp(1.5,1.6,Q),j.intensity=we.lerp(1.2,.48,Q),e.environmentIntensity=we.lerp(.58,.3,Q),it.intensity=we.lerp(.5,1.5,Q),c.warm.emissiveIntensity=we.lerp(.1,.38,Q),c.lampGlass.emissiveIntensity=we.lerp(.03,.17,Q),c.ember.emissiveIntensity=we.lerp(1.3,2.3,Q),m.interiorLights.forEach(pt=>pt.intensity=we.lerp(.7,6.5,Q)),c.windowGlass.emissiveIntensity=we.lerp(.01,.05,Q),m.lights.forEach((pt,mt)=>pt.intensity=(.35+Q*1)*(1+Math.sin(At*1.6+mt*2)*.018)),I.forEach(pt=>pt.material.opacity=.04+Q*.09),x.material.uniforms.uBrightness.value=.76+Q*.18,rt+=K;let J=rt<1.8?Math.exp(-rt*3.2):0;h.rotation.z=Math.sin(rt*21)*.025*J,h.rotation.x=Math.sin(rt*17)*.013*J,x.update(H,At),C.update(At),b.update(At),T.update(At),p.update(At,x.energy*.6),_.update(At,Q),f.update(At),E.update(At),M.update(At,Q,n,at.normalRenderTarget),rt>13&&rt<14&&(me("#shake-state").textContent="\u6BCF\u4E00\u7247\u96EA\uFF0C\u90FD\u627E\u5230\u4E86\u81EA\u5DF1\u7684\u5F52\u5904\u3002"),document.body.dataset.lighting=Q<.005?"day":Q>.995?"night":"changing",t.info.autoReset=!1,t.info.reset(),t.shadowMap.needsUpdate=!0,at.overrideVisibility(),at.renderOverride(t,at.normalMaterial,at.normalRenderTarget,7829503,1),at.restoreVisibility(),nt.render(),It++,qt+=R,Ht+=K,qt>1&&(tt=It/qt,qt=0,It=0),vt&&Ht>.5&&(vt.textContent=JSON.stringify(jt(),null,2),Ht=0)}t.compile(e,n),se(),setTimeout(()=>{me("#loading").classList.add("done"),document.body.dataset.ready="true"},300),!Er.has("still")&&!Wc&&setTimeout(()=>{Tt===0&&!q&&Z(!0)},3400),console.info("Winter Station ready",{triangles:d,version:"170",offline:!0})}xx().catch(_x);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

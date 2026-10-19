// Original procedural score and station ambience. No samples or external recordings.
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const SR=44100,TAU=Math.PI*2;
let seed=1924;function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
function writeWav(file,L,R,floor=.5){let n=L.length,b=Buffer.alloc(44+n*4);b.write('RIFF');b.writeUInt32LE(36+n*4,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(2,22);b.writeUInt32LE(SR,24);b.writeUInt32LE(SR*4,28);b.writeUInt16LE(4,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(n*4,40);let max=0;for(let i=0;i<n;i++)max=Math.max(max,Math.abs(L[i]),Math.abs(R[i]));const gain=.72/Math.max(floor,max);for(let i=0;i<n;i++){b.writeInt16LE(Math.max(-32767,Math.min(32767,L[i]*gain*32767)),44+i*4);b.writeInt16LE(Math.max(-32767,Math.min(32767,R[i]*gain*32767)),46+i*4);}fs.writeFileSync(file,b);}
function arrays(seconds){let n=Math.round(seconds*SR);return[new Float32Array(n),new Float32Array(n)];}
function tone(L,R,beat,midi,amp,pan=0,decay=1.8,kind='bell'){const f=440*2**((midi-69)/12),start=Math.round(beat*SR),n=L.length,duration=Math.round(Math.min(5,decay*5)*SR);const taps=[[0,1],[.083,.09],[.147,.06],[.233,.04],[.329,.02]];
  for(let j=0;j<duration;j++){let t=j/SR,env=(1-Math.exp(-t*420))*Math.exp(-t/decay),v;if(kind==='bell')v=Math.sin(TAU*f*t)*env+.3*Math.sin(TAU*f*2*t)*Math.exp(-t/(decay*.3))+.09*Math.sin(TAU*f*3*t)*Math.exp(-t/(decay*.13));else v=(Math.sin(TAU*f*t)+.13*Math.sin(TAU*f*2*t))*env;v*=amp;
    for(let k=0;k<taps.length;k++){let idx=(start+j+Math.round(taps[k][0]*SR))%n,pp=k%2?-pan:pan,g=taps[k][1];L[idx]+=v*g*Math.sqrt((1-pp)*.5);R[idx]+=v*g*Math.sqrt((1+pp)*.5);}}
}
// Christmas at Winter Station: original C-major toy-shop waltz, 104 BPM.
// Short harmonic celesta and nylon-string plucks replace the old inharmonic chimes.
const beat=60/104,seconds=96*beat,[L,R]=arrays(seconds);
const melody=[
  [76,0,79,81,79,76],[74,76,79,0,76,0],[77,0,81,79,77,76],[74,0,72,0,0,0],
  [76,79,84,0,83,81],[79,0,76,74,76,79],[77,81,79,77,76,74],[72,0,76,0,79,0],
  [79,0,81,0,83,81],[79,77,76,0,74,0],[77,79,81,0,79,77],[76,74,72,0,0,0],
  [76,0,79,0,84,83],[81,79,77,76,74,0],[74,77,79,0,83,0],[84,0,79,0,76,0]
];
const C=[48,60,64,67],F=[53,60,65,69],G=[55,59,62,67];
const progression=[C,C,F,G,C,F,G,C,G,C,F,C,F,C,G,C];
function pluck(start,midi,gain,pan,kind='celesta'){
  const f=440*2**((midi-69)/12),decay=kind==='bass'?.28:kind==='guitar'?.23:.43,duration=Math.round(SR*(kind==='celesta'?1.7:.95)),offset=Math.round(start*SR);
  for(let i=0;i<duration;i++){const t=i/SR,attack=1-Math.exp(-t*500),env=attack*Math.exp(-t/decay);let v;
    if(kind==='celesta')v=Math.sin(TAU*f*t)+.28*Math.sin(TAU*f*2*t)*Math.exp(-t*3)+.085*Math.sin(TAU*f*3*t)*Math.exp(-t*6)+.025*Math.sin(TAU*f*4*t)*Math.exp(-t*10);
    else if(kind==='guitar')v=Math.sin(TAU*f*t)+.18*Math.sin(TAU*f*2*t)+.07*Math.sin(TAU*f*3*t)+.025*Math.sin(TAU*f*4*t);
    else v=Math.sin(TAU*f*t)+.12*Math.sin(TAU*f*2*t);
    v*=env*gain;const k=(offset+i)%L.length;L[k]+=v*Math.sqrt((1-pan)*.5);R[k]+=v*Math.sqrt((1+pan)*.5);
    for(const [delay,amount]of[[.083,.075],[.157,.045],[.241,.025]]){const j=(k+Math.round(delay*SR))%L.length;L[j]+=v*amount*Math.sqrt((1+pan)*.5);R[j]+=v*amount*Math.sqrt((1-pan)*.5);}
  }
}
for(let bar=0;bar<32;bar++){
  const ch=progression[bar%16],start=bar*3*beat,notes=melody[bar%16];
  for(let s=0;s<6;s++)if(notes[s])pluck(start+s*.5*beat,notes[s],.12*(.88+rnd()*.12),(s%3-1)*.24);
  pluck(start,ch[0],.072,-.13,'bass');
  for(let b of [1,2])for(let j=1;j<4;j++)pluck(start+b*beat+(j-1)*.012,ch[j],.027,b===1?-.42:.42,'guitar');
  if(bar%4===3)pluck(start+2.5*beat,79,.025,.45);
}
// Gentle high-frequency roll-off, with no long drone or cathedral-style tail.
let smL=0,smR=0;for(let i=0;i<L.length;i++){smL+=.56*(L[i]-smL);smR+=.56*(R[i]-smR);L[i]=Math.tanh(smL*1.08)/1.08;R[i]=Math.tanh(smR*1.08)/1.08;}
writeWav('tools/music-master.wav',L,R,.05);
const [A,B]=arrays(41);let lo=0,lo2=0;const n=A.length;for(let i=0;i<n;i++){const t=i/SR,white=rnd()*2-1;lo+=.007*(white-lo);lo2+=.0007*(white-lo2);const env=.5+.17*Math.sin(TAU*t/40)+.12*Math.sin(TAU*t/10+.3);const wind=lo*.16*env+lo2*.15;const cycle=t%8,steam=Math.pow(Math.sin(Math.PI*Math.min(1,cycle/2.1)),2)*(cycle<2.1?1:0);A[i]=wind+white*.012*steam;B[i]=wind*.9+white*.009*steam+Math.sin(TAU*47*t)*.001;}
// Crossfold the boundary over one second for a seamless ambient bed.
const fade=SR;for(let i=0;i<fade;i++){let s=i/fade,w=.5-.5*Math.cos(s*Math.PI);const a=A[i],b=B[i];A[i]=A[n-fade+i]*(1-w)+a*w;B[i]=B[n-fade+i]*(1-w)+b*w;}
tone(A,B,6,84,.027,-.7,1.5);tone(A,B,26,79,.021,.65,1.9);tone(A,B,26.8,76,.018,.65,1.6);
writeWav('tools/ambience-master.wav',A.subarray(0,n-fade),B.subarray(0,n-fade));
// Original three-pipe steam whistle: pressure rise, beating harmonics, breath and echoes.
const [WL,WR]=arrays(4.8),dry=new Float32Array(WL.length),phase=[0,0,0];let airLow=0;
for(let i=0;i<dry.length;i++){const t=i/SR;let gate=0;for(const [start,end]of[[.06,1.04],[1.22,1.58],[1.76,2.72]])if(t>=start&&t<end)gate=Math.max(gate,Math.min(1,(t-start)/.07)*Math.min(1,(end-t)/.13));const pressure=.96+.04*(1-Math.exp(-t*14))+.004*Math.sin(t*TAU*5.2)-Math.max(0,t-2.52)*.025;let val=0;for(let k=0;k<3;k++){phase[k]+=TAU*[261.63,329.63,392][k]*pressure/SR;val+=Math.sin(phase[k])*.14+Math.sin(phase[k]*2.003)*.042+Math.sin(phase[k]*3.01)*.025+Math.sin(phase[k]*5.007)*.009;}const white=rnd()*2-1;airLow+=.13*(white-airLow);dry[i]=(val+airLow*.11)*gate;}
for(let i=0;i<dry.length;i++){WL[i]+=dry[i]*.72;WR[i]+=dry[i]*.72;for(const [d,g]of[[.17,.16],[.31,.12],[.49,.085],[.77,.05],[1.11,.025]]){const j=i+Math.round(d*SR);if(j<dry.length){WL[j]+=dry[i]*g;WR[j]+=dry[i]*g*.87;}}}
writeWav('tools/whistle-master.wav',WL,WR);
for(const [src,dest]of[['tools/music-master.wav','assets/winter-station-music.mp3'],['tools/ambience-master.wav','assets/winter-station-ambience.mp3'],['tools/whistle-master.wav','assets/train-whistle.mp3']]){const r=spawnSync('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',src,'-codec:a','libmp3lame','-b:a','160k',dest],{encoding:'utf8'});if(r.status!==0)throw new Error(r.stderr);fs.unlinkSync(src);}
console.log('Original bright C-major waltz (55.385 s, 104 BPM), seamless ambience (40 s), and steam whistle (4.8 s) written to assets/.');


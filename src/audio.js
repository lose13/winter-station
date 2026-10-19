export class Soundscape {
  constructor(){this.music=new Audio('assets/winter-station-music.mp3');this.ambient=new Audio('assets/winter-station-ambience.mp3');this.whistle=new Audio('assets/train-whistle.mp3');this.whistle.volume=.48;this.whistle.preload='none';this.whistleCount=0;this.music.loop=this.ambient.loop=true;this.music.volume=0;this.ambient.volume=0;this.music.preload=this.ambient.preload='none';this.states={music:false,ambient:false};this.targets={music:.36,ambient:.12};this.fadeTimers={};}
  async toggle(kind){const a=this[kind],enable=!this.states[kind];clearInterval(this.fadeTimers[kind]);
    if(enable){await a.play();this.states[kind]=true;}else this.states[kind]=false;
    const start=a.volume,end=enable?this.targets[kind]:0,when=performance.now();this.fadeTimers[kind]=setInterval(()=>{let t=Math.min(1,(performance.now()-when)/800);a.volume=start+(end-start)*t;if(t===1){clearInterval(this.fadeTimers[kind]);if(!enable)a.pause();}},30);return enable;
  }
  async toot(){this.whistle.currentTime=0;await this.whistle.play();this.whistleCount++;}
  diagnostics(){return Object.fromEntries(['music','ambient','whistle'].map(k=>[k,{enabled:this.states[k]||false,playing:!this[k].paused,loaded:this[k].readyState,duration:this[k].duration||0,plays:k==='whistle'?this.whistleCount:undefined,source:this[k].getAttribute('src').startsWith('data:')?'embedded original MP3':this[k].getAttribute('src')}]));}
  pauseForHidden(){for(const k of ['music','ambient'])if(this.states[k])this[k].pause();this.whistle.pause();}
  resume(){for(const k of ['music','ambient'])if(this.states[k])this[k].play().catch(()=>{});}
}

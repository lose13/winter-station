// One authored 72-second cycle. The endpoint returns to the same physical pose.
export const STORY_LENGTH=72;
export const ease=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
export function storyAt(time){
  const t=((time%STORY_LENGTH)+STORY_LENGTH)%STORY_LENGTH;
  let trainOffset=0;if(t>=8&&t<16)trainOffset=.105*ease((t-8)/8);else if(t>=16&&t<19)trainOffset=.105;else if(t>=19&&t<28)trainOffset=.105*(1-ease((t-19)/9));
  const departure=t>=4&&t<28,dropAge=t-32;
  return {time:t,cycle:Math.floor(time/STORY_LENGTH),trainOffset,flag:departure?ease((t-4)/1.5)*(1-ease((t-26)/2)):0,sendOff:t>=7&&t<20?ease((t-7)/2)*(1-ease((t-18)/2)):0,dropAge,delivery:t>=32&&t<66,phase:t<4?'候车':t<8?'举旗鸣笛':t<19?'列车缓行':t<28?'回到站台':t<32?'等待圣诞邮差':t<40?'礼物降落':t<47?'领取礼物':t<59?'向圣诞老人致谢':'冬夜小憩',delivered:Math.max(0,Math.floor((time-40)/STORY_LENGTH)+1)};
}
export function weatherAt(t){const phase=((t%19)+19)%19,gust=ease((phase-3)/2)*(1-ease((phase-8)/3));return {gust:.12+.88*gust,direction:[.92,.38]};}

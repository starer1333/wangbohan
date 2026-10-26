/* Personal reflections reviewed by the owner; lyric excerpts retain their source. */
(() => {
 'use strict';
 const entries={
  hamilton:{title:'Hamilton',type:'MUSICAL THEATRE',quote:'In New York, you can be a new man.',quoteSource:'Alexander Hamilton · Hamilton',quoteUrl:'https://www.playhousesquare.org/assets/doc/Hamilton-Original-Broadway-Cast-Recording-Act-I-Booklet-FINAL-f5eedb9433.pdf#page=5',paragraphs:[
   ['《Hamilton》最打动我的，是那股还没有被看见，就已经在努力往前走的劲。想做的事很多，眼前的条件又很有限，但他一直在学、一直在写，也一直在争取机会。','What moves me most in Hamilton is the drive to keep going before anyone has really noticed you. There is so much he wants to do, with very little to start from. He keeps learning, keeps writing and keeps trying to create an opportunity.'],
   ['听到这句时，我会觉得，人是可以一点点把自己活成另一个样子的。出发时不一定有底气，也不一定有人支持，但只要心里还有想去的地方，就继续为它做点什么。','That line makes me feel that you can gradually become someone different through what you do. You may start without much confidence or support. If there is still somewhere you want to go, you can keep taking steps toward it.'],
   ['对我来说，这部剧最有力量的地方就在这里：为自己想要的生活一直努力。就算别人暂时不相信，也不要太早替自己说不可能。','For me, that is where the show’s strength lies: continuing to work for the life you want. Even when other people do not believe in you yet, you do not have to decide that it is impossible.']
  ]},
  away:{title:'Come From Away',type:'MUSICAL THEATRE',paragraphs:[
   ['《Come From Away》最打动我的，是灾难发生的时候，一群原本互不认识的人，愿意认真地照顾彼此。大家都有自己的害怕和不安，还是会伸出手，帮别人把眼前的困难过掉。','What moves me most in Come From Away is people who have never met choosing to care for one another in the middle of a disaster. They have their own fears and uncertainties, yet still reach out to help someone else through the next difficulty.'],
   ['还有一种很温柔的感觉：你可以带着真实的自己来到这里。不用把自己变成别人期待的样子，也会有人愿意认识你，和你做朋友，甚至爱你。','There is something very gentle in it too: you can arrive as yourself. You do not have to become the person someone else expects. There can still be people who want to know you, become your friends and love you.'],
   ['后来，飞机再次起飞，大家回到各自的生活。那段相处却没有就此结束。有些关系会继续，有些人会一直记得。我很喜欢这种感觉：相遇可以很短，它带来的关系和改变却会延续很久。','Eventually the planes take off again and everyone returns to their own life. But the time they shared does not simply end. Some connections continue; some people stay with you. I like that a brief encounter can leave relationships and changes that last long after people leave.']
  ]},
  family:{title:'Modern Family',type:'TV SERIES',paragraphs:[
   ['最近很喜欢《摩登家庭》。看着看着就笑了，笑完又会有一点舍不得。里面的人都有自己的脾气，也经常把事情弄得乱七八糟，可你还是能感觉到，他们很爱彼此。','I’ve been really enjoying Modern Family lately. It makes me laugh, and then leaves me wanting to stay with these people a little longer. Everyone has their own temperament and often makes a mess of things, but you can still feel how much they love one another.'],
   ['我喜欢它把爱放在很小的事情里。有人嘴上不说，转头还是会替你操心；有人不太会表达，但会慢慢学着靠近。很多时候，感动来得很突然。','I like how it puts love into small things. Someone may not say much but will still worry about you. Someone else may struggle to express affection and slowly learn how. The tender moments can catch me off guard.'],
   ['它也让我想，和亲近的人相处，可以再耐心一点。能一起开玩笑，也能在闹别扭之后把话说开，就已经是很值得珍惜的事。','It also makes me think I could be a little more patient with people close to me. Being able to joke together, and then talk things through after a disagreement, is something worth appreciating.']
  ]}
 };
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function render({t}){return `<section class="beyond-work" id="beyond" aria-labelledby="beyond-title"><header><span class="eyebrow">BEYOND WORK</span><h2 id="beyond-title">${t('工作之外。','Away from reports and code.')}</h2></header><div class="theatre-shelf">${Object.entries(entries).map(([id,item])=>`<button class="theatre-title theatre-${id}" id="reading-control-${id}" type="button" data-reading="${id}" aria-expanded="false" aria-controls="reading-notes"><span class="theatre-category">${item.type}</span><strong>${id==='hamilton'?'Hamilton<span class="theatre-period">.</span>':id==='away'?'Come From <em>Away.</em>':'Modern <em>Family.</em>'}</strong></button>`).join('')}</div><section class="personal-reading-panel" id="reading-notes" hidden aria-labelledby="reading-note-title"><header><div><span class="eyebrow">${t('随手记','A FEW THOUGHTS')}</span><h3 id="reading-note-title"></h3></div><button class="reading-close" type="button" data-reading-close>${t('收起','Close')}</button></header><div class="reading-prose"></div></section></section>`;}
 function close(){const panel=document.querySelector('#reading-notes');if(!panel||panel.hidden)return;const previous=document.querySelector('[data-reading][aria-expanded="true"]');panel.hidden=true;document.querySelectorAll('[data-reading]').forEach(b=>{b.setAttribute('aria-expanded','false');b.classList.remove('is-reading')});previous?.focus({preventScroll:true});}
 document.addEventListener('click',event=>{
  if(event.target.closest('[data-reading-close]')){close();return;}
  const button=event.target.closest('[data-reading]');if(!button)return;
  const item=entries[button.dataset.reading],panel=document.querySelector('#reading-notes');if(!item||!panel)return;
  if(button.getAttribute('aria-expanded')==='true'){close();return;}
  const en=document.documentElement.lang==='en';document.querySelectorAll('[data-reading]').forEach(b=>{const active=b===button;b.setAttribute('aria-expanded',String(active));b.classList.toggle('is-reading',active)});
  panel.querySelector('h3').textContent=item.title;panel.querySelector('.reading-prose').innerHTML=(item.quote?`<blockquote class="reading-quote"><p>${esc(item.quote)}</p><cite><a href="${esc(item.quoteUrl)}" target="_blank" rel="noopener noreferrer">${esc(item.quoteSource)}</a></cite></blockquote>`:'')+item.paragraphs.map(p=>`<p>${esc(p[en?1:0])}</p>`).join('');panel.hidden=false;
  requestAnimationFrame(()=>{if(panel.getBoundingClientRect().bottom>innerHeight-20)panel.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&event.target.closest('.beyond-work'))close();});
 window.PERSONAL_NOTES={render};
})();

/* An original personal workbench, informed by the reference's object-based navigation.
   Project objects, copy and evidence are specific to Bohan, not copied Jinghan assets. */
(() => {
 'use strict';
 let context,activeWhy='finance',sqlMode='select',database,revealObserver,disposeWhyStory;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const queries={select:'SELECT title, category\nFROM projects\nLIMIT 4;',where:"SELECT title\nFROM projects\nWHERE category = 'Market and consumer';",group:'SELECT category, COUNT(*) AS projects\nFROM projects\nGROUP BY category\nORDER BY projects DESC;'};
 function art(kind){const {t}=context;
  if(kind==='finance')return `<span class="artifact-page ledger-page"><span class="paper-corner"></span><span class="paper-top">FIELD NOTES / FINANCE</span><span class="ledger-heading">${t('账与事','Inside<br>the numbers.')}</span><span class="ledger-table"><span>${t('资产','ASSETS')}</span><i></i><span>${t('负债','LIABILITIES')}</span><i></i><span>${t('权益','EQUITY')}</span><i></i><span>${t('核验','REVIEW')}</span><i></i></span><span class="ledger-stamp">${t('对得上，也说得清。','RECONCILE / EXPLAIN')}</span><span class="page-foot">HUALIN · BAKER TILLY</span></span>`;
  if(kind==='research')return `<span class="artifact-page research-book"><span class="book-binding"></span><span class="paper-top">RESEARCH NOTEBOOK</span><span class="research-heading">${t('先问<br>为什么。','Start with<br>a question.')}</span><span class="research-number">300<span>${t('份有效问卷','VALID RESPONSES')}</span></span><span class="research-underline"></span><span class="page-foot">HOLILAND / CONSUMER RESEARCH</span></span>`;
  return `<span class="artifact-page tool-folder"><span class="folder-tab">BUILD / TEST / REVIEW</span><span class="paper-top">FINANCEDOC AI</span><span class="code-mark" aria-hidden="true">&lt;/&gt;</span><span class="tool-heading">${t('让方法<br>运行起来。','Make the<br>method work.')}</span><span class="tool-chain">PDF → RAG → REVIEW</span></span>`;
 }
 function proof(kind=activeWhy){const {t,tr,projects,url,chart}=context;
  if(kind==='research')return `<div class="proof-copy"><span class="eyebrow">QUESTION / EVIDENCE</span><h3>${t('我不只想知道结果，<br>也想知道它怎么来的。','I want to understand<br>how a finding is formed.')}</h3><p>${t('好利来项目中，我独立完成问卷设计、发放回收、分析与报告撰写。OPPO项目里，我把出口与物流数据整理成市场选择的依据。','For Holiland, I handled the questionnaire, collection, analysis and report. For OPPO, I turned export and logistics data into a basis for market selection.')}</p><div class="proof-links"><a href="${url('holiland')}">${t('好利来消费者研究','Holiland consumer research')}</a><a href="${url('oppo')}">${t('OPPO市场研究','OPPO market research')}</a></div></div><figure class="proof-visual proof-chart">${chart(projects.find(p=>p.id==='holiland'))}</figure>`;
  if(kind==='build')return `<div class="proof-copy"><span class="eyebrow">UNDERSTAND / BUILD</span><h3>${t('分析之后，<br>我也愿意把工具做出来。','After the analysis,<br>I like to build the tool.')}</h3><p>${t('FinanceDoc AI把文档解析、摘要、风险提示和底稿导出接进一个流程；实习中，我也借助AI辅助VBA，处理重复的数据工作。','FinanceDoc AI connects parsing, summaries, risk flags and exports. During my internship, I also used AI-assisted VBA for repetitive data work.')}</p><div class="proof-links"><a href="${url('financedoc')}">FinanceDoc AI</a><a href="${url('pizza')}">City Pizza</a></div></div><figure class="proof-visual proof-workflow">${chart(projects.find(p=>p.id==='financedoc'))}</figure>`;
  return `<div class="proof-copy"><span class="eyebrow">CONTEXT / JUDGMENT</span><h3>${t('我接触过数据背后，<br>真实的业务流程。','I have worked with the<br>process behind the data.')}</h3><p>${t('从华林证券的半年报与账套核对，到天职国际的函证跟踪与回函核验，我的财务基础建立在具体材料和实际业务里。','From interim reporting and ledger reconciliation at Hualin Securities to confirmations at Baker Tilly China, my financial grounding comes from working with actual materials and processes.')}</p><div class="proof-links"><a href="#experience">${t('查看两段实习','Read about the internships')}</a><a href="${url('confirmation')}">${t('函证与AI辅助处理','Confirmations and AI-assisted processing')}</a></div></div><div class="proof-visual proof-field"><article><time>2026.07 — 2026.09</time><strong>${t('华林证券','Hualin Securities')}</strong><span>${t('半年报 / 管理核算 / 数据核验','Interim reporting / Management accounting / Reconciliation')}</span></article><article><time>2026.01 — 2026.02</time><strong>${t('天职国际','Baker Tilly China')}</strong><span>${t('函证流程 / 异常跟踪 / AI辅助VBA','Confirmations / Exception tracking / AI-assisted VBA')}</span></article></div>`;
 }
 function resultTable(rows){const {t}=context;if(!rows.length)return `<p>${t('没有符合条件的项目。','No matching projects.')}</p>`;const keys=Object.keys(rows[0]);return `<div class="sql-table-scroll"><table class="sql-table"><thead><tr>${keys.map(k=>`<th scope="col">${esc(k)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${keys.map(k=>`<td>${esc(row[k])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
 function runSql(){const {t,tr,projects}=context;const output=document.querySelector('.sql-output');if(!output)return;
  if(!window.alasql){output.innerHTML=`<p>${t('SQL引擎未能加载，请刷新后重试。','The SQL engine could not load. Refresh to retry.')}</p>`;return;}
  try{if(!database){database=new alasql.Database();database.exec('CREATE TABLE projects (title STRING, category STRING)');}
   const labels={market:'Market and consumer',research:'Industry and research',audit:'Finance and audit',ai:'AI and product'};
   database.tables.projects.data=projects.map(p=>({title:tr(p.short),category:labels[p.category]}));
   const rows=database.exec(queries[sqlMode]);output.innerHTML=`<div class="result-heading"><span>RESULT</span><span>${rows.length} ${t('行','rows')}</span></div>${resultTable(rows)}`;
   document.querySelector('.sql-run').classList.add('has-run');
  }catch(error){output.innerHTML=`<p>${t('查询遇到问题：','Query error: ')}${esc(error.message)}</p>`;}
 }
 function render(ctx){context=ctx;activeWhy='finance';const {t,url,index,experience}=ctx;
  return `<div class="wrap personal-home"><section class="personal-opening" id="work"><div class="personal-intro"><div class="identity-top"><span class="eyebrow">ACCOUNTING × RESEARCH × BUILDING</span></div><h1 class="personal-name"><span lang="zh-CN">王渤函</span><span lang="en">Bohan Wang<i>.</i></span></h1><p class="personal-description">${t('会计学本科 · 计算机科学辅修','Accounting major · Computer Science minor')}</p><div class="object-workbench" aria-label="${t('三种实践，点击物件查看项目','Three areas of practice. Select an object to explore.')}"><a class="work-object finance-object" href="${url('confirmation')}" aria-label="${t('查看财务与函证业务实践','Explore financial and confirmation practice')}">${art('finance')}<span class="object-caption">${t('财务现场','Financial practice')}</span></a><a class="work-object research-object" href="${url('holiland')}" aria-label="${t('查看好利来消费者研究','Explore Holiland consumer research')}">${art('research')}<span class="object-caption">${t('研究问题','Research questions')}</span></a><a class="work-object build-object" href="${url('financedoc')}" aria-label="${t('查看FinanceDoc AI','Explore FinanceDoc AI')}">${art('build')}<span class="object-caption">${t('构建工具','Building tools')}</span></a><span class="workbench-scribble" aria-hidden="true">${t('点开一份，看看我怎么做。','Open a piece of the work.')}</span></div><div class="personal-intro-bottom"><div class="opening-links"><a href="#experience" class="internship-anchor">${t('先看实习经历','Explore my internships')}</a><a href="#why" class="why-anchor">Why me?</a></div><span>${t('吉林大学 / 财务 · 研究 · AI','JILIN UNIVERSITY / FINANCE · RESEARCH · AI')}</span></div></div><aside class="personal-catalog"><div class="catalog-kicker"><span>THE WORK</span></div><div class="filters personal-filters" role="group" aria-label="${t('项目分类','Project categories')}">${[['all',t('全部','All')],['market',t('市场','Market')],['research',t('研究','Research')],['audit',t('财务','Finance')],['ai',t('AI与产品','AI and product')]].map(([id,n])=>`<button class="filter ${id==='all'?'active':''}" data-filter="${id}" aria-pressed="${id==='all'}">${n}</button>`).join('')}</div><div id="project-index" class="personal-index">${index()}</div></aside></section>${experience}<section class="why-section" id="why"><div class="why-stage"><div class="why-heading"><div><span class="eyebrow">THE CONNECTIONS</span><h2>Why <em>me?</em></h2></div></div><div class="why-choices" aria-label="${t('财务、研究与构建','Finance, research and building')}">${[['finance','Finance.',t('理解财务的语境','Understand the financial context')],['research','Research.',t('追问问题与证据','Question and examine the evidence')],['build','Build.',t('把方法做成工具','Turn methods into useful tools')]].map(([id,n,c])=>`<div class="why-choice ${id===activeWhy?'active':''}" data-why="${id}"${id===activeWhy?' aria-current="step"':''}><strong>${n}</strong><span>${c}</span></div>`).join('')}</div><div class="method-vocabulary"><span>${t('方法与工具','Methods and tools')}</span><p>${t('波特五力 · PEST / SWOT · 消费者画像 · STP / 4P · Stata · Python · Excel','Porter’s Five Forces · PEST / SWOT · Consumer profiling · STP / 4P · Stata · Python · Excel')}</p></div><div class="why-scenes">${[['finance','Finance.'],['research','Research.'],['build','Build.']].map(([id,name])=>`<section class="why-scene ${id===activeWhy?'active':''}" data-why-scene="${id}" aria-label="${name}"><h3 class="proof-chapter">${name}</h3><div class="why-evidence">${proof(id)}</div></section>`).join('')}</div></div></section><section class="learning-section" id="now"><div class="learning-copy cs-learning"><span class="eyebrow">MY SECOND DISCIPLINE / 计算机辅修</span><h2>Computer<br><em>science.</em></h2><h3>${t('计算机科学与技术辅修','Computer Science and Technology minor')}</h3><p>${t('除了会计，我也在学习编程、数据库和网站设计。','Alongside accounting, I study programming, databases and web design.')}</p><div class="coursework"><span class="coursework-label">${t('课程与学习内容','Coursework and study')}</span><ul class="learning-syllabus">${[['计算机网络','Computer networks'],['C语言','C programming'],['Python','Python'],['数据分析','Data analysis'],['数据库','Databases'],['网站设计','Web design']].map(course=>`<li>${t(course[0],course[1])}</li>`).join('')}</ul></div><div class="current-sql-note"><strong>${t('正在练习 SQL','Currently practicing SQL')}</strong><p>${t('最近在学 SQL，正在练习数据查询、筛选和分组统计。','I’m learning SQL, starting with queries, filters and grouped summaries.')}</p></div></div><div class="sql-notebook"><div class="notebook-top"><span>SQL / PRACTICE NOTE</span><span>projects · 12 rows</span></div><div class="sql-modes" role="group" aria-label="${t('SQL练习','SQL exercises')}">${[['select',t('取出数据','Select')],['where',t('筛选项目','Filter')],['group',t('分类汇总','Group')]].map(([id,n])=>`<button class="sql-mode ${id===sqlMode?'active':''}" data-sql-mode="${id}" aria-pressed="${id===sqlMode}">${n}</button>`).join('')}</div><pre class="sql-code"><code>${esc(queries[sqlMode])}</code></pre><div class="sql-actions"><button class="sql-run" type="button">${t('运行查询','Run query')}</button></div><div class="sql-output" aria-live="polite"><div class="sql-empty"><p>${t('选一条查询，看看数据如何变化。','Choose a query and see how the data changes.')}</p></div></div></div></section><section class="personal-about" id="about"><div><span class="eyebrow">BEHIND THE WORK</span><h2>${t('名字后面的我。','The person<br>behind the work.')}</h2></div><div><p>${t('我是王渤函，吉林大学会计学本科在读，辅修计算机科学。我希望未来的工作里，专业判断、研究分析和技术工具可以一起发挥作用。','I’m Bohan Wang, an Accounting undergraduate at Jilin University with a Computer Science minor. I want professional judgment, research and technical tools to work together in what I do next.')}</p><p>${t('这个网站也会继续更新：把做过的项目放进来，把正在学习的东西留下来。','This portfolio will keep growing: with work I have done and things I am still learning.')}</p><a class="text-link" href="mailto:wangbohan13@outlook.com">${t('聊聊一个项目，或者一个机会。','Let’s talk about a project or an opportunity.')}</a></div></section></div>`;
 }

 // Keep one canvas on screen. Native document scrolling advances the chapter, including narrow windows.
 function setupWhyStory(){
  disposeWhyStory?.();
  const section=document.querySelector('#why');if(!section)return;
  const stage=section.querySelector('.why-stage'),sceneBox=section.querySelector('.why-scenes');
  const scenes=[...section.querySelectorAll('[data-why-scene]')],indicators=[...section.querySelectorAll('[data-why]')];
  let start=0,step=1,frame=0,layoutFrame=0,disposed=false,phase=-1;
  function select(index){
   if(phase===index)return;
   phase=index;activeWhy=scenes[index].dataset.whyScene;section.dataset.phase=activeWhy;
   scenes.forEach((scene,i)=>{scene.classList.toggle('active',i===index);scene.inert=i!==index;if(i!==index)scene.setAttribute('aria-hidden','true');else scene.removeAttribute('aria-hidden');});
   indicators.forEach((item,i)=>{item.classList.toggle('active',i===index);if(i===index)item.setAttribute('aria-current','step');else item.removeAttribute('aria-current');});
  }
  function update(){
   frame=0;if(disposed||!section.isConnected)return;
   select(Math.max(0,Math.min(2,Math.round((scrollY-start)/step))));
  }
  function onScroll(){if(!frame)frame=requestAnimationFrame(update);}
  function configure(){
   layoutFrame=0;if(disposed||!section.isConnected)return;
   const top=(document.querySelector('.masthead')?.getBoundingClientRect().height||80)+8;
   const available=Math.max(220,innerHeight-top-16);
   section.style.setProperty('--why-top',top+'px');
   section.classList.add('is-scroll-story');section.classList.remove('why-compact');
   section.style.removeProperty('--why-scene-height');
   // Compact spacing first; exceptionally small viewports can scroll the active pane without stacking chapters.
   if(stage.getBoundingClientRect().height>available)section.classList.add('why-compact');
   const sceneTop=sceneBox.getBoundingClientRect().top-stage.getBoundingClientRect().top;
   section.style.setProperty('--why-scene-height',Math.max(140,available-sceneTop)+'px');
   step=Math.max(300,available*.72);
   section.dataset.scrollStep=step;
   const style=getComputedStyle(section),paddingTop=parseFloat(style.paddingTop),paddingBottom=parseFloat(style.paddingBottom);
   section.style.minHeight=(stage.getBoundingClientRect().height+2*step+paddingTop+paddingBottom)+'px';
   start=scrollY+section.getBoundingClientRect().top+paddingTop-top;
   update();
  }
  function onResize(){if(!layoutFrame)layoutFrame=requestAnimationFrame(configure);}
  addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onResize);
  const observer=new ResizeObserver(onResize);observer.observe(stage);
  configure();document.fonts.ready.then(()=>{if(!disposed)onResize();});
  disposeWhyStory=()=>{disposed=true;removeEventListener('scroll',onScroll);removeEventListener('resize',onResize);observer.disconnect();cancelAnimationFrame(frame);cancelAnimationFrame(layoutFrame);};
 }

 function mount(ctx){context=ctx;disposeWhyStory?.();disposeWhyStory=null;document.body.classList.add('personal-presentation');setupWhyStory();
  document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===ctx.category;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  const all=document.querySelector('[data-filter="all"]');if(all)all.textContent=ctx.catalogExpanded?ctx.t('全部','All'):ctx.t('精选','Selected');
  const brand=document.querySelector('.brand-name');if(brand)brand.innerHTML='Bohan Wang<span class="signature-dot">.</span>';
  const nav=document.querySelector('.head-nav');if(nav)nav.innerHTML=`<a href="${ctx.url()}#experience">${ctx.t('实习经历','Internships')}</a><a href="${ctx.url()}#work">${ctx.t('作品','Work')}</a><a href="${ctx.url()}#why">Why me?</a><a href="${ctx.url()}#now">${ctx.t('最近在学','Learning')}</a><a href="#contact">${ctx.t('联系','Contact')}</a>`;
  const project=new URLSearchParams(location.search).get('project');const current=ctx.projects.find(p=>p.id===project);const deck=document.querySelector('.detail-deck');if(deck&&current?.skills){const strip=document.createElement('div');strip.className='detail-capability-strip';strip.innerHTML=`<span>${ctx.t('项目展现的能力','Skills demonstrated')}</span><p>${current.skills.map(skill=>`<strong>${esc(ctx.tr(skill))}</strong>`).join('')}</p>`;deck.after(strip);}
  revealObserver?.disconnect();revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('arrived');revealObserver.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.why-section,.learning-section,.personal-about').forEach(el=>revealObserver.observe(el));
 }
 document.addEventListener('click',event=>{
  const mode=event.target.closest('[data-sql-mode]');if(mode){sqlMode=mode.dataset.sqlMode;document.querySelectorAll('[data-sql-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.sqlMode===sqlMode);b.setAttribute('aria-pressed',String(b.dataset.sqlMode===sqlMode));});document.querySelector('.sql-code code').textContent=queries[sqlMode];runSql();return;}
  if(event.target.closest('.sql-run'))runSql();
 });
 window.PERSONAL_HOME={render,mount};
})();

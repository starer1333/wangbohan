(() => {
 'use strict';
 const projects=window.RESEARCH_PROJECTS;
 const params=new URLSearchParams(location.search);
 let lang=params.get('lang')==='en'?'en':'zh';
 let category='all', featured='holiland', observer, catalogExpanded=false;
 const palette={green:{ink:'#387859',pale:'#d9f1e0'},blue:{ink:'#4172d1',pale:'#e8f0fc'},purple:{ink:'#9d79cd',pale:'#ede6f7'}};
 const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const t=(zh,en)=>lang==='en'?en:zh;
 const tr=a=>a?.[lang==='en'?1:0]??'';
 const byId=id=>projects.find(p=>p.id===id);
 const styles=p=>`--item-color:${palette[p.color].ink};--pale:${palette[p.color].pale};--capability-ink:${({green:'#2f694d',blue:'#305da8',purple:'#7654a0'})[p.color]}`;
 const entry=location.pathname.endsWith('/research-preview.html')?'research-preview.html':'index.html';
 const url=id=>`${entry}?lang=${lang}${id?'&project='+encodeURIComponent(id):''}`;
 const cv=()=>`assets/Bohan-Wang-CV-${lang==='en'?'EN':'CN'}.pdf`;
 const link=(id,text,cls='')=>`<a class="${cls}" href="${url(id)}">${text}</a>`;
 function resources(p){
  const label=f=>f[lang==='en'?2:1].replace(/^(?:打开|查看)/,'').replace(/^(?:Open|View) /,'').replace(/\s*[·.]?\s*(?:PPTX?|PDF|DOCX?|XLSX?)$/i,'').trim();
  const size=n=>n>=1000000?(n/1000000).toFixed(1)+' MB':Math.max(1,Math.round(n/1000))+' KB';
  return p.files.map(f=>{
   const bytes=window.PROJECT_FILE_INFO?.[f[0]]?.bytes;
   const name=(p.id==='yofc'?'长飞光纤内部控制分析.pptx':f[0].replace(/\s+(?=\.)/g,'').trim()).replace(/\.(pptx?|pdf)(?=\.(pptx?|pdf)$)/i,'');
   return `<a class="resource-link" href="assets/projects/${encodeURIComponent(f[0])}" download="${e(name)}" data-file-bytes="${bytes||''}"><span>${e(label(f))}<small> · ${e(f[0].split('.').pop().toUpperCase())}${bytes?' · '+size(bytes):''}</small></span></a>`;
  }).join('')+(p.external||[]).map(f=>`<a class="resource-link" href="${e(f[0])}" target="_blank" rel="noopener noreferrer"><span>${e(label(f))}</span></a>`).join('');
 }

 function chart(p,expand=false){
  if(p.id==='holiland'){
   const rows=[
    {v:76,c:'green',label:t('通过社交媒体获知联名','Discover through social media'),note:t('在本次样本中，社交媒体是主要的信息获取渠道。该题为多选题。','Social media is the leading discovery channel in this sample. This was a multiple-response question.')},
    {v:70,c:'blue',label:t('感知联名价格偏高','Perceive collaboration prices as high'),note:t('“明显偏高”29%与“略有偏高”41%合计为70%，反映样本中的价格感知。','29% selected “clearly high” and 41% “somewhat high,” totaling 70% of respondents.')},
    {v:47,c:'purple',label:t('将高价列为购买阻碍','Cite high prices as a purchase barrier'),note:t('报告记录47%将价格过高列为购买阻碍；该结果不能单独解释未购买的全部原因。','The report records 47% citing high prices as a barrier; this does not explain all reasons for not purchasing.')}
   ];
   return `<div class="figure-top"><span class="figure-title">${t('消费者如何发现、衡量与选择联名','How consumers discover, assess and choose collaborations')}</span>${expand?`<button class="chart-expand" data-expand="${p.id}">${t('放大图表 ','Expand chart ')}</button>`:'<span class="sample-tag">n = 300</span>'}</div><div class="metric-chart" role="group" aria-label="${t('问卷结果，三个独立问题','Survey results, three independent questions')}">${rows.map((r,i)=>`<button class="chart-row" data-insight="${e(r.note)}" style="--color:${r.c==='green'?'#55bd6a':palette[r.c].ink};--value-ink:${palette[r.c].ink};--pale:${palette[r.c].pale};--value:${r.v}%;--delay:${i*.08}s" aria-label="${e(r.label)}: ${r.v}%. ${e(r.note)}"><span class="chart-label">${e(r.label)}</span><span class="bar-track" aria-hidden="true"><span class="bar-fill" style="display:block"></span></span><strong class="chart-value">${r.v}%</strong></button>`).join('')}</div><p class="chart-insight" aria-live="polite">${t('点击一行，查看该指标的解释。','Select a row to read the measure’s context.')}</p><p class="chart-footnote">${t('来源：本人好利来项目报告，300份有效问卷。不同题目，比例不可相加；不表示全部消费者。','Source: my Holiland report, 300 valid responses. Separate questions; percentages are not additive and do not represent all consumers.')}</p>`;
  }
  if(p.id==='oppo')return `<div class="figure-top"><span class="figure-title">${t('让市场选择有据可循','A structured path to market selection')}</span>${expand?`<button class="chart-expand" data-expand="oppo">${t('放大图示 ','Expand diagram ')}</button>`:''}</div><svg class="flow-figure" viewBox="0 0 640 180" role="img" aria-labelledby="flow-${expand?'detail':'home'}"><title id="flow-${expand?'detail':'home'}">${t('出口、物流和贸易潜力共同支持市场比较与进入策略','Exports, logistics and trade potential inform market comparison and entry strategy')}</title><path d="M148 34 C235 34 214 85 283 85 L283 105 C214 105 227 55 148 55Z" fill="#d9f1e0"/><path d="M148 82 C213 82 214 86 283 86 L283 106 C214 106 214 103 148 103Z" fill="#d3e3f6"/><path d="M148 132 C224 132 215 87 283 87 L283 107 C215 107 230 153 148 153Z" fill="#ede6f7"/><path d="M388 85 C447 85 427 32 487 32 L487 49 C438 49 449 105 388 105Z" fill="#d3e3f6"/><path d="M388 85 C440 85 431 88 487 88 L487 105 C431 105 441 105 388 105Z" fill="#d9f1e0"/><path d="M388 85 C445 85 431 141 487 141 L487 158 C430 158 447 105 388 105Z" fill="#ede6f7"/><rect x="2" y="23" width="146" height="39" fill="#e1f8e5"/><rect x="2" y="72" width="146" height="39" fill="#e8f0fc"/><rect x="2" y="121" width="146" height="39" fill="#ede6f7"/><rect x="283" y="65" width="105" height="61" fill="#4172d1"/><rect x="487" y="23" width="151" height="34" fill="#e8f0fc"/><rect x="487" y="80" width="151" height="34" fill="#d9f1e0"/><rect x="487" y="137" width="151" height="34" fill="#ede6f7"/><text x="16" y="48">${t('出口数据','Export data')}</text><text x="16" y="97">${t('物流绩效 LPI','Logistics · LPI')}</text><text x="16" y="146">${t('贸易潜力 TPI','Trade potential · TPI')}</text><text x="335" y="99" text-anchor="middle" style="fill:white">${t('市场比较','Compare')}</text><text x="502" y="45">${t('目标市场','Target markets')}</text><text x="502" y="102">${t('资源优先级','Resource priorities')}</text><text x="502" y="159">${t('差异化进入','Entry strategies')}</text></svg><p class="chart-footnote">${t('研究框架示意。流带表示分析关系，宽度不代表统计数值。','Research framework. Ribbons indicate relationships; widths do not represent statistical values.')}</p>`;
  if(p.id==='financedoc')return `<div class="figure-top"><span class="figure-title">${t('从原始文档，到可复核的输出','From source documents to reviewable output')}</span></div><div class="workflow-steps">${[[t('读取','Read'),t('PDF / Excel 文档','PDF / Excel documents')],[t('提取','Extract'),t('摘要与关键指标','Summaries and metrics')],[t('审阅','Review'),t('规则提示与证据问答','Rules and evidence Q and A')],[t('导出','Export'),t('分析底稿与人工核验','Working papers and checks')]].map(x=>`<div class="workflow-step"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div><p class="chart-footnote">${t('产品工作流示意。AI输出需回到原始文档进行人工核对。','Product workflow. AI output must be checked against source documents by a human reviewer.')}</p>`;
  const stages=[t('研究问题','Question'),t('材料与方法','Evidence and method'),t('分析与交付','Analysis and output')];
  return `<div class="figure-top"><span class="figure-title">${t('项目研究路径','Project approach')}</span></div><div class="workflow-steps" style="grid-template-columns:repeat(3,1fr)">${stages.map((s,i)=>`<div class="workflow-step" style="border-color:${palette[p.color].ink};background:${palette[p.color].pale}"><b>${s}</b><small>${e(i===0?tr(p.label):i===1?p.tools.split(' · ').slice(0,2).join(' · '):t('见报告与交付材料','See report and materials'))}</small></div>`).join('')}</div><p class="chart-footnote">${t('方法示意，完整内容与证据见下方原始材料。','Method illustration; consult the original materials for full evidence.')}</p>`;
 }
 function header(){
  document.getElementById('top').innerHTML=`<div class="wrap head-inner"><a class="brand" href="${url()}" aria-label="${t('王渤函，返回首页','Bohan Wang, home')}"><span class="brand-mark">BW</span><span class="brand-name">${t('王渤函','Bohan Wang')}<small>${t('BOHAN WANG','ACCOUNTING · RESEARCH · AI')}</small></span></a><nav class="head-nav" aria-label="${t('主要导航','Main navigation')}"><a href="${url()}#work">${t('项目','Projects')}</a><a href="${url()}#experience">${t('经历','Experience')}</a><a href="${url()}#about">${t('关于','About')}</a><a href="#contact">${t('联系','Contact')}</a></nav><div class="head-actions"><button class="lang-switch" type="button" aria-label="${t('Switch to English','切换到中文')}">${t('EN','中文')}</button><a class="cv-button" href="${cv()}" download>${t('下载简历','Download CV')}</a></div></div>`;
 }
 function footer(){
  document.getElementById('footer').innerHTML=`<div class="wrap footer-inner" id="contact"><div><a href="${url()}" class="footer-name">Bohan Wang</a><div class="footer-meta">ACCOUNTING · RESEARCH · AI WORKFLOWS</div></div><div class="footer-links"><a class="phone-link" href="tel:13115698743" aria-label="${t('拨打电话13115698743','Call 13115698743')}">${t('电话','Phone')} 13115698743</a><a href="mailto:wangbohan13@outlook.com">wangbohan13@outlook.com</a><a href="https://github.com/starer1333" target="_blank" rel="noopener noreferrer">GitHub</a><a href="${cv()}" download>${t('下载简历','Download CV')}</a><a href="#top" data-back-to-top>${t('回到顶部','Back to top')}</a></div></div>`;
 }
 function index(){
  const curated=category==='all'&&!catalogExpanded;
  const direction=window.PORTFOLIO_DIRECTION;const categories=Object.fromEntries(Object.entries(direction.paths).map(([id,path])=>[id,tr(path.title)]));
  const visible=curated?direction.featured.map(byId):category==='all'?[...direction.featured.map(byId),...projects.filter(p=>!direction.featured.includes(p.id))]:direction.paths[category].ids.map(byId);
  const title=curated?t('精选项目','Selected projects'):category==='all'?t('全部项目','All projects'):categories[category];
  return `<div class="index-heading"><h2>${title}</h2></div><ul class="index-list project-evidence-list">${visible.map(p=>`<li><a class="index-link project-evidence-link" href="${url(p.id)}" style="${styles(p)}"><span class="project-row-head"><strong class="index-title">${e(tr(p.short))}</strong></span><span class="project-brief">${e(tr(p.summary)||tr(p.desc))}</span><span class="project-skills">${(p.skills||[]).map(skill=>`<span>${e(tr(skill))}</span>`).join('')}</span></a></li>`).join('')}</ul>${category==='all'?`<button class="catalog-expand" type="button" data-catalog-expand aria-expanded="${catalogExpanded}"><span>${catalogExpanded?t('收起完整目录','Return to selected projects'):t('查看全部12项项目与实践','Explore all 12 projects and practices')}</span><span aria-hidden="true">${catalogExpanded?'−':'＋'}</span></button>`:''}<p class="index-note">${t('点击查看项目详情，下载原始文档。','Open a project to read the details and download the original files.')}</p>`;
 }
 function refreshCatalog(){
  document.getElementById('project-index').innerHTML=index();
  const all=document.querySelector('[data-filter="all"]');if(all)all.textContent=catalogExpanded?t('全部','All'):t('精选','Selected');
 }
 function feature(){
  const p=byId(featured);
  return `<div class="feature-nav" role="group" aria-label="${t('切换代表项目','Select a featured project')}">${[['holiland',t('好利来','Holiland')],['oppo','OPPO'],['financedoc','FinanceDoc AI']].map(([id,n])=>`<button class="feature-tab ${featured===id?'active':''}" aria-pressed="${featured===id}" data-feature="${id}">${n}</button>`).join('')}</div><div class="feature-topline"><span class="feature-category">${e(tr(p.label))} / ${t('代表项目','Featured')}</span><span class="feature-year">2026</span></div><h2>${link(p.id,e(tr(p.title)))}</h2><p class="feature-summary">${e(tr(p.desc))}</p><figure class="feature-figure">${chart(p)}</figure><div class="feature-bottom">${link(p.id,t('阅读项目','Explore the project'),'text-link link-arrow')}<span class="feature-meta">${p.id==='holiland'?t('问卷设计 → 分析 → 策略','Questionnaire → Analysis → Strategy'):e(p.tools.split(' · ').slice(0,3).join(' · '))}</span></div>`;
 }
 function mini(p){
  if(p.id==='holiland')return `<div class="large-stat">300<small>${t('份有效问卷','VALID RESPONSES')}</small></div><div class="mini-bars" aria-hidden="true"><i></i><i></i><i></i></div>`;
  if(p.id==='oppo')return `<div class="market-art"><span>LPI <i>×</i> TPI</span><small>${t('比较 → 筛选 → 进入','COMPARE → PRIORITIZE → ENTER')}</small></div>`;
  return `<div class="flow-mini" aria-hidden="true"><span>INPUT</span><i>→</i><span>REVIEW</span><i>→</i><span>OUTPUT</span></div>`;
 }
 function home(){
  document.title=t('王渤函 — 研究与实践','Bohan Wang — Research and practice');
  return `<div class="wrap"><section class="intro"><div><span class="eyebrow">BOHAN WANG / PORTFOLIO</span><h1>${t('研究与实践 <em>Selected work.</em>','Research &amp; <em>practice.</em>')}</h1></div><p class="intro-note"><strong>${t('会计学 · 计算机科学 · AI 工作流','Accounting · Computer Science · AI workflows')}</strong>${t('吉林大学｜从财务与审计，到商业研究和工具构建。','Jilin University. Financial and audit practice, business research, and tools built to support the work.')}</p></section><section id="work" aria-label="${t('项目目录','Project directory')}"><div class="work-toolbar"><div class="filters" role="group" aria-label="${t('项目分类','Project categories')}">${[['all',t('全部','All work')],['market',t('市场与消费者','Market and consumer')],['research',t('行业与研究','Industry and research')],['audit',t('财务与审计','Finance and audit')],['ai',t('AI与产品','AI and product')]].map(([id,n])=>`<button class="filter ${category===id?'active':''}" data-filter="${id}" aria-pressed="${category===id}">${n}</button>`).join('')}</div><span class="work-count">12 ${t('项项目与实践','PROJECTS and PRACTICES')}</span></div><div class="project-stage"><article class="feature" id="feature">${feature()}</article><aside class="project-index" id="project-index" aria-label="${t('所有项目','All projects')}">${index()}</aside></div></section><section class="section-divider" aria-labelledby="readings-title"><div class="section-header"><div><span class="eyebrow">THREE WAYS OF WORKING</span><h2 id="readings-title">${t('理解需求，比较机会，构建工具。','Understand people. Compare opportunities. Build tools.')}</h2></div><p>${t('三份作品，分别呈现消费者研究、市场分析与AI应用。','Three projects across consumer research, market analysis and applied AI.')}</p></div><div class="readings">${['holiland','oppo','financedoc'].map(id=>{const p=byId(id);return `<a class="reading" href="${url(id)}" style="${styles(p)}"><div class="reading-graphic">${mini(p)}</div><span class="eyebrow">${e(tr(p.label))}</span><h3>${e(tr(p.short))}</h3><p>${e(tr(p.desc))}</p></a>`}).join('')}</div></section><section class="section-divider" id="experience"><div class="section-header"><div><span class="eyebrow">IN PRACTICE</span><h2>${t('真实业务中的训练','Experience, in practice.')}</h2></div></div><div class="experience-grid"><article class="experience-item"><div class="experience-date">2026.07<br>— 2026.09</div><div><h3>${t('华林证券','Hualin Securities')}</h3><p class="experience-role">${t('财务实习生','Finance Intern')}</p><ul><li>${t('参与半年报财务部分编制，交叉核验披露、底稿与系统数据。','Supported interim financial reporting and cross-checked disclosures against working papers and system data.')}</li><li>${t('处理管理账套分摊、报表勾稽与增值税进项核验。','Worked on allocation journals, statement reconciliation and input VAT checks.')}</li></ul><p class="experience-tools">${t('用友 · 上市公司公告编制系统 · Excel · Power Query · 多表核对','Yonyou · Reporting systems · Excel · Power Query · Reconciliation')}</p></div></article><article class="experience-item"><div class="experience-date">2026.01<br>— 2026.02</div><div><h3>${t('天职国际','Baker Tilly China')}</h3><p class="experience-role">${t('函证中心实习生','Audit Confirmation Center Intern')}</p><ul><li>${t('负责企业函证发出、跟踪、回函核验与异常处理。','Managed confirmation dispatch, tracking, reply verification and exceptions.')}</li><li>${t('应用Excel与AI辅助VBA，参与Dify知识库及OCR / RPA探索。','Applied Excel and AI-assisted VBA; explored Dify knowledge bases and OCR / RPA.')}</li></ul><p class="experience-tools">Excel · VBA · DeepSeek · Dify · OCR / RPA</p></div></article></div></section><section class="section-divider about-section" id="about"><div><span class="eyebrow">ABOUT THE WORK</span><h2>Accounting.<br>Research.<br><span style="color:var(--green)">Applied AI.</span></h2></div><div class="about-copy"><p>${t('我是王渤函，吉林大学会计学本科在读，辅修计算机科学。我的实践围绕财务与审计、研究分析，以及AI在工作流中的应用展开。','I’m Bohan Wang, an Accounting undergraduate at Jilin University with a Computer Science minor. My work spans financial and audit practice, research, and AI applications in everyday workflows.')}</p><p>${t('我关心材料从哪里来、判断如何形成，以及一个分析结果能否帮助下一步行动。这个网站收录了我做过的研究、业务实践和产品项目。','I care about where evidence comes from, how judgments are formed, and whether an analysis helps the next decision. This portfolio brings together my research, operational practice and product projects.')}</p><div class="about-tags">Excel / Power Query · Stata · Python · SQL<br>DeepSeek / ChatGPT / Claude · Dify · VBA</div></div></section></div>`;
 }
 function narrativeSection(section){
  const paragraphs=(section.paragraphs||[]).map(p=>`<p>${e(tr(p))}</p>`).join('');
  const table=section.table?`<div class="story-table-wrap"><table class="story-table"><thead><tr>${section.table.columns.map(c=>`<th scope="col">${e(tr(c))}</th>`).join('')}</tr></thead><tbody>${section.table.rows.map(row=>`<tr>${row.map((cell,i)=>i===0?`<th scope="row">${e(tr(cell))}</th>`:`<td>${e(tr(cell))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';
  const bars=section.bars?`<div class="story-bars">${section.bars.map(r=>`<div class="story-bar" style="--bar-color:${palette[r.color].ink};--bar-pale:${palette[r.color].pale};--bar-value:${r.value}%"><span>${e(tr(r.label))}</span><div class="story-bar-track" aria-hidden="true"><i></i></div><strong>${r.value}%</strong></div>`).join('')}</div>`:'';
  const metrics=section.metrics?`<dl class="story-metrics">${section.metrics.map(m=>`<div><dd>${e(m.value)}</dd><dt>${e(tr(m.label))}</dt></div>`).join('')}</dl>`:'';
  return `<section class="detail-section story-section" id="${e(section.id)}"><h2>${e(tr(section.title))}</h2>${paragraphs}${table}${bars}${metrics}${section.caption?`<p class="story-caption">${e(tr(section.caption))}</p>`:''}</section>`;
 }
 function detail(p){
  document.title=tr(p.title)+t(' — 王渤函',' — Bohan Wang');
  const story=window.PROJECT_STORIES?.[p.id];
  if(!story)throw new Error('Missing project narrative: '+p.id);
  const paper=['paper','proposal','progress'].includes(story.kind);
  const abstractTitle=story.kind==='progress'?t('中期研究进展','Interim research progress'):t(story.kind==='proposal'?'研究摘要':'论文摘要','Abstract');
  const stageLabel=story.kind==='progress'?'RESEARCH IN PROGRESS':story.kind==='proposal'?'RESEARCH PROPOSAL':paper?'PAPER':'PROJECT';
  const hasResources=p.files.length||(p.external||[]).length;
  const sourceUrl=story.sourceUrl||(p.files[0]?'assets/projects/'+encodeURIComponent(p.files[0][0]):'assets/Bohan-Wang-CV-CN.pdf');
  const sections=paper?[['abstract',abstractTitle]]:story.sections.map(s=>[s.id,tr(s.title)]);
  if(story.readingNotes)sections.push(['reading-notes',tr(story.readingNotes.title)]);
  if(hasResources)sections.push(['materials',t('原始材料','Materials')]);
  const notes=story.readingNotes?`<section class="detail-section research-reading-notes" id="reading-notes"><h2>${e(tr(story.readingNotes.title))}</h2><dl>${story.readingNotes.items.map(([key,value])=>`<div><dt>${e(tr(key))}</dt><dd>${e(tr(value))}</dd></div>`).join('')}</dl></section>`:'';
  const body=paper?`<section class="detail-section paper-abstract" id="abstract"><span class="eyebrow">${story.kind==='paper'?'ABSTRACT':stageLabel}</span><h2>${abstractTitle}</h2>${story.abstract.map(a=>`<p>${e(tr(a))}</p>`).join('')}<p class="paper-keywords"><strong>${t('关键词','Keywords')}</strong> ${e(tr(story.keywords))}</p></section>${notes}`:story.sections.map(narrativeSection).join('');
  return `<div class="wrap project-story ${paper?'paper-story':'case-story'}" style="${styles(p)}"><div class="detail-breadcrumb"><a href="${url()}">${t('返回全部项目','All projects')}</a><span>${e(tr(p.label))}</span></div><header class="detail-hero"><div><span class="eyebrow">${e(tr(p.label))} / ${stageLabel}</span><h1 class="detail-title">${e(tr(p.title))}</h1><p class="detail-deck">${e(paper?tr(p.desc):tr(story.intro))}</p></div><dl class="detail-meta"><div><dt>${t('个人工作','My contribution')}</dt><dd>${e(tr(p.role))}</dd><dt style="margin-top:18px">${t('工具与方法','Tools and methods')}</dt><dd class="detail-tools">${e(p.tools)}</dd></div>${hasResources?`<div><dt>${t('项目资料','Project materials')}</dt><dd>${resources(p)}</dd></div>`:''}</dl></header><div class="detail-layout"><nav class="contents" aria-label="${t('本页目录','On this page')}"><p>ON THIS PAGE</p>${sections.map(([id,title])=>`<a href="#${e(id)}">${e(title)}</a>`).join('')}</nav><article class="detail-content">${body}<p class="story-source"><a href="${e(sourceUrl)}" target="_blank" rel="noopener noreferrer">${e(tr(story.source))}</a></p>${hasResources?`<section class="detail-section" id="materials"><span class="eyebrow">ORIGINAL MATERIALS</span><h2>${t('查看完整材料','Read the full work.')}</h2><div class="resource-block">${resources(p)}</div></section>`:''}</article></div></div>`;
 }

 function render(){
  observer?.disconnect();
  document.documentElement.lang=lang==='en'?'en':'zh-CN';
  header();footer();
  const id=new URLSearchParams(location.search).get('project');
  const p=byId(id);
  let homeHTML;
  const personalContext={lang,t,tr,projects,url,index,chart,category,catalogExpanded};
  if(!id){personalContext.experience=window.INTERNSHIP_EXPERIENCE.render(personalContext);homeHTML=window.PERSONAL_HOME.render(personalContext);document.title=t('王渤函 — 商业分析、数据研究与AI实践','Bohan Wang — Business analysis, research and applied AI');}
  document.getElementById('main').innerHTML=id?(p?detail(p):`<div class="wrap error-page"><h1>${t('没有找到这个项目','Project not found')}</h1><a href="${url()}">${t('返回全部项目','Return to all projects')} </a></div>`):homeHTML;
  window.PERSONAL_HOME.mount(personalContext);
  if(p){observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.contents a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}})},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('.detail-section').forEach(s=>observer.observe(s));}
 }
 document.addEventListener('click',event=>{
  if(event.target.closest('[data-back-to-top]')){event.preventDefault();history.replaceState(null,'',location.pathname+location.search+'#top');window.scrollTo({top:0,left:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});return;}
  const language=event.target.closest('.lang-switch');
  if(language){const y=scrollY;lang=lang==='en'?'zh':'en';const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u);render();requestAnimationFrame(()=>scrollTo(0,y));return;}
  const filter=event.target.closest('[data-filter]');
  if(filter){category=filter.dataset.filter;catalogExpanded=false;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===category);b.setAttribute('aria-pressed',String(b.dataset.filter===category));});refreshCatalog();return;}
  if(event.target.closest('[data-catalog-expand]')){catalogExpanded=!catalogExpanded;refreshCatalog();return;}
  const tab=event.target.closest('[data-feature]');
  if(tab){featured=tab.dataset.feature;document.getElementById('feature').innerHTML=feature();document.querySelector(`[data-feature="${featured}"]`)?.focus({preventScroll:true});return;}
  const row=event.target.closest('[data-insight]');
  if(row){row.closest('figure').querySelector('.chart-insight').textContent=row.dataset.insight;return;}
  const expand=event.target.closest('[data-expand]');
  if(expand){document.querySelector('.chart-dialog')?.showModal();return;}
  if(event.target.closest('.dialog-close')){document.querySelector('.chart-dialog')?.close();return;}
 });
 render();
})();

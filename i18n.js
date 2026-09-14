(() => {
  const bindings = [];
  document.querySelectorAll('[data-download-en]').forEach(node=>bindings.push({node,zh:node.innerHTML,en:node.dataset.downloadEn}));
  function bind(selector, values) {
    document.querySelectorAll(selector).forEach((node, i) => {
      const en = Array.isArray(values) ? values[i] : values;
      if (en !== undefined) bindings.push({node, zh: node.innerHTML, en});
    });
  }
  bind('.skip-link', 'Skip to content');
  bind('.wordmark > span', 'Bohan Wang');
  bind('.site-header nav a', ['Experience','Projects','AI Lab','Contact']);
  bind('.cv-link', 'Download CV <span>↓</span>');
  bind('.hero-cn', 'Bohan Wang');
  bind('.hero-en', '王渤函');
  bind('.hero-bottom > p', 'Accounting · Computer Science · AI Workflows');
  bind('.hero-links a', ['View projects ↘','DOWNLOAD CV ↓']);
  bind('.stage-portal > span', 'OBSERVE / ANALYZE / BUILD');
  bind('.manifesto-copy p', ['Lay out the material. Find the connections. Keep what matters.','Turning numbers into informed judgment.']);
  bind('.education-note span', 'Jilin University · 2023–2028');
  bind('.education-note strong', 'Undergraduate in Accounting');
  bind('.education-note p', 'Computer Science minor. Building on accounting and auditing through empirical research, business analysis and AI-assisted workflows.');
  bind('.method-rail span', ['Source material','Structure','Cross-check','Judgment']);
  bind('.experience-heading h2', 'Inside the work');
  bind('.experience-heading > p:last-child', 'Two internships working with complex processes and making their progress traceable.');
  bind('.experience-main h3', ['Hualin Securities','Baker Tilly China']);
  bind('.role', ['Finance Intern','Audit Confirmation Center Intern']);
  bind('.experience-lines p', [
    '<b>Interim reporting</b> Supported financial statements and note entry; cross-checked disclosures against working papers and system data.',
    '<b>Management accounting</b> Entered allocation journals and examined differences between financial and internal management accounting.',
    '<b>Reconciliation</b> Consolidated data from Yonyou and business ledgers, checking links across financial statements and investigating discrepancies.',
    '<b>Tax checks</b> Reconciled VAT invoice registers, input VAT and account balances; followed up missing or inconsistent items.',
    '<b>Full cycle</b> Managed confirmations for 30+ companies on the Qinghai Salt Lake engagement, covering dispatch, tracking, reply checks and exceptions.',
    '<b>Results</b> Achieved a confirmation return rate above 95%, while supporting companies on a Shanghai Baoshan engagement.',
    '<b>Efficiency</b> Designed an Excel extraction template that improved confirmation data-entry efficiency by approximately 40%.',
    '<b>Automation</b> Used DeepSeek to assist with VBA and explored Dify knowledge bases, OCR and RPA workflows.'
  ]);
  bind('.skill-line', ['<span>TOOLS /</span> Yonyou · Listed-company reporting system · Advanced Excel functions · Pivot tables · Power Query · Multi-table matching','<span>TOOLS /</span> Confirmation workflows · Reply verification · Excel · VBA · DeepSeek · Dify · OCR / RPA']);
  bind('.scene-mark', ['Reconcile<br>Trace<br>Review','Send<br>Track<br>Close']);
  bind('.projects-heading h2', 'Selected work,<br>in detail.');
  bind('.projects-heading > p:last-child', 'Scroll through the projects. Expand each one to explore the problem, method, output and value.');
  bind('.details-toggle', 'Explore the project <span>＋</span>');
  const projects = [
    ['FinanceDoc AI｜Financial Document Analysis & Risk Review','Document uploads, table parsing, financial summaries, rule-based risk checks, RAG Q&A, multi-agent review and working-paper exports.','Financial documents, audit reports and due diligence materials are dense and time-consuming to screen manually.','Streamlit, DeepSeek API, RAG and rule-based checks.','Financial summaries, risk reviews, evidence excerpts and analysis working papers.','Turns data entry, risk review and working-paper generation into a product workflow.'],
    ['Audit Confirmations & AI-assisted Data Processing','Connected companies, banks and engagement teams through traceable confirmation and data-processing workflows.','Repetitive data preparation, status tracking and exception checks.','Advanced Excel functions, pivot tables, VBA and AI tools.','Progress reports, extraction templates, batch-renaming scripts and knowledge-base exploration.','Makes progress visible and helps teams locate exceptions faster.'],
    ['Accrual Earnings Management in IPO Firms','Studied whether auditor industry expertise constrains accrual earnings management, using A-share IPO firms from 2011–2024.','IPO firms may have incentives to inflate reported performance through accruals.','Measured AbsDA using the modified Jones model and constructed auditor industry expertise variables.','Fixed-effects regressions, instrumental variables, mechanism tests and a research paper.','Examines how audit expertise contributes to IPO earnings quality.'],
    ['AGI Adoption & Corporate Governance','Converted AI strategy text in annual reports into testable variables linked to earnings management, disclosure and governance.','Can AI / AGI reduce managerial information advantages and improve governance?','Built an AGI keyword dictionary from MD&A and matched it to governance variables.','Research design, variable definitions, a panel-regression framework and presentation materials.','Turns strategic text into firm-level variables for empirical analysis.'],
    ['Dry Bulk Freight Forecasting & Interpretability','Combined shipping, financial and commodity time series to examine freight volatility, variable relationships and event effects.','Traditional models struggle to capture both long-term freight trends and short-term shocks.','MIC variable selection, Transformer-based DA-MTS and LSTM residual correction.','Cleaned variables, correlation analysis, error comparisons and event annotations.','Demonstrates financial time-series processing and model interpretation.'],
    ['Volkswagen Group: Strategy & Financial Analysis','Examined earnings quality, pressure in China and transformation constraints in electric and software-defined vehicles.','Flat revenue, declining margins and software transition pressures.','Analyzed value-pool shifts, financial performance, competition and software-platform constraints.','A strategy and finance deck, key findings and margin-recovery recommendations.','Translates industry change into strategic financial judgments.'],
    ['Shaanxi Tourism: IPO Business Analysis','Analyzed industry growth, core asset barriers, performance and cableway business models, and earnings quality.','How should the business value and asset barriers of a tourism IPO be assessed?','Examined industry growth, visitor traffic in Xi’an, cultural IP and core businesses.','An IPO analysis deck, asset analysis and an earnings-quality assessment.','Connects visitor traffic and assets with the capital-market investment narrative.'],
    ['Holiland Marketing Strategy','Studied brand rejuvenation, IP collaborations, consumer behavior and the conversion of attention into brand equity.','Frequent IP collaborations attract attention but can also lead to consumer fatigue.','PEST, SWOT, STP, 4P and consumer-behavior analysis.','A marketing report, consumer analysis and brand recommendations.','Turns brand-attention challenges into practical improvement options.'],
    ['OPPO: RCEP Smartphone Market Entry','Combined export data, logistics efficiency and trade potential to prioritize markets and tailor entry strategies.','RCEP markets differ in demand, logistics, customs processes and competition.','Export data, LPI, TPI and target-market tiers.','Market screening, positioning, logistics priorities and entry recommendations.','Demonstrates international-trade analysis and structured strategy recommendations.'],
    ['Baidu Health: Industry & Strategy Analysis','Examined policy, business models, competitors and operating pressures to define platform boundaries and differentiation.','Baidu Health cannot simply replicate fulfillment-heavy pharmaceutical retail models.','Policy, business-model, competitor, financial and international case analysis.','Platform positioning, business boundaries, monetization options and recommendations.','Identifies differentiation opportunities in AI search and patient-service coordination.'],
    ['YOFC Internal Control Analysis','Identified risks through manufacturing workflows, financial indicators and an internal-control framework.','Control effectiveness in complex operations affects financial reporting quality.','Combined an internal-control framework with financial indicators and process analysis.','Internal-control analysis and risk-identification findings.','Demonstrates accounting and audit foundations, process analysis and risk identification.'],
    ['City Pizza: WeChat Ordering Mini Program','Used AI-assisted coding to translate an ordering workflow into a customer prototype and merchant management modules.','Small restaurants need configurable product and order management.','Designed ordering journeys, product-option logic and management modules.','A mini-program prototype, merchant interface and code repository.','Demonstrates development from business workflow to product prototype.']
  ];
  document.querySelectorAll('[data-project]').forEach((track,i) => {
    const nodes = [track.querySelector('h3'),track.querySelector(':scope > p'),...track.querySelectorAll('dd')];
    nodes.forEach((node,j) => bindings.push({node,zh:node.innerHTML,en:projects[i][j]}));
  });
  bind('.project-links a[href$="Research.pdf"]', 'Read material (Chinese) ↗');
  const tools = document.querySelectorAll('.project-track .tools');
  bindings.push({node:tools[9],zh:tools[9].innerHTML,en:'Industry Research · Business Models · Competitive Benchmarking · Financial Analysis · Policy Analysis'});
  bind('.signal-stage h2', 'How I use AI day to day');
  bind('.signal-chain strong', ['Clarify the question','Reduce repetitive work','Connect the tools','Check the source']);
  bind('.signal-chain p', [
    'Use ChatGPT, Claude and DeepSeek to break down a question, adding context, constraints and the output I need.',
    'Use AI to write, explain and revise VBA and code. Start with a small test sample, then check the results.',
    'Explore Dify knowledge bases, OCR and RPA to connect information retrieval, extraction and subsequent processing.',
    'Check references, numbers and execution results against the original material. Investigate uncertainty before using an answer.'
  ]);
  bind('.closing h2', 'Let’s talk<br>about the work.');
  bind('.contact-links a[download] b', 'Download English CV ↓');
  document.querySelectorAll('.credit-group').forEach(group => {
    ['University Second-class Scholarship','CET-6 517','IELTS 6.0 / Reading 7.0','Student team & event coordination','Accounting × Research × AI Workflows'].forEach((en,i)=>{
      const node=group.children[i]; bindings.push({node,zh:node.innerHTML,en});
    });
  });
  bind('footer span:first-child', 'Bohan Wang');
  const wordSets = ['UPLOAD|EXTRACT|CHECK','30+ firms|95%+ return|40% efficiency','2011–2024|AbsDA|2SLS','MD&A|Dictionary|Panel regression','BDI / BCI / BPI|MIC|DA-MTS + LSTM','Annual Report|Profit Bridge|DuPont','Cultural IP|Performances|Cableways','PEST / SWOT|STP|4P','RCEP|LPI|TPI','AI search|Knowledge graph|Patient services','Process|Risk|Control','Customer|Merchant|Orders'];
  const tracks=[...document.querySelectorAll('[data-project]')];
  const originalWords=tracks.map(t=>t.dataset.words);
  const button=document.querySelector('.language-toggle');
  function setLanguage(lang) {
    const en=lang==='en';
    document.querySelectorAll('.cv-link,.hero-links a[download],.contact-links a[download]').forEach(link=>{
      link.href=en?'assets/Bohan-Wang-CV-EN.pdf':'assets/Bohan-Wang-CV-CN.pdf';
    });
    bindings.forEach(b=>b.node.innerHTML=en?b.en:b.zh);
    tracks.forEach((t,i)=>t.dataset.words=en?wordSets[i]:originalWords[i]);
    document.documentElement.lang=en?'en':'zh-CN';
    button.textContent=en?'中文':'EN';
    button.setAttribute('aria-label',en?'切换到中文':'Switch to English');
    document.querySelector('.wordmark').setAttribute('aria-label',en?'Back to home':'返回首页');
    document.querySelector('nav').setAttribute('aria-label',en?'Main navigation':'主要导航');
    document.title=en?'Bohan Wang — Accounting, Research & AI':'王渤函 · Bohan Wang — Portfolio';
    document.querySelector('meta[name="description"]').content=en?'Bohan Wang’s portfolio: accounting, auditing, business research and AI workflows.':'王渤函的个人作品集：会计、审计、商业研究与 AI 工作流。';
    const url=new URL(location.href);url.searchParams.set('lang',en?'en':'zh');history.replaceState(null,'',url);
    try {localStorage.setItem('portfolio-language',lang);} catch {}
    dispatchEvent(new Event('portfolio:language'));
  }
  button.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'zh':'en'));
  let initial=new URLSearchParams(location.search).get('lang');
  if(!initial) {try {initial=localStorage.getItem('portfolio-language');} catch {}}
  if(initial==='en') setLanguage('en');
})();

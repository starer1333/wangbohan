/* Capability summaries grounded in the original reports and CV.
   Porter’s Five Forces is user-reported overall knowledge; it is not assigned
   to a report that does not explicitly document use of the framework. */
(() => {
 const evidence={
  financedoc:{summary:['将财务文档转成摘要、风险提示和可导出底稿，连接审阅流程。','Turns financial documents into summaries, risk flags and exportable working papers.'],skills:[['Python开发','Python'],['RAG问答','RAG Q and A'],['规则化风险识别','Rule-based risk checks']]},
  ipo:{summary:['构建IPO企业盈余管理指标，用实证模型研究审计专业能力的作用。','Measures IPO earnings management and examines audit expertise through empirical models.'],skills:[['Stata','Stata'],['固定效应回归','Fixed-effects regression'],['修正Jones模型','Modified Jones model']]},
  holiland:{summary:['独立完成300份有效问卷的设计、回收与分析，形成消费者画像和营销建议。','Designed and analyzed 300 valid survey responses to develop consumer profiles and recommendations.'],skills:[['问卷设计','Survey design'],['消费者画像','Consumer profiling'],['STP / 4P','STP / 4P']]},
  oppo:{summary:['比较出口规模、物流绩效与贸易潜力，提出目标市场筛选和进入建议。','Compares exports, logistics and trade potential to prioritize markets and entry options.'],skills:[['市场筛选','Market screening'],['LPI / TPI','LPI / TPI'],['数据清洗与可视化','Data preparation and charts']]},
  agi:{summary:['已完成2022–2024年上市公司年报文本匹配与基准回归，形成公司治理研究中期报告。','Completed annual-report text matching and baseline regressions for 2022–2024, producing an interim governance research report.'],skills:[['年报文本匹配','Annual-report text matching'],['双向固定效应','Two-way fixed effects'],['Stata','Stata']]},
  volkswagen:{summary:['把电动化与竞争压力连接到利润率、资本回报和现金流，形成战略判断。','Connects EV and competitive pressures with margins, capital returns and cash flow.'],skills:[['竞争格局分析','Competitive analysis'],['财务诊断','Financial diagnosis'],['现金流分析','Cash-flow analysis']]},
  baidu:{summary:['对标互联网医疗平台，结合政策与业务模式寻找百度健康的差异化路径。','Benchmarks digital-health platforms to assess positioning, policy constraints and differentiation.'],skills:[['竞品对标','Competitive benchmarking'],['商业模式','Business models'],['政策研究','Policy research']]},
  tourism:{summary:['拆解文化IP、演艺和索道等核心业务，分析文旅IPO的资产壁垒与盈利质量。','Examines cultural IP, performances and cableways to assess asset barriers and earnings quality.'],skills:[['招股书分析','Prospectus analysis'],['业务拆解','Business breakdown'],['盈利质量','Earnings quality']]},
  shipping:{summary:['参与干散货运价预测研究，比较模型表现并分析变量与事件冲击。','Contributed to freight forecasting research, model comparisons and interpretation of external effects.'],skills:[['时序数据处理','Time-series data'],['模型误差比较','Model comparison'],['可解释性分析','Interpretability']]},
  yofc:{summary:['结合制造业流程与财务指标，分析内部控制、治理结构和风险环节。','Examines controls, governance and risk points through manufacturing processes and financial indicators.'],skills:[['内部控制','Internal controls'],['流程风险识别','Process-risk identification'],['财务指标分析','Financial metrics']]},
  confirmation:{summary:['跟踪企业函证与异常事项，用Excel模板和AI辅助VBA处理重复数据。','Tracks confirmations and exceptions, using Excel templates and AI-assisted VBA for repetitive tasks.'],skills:[['Excel高级函数','Advanced Excel'],['VBA辅助','VBA-assisted automation'],['异常跟踪','Exception tracking']]},
  pizza:{summary:['把点餐、商品规格和订单管理需求，转化为用户端与商家端原型。','Translates ordering, product options and order management into customer and merchant prototypes.'],skills:[['业务流程拆解','Workflow mapping'],['JavaScript','JavaScript'],['小程序原型','Mini-program prototyping']]}
 };
 for(const project of window.RESEARCH_PROJECTS){Object.assign(project,evidence[project.id]||{});}
})();

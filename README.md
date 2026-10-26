# 王渤函 · Bohan Wang

**会计学 · 计算机科学 · AI 工作流**  
Accounting · Computer Science · AI Workflows

吉林大学会计学本科、计算机科学与技术辅修。这个作品集收录我的财务与审计实习、市场与消费者研究、实证研究，以及 AI 工具和产品开发项目。

**Business-minded analyst and builder.** 理解业务，用数据检验判断，把方法做进工具与流程。

**[访问作品集 / Visit portfolio](https://starer1333.github.io/wangbohan/)**

[中文版](https://starer1333.github.io/wangbohan/?lang=zh) · [English](https://starer1333.github.io/wangbohan/?lang=en) · [中文简历](https://starer1333.github.io/wangbohan/assets/Bohan-Wang-CV-CN.pdf) · [English CV](https://starer1333.github.io/wangbohan/assets/Bohan-Wang-CV-EN.pdf)

## 网站内容 / Content

- **实习经历 / Internships**：华林证券财务实习、天职国际函证中心实习。先展示业务重点与工具能力，完整工作记录可展开阅读。
- **项目 / Projects**：精选 FinanceDoc AI、审计函证工作流、IPO 研究和好利来调研。财务、数据、商业、AI 与产品四条阅读路径共享全部 12 项项目与实践，同一项目可出现在多个路径。
- **Why me?**：保留 Finance × Research × Build 的基础，以 **Understand → Analyze → Build** 在固定画面内随滚动推进；证据和方法同步切换。
- **计算机辅修与 SQL / Computer science and SQL**：展示课程、基础 SQL 查询练习，以及 Stata、Python 对应的实际项目入口。
- **工作之外 / Beyond work**：Hamilton、Come From Away、Modern Family 三个标题在页内展开个人感想，支持切换、收起和键盘操作。
- **简历与联系 / CV and contact**：按界面语言提供中文或英文简历，并保留电话、邮箱与 GitHub 联系入口。

项目内页按原材料分别展开：论文直接阅读摘要；研究方案呈现研究问题与方法；调研、商业分析、内控和产品项目使用具体发现、比较表格、问卷图表与业务流程说明。原始报告、演示文稿、代码与在线演示入口直接可见，无需展开额外内容，文件旁显示格式与大小。

代表案例进一步说明个人工作、关键选择、已有产出与待验证之处；IPO 保留论文摘要并补充研究阅读要点。函证录入效率数据注明环节与证据范围，产品原型与后续验证计划分别呈现。

AGI 公司治理项目保留原研究摘要，下方单独展示中期检查进展，下载区同时提供中期检查报告、原立项方案和答辩材料。

## 视觉与交互 / Design

白色为底，配合绿色、蓝色和紫色；英文标题采用 Fraunces，中文标题采用思源宋体。首页以账本、研究笔记和工具文件夹呈现三种实践。

交互使用原生滚动、文字变色和必要的悬停反馈。工具与能力通过字重和颜色强调；页面支持响应式布局、键盘焦点，以及减少动态效果设置。采用该设置时，滚动章节仍可切换，淡入动画关闭。

手机端封面采用原生横向滑动；中屏单独调整身份、定位、封面与两列项目目录，宽屏保留首页左右构图。兴趣区以作品标题进入阅读区，使用原生按钮与焦点返回。

## 开发与部署 / Development

原生 **HTML / CSS / JavaScript**，无需安装依赖或执行构建。GitHub Pages 从本仓库 `main` 分支的根目录发布。

```text
index.html                  正式首页
research-preview.html       本地试稿的兼容入口
research-preview.css        页面与项目详情的基础样式
personal-home.css           首页视觉、能力强调与响应式样式
method-study.css            职业定位、阅读区和中屏排版
research-preview.js         语言切换、项目目录、详情及资料入口
personal-home.js            首页、滚动章节与 SQL 示例
research-data.js            12 项项目的中英文内容与附件映射
project-evidence.js         项目简介与能力关键词
project-stories.js          各项目的摘要、叙述、证据与表格
project-files.js            下载文件大小
internship-experience.js    中英文实习经历
portfolio-direction.js     职业阅读路径、三阶段叙事及代表案例
personal-notes.js           中英文作品感想与页内阅读交互
assets/                     本地字体、SQL 引擎、简历、项目资料及许可证
```

本地预览可在仓库根目录运行：

```bash
python -m http.server 4174
```

打开 [http://localhost:4174/](http://localhost:4174/)。

## 更新内容 / Maintenance

- **简历**：替换 `assets/Bohan-Wang-CV-CN.pdf` 或 `assets/Bohan-Wang-CV-EN.pdf`，保持文件名不变。
- **项目与附件**：在 `research-data.js` 更新项目内容及文件对应关系，将资料放入 `assets/projects/`。
- **项目简介与能力**：编辑 `project-evidence.js`。
- **项目详细内容**：基础内容在 `project-stories.js`；代表案例与 IPO 阅读要点在 `portfolio-direction.js`。先核对相应原始报告，区分研究方案与已完成论文。
- **中文字体**：`assets/PortfolioSerifCN.woff2` 是按网站用字精简的字体。新增文案后，先用 `python -m pip install fonttools brotli` 安装字体工具，再运行 `python subset-portfolio-font.py` 重新生成，并保留原字体许可证与子集说明。
- **实习经历**：编辑 `internship-experience.js`。
- **首页文案**：布局在 `personal-home.js`，职业定位和阅读路径在 `portfolio-direction.js`，同步检查中英文。
- **兴趣与感想**：编辑 `personal-notes.js`；引文保留来源，个人感想与作品原文分别呈现。
- **发布**：将确认后的修改提交到本仓库 `main` 分支；在 GitHub Actions 中确认 Pages 部署完成，再检查公开网站。

Fraunces、思源宋体与 AlaSQL 的许可证保存在 `assets/` 中。简历及项目附件的公开展示不代表其中内容可自由再分发。

## Contact

[Email](mailto:wangbohan13@outlook.com) · [GitHub](https://github.com/starer1333) · [Website](https://starer1333.github.io/wangbohan/)

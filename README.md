# 王渤函 · Bohan Wang

**会计学 · 计算机科学 · AI 工作流**  
Accounting · Computer Science · AI Workflows

吉林大学会计学本科、计算机科学与技术辅修。这个作品集收录我的财务与审计实习、市场与消费者研究、实证研究，以及 AI 工具和产品开发项目。

**[访问作品集 / Visit portfolio](https://starer1333.github.io/wangbohan/)**

[中文版](https://starer1333.github.io/wangbohan/?lang=zh) · [English](https://starer1333.github.io/wangbohan/?lang=en) · [中文简历](https://starer1333.github.io/wangbohan/assets/Bohan-Wang-CV-CN.pdf) · [English CV](https://starer1333.github.io/wangbohan/assets/Bohan-Wang-CV-EN.pdf)

## 网站内容 / Content

- **实习经历 / Internships**：华林证券财务实习、天职国际函证中心实习，包含具体工作、工具与能力。
- **项目 / Projects**：首页呈现精选项目，可按市场、研究、财务、AI 与产品分类查看全部 12 项项目与实践。每项都有内容简介、能力关键词和详情页。
- **Why me?**：Finance、Research、Build 三部分在固定画面内随滚动切换，结合实习、问卷研究和 FinanceDoc AI 展示能力之间的联系。
- **计算机辅修与 SQL / Computer science and SQL**：展示编程、网络、数据分析、数据库及网站设计课程；SQL 小示例可以在浏览器中实际运行。
- **简历与联系 / CV and contact**：按界面语言提供中文或英文简历，并保留电话、邮箱与 GitHub 联系入口。

项目内页按原材料分别展开：论文直接阅读摘要；研究方案呈现研究问题与方法；调研、商业分析、内控和产品项目使用具体发现、比较表格、问卷图表与业务流程说明。原始报告、演示文稿、代码与在线演示入口直接可见，无需展开额外内容，文件旁显示格式与大小。

## 视觉与交互 / Design

白色为底，配合绿色、蓝色和紫色；英文标题采用 Fraunces，中文标题采用思源宋体。首页以账本、研究笔记和工具文件夹呈现三种实践。

交互使用原生滚动、文字变色和必要的悬停反馈。工具与能力通过字重和颜色强调；页面支持响应式布局、键盘焦点，以及减少动态效果设置。采用该设置时，滚动章节仍可切换，淡入动画关闭。

## 开发与部署 / Development

原生 **HTML / CSS / JavaScript**，无需安装依赖或执行构建。GitHub Pages 从本仓库 `main` 分支的根目录发布。

```text
index.html                  正式首页
research-preview.html       本地试稿的兼容入口
research-preview.css        页面与项目详情的基础样式
personal-home.css           首页视觉、能力强调与响应式样式
research-preview.js         语言切换、项目目录、详情及资料入口
personal-home.js            首页、滚动章节与 SQL 示例
research-data.js            12 项项目的中英文内容与附件映射
project-evidence.js         项目简介与能力关键词
project-stories.js          各项目的摘要、叙述、证据与表格
project-files.js            下载文件大小
internship-experience.js    中英文实习经历
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
- **项目详细内容**：编辑 `project-stories.js`，先核对相应原始报告，区分研究方案与已完成论文。
- **中文字体**：`assets/PortfolioSerifCN.woff2` 是按网站用字精简的字体。新增文案后，先用 `python -m pip install fonttools brotli` 安装字体工具，再运行 `python subset-portfolio-font.py` 重新生成，并保留原字体许可证与子集说明。
- **实习经历**：编辑 `internship-experience.js`。
- **首页文案**：编辑 `personal-home.js`，同步检查中英文。
- **发布**：将确认后的修改提交到本仓库 `main` 分支；在 GitHub Actions 中确认 Pages 部署完成，再检查公开网站。

Fraunces、思源宋体与 AlaSQL 的许可证保存在 `assets/` 中。简历及项目附件的公开展示不代表其中内容可自由再分发。

## Contact

[Email](mailto:wangbohan13@outlook.com) · [GitHub](https://github.com/starer1333) · [Website](https://starer1333.github.io/wangbohan/)

(() => {
 const materials = [
  [2,'会计师事务所审计供给能力对IPO企业应计盈余管理的影响研究.pdf','下载论文 · PDF','Download paper · PDF (Chinese)'],
  [2,'会计师事务所审计供给能力对IPO企业应计盈余管理的影响研究.do','下载 Stata 代码 · DO','Download Stata code · DO'],
  [3,'AGI引入对公司治理效果的影响研究.pdf','下载研究材料 · PDF','Download research · PDF (Chinese)'],
  [3,'论文答辩 .pdf','下载答辩展示 · PDF','Download presentation · PDF (Chinese)'],
  [4,'TRR论文.pdf','下载 TRR 论文 · PDF（英文）','Download TRR paper · PDF (English)'],
  [5,'大众汽车集团行业研究.pdf','下载行业研究 · PDF','Download industry report · PDF (Chinese)'],
  [6,'陕西文旅公司分析.pdf','下载公司分析 · PDF','Download company analysis · PDF (Chinese)'],
  [7,'好利来营销策划案.pdf','下载营销策划 · PDF','Download marketing plan · PDF (Chinese)'],
  [8,'OPPO策划案.pdf','下载市场策划 · PDF','Download market-entry plan · PDF (Chinese)'],
  [9,'百度健康行业研究框架与战略分析.pdf','下载战略分析 · PDF','Download strategy analysis · PDF (Chinese)'],
  [10,'长飞光纤 内部控制分析.pptx','下载内部控制分析 · PPTX','Download internal-control analysis · PPTX (Chinese)'],
 ];
 const tracks=[...document.querySelectorAll('[data-project]')];
 tracks.forEach(t=>t.querySelectorAll('.project-links a[href$="Research.pdf"]').forEach(a=>a.remove()));
 for(const [index,file,zh,en] of materials){
  const detail=tracks[index].querySelector('.project-detail');
  let links=detail.querySelector('.project-links');
  if(!links){links=document.createElement('div');links.className='project-links';detail.append(links);}
  const a=document.createElement('a');a.href='assets/projects/'+encodeURIComponent(file);a.download=file;a.textContent=zh+' ↓';a.dataset.downloadEn=en+' ↓';links.append(a);
 }
 // Keep resources available even while the project explanation is collapsed.
 tracks.forEach(track=>{
  const links=track.querySelector('.project-links');
  if(links?.children.length)track.insertBefore(links,track.querySelector('.details-toggle'));
 });
})();

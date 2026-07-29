window.FLIP = {
  title_cn: 'GREENLINE 发电机组产品目录册',
  title_en: 'GREENLINE POWER GENERATOR CATALOGUE',
  total: 31,
  images: Array.from({length:31},(_,i)=>'pages/full/p'+(i+1).toString().padStart(3,'0')+'.png'),
  thumbs: Array.from({length:31},(_,i)=>'pages/thumbs/p'+(i+1).toString().padStart(3,'0')+'.png'),
  toc: [
    {num:'01', cn:'企业简介', en:'Company Profile', items:[{cn:'封面 / 公司简介', en:'Cover & Profile', page:1}]},
    {num:'02', cn:'车间一览', en:'Workshop Overview', items:[{cn:'生产车间', en:'Production Workshop', page:5}]},
    {num:'03', cn:'产品类别', en:'Product Categories', items:[{cn:'柴油 / 燃气 / 甲醇机组', en:'Diesel / Gas / Methanol Gensets', page:7}]},
    {num:'04', cn:'技术优势', en:'Technical Advantages', items:[{cn:'产品亮点与优势', en:'Highlights & Advantages', page:9}]},
    {num:'05', cn:'技术参数', en:'Technical Parameters', items:[{cn:'康明斯系列', en:'Cummins Series', page:13},{cn:'东柴 / 凯普系列', en:'Dongchai / Kaipu Series', page:17}]},
    {num:'06', cn:'燃气机组', en:'Gas Generator Sets', items:[{cn:'潍柴 / 济柴燃气机组', en:'Weichai / Jichai Gas Sets', page:23}]},
    {num:'07', cn:'应用案例', en:'Application Cases', items:[{cn:'全球项目案例', en:'Global Project Cases', page:27}]},
    {num:'08', cn:'服务支持', en:'Service Support', items:[{cn:'选择博创的理由', en:'Why Choose Bocreat', page:29},{cn:'联系方式', en:'Contact', page:31}]}
  ]
};

// GREENLINE 目录册清单（选择界面 hub 的数据源）
// 新增一本目录册：复制下面 kithen 那一条，改字段即可，hub 会自动按 category 归类显示。
//   id       唯一标识
//   folder   该册翻书页所在子目录（相对 catalog/）
//   category 所属栏目（见 CATALOG_CATS）
//   title_cn / title_en  中英文标题
//   desc_cn / desc_en    中英文一句话简介
//   cover    封面图（相对 hub 的路径，通常用该册的 t000 缩略图）
//   pages    页数（仅展示用）
window.CATALOGS = [
  {
    id: 'kitchen',
    folder: 'kitchen',
    category: 'home',
    title_cn: '橱柜目录册',
    title_en: 'Kitchen Cabinet Catalogue',
    desc_cn: '整体橱柜 · 材质工艺 · 空间方案',
    desc_en: 'Kitchen cabinets · materials · layout solutions',
    cover: 'kitchen/pages/thumbs/t000.jpg',
    pages: 94
  }
  // 例：家居家装再添一本卫浴册
  // ,{
  //   id: 'bath',
  //   folder: 'bath',
  //   category: 'home',
  //   title_cn: '卫浴目录册',
  //   title_en: 'Bathroom Catalogue',
  //   desc_cn: '智能马桶 · 五金挂件 · 整体卫浴',
  //   desc_en: 'Smart toilets · fittings · bathroom sets',
  //   cover: 'bath/pages/thumbs/t000.jpg',
  //   pages: 60
  // }
];

// 栏目显示名（hub 标题用）
window.CATALOG_CATS = {
  home:     { cn: '家居家装', en: 'Home & Living' },
  gift:     { cn: '礼品文创', en: 'Gifts & Crafts' },
  machinery: { cn: '工业机械', en: 'Machinery' },
  hardware:  { cn: '五金制品', en: 'Hardware' },
  hotel:    { cn: '酒店用品', en: 'Hotel Supplies' },
  project:  { cn: '工程配套', en: 'Project Supplies' },
  custom:   { cn: '定制加工', en: 'Custom Manufacturing' }
};

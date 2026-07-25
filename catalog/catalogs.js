// GREENLINE 目录册清单（选择界面 hub 的数据源）
// 新增一本目录册：复制下面任意一条，改字段即可，hub 会自动按 category 归类显示。
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
  },
  {
    id: 'tv',
    folder: 'tv',
    category: 'home',
    title_cn: '电视柜目录册',
    title_en: 'TV Cabinet Catalogue',
    desc_cn: '电视柜 · 酒柜 · 背景墙系列',
    desc_en: 'TV cabinets · wine cabinets · backgrounds',
    cover: 'tv/pages/thumbs/t000.jpg',
    pages: 114
  },
  {
    id: 'wardrobe',
    folder: 'wardrobe',
    category: 'home',
    title_cn: '衣柜目录册',
    title_en: 'Wardrobe Catalogue',
    desc_cn: '掩门 · 步入式衣帽间 · 移门系列',
    desc_en: 'Hinged · walk-in · sliding door wardrobes',
    cover: 'wardrobe/pages/thumbs/t000.jpg',
    pages: 120
  },
  {
    id: 'shower',
    folder: 'shower',
    category: 'hardware',
    title_cn: '花洒产品册',
    title_en: 'Shower Catalogue',
    desc_cn: '全系列花洒 · 淋浴系统',
    desc_en: 'Full-range showers · shower systems',
    cover: 'shower/pages/thumbs/t000.jpg',
    pages: 174
  },
  {
    id: 'shower-ys',
    folder: 'shower-ys',
    category: 'hardware',
    title_cn: 'YS SERIES 龙头册',
    title_en: 'YS Series Faucet Catalogue',
    desc_cn: 'YS 系列龙头 · 厨房 / 面盆 / 净水',
    desc_en: 'YS series faucets · kitchen / basin / purifier',
    cover: 'shower-ys/pages/thumbs/t000.jpg',
    pages: 22
  }
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

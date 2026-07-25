// GREENLINE 目录册清单（选择界面 hub 的数据源）
// 新增一本目录册：复制下面任意一条，改字段即可，hub 会自动按 category 归类显示。
//   id          唯一标识
//   folder      该册翻书页所在子目录（相对 catalog/）
//   category    所属栏目（见 CATALOG_CATS）
//   title_cn / title_en  中英文标题
//   desc_cn / desc_en    中英文一句话简介
//   cover_cn / cover_en  中英文封面（hub 会根据当前语言自动切换）
//   pages       页数（仅展示用）
window.CATALOGS = [
  {
    id: 'kitchen',
    folder: 'kitchen',
    category: 'home',
    title_cn: '橱柜目录册',
    title_en: 'Kitchen Cabinet Catalogue',
    desc_cn: '整体橱柜 · 材质工艺 · 空间方案',
    desc_en: 'Kitchen cabinets · materials · layout solutions',
    cover_cn: 'kitchen/cover_cn.png',
    cover_en: 'kitchen/cover_en.png',
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
    cover_cn: 'tv/cover_cn.png',
    cover_en: 'tv/cover_en.png',
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
    cover_cn: 'wardrobe/cover_cn.png',
    cover_en: 'wardrobe/cover_en.png',
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
    cover_cn: 'shower/cover_cn.png',
    cover_en: 'shower/cover_en.png',
    pages: 174
  },
  {
    id: 'lighting',
    folder: 'lighting',
    category: 'lighting',
    title_cn: 'MSA 系列灯具册',
    title_en: 'MSA Series Lighting Catalogue',
    desc_cn: '现代水晶 · 线性 LED · 壁灯 · 工业风吊灯',
    desc_en: 'Modern crystal · linear LED · wall lamps · industrial pendants',
    cover_cn: 'lighting/cover_cn.png',
    cover_en: 'lighting/cover_en.png',
    pages: 33
  },
  {
    id: 'louver',
    folder: 'louver',
    category: 'doors',
    title_cn: '门窗百叶铝框册',
    title_en: 'Aluminium Louver Window & Door Catalogue',
    desc_cn: '6"/4" 铝合金 / 铝塑 / 铁制百叶窗框',
    desc_en: '6"/4" aluminum, aluminum-plastic & iron louver frames',
    cover_cn: 'louver/cover_cn.png',
    cover_en: 'louver/cover_en.png',
    pages: 12
  },
  {
    id: 'wallpanel',
    folder: 'wallpanel',
    category: 'decor',
    title_cn: '3D 墙板目录册',
    title_en: '3D Wall Panel Catalogue',
    desc_cn: '泽景系列 · 3D 立体墙板 · PVC 装饰板',
    desc_en: 'ZE JIN series · 3D wall panels · PVC decorative panels',
    cover_cn: 'wallpanel/cover_cn.png',
    cover_en: 'wallpanel/cover_en.png',
    pages: 27
  },
  {
    id: 'sanitary',
    folder: 'sanitary',
    category: 'home',
    title_cn: '浴室柜目录册',
    title_en: 'Bathroom Vanity Catalogue',
    desc_cn: '本润浴室柜 · 铝整板焊接烤漆 · 畅销款 / 经济款',
    desc_en: 'Benrun bathroom vanities · aluminum welded & painted · best sellers / budget',
    cover_cn: 'sanitary/cover_cn.png',
    cover_en: 'sanitary/cover_en.png',
    pages: 256
  }
];

// 栏目显示名（hub 标题用）
window.CATALOG_CATS = {
  home:     { cn: '家居家装', en: 'Home & Living' },
  gift:     { cn: '礼品文创', en: 'Gifts & Crafts' },
  machinery: { cn: '工业机械', en: 'Machinery' },
  hardware:  { cn: '五金制品', en: 'Hardware' },
  lighting:  { cn: '灯饰照明', en: 'Lighting' },
  doors:     { cn: '门窗建材', en: 'Windows & Doors' },
  decor:     { cn: '墙面装饰', en: 'Wall Decor' },
  hotel:    { cn: '酒店用品', en: 'Hotel Supplies' },
  project:  { cn: '工程配套', en: 'Project Supplies' },
  custom:   { cn: '定制加工', en: 'Custom Manufacturing' }
};

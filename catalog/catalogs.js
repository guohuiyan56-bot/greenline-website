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
    category: 'home',
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
    category: 'home',
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
    category: 'home',
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
  },
  {
    id: 'gift',
    folder: 'gift',
    category: 'gift',
    title_cn: '礼品定制手册',
    title_en: 'Custom Gift Handbook',
    desc_cn: '徽章 · 奖杯 · 纪念币 · 文创礼品 · 企业定制',
    desc_en: 'Badges · trophies · medals · creative gifts · corporate customization',
    cover_cn: 'gift/cover_cn.png',
    cover_en: 'gift/cover_en.png',
    pages: 4
  },
  {
    id: 'rack',
    folder: 'rack',
    category: 'shelves',
    title_cn: '仓储货架目录册',
    title_en: 'Warehouse Rack Catalogue',
    desc_cn: '龙昌系列 · 轻型货架 · 仓储设计案例 · 阁楼平台',
    desc_en: 'Long Chang series · light-duty shelving · warehouse cases · mezzanines',
    cover_cn: 'rack/cover_cn.png',
    cover_en: 'rack/cover_en.png',
    pages: 27
  },
  {
    id: 'shelf',
    folder: 'shelf',
    category: 'shelves',
    title_cn: '商超货架目录册',
    title_en: 'GREENLINE Catalogue',
    desc_cn: '本润 Benrun · 商超货架 · 仓储货架 · 场景方案',
    desc_en: 'Benrun · supermarket shelves · warehouse racks · store solutions',
    cover_cn: 'shelf/cover_cn.png',
    cover_en: 'shelf/cover_en.png',
    pages: 54
  },
  {
    id: 'lampcloth',
    folder: 'lampcloth',
    category: 'custom',
    title_cn: '广告灯布车贴彩页',
    title_en: 'Advertising Banner & Vehicle Wrap Catalogue',
    desc_cn: '喷绘灯布 · 背喷灯布 · 灯箱车身贴 · PP 写真纸',
    desc_en: 'Flex banner · backlit banner · light box & vehicle wrap · PP banner',
    cover_cn: 'lampcloth/cover_cn.png',
    cover_en: 'lampcloth/cover_en.png',
    pages: 48
  },
  {
    id: 'display',
    folder: 'display',
    category: 'display',
    title_cn: '展示器材目录册',
    title_en: 'Display & Signage Catalogue',
    desc_cn: '海报架 · 易拉宝 · X 展架 · 沙滩旗 · 促销台 · 拉网展架 · 抽奖转盘',
    desc_en: 'Poster stands · roll up banners · X banner stands · beach flags · promotion tables · pop-up displays · prize wheels',
    cover_cn: 'display/cover_cn.png',
    cover_en: 'display/cover_en.png',
    pages: 41
  },
  {
    id: 'lianteng',
    folder: 'lianteng',
    category: 'machinery',
    title_cn: '包装机械目录册',
    title_en: 'Packaging Machinery Catalogue',
    desc_cn: '灌装 · 旋盖 · 贴标 · 封口 · 真空包装 · 封箱 · 打码 · 分装 · 枕式包装',
    desc_en: 'Filling · capping · labeling · sealing · vacuum packing · carton sealing · coding · dosing · pillow packaging',
    cover_cn: 'lianteng/cover_cn.png',
    cover_en: 'lianteng/cover_en.png',
    pages: 74
  }
];

// 栏目显示名（hub 标题用）
window.CATALOG_CATS = {
  home:     { cn: '家居家装', en: 'Home & Living' },
  gift:     { cn: '礼品文创', en: 'Gifts & Crafts' },
  machinery: { cn: '工业机械', en: 'Machinery' },
  hardware:  { cn: '五金制品', en: 'Hardware' },
  decor:     { cn: '墙面装饰', en: 'Wall Decor' },
  display:   { cn: '展示器材', en: 'Display & Signage' },
  shelves:   { cn: '货架展示', en: 'Shelving & Display' },
  hotel:    { cn: '酒店餐饮', en: 'Hotel & Restaurant' },
  project:  { cn: '工程配套', en: 'Project Supplies' },
  custom:   { cn: '定制加工', en: 'Custom Manufacturing' }
};

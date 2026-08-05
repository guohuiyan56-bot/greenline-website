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
    cover_cn: 'kitchen/cover_cn.webp',
    cover_en: 'kitchen/cover_en.webp',
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
    cover_cn: 'tv/cover_cn.webp',
    cover_en: 'tv/cover_en.webp',
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
    cover_cn: 'wardrobe/cover_cn.webp',
    cover_en: 'wardrobe/cover_en.webp',
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
    cover_cn: 'shower/cover_cn.webp',
    cover_en: 'shower/cover_en.webp',
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
    cover_cn: 'lighting/cover_cn.webp',
    cover_en: 'lighting/cover_en.webp',
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
    cover_cn: 'louver/cover_cn.webp',
    cover_en: 'louver/cover_en.webp',
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
    cover_cn: 'wallpanel/cover_cn.webp',
    cover_en: 'wallpanel/cover_en.webp',
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
    cover_cn: 'sanitary/cover_cn.webp',
    cover_en: 'sanitary/cover_en.webp',
    pages: 256
  },
  {
    id: 'rack',
    folder: 'rack',
    category: 'shelves',
    title_cn: '仓储货架目录册',
    title_en: 'Warehouse Rack Catalogue',
    desc_cn: '龙昌系列 · 轻型货架 · 仓储设计案例 · 阁楼平台',
    desc_en: 'Long Chang series · light-duty shelving · warehouse cases · mezzanines',
    cover_cn: 'rack/cover_cn.webp',
    cover_en: 'rack/cover_en.webp',
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
    cover_cn: 'shelf/cover_cn.webp',
    cover_en: 'shelf/cover_en.webp',
    pages: 53
  },
  {
    id: 'lampcloth',
    folder: 'lampcloth',
    category: 'custom',
    title_cn: '广告灯布车贴彩页',
    title_en: 'Advertising Banner & Vehicle Wrap Catalogue',
    desc_cn: '喷绘灯布 · 背喷灯布 · 灯箱车身贴 · PP 写真纸',
    desc_en: 'Flex banner · backlit banner · light box & vehicle wrap · PP banner',
    cover_cn: 'lampcloth/cover_cn.webp',
    cover_en: 'lampcloth/cover_en.webp',
    pages: 48
  },
  {
    id: 'lianteng',
    folder: 'lianteng',
    category: 'machinery',
    title_cn: '包装机械目录册',
    title_en: 'Packaging Machinery Catalogue',
    desc_cn: '灌装 · 旋盖 · 贴标 · 封口 · 真空包装 · 封箱 · 打码 · 分装 · 枕式包装',
    desc_en: 'Filling · capping · labeling · sealing · vacuum packing · carton sealing · coding · dosing · pillow packaging',
    cover_cn: 'lianteng/cover_cn.webp',
    cover_en: 'lianteng/cover_en.webp',
    pages: 68
  },
  {
    id: 'napkin',
    folder: 'napkin',
    category: 'hotel',
    title_cn: '全棉餐巾目录册',
    title_en: 'Cotton Napkin Catalogue',
    desc_cn: '全棉餐巾 · 独花印花 · 坯布系列 · 酒店餐饮布草',
    desc_en: 'Cotton napkins · printed designs · plain cloth series · hotel & restaurant linen',
    cover_cn: 'napkin/cover_cn.webp',
    cover_en: 'napkin/cover_en.webp',
    pages: 96
  },
  {
    id: 'consumable',
    folder: 'consumable',
    category: 'hotel',
    title_cn: '客房易耗品目录册',
    title_en: 'Guest Room Consumables Catalogue',
    desc_cn: '客房洗护 · 一次性用品 · 纸品袋类 · 酒店杂件',
    desc_en: 'Guest toiletries · disposables · paper & bags · room accessories',
    cover_cn: 'consumable/cover_cn.webp',
    cover_en: 'consumable/cover_en.webp',
    pages: 25
  },
  {
    id: 'hoteltextile',
    folder: 'hoteltextile',
    category: 'hotel',
    title_cn: '酒店纺织品目录册',
    title_en: 'Hotel Textile Catalogue',
    desc_cn: '床品系列 · 毛巾浴袍 · 餐饮布草 · 窗帘软装',
    desc_en: 'Bedding · towels & bathrobes · restaurant linen · curtains & soft décor',
    cover_cn: 'hoteltextile/cover_cn.webp',
    cover_en: 'hoteltextile/cover_en.webp',
    pages: 44
  },
  {
    id: 'bbq',
    folder: 'bbq',
    category: 'home',
    title_cn: 'BBQ 烧烤与户外厨房册',
    title_en: 'BBQ Grill & Outdoor Kitchen',
    desc_cn: '烧烤炉 · 户外厨房系统 · 烧烤配件',
    desc_en: 'BBQ grills · outdoor kitchen systems · BBQ accessories',
    cover_cn: 'bbq/cover_cn.webp',
    cover_en: 'bbq/cover_en.webp',
    pages: 38
  },
  {
    id: 'tablechair',
    folder: 'tablechair',
    category: 'home',
    title_cn: '餐饮家具目录册',
    title_en: 'Table & Chair Furniture',
    desc_cn: '卡座沙发 · 餐桌椅组合 · 休闲沙发 · 吧椅吧桌',
    desc_en: 'Booth sofas · table & chair sets · lounge sofas · bar stools & tables',
    cover_cn: 'tablechair/cover_cn.webp',
    cover_en: 'tablechair/cover_en.webp',
    pages: 70
  },
  {
    id: 'hotelother',
    folder: 'hotelother',
    category: 'hotel',
    title_cn: '酒店其它系列画册',
    title_en: 'Hotel Other Series Catalogue',
    desc_cn: '指示牌 · 栏杆座 · 行李车 · 服务车 · 衣帽架 · 客房清洁用品',
    desc_en: 'Sign stands · railing posts · luggage carts · service carts · coat racks · room & cleaning supplies',
    cover_cn: 'hotelother/cover_cn.webp',
    cover_en: 'hotelother/cover_en.webp',
    pages: 176
  },
  {
    id: 'hoteldisposable',
    folder: 'hoteldisposable',
    category: 'hotel',
    title_cn: '客房一次性用品目录册',
    title_en: 'Guest Room Disposables Catalogue',
    desc_cn: '洗漱套装 · 护理用品 · 纸品杯垫 · 拖鞋鞋擦 · 客房杂件',
    desc_en: 'Toiletries sets · care products · paper & coasters · slippers & shoe mitts · room accessories',
    cover_cn: 'hoteldisposable/cover_cn.webp',
    cover_en: 'hoteldisposable/cover_en.webp',
    pages: 114
  },
  {
    id: 'floral',
    folder: 'floral',
    category: 'home',
    title_cn: '景观花艺图册',
    title_en: 'Landscape Floral Art Catalogue',
    desc_cn: '仿真树 · 迎客松 · 玻璃钢树 · 流水景观 · 花墙定制 · 陶罐花艺',
    desc_en: 'Artificial trees · welcome pines · FRP trees · water features · flower walls · ceramic vases',
    cover_cn: 'floral/cover_cn.webp',
    cover_en: 'floral/cover_en.webp',
    pages: 55
  },
  {
    id: 'machinery',
    folder: 'machinery',
    category: 'machinery',
    title_cn: '制砖机产品目录册',
    title_en: 'Brick Machine Catalogue',
    desc_cn: 'GREENLINE 制砖机械产品目录册，展示砖机设备与技术方案。',
    desc_en: 'GREENLINE brick making machinery catalogue.',
    cover_cn: 'machinery/cover_cn.webp',
    cover_en: 'machinery/cover_en.webp',
    pages: 33
  },
  {
    id: 'boshan',
    folder: 'boshan',
    category: 'machinery',
    title_cn: 'GREENLINE 发电机组产品目录册',
    title_en: 'GREENLINE Power Generator Catalogue',
    desc_cn: 'GREENLINE 发电机组产品目录册，涵盖柴油、燃气、甲醇机组及应用方案。',
    desc_en: 'GREENLINE power generator catalogue covering diesel, gas and methanol gensets.',
    cover_cn: 'boshan/cover_cn.webp',
    cover_en: 'boshan/cover_en.webp',
    pages: 30
  },
  {
    id: 'aussieswitch',
    folder: 'aussieswitch',
    category: 'lighting',
    title_cn: 'GREENLINE 澳标开关目录册',
    title_en: 'GREENLINE Australian Standard Switches Catalogue',
    desc_cn: 'GREENLINE 澳标开关插座产品目录册。',
    desc_en: 'GREENLINE Australian standard switches & sockets catalogue.',
    cover_cn: 'aussieswitch/cover_cn.webp',
    cover_en: 'aussieswitch/cover_en.webp',
    pages: 12
  },
  {
    id: 'autoparts',
    folder: 'autoparts',
    category: 'hardware',
    title_cn: 'GREENLINE 汽车配件目录册',
    title_en: 'GREENLINE Auto Parts Catalogue',
    desc_cn: 'GREENLINE 汽车配件产品目录册。',
    desc_en: 'GREENLINE auto parts catalogue.',
    cover_cn: 'autoparts/cover_cn.webp',
    cover_en: 'autoparts/cover_en.webp',
    pages: 134
  },
  {
    id: 'hotelleather',
    folder: 'hotelleather',
    category: 'hotel',
    title_cn: 'GREENLINE 客房皮具目录册',
    title_en: 'GREENLINE Hotel Leather Goods Catalogue',
    desc_cn: 'GREENLINE 客房皮具产品目录册。',
    desc_en: 'GREENLINE hotel leather goods catalogue.',
    cover_cn: 'hotelleather/cover_cn.webp',
    cover_en: 'hotelleather/cover_en.webp',
    pages: 30
  },
  {
    id: 'packaging',
    folder: 'packaging',
    category: 'machinery',
    title_cn: 'GREENLINE 食品包装目录册',
    title_en: 'GREENLINE Food Packaging Catalogue',
    desc_cn: 'GREENLINE 食品包装产品目录册。',
    desc_en: 'GREENLINE food packaging catalogue.',
    cover_cn: 'packaging/cover_cn.webp',
    cover_en: 'packaging/cover_en.webp',
    pages: 24
  },
  {
    id: 'knifeset',
    folder: 'knifeset',
    category: 'home',
    title_cn: 'GREENLINE 刀具套装目录册',
    title_en: 'GREENLINE Knife Sets Catalogue',
    desc_cn: 'GREENLINE 刀具套装产品目录册（KET 系列）。',
    desc_en: 'GREENLINE knife sets catalogue (KET series).',
    cover_cn: 'knifeset/cover_cn.webp',
    cover_en: 'knifeset/cover_en.webp',
    pages: 48
  },
  {
    id: 'qingyang',
    folder: 'qingyang',
    category: 'home',
    title_cn: 'GREENLINE QY系列厨具目录册',
    title_en: 'GREENLINE QY Kitchenware Catalogue',
    desc_cn: 'GREENLINE QY系列厨房用品目录册。',
    desc_en: 'GREENLINE QY kitchenware catalogue.',
    cover_cn: 'qingyang/cover_cn.webp',
    cover_en: 'qingyang/cover_en.webp',
    pages: 196
  },
  {
    id: 'buffetwarmer',
    folder: 'buffetwarmer',
    category: 'hotel',
    title_cn: 'GREENLINE 自助餐炉目录册',
    title_en: 'GREENLINE Buffet Warmer Catalogue',
    desc_cn: 'GREENLINE 英峰系列自助餐炉目录册。',
    desc_en: 'GREENLINE Yingfeng buffet warmer catalogue.',
    cover_cn: 'buffetwarmer/cover_cn.webp',
    cover_en: 'buffetwarmer/cover_en.webp',
    pages: 45
  },
  {
    id: 'hotelplates',
    folder: 'hotelplates',
    category: 'hotel',
    title_cn: 'GREENLINE 酒店餐具目录册',
    title_en: 'GREENLINE Hotel Tableware Catalogue',
    desc_cn: 'GREENLINE 酒店餐厅盘 / 杯 / 刀叉目录册。',
    desc_en: 'GREENLINE hotel plates, glasses & cutlery catalogue.',
    cover_cn: 'hotelplates/cover_cn.webp',
    cover_en: 'hotelplates/cover_en.webp',
    pages: 124
  },
  {
    id: 'displayqx',
    folder: 'displayqx',
    category: 'display',
    title_cn: 'GREENLINE 展示器材 QX 目录册',
    title_en: 'GREENLINE Display QX Catalogue',
    desc_cn: 'GREENLINE 展示器材 QX 产品目录册（易拉宝 / X展架 / 海报架）。',
    desc_en: 'GREENLINE display QX catalogue (roll-up / X banner / poster stands).',
    cover_cn: 'displayqx/cover_cn.webp',
    cover_en: 'displayqx/cover_en.webp',
    pages: 21
  },
  {
    id: 'display',
    folder: 'display',
    category: 'display',
    title_cn: '展示器材目录册',
    title_en: 'Display & Signage Catalogue',
    desc_cn: '展示器材产品目录册（易拉宝 / X展架 / 海报架）。',
    desc_en: 'Display & signage catalogue (roll-up / X banner / poster stands).',
    cover_cn: 'display/cover_cn.webp',
    cover_en: 'display/cover_en.webp',
    pages: 21
  },
  {
    id: 'tiles',
    folder: 'tiles',
    category: 'decor',
    title_cn: 'GREENLINE 瓷砖产品目录册',
    title_en: 'GREENLINE Tile Catalogue',
    desc_cn: '瓷砖 · 岩板 · 墙地铺贴方案',
    desc_en: 'Ceramic tiles · slabs · wall & floor tiling',
    cover_cn: 'tiles/cover_cn.webp',
    cover_en: 'tiles/cover_en.webp',
    pages: 140
  }
];

// 栏目显示名（hub 标题用）
window.CATALOG_CATS = {
  decor:     { cn: '墙面装饰', en: 'Wall Decor' },
  hotel:    { cn: '酒店餐饮', en: 'Hotel & Restaurant' },
  project:  { cn: '工程配套', en: 'Project Supplies' }
};

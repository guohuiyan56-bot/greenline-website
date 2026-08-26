/* ============================================================
   GREENLINE — DATA
   所有文字、产品、公司信息在这里改
   ============================================================ */

var GT_DATA = {

  /* ---- 公司 ---- */
  company: {
    name_cn: "GREENLINE 国际贸易",
    name_en: "GREENLINE International Trading",
    slogan_cn: "一站式全球采购与供应链服务",
    slogan_en: "One-Stop Global Sourcing & Supply Chain",
    email: "info@greenlineint.com",
    phone: "+86 136-3224-2800",
    whatsapp: "+86 136-3224-2800",
    wechat: "Victoria Guo  A13632242800",
    address_cn: "广州市越秀区环市中路316号金鹰大厦7楼711",
    address_en: "Room 711, 7F, Golden Eagle Building, 316 Huanshi Middle Rd, Yuexiu, Guangzhou, China",
    year: 2015
  },

  /* ---- 导航 ---- */
  nav: [
    { id: "home",        cn: "首页",     en: "Home" },
    { id: "products",    cn: "产品中心",  en: "Products" },
    { id: "about",       cn: "关于我们",  en: "About" },
    { id: "service",     cn: "服务优势",  en: "Services" },
    { id: "testimonials",cn: "客户评价",  en: "Reviews" },
    { id: "contact",     cn: "联系我们",  en: "Contact" }
  ],

  /* ---- Hero ---- */
  hero: {
    badge_cn: "全球信赖 · 专业外贸服务",
    badge_en: "Trusted Globally · Professional Trading",
    title_cn: "连接全球优质供应链\n<em>一站式</em>国际贸易解决方案",
    title_en: "Connect to the World's Best\n<em>One-Stop</em> Trade Solutions",
    desc_cn: "GREENLINE，专注家具、卫浴及家居建材品类出口，从选品到交付全程护航。",
    desc_en: "GREENLINE specializes in furniture, sanitary ware & building materials — full support from sourcing to delivery.",
    cta_cn: "查看产品",
    cta_en: "View Products",
    contact_cn: "联系我们",
    contact_en: "Contact Us",
    scroll_cn: "向下探索",
    scroll_en: "Scroll to Explore",
    stats: [
      { value: "30+",  label_cn: "覆盖国家",   label_en: "Countries" },
      { value: "500+", label_cn: "合作工厂",   label_en: "Partner Factories" },
      { value: "3,000+", label_cn: "产品品类",  label_en: "Product Types" }
    ]
  },

  /* ---- 数据统计 ---- */
  stats: [
    { value: "11",     suffix: "+", label_cn: "年外贸经验",  label_en: "Years Experience" },
    { value: "500",    suffix: "+", label_cn: "合作工厂",    label_en: "Partner Factories" },
    { value: "3",      suffix: "K+",label_cn: "产品品类",   label_en: "Product Types" },
    { value: "200",    suffix: "+", label_cn: "服务客户",    label_en: "Clients Served" }
  ],

  /* ---- 产品分类 ----
     与 catalog/catalogs.js 的 CATALOG_CATS 保持一致，
     确保主站分类名、目录册 hub 栏目名一一对应。 ---- */
  categories: [
    { id: "furniture",  name_cn: "家具",       name_en: "Furniture",            icon: "🪑" },
    { id: "bathroom",   name_cn: "卫浴",       name_en: "Bathroom",             icon: "🚿" },
    { id: "door",       name_cn: "门窗",       name_en: "Doors & Windows",     icon: "🚪" },
    { id: "chair",      name_cn: "座椅",       name_en: "Chairs",               icon: "💺" },
    { id: "hotel",      name_cn: "酒店用品",   name_en: "Hotel Supplies",       icon: "🏨" },
    { id: "decor",      name_cn: "墙饰建材",   name_en: "Wall Decor & Building", icon: "🧱" },
    { id: "outdoor",    name_cn: "厨具户外",   name_en: "Kitchen & Outdoor",    icon: "🍳" }
  ],

  /* ---- 产品列表 (100) ---- */
  products: [
    /* ===== 家具 (3) ===== */
    { id:"p01", category:"furniture", name_cn:"民用家具",       name_en:"Residential Furniture",   desc_cn:"实木、板式、软体家具，支持尺寸与款式定制",                   desc_en:"Solid wood, panel & upholstered furniture, custom size & style",     image:"images/p01.jpg" },
    { id:"p07", category:"furniture", name_cn:"厨房家具",       name_en:"Kitchen Furniture",        desc_cn:"整体橱柜、厨房岛台、餐边柜，支持尺寸与款式定制",                         desc_en:"Integrated kitchen cabinets, kitchen islands & sideboards, custom size & style",     image:"images/kitchen-furniture.png" },
    { id:"p14", category:"outdoor",   name_cn:"户外躺椅",       name_en:"Outdoor Sun Lounger",    desc_cn:"泳池边及海滩度假躺椅，铝合金骨架，防水防UV",                               desc_en:"Poolside & beach sun loungers, aluminium frame, waterproof & UV-resistant",         image:"images/outdoor-lounger.png" },
    /* ===== 卫浴 (2) ===== */
    { id:"p08", category:"bathroom", name_cn:"智能马桶",       name_en:"Smart Toilet",            desc_cn:"全自动智能马桶，加热、冲洗、烘干一体",                       desc_en:"Full-auto smart toilet with heated seat, wash & dry functions",     image:"images/p08.jpg" },
    { id:"p12", category:"bathroom", name_cn:"浴室五金挂件",   name_en:"Bathroom Hardware",       desc_cn:"毛巾架、置物架、纸巾盒、浴室挂钩全套",                       desc_en:"Towel racks, shelves, tissue boxes, bathroom hooks set",           image:"images/p12.jpg" },
    /* ===== 门窗 (2) ===== */
    { id:"p02", category:"door",  name_cn:"铝合金门窗",      name_en:"Aluminium Windows & Doors", desc_cn:"断桥铝门窗、百叶窗，隔音隔热可定制",                       desc_en:"Thermal-break aluminium windows, doors & louvers, custom",         image:"images/aluminium-window-new.png" },
    { id:"p03", category:"door",  name_cn:"铸铝门",          name_en:"Cast Aluminum Door",        desc_cn:"精雕铸铝庭院门、入户门，防锈耐候",                           desc_en:"Engraved cast aluminum entry & garden doors, weatherproof",        image:"images/cast-aluminum-door.png" },
    /* ===== 座椅 (2) ===== */
    { id:"p04", category:"chair", name_cn:"办公椅",          name_en:"Office Chair",              desc_cn:"人体工学办公椅、会议椅，多款式可选",                         desc_en:"Ergonomic office & conference chairs, multiple styles",            image:"images/office-chair.png" },
    { id:"p05", category:"decor", name_cn:"WPC 墙板",          name_en:"WPC Wall Cladding",              desc_cn:"WPC 木塑复合墙板，防水防霉，卫生间与户外通用",                         desc_en:"WPC wood-plastic composite wall panels, waterproof & mold-resistant for bath & outdoor",            image:"images/wall-panel.png" },
    /* ===== 酒店用品 (2) ===== */
    { id:"p06", category:"hotel", name_cn:"酒店纺织品",      name_en:"Hotel Textiles",            desc_cn:"全棉布草、餐巾、浴巾，星级酒店标配",                         desc_en:"Cotton linens, towels & napkins for star hotels",                  image:"images/hotel-textiles.png" },
    { id:"p09", category:"hotel", name_cn:"客房易耗品",      name_en:"Guest-room Consumables",    desc_cn:"一次性用品、洗护用品，客房全套补给",                           desc_en:"Disposable & amenity supplies for guest rooms",                    image:"images/hotel-amenities.jpg" },
    /* ===== 墙饰建材 (2) ===== */
    { id:"p10", category:"decor", name_cn:"3D 墙板",         name_en:"3D Wall Panel",             desc_cn:"GREENLINE 3D 装饰墙板，环保快装",                             desc_en:"GREENLINE 3D decorative wall panels, eco & easy-install",          image:"images/wall-panel-3d.png" },
    { id:"p11", category:"decor", name_cn:"景观花艺建材",    name_en:"Landscape & Building",      desc_cn:"景观花艺、装饰建材，工程配套",                               desc_en:"Landscape floral & decorative building materials",                image:"images/landscape-building.png" },
    { id:"p16", category:"decor", name_cn:"地砖墙砖",        name_en:"Floor & Wall Tiles",        desc_cn:"釉面砖、岩板、大理石瓷砖，多规格可选",                          desc_en:"Glazed tiles, porcelain slabs & marble-look tiles, multiple sizes",                image:"images/floor-wall-tiles.png" },
    /* ===== 厨具户外 (2) ===== */
    { id:"p13", category:"outdoor", name_cn:"户外家具",       name_en:"Outdoor Furniture",         desc_cn:"藤编、铝合金户外桌椅，防水防UV",                               desc_en:"Rattan & aluminium outdoor sets, waterproof UV-resistant",        image:"images/outdoor-furniture.jpg" },
    { id:"p15", category:"outdoor", name_cn:"厨柜户外厨房",   name_en:"Kitchen & Outdoor",         desc_cn:"整体厨柜、BBQ 户外厨房定制",                                  desc_en:"Kitchen cabinets & BBQ outdoor kitchen, custom",                  image:"images/kitchen-outdoor.png" }
  ],

  /* ---- 关于 ---- */
  about: {
    label_cn: "关于我们",
    label_en: "About Us",
    badge_val: "11+",
    badge_lbl_cn: "年外贸深耕",
    badge_lbl_en: "Years Excellence",
    heading_cn: "值得信赖的\n国际贸易伙伴",
    heading_en: "Your Trusted\nGlobal Trade Partner",
    p1_cn: "GREENLINE 国际贸易成立于 2015 年，总部位于中国广州。11 年来我们专注于连接全球优质制造商与国际买家，提供从选品、验厂、质检到物流的一站式外贸服务。",
    p1_en: "Founded in 2015 and headquartered in Guangzhou, China, GREENLINE International Trading has spent over a decade connecting premium manufacturers with international buyers, offering end-to-end services from sourcing and factory auditing to quality inspection and logistics.",
    p2_cn: "我们的供应链网络覆盖 30 多个国家和地区，与超过 500 家经过严格审核的工厂建立了长期合作关系，确保每一笔订单的品质与时效。",
    p2_en: "Our supply network spans 30+ countries with 500+ rigorously audited factories, guaranteeing quality and on-time delivery for every order.",
    cta_cn: "了解更多",
    cta_en: "Learn More",
    checks: [
      { cn: "ISO 9001 质量管理体系", en: "ISO 9001 Certified" },
      { cn: "SGS / BV 第三方验货",   en: "SGS / BV Inspection" },
      { cn: "全程可视化跟单",        en: "Live Order Tracking" },
      { cn: "多语言专属客服",        en: "Multilingual Support" }
    ],
    image: "images/business-handshake.jpg"
  },

  /* ---- 服务 ---- */
  services: {
    title_cn: "为什么选择我们",
    title_en: "Why Choose Us",
    subtitle_cn: "从寻源到交付，我们为每一笔订单保驾护航",
    subtitle_en: "From sourcing to delivery, we've got every order covered",
    label_cn: "核心优势",
    label_en: "Core Advantages",
    items: [
      { icon:"🔍",  title_cn:"精准寻源",     title_en:"Precision Sourcing",    desc_cn:"深入产业带，48 小时内精准匹配 3-5 家优质供应商", desc_en:"Deep industry sourcing, 3-5 premium suppliers within 48 hours" },
      { icon:"🏭",  title_cn:"严选工厂",     title_en:"Factory Auditing",     desc_cn:"实地验厂+资质审查，确保供应商符合国际标准", desc_en:"On-site audits & qualification checks to meet international standards" },
      { icon:"🔬",  title_cn:"品质管控",     title_en:"Quality Control",      desc_cn:"SGS/BV/Intertek 第三方检测，AQL 抽检标准", desc_en:"Third-party inspection by SGS/BV/Intertek, AQL sampling" },
      { icon:"🚢",  title_cn:"全球物流",     title_en:"Global Logistics",     desc_cn:"海运/空运/铁路多式联运，DDP 门到门服务", desc_en:"Sea/air/rail multimodal, DDP door-to-door delivery" },
      { icon:"💰",  title_cn:"金融支持",     title_en:"Trade Finance",        desc_cn:"信用证、TT、OA 多种结算方式，信用保险保障", desc_en:"L/C, T/T, O/A payment terms with credit insurance" },
      { icon:"🎯",  title_cn:"定制开发",     title_en:"Custom Development",   desc_cn:"OEM/ODM 深度定制，从设计到量产全程协同", desc_en:"Deep OEM/ODM customization from design to mass production" }
    ]
  },

  /* ---- 流程 ---- */
  process: {
    label_cn: "合作流程",
    label_en: "Our Process",
    title_cn: "简单五步，轻松采购",
    title_en: "5 Simple Steps to Source",
    subtitle_cn: "从需求沟通到货物交付，全程透明可控",
    subtitle_en: "From inquiry to delivery — fully transparent process",
    steps: [
      { num:"01", title_cn:"提交需求",      title_en:"Submit Inquiry",        desc_cn:"告诉我们您要找的产品、规格和数量", desc_en:"Tell us what you need — product, spec & quantity" },
      { num:"02", title_cn:"精准匹配",      title_en:"Supplier Match",        desc_cn:"48 小时内推荐 3-5 家优质供应商",   desc_en:"3-5 vetted suppliers within 48 hours" },
      { num:"03", title_cn:"打样确认",      title_en:"Sample & Confirm",      desc_cn:"样品寄送、品质确认、价格谈判",     desc_en:"Sample delivery, quality check & price negotiation" },
      { num:"04", title_cn:"生产质检",      title_en:"Production & QC",       desc_cn:"全程跟单，第三方质检，实时反馈",   desc_en:"Live order tracking, 3rd-party QC, real-time updates" },
      { num:"05", title_cn:"交付物流",      title_en:"Delivery & Logistics",  desc_cn:"安排最优物流方案，门到门送达",     desc_en:"Optimized logistics, door-to-door delivery" }
    ]
  },

  /* ---- 客户评价 ---- */
  testimonials: {
    label_cn: "客户评价",
    label_en: "Testimonials",
    title_cn: "客户怎么说",
    title_en: "What Our Clients Say",
    items: [
      {
        stars:5, text_cn:"合作三年，GREENLINE 的选品和质检团队非常专业，帮我们节省了大量时间和成本。强烈推荐！",
        text_en:"3 years of partnership — their sourcing and QC teams are incredibly professional. Saved us significant time and cost. Highly recommended!",
        name:"James Chen", role_cn:"采购总监 / 美国某连锁零售", role_en:"Procurement Director / US Retail Chain", initial:"J"
      },
      {
        stars:5, text_cn:"作为中东市场的建材进口商，我们需要可靠的供应商。GREENLINE 帮我们找到了 3 家优质工厂，品质非常稳定。",
        text_en:"As a building materials importer in the Middle East, we needed reliable suppliers. GREENLINE found us 3 excellent factories with consistent quality.",
        name:"Ahmed Al-Rashid", role_cn:"CEO / 迪拜建材集团", role_en:"CEO / Dubai Building Materials Group", initial:"A"
      },
      {
        stars:5, text_cn:"从第一次询价到首批货物到达欧洲仓库，整个过程只用了 45 天。效率远超我们的预期。",
        text_en:"From first inquiry to the first shipment arriving at our European warehouse — only 45 days. Efficiency far exceeded our expectations.",
        name:"Sophie Müller", role_cn:"运营经理 / 德国电商平台", role_en:"Operations Manager / German E-Commerce Platform", initial:"S"
      }
    ]
  },

  /* ---- 合作伙伴 ---- */
  partners: {
    label_cn: "合作伙伴",
    label_en: "Our Partners",
    title_cn: "值得信赖的合作网络",
    title_en: "A Network You Can Trust",
    names: [
      "Saudi Aramco", "TOTAL", "Porsche", "Cadillac",
      "Rejoice", "Vodafone", "Disney", "GMC",
      "Shangri-La", "Fiji Airways", "QFA", "Qatar Petroleum",
      "Doha College", "Bold&Beautiful", "VOU", "NCPW",
      "Shell", "Qatar Sun", "Qatargas", "Muntajat", "Kaving DDA"
    ]
  },

  /* ---- 联系 ---- */
  contact: {
    label_cn: "联系我们",
    label_en: "Contact Us",
    title_cn: "开启您的全球采购之旅",
    title_en: "Start Your Global Sourcing Journey",
    subtitle_cn: "欢迎随时联系我们，我们将在 24 小时内回复",
    subtitle_en: "Feel free to reach out — we'll reply within 24 hours",
    info_items: [
      { icon:"📞", label_cn:"电话 / WhatsApp", label_en:"Phone / WhatsApp", value:"+86 136-3224-2800" },
      { icon:"📧", label_cn:"邮箱", label_en:"Email",    value:"info@greenlineint.com" },
      { icon:"💬", label_cn:"微信", label_en:"WeChat",   value:"Victoria Guo  A13632242800" },
      { icon:"📍", label_cn:"地址", label_en:"Address",  value_cn:"广州市越秀区环市中路316号金鹰大厦7楼711", value_en:"Room 711, 7F, Golden Eagle Building\n316 Huanshi Middle Rd, Yuexiu, Guangzhou, China" }
    ]
  },

  /* ---- 页脚 ---- */
  footer: {
    about_cn: "GREENLINE — 值得信赖的一站式外贸采购平台。自 2015 年成立以来，已服务 200+ 国际客户，主营家具、厨房家具、卫浴、门窗、墙饰建材、地砖墙砖、酒店用品等品类。",
    about_en: "GREENLINE — Your trusted one-stop global sourcing platform. Since 2015, we've served 200+ international clients, specializing in furniture, kitchen cabinets, sanitary ware, doors & windows, wall decor & building materials, floor & wall tiles, and hotel supplies.",
    quick_links_cn: "快速链接",
    quick_links_en: "Quick Links",
    categories_cn: "产品分类",
    categories_en: "Categories",
    contact_cn: "联系方式",
    contact_en: "Contact",
    copy_cn: "© 2025 GREENLINE. 版权所有.",
    copy_en: "© 2025 GREENLINE. All rights reserved."
  }
};

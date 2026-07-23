/* ============================================================
   广州本润贸易 — DATA
   所有文字、产品、公司信息在这里改
   ============================================================ */

var GT_DATA = {

  /* ---- 公司 ---- */
  company: {
    name_cn: "广州本润贸易公司",
    name_en: "Benrun Trading",
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
    desc_cn: "广州本润贸易，专注家具、卫浴、灯饰、五金、酒店用品等品类出口，从选品到交付全程护航。",
    desc_en: "Benrun Trading specializes in furniture, sanitary ware, lighting, hardware, hotel supplies and more — full support from sourcing to delivery.",
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

  /* ---- 产品分类 ---- */
  categories: [
    { id: "home",       name_cn: "家居家装",   name_en: "Home & Living",    icon: "🏠" },
    { id: "gift",       name_cn: "礼品文创",   name_en: "Gifts & Crafts",   icon: "🎁" },
    { id: "machinery",  name_cn: "工业机械",   name_en: "Industrial Machinery", icon: "⚙️" },
    { id: "hardware",   name_cn: "五金制品",   name_en: "Hardware",         icon: "🔩" },
    { id: "hotel",      name_cn: "酒店用品",   name_en: "Hotel Supplies",   icon: "🏨" },
    { id: "project",    name_cn: "工程配套",   name_en: "Project Solutions",icon: "🏗️" },
    { id: "custom",     name_cn: "定制加工",   name_en: "Custom Manufacturing", icon: "🔧" }
  ],

  /* ---- 产品列表 ---- */
  products: [
    { id:"p01", category:"home",      name_cn:"家具",          name_en:"Furniture",               desc_cn:"各类民用、商用家具，支持尺寸与款式定制",        desc_en:"Residential & commercial furniture, custom size & style available", moq:"1套",    image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop" },
    { id:"p02", category:"home",      name_cn:"卫浴洁具",      name_en:"Sanitary Ware",           desc_cn:"陶瓷卫浴、浴室柜、花洒五金整套供应",            desc_en:"Ceramic sanitary ware, bathroom cabinet, shower sets",             moq:"50件",   image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop" },
    { id:"p03", category:"home",      name_cn:"灯饰灯具",      name_en:"Lighting Fixtures",       desc_cn:"室内吊灯、筒灯、酒店工程照明，可定制",          desc_en:"Pendant lights, downlights, hotel project lighting, OEM supported", moq:"100件", image:"https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=450&fit=crop" },
    { id:"p04", category:"gift",      name_cn:"节日礼品",      name_en:"Holiday Gifts",           desc_cn:"节庆文创礼品，支持LOGO印刷定制",                desc_en:"Festival souvenir gifts, custom logo printing available",          moq:"300件",  image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=450&fit=crop" },
    { id:"p05", category:"machinery", name_cn:"工业机械设备",  name_en:"Industrial Machinery",    desc_cn:"加工设备、生产线设备，按需方案配置",            desc_en:"Processing equipment & production lines, customized solution",    moq:"1台",    image:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop" },
    { id:"p06", category:"hardware",  name_cn:"五金制品",      name_en:"Hardware Products",       desc_cn:"家具五金、建筑五金、精密冲压配件",              desc_en:"Furniture hardware, building hardware, precision stamping parts", moq:"1000件", image:"https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=450&fit=crop" },
    { id:"p07", category:"hotel",     name_cn:"酒店用品",      name_en:"Hotel Supplies",          desc_cn:"客房布草、易耗品、酒店成套工程供货",            desc_en:"Hotel linen, amenities, one-stop supply for hotel projects",       moq:"1批",    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=450&fit=crop" },
    { id:"p08", category:"project",   name_cn:"工程配套服务",  name_en:"Engineering Services",    desc_cn:"工装、酒店、地产整体项目配套解决方案",          desc_en:"Complete supporting solution for commercial & real estate projects",moq:"1项",    image:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=450&fit=crop" },
    { id:"p09", category:"custom",    name_cn:"定制加工服务",  name_en:"Custom Manufacturing",    desc_cn:"来图来样定制，OEM/ODM一站式生产",               desc_en:"Custom production by drawings & samples, OEM & ODM service",       moq:"协商",   image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=450&fit=crop" }
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
    p1_cn: "广州本润贸易公司成立于 2015 年，总部位于中国广州。11 年来我们专注于连接全球优质制造商与国际买家，提供从选品、验厂、质检到物流的一站式外贸服务。",
    p1_en: "Founded in 2015 and headquartered in Guangzhou, China, Benrun Trading has spent over a decade connecting premium manufacturers with international buyers, offering end-to-end services from sourcing and factory auditing to quality inspection and logistics.",
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
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
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
        stars:5, text_cn:"合作三年，本润贸易的选品和质检团队非常专业，帮我们节省了大量时间和成本。强烈推荐！",
        text_en:"3 years of partnership — their sourcing and QC teams are incredibly professional. Saved us significant time and cost. Highly recommended!",
        name:"James Chen", role_cn:"采购总监 / 美国某连锁零售", role_en:"Procurement Director / US Retail Chain", initial:"J"
      },
      {
        stars:5, text_cn:"作为中东市场的建材进口商，我们需要可靠的供应商。本润帮我们找到了 3 家优质工厂，品质非常稳定。",
        text_en:"As a building materials importer in the Middle East, we needed reliable suppliers. Benrun found us 3 excellent factories with consistent quality.",
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
      "HUAWEI", "SAMSUNG", "Walmart", "Carrefour", "IKEA", "BOSCH",
      "SIEMENS", "LG", "Panasonic", "TOTO", "LIXIL", "MAERSK"
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
    about_cn: "广州本润贸易公司 — 值得信赖的一站式外贸采购平台。自 2015 年成立以来，已服务 200+ 国际客户，覆盖家居家装、礼品文创、工业机械、五金制品、酒店用品、工程配套、定制加工等品类。",
    about_en: "Benrun Trading — Your trusted one-stop global sourcing platform. Since 2015, we've served 200+ international clients across categories including home & living, gifts, industrial machinery, hardware, hotel supplies, project solutions, and custom manufacturing.",
    quick_links_cn: "快速链接",
    quick_links_en: "Quick Links",
    categories_cn: "产品分类",
    categories_en: "Categories",
    contact_cn: "联系方式",
    contact_en: "Contact",
    copy_cn: "© 2025 广州本润贸易有限公司. 版权所有.",
    copy_en: "© 2025 Benrun Trading. All rights reserved."
  }
};

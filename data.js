/* ============================================================
   GreenLine — DATA
   90% 的改动在这里！商品、分类、公司信息、联系方式
   ============================================================ */

var GT_DATA = {

  /* ---- 公司 ---- */
  company: {
    name_cn: "广州本润贸易",
    name_en: "GreenLine",
    slogan_cn: "一站式全球采购平台",
    slogan_en: "One-Stop Global Sourcing Platform",
    email: "info@greenlineint.com",
    phone: "+86 136-3224-2800",
    whatsapp: "+86 138-3224-2800",
    wechat: "Victoria Guo  A13632242800",
    address_cn: "中国广东省广州市越秀区环市中路316号金鹰大厦7楼711",
    address_en: "Room 711, 7th Floor, Golden Eagle Building,316 Huanshi Middle Road, Yuexiu District,Guangzhou City, Guangdong Province, P.R.ChinaPostal Code: 510050",
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
    badge_cn: "全球信赖 · B2B 采购专家",
    badge_en: "Trusted Globally · B2B Sourcing Expert",
    title_cn: "连接全球优质供应链\n<em>一站式</em>国际贸易解决方案",
    title_en: "Connect to the World's Best\n<em>One-Stop</em> Trade Solutions",
    desc_cn: "覆盖 30+ 国家、2000+ 认证供应商，从选品到交付全程护航，助您轻松拓展全球市场。",
    desc_en: "30+ countries, 2000+ verified suppliers. We handle every step from sourcing to delivery so you can focus on growing your business worldwide.",
    cta_cn: "立即询价",
    cta_en: "Get a Quote",
    contact_cn: "联系我们",
    contact_en: "Contact Us",
    scroll_cn: "向下探索",
    scroll_en: "Scroll to Explore",
    stats: [
      { value: "30+",  label_cn: "覆盖国家",   label_en: "Countries" },
      { value: "2,000+", label_cn: "认证供应商", label_en: "Suppliers" },
      { value: "50,000+", label_cn: "SKU产品",  label_en: "SKUs" }
    ]
  },

  /* ---- 数据统计 ---- */
  stats: [
    { value: "11",     suffix: "+", label_cn: "年行业经验",  label_en: "Years Experience" },
    { value: "2,000",  suffix: "+", label_cn: "认证供应商",  label_en: "Verified Suppliers" },
    { value: "50",     suffix: "K+",label_cn: "产品 SKU",   label_en: "Product SKUs" },
    { value: "300",    suffix: "+", label_cn: "服务客户",    label_en: "Clients Served" }
  ],

  /* ---- 产品分类 ---- */
  categories: [
    { id: "machinery",  name_cn: "机械设备",   name_en: "Machinery",      icon: "⚙️" },
    { id: "electronics",name_cn: "电子电器",   name_en: "Electronics",    icon: "🔌" },
    { id: "textile",    name_cn: "纺织服装",   name_en: "Textile & Apparel",icon: "👕" },
    { id: "home",       name_cn: "家居建材",   name_en: "Home & Building", icon: "🏠" },
    { id: "chemical",   name_cn: "化工原料",   name_en: "Chemicals",      icon: "🧪" },
    { id: "food",       name_cn: "食品饮料",   name_en: "Food & Beverage",icon: "🍷" }
  ],

 /* ---- 产品列表 ---- */
products: [
  { id:"p01", category:"home",      name_cn:"家具",          name_en:"Furniture",               desc_cn:"各类民用、商用家具，支持尺寸与款式定制",        desc_en:"Residential & commercial furniture, custom size & style available", moq:"1套",    image:"" },
  { id:"p02", category:"home",      name_cn:"卫浴洁具",      name_en:"Sanitary Ware",           desc_cn:"陶瓷卫浴、浴室柜、花洒五金整套供应",            desc_en:"Ceramic sanitary ware, bathroom cabinet, shower sets",             moq:"50件",   image:"" },
  { id:"p03", category:"home",      name_cn:"灯饰灯具",      name_en:"Lighting Fixtures",       desc_cn:"室内吊灯、筒灯、酒店工程照明，可定制",          desc_en:"Pendant lights, downlights, hotel project lighting, OEM supported", moq:"100件", image:"" },
  { id:"p04", category:"gift",      name_cn:"节日礼品",      name_en:"Holiday Gifts",           desc_cn:"节庆文创礼品，支持LOGO印刷定制",                desc_en:"Festival souvenir gifts, custom logo printing available",          moq:"300件",  image:"" },
  { id:"p05", category:"machinery", name_cn:"工业机械设备",  name_en:"Industrial Machinery",    desc_cn:"加工设备、生产线设备，按需方案配置",            desc_en:"Processing equipment & production lines, customized solution",    moq:"1台",    image:"" },
  { id:"p06", category:"hardware",  name_cn:"五金制品",      name_en:"Hardware Products",       desc_cn:"家具五金、建筑五金、精密冲压配件",              desc_en:"Furniture hardware, building hardware, precision stamping parts", moq:"1000件", image:"" },
  { id:"p07", category:"hotel",     name_cn:"酒店用品",      name_en:"Hotel Supplies",          desc_cn:"客房布草、易耗品、酒店成套工程供货",            desc_en:"Hotel linen, amenities, one-stop supply for hotel projects",       moq:"1批",    image:"" },
  { id:"p08", category:"project",   name_cn:"工程配套服务",  name_en:"Engineering Services",    desc_cn:"工装、酒店、地产整体项目配套解决方案",            desc_en:"Complete supporting solution for commercial & real estate projects",moq:"1项",    image:"" },
  { id:"p09", category:"custom",     name_cn:"定制加工服务",  name_en:"Custom Manufacturing",     desc_cn:"来图来样定制，OEM/ODM一站式生产",               desc_en:"Custom production by drawings & samples, OEM & ODM service",        moq:"协商",   image:"" }
],

  /* ---- 关于 ---- */
  about: {
    label_cn: "关于我们",
    label_en: "About Us",
    badge_val: "13+",
    badge_lbl_cn: "年行业深耕",
    badge_lbl_en: "Years Excellence",
    heading_cn: "值得信赖的\n全球贸易伙伴",
    heading_en: "Your Trusted\nGlobal Trade Partner",
    p1_cn: "GreenLine 成立于 2012 年，总部位于中国广州。13 年来我们专注于连接全球优质制造商与国际买家，提供从选品、验厂、质检到物流的一站式贸易服务。",
    p1_en: "Founded in 2012 and headquartered in Guangzhou, China, GreenLine has spent over a decade connecting premium manufacturers with international buyers, offering end-to-end services from sourcing and factory auditing to quality inspection and logistics.",
    p2_cn: "我们的供应链网络覆盖 30 多个国家和地区，与超过 2,000 家经过严格审核的工厂建立了长期合作关系，确保每一笔订单的品质与时效。",
    p2_en: "Our supply network spans 30+ countries with 2,000+ rigorously audited factories, guaranteeing quality and on-time delivery for every order.",
    cta_cn: "了解更多",
    cta_en: "Learn More",
    checks: [
      { cn: "ISO 9001 质量管理体系", en: "ISO 9001 Certified" },
      { cn: "SGS / BV 第三方验货",   en: "SGS / BV Inspection" },
      { cn: "全程可视化跟单",        en: "Live Order Tracking" },
      { cn: "多语言专属客服",        en: "Multilingual Support" }
    ]
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
      { icon:"🔍",  title_cn:"精准寻源",     title_en:"Precision Sourcing",    desc_cn:"AI+人工双重匹配，48 小时内精准推荐 3-5 家优质供应商", desc_en:"AI + human matching, 3-5 premium suppliers within 48 hours" },
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
        stars:5, text_cn:"合作三年，GreenLine 的选品和质检团队非常专业，帮我们节省了大量时间和成本。强烈推荐！",
        text_en:"3 years of partnership — their sourcing and QC teams are incredibly professional. Saved us significant time and cost. Highly recommended!",
        name:"James Chen", role_cn:"采购总监 / 美国某连锁零售", role_en:"Procurement Director / US Retail Chain", initial:"J"
      },
      {
        stars:5, text_cn:"作为中东市场的建材进口商，我们需要可靠的供应商。GreenLine 帮我们找到了 3 家优质工厂，品质非常稳定。",
        text_en:"As a building materials importer in the Middle East, we needed reliable suppliers. GreenLine found us 3 excellent factories with consistent quality.",
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
    subtitle_cn: "留下您的需求，我们将在 24 小时内与您联系",
    subtitle_en: "Leave your inquiry and we'll get back to you within 24 hours",
    info_items: [
      { icon:"📞", label_cn:"电话", label_en:"Phone",    value:"+86 400-888-6688" },
      { icon:"📧", label_cn:"邮箱", label_en:"Email",    value:"info@greenline-trade.com" },
      { icon:"💬", label_cn:"微信", label_en:"WeChat",   value:"GreenLine_Official" },
      { icon:"📍", label_cn:"地址", label_en:"Address",  value_cn:"中国广州市越秀区环市中路316号金鹰大厦7楼711", value_en:"Room 711, 7th Floor, Golden Eagle Building,
316 Huanshi Middle Road, Yuexiu District, Guangzhou City, Guangdong Province, P.R.ChinaPostal Code: 510050" }
    ],
  },

  /* ---- 页脚 ---- */
  footer: {
    about_cn: "GreenLine 绿线贸易 — 值得信赖的一站式全球采购平台。自 2015 年成立以来，已服务 300+ 国际客户，覆盖机械设备、电子电器、纺织服装、家居建材、化工原料、食品饮料六大品类。",
    about_en: "GreenLine — Your trusted one-stop global sourcing platform. Since 2012, we've served 300+ international clients across 6 major categories including machinery, electronics, textiles, home & building, chemicals, and food & beverage.",
    quick_links_cn: "快速链接",
    quick_links_en: "Quick Links",
    categories_cn: "产品分类",
    categories_en: "Categories",
    contact_cn: "联系方式",
    contact_en: "Contact",
    copy_cn: "© 2025 GreenLine 广州本润贸易有限公司. 版权所有.",
    copy_en: "© 2025 GreenLine. All rights reserved."
  }
};

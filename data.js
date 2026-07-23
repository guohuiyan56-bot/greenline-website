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

  /* ---- 产品列表 (100) ---- */
  products: [
    /* ===== 家居家装 (15) ===== */
    { id:"p01", category:"home", name_cn:"民用家具",       name_en:"Residential Furniture",   desc_cn:"实木、板式、软体家具，支持尺寸与款式定制",                   desc_en:"Solid wood, panel & upholstered furniture, custom size & style",     image:"images/furniture-modern.jpg" },
    { id:"p02", category:"home", name_cn:"卫浴洁具",       name_en:"Sanitary Ware",           desc_cn:"陶瓷马桶、浴室柜、洗脸盆、花洒五金整套",                     desc_en:"Ceramic toilets, bathroom cabinets, basins, shower sets",           image:"images/bathroom-sanitary.jpg" },
    { id:"p03", category:"home", name_cn:"灯饰灯具",       name_en:"Lighting Fixtures",       desc_cn:"吊灯、筒灯、吸顶灯、酒店工程照明",                           desc_en:"Chandeliers, downlights, ceiling lights, hotel project lighting",   image:"images/lighting-lamp.jpg" },
    { id:"p04", category:"home", name_cn:"厨房用品",       name_en:"Kitchenware",             desc_cn:"不粘锅、刀具套装、厨房小家电、烘焙器具",                     desc_en:"Non-stick cookware, knife sets, kitchen appliances, bakeware",      image:"images/kitchenware.jpg" },
    { id:"p05", category:"home", name_cn:"家居装饰",       name_en:"Home Decor",              desc_cn:"挂画、摆件、花瓶、地毯、窗帘布艺定制",                       desc_en:"Wall art, ornaments, vases, rugs, custom curtains & fabrics",       image:"images/homedecor.jpg" },
    { id:"p06", category:"home", name_cn:"户外家具",       name_en:"Outdoor Furniture",       desc_cn:"户外桌椅、遮阳伞、藤编沙发，防锈防水",                       desc_en:"Outdoor tables & chairs, umbrellas, rattan sofas, weatherproof",    image:"images/outdoor-furniture.jpg" },
    { id:"p07", category:"home", name_cn:"办公家具",       name_en:"Office Furniture",        desc_cn:"办公桌椅、文件柜、会议桌、隔断工位",                         desc_en:"Office desks, chairs, cabinets, conference tables, partitions",     image:"images/furniture-modern.jpg" },
    { id:"p08", category:"home", name_cn:"智能马桶",       name_en:"Smart Toilet",            desc_cn:"全自动智能马桶，加热、冲洗、烘干一体",                       desc_en:"Full-auto smart toilet with heated seat, wash & dry functions",     image:"images/bathroom-sanitary.jpg" },
    { id:"p09", category:"home", name_cn:"LED筒灯",       name_en:"LED Downlight",           desc_cn:"嵌入式LED筒灯，商业照明工程首选",                             desc_en:"Recessed LED downlights for commercial lighting projects",          image:"images/lighting-lamp.jpg" },
    { id:"p10", category:"home", name_cn:"不锈钢锅具",     name_en:"Stainless Steel Cookware", desc_cn:"304不锈钢汤锅、炒锅、蒸笼套装",                              desc_en:"304 stainless steel pots, woks, steamers set",                     image:"images/kitchenware.jpg" },
    { id:"p11", category:"home", name_cn:"水晶吊灯",       name_en:"Crystal Chandelier",      desc_cn:"K9水晶吊灯，酒店大堂、别墅豪华灯饰",                         desc_en:"K9 crystal chandeliers for hotel lobbies & luxury villas",         image:"images/lighting-fixture.jpg" },
    { id:"p12", category:"home", name_cn:"浴室五金挂件",   name_en:"Bathroom Hardware",       desc_cn:"毛巾架、置物架、纸巾盒、浴室挂钩全套",                       desc_en:"Towel racks, shelves, tissue boxes, bathroom hooks set",           image:"images/bathroom-modern.jpg" },
    { id:"p13", category:"home", name_cn:"墙面装饰画",     name_en:"Wall Art Decor",          desc_cn:"油画、抽象画、风景画，多尺寸可选",                           desc_en:"Oil paintings, abstract art, landscape prints, multiple sizes",     image:"images/homedecor.jpg" },
    { id:"p14", category:"home", name_cn:"藤编户外椅",     name_en:"Rattan Outdoor Chair",    desc_cn:"手工藤编户外椅，防水防UV处理",                               desc_en:"Handmade rattan outdoor chairs, waterproof & UV-resistant",         image:"images/outdoor-furniture.jpg" },
    { id:"p15", category:"home", name_cn:"烘焙模具套装",   name_en:"Bakeware Set",            desc_cn:"不粘蛋糕模、饼干模、面包烤盘套装",                           desc_en:"Non-stick cake molds, cookie cutters, baking pans set",             image:"images/kitchenware.jpg" },

    /* ===== 礼品文创 (12) ===== */
    { id:"p16", category:"gift", name_cn:"节日礼品",       name_en:"Holiday Gifts",           desc_cn:"圣诞、春节、万圣节节庆礼品，LOGO定制",                      desc_en:"Christmas, CNY, Halloween festive gifts, custom logo printing",     image:"images/gift-products.jpg" },
    { id:"p17", category:"gift", name_cn:"促销赠品",       name_en:"Promotional Gifts",       desc_cn:"企业伴手礼、展会赠品、广告衫、帆布袋",                     desc_en:"Corporate gifts, trade show giveaways, T-shirts, tote bags",        image:"images/promo-gifts.jpg" },
    { id:"p18", category:"gift", name_cn:"工艺摆件",       name_en:"Craft Ornaments",         desc_cn:"树脂工艺品、金属摆件、木质雕刻",                             desc_en:"Resin crafts, metal ornaments, wood carvings",                     image:"images/craft-ornaments.jpg" },
    { id:"p19", category:"gift", name_cn:"包装制品",       name_en:"Packaging Products",      desc_cn:"礼品盒、手提袋、彩印包装、食品级包装",                     desc_en:"Gift boxes, tote bags, color printed packaging, food-grade",        image:"images/gift-packaging.jpg" },
    { id:"p20", category:"gift", name_cn:"圣诞装饰品",     name_en:"Christmas Decorations",   desc_cn:"圣诞树、彩球、灯串、花环装饰全套",                           desc_en:"Christmas trees, baubles, light strings, wreaths set",             image:"images/gift-products.jpg" },
    { id:"p21", category:"gift", name_cn:"企业定制礼品",   name_en:"Corporate Custom Gifts",  desc_cn:"高端商务礼盒，支持品牌LOGO定制",                             desc_en:"Premium business gift boxes with custom brand logo",               image:"images/promo-gifts.jpg" },
    { id:"p22", category:"gift", name_cn:"树脂手工艺品",   name_en:"Resin Handicrafts",       desc_cn:"手工浇筑树脂摆件，桌面装饰收藏",                             desc_en:"Handmade resin figurines for desk decor & collection",             image:"images/craft-ornaments.jpg" },
    { id:"p23", category:"gift", name_cn:"彩印礼品盒",     name_en:"Printed Gift Boxes",      desc_cn:"硬纸板礼品盒，烫金/UV印刷工艺",                             desc_en:"Rigid gift boxes with foil stamping & UV printing",                image:"images/gift-packaging.jpg" },
    { id:"p24", category:"gift", name_cn:"万圣节周边",     name_en:"Halloween Accessories",   desc_cn:"南瓜灯、面具、服装、派对装饰",                               desc_en:"Pumpkin lights, masks, costumes, party decorations",               image:"images/gift-products.jpg" },
    { id:"p25", category:"gift", name_cn:"广告扇/雨伞",   name_en:"Promotional Fans & Umbrellas", desc_cn:"折叠广告扇、全自动晴雨伞，LOGO印刷",                   desc_en:"Folding promotional fans, auto umbrellas with logo printing",       image:"images/promo-gifts.jpg" },
    { id:"p26", category:"gift", name_cn:"木质雕刻摆件",   name_en:"Wood Carved Ornaments",   desc_cn:"胡桃木、橄榄木手工雕刻桌面摆件",                             desc_en:"Hand-carved walnut & olive wood desk ornaments",                   image:"images/craft-ornaments.jpg" },
    { id:"p27", category:"gift", name_cn:"环保包装袋",     name_en:"Eco Packaging Bags",      desc_cn:"无纺布袋、牛皮纸袋、可降解材料包装",                         desc_en:"Non-woven bags, kraft paper bags, biodegradable packaging",        image:"images/gift-packaging.jpg" },

    /* ===== 工业机械 (15) ===== */
    { id:"p28", category:"machinery", name_cn:"工业机械设备", name_en:"Industrial Machinery",  desc_cn:"CNC加工中心、注塑机、冲床、生产线设备",                     desc_en:"CNC machining centers, injection molding, presses, production lines",image:"images/machinery-cnc.jpg" },
    { id:"p29", category:"machinery", name_cn:"电动工具",     name_en:"Power Tools",           desc_cn:"电钻、角磨机、电锯、热风枪等工业级",                         desc_en:"Drills, angle grinders, saws, heat guns — industrial grade",        image:"images/hardware-drill.jpg" },
    { id:"p30", category:"machinery", name_cn:"机械配件",     name_en:"Machinery Parts",       desc_cn:"轴承、齿轮、液压件、密封件",                                 desc_en:"Bearings, gears, hydraulic parts, seals & wear components",          image:"images/machinery-parts.jpg" },
    { id:"p31", category:"machinery", name_cn:"CNC加工中心", name_en:"CNC Machining Center",   desc_cn:"三轴/四轴/五轴CNC，高精度加工",                              desc_en:"3/4/5-axis CNC machining centers, high-precision processing",       image:"images/machinery-cnc.jpg" },
    { id:"p32", category:"machinery", name_cn:"注塑机",       name_en:"Injection Molding Machine", desc_cn:"50T-1000T注塑机，伺服节能型",                              desc_en:"50T-1000T injection molding machines, servo energy-saving",        image:"images/machinery-cnc.jpg" },
    { id:"p33", category:"machinery", name_cn:"电钻/冲击钻",  name_en:"Electric Drill",        desc_cn:"12V/20V锂电钻，工业级冲击钻",                                desc_en:"12V/20V lithium drills, industrial impact drills",                 image:"images/hardware-drill.jpg" },
    { id:"p34", category:"machinery", name_cn:"角磨机",       name_en:"Angle Grinder",         desc_cn:"850W-2200W角磨机，切割打磨两用",                             desc_en:"850W-2200W angle grinders for cutting & polishing",                image:"images/hardware-drill.jpg" },
    { id:"p35", category:"machinery", name_cn:"轴承系列",     name_en:"Bearings",              desc_cn:"深沟球轴承、滚子轴承、推力轴承",                             desc_en:"Deep groove ball, roller & thrust bearings",                       image:"images/machinery-parts.jpg" },
    { id:"p36", category:"machinery", name_cn:"齿轮/齿条",   name_en:"Gears & Racks",          desc_cn:"直齿轮、斜齿轮、蜗轮蜗杆、齿条",                             desc_en:"Spur gears, helical gears, worm gears, racks",                     image:"images/machinery-parts.jpg" },
    { id:"p37", category:"machinery", name_cn:"冲床设备",     name_en:"Punch Press",           desc_cn:"机械冲床、液压冲床，30T-400T",                               desc_en:"Mechanical & hydraulic punch presses, 30T-400T",                  image:"images/machinery-cnc.jpg" },
    { id:"p38", category:"machinery", name_cn:"液压系统",     name_en:"Hydraulic Systems",     desc_cn:"液压泵、液压缸、液压阀、管路附件",                           desc_en:"Hydraulic pumps, cylinders, valves, fittings",                    image:"images/machinery-parts.jpg" },
    { id:"p39", category:"machinery", name_cn:"热风枪",       name_en:"Heat Gun",              desc_cn:"可调温热风枪，工业级2000W",                                  desc_en:"Variable temperature heat gun, industrial 2000W",                  image:"images/hardware-drill.jpg" },
    { id:"p40", category:"machinery", name_cn:"电锯/切割机",  name_en:"Electric Saw",          desc_cn:"圆锯、曲线锯、往复锯、金属切割机",                           desc_en:"Circular saws, jigsaws, reciprocating saws, metal cutters",        image:"images/hardware-drill.jpg" },
    { id:"p41", category:"machinery", name_cn:"密封件",       name_en:"Seals",                 desc_cn:"O型圈、油封、垫片、盘根密封",                               desc_en:"O-rings, oil seals, gaskets, packing seals",                       image:"images/machinery-parts.jpg" },
    { id:"p42", category:"machinery", name_cn:"生产线设备",   name_en:"Production Line Equipment", desc_cn:"自动化装配线、包装线、检测线",                            desc_en:"Automated assembly, packaging & inspection lines",                 image:"images/machinery-cnc.jpg" },

    /* ===== 五金制品 (15) ===== */
    { id:"p43", category:"hardware", name_cn:"建筑五金",     name_en:"Building Hardware",      desc_cn:"门窗五金、幕墙配件、钢结构连接件",                         desc_en:"Door/window hardware, curtain wall fittings, steel connectors",      image:"images/hardware-tools.jpg" },
    { id:"p44", category:"hardware", name_cn:"紧固件",       name_en:"Fasteners",              desc_cn:"螺栓、螺母、垫圈、铆钉，DIN/ANSI/JIS",                       desc_en:"Bolts, nuts, washers, rivets — DIN/ANSI/JIS standards",              image:"images/fasteners.jpg" },
    { id:"p45", category:"hardware", name_cn:"安防锁具",     name_en:"Locks & Security",       desc_cn:"智能门锁、挂锁、门禁系统、安防五金",                         desc_en:"Smart locks, padlocks, access control systems, security hardware",   image:"images/doorlock.jpg" },
    { id:"p46", category:"hardware", name_cn:"门窗合页",     name_en:"Door & Window Hinges",   desc_cn:"不锈钢合页、液压缓冲合页、隐藏式铰链",                     desc_en:"Stainless hinges, hydraulic soft-close, concealed hinges",          image:"images/hardware-tools.jpg" },
    { id:"p47", category:"hardware", name_cn:"螺栓/螺丝",   name_en:"Bolts & Screws",         desc_cn:"六角螺栓、内六角、自攻螺丝、马车螺栓",                     desc_en:"Hex bolts, socket head cap screws, self-tapping, carriage bolts",   image:"images/fasteners.jpg" },
    { id:"p48", category:"hardware", name_cn:"智能门锁",     name_en:"Smart Door Lock",        desc_cn:"指纹、密码、刷卡、APP开锁一体",                             desc_en:"Fingerprint, PIN, RFID card, APP unlock all-in-one",               image:"images/doorlock.jpg" },
    { id:"p49", category:"hardware", name_cn:"幕墙配件",     name_en:"Curtain Wall Fittings",  desc_cn:"预埋件、驳接爪、拉杆、索具配件",                             desc_en:"Embedded parts, spider fittings, tension rods, rigging hardware",   image:"images/hardware-tools.jpg" },
    { id:"p50", category:"hardware", name_cn:"螺母/垫圈",   name_en:"Nuts & Washers",         desc_cn:"六角螺母、尼龙锁紧螺母、平垫、弹垫",                       desc_en:"Hex nuts, nylon lock nuts, flat washers, spring washers",          image:"images/fasteners.jpg" },
    { id:"p51", category:"hardware", name_cn:"门禁系统",     name_en:"Access Control System",  desc_cn:"刷卡门禁、人脸识别、二维码门禁全套",                         desc_en:"RFID card, face recognition, QR code access control systems",      image:"images/doorlock.jpg" },
    { id:"p52", category:"hardware", name_cn:"钢结构连接件", name_en:"Steel Connectors",       desc_cn:"高强螺栓、焊接材料、节点板",                                 desc_en:"High-strength bolts, welding materials, gusset plates",            image:"images/hardware-tools.jpg" },
    { id:"p53", category:"hardware", name_cn:"铆钉/销钉",   name_en:"Rivets & Pins",          desc_cn:"抽芯铆钉、实心铆钉、开口销、弹簧销",                       desc_en:"Blind rivets, solid rivets, split pins, spring pins",              image:"images/fasteners.jpg" },
    { id:"p54", category:"hardware", name_cn:"挂锁/密码锁",  name_en:"Padlocks",              desc_cn:"铜挂锁、钢挂锁、密码挂锁",                                   desc_en:"Brass padlocks, steel padlocks, combination padlocks",             image:"images/doorlock.jpg" },
    { id:"p55", category:"hardware", name_cn:"精密冲压件",   name_en:"Precision Stamping Parts", desc_cn:"五金冲压件、弯折件、拉伸件定制",                           desc_en:"Stamped, bent & deep-drawn metal parts, custom",                   image:"images/hardware-tools.jpg" },
    { id:"p56", category:"hardware", name_cn:"法兰螺栓",     name_en:"Flange Bolts",           desc_cn:"带法兰面螺栓，防松防盗型",                                   desc_en:"Flanged bolts with anti-loosening & anti-theft design",            image:"images/fasteners.jpg" },
    { id:"p57", category:"hardware", name_cn:"安全五金配件", name_en:"Security Hardware",      desc_cn:"防盗链、门吸、防坠装置、安全锁扣",                           desc_en:"Security chains, door stops, anti-fall devices, safety latches",   image:"images/doorlock.jpg" },

    /* ===== 酒店用品 (15) ===== */
    { id:"p58", category:"hotel", name_cn:"酒店布草",       name_en:"Hotel Linen",             desc_cn:"床单被套、毛巾浴巾、浴袍、台布",                             desc_en:"Bed sheets, towels, bathrobes, tablecloths",                       image:"images/hotel-supplies.jpg" },
    { id:"p59", category:"hotel", name_cn:"酒店易耗品",     name_en:"Hotel Amenities",         desc_cn:"拖鞋、牙具、沐浴套装、茶包咖啡",                             desc_en:"Slippers, dental kits, bath amenities, tea/coffee",                image:"images/hotel-amenities.jpg" },
    { id:"p60", category:"hotel", name_cn:"大堂用品",       name_en:"Lobby Supplies",          desc_cn:"行李车、雨伞架、烟灰柱、指示牌",                             desc_en:"Luggage carts, umbrella stands, ashtrays, signage",                image:"images/lobby-supplies.jpg" },
    { id:"p61", category:"hotel", name_cn:"床单被套套装",   name_en:"Bed Sheet Sets",          desc_cn:"60S高支棉，白色/素色可选，阻燃处理",                         desc_en:"60S high-count cotton, white/solid colors, flame-retardant",       image:"images/hotel-supplies.jpg" },
    { id:"p62", category:"hotel", name_cn:"一次性拖鞋",     name_en:"Disposable Slippers",     desc_cn:"无纺布/华夫格/毛巾布拖鞋批量供应",                           desc_en:"Non-woven/waffle/terry disposable slippers in bulk",               image:"images/hotel-amenities.jpg" },
    { id:"p63", category:"hotel", name_cn:"行李车",         name_en:"Luggage Carts",           desc_cn:"不锈钢行李车、折叠行李推车",                                 desc_en:"Stainless steel luggage carts, folding carts",                    image:"images/lobby-supplies.jpg" },
    { id:"p64", category:"hotel", name_cn:"浴巾浴袍",       name_en:"Bath Towels & Robes",     desc_cn:"酒店专用浴巾、浴袍，零捻度柔软工艺",                         desc_en:"Hotel bath towels & robes, zero-twist soft technology",            image:"images/hotel-supplies.jpg" },
    { id:"p65", category:"hotel", name_cn:"沐浴套装",       name_en:"Bath Amenities Set",      desc_cn:"洗发水、沐浴露、护发素、身体乳30ml套装",                     desc_en:"Shampoo, body wash, conditioner, lotion 30ml sets",                image:"images/hotel-amenities.jpg" },
    { id:"p66", category:"hotel", name_cn:"雨伞架/烟灰柱",  name_en:"Umbrella Stands",         desc_cn:"不锈钢雨伞架、烟灰柱、立式垃圾桶",                           desc_en:"Stainless umbrella stands, ash columns, trash bins",               image:"images/lobby-supplies.jpg" },
    { id:"p67", category:"hotel", name_cn:"餐厅台布",       name_en:"Restaurant Tablecloths",  desc_cn:"纯棉/涤纶台布，多种颜色尺寸",                               desc_en:"Cotton/polyester tablecloths, various colors & sizes",             image:"images/hotel-supplies.jpg" },
    { id:"p68", category:"hotel", name_cn:"牙具套装",       name_en:"Dental Kits",             desc_cn:"牙刷、牙膏、梳子、浴帽一次性套装",                           desc_en:"Disposable toothbrush, toothpaste, comb, shower cap kits",         image:"images/hotel-amenities.jpg" },
    { id:"p69", category:"hotel", name_cn:"指示牌/迎宾牌",  name_en:"Signage",                 desc_cn:"亚克力指示牌、LED楼层牌、迎宾水牌",                         desc_en:"Acrylic signs, LED floor signs, welcome display boards",           image:"images/lobby-supplies.jpg" },
    { id:"p70", category:"hotel", name_cn:"阻燃床品",       name_en:"Flame Retardant Bedding", desc_cn:"阻燃面料被芯、枕芯，通过国际认证",                           desc_en:"Flame-retardant duvets & pillows, internationally certified",      image:"images/hotel-supplies.jpg" },
    { id:"p71", category:"hotel", name_cn:"茶包咖啡包",     name_en:"Tea & Coffee Packets",    desc_cn:"红茶、绿茶、速溶咖啡、糖包小包装",                           desc_en:"Black/green tea, instant coffee, sugar packets",                  image:"images/hotel-amenities.jpg" },
    { id:"p72", category:"hotel", name_cn:"迎宾地毯",       name_en:"Welcome Mats",            desc_cn:"尼龙印花地垫、防滑吸水型",                                   desc_en:"Nylon printed doormats, anti-slip & water-absorbent",              image:"images/lobby-supplies.jpg" },

    /* ===== 工程配套 (14) ===== */
    { id:"p73", category:"project", name_cn:"工程配套服务", name_en:"Engineering Services",    desc_cn:"工装、酒店、地产整体项目配套解决方案",                     desc_en:"Complete solutions for commercial & real estate projects",            image:"images/construction-engineering.jpg" },
    { id:"p74", category:"project", name_cn:"建筑装饰材料", name_en:"Building Materials",      desc_cn:"瓷砖、地板、涂料、石材、石膏板",                             desc_en:"Tiles, flooring, paints, stone, gypsum boards",                    image:"images/building-materials.jpg" },
    { id:"p75", category:"project", name_cn:"管道管件",     name_en:"Pipes & Fittings",        desc_cn:"PPR/PVC/PE管道、阀门、法兰、沟槽管件",                       desc_en:"PPR/PVC/PE pipes, valves, flanges, grooved fittings",              image:"images/pipes-fittings.jpg" },
    { id:"p76", category:"project", name_cn:"瓷砖/大理石",  name_en:"Tiles & Marble",          desc_cn:"釉面砖、通体砖、大理石、花岗岩",                             desc_en:"Glazed tiles, full-body tiles, marble, granite",                   image:"images/building-materials.jpg" },
    { id:"p77", category:"project", name_cn:"PPR水管",      name_en:"PPR Water Pipes",         desc_cn:"PPR冷热水管，20mm-110mm全规格",                              desc_en:"PPR hot/cold water pipes, 20mm-110mm full range",                  image:"images/pipes-fittings.jpg" },
    { id:"p78", category:"project", name_cn:"工装整体方案", name_en:"Commercial Decoration",   desc_cn:"办公楼、商铺、餐厅整体装修配套",                             desc_en:"Office, retail, restaurant complete decoration solutions",         image:"images/construction-engineering.jpg" },
    { id:"p79", category:"project", name_cn:"木地板/SPC地板", name_en:"Wood & SPC Flooring",   desc_cn:"实木地板、强化地板、SPC石塑地板",                           desc_en:"Solid wood, laminate, SPC flooring",                              image:"images/building-materials.jpg" },
    { id:"p80", category:"project", name_cn:"PVC排水管",    name_en:"PVC Drainage Pipes",      desc_cn:"PVC-U排水管、管件、雨水管",                                   desc_en:"PVC-U drainage pipes, fittings, rainwater pipes",                  image:"images/pipes-fittings.jpg" },
    { id:"p81", category:"project", name_cn:"酒店工程配套", name_en:"Hotel Project Supply",    desc_cn:"酒店整体项目材料供应与安装",                                 desc_en:"Hotel project material supply & installation",                    image:"images/construction-engineering.jpg" },
    { id:"p82", category:"project", name_cn:"涂料/防水材料", name_en:"Paint & Waterproofing",  desc_cn:"内墙乳胶漆、外墙涂料、防水涂料",                             desc_en:"Interior latex paint, exterior coatings, waterproof paint",        image:"images/building-materials.jpg" },
    { id:"p83", category:"project", name_cn:"阀门/法兰",    name_en:"Valves & Flanges",        desc_cn:"闸阀、球阀、蝶阀、法兰片全规格",                             desc_en:"Gate valves, ball valves, butterfly valves, flanges",             image:"images/pipes-fittings.jpg" },
    { id:"p84", category:"project", name_cn:"地产项目配套", name_en:"Real Estate Project",     desc_cn:"住宅、商业地产项目建材配套",                                 desc_en:"Residential & commercial real estate material supply",             image:"images/construction-engineering.jpg" },
    { id:"p85", category:"project", name_cn:"石膏板/天花板", name_en:"Gypsum Boards & Ceilings", desc_cn:"纸面石膏板、矿棉板、铝扣板吊顶",                           desc_en:"Gypsum boards, mineral wool boards, aluminum ceiling panels",      image:"images/building-materials.jpg" },
    { id:"p86", category:"project", name_cn:"PE管/沟槽管件", name_en:"PE Pipes & Grooved Fittings", desc_cn:"PE给水管、沟槽管件、消防配件",                        desc_en:"PE water supply pipes, grooved fittings, fire protection parts",   image:"images/pipes-fittings.jpg" },

    /* ===== 定制加工 (14) ===== */
    { id:"p87", category:"custom", name_cn:"OEM代工",       name_en:"OEM Manufacturing",       desc_cn:"品牌代工生产，来图来样定制，一站式OEM",                     desc_en:"Brand OEM production, custom by drawings & samples, one-stop",       image:"images/factory-quality.jpg" },
    { id:"p88", category:"custom", name_cn:"ODM研发",       name_en:"ODM Development",         desc_cn:"产品设计开发、结构优化、模具开发",                           desc_en:"Product design, structure optimization, mold development",          image:"images/odm-design.jpg" },
    { id:"p89", category:"custom", name_cn:"来图打样",      name_en:"Custom Prototyping",      desc_cn:"快速打样、小批量试产、3D打印验证",                           desc_en:"Rapid prototyping, small-batch trial, 3D print verification",      image:"images/custom-prototype.jpg" },
    { id:"p90", category:"custom", name_cn:"家具OEM定制",   name_en:"Furniture OEM",           desc_cn:"来图定制家具，材质/颜色/尺寸全定制",                       desc_en:"Custom furniture by drawings, full material/color/size options",   image:"images/factory-quality.jpg" },
    { id:"p91", category:"custom", name_cn:"产品外观设计",   name_en:"Product Design",          desc_cn:"工业设计、外观造型、CMF方案设计",                           desc_en:"Industrial design, exterior styling, CMF solution design",         image:"images/odm-design.jpg" },
    { id:"p92", category:"custom", name_cn:"3D打印验证",    name_en:"3D Print Prototyping",    desc_cn:"SLA/SLS/FDM 3D打印手板，48小时交付",                         desc_en:"SLA/SLS/FDM 3D printing prototypes, 48-hour delivery",             image:"images/custom-prototype.jpg" },
    { id:"p93", category:"custom", name_cn:"五金OEM加工",   name_en:"Hardware OEM",            desc_cn:"五金冲压、CNC加工、表面处理一站式",                         desc_en:"Hardware stamping, CNC machining, surface treatment one-stop",     image:"images/factory-quality.jpg" },
    { id:"p94", category:"custom", name_cn:"模具开发",       name_en:"Mold Development",        desc_cn:"注塑模具、压铸模具、冲压模具开发",                           desc_en:"Injection molds, die-casting molds, stamping molds",              image:"images/odm-design.jpg" },
    { id:"p95", category:"custom", name_cn:"小批量试产",    name_en:"Small Batch Trial",       desc_cn:"100-1000件小批量试产，快速验证",                             desc_en:"100-1000 units small-batch trial production, fast validation",      image:"images/custom-prototype.jpg" },
    { id:"p96", category:"custom", name_cn:"灯饰OEM定制",   name_en:"Lighting OEM",            desc_cn:"来图定制灯饰，酒店工程灯具OEM",                             desc_en:"Custom lighting by drawings, hotel project lighting OEM",         image:"images/factory-quality.jpg" },
    { id:"p97", category:"custom", name_cn:"结构优化设计",   name_en:"Structure Optimization", desc_cn:"产品结构优化、材料降本、强度分析",                           desc_en:"Product structure optimization, cost reduction, strength analysis", image:"images/odm-design.jpg" },
    { id:"p98", category:"custom", name_cn:"快速打样服务",  name_en:"Rapid Prototyping",       desc_cn:"7天出样，硅胶/金属/塑料手板",                               desc_en:"7-day prototyping, silicone/metal/plastic prototypes",             image:"images/custom-prototype.jpg" },
    { id:"p99", category:"custom", name_cn:"包装OEM定制",   name_en:"Packaging OEM",           desc_cn:"定制包装盒、吸塑、纸卡、说明书印刷",                         desc_en:"Custom packaging boxes, blister packs, inserts, manual printing",  image:"images/factory-quality.jpg" },
    { id:"p100",category:"custom", name_cn:"来样逆向工程",  name_en:"Reverse Engineering",     desc_cn:"来样3D扫描、逆向建模、图纸输出",                             desc_en:"3D scanning from samples, reverse modeling, drawing output",       image:"images/custom-prototype.jpg" }
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

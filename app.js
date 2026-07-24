/* ============================================================
   GreenLine — App Engine v5
   产品优先布局 · 按分类展示 · 默认英文
   ============================================================ */

(function () {
  'use strict';

  var d = GT_DATA;
  var i18n = GT_I18N;
  var lang = 'en';            // 默认语言：英文
  var searchText = '';

  /* ===== Helpers ===== */
  function t(key) {
    if (!i18n || !i18n[key]) return key;
    return i18n[key][lang] || i18n[key]['cn'] || key;
  }
  function dc(obj, key) {
    if (!obj) return '';
    var k = key + '_' + lang;
    if (obj[k] !== undefined) return obj[k];
    k = key + '_cn';
    if (obj[k] !== undefined) return obj[k];
    return obj[key] !== undefined ? obj[key] : '';
  }

  /* ===== 导航中英文映射 ===== */
  var navSections = ['home', 'products', 'about', 'service', 'testimonials', 'contact'];

  function updateNavText() {
    var links = document.querySelectorAll('.nav-links a');
    navSections.forEach(function (sectionId, i) {
      if (links[i]) {
        var item = null;
        for (var j = 0; j < d.nav.length; j++) {
          if (d.nav[j].id === sectionId) { item = d.nav[j]; break; }
        }
        if (item) links[i].textContent = item[lang] || dc(item, 'name');
      }
    });
  }

  /* ===== Language ===== */
  function setLangBtn() {
    var lb = document.getElementById('langBtn');
    if (!lb) return;
    lb.textContent = lang === 'cn' ? 'EN' : '中文';
    lb.title = lang === 'cn' ? 'Switch to English' : '切换到中文';
  }
  function setLang(l) {
    lang = l;
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    setLangBtn();
    updateNavText();
    updateSearchPlaceholder();
    renderAll();
    resetReveals();
  }
  document.getElementById('langBtn').addEventListener('click', function () {
    setLang(lang === 'cn' ? 'en' : 'cn');
  });

  /* ===== Preloader ===== */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var pl = document.getElementById('preloader');
      pl.classList.add('hidden');
      setTimeout(function () { pl.remove(); }, 500);
    }, 350);
  });

  /* ===== Custom Cursor ===== */
  var cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .prod-card, .svc-card, .step, .testimonial, .cat-more, .cat-tab, .contact-item, .hero-chip, .search-tag, .search-clear').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });

  /* ===== Scroll Spy ===== */
  var sectionIds = ['home', 'products', 'statsSec', 'tradeBanner1', 'about', 'service', 'process', 'testimonials', 'tradeBanner2', 'partners', 'contact'];
  var sectionToNav = {
    'home': 'home',
    'products': 'products',
    'statsSec': 'products',
    'tradeBanner1': 'products',
    'about': 'about',
    'service': 'service',
    'process': 'service',
    'testimonials': 'testimonials',
    'tradeBanner2': 'testimonials',
    'partners': 'testimonials',
    'contact': 'contact'
  };

  function scrollSpy() {
    var scrollPos = window.scrollY + window.innerHeight / 3;
    var activeNav = 'home';

    for (var i = sectionIds.length - 1; i >= 0; i--) {
      var el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        activeNav = sectionToNav[sectionIds[i]];
        break;
      }
    }

    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (link, idx) {
      if (idx < navSections.length) {
        link.classList.toggle('active', navSections[idx] === activeNav);
      }
    });
  }

  window.addEventListener('scroll', function () {
    scrollSpy();
  }, { passive: true });

  /* ===== Scroll Progress Bar ===== */
  var progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  /* ===== Nav shadow on scroll ===== */
  var navEl = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    navEl.classList.toggle('shadowed', window.scrollY > 5);
  }, { passive: true });

  /* ===== 入场动画观察器 ===== */
  function observeReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          if (el.classList.contains('reveal-stagger')) {
            var children = el.children;
            for (var i = 0; i < children.length; i++) {
              (function (child, idx) {
                setTimeout(function () {
                  child.classList.add('visible');
                }, idx * 60);
              })(children[i], i);
            }
          }
          el.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
    document.querySelectorAll('.reveal-stagger').forEach(function (el) {
      observer.observe(el);
    });
  }

  function resetReveals() {
    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-stagger > *').forEach(function (el) {
      el.classList.remove('visible');
    });
    requestAnimationFrame(function () { observeReveal(); });
  }

  /* ===== Counter animation ===== */
  function animateCounters() {
    document.querySelectorAll('.stats-num').forEach(function (el) {
      var final = el.getAttribute('data-final');
      if (!final || el.dataset.animated) return;
      el.dataset.animated = '1';
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 2200;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 4);
        var current = Math.floor(eased * parseFloat(final));
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  /* ===== Mobile menu ===== */
  var navLinksEl = document.querySelector('.nav-links');
  var navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', function () {
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') navLinksEl.classList.remove('open');
  });

  /* ===== Back to top ===== */
  var bttBtn = document.getElementById('btt');
  window.addEventListener('scroll', function () {
    bttBtn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  bttBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===== Form ===== */
  window.handleSubmit = function (e) {
    e.preventDefault();
    alert(dc(d.contact.form, 'success'));
    e.target.reset();
    return false;
  };

  /* ===== Hero dots ===== */
  function generateDots() {
    var bg = document.getElementById('heroBg');
    if (!bg) return;
    var colors = ['var(--c-primary)', 'var(--c-primary-d)', 'var(--c-accent)'];
    for (var i = 0; i < 18; i++) {
      var dot = document.createElement('div');
      dot.className = 'hero-bg-dot';
      var size = 2 + Math.random() * 4;
      dot.style.cssText =
        'top:' + Math.random() * 100 + '%;' +
        'left:' + Math.random() * 100 + '%;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
        'animation-delay:' + (Math.random() * 6) + 's;' +
        'animation-duration:' + (5 + Math.random() * 7) + 's;' +
        'opacity:' + (0.15 + Math.random() * 0.35) + ';';
      bg.appendChild(dot);
    }
  }

  /* ==================== RENDER ==================== */
  function renderAll() {
    renderHero();
    renderCategories();
    renderStats();
    renderBanners();
    renderAbout();
    renderServices();
    renderProcess();
    renderTestimonials();
    renderPartners();
    renderContact();
    renderFooter();
    observeReveal();

    var strip = document.getElementById('statsStrip');
    if (strip) statsObserver.observe(strip);
  }

  function renderHero() {
    document.getElementById('heroBadge').textContent = dc(d.hero, 'badge');
    document.getElementById('heroTitle').innerHTML = dc(d.hero, 'title');
    document.getElementById('heroDesc').textContent = dc(d.hero, 'desc');

    var ctaBtn = document.getElementById('heroCta');
    ctaBtn.textContent = dc(d.hero, 'cta');
    ctaBtn.href = '#products';

    var contactBtn = document.getElementById('heroContact');
    contactBtn.textContent = dc(d.hero, 'contact');
    contactBtn.href = '#contact';

    document.getElementById('heroScrollText').textContent = dc(d.hero, 'scroll');
    var sr = document.getElementById('heroStatRow');
    if (sr) {
      var shtml = '';
      d.hero.stats.forEach(function (s) {
        shtml += '<div><div class="hero-stat-val">' + s.value + '</div><div class="hero-stat-lbl">' + dc(s, 'label') + '</div></div>';
      });
      sr.innerHTML = shtml;
    }

    updateSearchPlaceholder();
  }

  function updateSearchPlaceholder() {
    var si = document.getElementById('heroSearch');
    if (si) si.placeholder = lang === 'cn'
      ? '搜索产品名称、分类、关键词...'
      : 'Search products, categories or keywords...';
  }

  /* ===== 产品卡片 ===== */
  function buildCard(p, c, idx, isExtra) {
    var catName = dc(c, 'name');
    var imgContent = p.image
      ? '<img src="' + p.image + '" alt="' + dc(p, 'name') + '" style="width:100%;height:100%;object-fit:cover;" loading="lazy">'
      : '<div class="prod-card-img-placeholder">' + (c.icon || '📦') + '</div>';
    return '' +
      '<div class="prod-card delay-' + ((idx % 6) + 1) + (isExtra ? ' prod-extra' : '') + '" data-cat="' + p.category + '">' +
        '<div class="prod-card-img-wrap">' +
          imgContent +
          '<div class="prod-card-overlay">' +
            '<div class="prod-card-quick">' + (lang === 'cn' ? '立即询价' : 'Inquire Now') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="prod-card-body">' +
          '<span class="prod-card-cat">' + catName + '</span>' +
          '<div class="prod-card-name">' + dc(p, 'name') + '</div>' +
          '<div class="prod-card-desc">' + dc(p, 'desc') + '</div>' +
        '</div>' +
      '</div>';
  }

  /* ===== 按分类展示（产品优先布局） ===== */
  function renderCategories() {
    document.getElementById('productLabel').textContent = lang === 'cn' ? '产品中心' : 'Our Products';
    document.getElementById('productTitle').textContent = lang === 'cn' ? '七大品类 · 一站采购' : '7 Categories · One-Stop Sourcing';
    document.getElementById('productSubtitle').textContent = lang === 'cn'
      ? '从家居家装到工业机械，覆盖您多元的采购需求'
      : 'From home & living to industrial machinery — everything for your sourcing needs';

    var wrap = document.getElementById('categorySections');
    var html = '';
    d.categories.forEach(function (c) {
      var prods = d.products.filter(function (p) { return p.category === c.id; });
      var visible = prods.slice(0, 8);
      var extra = prods.slice(8);
      var cards = '';
      visible.forEach(function (p, i) { cards += buildCard(p, c, i, false); });
      extra.forEach(function (p, i) { cards += buildCard(p, c, i, true); });

      var subText = lang === 'cn'
        ? ('共 ' + prods.length + ' 款产品')
        : (prods.length + (prods.length === 1 ? ' product' : ' products'));
      var moreBtn = extra.length > 0
        ? '<button class="cat-more" data-cat="' + c.id + '" data-expanded="0">' + (lang === 'cn' ? '查看更多 +' : 'View More +') + '</button>'
        : '';

      html +=
        '<section class="cat-section reveal reveal-up" id="cat-' + c.id + '" data-cat="' + c.id + '">' +
          '<div class="cat-head">' +
            '<div class="cat-head-left">' +
              '<div class="cat-icon">' + c.icon + '</div>' +
              '<div class="cat-titles">' +
                '<div class="cat-name">' + dc(c, 'name') + '</div>' +
                '<div class="cat-sub">' + subText + '</div>' +
              '</div>' +
            '</div>' +
            moreBtn +
          '</div>' +
          '<div class="prod-grid cat-grid">' + cards + '</div>' +
        '</section>';
    });
    wrap.innerHTML = html;

    // 绑定 View More / Show Less
    wrap.querySelectorAll('.cat-more').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = this.getAttribute('data-cat');
        var sec = document.getElementById('cat-' + cat);
        var extras = sec.querySelectorAll('.prod-extra');
        var expanded = this.getAttribute('data-expanded') === '1';
        var nowExpanded = !expanded;
        extras.forEach(function (el) { el.style.display = nowExpanded ? '' : 'none'; });
        this.setAttribute('data-expanded', nowExpanded ? '1' : '0');
        this.innerHTML = nowExpanded
          ? (lang === 'cn' ? '收起 −' : 'Show Less −')
          : (lang === 'cn' ? '查看更多 +' : 'View More +');
      });
    });

    // 分类直达 chips
    initHeroChips();
  }

  function initHeroChips() {
    var el = document.getElementById('heroChips');
    if (!el) return;
    var html = '';
    d.categories.forEach(function (c) {
      html += '<button class="hero-chip" data-target="cat-' + c.id + '">' + dc(c, 'name') + '</button>';
    });
    el.innerHTML = html;
    el.querySelectorAll('.hero-chip').forEach(function (b) {
      b.addEventListener('click', function () {
        var tgt = document.getElementById(this.getAttribute('data-target'));
        if (tgt) tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderStats() {
    var html = '';
    d.stats.forEach(function (s) {
      html +=
        '<div class="stats-item">' +
          '<div class="stats-num" data-final="' + s.value.replace(/[,+]/g, '') + '" data-suffix="' + s.suffix + '">' + s.value + '</div>' +
          '<div class="stats-lbl">' + dc(s, 'label') + '</div>' +
        '</div>';
    });
    document.getElementById('statsStrip').innerHTML = html;
  }

  function renderBanners() {
    var b1t = document.getElementById('bannerTitle');
    var b1s = document.getElementById('bannerSub');
    var b2t = document.getElementById('banner2Title');
    var b2s = document.getElementById('banner2Sub');
    if (b1t) b1t.textContent = dc(d.banners ? d.banners[0] : null, 'title') || (lang === 'cn' ? '全球物流 · 直达交付' : 'Global Logistics · Direct Delivery');
    if (b1s) b1s.textContent = dc(d.banners ? d.banners[0] : null, 'sub') || (lang === 'cn' ? '海运、空运、铁路多式联运，DDP 门到门服务' : 'Sea, air, rail multimodal transport, DDP door-to-door');
    if (b2t) b2t.textContent = dc(d.banners ? d.banners[1] : null, 'title') || (lang === 'cn' ? '品质管控 · 全程可追溯' : 'Quality Control · Fully Traceable');
    if (b2s) b2s.textContent = dc(d.banners ? d.banners[1] : null, 'sub') || (lang === 'cn' ? 'SGS/BV 第三方验货，AQL 国际抽检标准' : 'SGS/BV third-party inspection, AQL international standards');
  }

  function renderAbout() {
    document.getElementById('aboutLabel').textContent = dc(d.about, 'label');
    document.getElementById('aboutHeading').innerHTML = dc(d.about, 'heading').replace(/\n/g, '<br>');
    document.getElementById('aboutP1').textContent = dc(d.about, 'p1');
    document.getElementById('aboutP2').textContent = dc(d.about, 'p2');
    document.getElementById('aboutBadgeVal').textContent = d.about.badge_val;
    document.getElementById('aboutBadgeLbl').textContent = dc(d.about, 'badge_lbl');

    var aboutImg = document.getElementById('aboutImg');
    if (d.about.image && aboutImg) {
      aboutImg.innerHTML = '<img src="' + d.about.image + '" alt="' + dc(d.about, 'label') + '" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-xl)">';
    }

    var ctaBtn = document.getElementById('aboutCta');
    ctaBtn.textContent = dc(d.about, 'cta');
    ctaBtn.href = '#contact';

    var ch = '';
    d.about.checks.forEach(function (c) {
      ch += '<div class="about-check"><span class="about-check-icon">✓</span>' + dc(c, '') + '</div>';
    });
    document.getElementById('aboutChecks').innerHTML = ch;
  }

  function renderServices() {
    document.getElementById('serviceLabel').textContent = dc(d.services, 'label');
    document.getElementById('serviceTitle').textContent = dc(d.services, 'title');
    document.getElementById('serviceSubtitle').textContent = dc(d.services, 'subtitle');

    var html = '';
    d.services.items.forEach(function (s, idx) {
      html +=
        '<div class="svc-card delay-' + ((idx % 6) + 1) + '">' +
          '<span class="svc-num">0' + (idx + 1) + '</span>' +
          '<div class="svc-icon">' + s.icon + '</div>' +
          '<div class="svc-title">' + dc(s, 'title') + '</div>' +
          '<div class="svc-desc">' + dc(s, 'desc') + '</div>' +
        '</div>';
    });
    document.getElementById('svcGrid').innerHTML = html;
  }

  function renderProcess() {
    document.getElementById('processLabel').textContent = dc(d.process, 'label');
    document.getElementById('processTitle').textContent = dc(d.process, 'title');
    document.getElementById('processSubtitle').textContent = dc(d.process, 'subtitle');

    var html = '';
    d.process.steps.forEach(function (s, idx) {
      html +=
        '<div class="step delay-' + ((idx % 5) + 1) + '">' +
          '<div class="step-num">' + s.num + '</div>' +
          '<div class="step-title">' + dc(s, 'title') + '</div>' +
          '<div class="step-desc">' + dc(s, 'desc') + '</div>' +
        '</div>';
    });
    document.getElementById('stepsRow').innerHTML = html;
  }

  function renderTestimonials() {
    document.getElementById('testLabel').textContent = dc(d.testimonials, 'label');
    document.getElementById('testTitle').textContent = dc(d.testimonials, 'title');

    var html = '';
    d.testimonials.items.forEach(function (t, idx) {
      html +=
        '<div class="testimonial delay-' + ((idx % 3) + 1) + '">' +
          '<div class="testimonial-stars">' + '★'.repeat(t.stars) + '</div>' +
          '<div class="testimonial-text">"' + dc(t, 'text') + '"</div>' +
          '<div class="testimonial-author">' +
            '<div class="testimonial-avatar">' + t.initial + '</div>' +
            '<div>' +
              '<div class="testimonial-name">' + t.name + '</div>' +
              '<div class="testimonial-role">' + dc(t, 'role') + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
    document.getElementById('testGrid').innerHTML = html;
  }

  function renderPartners() {
    document.getElementById('partnersLabel').textContent = dc(d.partners, 'label');
    document.getElementById('partnersTitle').textContent = dc(d.partners, 'title');

    var track = document.getElementById('partnersTrack');
    var names = d.partners.names;
    var doubled = names.concat(names);
    var html = '';
    doubled.forEach(function (n) {
      html += '<span class="partner-item">' + n + '</span>';
    });
    track.innerHTML = html;
  }

  function renderContact() {
    document.getElementById('contactLabel').textContent = dc(d.contact, 'label');
    document.getElementById('contactTitle').textContent = dc(d.contact, 'title');
    document.getElementById('contactSubtitle').textContent = dc(d.contact, 'subtitle');

    var infoHtml = '<h3>' + (lang === 'cn' ? '联系方式' : 'Get in Touch') + '</h3>';
    d.contact.info_items.forEach(function (item) {
      infoHtml +=
        '<div class="contact-item">' +
          '<div class="contact-item-icon">' + item.icon + '</div>' +
          '<div class="contact-item-body">' +
            '<strong>' + dc(item, 'label') + '</strong>' +
            '<span>' + dc(item, 'value') + '</span>' +
          '</div>' +
        '</div>';
    });
    document.getElementById('contactInfo').innerHTML = infoHtml;
  }

  function renderFooter() {
    var f = d.footer;
    var fhtml = '';
    fhtml += '<div class="footer-col"><h4>GREENLINE</h4><p style="line-height:1.7">' + dc(f, 'about') + '</p></div>';

    fhtml += '<div class="footer-col"><h4>' + dc(f, 'quick_links') + '</h4>';
    d.nav.forEach(function (n) {
      fhtml += '<a href="#' + n.id + '">' + dc(n, '') + '</a>';
    });
    fhtml += '</div>';

    fhtml += '<div class="footer-col"><h4>' + dc(f, 'categories') + '</h4>';
    d.categories.forEach(function (c) {
      fhtml += '<a href="#cat-' + c.id + '">' + dc(c, 'name') + '</a>';
    });
    fhtml += '</div>';

    fhtml += '<div class="footer-col"><h4>' + dc(f, 'contact') + '</h4>';
    fhtml += '<p>' + d.company.email + '</p><p>' + d.company.phone + '</p><p style="white-space:pre-line">' + dc(d.company, 'address') + '</p>';
    fhtml += '</div>';
    document.getElementById('footerGrid').innerHTML = fhtml;

    document.getElementById('footerCopy').textContent = dc(f, 'copy');
  }

  /* ===== Hero 全局搜索：跨分类筛选 ===== */
  function attachHeroSearch() {
    var input = document.getElementById('heroSearch');
    var clearBtn = document.getElementById('heroSearchClear');
    var countEl = document.getElementById('heroSearchCount');
    if (!input) return;

    function applyFilter() {
      var q = input.value.toLowerCase().trim();
      var cards = document.querySelectorAll('#categorySections .prod-card');
      if (q) {
        // 搜索时展开所有 extra，避免匹配项被隐藏
        cards.forEach(function (card) { card.style.display = ''; });
        var count = 0;
        cards.forEach(function (card) {
          var text = card.textContent.toLowerCase();
          if (text.indexOf(q) === -1) {
            card.classList.add('filtered-out');
          } else {
            card.classList.remove('filtered-out');
            count++;
          }
        });
        if (clearBtn) clearBtn.classList.add('visible');
        countEl.innerHTML = '<strong>' + count + '</strong> ' + (lang === 'cn' ? '个匹配产品' : 'products found');
      } else {
        cards.forEach(function (card) { card.style.display = ''; card.classList.remove('filtered-out'); });
        // 还原未展开的 extra 为隐藏
        document.querySelectorAll('#categorySections .cat-section').forEach(function (sec) {
          var btn = sec.querySelector('.cat-more');
          var expanded = btn && btn.getAttribute('data-expanded') === '1';
          sec.querySelectorAll('.prod-extra').forEach(function (el) {
            el.style.display = expanded ? '' : 'none';
          });
        });
        if (clearBtn) clearBtn.classList.remove('visible');
        countEl.innerHTML = '';
      }
    }

    input.addEventListener('input', applyFilter);
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        applyFilter();
        input.focus();
      });
    }
  }

  /* ===== 产品卡片点击 → 滚动到联系区域（绑定一次） ===== */
  function attachCategoryClick() {
    var wrap = document.getElementById('categorySections');
    if (!wrap) return;
    wrap.addEventListener('click', function (e) {
      var card = e.target.closest('.prod-card');
      if (card) {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ===== Init ===== */
  generateDots();
  renderAll();
  updateNavText();
  setLangBtn();
  attachHeroSearch();
  attachCategoryClick();
  scrollSpy();
})();

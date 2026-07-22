/* ============================================================
   GreenLine — App Engine v4
   单页滚动 · 导航硬编码 · 滚动高亮
   ============================================================ */

(function () {
  'use strict';

  var d = GT_DATA;
  var i18n = GT_I18N;
  var lang = 'cn';
  var activeCat = 'all';

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

  /* ===== 导航中英文映射（对应 HTML 中硬编码的顺序） ===== */
  var navSections = ['home', 'products', 'about', 'service', 'testimonials', 'contact'];

  function updateNavText() {
    var links = document.querySelectorAll('.nav-links a');
    navSections.forEach(function (sectionId, i) {
      if (links[i]) {
        var item = null;
        for (var j = 0; j < d.nav.length; j++) {
          if (d.nav[j].id === sectionId) { item = d.nav[j]; break; }
        }
        if (item) links[i].textContent = dc(item, '');
      }
    });
  }

  /* ===== Language ===== */
  function setLang(l) {
    lang = l;
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    var lb = document.getElementById('langBtn');
    lb.textContent = lang === 'cn' ? 'EN' : '中文';
    lb.title = lang === 'cn' ? 'Switch to English' : '切换到中文';
    updateNavText();
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
  document.querySelectorAll('a, button, .prod-card, .svc-card, .step, .testimonial, .cat-tab, .contact-item').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });

  /* ===== Scroll Spy — 滚动时自动高亮当前区块对应的导航 ===== */
  var sectionIds = ['home', 'statsSec', 'products', 'about', 'service', 'process', 'testimonials', 'partners', 'contact'];
  // 每个区块对应哪个导航项
  var sectionToNav = {
    'home': 'home',
    'statsSec': 'home',
    'products': 'products',
    'about': 'about',
    'service': 'service',
    'process': 'service',
    'testimonials': 'testimonials',
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

  /* ===== Category filter ===== */
  function filterProducts(cat) {
    activeCat = cat;
    document.querySelectorAll('.cat-tab').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
    renderProductCards();
    setTimeout(function () {
      resetReveals();
    }, 100);
  }

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
    renderStats();
    renderProducts();
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

    // CTA 按钮 — 直接用锚点链接跳转
    var ctaBtn = document.getElementById('heroCta');
    ctaBtn.textContent = dc(d.hero, 'cta');
    ctaBtn.href = '#products';

    var contactBtn = document.getElementById('heroContact');
    contactBtn.textContent = dc(d.hero, 'contact');
    contactBtn.href = '#contact';

    document.getElementById('heroScrollText').textContent = lang === 'cn' ? '向下探索更多' : 'Scroll to Explore';
    var shtml = '';
    d.hero.stats.forEach(function (s) {
      shtml += '<div><div class="hero-stat-val">' + s.value + '</div><div class="hero-stat-lbl">' + dc(s, 'label') + '</div></div>';
    });
    document.getElementById('heroStatRow').innerHTML = shtml;
  }

  function renderStats() {
    var html = '';
    d.stats.forEach(function (s) {
      html +=
        '<div class="stats-item">' +
          '<div class="stats-num" data-final="' + s.value.replace(/[,+]/g,'') + '" data-suffix="' + s.suffix + '">' + s.value + '</div>' +
          '<div class="stats-lbl">' + dc(s, 'label') + '</div>' +
        '</div>';
    });
    document.getElementById('statsStrip').innerHTML = html;
  }

  function renderProducts() {
    document.getElementById('productLabel').textContent = lang === 'cn' ? '产品中心' : 'Products';
    document.getElementById('productTitle').textContent = lang === 'cn' ? '精选产品' : 'Featured Products';
    document.getElementById('productSubtitle').textContent = lang === 'cn'
      ? '覆盖六大品类，2,000+ 优质产品，满足您的多元采购需求'
      : '6 major categories, 2,000+ quality products for all your sourcing needs';

    var catHtml = '<button class="cat-tab active" data-cat="all">' + t('viewAll') + '</button>';
    d.categories.forEach(function (c) {
      catHtml += '<button class="cat-tab" data-cat="' + c.id + '">' + dc(c, 'name') + '</button>';
    });
    document.getElementById('catTabs').innerHTML = catHtml;

    document.querySelectorAll('.cat-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterProducts(this.getAttribute('data-cat'));
      });
    });
    renderProductCards();
  }

  function renderProductCards() {
    var filtered = activeCat === 'all'
      ? d.products
      : d.products.filter(function (p) { return p.category === activeCat; });

    var html = '';
    if (filtered.length === 0) {
      html = '<div style="grid-column:1/-1;text-align:center;padding:80px;color:var(--c-text-muted);font-size:1.1rem;">' +
        (lang === 'cn' ? '暂无该分类产品' : 'No products in this category') + '</div>';
    }
    filtered.forEach(function (p, idx) {
      var cat = d.categories.find(function (c) { return c.id === p.category; });
      var catName = cat ? dc(cat, 'name') : '';
      html +=
        '<div class="prod-card delay-' + ((idx % 6) + 1) + '" data-cat="' + p.category + '">' +
          '<div class="prod-card-img-wrap">' +
            '<div class="prod-card-img-placeholder">' + (cat ? cat.icon : '📦') + '</div>' +
            '<div class="prod-card-overlay">' +
              '<div class="prod-card-quick">' + dc(d.hero, 'cta') + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="prod-card-body">' +
            '<span class="prod-card-cat">' + catName + '</span>' +
            '<div class="prod-card-name">' + dc(p, 'name') + '</div>' +
            '<div class="prod-card-desc">' + dc(p, 'desc') + '</div>' +
            '<div class="prod-card-row">' +
              '<span class="prod-card-moq">' + (lang === 'cn' ? '起订：' : 'MOQ: ') + '<strong>' + p.moq + '</strong></span>' +
              '<div class="prod-card-arrow">→</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });
    document.getElementById('prodGrid').innerHTML = html;
  }

  function renderAbout() {
    document.getElementById('aboutLabel').textContent = dc(d.about, 'label');
    document.getElementById('aboutHeading').innerHTML = dc(d.about, 'heading').replace(/\n/g, '<br>');
    document.getElementById('aboutP1').textContent = dc(d.about, 'p1');
    document.getElementById('aboutP2').textContent = dc(d.about, 'p2');
    document.getElementById('aboutBadgeVal').textContent = d.about.badge_val;
    document.getElementById('aboutBadgeLbl').textContent = dc(d.about, 'badge_lbl');

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

    var f = d.contact.form;
    document.getElementById('lblName').textContent = dc(f, 'name');
    document.getElementById('lblEmail').textContent = dc(f, 'email');
    document.getElementById('lblPhone').textContent = dc(f, 'phone');
    document.getElementById('lblMsg').textContent = dc(f, 'msg');
    document.getElementById('fSubmit').textContent = dc(f, 'submit');
  }

  function renderFooter() {
    var f = d.footer;
    var fhtml = '';
    fhtml += '<div class="footer-col"><h4>GREENLINE</h4><p style="line-height:1.7">' + dc(f, 'about') + '</p></div>';

    // 页脚快速链接 — 直接用锚点跳转
    fhtml += '<div class="footer-col"><h4>' + dc(f, 'quick_links') + '</h4>';
    d.nav.forEach(function (n) {
      fhtml += '<a href="#' + n.id + '">' + dc(n, '') + '</a>';
    });
    fhtml += '</div>';

    // 页脚分类 — 链接到产品区块
    fhtml += '<div class="footer-col"><h4>' + dc(f, 'categories') + '</h4>';
    d.categories.forEach(function (c) {
      fhtml += '<a href="#products">' + dc(c, 'name') + '</a>';
    });
    fhtml += '</div>';

    fhtml += '<div class="footer-col"><h4>' + dc(f, 'contact') + '</h4>';
    fhtml += '<p>' + d.company.email + '</p><p>' + d.company.phone + '</p><p style="white-space:pre-line">' + dc(d.company, 'address') + '</p>';
    fhtml += '</div>';
    document.getElementById('footerGrid').innerHTML = fhtml;

    document.getElementById('footerCopy').textContent = dc(f, 'copy');
  }

  /* ===== Init ===== */
  generateDots();
  renderAll();
})();

/* ==========================================================================
   Demi's Tasty — script.js
   GSAP ScrollTrigger scroll animation + tial interaction patterns
   ========================================================================== */

/* ── Product database ─────────────────────────────────────────────────── */
const PRODUCTS = {
  mango_100:   { tag:'100% Pure Juice',  name:'Mango Drink',         desc:'Rich, thick Alfonso mango pulp blended to a golden, pulpy elixir. Naturally sweet, high in fiber, and packed with vitamins.', img:'assets/brand_pack_0005.png',   fruit:'assets/fruta-manga.webp',       color:'#ffa800', energy:62,  carbs:14.2, sugars:13.1, protein:0.8, vitc:22 },
  litchi_100:  { tag:'100% Pure Juice',  name:'Litchi',        desc:'Sweet and aromatic litchi juice, crafted from fresh litchi pulp. Loaded with Vitamin C and natural antioxidants.', img:'assets/brand_pack_0015.png',   fruit:'assets/litchi_about.png',       color:'#ff6b9d', energy:55,  carbs:13.5, sugars:12.8, protein:0.5, vitc:25 },
  mix_fruit_100:{ tag:'100% Pure Juice', name:'Fruit Aam Rus',     desc:'A rich and luscious traditional Indian mango pulp drink made from organic orchard mangoes, sterilized and aseptic packed.', img:'assets/brand_pack_0017.png',   fruit:'assets/mixed_fruit.png',        color:'#f77f00', energy:52,  carbs:12.5, sugars:11.2, protein:0.6, vitc:30 },
  apple_100:   { tag:'100% Pure Juice',  name:'Apple',         desc:'Crisp Himalayan apples, pressed whole for a refreshing, mildly tart juice packed with antioxidants.',              img:'assets/brand_pack_0016.png',      fruit:'assets/fruta-maca.webp',        color:'#2ec4b6', energy:46,  carbs:11.4, sugars:10.8, protein:0.3, vitc:8  },
  passion_100: { tag:'100% Pure Juice',  name:'Passion Fruit', desc:'Tropical passion fruit, tangy and aromatic. High in antioxidants and naturally refreshing.',                       img:'assets/caixinha-maracuja-100.webp',fruit:'assets/fruta-maracuja.webp',    color:'#ffd166', energy:54,  carbs:13.1, sugars:11.4, protein:0.9, vitc:18 },
  guava_100:   { tag:'100% Pure Juice',  name:'Guava',         desc:'Fragrant guavas blended to a smooth, tropical nectar. One of the highest natural sources of Vitamin C.',           img:'assets/brand_pack_0018.png',      fruit:'assets/product-card-goiaba.webp',color:'#ff477e',energy:51,  carbs:11.9, sugars:10.2, protein:0.8, vitc:95 },
  peach_100:   { tag:'100% Pure Juice',  name:'Peach',         desc:'Soft, juicy peaches pressed into a delicate, fragrant juice. Naturally low in calories, naturally high in taste.',  img:'assets/caixinha-pessego-100.webp', fruit:'assets/fruta-pessego.webp',     color:'#ffb347', energy:48,  carbs:11.5, sugars:10.2, protein:0.5, vitc:6  },
  cashew_100:  { tag:'100% Pure Juice',  name:'Cashew',        desc:'Authentic cashew apple juice — a uniquely Indian tropical flavour, naturally sweet with a pleasant tart note.',     img:'assets/caixinha-caju-100.webp',   fruit:'assets/fruta-caju.webp',        color:'#e8900c', energy:44,  carbs:10.8, sugars:9.7,  protein:0.6, vitc:32 },
  cola_soda:   { tag:'Sparkling Sodas',  name:'Demi Cola',     desc:'A refreshing craft cola made with real spices, natural caramel and a fizzy kick. No artificial flavors.',           img:'assets/brand_wa_38.png',          fruit:'assets/lemon.png',              color:'#333333', energy:38,  carbs:9.4,  sugars:8.2,  protein:0.1, vitc:0  },
  zeera_soda:  { tag:'Sparkling Sodas',  name:'Zeera Masala',  desc:'Iconic cumin-spiced sparkling soda — a desi classic carbonated with natural CO₂ and real zeera extract.',           img:'assets/brand_wa_37.png',          fruit:'assets/lemon.png',              color:'#e8c377', energy:32,  carbs:7.8,  sugars:6.4,  protein:0.1, vitc:2  },
  orange_soda: { tag:'Sparkling Sodas',  name:'Fizzy Orange',  desc:'Bursting citrus punch with real orange juice and fine bubbles. Sunshine in a bottle.',                              img:'assets/brand_wa_37_1.png',        fruit:'assets/fruta-laranja.webp',     color:'#f77f00', energy:35,  carbs:8.4,  sugars:7.5,  protein:0.2, vitc:12 },
  lime_soda:   { tag:'Sparkling Sodas',  name:'Lime Refresh',  desc:'Crisp lime and mint soda for the ultimate thirst quench. Zero artificial flavors.',                                 img:'assets/brand_wa_22_8.png',        fruit:'assets/lemon.png',              color:'#52b788', energy:28,  carbs:6.6,  sugars:5.8,  protein:0.1, vitc:15 },
  tasty_milk:  { tag:'Organic Milk',     name:'Tasty Milk',    desc:'Full-cream organic milk from grass-fed cows. Rich, creamy and packed with calcium and essential vitamins.',        img:'assets/tasty_milk.png',           fruit:'assets/fresh_milk_1_center.png',color:'#0f6321', energy:68,  carbs:4.8,  sugars:4.8,  protein:3.4, vitc:1  },
  cream_milk:  { tag:'Organic Milk',     name:'Fresh Cream',   desc:'Low-fat fresh milk with a silky texture. Ideal for daily consumption, cooking and your morning chai.',             img:'assets/brand_milk_fresh.png',     fruit:'assets/fresh_milk_1_left.png',  color:'#0f6321', energy:42,  carbs:4.7,  sugars:4.7,  protein:3.1, vitc:1  },
  creamy_milk: { tag:'Organic Milk',     name:'Creamy Milk',   desc:'Toned milk with a balanced fat profile. Smooth, wholesome and naturally sweet — the family favourite.',            img:'assets/brand_milk_1.png',         fruit:'assets/fresh_milk_1_right.png', color:'#ffa800', energy:58,  carbs:4.9,  sugars:4.9,  protein:3.2, vitc:1  },
  cocoa_pb:    { tag:'Smoothie Bowl',    name:'Cocoa Peanut Butter', desc:'Creamy cocoa and rich peanut butter blended with bananas and oats. A high-protein, delicious, and energy-boosting meal bowl.', img:'assets/cocoa_peanut_butter.png', fruit:'assets/cocoa_peanut_butter.png', color:'#7d4f3b', energy:320, carbs:42.5, sugars:18.2, protein:12.4, vitc:2 },
  mango_bowl:  { tag:'Smoothie Bowl',    name:'Mango Smoothie Bowl', desc:'Fresh Alphonso mango purée blended with tropical fruits and oats, topped with premium nuts and seeds.', img:'assets/mango_smoothie_bowl.png', fruit:'assets/mango_smoothie_bowl.png', color:'#ffa800', energy:240, carbs:38.2, sugars:22.5, protein:6.8, vitc:64 },
  berry_blast: { tag:'Cold Pressed Juice', name:'Berry Blast',     desc:'A vibrant blend of strawberries, blueberries, raspberries, and a splash of apple. Loaded with antioxidants and natural energy.', img:'assets/berry_blast_bottle.png', fruit:'assets/berry_blast_bottle.png', color:'#c0392b', energy:110, carbs:24.8, sugars:19.4, protein:1.2, vitc:48 },
  acai_bowl:   { tag:'Smoothie Bowl',    name:'Acai Berry Smoothie Bowl', desc:'Antioxidant-rich organic acai berries blended with banana and apple, topped with premium sliced almonds, chia seeds, and fresh fruits.', img:'assets/acai_berry_bowl.png', fruit:'assets/acai_berry_bowl.png', color:'#6c5ce7', energy:280, carbs:36.4, sugars:15.8, protein:7.2, vitc:30 },
};

/* Simulated store data */
const STORES = [
  { name: 'Nature\'s Basket, Andheri', address: 'Andheri West, Mumbai', timing: 'Mon–Sun: 8am–10pm' },
  { name: 'Dmart, Bandra', address: 'Bandra West, Mumbai', timing: 'Mon–Sun: 7am–11pm' },
  { name: 'Hypercity, Powai', address: 'Powai, Mumbai', timing: 'Mon–Sun: 9am–10pm' },
  { name: 'Le Marché, Juhu', address: 'Juhu, Mumbai', timing: 'Mon–Sun: 8am–9pm' },
  { name: 'Health Basket, Versova', address: 'Versova, Mumbai', timing: 'Mon–Sat: 9am–8pm' },
  { name: 'Godrej Nature\'s Basket, Goregaon', address: 'Goregaon West, Mumbai', timing: 'Mon–Sun: 8am–10pm' },
];

/* ════════════════════════════════════════════════════════════════════════
   DOM READY
════════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initOffcanvas();
  initProductTabs();
  initSwipers();
  initProductCards();
  initPopupClose();
  initScrollCartonAnimation();
  initOndeMango();
  initWaveMarquee();
  initCursorFollower();
  initScrollProgress();
  initJourneyAnimations();
  initProcessSlider();
  initWhyDemis();
  initTestimonials();
});

/* ── 1. Header scroll behaviour ─────────────────────────────────────── */
function initHeader() {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    document.querySelector('.main-header')?.classList.toggle('has-scrolled', cur > 10);
    if (cur > lastScroll && cur > 80)
      document.body.classList.add('has-sticky-header');
    else
      document.body.classList.remove('has-sticky-header');
    lastScroll = cur <= 0 ? 0 : cur;
  }, { passive: true });
}

/* ── 2. Offcanvas mobile menu ───────────────────────────────────────── */
function initOffcanvas() {
  const toggle  = document.querySelector('.offcanvas-toggle');
  const canvas  = document.querySelector('.offcanvas');
  const overlay = document.querySelector('.popup-overlay');
  if (!toggle || !canvas) return;

  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('has-offcanvas');
    overlay.style.opacity = open ? '1' : '';
    overlay.style.pointerEvents = open ? 'auto' : '';
  });
  overlay.addEventListener('click', () => {
    document.body.classList.remove('has-offcanvas');
    overlay.style.opacity = '';
    overlay.style.pointerEvents = '';
    document.querySelectorAll('.app-popup.is-open').forEach(closePopup);
  });
  canvas.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('has-offcanvas');
    overlay.style.opacity = '';
    overlay.style.pointerEvents = '';
  }));
}

/* ── 3. Product Tabs ─────────────────────────────────────────────────── */
function initProductTabs() {
  const tabs       = document.querySelectorAll('.products-tab');
  const categories = document.querySelectorAll('.products-category');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target    = tab.dataset.target;
      const bgColor   = tab.dataset.categoryBgColor   || '#0f6321';
      const hvrColor  = tab.dataset.categoryHoverColor || '#ffa800';

      tabs.forEach(t => t.classList.remove('products-tab--active'));
      tab.classList.add('products-tab--active');

      categories.forEach(c => c.classList.remove('products-category--active'));
      const activeCat = document.querySelector(target);
      if (activeCat) {
        activeCat.classList.add('products-category--active');
        activeCat.style.setProperty('--category-bg-color',    bgColor);
        activeCat.style.setProperty('--category-hover-color', hvrColor);
        activeCat.querySelector('.swiper')?.swiper?.update();
      }
    });
  });

  // Set defaults
  const firstTab = document.querySelector('.products-tab--active');
  if (firstTab) {
    const cat = document.querySelector(firstTab.dataset.target);
    if (cat) {
      cat.style.setProperty('--category-bg-color',    firstTab.dataset.categoryBgColor    || '#0f6321');
      cat.style.setProperty('--category-hover-color', firstTab.dataset.categoryHoverColor || '#ffa800');
    }
  }
}

/* ── 4. Swipers ──────────────────────────────────────────────────────── */
function initSwipers() {
  document.querySelectorAll('.products-category .swiper').forEach(el => {
    new Swiper(el, {
      grabCursor: true,
      loop: false,
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        0:    { slidesPerView: 1.25, spaceBetween: 0 },
        480:  { slidesPerView: 1.6,  spaceBetween: 0 },
        640:  { slidesPerView: 2.2,  spaceBetween: 0 },
        768:  { slidesPerView: 2.8,  spaceBetween: 0 },
        1024: { slidesPerView: 3.5,  spaceBetween: 0 },
        1280: { slidesPerView: 4,    spaceBetween: 0 },
        1440: { slidesPerView: 4.5,  spaceBetween: 0 },
      },
    });
  });
}

/* ── 5. Product cards → popup ────────────────────────────────────────── */
function initProductCards() {
  document.addEventListener('click', e => {
    // Check if new Crowd Favorites static card is clicked
    const cfCard = e.target.closest('.cf-card');
    if (cfCard) {
      openProductPopup(cfCard.dataset.productId);
      return;
    }
    const plusBtn = e.target.closest('.product-card__button-plus');
    if (plusBtn) {
      e.stopPropagation();
      const p = PRODUCTS[plusBtn.dataset.productId];
      dmToast(p ? `${p.name} added to your box! 🛒` : 'Added! 🛒');
      return;
    }
    const cardBtn = e.target.closest('.product-card__button');
    if (cardBtn) openProductPopup(cardBtn.dataset.productId);
  });
}

/* ── 6. Product popup ────────────────────────────────────────────────── */
function openProductPopup(id) {
  const p      = PRODUCTS[id];
  const popup  = document.getElementById('product-popup');
  const overlay= document.querySelector('.popup-overlay');
  if (!p || !popup) return;

  popup.querySelector('.product-popup__tag').textContent   = p.tag;
  popup.querySelector('.product-popup__title').textContent = p.name;
  popup.querySelector('.product-popup__desc').textContent  = p.desc;
  popup.querySelector('.product-popup__img').src           = p.img;
  popup.querySelector('.product-popup__fruit-img').src     = p.fruit;
  popup.querySelector('.product-popup__circle-bg').style.background = p.color + '22';

  document.getElementById('pp-energy').textContent  = p.energy  + ' kcal';
  document.getElementById('pp-carbs').textContent   = p.carbs   + ' g';
  document.getElementById('pp-sugars').textContent  = p.sugars  + ' g';
  document.getElementById('pp-protein').textContent = p.protein + ' g';
  document.getElementById('pp-vitc').textContent    = p.vitc    + ' mg';

  const buyBtn = popup.querySelector('.product-popup__buy');
  if (buyBtn) {
    const wrapper = buyBtn.querySelector('.btn-wrapper');
    if (wrapper) wrapper.style.background = p.color;
    buyBtn.onclick = () => { dmToast(`${p.name} added! 🛒`); closePopup(popup); };
  }

  document.body.classList.add('has-popup-active');
  popup.classList.add('is-open');
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'auto';
  document.body.style.overflow = 'hidden';
}

function closePopup(popup) {
  popup.classList.remove('is-open');
  document.body.classList.remove('has-popup-active');
  const overlay = document.querySelector('.popup-overlay');
  if (overlay && !document.body.classList.contains('has-offcanvas')) {
    overlay.style.opacity = '';
    overlay.style.pointerEvents = '';
  }
  document.body.style.overflow = '';
}

function initPopupClose() {
  document.querySelectorAll('.app-popup__close-button').forEach(btn => {
    btn.addEventListener('click', () => closePopup(btn.closest('.app-popup')));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
      document.querySelectorAll('.app-popup.is-open').forEach(closePopup);
  });
}

/* ════════════════════════════════════════════════════════════════════════
   7. TETRA PAK SCROLL ANIMATION (Screenshots 2→3→4→5)
════════════════════════════════════════════════════════════════════════ */
function initScrollCartonAnimation() {
  const carton = document.getElementById('sn-carton');
  const pin    = document.getElementById('sn-carton-pin');
  const section= document.querySelector('.suco-natural');
  if (!carton || !section) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    /* Panel 1 → 2: tilt */
    ScrollTrigger.create({
      trigger: '#sn-panel-2',
      start: 'top 55%',
      end:   'bottom 45%',
      onEnter: () => {
        gsap.to(carton, { rotation: -10, x: '-8%', y: '4%', duration: 1, ease: 'back.out(1.2)' });
      },
      onLeaveBack: () => {
        gsap.to(carton, { rotation: 0, x: 0, y: 0, duration: .9, ease: 'back.out(1.2)' });
      }
    });

    /* Panel 3: carton goes behind fruit photo */
    ScrollTrigger.create({
      trigger: '#sn-panel-3',
      start: 'top 65%',
      onEnter: () => {
        gsap.set(pin, { zIndex: 3 });
        gsap.to(carton, { opacity: .35, duration: .5, ease: 'power2.out' });
      },
      onLeaveBack: () => {
        gsap.set(pin, { zIndex: 5 });
        gsap.to(carton, { opacity: 1, duration: .5, ease: 'power2.out' });
      }
    });

    /* Panel 4: carton returns */
    ScrollTrigger.create({
      trigger: '#sn-panel-4',
      start: 'top 65%',
      onEnter: () => {
        gsap.set(pin, { zIndex: 5 });
        gsap.to(carton, { rotation: 0, x: 0, y: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)' });
      },
      onLeaveBack: () => {
        gsap.set(pin, { zIndex: 3 });
        gsap.to(carton, { opacity: .35, duration: .5 });
      }
    });

    /* Subtle float */
    gsap.to(carton, { y: '+=18', repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' });

  } else {
    /* Fallback: IntersectionObserver */
    const panels = document.querySelectorAll('.sn-panel');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        carton.classList.toggle('sn-carton--tilted', id === 'sn-panel-2');
        carton.classList.toggle('sn-carton--hidden',  id === 'sn-panel-3');
        if (id === 'sn-panel-4') carton.classList.remove('sn-carton--tilted','sn-carton--hidden');
      });
    }, { threshold: 0.5 });
    panels.forEach(p => io.observe(p));
  }
}

/* ── 8. "Where to Find" mango float ──────────────────────────────────── */
function initOndeMango() {
  const img = document.getElementById('onde-mango');
  if (!img) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { img.classList.toggle('is-visible', e.isIntersecting); });
  }, { threshold: 0.3 });
  io.observe(img);
}

/* ── 9. Wave marquee JS scroll ─────────────────────────────────────── */
function initWaveMarquee() {
  const marquees = document.querySelectorAll('.wave-marquee-inner');
  marquees.forEach(el => {
    // The CSS animation handles it. This fn is a hook for future interactivity.
    el.addEventListener('mouseenter', () => {
      el.querySelector('.wave-marquee__group').style.animationPlayState = 'paused';
    });
    el.addEventListener('mouseleave', () => {
      el.querySelector('.wave-marquee__group').style.animationPlayState = 'running';
    });
  });
}

/* ── 10. Store search ───────────────────────────────────────────────── */
window.dmSearchStore = function() {
  const input   = document.getElementById('store-search-input');
  const results = document.getElementById('store-results');
  if (!results) return;

  const query = (input?.value || '').toLowerCase().trim();

  // Filter stores by query (or show all if empty)
  const matches = query
    ? STORES.filter(s => s.name.toLowerCase().includes(query) || s.address.toLowerCase().includes(query))
    : STORES;

  if (matches.length === 0) {
    results.innerHTML = '<p style="color:#aaa;font-size:.85rem;margin-top:.75rem;">No stores found near that location. Try another area.</p>';
    return;
  }

  results.innerHTML = matches.map(s => `
    <div class="store-result-item">
      <strong>${s.name}</strong>
      <span>${s.address}</span>
      <small>${s.timing}</small>
    </div>
  `).join('');

  dmToast(`Found ${matches.length} store${matches.length > 1 ? 's' : ''} near you! 📍`);
};

/* ── 11. Toast system ─────────────────────────────────────────────────── */
window.dmToast = function(message) {
  const container = document.getElementById('dm-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'dm-toast';
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};

window.showToast = window.dmToast;

/* ── 12. Cursor Follower Fruit ────────────────────────────────────────── */
function initCursorFollower() {
  const mango  = document.getElementById('cursorMango');
  const orange = document.getElementById('cursorOrange');
  if (!mango || !orange) return;

  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let mouseX = -200, mouseY = -200;
  let mangoX = -200, mangoY = -200;
  let orangeX = -200, orangeY = -200;
  let active = false;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!active) {
      active = true;
      document.body.classList.add('cursor-active');
      // Jump both fruits to mouse immediately on first move
      mangoX = mouseX;
      mangoY = mouseY;
      orangeX = mouseX;
      orangeY = mouseY;
    }
  });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => {
    active = false;
    document.body.classList.remove('cursor-active');
  });
  document.addEventListener('mouseenter', () => {
    if (mouseX > 0) {
      active = true;
      document.body.classList.add('cursor-active');
    }
  });

  // GSAP ticker for smooth 60fps following
  const MANGO_EASE  = 0.15;  // follows closely
  const ORANGE_EASE = 0.08;  // follows with more lag
  const ORANGE_OFFSET_X = 35;
  const ORANGE_OFFSET_Y = 30;

  gsap.ticker.add(() => {
    if (!active) return;

    // Lerp mango toward mouse
    mangoX += (mouseX - mangoX) * MANGO_EASE;
    mangoY += (mouseY - mangoY) * MANGO_EASE;

    // Lerp orange toward mouse with offset
    orangeX += ((mouseX + ORANGE_OFFSET_X) - orangeX) * ORANGE_EASE;
    orangeY += ((mouseY + ORANGE_OFFSET_Y) - orangeY) * ORANGE_EASE;

    // Apply positions
    mango.style.left  = mangoX + 'px';
    mango.style.top   = mangoY + 'px';
    orange.style.left  = orangeX + 'px';
    orange.style.top   = orangeY + 'px';
  });
}

/* ── 13. Scroll Progress Bar ──────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── 14. Journey Scroll Animations (GSAP ScrollTrigger) ──────────────── */
function initJourneyAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const journey = document.getElementById('journey');
  const journeyProgress = document.getElementById('journeyProgress');
  if (!journey) return;

  // Show/hide journey progress indicator
  ScrollTrigger.create({
    trigger: journey,
    start: 'top bottom',
    end: 'bottom top',
    onEnter: () => journeyProgress?.classList.add('visible'),
    onLeave: () => journeyProgress?.classList.remove('visible'),
    onEnterBack: () => journeyProgress?.classList.add('visible'),
    onLeaveBack: () => journeyProgress?.classList.remove('visible'),
  });

  // Update active step in journey progress
  const screens = ['jFarm', 'jFruits', 'jProcess', 'jReveal'];
  screens.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => updateJourneyStep(i + 1),
      onEnterBack: () => updateJourneyStep(i + 1),
    });
  });

  function updateJourneyStep(step) {
    document.querySelectorAll('.jp-step').forEach(s => {
      const sStep = parseInt(s.dataset.step);
      s.classList.toggle('jp-step--active', sStep <= step);
    });
  }

  // FARM — parallax content + zoom fruit on scroll
  const farmContent = document.querySelector('.farm-content');
  const farmZoom = document.getElementById('farmZoomFruit');
  if (farmContent) {
    gsap.from(farmContent, {
      y: 60, opacity: 0,
      scrollTrigger: { trigger: '#jFarm', start: 'top 80%', end: 'top 20%', scrub: 1 }
    });
  }
  if (farmZoom) {
    gsap.to(farmZoom, {
      scale: 1, opacity: 1,
      scrollTrigger: { trigger: '#jFarm', start: '60% center', end: 'bottom center', scrub: 1 }
    });
    // Set initial gsap state
    gsap.set(farmZoom, { scale: 0, opacity: 0, xPercent: -50 });
  }

  // FRUITS — content entrance
  gsap.from('.fruits-content', {
    y: 50, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '#jFruits', start: 'top 70%' }
  });

  // PROCESS — card entrance
  gsap.from('.process-visual-card', {
    y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger: '#jProcess', start: 'top 70%' }
  });

  // REVEAL — bottle entrance
  const revealBottle = document.getElementById('revealBottle');
  if (revealBottle) {
    ScrollTrigger.create({
      trigger: '#jReveal',
      start: 'top 60%',
      onEnter: () => revealBottle.classList.add('visible'),
    });
  }

  // Reveal text animation
  gsap.from('.reveal-text', {
    y: 40, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '#jReveal', start: 'top 40%' }
  });
}

/* ── 15. Before/After Process Slider ──────────────────────────────────── */
function initProcessSlider() {
  const slider = document.getElementById('processSlider');
  const afterEl = document.getElementById('processSliderAfter');
  const handle = document.getElementById('processSliderHandle');
  if (!slider || !afterEl || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = (x / rect.width) * 100;
    afterEl.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
  }

  slider.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); });
  document.addEventListener('mousemove', (e) => { if (isDragging) updateSlider(e.clientX); });
  document.addEventListener('mouseup', () => { isDragging = false; });

  // Touch support
  slider.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchmove', (e) => { if (isDragging) updateSlider(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchend', () => { isDragging = false; });
}

/* ── 16. Why Demi's — Flavour selector + Counters ─────────────────────── */
function initWhyDemis() {
  // Flavour selector buttons
  document.querySelectorAll('.flavour-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.why-card');
      parent.querySelectorAll('.flavour-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const colour = btn.dataset.colour;
      if (colour) {
        parent.style.borderColor = colour;
        parent.style.boxShadow = `0 20px 50px ${colour}22`;
      }
    });
  });

  // Animated counters — Intersection Observer
  const counters = document.querySelectorAll('.why-counter__num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Mini timeline animation on hygiene card hover
  const hygieneCard = document.querySelector('[data-theme="hygiene"]');
  if (hygieneCard) {
    hygieneCard.addEventListener('mouseenter', () => {
      const steps = hygieneCard.querySelectorAll('.mini-step');
      steps.forEach((s, i) => {
        setTimeout(() => s.classList.add('mini-step--done'), i * 300);
      });
    });
    hygieneCard.addEventListener('mouseleave', () => {
      const steps = hygieneCard.querySelectorAll('.mini-step');
      steps.forEach((s, i) => {
        if (i > 0) s.classList.remove('mini-step--done');
      });
    });
  }
}

/* ── 17. Testimonials Swiper ──────────────────────────────────────────── */
function initTestimonials() {
  const el = document.querySelector('.testimonials-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.testi-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

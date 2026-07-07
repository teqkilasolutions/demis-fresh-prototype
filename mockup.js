/* ══════════════════════════════════════════════════════════════════════════
   Demi's Tasty — mockup.js
   Interactive logic for Mixer, Mood Matcher, Story Timeline, and Particles
   ══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize subsystems
  initNavbar();
  initVideoHeroSlider();
  initParallaxHero();
  // initBentoInteractions();
  // initInteractiveMixer();
  // initJourneyCraft();
  // initMoodMatcher();
  // initKidsRange();
  // initCursorParticles();
  initNewsletterToast();
  initHeroSlider();
  initFavoritesFilter();
  initIngredientsShowcase();
  initTestimonialsSlider();
  initStoreLocatorMap();
  initFooterContactForm();
});

/* ── 0. Video Background Hero Slider ────────────────────────────────── */
function initVideoHeroSlider() {
  const sliderEl = document.querySelector('.hero-video-slider');
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero-slider-next',
      prevEl: '.hero-slider-prev',
    },
    pagination: {
      el: '.hero-slider-pagination',
      clickable: true,
    },
  });
}

/* ── 1. Navbar Scroll & Mobile Menu Toggle ──────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const active = menu.classList.toggle('active');
      toggle.classList.toggle('active');
      if (active) {
        toggle.querySelectorAll('span')[0].style.transform = 'translateY(7.5px) rotate(45deg)';
        toggle.querySelectorAll('span')[1].style.opacity = '0';
        toggle.querySelectorAll('span')[2].style.transform = 'translateY(-7.5px) rotate(-45deg)';
      } else {
        toggle.querySelectorAll('span')[0].style.transform = 'none';
        toggle.querySelectorAll('span')[1].style.opacity = '1';
        toggle.querySelectorAll('span')[2].style.transform = 'none';
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.querySelectorAll('span')[0].style.transform = 'none';
        toggle.querySelectorAll('span')[1].style.opacity = '1';
        toggle.querySelectorAll('span')[2].style.transform = 'none';
      });
    });
  }
}

/* ── 2. Redesigned Centered Hero Parallax Interaction ───────────────── */
function initParallaxHero() {
  const heroSection = document.getElementById('hero-sec');
  const bgText = document.querySelector('.hero-bg-text');
  const mainPack = document.querySelector('.pack-image-wrapper');
  
  // Sliced Mango elements (Sub-step 3)
  const fBL = document.getElementById('fruit-bl');
  const fTR = document.getElementById('fruit-tr');
  const fUL = document.getElementById('fruit-ul');
  const fMR = document.getElementById('fruit-mr');
  const fBR = document.getElementById('fruit-br');
  const fTL = document.getElementById('fruit-tl');
  const fBC = document.getElementById('fruit-bc');

  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      if (heroSection.classList.contains('is-transitioning')) return;
      const rect = heroSection.getBoundingClientRect();
      const xVal = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const yVal = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      // Background text shifts in opposite direction
      if (bgText) {
        gsap.to(bgText, {
          x: xVal * -12,
          y: yVal * -12,
          duration: 0.6,
          ease: 'power1.out'
        });
      }

      // Foreground pack shifts in the cursor's direction
      if (mainPack) {
        gsap.to(mainPack, {
          x: xVal * 15,
          y: yVal * 15,
          duration: 0.5,
          ease: 'power1.out'
        });
      }

      // Foreground large blurred bottom-left mango (drifts the most)
      if (fBL) {
        gsap.to(fBL, {
          x: xVal * 35,
          y: yVal * 35,
          rotate: xVal * 3,
          duration: 0.7,
          ease: 'power1.out'
        });
      }

      // Foreground medium blurred top-right mango
      if (fTR) {
        gsap.to(fTR, {
          x: xVal * 28,
          y: yVal * 28,
          rotate: xVal * -2,
          duration: 0.7,
          ease: 'power1.out'
        });
      }

      // Midground upper-left mango half
      if (fUL) {
        gsap.to(fUL, {
          x: xVal * -18,
          y: yVal * -18,
          rotate: xVal * 2,
          duration: 0.8,
          ease: 'power1.out'
        });
      }

      // Midground mid-right mango half
      if (fMR) {
        gsap.to(fMR, {
          x: xVal * -14,
          y: yVal * -14,
          rotate: xVal * -3,
          duration: 0.8,
          ease: 'power1.out'
        });
      }

      // Background bottom-right slice
      if (fBR) {
        gsap.to(fBR, {
          x: xVal * 8,
          y: yVal * 8,
          rotate: xVal * 4,
          duration: 0.9,
          ease: 'power1.out'
        });
      }

      // Background top-left slice
      if (fTL) {
        gsap.to(fTL, {
          x: xVal * -10,
          y: yVal * -10,
          rotate: xVal * -4,
          duration: 0.9,
          ease: 'power1.out'
        });
      }

      // Bottom-center duplicate wet mangoes (replaces Shop Now button)
      if (fBC) {
        gsap.to(fBC, {
          x: xVal * 18,
          y: yVal * 18,
          rotate: xVal * 3,
          duration: 0.75,
          ease: 'power1.out'
        });
      }
    }, { passive: true });

    // Smooth reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
      if (heroSection.classList.contains('is-transitioning')) return;
      if (bgText) gsap.to(bgText, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
      if (mainPack) gsap.to(mainPack, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
      if (fBL) gsap.to(fBL, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fTR) gsap.to(fTR, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fUL) gsap.to(fUL, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fMR) gsap.to(fMR, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fBR) gsap.to(fBR, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fTL) gsap.to(fTL, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
      if (fBC) gsap.to(fBC, { x: 0, y: 0, rotate: 0, duration: 0.9, ease: 'power2.out' });
    });
  }
}

/* ── 3. Bento Grid Hover Colors ─────────────────────────────────────── */
function initBentoInteractions() {
  const cards = document.querySelectorAll('.bento-card');

  cards.forEach(card => {
    const color = card.getAttribute('data-color');
    if (!color) return;

    card.addEventListener('mouseenter', () => {
      document.documentElement.style.setProperty('--theme-accent', color);
      document.documentElement.style.setProperty('--theme-accent-soft', color + '0f');
    });

    card.addEventListener('mouseleave', () => {
      // Reset back to primary organic green
      document.documentElement.style.setProperty('--theme-accent', '#0F6321');
      document.documentElement.style.setProperty('--theme-accent-soft', 'rgba(15, 99, 33, 0.08)');
    });
  });
}

/* ── 4. The Interactive Drink Mixer Logic ───────────────────────────── */
function initInteractiveMixer() {
  const ingredientButtons = document.querySelectorAll('.ingredient-btn');
  const liquidContainer = document.getElementById('liquid-stages');
  const resetBtn = document.getElementById('mixer-reset');
  const orderBtn = document.getElementById('mix-order-btn');
  const mixNameEl = document.getElementById('custom-mix-name');
  
  // Scorecard stats
  const calEl = document.getElementById('mix-cal');
  const sugarEl = document.getElementById('mix-sugar');
  const fiberEl = document.getElementById('mix-fiber');
  const vitcEl = document.getElementById('mix-vitc');
  const volumeEl = document.getElementById('mix-volume');

  let currentMix = []; // Array of { flavor, color, amount }
  const MAX_VOLUME = 300; // Total bottle size in ml
  const PORTION = 100; // Increment step

  // Add click handler to buttons
  ingredientButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const flavor = btn.getAttribute('data-flavor');
      const color = btn.getAttribute('data-color');
      const cal = parseFloat(btn.getAttribute('data-cal')) || 0;
      const sugar = parseFloat(btn.getAttribute('data-sugar')) || 0;
      const fiber = parseFloat(btn.getAttribute('data-fiber')) || 0;
      const vitc = parseFloat(btn.getAttribute('data-vitc')) || 0;
      const label = btn.textContent.trim().split(' ')[1];

      // Calculate total volume
      const currentVolume = currentMix.reduce((acc, item) => acc + item.amount, 0);

      if (currentVolume >= MAX_VOLUME) {
        showToast("Oops! Your Demi's bottle is completely full. 🍾");
        return;
      }

      // Add to mix
      currentMix.push({ flavor, label, color, amount: PORTION, cal, sugar, fiber, vitc });
      btn.classList.add('active-flavor');
      
      // Animate addition
      updateMixVisuals();
      showToast(`${btn.textContent.trim().split(' ').slice(1).join(' ')} added to bottle!`);
    });
  });

  function updateMixVisuals() {
    // Clear visual layers
    liquidContainer.innerHTML = '';

    let totalCal = 0;
    let totalSugar = 0;
    let totalFiber = 0;
    let totalVitC = 0;
    let totalVol = 0;
    let mixNames = [];

    currentMix.forEach(item => {
      totalCal += (item.cal * item.amount) / 100;
      totalSugar += (item.sugar * item.amount) / 100;
      totalFiber += (item.fiber * item.amount) / 100;
      totalVitC += (item.vitc * item.amount) / 100;
      totalVol += item.amount;
      mixNames.push(item.label);

      // Create liquid element
      const layer = document.createElement('div');
      layer.className = 'liquid-layer';
      layer.style.backgroundColor = item.color;
      layer.style.height = `${(item.amount / MAX_VOLUME) * 100}%`;
      liquidContainer.appendChild(layer);
    });

    // Update Stats
    calEl.textContent = `${totalCal.toFixed(0)} kcal`;
    sugarEl.textContent = `${totalSugar.toFixed(1)} g`;
    fiberEl.textContent = `${totalFiber.toFixed(1)} g`;
    vitcEl.textContent = `${totalVitC.toFixed(0)} mg`;
    volumeEl.textContent = `${totalVol} / ${MAX_VOLUME} ml`;

    // Update Mix Name
    if (mixNames.length === 0) {
      mixNameEl.textContent = 'Pure Water';
    } else {
      // Remove duplicates from names
      const uniqueNames = [...new Set(mixNames)];
      if (uniqueNames.length === 1) {
        mixNameEl.textContent = `Pure ${uniqueNames[0]}`;
      } else if (uniqueNames.length === 2) {
        mixNameEl.textContent = `${uniqueNames.join(' ')} Blend`;
      } else {
        mixNameEl.textContent = `${uniqueNames[0]} ${uniqueNames[1]} Fusion`;
      }
    }

    // Enable/Disable Order Button
    if (totalVol >= MAX_VOLUME) {
      orderBtn.disabled = false;
      orderBtn.textContent = "Order My Mix!";
    } else {
      orderBtn.disabled = true;
      orderBtn.textContent = `Fill ${MAX_VOLUME - totalVol}ml more`;
    }
  }

  // Reset Mixer
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentMix = [];
      ingredientButtons.forEach(btn => btn.classList.remove('active-flavor'));
      updateMixVisuals();
      showToast("Mixer reset. Time for a new creation! 🧪");
    });
  }

  // Buy custom mix
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      showToast(`🎉 Order Placed! We are blending your custom "${mixNameEl.textContent}" right now!`);
      setTimeout(() => {
        currentMix = [];
        ingredientButtons.forEach(btn => btn.classList.remove('active-flavor'));
        updateMixVisuals();
      }, 1000);
    });
  }
}

/* ── 5. Scroll-Driven Craft Journey (Oatly style tabs) ──────────────── */
function initJourneyCraft() {
  const steps = document.querySelectorAll('.j-step');
  const slides = document.querySelectorAll('.journey-slide');

  if (steps.length === 0 || slides.length === 0) return;

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const stepIdx = parseInt(step.getAttribute('data-step'));

      // Update Nav Steps
      steps.forEach((s, idx) => {
        s.classList.toggle('active', idx === stepIdx);
      });

      // Fade out current slide, fade in clicked slide
      slides.forEach((slide, idx) => {
        if (idx === stepIdx) {
          slide.classList.add('active');
          gsap.fromTo(slide.querySelector('.slide-content'), 
            { opacity: 0, x: -30 }, 
            { opacity: 1, x: 0, duration: 0.6 }
          );
          gsap.fromTo(slide.querySelector('.slide-visual'), 
            { opacity: 0, scale: 0.95 }, 
            { opacity: 1, scale: 1, duration: 0.6 }
          );
        } else {
          slide.classList.remove('active');
        }
      });
    });
  });

  // Optional: Hook to ScrollTrigger for automatic transition on scroll
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate reveal bottle in step 4
    gsap.from('.reveal-bottle-mock', {
      scrollTrigger: {
        trigger: '#js-3',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      },
      scale: 0.7,
      rotation: -10,
      opacity: 0.5
    });
  }
}

/* ── 6. Mood Matcher Recommender ────────────────────────────────────── */
function initMoodMatcher() {
  const moodBtns = document.querySelectorAll('.mood-btn');
  const recommendationBox = document.getElementById('recommendation-box');
  
  // Elements inside recommendation box
  const recImg = document.getElementById('rec-img');
  const recTitle = document.getElementById('rec-title');
  const recMsg = document.getElementById('rec-msg');
  const recBuyBtn = document.getElementById('rec-buy-btn');

  // Drink database mappings
  const drinks = {
    zeera_soda: { name: 'Zeera Masala Soda', img: 'assets/brand_wa_37.png', color: '#C4A27A' },
    berry_blast: { name: 'Berry Blast Smoothie', img: 'assets/berry_blast_bottle.png', color: '#C0392B' },
    mango_100: { name: 'Alphonso Mango', img: 'assets/brand_pack_0005.png', color: '#FFA800' },
    tasty_milk: { name: 'Tasty Milk', img: 'assets/tasty_milk.png', color: '#0F6321' }
  };

  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      moodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const drinkKey = btn.getAttribute('data-drink');
      const message = btn.getAttribute('data-msg');
      const data = drinks[drinkKey];

      if (!data) return;

      // Update recommendation details
      recImg.src = data.img;
      recTitle.textContent = data.name;
      recMsg.textContent = message;

      // Display recommendation
      recommendationBox.style.display = 'block';
      gsap.fromTo(recommendationBox, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 });

      recBuyBtn.onclick = () => {
        showToast(`${data.name} added to your box! 🛒`);
      };
    });
  });
}

/* ── 7. Playful Kids Section ────────────────────────────────────────── */
function initKidsRange() {
  const badges = document.querySelectorAll('.kid-badge');
  const packImg = document.getElementById('kids-pack-dynamic');
  const factBubble = document.getElementById('kids-fact');

  badges.forEach(badge => {
    badge.addEventListener('click', () => {
      badges.forEach(b => b.classList.remove('active'));
      badge.classList.add('active');

      const imgPath = badge.getAttribute('data-img');
      const fact = badge.getAttribute('data-fact');

      // Animate pack update
      gsap.to(packImg, {
        opacity: 0,
        x: 30,
        duration: 0.25,
        onComplete: () => {
          packImg.src = imgPath;
          gsap.to(packImg, { opacity: 1, x: 0, duration: 0.4, ease: 'back.out(1.2)' });
        }
      });

      // Update fact bubble
      factBubble.textContent = fact;
      gsap.fromTo(factBubble, { scale: 0.9 }, { scale: 1, duration: 0.35, ease: 'back.out' });
    });
  });
}

/* ── 8. Swiper Slider ────────────────────────────────────────────────── */
function initSwiperSlider() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
}

/* ── 9. Interactive Counters ─────────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target')) || 0;
        
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  counters.forEach(c => observer.observe(c));

  function animateCounter(el, target) {
    if (target === 0) {
      el.textContent = "0";
      return;
    }
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // cubic-ease-out formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(easeProgress * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  }
}

/* ── 10. Desktop Cursor Floating Particles ──────────────────────────── */
function initCursorParticles() {
  const particle1 = document.getElementById('c-fruit-1');
  const particle2 = document.getElementById('c-fruit-2');

  if (!particle1 || !particle2) return;

  // Disable on mobile/touch screens
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let mouseX = -100, mouseY = -100;
  let px1 = -100, py1 = -100;
  let px2 = -100, py2 = -100;
  let active = false;

  document.body.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!active) {
      active = true;
      document.body.classList.add('cursor-active');
      px1 = mouseX; py1 = mouseY;
      px2 = mouseX; py2 = mouseY;
    }
  });

  document.body.addEventListener('mouseleave', () => {
    active = false;
    document.body.classList.remove('cursor-active');
  });

  // Smooth lerp follow using requestAnimationFrame
  function tick() {
    if (active) {
      px1 += (mouseX - px1) * 0.12;
      py1 += (mouseY - py1) * 0.12;

      px2 += ((mouseX + 25) - px2) * 0.07;
      py2 += ((mouseY + 20) - py2) * 0.07;

      particle1.style.left = `${px1}px`;
      particle1.style.top = `${py1}px`;

      particle2.style.left = `${px2}px`;
      particle2.style.top = `${py2}px`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── 11. Toast Notifications ────────────────────────────────────────── */
window.showToast = function(message) {
  const wrapper = document.getElementById('toast-wrapper');
  if (!wrapper) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  wrapper.appendChild(toast);

  // Trigger browser paint to allow transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  // Remove toast after duration
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
};

/* ── 12. Newsletter Toast ────────────────────────────────────────────── */
function initNewsletterToast() {
  const form = document.getElementById('subscribe-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('sub-email');
      showToast(`Thanks! We've subscribed ${email.value} to Demi's updates. 🍊`);
      email.value = '';
    });
  }
}

/* ── 13. Centered Hero Slider Navigation (Steps) ─────────────────────── */
function initHeroSlider() {
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const heroSection = document.getElementById('hero-sec');
  if (!arrowLeft || !arrowRight || !heroSection) return;

  const flavors = [
    {
      name: "MANGO",
      packImg: "assets/mango_pack_transparent.png",
      textColor: "#B84A0E",
      bgActiveId: "bg-mango",
      bgInactiveId: "bg-litchi",
      fruits: {
        leaf: "assets/custom_mango_leaf.png",
        branch: "assets/custom_mango_branch.png",
        wet: "assets/custom_mango_wet.png"
      }
    },
    {
      name: "LITCHI",
      packImg: "assets/litchi_pack.png",
      textColor: "#9C2241",
      bgActiveId: "bg-litchi",
      bgInactiveId: "bg-mango",
      fruits: {
        leaf: "assets/litchi_single.png",
        branch: "assets/litchi_peeled.png",
        wet: "assets/litchi_pair.png"
      }
    }
  ];
  let currentIdx = 0;
  let isAnimating = false;

  function changeSlide(nextIdx, direction) {
    if (isAnimating) return;
    isAnimating = true;
    heroSection.classList.add('is-transitioning');

    const currentFlavor = flavors[currentIdx];
    const nextFlavor = flavors[nextIdx];

    const packMango = document.getElementById('hero-pack-mango');
    const packLitchi = document.getElementById('hero-pack-litchi');
    const packWrapper = document.querySelector('.pack-image-wrapper');
    const bgText = document.querySelector('.hero-bg-text');
    const fruits = document.querySelectorAll('.parallax-fruit');

    // Text exit/entry direction
    const textExitX = direction === 'next' ? -150 : 150;
    const textEntryX = direction === 'next' ? 150 : -150;

    // Carton spin direction (subtle, fast, rotateY: 24deg)
    const spinY = direction === 'next' ? 24 : -24;
    const spinZ = direction === 'next' ? 3 : -3;

    const activePack = (currentIdx === 0) ? packMango : packLitchi;
    const incomingPack = (currentIdx === 0) ? packLitchi : packMango;

    // Create a single, unified, rapid, and ultra-smooth timeline
    const tl = gsap.timeline({
      onComplete: () => {
        currentIdx = nextIdx;
        isAnimating = false;
        heroSection.classList.remove('is-transitioning');
      }
    });

    // 1. Twist parent wrapper slightly and scale it up
    tl.to(packWrapper, {
      rotateY: spinY,
      rotateZ: spinZ,
      scale: 1.05,
      duration: 0.22,
      ease: 'power2.inOut'
    });

    // 2. Cross-fade pack opacities
    tl.to(activePack, {
      opacity: 0,
      duration: 0.22,
      ease: 'power2.inOut'
    }, '<');

    tl.to(incomingPack, {
      opacity: 1,
      duration: 0.22,
      ease: 'power2.inOut'
    }, '<');

    // 3. Slide out background text
    tl.to(bgText, {
      x: textExitX,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in'
    }, '<');

    // 4. Shrink fruits
    fruits.forEach((f) => {
      tl.to(f, {
        scale: 0,
        opacity: 0,
        duration: 0.18,
        ease: 'power2.in'
      }, '<');
    });

    // 5. Swap text and layout configurations instantly at the peak of the twist
    tl.add(() => {
      if (bgText) {
        bgText.textContent = nextFlavor.name;
        bgText.style.color = nextFlavor.textColor;
      }
      
      // Swap positions
      if (nextIdx === 0) { // Mango incoming
        packMango.style.position = "relative";
        packMango.style.left = "auto";
        packMango.style.transform = "none";
        packMango.style.zIndex = "3";

        packLitchi.style.position = "absolute";
        packLitchi.style.top = "0";
        packLitchi.style.left = "50%";
        packLitchi.style.transform = "translateX(-50%)";
        packLitchi.style.zIndex = "2";
      } else { // Litchi incoming
        packLitchi.style.position = "relative";
        packLitchi.style.left = "auto";
        packLitchi.style.transform = "none";
        packLitchi.style.zIndex = "3";

        packMango.style.position = "absolute";
        packMango.style.top = "0";
        packMango.style.left = "50%";
        packMango.style.transform = "translateX(-50%)";
        packMango.style.zIndex = "2";
      }

      // Swap fruit image sources
      const fl = nextFlavor.fruits;
      document.getElementById('fruit-bl').src = fl.leaf;
      document.getElementById('fruit-br').src = fl.leaf;
      document.getElementById('fruit-tl').src = fl.branch;
      document.getElementById('fruit-tr').src = fl.branch;
      document.getElementById('fruit-mr').src = fl.wet;
      document.getElementById('fruit-bc').src = fl.wet;

      // Cross-fade backgrounds
      const activeBg = document.getElementById(nextFlavor.bgActiveId);
      const inactiveBg = document.getElementById(nextFlavor.bgInactiveId);
      if (activeBg) activeBg.style.opacity = "1";
      if (inactiveBg) inactiveBg.style.opacity = "0";
    });

    // 6. Twist back to 0, slide in text, explode fruits
    tl.to(packWrapper, {
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });

    tl.fromTo(bgText,
      { x: textEntryX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
      '<'
    );

    fruits.forEach((f, i) => {
      tl.fromTo(f,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: f.classList.contains('fruit-bottom-left') ? 0.8 : 1, duration: 0.45, ease: 'back.out(1.2)' },
        `<+${i * 0.03}`
      );
    });
  }

  arrowLeft.addEventListener('click', () => {
    const nextIdx = (currentIdx - 1 + flavors.length) % flavors.length;
    changeSlide(nextIdx, 'prev');
  });

  arrowRight.addEventListener('click', () => {
    const nextIdx = (currentIdx + 1) % flavors.length;
    changeSlide(nextIdx, 'next');
  });
}

/* ── 12. Crowd Favorites Category Filter ───────────────────────────── */
function initFavoritesFilter() {
  const tabs = document.querySelectorAll('.favorites-categories .category-tab');
  const cards = document.querySelectorAll('#favorites-sec .product-card');

  if (tabs.length === 0 || cards.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Don't rerun if already active
      if (tab.classList.contains('active')) return;

      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      const targetCategory = tab.getAttribute('data-target');

      // Use GSAP for smooth, staggered fade transitions
      if (window.gsap) {
        gsap.to(cards, {
          opacity: 0,
          y: 15,
          duration: 0.2,
          stagger: 0.03,
          onComplete: () => {
            cards.forEach(card => {
              const cardCat = card.getAttribute('data-category');
              if (cardCat === targetCategory) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
            // Fade in matching cards
            const matchingCards = Array.from(cards).filter(card => card.getAttribute('data-category') === targetCategory);
            gsap.fromTo(matchingCards, 
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, clearProps: 'opacity,transform' }
            );
          }
        });
      } else {
        // Fallback simple toggle
        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cardCat === targetCategory) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      }
    });
  });
}

/* ── 13. Interactive Ingredients Showcase Parallax & Hotspots ───────── */
function initIngredientsShowcase() {
  const section = document.getElementById('ingredients-sec');
  const centralImg = document.querySelector('#ingredients-sec .ingr-center-img');
  const texts = document.querySelectorAll('#ingredients-sec .ingr-text');

  if (!section || !centralImg) return;

  // Mousemove Parallax Effect
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const xVal = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const yVal = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    // Central pack responds slightly
    gsap.to(centralImg, {
      x: xVal * 12,
      y: yVal * 12,
      rotate: xVal * 1.5,
      duration: 0.6,
      ease: 'power1.out'
    });

    // Texts float parallax in opposite direction
    texts.forEach((text, idx) => {
      const shiftX = xVal * -15 * (1 + (idx % 2) * 0.5);
      const shiftY = yVal * -15 * (1 + Math.floor(idx / 2) * 0.5);
      gsap.to(text, {
        x: shiftX,
        y: shiftY,
        duration: 0.6,
        ease: 'power1.out'
      });
    });
  }, { passive: true });

  // Reset visual on mouse leave
  section.addEventListener('mouseleave', () => {
    gsap.to(centralImg, { x: 0, y: 0, rotate: 0, duration: 0.8, ease: 'power2.out' });
    texts.forEach(text => {
      gsap.to(text, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
    });
  });
}

/* ── 14. Testimonials Slider Carousel ────────────────────────────────── */
function initTestimonialsSlider() {
  const slides = document.querySelectorAll('#testimonials-sec .testimonial-slide');
  const prevBtn = document.querySelector('#testimonials-sec .test-nav-btn.prev');
  const nextBtn = document.querySelector('#testimonials-sec .test-nav-btn.next');

  if (slides.length === 0 || !prevBtn || !nextBtn) return;

  let currentIdx = 0;
  let isAnimating = false;

  function showSlide(nextIdx, direction) {
    if (isAnimating || nextIdx === currentIdx) return;
    isAnimating = true;

    const currentSlide = slides[currentIdx];
    const nextSlide = slides[nextIdx];

    const slideOutY = direction === 'next' ? -20 : 20;
    const slideInY = direction === 'next' ? 20 : -20;

    const tl = gsap.timeline({
      onComplete: () => {
        currentIdx = nextIdx;
        isAnimating = false;
      }
    });

    // Slide out current
    tl.to(currentSlide, {
      opacity: 0,
      y: slideOutY,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        currentSlide.classList.remove('active');
      }
    });

    // Set next slide starting state
    tl.set(nextSlide, {
      y: slideInY,
      opacity: 0
    });

    // Slide in next
    tl.add(() => {
      nextSlide.classList.add('active');
    });

    tl.to(nextSlide, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power2.out'
    });
  }

  prevBtn.addEventListener('click', () => {
    const idx = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(idx, 'prev');
  });

  nextBtn.addEventListener('click', () => {
    const idx = (currentIdx + 1) % slides.length;
    showSlide(idx, 'next');
  });
}

/* ── 15. Locate Us Store Locator & Styled Map ────────────────────────── */
function initStoreLocatorMap() {
  const mapEl = document.getElementById('map');
  const checkBtn = document.getElementById('check-pincode-btn');
  const inputEl = document.getElementById('pincode-input');
  const resultEl = document.getElementById('availability-result');

  if (!mapEl) return;

  // 1. Initialize Map with Leaflet.js (Centered on New Delhi NCR Hub)
  const map = L.map('map', {
    center: [28.6139, 77.2090],
    zoom: 11,
    scrollWheelZoom: false
  });

  // Load Custom styled maps from CartoDB (cream-like Positron)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom vector leaf-style green pin icon
  const greenPinIcon = L.divIcon({
    className: 'custom-leaflet-pin',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  // Add Outlet Markers
  const locations = [
    { name: "Demi's Outlet - Connaught Place", coords: [28.6304, 77.2177], desc: "SuperMart Central Metro. Open 9 AM - 11 PM." },
    { name: "Demi's Retailer - Saket Hub", coords: [28.5244, 77.2066], desc: "Select Citywalk Level 1. Open 10 AM - 10 PM." },
    { name: "Demi's Gurgaon Store", coords: [28.4138, 77.0422], desc: "Sector 49 Market Place. Open 8 AM - 10 PM." }
  ];

  locations.forEach(loc => {
    L.marker(loc.coords, { icon: greenPinIcon })
      .addTo(map)
      .bindPopup(`<strong>${loc.name}</strong><br><span style="font-size: 0.85rem; color: #555;">${loc.desc}</span>`);
  });

  // 2. Pincode Availability Checker Form
  if (checkBtn && inputEl && resultEl) {
    checkBtn.addEventListener('click', () => {
      const code = inputEl.value.trim();

      if (!code) {
        resultEl.className = "availability-status";
        resultEl.textContent = "Please enter a pincode or city name.";
        return;
      }

      // Check standard Delhi/Gurgaon NCR pincodes
      const availableCodes = ["110001", "110017", "122018", "110002", "110020", "122001", "Delhi", "Gurgaon"];
      const isAvailable = availableCodes.some(term => code.toLowerCase().includes(term.toLowerCase()));

      if (isAvailable) {
        resultEl.className = "availability-status available";
        resultEl.innerHTML = `<i class="fas fa-circle-check"></i> Available in your area! 🚚 Delivery in 10-15 mins via Blinkit & Instamart.`;
      } else {
        resultEl.className = "availability-status unavailable";
        resultEl.innerHTML = `<i class="fas fa-circle-xmark"></i> Currently unavailable. We are expanding fast! Sign up to get notified.`;
      }
    });
  }
}

/* ── 16. Footer Contact Form Submission ──────────────────────────────── */
function initFooterContactForm() {
  const form = document.getElementById('footer-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fc-name').value;
      const email = document.getElementById('fc-email').value;
      
      showToast(`Thanks ${name}! We've received your message. We'll reply to ${email} soon! 📩`);
      form.reset();
    });
  }
}


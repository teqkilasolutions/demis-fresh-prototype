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
  initSmoothScroll();
  initMagneticButtons();
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

  // 1. Initialize Map with Leaflet.js (Centered on India)
  const map = L.map('map', {
    center: [22.9734, 78.6569],
    zoom: 5,
    minZoom: 4,
    maxZoom: 8,
    scrollWheelZoom: false
  });

  // Load Custom styled maps from CartoDB (cream-like Positron)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom red pin icons
  const redPinIcon = L.divIcon({
    className: 'red-leaflet-pin',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  const activePinIcon = L.divIcon({
    className: 'red-leaflet-pin pulse active-pin',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  // State data with coordinates and descriptions
  const stateData = {
    ladakh: { name: "Leh Ladakh", coords: [34.1526, 77.5771], desc: "Now available in organic stores and cafes across Leh." },
    jk: { name: "Jammu & Kashmir", coords: [33.7782, 76.5762], desc: "Find us in retail supermarkets in Srinagar and Jammu." },
    hp: { name: "Himachal Pradesh", coords: [31.1048, 77.1734], desc: "Available at local organic farms and shops in Shimla & Manali." },
    punjab: { name: "Punjab", coords: [31.1471, 75.3412], desc: "Stocked across major supermarkets in Ludhiana, Amritsar & Jalandhar." },
    haryana: { name: "Haryana", coords: [29.0588, 76.0856], desc: "Available in retail outlets in Gurugram, Panchkula & Ambala." },
    mp: { name: "Madhya Pradesh", coords: [22.9734, 78.6569], desc: "Available in premium grocery chains in Bhopal, Indore & Gwalior." },
    rajasthan: { name: "Rajasthan", coords: [27.0238, 74.2179], desc: "Find us in retail stores across Jaipur, Udaipur & Jodhpur." },
    gujarat: { name: "Gujarat", coords: [22.2587, 71.1924], desc: "Stocked in organic supermarkets in Ahmedabad, Surat & Vadodara." },
    maharashtra: { name: "Maharashtra", coords: [19.7515, 75.7139], desc: "Find us in wellness & organic stores across Mumbai and Pune." },
    uttarakhand: { name: "Uttarakhand", coords: [30.0668, 79.0193], desc: "Available in retail outlets in Dehradun, Rishikesh & Haridwar." },
    up: { name: "Uttar Pradesh", coords: [26.8467, 80.9462], desc: "Available in supermarkets across Noida, Lucknow, Kanpur & Varanasi." },
    wb: { name: "West Bengal", coords: [22.9868, 87.8550], desc: "Find us in premium stores in Kolkata, Siliguri & Darjeeling." },
    jharkhand: { name: "Jharkhand", coords: [23.6102, 85.2799], desc: "Available in retail stores across Ranchi, Jamshedpur & Dhanbad." },
    bihar: { name: "Bihar", coords: [25.0961, 85.3131], desc: "Stocked in leading retail markets in Patna and Gaya." },
    assam: { name: "Assam", coords: [26.2006, 92.9376], desc: "Now available in tea-estate organic stores and Guwahati supermarkets." }
  };

  function normalizeStateName(name) {
    if (!name) return "";
    const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normalized === "jammuandkashmir" || normalized === "jammuandkashmiri" || normalized === "jandk" || normalized === "jk") return "jk";
    if (normalized === "ladakh" || normalized === "lehladakh") return "ladakh";
    if (normalized === "himachalpradesh") return "hp";
    if (normalized === "punjab") return "punjab";
    if (normalized === "haryana") return "haryana";
    if (normalized === "madhyapradesh") return "mp";
    if (normalized === "rajasthan") return "rajasthan";
    if (normalized === "gujarat") return "gujarat";
    if (normalized === "maharashtra") return "maharashtra";
    if (normalized === "uttarakhand") return "uttarakhand";
    if (normalized === "uttarpradesh" || normalized === "up") return "up";
    if (normalized === "westbengal") return "wb";
    if (normalized === "jharkhand") return "jharkhand";
    if (normalized === "bihar") return "bihar";
    if (normalized === "assam") return "assam";
    return "";
  }

  const markers = {};
  const stateItems = document.querySelectorAll('.state-item');

  // Helper to add marker for a state
  function addMarkerForState(key, coords) {
    if (markers[key]) return; // Avoid duplicates
    const loc = stateData[key];
    const marker = L.marker(coords, { icon: redPinIcon }).addTo(map);
    marker.bindPopup(`<strong>${loc.name}</strong><br><span style="font-size: 0.85rem; color: #555;">${loc.desc}</span>`);
    
    markers[key] = marker;

    // Handle marker click to also highlight the list item
    marker.on('click', () => {
      document.querySelectorAll('.state-item').forEach(item => item.classList.remove('active'));
      
      const item = document.querySelector(`.state-item[data-state="${key}"]`);
      if (item) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      
      Object.keys(markers).forEach(k => {
        markers[k].setIcon(redPinIcon);
      });
      marker.setIcon(activePinIcon);
      
      map.setView(coords, 6);
    });
  }

  // Load India States boundaries GeoJSON
  let geojsonLayer = null;
  fetch('assets/india-states.geojson')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(geoData => {
      geojsonLayer = L.geoJSON(geoData, {
        style: function(feature) {
          const stateName = feature.properties.ST_NM || feature.properties.state_name || feature.properties.NAME_1;
          const normalized = normalizeStateName(stateName);
          const isAvailable = !!normalized;

          return {
            fillColor: isAvailable ? '#016130' : '#ffffff',
            fillOpacity: isAvailable ? 0.15 : 0.02,
            color: isAvailable ? '#016130' : '#dddddd',
            weight: isAvailable ? 1.5 : 1,
            opacity: 1
          };
        },
        onEachFeature: function(feature, layer) {
          const stateName = feature.properties.ST_NM || feature.properties.state_name || feature.properties.NAME_1;
          const normalized = normalizeStateName(stateName);

          if (normalized && stateData[normalized]) {
            const loc = stateData[normalized];
            
            // Calculate center dynamically from boundaries to ensure perfect accuracy
            const center = layer.getBounds().getCenter();
            loc.coords = [center.lat, center.lng];

            // Add marker at exact boundary center
            addMarkerForState(normalized, loc.coords);

            layer.bindPopup(`<strong>${loc.name}</strong><br><span style="font-size: 0.85rem; color: #555;">${loc.desc}</span>`);
            
            layer.on({
              mouseover: function(e) {
                recordUserInteraction();
                const targetLayer = e.target;
                targetLayer.setStyle({
                  fillOpacity: 0.3,
                  weight: 2,
                  fillColor: '#016130'
                });
                
                // Highlight state list item on left
                stateItems.forEach(i => i.classList.remove('active'));
                const item = document.querySelector(`.state-item[data-state="${normalized}"]`);
                if (item) item.classList.add('active');

                // Trigger map marker popup
                Object.keys(markers).forEach(k => {
                  markers[k].setIcon(redPinIcon);
                });
                const marker = markers[normalized];
                if (marker) {
                  marker.setIcon(activePinIcon);
                  marker.openPopup();
                }

                // Draw manual jump from Haridwar on hover
                animateJumpingArc(haridwarCoords, loc.coords, normalized);
              },
              mouseout: function(e) {
                if (geojsonLayer) geojsonLayer.resetStyle(e.target);
              },
              click: function(e) {
                recordUserInteraction();
                map.fitBounds(e.target.getBounds(), { padding: [30, 30] });
                animateJumpingArc(haridwarCoords, loc.coords, normalized);
              }
            });
          }
        }
      }).addTo(map);
      // Start the jumping flow loop once GeoJSON loads
      startFlowLoop();
    })
    .catch(err => {
      console.warn("Could not load states GeoJSON, falling back to static markers:", err);
      // Fallback: Add static markers if GeoJSON fails
      Object.keys(stateData).forEach(key => {
        addMarkerForState(key, stateData[key].coords);
      });
      startFlowLoop();
    });

  // Connect state list on the left with markers on the map
  stateItems.forEach(item => {
    const stateKey = item.getAttribute('data-state');
    if (!stateKey || !stateData[stateKey]) return;

    item.addEventListener('mouseenter', () => {
      recordUserInteraction();
      stateItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Style all lines back to normal, but make the current one highlight
      Object.keys(supplyLines).forEach(k => {
        if (supplyLines[k]) {
          supplyLines[k].setStyle({ color: '#b84a0e', weight: 2, opacity: 0.45 });
        }
      });
      if (supplyLines[stateKey]) {
        supplyLines[stateKey].setStyle({ color: '#016130', weight: 4.5, opacity: 1 });
      }

      Object.keys(markers).forEach(k => {
        markers[k].setIcon(redPinIcon);
      });
      
      const marker = markers[stateKey];
      if (marker) {
        marker.setIcon(activePinIcon);
        marker.openPopup();
        map.panTo(stateData[stateKey].coords);
      }
      
      // Animate manual pulse on the pre-drawn line
      animateManualPulse(stateKey);
    });

    item.addEventListener('click', () => {
      recordUserInteraction();
      stateItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      Object.keys(supplyLines).forEach(k => {
        if (supplyLines[k]) {
          supplyLines[k].setStyle({ color: '#b84a0e', weight: 2, opacity: 0.45 });
        }
      });
      if (supplyLines[stateKey]) {
        supplyLines[stateKey].setStyle({ color: '#016130', weight: 4.5, opacity: 1 });
      }

      Object.keys(markers).forEach(k => {
        markers[k].setIcon(redPinIcon);
      });
      
      const marker = markers[stateKey];
      if (marker) {
        marker.setIcon(activePinIcon);
        marker.openPopup();
        map.setView(stateData[stateKey].coords, 7);
      }

      // Animate manual pulse on the pre-drawn line
      animateManualPulse(stateKey);
    });
  });

  // ── Interactive Map Jumping Arcs & Factory Code ──
  const haridwarCoords = [29.9457, 78.1642];
  let isUserInteracting = false;
  let supplyLines = {};
  let activeArcMarkers = [];
  let loopTimeout = null;
  let interactionResetTimeout = null;

  // Add Special pulsing factory marker at Haridwar
  const factoryIcon = L.divIcon({
    className: 'gold-factory-pin',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const factoryMarker = L.marker(haridwarCoords, { icon: factoryIcon }).addTo(map);
  factoryMarker.bindPopup(`<strong>Demi's Sourcing Plant & Factory</strong><br><span style="font-size: 0.85rem; color: #555;">Haridwar, Uttarakhand. Sourcing and distribution center.</span>`);

  function getBezierPoints(start, end, numPoints = 30) {
    const points = [];
    const midLat = (start[0] + end[0]) / 2;
    const midLng = (start[1] + end[1]) / 2;
    const dLat = end[0] - start[0];
    const dLng = end[1] - start[1];
    
    // Add curvature perpendicular to the straight line
    const heightFactor = 0.25;
    const controlLat = midLat + dLng * heightFactor;
    const controlLng = midLng - dLat * heightFactor;
    const control = [controlLat, controlLng];
    
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const lat = Math.pow(1 - t, 2) * start[0] + 2 * (1 - t) * t * control[0] + Math.pow(t, 2) * end[0];
      const lng = Math.pow(1 - t, 2) * start[1] + 2 * (1 - t) * t * control[1] + Math.pow(t, 2) * end[1];
      points.push([lat, lng]);
    }
    return points;
  }

  // Draw all static supply lines radiating out from Haridwar
  function drawAllSupplyLines() {
    Object.keys(supplyLines).forEach(k => {
      if (supplyLines[k]) supplyLines[k].remove();
    });
    supplyLines = {};
    
    Object.keys(stateData).forEach(key => {
      const start = haridwarCoords;
      const end = stateData[key].coords;
      const points = getBezierPoints(start, end, 30);
      
      const line = L.polyline(points, {
        color: '#b84a0e',
        weight: 2,
        opacity: 0.45,
        className: 'jumping-arc-path'
      }).addTo(map);
      
      supplyLines[key] = line;
    });
  }

  // Animate a single manual pulse from Haridwar to target state
  function animateManualPulse(key) {
    const start = haridwarCoords;
    const end = stateData[key].coords;
    const points = getBezierPoints(start, end, 30);
    
    const movingMarker = L.circleMarker(start, {
      radius: 6,
      color: '#016130', // Green color for user selection flow
      fillColor: '#016130',
      fillOpacity: 1,
      weight: 1
    }).addTo(map);
    
    activeArcMarkers.push(movingMarker);

    let step = 0;
    function animate() {
      if (step < points.length) {
        movingMarker.setLatLng(points[step]);
        step++;
        requestAnimationFrame(animate);
      } else {
        movingMarker.remove();
        activeArcMarkers = activeArcMarkers.filter(m => m !== movingMarker);
        
        // Trigger arrival!
        const marker = markers[key];
        if (marker) {
          marker.setIcon(activePinIcon);
          marker.openPopup();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  // Send waves of supply pulses from Haridwar to all states simultaneously
  function sendSupplyPulses() {
    if (isUserInteracting) return;
    
    Object.keys(stateData).forEach(key => {
      const start = haridwarCoords;
      const end = stateData[key].coords;
      const points = getBezierPoints(start, end, 30);
      
      const movingMarker = L.circleMarker(start, {
        radius: 5,
        color: '#b84a0e',
        fillColor: '#b84a0e',
        fillOpacity: 0.9,
        weight: 1
      }).addTo(map);
      
      activeArcMarkers.push(movingMarker);

      let step = 0;
      function animate() {
        if (isUserInteracting) {
          movingMarker.remove();
          return;
        }
        if (step < points.length) {
          movingMarker.setLatLng(points[step]);
          step++;
          requestAnimationFrame(animate);
        } else {
          movingMarker.remove();
          activeArcMarkers = activeArcMarkers.filter(m => m !== movingMarker);
          
          // Flash destination pin briefly
          const marker = markers[key];
          if (marker) {
            marker.setIcon(activePinIcon);
            setTimeout(() => {
              // Reset back to standard pin if user has not set it active
              const item = document.querySelector(`.state-item[data-state="${key}"]`);
              if (!item || !item.classList.contains('active')) {
                marker.setIcon(redPinIcon);
              }
            }, 1200);
          }
        }
      }
      requestAnimationFrame(animate);
    });
  }

  function recordUserInteraction() {
    isUserInteracting = true;
    activeArcMarkers.forEach(m => m.remove());
    activeArcMarkers = [];
    
    // Set all lines to normal weight, except if one is active
    Object.keys(supplyLines).forEach(k => {
      if (supplyLines[k]) {
        supplyLines[k].setStyle({ color: '#b84a0e', weight: 2, opacity: 0.45 });
      }
    });

    clearTimeout(interactionResetTimeout);
    interactionResetTimeout = setTimeout(() => {
      isUserInteracting = false;
      // Reset line styles to default supply flow
      Object.keys(supplyLines).forEach(k => {
        if (supplyLines[k]) {
          supplyLines[k].setStyle({ color: '#b84a0e', weight: 2, opacity: 0.45 });
        }
      });
    }, 10000);
  }

  function startFlowLoop() {
    // Draw all lines immediately
    drawAllSupplyLines();
    
    // Trigger initial pulses with a short delay
    setTimeout(() => {
      sendSupplyPulses();
    }, 1000);
    
    // Repeat waves every 7 seconds
    loopTimeout = setInterval(() => {
      if (!isUserInteracting) {
        sendSupplyPulses();
      }
    }, 7000);
  }

  // 2. State Availability Checker Form
  if (checkBtn && inputEl && resultEl) {
    checkBtn.addEventListener('click', () => {
      const code = inputEl.value.trim();

      if (!code) {
        resultEl.className = "availability-status";
        resultEl.textContent = "Please enter a state name or city.";
        return;
      }

      const query = code.toLowerCase();
      let matchedState = null;
      let matchedKey = null;

      // Find match in state names or descriptions
      Object.keys(stateData).forEach(key => {
        const state = stateData[key];
        if (state.name.toLowerCase().includes(query) || state.desc.toLowerCase().includes(query) || query.includes(state.name.toLowerCase())) {
          matchedState = state;
          matchedKey = key;
        }
      });

      if (matchedState) {
        resultEl.className = "availability-status available";
        resultEl.innerHTML = `<i class="fas fa-circle-check"></i> Available in ${matchedState.name}! Find us in premium grocery chains & supermarkets.`;
        
        // Highlight on map & list
        stateItems.forEach(i => i.classList.remove('active'));
        const item = document.querySelector(`.state-item[data-state="${matchedKey}"]`);
        if (item) {
          item.classList.add('active');
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        Object.keys(markers).forEach(k => {
          markers[k].setIcon(redPinIcon);
        });
        const marker = markers[matchedKey];
        if (marker) {
          marker.setIcon(activePinIcon);
          marker.openPopup();
          map.setView(matchedState.coords, 7);
        }
      } else {
        resultEl.className = "availability-status unavailable";
        resultEl.innerHTML = `<i class="fas fa-circle-xmark"></i> Currently unavailable in "${code}". We are expanding fast! Sign up to get notified.`;
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

/* ── 17. Lenis Smooth Scroll Integration ──────────────────────────────── */
function initSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    startLenis();
  } else {
    // Dynamically load Lenis from CDN
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    script.onload = startLenis;
    document.head.appendChild(script);
  }

  function startLenis() {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    // If GSAP & ScrollTrigger are available, let GSAP control the ticker rendering loop
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
      
      console.log("Lenis running synced with GSAP ticker loop.");
    } else {
      // Otherwise, run raw requestAnimationFrame loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      console.log("Lenis running with native requestAnimationFrame loop.");
    }
    
    window.lenis = lenis;
  }
}

/* ── 18. Magnetic Physics Button Effects ─────────────────────────────── */
function initMagneticButtons() {
  // Select all interactive buttons
  const buttonsSelector = '.btn, .add-to-cart-btn, .filter-tab, .carousel-arrow, .fc-submit-btn, .form-submit-btn';
  
  document.addEventListener('mousemove', (e) => {
    const buttons = document.querySelectorAll(buttonsSelector);
    buttons.forEach(btn => {
      const bound = btn.getBoundingClientRect();
      const centerX = bound.left + bound.width / 2;
      const centerY = bound.top + bound.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.hypot(distanceX, distanceY);
      const threshold = 75; // Distance threshold in pixels
      
      if (distance < threshold) {
        // Pull towards cursor
        const power = 0.35;
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, {
            x: distanceX * power,
            y: distanceY * power,
            duration: 0.3,
            ease: 'power2.out'
          });
        } else {
          // CSS fallback
          btn.style.transform = `translate(${distanceX * power}px, ${distanceY * power}px)`;
          btn.style.transition = 'transform 0.1s ease-out';
        }
      } else {
        // Snap back to origin
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
          });
        } else {
          btn.style.transform = 'none';
          btn.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }
      }
    });
  });
}


<?php get_header(); ?>
<main id="scroll-container">


    <!-- ══════════════════════════════════════════════
         1. VIDEO BACKGROUND HERO SECTION
    ══════════════════════════════════════════════ -->
    <section class="video-hero swiper hero-video-slider" id="video-hero-sec">
      <div class="swiper-wrapper">
        <!-- Slide 1: Juices Commercial -->
        <div class="swiper-slide">
          <video preload="metadata" class="video-bg" autoplay loop muted playsinline poster="<?php echo get_template_directory_uri(); ?>/assets/hero_fallback_desktop.jpg">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/hero_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <!-- Slide 2: Fizz Commercial -->
        <div class="swiper-slide">
          <video preload="metadata" class="video-bg" autoplay loop muted playsinline poster="<?php echo get_template_directory_uri(); ?>/assets/hero_fallback_desktop.jpg">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/hero_video_2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <!-- Slide 3: Milk & Dairy Commercial -->
        <div class="swiper-slide">
          <video preload="metadata" class="video-bg" autoplay loop muted playsinline poster="<?php echo get_template_directory_uri(); ?>/assets/hero_fallback_desktop.jpg">
            <source src="<?php echo get_template_directory_uri(); ?>/assets/hero_video_3.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <!-- Subtle Navigation Arrows -->
      <div class="swiper-button-next hero-slider-next"></div>
      <div class="swiper-button-prev hero-slider-prev"></div>
      <!-- Dots Pagination -->
      <div class="swiper-pagination hero-slider-pagination"></div>

      <div class="video-hero-container">
        <div class="video-hero-actions">
          <a href="#hero-sec" class="btn btn-primary video-scroll-btn">Explore Flavors</a>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         2. ABOUT US SECTION (Collage Graphic Grid)
    ══════════════════════════════════════════════ -->
    <section class="about-us-section" id="about-sec">
      <div class="container about-us-container">
        <div class="about-us-grid">
          <!-- Left Column: Compact collage image -->
          <div class="about-us-visual">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/about_us_bg_new_cropped.jpg" alt="Demi's Product Collage" class="about-collage-img">
          </div>
          
          <!-- Right Column: Content on clean white background -->
          <div class="about-us-content">
            <span class="section-label">ABOUT US</span>
            <h2 class="section-title">Pure Taste, <br><span>Real Nature.</span></h2>
            <p class="section-desc">At Demi's, we believe that nature knows best. We don't boil away the flavor with pasteurization or dilute it with water-to-concentrate formulas. We source premium fruits from local sustainable orchards, blend the real fiber-rich pulp, and bottle it fresh.</p>
            <p class="section-desc">From our organic skimmed milk to our sparkling prebiotic craft sodas, every bottle is crafted with 100% transparency, zero refined sugars, and zero preservatives.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- ══════════════════════════════════════════════
         3. CROWD FAVORITES SECTION (The Fresh Press Design)
    ══════════════════════════════════════════════ -->
    <section class="crowd-favorites-section" id="favorites-sec">
      <div class="container favorites-container">
        <!-- Section Header -->
        <div class="favorites-header text-center">
          <span class="section-label">DEMI'S BESTSELLERS</span>
          <h2 class="section-title">The Crowd <span>Favorites</span></h2>
          
          <!-- Category Tabs -->
          <div class="favorites-categories">
            <button class="category-tab active" data-target="juices">Juices</button>
            <button class="category-tab" data-target="soft-drinks">Soft Drinks</button>
            <button class="category-tab" data-target="milk">Pure Milk</button>
          </div>
        </div>

        <!-- Product Grid with Carousel -->
        <div class="products-carousel-wrapper">
          <button class="carousel-arrow carousel-prev" aria-label="Previous products"><i class="fas fa-chevron-left"></i></button>
          <div class="products-grid" id="products-carousel">
          
          <!-- JUICES CATEGORY -->
          <!-- Product Card 1: Alphonso Mango -->
          <div class="product-card" data-category="juices">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/mango_splash_card.png" class="card-splash-img" alt="Mango Splash">
              </div>
              <a href="product.html?id=mango" title="Alphonso Mango Juice (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/brand_pack_0005.png" alt="Alphonso Mango" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fresh</div>
            <h3 class="product-title"><a href="product.html?id=mango">Alphonso Mango Juice (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=mango" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 2: Fresh Litchi Juice -->
          <div class="product-card" data-category="juices">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/litchi_splash_card.png" class="card-splash-img" alt="Litchi Splash">
              </div>
              <a href="product.html?id=litchi" title="Fresh Litchi (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/brand_pack_0015.png" alt="Fresh Litchi" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fresh</div>
            <h3 class="product-title"><a href="product.html?id=litchi">Fresh Litchi Juice (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=litchi" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 3: Fresh Apple Juice -->
          <div class="product-card" data-category="juices">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/apple_splash_card.png" class="card-splash-img" alt="Apple Splash">
              </div>
              <a href="product.html?id=apple" title="Fresh Apple (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/brand_pack_0016.png" alt="Fresh Apple" class="primary-img">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/apple_pack_splash.jpg" alt="Fresh Apple Juice" class="secondary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fresh</div>
            <h3 class="product-title"><a href="product.html?id=apple">Fresh Apple Juice (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=apple" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 4: Mix Fruit Juice -->
          <div class="product-card" data-category="juices">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/mixed_fruit_splash_card.png" class="card-splash-img" alt="Fruit Aam Rus Splash">
              </div>
              <a href="product.html?id=mixed-fruit" title="Mix Fruit Juice (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/brand_pack_0017.png" alt="Mix Fruit Juice" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fresh</div>
            <h3 class="product-title"><a href="product.html?id=mixed-fruit">Mix Fruit Juice (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=mixed-fruit" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 5: Pink Guava Juice -->
          <div class="product-card" data-category="juices">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/guava_splash_card.png" class="card-splash-img" alt="Guava Splash">
              </div>
              <a href="product.html?id=guava" title="Pink Guava Juice (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/brand_pack_0018.png" alt="Pink Guava Juice" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fresh</div>
            <h3 class="product-title"><a href="product.html?id=guava">Pink Guava Juice (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=guava" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- SOFT DRINKS CATEGORY -->
          <!-- Product Card 5: Demi's Multani Zeera -->
          <div class="product-card" data-category="soft-drinks" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lime_splash.png" class="card-splash-img" alt="Lime Splash">
              </div>
              <a href="product.html?id=multani-zeera" title="Demi's Multani Zeera (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/soft_drink_multani_zeera.png" alt="Demi's Multani Zeera" class="primary-img">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/multani_zeera_ad.jpg" alt="Demi's Multani Zeera" class="secondary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fizz</div>
            <h3 class="product-title"><a href="product.html?id=multani-zeera">Demi's Multani Zeera (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=multani-zeera" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 6: Demi's Masala Zeera -->
          <div class="product-card" data-category="soft-drinks" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lime_splash.png" class="card-splash-img" alt="Lime Splash">
              </div>
              <a href="product.html?id=masala-zeera" title="Demi's Masala Zeera (160 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/soft_drink_masala_zeera.png" alt="Demi's Masala Zeera" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fizz</div>
            <h3 class="product-title"><a href="product.html?id=masala-zeera">Demi's Masala Zeera (160 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=masala-zeera" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 7: Demi's Tasty Spize Lemona -->
          <div class="product-card" data-category="soft-drinks" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lemon_splash.png" class="card-splash-img" alt="Lemon Splash">
              </div>
              <a href="product.html?id=lemon" title="Demi's Tasty Spize Lemona (200 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/soft_drink_lemon.png" alt="Demi's Tasty Spize Lemona" class="primary-img">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lemona_ad.jpg" alt="Demi's Tasty Spize Lemona" class="secondary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fizz</div>
            <h3 class="product-title"><a href="product.html?id=lemon">Demi's Tasty Spize Lemona (200 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 20.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=lemon" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 8: Demi's Tasty Orange -->
          <div class="product-card" data-category="soft-drinks" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/ice_splash.png" class="card-splash-img" alt="Juice Splash">
              </div>
              <a href="product.html?id=orange" title="Demi's Tasty Orange (200 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/soft_drink_orange.png" alt="Demi's Tasty Orange" class="primary-img">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/orange_ad.jpg" alt="Demi's Tasty Orange" class="secondary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fizz</div>
            <h3 class="product-title"><a href="product.html?id=orange">Demi's Tasty Orange (200 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 20.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=orange" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- Product Card 9: Demi's Cola -->
          <div class="product-card" data-category="soft-drinks" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/cola_splash.png" class="card-splash-img" alt="Cola Splash">
              </div>
              <a href="product.html?id=cola" title="Demi's Tasty Cola (200 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/soft_drink_cola.png" alt="Demi's Tasty Cola" class="primary-img">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/cola_ad.jpg" alt="Demi's Tasty Cola" class="secondary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Fizz</div>
            <h3 class="product-title"><a href="product.html?id=cola">Demi's Tasty Cola (200 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 20.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="product.html?id=cola" class="add-to-cart-btn" style="background-color: var(--accent-primary);">Order Now</a>
              </div>
            </div>
          </div>

          <!-- MILK CATEGORY -->
          <!-- Product Card 9: Demi's TastY Milk (400 ml) -->
          <div class="product-card" data-category="milk" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/milk_splash.png" class="card-splash-img" alt="Milk Splash">
              </div>
              <a href="#" title="Demi's TastY Milk (400 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/tasty_milk_400ml.png" alt="Demi's TastY Milk (400 ml)" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Dairy</div>
            <h3 class="product-title"><a href="#">Demi's TastY Milk (400 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 35.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="#" class="add-to-cart-btn">Add to cart</a>
              </div>
            </div>
          </div>

          <!-- Product Card 10: Demi's Tasty Milk (125 ml) -->
          <div class="product-card" data-category="milk" style="display: none;">
            <figure class="product-thumbnail">
              <div class="card-splash-wrapper">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/milk_splash.png" class="card-splash-img" alt="Milk Splash">
              </div>
              <a href="#" title="Demi's Tasty Milk (125 ml)">
                <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/tasty_milk_125ml.png" alt="Demi's Tasty Milk (125 ml)" class="primary-img">
              </a>
            </figure>
            <div class="product-vendor">Demi's Dairy</div>
            <h3 class="product-title"><a href="#">Demi's Tasty Milk (125 ml)</a></h3>
            <div class="product-meta quick-add-active">
              <div class="product-price-wrapper">
                <span class="price-amount">Rs. 10.00</span>
              </div>
              <div class="product-button-wrapper">
                <a href="#" class="add-to-cart-btn">Add to cart</a>
              </div>
            </div>
          </div>

          </div>
          <button class="carousel-arrow carousel-next" aria-label="Next products"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- Section 5: What's Inside Our Packs -->
    <section class="ingredients-showcase" id="ingredients-sec">
      <div class="ingredients-wrap">

        <!-- Heading -->
        <div class="ingr-heading">
          <span class="section-tag">Pure Squeeze</span>
          <h2 class="section-title">What's Inside <span>Our Packs</span></h2>
        </div>

        <!-- 3-column: left text | center image | right text -->
        <div class="ingr-stage">

          <!-- Left column -->
          <div class="ingr-left-col">
            <div class="ingr-text">
              <h3>6-Layer Aseptic Carton</h3>
              <p>Six protective layers lock in fresh flavors, vitamins and enzymes &mdash; shielding 100% of light and oxygen. Farm-fresh with zero preservatives.</p>
            </div>
            <div class="ingr-text">
              <h3>Rich Fruit Pulp</h3>
              <p>Made with 100% natural fruit pulp, keeping the authentic texture, rich fiber, and natural taste completely intact without any dilution.</p>
            </div>
          </div>

          <!-- Center: high-res 1920x950 PNG fills the column fully -->
          <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/all_products_collage.png"
               alt="Demi's Full Product Range"
               class="ingr-center-img">

          <!-- Right column -->
          <div class="ingr-right-col">
            <div class="ingr-text">
              <h3>Aseptic Freshness Seal</h3>
              <p>Filled under vacuum in clinically sterile environments. Every sip as pure as the day the fruit was harvested &mdash; no shortcuts, ever.</p>
            </div>
            <div class="ingr-text">
              <h3>100% Recyclable FSC Board</h3>
              <p>FSC-certified wood fibres and sugarcane bio-caps reduce carbon footprint by 75%. Nature in every sip &mdash; and in every pack.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 6: Premium Testimonials Slider -->
        <section class="testimonials-slider" id="testimonials-sec">
      <!-- Premium Editorial Background & Motion Elements -->
      <div class="testimonial-gradient-blob"></div>
      <div class="testimonial-large-quote">“</div>
      
      <!-- Blurred leaf shadows drifting -->
      <div class="leaf-shadow-overlay"></div>
      
      <!-- Subtle Floating Trust Icons -->
      <div class="floating-trust-badge badge-1">
        <i class="fas fa-leaf"></i> <span>100% Natural</span>
      </div>
      <div class="floating-trust-badge badge-2">
        <i class="fas fa-ban"></i> <span>No Preservatives</span>
      </div>
      <div class="floating-trust-badge badge-3">
        <i class="fas fa-heart"></i> <span>Family Trusted</span>
      </div>
      <div class="floating-trust-badge badge-4">
        <i class="fas fa-flag"></i> <span>Made in India</span>
      </div>
      
      <!-- Tiny 5-star sparkles -->
      <div class="sparkle-star star-1"><i class="fas fa-star"></i></div>
      <div class="sparkle-star star-2"><i class="fas fa-star"></i></div>
      <div class="sparkle-star star-3"><i class="fas fa-star"></i></div>
      <div class="sparkle-star star-4"><i class="fas fa-star"></i></div>
      
      <!-- Faint circular stamp textures in corners -->
      <div class="corner-stamp stamp-top-left">
        <div class="stamp-inner">ORGANIC<br>• FRESH •</div>
      </div>
      <div class="corner-stamp stamp-bottom-right">
        <div class="stamp-inner">QUALITY<br>• SURE •</div>
      </div>

      <div class="container">
        <div class="testimonials-grid-layout">
          <!-- Left Editorial Column -->
          <div class="testimonials-editorial">
            <span class="section-tag">Loved by Families</span>
            <h2 class="section-title">Healthy Choices, <span>Happy Smiles</span></h2>
            <p class="section-subtitle">Real feedback from parents, kids, and health enthusiasts who make Demi's a part of their daily life.</p>
            
            <div class="testimonials-stats-box">
              <div class="stars-row">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="stats-text"><strong>4.9 / 5.0</strong> based on 10,000+ reviews.</p>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="testimonials-nav-buttons">
              <button class="test-nav-btn prev" aria-label="Previous slide"><i class="fas fa-arrow-left"></i></button>
              <button class="test-nav-btn next" aria-label="Next slide"><i class="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- Right Carousel Column -->
          <div class="testimonials-carousel-wrapper">
            <div class="testimonials-carousel-track">
              <div class="testimonial-slide active">
                <div class="slide-rating">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="testimonial-quote">"Finding clean, organic juices without added sugar was nearly impossible until I tried Demi's Alphonso Mango. My kids absolutely love the rich, thick texture, and I love that it's 100% natural."</p>
                <div class="testimonial-author">
                  <div class="author-info">
                    <h4>Shalini Sen</h4>
                    <span>Parent of two, Mumbai</span>
                  </div>
                </div>
              </div>
              
              <div class="testimonial-slide">
                <div class="slide-rating">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="testimonial-quote">"The Litchi juice is incredibly refreshing after my morning runs. It is not overly sweet like packaged concentrates, and you can truly taste the cold-pressed difference. Highly recommend it!"</p>
                <div class="testimonial-author">
                  <div class="author-info">
                    <h4>Rohan Malhotra</h4>
                    <span>Fitness Coach, Delhi</span>
                  </div>
                </div>
              </div>

              <div class="testimonial-slide">
                <div class="slide-rating">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="testimonial-quote">"I recommend Demi's Double Toned Milk to my clients because of its purity and nutrient retention. It has the perfect balance of proteins and calcium with lower fats, making it a great daily option."</p>
                <div class="testimonial-author">
                  <div class="author-info">
                    <h4>Dr. Meera Rao</h4>
                    <span>Clinical Nutritionist, Bangalore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: Locate Us / Where to Buy -->
    <section class="locate-us" id="locate-sec">
      <div class="container">
        <div class="locate-grid-layout">
          <!-- Left Partner Info Column -->
          <div class="locate-info-col">
            <span class="section-tag">Find Us Near You</span>
            <h2 class="section-title">Demi's <span>Available In</span></h2>
            <p class="section-subtitle">We are expanding fast across India. Find our natural fruit juices, prebiotic sodas, and pure milk in premium stores and supermarkets across these states.</p>
            
            <div class="states-available-grid">
              <div class="state-item" data-state="ladakh">
                <i class="fas fa-map-pin"></i>
                <span>Leh Ladakh</span>
              </div>
              <div class="state-item" data-state="jk">
                <i class="fas fa-map-pin"></i>
                <span>J&K</span>
              </div>
              <div class="state-item" data-state="hp">
                <i class="fas fa-map-pin"></i>
                <span>Himachal Pradesh</span>
              </div>
              <div class="state-item" data-state="punjab">
                <i class="fas fa-map-pin"></i>
                <span>Punjab</span>
              </div>
              <div class="state-item" data-state="haryana">
                <i class="fas fa-map-pin"></i>
                <span>Haryana</span>
              </div>
              <div class="state-item" data-state="mp">
                <i class="fas fa-map-pin"></i>
                <span>Madhya Pradesh</span>
              </div>
              <div class="state-item" data-state="rajasthan">
                <i class="fas fa-map-pin"></i>
                <span>Rajasthan</span>
              </div>
              <div class="state-item" data-state="gujarat">
                <i class="fas fa-map-pin"></i>
                <span>Gujarat</span>
              </div>
              <div class="state-item" data-state="maharashtra">
                <i class="fas fa-map-pin"></i>
                <span>Maharashtra</span>
              </div>
              <div class="state-item" data-state="uttarakhand">
                <i class="fas fa-map-pin"></i>
                <span>Uttarakhand</span>
              </div>
              <div class="state-item" data-state="up">
                <i class="fas fa-map-pin"></i>
                <span>UP</span>
              </div>
              <div class="state-item" data-state="wb">
                <i class="fas fa-map-pin"></i>
                <span>West Bengal</span>
              </div>
              <div class="state-item" data-state="jharkhand">
                <i class="fas fa-map-pin"></i>
                <span>Jharkhand</span>
              </div>
              <div class="state-item" data-state="bihar">
                <i class="fas fa-map-pin"></i>
                <span>Bihar</span>
              </div>
              <div class="state-item" data-state="assam">
                <i class="fas fa-map-pin"></i>
                <span>Assam</span>
              </div>
            </div>

            <!-- Search Availability -->
            <div class="check-availability-box">
              <h3>Check State Availability</h3>
              <p>Enter your state name or city to see if Demi's is available in your area.</p>
              <div class="availability-form">
                <input type="text" placeholder="Enter State or City..." id="pincode-input" aria-label="Location State">
                <button id="check-pincode-btn">Search</button>
              </div>
              <div id="availability-result" class="availability-status"></div>
            </div>
          </div>

          <!-- Right Interactive Styled Map Column -->
          <div class="locate-map-col">
            <div id="map-container">
              <div id="map"></div>
              <!-- Styled dark green overlay badge -->
              <div class="map-floating-badge">
                <i class="fas fa-location-dot"></i>
                <span>250+ Partner Outlets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════
         FOOTER (Tropicana-inspired Green Curved Design)
    ══════════════════════════════════════════════ -->

    <!-- Interactive Instagram Feed Section -->
    <section class="instagram-feed-section">
      <div class="container text-center">
        <div class="insta-header">
          <span class="journey-num" style="display: inline-block; margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--accent-primary); letter-spacing: 0.1em; font-size: 0.85rem;">STAY IN THE LOOP</span>
          <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 900;">@demistasty</h2>
          <p style="font-family: var(--font-body); font-size: 1.05rem; color: #666; max-width: 600px; margin: 0 auto 3rem; line-height: 1.6;">Follow our journey, recipe reveals, and fresh drops on Instagram.</p>
        </div>
      </div>
      
      <!-- Instagram Continuous Scroll Ticker -->
      <div class="instagram-ticker-wrapper">
        <div class="instagram-ticker-track">
          
          <!-- Post 1 (Lemona) -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lemona_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,420</span>
                <span><i class="fas fa-comment"></i> 58</span>
              </div>
              <p class="insta-caption">Zesty Lemona on ice cubes! 🍋 #TastySpize</p>
            </div>
          </a>

          <!-- Post 2 (Multani Zeera) -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/multani_zeera_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,280</span>
                <span><i class="fas fa-comment"></i> 42</span>
              </div>
              <p class="insta-caption">Classic digestives with roasted cumin! 🌿 #MultaniZeera</p>
            </div>
          </a>

          <!-- Post 3 (Litchi Juice) -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/juice_pack_litchi.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 2,150</span>
                <span><i class="fas fa-comment"></i> 95</span>
              </div>
              <p class="insta-caption">Sweet litchi splash in every tetra-pack! 🌸 #FruitJuice</p>
            </div>
          </a>

          <!-- Post 4 (Orange) -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/orange_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,640</span>
                <span><i class="fas fa-comment"></i> 64</span>
              </div>
              <p class="insta-caption">Bright, pulpy, carbonated goodness! 🍊 #TastyOrange</p>
            </div>
          </a>

          <!-- Post 5 (Cola) -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/cola_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,890</span>
                <span><i class="fas fa-comment"></i> 73</span>
              </div>
              <p class="insta-caption">Prebiotic botanical cola on crushed ice! 🥤 #TastyCola</p>
            </div>
          </a>

          <!-- Duplicate Set for Seamless Ticker Loop -->
          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/lemona_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,420</span>
                <span><i class="fas fa-comment"></i> 58</span>
              </div>
              <p class="insta-caption">Zesty Lemona on ice cubes! 🍋 #TastySpize</p>
            </div>
          </a>

          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/multani_zeera_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,280</span>
                <span><i class="fas fa-comment"></i> 42</span>
              </div>
              <p class="insta-caption">Classic digestives with roasted cumin! 🌿 #MultaniZeera</p>
            </div>
          </a>

          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/juice_pack_litchi.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 2,150</span>
                <span><i class="fas fa-comment"></i> 95</span>
              </div>
              <p class="insta-caption">Sweet litchi splash in every tetra-pack! 🌸 #FruitJuice</p>
            </div>
          </a>

          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/orange_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,640</span>
                <span><i class="fas fa-comment"></i> 64</span>
              </div>
              <p class="insta-caption">Bright, pulpy, carbonated goodness! 🍊 #TastyOrange</p>
            </div>
          </a>

          <a href="https://www.instagram.com/demistasty/" target="_blank" class="instagram-post-card">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/cola_ad.jpg" alt="Instagram Post">
            <div class="instagram-overlay">
              <div class="insta-stats">
                <span><i class="fas fa-heart"></i> 1,890</span>
                <span><i class="fas fa-comment"></i> 73</span>
              </div>
              <p class="insta-caption">Prebiotic botanical cola on crushed ice! 🥤 #TastyCola</p>
            </div>
          </a>
          
        </div>
      </div>
    </section>
    
    <!-- ══════════════════════════════════════════════
         FOOTER (Tropicana-inspired Green Curved Design)
    ══════════════════════════════════════════════ -->
    


    <!-- Green Curved Footer -->
    
</main>
<?php get_footer(); ?>

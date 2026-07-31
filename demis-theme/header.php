<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demi's Tasty — Pure Taste, Real Nature 🍊</title>
  
  <!-- Premium Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600;1,800&family=Space+Grotesk:wght@400;600&family=Outfit:wght@300;400;600;800&family=Calistoga&family=Shrikhand&family=Syne:wght@700;800&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
  
  <!-- Swiper & GSAP CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Leaflet.js Map Library -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script defer src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <link rel="stylesheet" href="mockup.css?v=3.0">
  <?php wp_head(); ?>
</head>
<body class="theme-organic">

  <!-- SVG Liquid Distortion Filter -->
  <svg class="svg-filters" style="display: none;">
    <defs>
      <filter id="liquid-distortion">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>

  <!-- ══════════════════════════════════════════════
       HEADER / NAVIGATION
  ══════════════════════════════════════════════ -->
  <header class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Demi's Tasty" class="logo-img">
      </a>
      <nav class="nav-links">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link">Home</a>
        <a href="<?php echo esc_url( home_url( '/our-story/' ) ); ?>" class="nav-link">Our Story</a>
        <a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="nav-link">Products</a>
        <a href="<?php echo esc_url( home_url( '/become-a-partner/' ) ); ?>" class="nav-link">Become a partner</a>
        <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <button class="mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Offcanvas Menu -->
  <div class="mobile-menu">
    <nav class="mobile-nav-links">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="mobile-link">Home</a>
      <a href="<?php echo esc_url( home_url( '/our-story/' ) ); ?>" class="mobile-link">Our Story</a>
      <a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="mobile-link">Products</a>
      <a href="<?php echo esc_url( home_url( '/become-a-partner/' ) ); ?>" class="mobile-link">Become a partner</a>
      <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="mobile-link">Contact</a>
    </nav>
  </div>

  <!-- Main Scroll Container -->
  
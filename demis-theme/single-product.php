<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Details — Demi's Tasty 🍊</title>
  
  <!-- Premium Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600;1,800&family=Space+Grotesk:wght@400;600&family=Outfit:wght@300;400;600;800&family=Calistoga&family=Shrikhand&display=swap" rel="stylesheet">
  
  <!-- Icons & Styling -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="mockup.css?v=5.0">
  
  <style>
    /* ── Single Product Redesign CSS ── */
    .product-detail-section {
      padding: 140px 0 60px;
      background-color: var(--bg-organic);
    }
    
    /* Breadcrumbs */
    .breadcrumbs {
      font-family: var(--font-body);
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .breadcrumbs a {
      color: #555;
      text-decoration: none;
      transition: color 0.2s;
    }
    .breadcrumbs a:hover {
      color: var(--accent-primary);
    }
    .breadcrumbs i {
      font-size: 0.75rem;
      color: #aaa;
    }
    
    /* Layout Grid */
    .detail-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 4rem;
      align-items: start;
    }
    
    /* Left Column: Visuals Box */
    .detail-visual-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .detail-visual {
      position: relative;
      background: transparent;
      border-radius: 28px;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 480px;
      overflow: hidden;
      transition: background-color 0.3s;
    }
    .detail-splash {
      position: absolute;
      bottom: -10px;
      left: -10px;
      right: -10px;
      height: 100%;
      object-fit: cover;
      object-position: center bottom;
      opacity: 0.95;
      z-index: 1;
    }
    .detail-pack {
      position: relative;
      z-index: 2;
      max-height: 380px;
      object-fit: contain;
      filter: drop-shadow(0 20px 30px rgba(0,0,0,0.12));
      animation: floatPack 4s ease-in-out infinite alternate;
    }
    @keyframes floatPack {
      0% { transform: translateY(0); }
      100% { transform: translateY(-12px); }
    }
    
    /* Navigation Gallery Rows */
    .gallery-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .gallery-arrow-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1.5px solid #ddd;
      background: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      transition: all 0.25s ease;
    }
    .gallery-arrow-btn:hover {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: #fff;
    }
    .gallery-thumbs {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }
    .gallery-thumb {
      width: 70px;
      height: 70px;
      border: 2.5px solid rgba(1, 97, 48, 0.08);
      border-radius: 12px;
      padding: 4px;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .gallery-thumb:hover {
      transform: translateY(-2px);
      border-color: var(--accent-primary);
    }
    .gallery-thumb.active {
      border-color: var(--accent-primary);
      box-shadow: 0 4px 12px rgba(1, 97, 48, 0.15);
    }
    .gallery-thumb img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 6px;
    }
    
    /* Full composition view overrides */
    .detail-visual.full-image-active {
      background: #faf9f6 !important;
      padding: 0 !important;
      border: 1px solid #ddd;
    }
    .detail-visual.full-image-active .detail-splash {
      display: none !important;
    }
    .detail-visual.full-image-active .detail-pack {
      width: 100% !important;
      height: 100% !important;
      max-height: 100% !important;
      object-fit: cover !important;
      animation: none !important;
      filter: none !important;
      border-radius: 28px;
    }
    
    /* Right Column: Content Box */
    .detail-content {
      font-family: var(--font-body);
    }
    .detail-category {
      font-family: var(--font-mono);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
      display: inline-block;
    }
    .detail-title {
      font-family: var(--font-heading);
      font-size: 2.25rem;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      font-weight: 900;
      line-height: 1.15;
    }
    
    /* Ratings */
    .detail-ratings {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    .stars-gold {
      color: #ffb400;
      font-size: 0.95rem;
    }
    .rating-count {
      font-size: 0.9rem;
      color: #666;
    }
    
    /* Badges */
    .tag-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.75rem;
    }
    .tag-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 5px 12px;
      border-radius: 50px;
      background: rgba(1, 97, 48, 0.05);
      color: var(--accent-primary);
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid rgba(1, 97, 48, 0.12);
    }
    .tag-badge i {
      font-size: 0.85rem;
    }
    
    .detail-price {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 900;
      color: var(--accent-primary);
      margin-bottom: 1.75rem;
    }
    
    /* Pack size selector */
    .pack-size-container {
      margin-bottom: 1.75rem;
    }
    .selector-label {
      font-weight: 600;
      color: #333;
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }
    .size-options {
      display: flex;
      gap: 0.75rem;
    }
    .size-option-btn {
      padding: 10px 20px;
      border-radius: 50px;
      border: 1.5px solid #ddd;
      background: #fff;
      cursor: pointer;
      font-weight: 600;
      font-family: var(--font-body);
      font-size: 0.9rem;
      transition: all 0.25s ease;
      color: #555;
    }
    .size-option-btn:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
    }
    .size-option-btn.active {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: #fff;
      box-shadow: 0 4px 12px rgba(1, 97, 48, 0.15);
    }
    .size-option-btn:disabled {
      cursor: not-allowed;
      opacity: 0.9;
    }
    
    /* Quantity & Button */
    .order-action-row {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.75rem;
    }
    .qty-selector-wrapper {
      display: flex;
      align-items: center;
      border: 1.5px solid #ddd;
      border-radius: 50px;
      padding: 4px;
      background: #fff;
    }
    .qty-btn {
      width: 38px;
      height: 38px;
      border: none;
      background: transparent;
      font-size: 1rem;
      cursor: pointer;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s;
    }
    .qty-btn:hover {
      color: var(--accent-primary);
    }
    .qty-input {
      width: 70px;
      border: none;
      text-align: center;
      font-size: 1.05rem;
      font-weight: 700;
      outline: none;
      -appearance: textfield;
      -moz-appearance: textfield;
    }
    .qty-input::-webkit-outer-spin-button,
    .qty-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    .detail-add-btn {
      flex: 1;
      padding: 14px 28px;
      border-radius: 50px;
      background: var(--accent-primary);
      color: #fff;
      border: none;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: all 0.25s ease;
      box-shadow: 0 4px 15px rgba(1, 97, 48, 0.15);
    }
    .detail-add-btn:hover {
      background: #004d26;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(1, 97, 48, 0.22);
    }
    
    .delivery-notice-box {
      border-top: 1px solid #ddd;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .delivery-notice-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.85rem;
      color: #555;
    }
    .delivery-notice-item i {
      color: var(--accent-primary);
      font-size: 1rem;
    }
    
    /* ── Tabbed Section ── */
    .tabs-section {
      background: #fff;
      padding: 80px 0 60px;
      border-top: 1px solid #e0dfd5;
      border-bottom: 1px solid #e0dfd5;
    }
    .tab-headers {
      display: flex;
      gap: 3rem;
      border-bottom: 2px solid #eee;
      margin-bottom: 3rem;
      justify-content: start;
    }
    .tab-header-btn {
      border: none;
      background: transparent;
      padding: 0 0 1rem;
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 600;
      color: #999;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;
    }
    .tab-header-btn:hover {
      color: var(--accent-primary);
    }
    .tab-header-btn.active {
      color: var(--accent-primary);
    }
    .tab-header-btn.active::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: var(--accent-primary);
      border-radius: 5px;
    }
    
    .tab-content {
      display: none;
      animation: fadeInTab 0.5s ease forwards;
    }
    .tab-content.active {
      display: block;
    }
    @keyframes fadeInTab {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Ingredients Tab content */
    .ingredients-tab-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    .ingredient-stats-row {
      display: flex;
      gap: 2.5rem;
    }
    .ingredient-stat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .ingredient-stat-label {
      font-size: 0.95rem;
      color: #666;
      font-weight: 600;
    }
    .ingredient-stat-val {
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 900;
      color: var(--accent-primary);
      line-height: 1;
    }
    .ingredients-description-box {
      font-size: 1.05rem;
      color: #555;
      line-height: 1.6;
    }
    
    /* Nutrition Tab content */
    .nutrition-box {
      border: 3px solid #1a1a1a;
      padding: 30px;
      max-width: 550px;
      background: #faf9f6;
    }
    .nutrition-box h3 {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      font-weight: 900;
      border-bottom: 8px solid #1a1a1a;
      padding-bottom: 5px;
      margin: 0 0 10px;
    }
    .nutrition-box p {
      margin: 0 0 15px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #333;
    }
    .nutrition-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nutrition-table tr {
      border-bottom: 1px solid #ddd;
    }
    .nutrition-table tr.thick-border {
      border-bottom: 4px solid #1a1a1a;
    }
    .nutrition-table tr.med-border {
      border-bottom: 2px solid #1a1a1a;
    }
    .nutrition-table td {
      padding: 8px 0;
      font-size: 1.05rem;
    }
    .nutrition-table td:last-child {
      text-align: right;
      font-weight: bold;
    }
    
    /* Sourcing Tab content */
    .sourcing-tab-box {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #555;
      max-width: 800px;
    }
    
    /* ── Our Natural Ingredients Section ── */
    .natural-ingredients-section {
      background-color: #f5f3e9;
      padding: 80px 0;
      border-bottom: 1px solid #e0dfd5;
    }
    .natural-ingredients-section h2 {
      font-family: var(--font-heading);
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--accent-primary);
      text-align: center;
      margin-bottom: 3.5rem;
      letter-spacing: 1px;
    }
    .ingredients-cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    .ingredient-detail-card {
      background: #fff;
      border-radius: 20px;
      padding: 2.5rem 1.75rem;
      text-align: center;
      border: 1px solid #e2e0d3;
      box-shadow: 0 6px 20px rgba(0,0,0,0.015);
      transition: all 0.3s ease;
    }
    .ingredient-detail-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(1, 97, 48, 0.05);
      border-color: var(--accent-primary);
    }
    .ingredient-icon-wrapper {
      width: 70px;
      height: 70px;
      background: rgba(1, 97, 48, 0.05);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: var(--accent-primary);
      font-size: 1.75rem;
    }
    .ingredient-detail-card h3 {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.15rem;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
    }
    .ingredient-detail-card p {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }
    
    /* ── Opinions / Reviews Section ── */
    .opinions-section {
      background-color: #ffb400; /* Warm gold */
      padding: 90px 0;
      position: relative;
      overflow: hidden;
    }
    .opinions-section::before {
      content: "";
      position: absolute;
      top: -150px;
      right: -150px;
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%);
      pointer-events: none;
    }
    .opinions-section h2 {
      font-family: var(--font-heading);
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--accent-primary);
      text-align: center;
      margin-bottom: 4rem;
      letter-spacing: 2px;
    }
    .opinions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    .reviews-list-col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .review-item-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
      border: 1px solid rgba(255, 255, 255, 0.4);
    }
    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .review-author {
      font-weight: 700;
      color: #1a1a1a;
      font-size: 1rem;
    }
    .review-stars {
      color: #ff9800;
      font-size: 0.85rem;
    }
    .review-comment {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
      margin: 0;
    }
    
    /* Write Review Form */
    .review-form-col {
      background: #fff;
      border-radius: 24px;
      padding: 3rem 2.5rem;
      box-shadow: 0 15px 40px rgba(0,0,0,0.06);
      border: 1px solid #eee;
    }
    .review-form-col h3 {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.5rem;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
    }
    .form-group-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .form-input-field {
      width: 100%;
      padding: 12px 18px;
      border-radius: 50px;
      border: 1.5px solid #ddd;
      font-family: var(--font-body);
      font-size: 0.95rem;
      outline: none;
      transition: all 0.25s ease;
    }
    .form-input-field:focus {
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px rgba(1, 97, 48, 0.08);
    }
    textarea.form-input-field {
      border-radius: 18px;
      resize: none;
    }
    .form-submit-btn {
      width: 100%;
      padding: 14px;
      border-radius: 50px;
      background: var(--accent-primary);
      color: #fff;
      border: none;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .form-submit-btn:hover {
      background: #004d26;
    }
    
    /* ── Recently Viewed Section ── */
    .recently-viewed-section {
      background: var(--bg-organic);
      padding: 90px 0;
    }
    .recently-viewed-section h2 {
      font-family: var(--font-heading);
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--accent-primary);
      margin-bottom: 3.5rem;
    }
    .recent-cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    
    @media (max-width: 1024px) {
      .ingredients-cards-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .recent-cards-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 768px) {
      .detail-grid, .tab-headers, .ingredients-tab-layout, .opinions-grid, .recent-cards-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .ingredients-cards-grid {
        grid-template-columns: 1fr;
      }
      .tab-headers {
        gap: 1.5rem;
        flex-direction: column;
        border-bottom: none;
      }
      .tab-header-btn {
        padding: 0.5rem 0;
        text-align: left;
      }
      .tab-header-btn.active::after {
        bottom: 0;
      }
      .detail-visual {
        height: 350px;
        padding: 2rem;
      }
      .opinions-grid {
        gap: 3rem;
      }
    }
  </style>
</head>
<body class="theme-organic page-single-product">

  <!-- HEADER / NAVIGATION -->
  <header class="navbar scrolled">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <img decoding="async" fetchpriority="high" src="assets/logo.png" alt="Demi's Tasty" class="logo-img">
      </a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="story.html" class="nav-link">Our Story</a>
        <a href="products.html" class="nav-link">Products</a>
        <a href="partner.html" class="nav-link">Become a partner</a>
        <a href="contact.html" class="nav-link">Contact</a>
        <a href="#account" class="nav-link account-trigger" onclick="openAccountModal(event)" style="display: inline-flex; align-items: center; gap: 0.4rem; color: #b84a0e; font-weight: 700;"><i class="far fa-user"></i> Login / Account</a>
      </nav>
      <div class="nav-actions">
        <button class="nav-btn account-trigger" onclick="openAccountModal(event)" aria-label="Account Portal" title="Customer Login & Account">
          <i class="far fa-user"></i>
        </button>
        <button class="mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Offcanvas Menu -->
  <div class="mobile-menu">
    <nav class="mobile-nav-links">
      <a href="index.html" class="mobile-link">Home</a>
      <a href="story.html" class="mobile-link">Our Story</a>
      <a href="products.html" class="mobile-link">Products</a>
      <a href="partner.html" class="mobile-link">Become a partner</a>
      <a href="contact.html" class="mobile-link">Contact</a>
      <a href="#account" class="mobile-link account-trigger" onclick="openAccountModal(event)" style="color: #b84a0e; font-weight: 700;"><i class="far fa-user"></i> Login / Account</a>
    </nav>
  </div>

  <main>
    <!-- Product Detail Section -->
    <section class="product-detail-section">
      <div class="container">
        
        <!-- Breadcrumbs -->
        <div class="breadcrumbs">
          <a href="index.html">Home</a> <i class="fas fa-chevron-right"></i>
          <a href="products.html">Products</a> <i class="fas fa-chevron-right"></i>
          <a href="products.html" id="p-bread-category">Juices</a> <i class="fas fa-chevron-right"></i>
          <span id="p-bread-title">Alphonso Mango Juice</span>
        </div>
        
        <div class="detail-grid">
          
          <!-- Left Column: Visuals -->
          <div class="detail-visual-wrapper">
            <div class="detail-visual" id="detail-visual-box">
              <img decoding="async" loading="lazy" src="assets/mango_splash_card.png" id="p-splash" class="detail-splash" alt="Splash Background">
              <img decoding="async" loading="lazy" src="assets/brand_pack_0005.png" id="p-image" class="detail-pack" alt="Product Pack">
            </div>
            
            <div class="gallery-row">
              <button class="gallery-arrow-btn" id="gallery-prev-btn" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
              <div class="gallery-thumbs" id="p-gallery">
                <!-- Javascript dynamic thumbnails -->
              </div>
              <button class="gallery-arrow-btn" id="gallery-next-btn" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          
          <!-- Right Column: Info -->
          <div class="detail-content">
            <span class="detail-category" id="p-category">Juices</span>
            <h1 class="detail-title" id="p-title">Alphonso Mango Juice (160 ml)</h1>
            
            <div class="detail-ratings">
              <div class="stars-gold">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <span class="rating-count" id="p-reviews-count">(24 Reviews)</span>
            </div>
            
            <div class="tag-badges">
              <span class="tag-badge" id="badge-1"><i class="fas fa-check-circle"></i> 100% Organic</span>
              <span class="tag-badge" id="badge-2"><i class="fas fa-check-circle"></i> No Preservatives</span>
              <span class="tag-badge" id="badge-3"><i class="fas fa-check-circle"></i> Aseptic Packed</span>
            </div>
            
            <div class="detail-price" id="p-price">Rs. 10.00</div>
            
            <!-- Volume Selector (160ml) -->
            <div class="pack-size-container" id="volume-variant-container" style="margin-bottom: 1.25rem;">
              <span class="selector-label">Volume:</span>
              <div class="size-options" id="volume-options">
                <!-- Dynamically injected volume options -->
              </div>
            </div>
            
            <!-- Packaging Selector (Single vs Crate) -->
            <div class="pack-size-container" style="margin-bottom: 1.75rem;">
              <span class="selector-label">Packaging:</span>
              <div class="size-options">
                <button class="size-option-btn active" id="size-single-btn">Single Bottle</button>
                <button class="size-option-btn" id="size-crate-btn">Crate (24 Units)</button>
              </div>
            </div>
            
            <div class="order-action-row">
              <div class="qty-selector-wrapper">
                <button class="qty-btn" id="qty-minus" aria-label="Decrease quantity"><i class="fas fa-minus"></i></button>
                <input type="number" id="qty-input" class="qty-input" value="500" min="500" step="50" aria-label="Quantity">
                <button class="qty-btn" id="qty-plus" aria-label="Increase quantity"><i class="fas fa-plus"></i></button>
              </div>
              <button class="detail-add-btn" id="add-to-cart-action">Add to basket</button>
            </div>
            
            <div class="delivery-notice-box">
              <div class="delivery-notice-item">
                <i class="fas fa-truck"></i>
                <span>Free delivery over Rs. 1000</span>
              </div>
              <div class="delivery-notice-item">
                <i class="fas fa-clock"></i>
                <span>Express delivery options available at checkout</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    <!-- Tabbed Nutritional & Process Section -->
    <section class="tabs-section">
      <div class="container">
        
        <div class="tab-headers">
          <button class="tab-header-btn active" data-tab="ingredients">Ingredients</button>
          <button class="tab-header-btn" data-tab="nutrition">Nutrition Facts</button>
          <button class="tab-header-btn" data-tab="sourcing">Sourcing & Process</button>
        </div>
        
        <!-- Ingredients Tab Content -->
        <div class="tab-content active" id="tab-ingredients">
          <div class="ingredients-tab-layout">
            <div class="ingredient-stats-col">
              <div class="ingredient-stats-row" id="p-ingredient-stats">
                <!-- Javascript injected stats -->
              </div>
            </div>
            <div class="ingredients-description-box" id="p-process-desc-box">
              <!-- Javascript injected process details -->
            </div>
          </div>
        </div>
        
        <!-- Nutrition Facts Tab Content -->
        <div class="tab-content" id="tab-nutrition">
          <div class="nutrition-box">
            <h3>Nutrition Facts</h3>
            <p>Serving Size: 1 Pack</p>
            <table class="nutrition-table">
              <thead>
                <tr class="thick-border">
                  <td>Amount Per Serving</td>
                  <td>% Daily Value*</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Calories</strong></td>
                  <td id="nutr-calories">65 kcal</td>
                </tr>
                <tr class="med-border">
                  <td>Total Fat</td>
                  <td id="nutr-fat">0g</td>
                </tr>
                <tr>
                  <td>Total Carbohydrates</td>
                  <td id="nutr-carbs">15g</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Sugars</td>
                  <td id="nutr-sugars">12g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td id="nutr-protein">0.5g</td>
                </tr>
                <tr class="thick-border">
                  <td>Vitamin C</td>
                  <td id="nutr-vitc">45mg</td>
                </tr>
              </tbody>
            </table>
            <p style="font-size: 0.8rem; color: #666; margin-top: 15px; font-weight: normal;">* Percent Daily Values are based on a 2,000 calorie diet.</p>
          </div>
        </div>
        
        <!-- Sourcing Tab Content -->
        <div class="tab-content" id="tab-sourcing">
          <div class="sourcing-tab-box" id="p-sourcing-box">
            <!-- Sourcing & Process Details -->
          </div>
        </div>
        
      </div>
    </section>
    
    <!-- Our Natural Ingredients Section -->
    <section class="natural-ingredients-section">
      <div class="container">
        <h2>OUR NATURAL INGREDIENTS</h2>
        
        <div class="ingredients-cards-grid" id="p-ingredients-row">
          <!-- Dynamic 4 ingredient cards -->
        </div>
      </div>
    </section>
    
    <!-- Opinions & Reviews Section -->
    <section class="opinions-section">
      <div class="container">
        <h2>OPINIONS</h2>
        
        <div class="opinions-grid">
          
          <!-- Left Column: Reviews Feed -->
          <div class="reviews-list-col" id="p-reviews-list">
            <!-- Dynamic Review Items -->
          </div>
          
          <!-- Right Column: Submission Form -->
          <div class="review-form-col">
            <h3>Write a review</h3>
            <form id="product-review-form">
              <div class="form-group-row">
                <input type="text" id="rev-name" class="form-input-field" placeholder="Your Name" required>
                <select id="rev-rating" class="form-input-field" required style="border-radius: 50px;">
                  <option value="5">★★★★★ (5 Stars)</option>
                  <option value="4">★★★★☆ (4 Stars)</option>
                  <option value="3">★★★☆☆ (3 Stars)</option>
                  <option value="2">★★☆☆☆ (2 Stars)</option>
                  <option value="1">★☆☆☆☆ (1 Star)</option>
                </select>
              </div>
              <div style="margin-bottom: 1.25rem;">
                <textarea id="rev-comment" class="form-input-field" rows="4" placeholder="Write your review here..." required></textarea>
              </div>
              <button type="submit" class="form-submit-btn">Submit review</button>
            </form>
          </div>
          
        </div>
        
      </div>
    </section>
    
    <!-- Recently Viewed Section -->
    <section class="recently-viewed-section">
      <div class="container">
        <h2 style="font-family: var(--font-heading); font-weight: 900; color: var(--accent-primary); text-align: center; margin-bottom: 3.5rem;">Recently viewed</h2>
        
        <div class="recent-cards-grid" id="p-recent-grid">
          <!-- Injected dynamically based on current product -->
        </div>
      </div>
    </section>
  </main>

  <!-- Green Curved Footer -->
  <footer class="tropicana-footer">
    
    <div class="footer-content-wrap">
      <div class="container" style="position: relative;">
          <!-- Floating Products Collage in Footer -->
          <img decoding="async" loading="lazy" src="assets/footer png.png" class="footer-floating-collage" alt="Demi's Products Collage">
        <div class="footer-logo-row text-center">
          <img decoding="async" fetchpriority="high" src="assets/logo.png" alt="Demi's Master Logo" class="footer-logo-white">
        </div>
        <div class="footer-columns-grid">
          <!-- Column 1: Main Pages -->
          <div class="footer-col font-large">
            <h4>NAVIGATION</h4>
            <a href="index.html" class="col-link-bold">Home</a>
            <a href="story.html" class="col-link-bold">Our Story</a>
            <a href="products.html" class="col-link-bold">Products</a>
            <a href="partner.html" class="col-link-bold">Become a Partner</a>
            <a href="contact.html" class="col-link-bold">Contact Us</a>
          </div>
          <div class="footer-col font-large"></div>
          <div class="footer-col font-small"></div>
          <!-- Column 4: Contact Form -->
          <div class="footer-col footer-contact-form-col">
            <h4>GET IN TOUCH</h4>
            <form id="footer-contact-form" class="footer-contact-form">
              <input type="text" id="fc-name" placeholder="Your Name" required aria-label="Your Name">
              <input type="email" id="fc-email" placeholder="Your Email" required aria-label="Your Email">
              <textarea id="fc-message" placeholder="Message..." rows="2" required aria-label="Message"></textarea>
              <button type="submit" class="fc-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom-row">
          <div class="social-icons-white">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="footer-copyright">
            <p>© 2026 DEMI'S PRODUCTS, INC. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Interactive toast container -->
  <div class="toast-container" id="toast-wrapper"></div>

  <!-- Scripts -->
  <script>
    // Product Data Catalog
        // Complete Product Data Catalog for all products
    const productsData = {
      // 160 ml Juices
      "mango": {
        name: "Alphonso Mango Juice (160 ml)",
        price: "Rs. 10.00",
        category: "Juices",
        image: "assets/brand_pack_0005.png",
        splash: "assets/mango_splash_card.png",
        color: "#f1a100",
        desc: "Sourced from the finest Ratnagiri orchards, this pure pulp-extracted juice brings natural Alphonso mango flavor. Sterilized with European UHT technology and packed in multi-layer aseptic packs to guarantee freshness without preservatives.",
        calories: "52 kcal",
        fat: "0g",
        carbs: "12g",
        sugars: "10g",
        protein: "0.4g",
        vitc: "35mg",
        badge1: "100% Organic",
        badge2: "No Added Color",
        badge3: "Aseptic Packed",
        gallery: [
          "assets/brand_pack_0005.png",
          "assets/mango_pack_splash.jpg",
          "assets/mango_splash_card.png"
        ]
      },
      "litchi": {
        name: "Fresh Litchi Juice (160 ml)",
        price: "Rs. 10.00",
        category: "Juices",
        image: "assets/brand_pack_0015.png",
        splash: "assets/litchi_splash_card.png",
        color: "#e91e63",
        desc: "Exquisite sweet litchi juice, pulp-extracted from orchard-fresh fruits. European machine-packed in sterile aseptic packaging to secure pure bliss, consistent sweetness, and long shelf life.",
        calories: "48 kcal",
        fat: "0g",
        carbs: "11g",
        sugars: "10g",
        protein: "0.3g",
        vitc: "28mg",
        badge1: "Orchard Picked",
        badge2: "No Preservatives",
        badge3: "Aseptic Boxed",
        gallery: [
          "assets/brand_pack_0015.png",
          "assets/litchi_pack_splash.jpg",
          "assets/litchi_splash_card.png"
        ]
      },
      "apple": {
        name: "Fresh Apple Juice (160 ml)",
        price: "Rs. 10.00",
        category: "Juices",
        image: "assets/brand_pack_0016.png",
        splash: "assets/apple_splash_card.png",
        color: "#b81d24",
        desc: "Crisp pulp-extracted apple juice sourced from mountain orchard apples. Fully sterilized and aseptic-packaged for natural crispness and premium freshness with zero artificial color.",
        calories: "50 kcal",
        fat: "0g",
        carbs: "11.6g",
        sugars: "9.2g",
        protein: "0.2g",
        vitc: "32mg",
        badge1: "Mountain Apples",
        badge2: "Sterilized UHT",
        badge3: "100% Natural",
        gallery: [
          "assets/brand_pack_0016.png",
          "assets/apple_pack_splash.jpg",
          "assets/apple_splash_card.png"
        ]
      },
      "mixed-fruit": {
        name: "Mix Fruit Juice (160 ml)",
        price: "Rs. 10.00",
        category: "Juices",
        image: "assets/brand_pack_0017.png",
        splash: "assets/mixed_fruit_splash_card.png",
        color: "#e65100",
        desc: "A premium healthy blend of Alphonso mango, sweet litchi, fresh apple, pink guava, and banana pulp. Rich in natural fiber and essential vitamins for everyday vitality.",
        calories: "54 kcal",
        fat: "0g",
        carbs: "12.8g",
        sugars: "10.8g",
        protein: "0.5g",
        vitc: "40mg",
        badge1: "5-Fruit Blend",
        badge2: "Rich in Fiber",
        badge3: "Aseptic Boxed",
        gallery: [
          "assets/brand_pack_0017.png",
          "assets/mixed_fruit_splash_card.png"
        ]
      },
      "guava": {
        name: "Pink Guava Juice (160 ml)",
        price: "Rs. 10.00",
        category: "Juices",
        image: "assets/brand_pack_0018.png",
        splash: "assets/guava_splash_card.png",
        color: "#4caf50",
        desc: "Lush, pulp-rich pink guava juice sourced from organic farms. Packed under sterile aseptic conditions to guarantee natural aroma, high Vitamin C, and luscious texture.",
        calories: "51 kcal",
        fat: "0g",
        carbs: "12.2g",
        sugars: "10.2g",
        protein: "0.4g",
        vitc: "72mg",
        badge1: "High Vitamin C",
        badge2: "Real Pulp",
        badge3: "Aseptic Sealed",
        gallery: [
          "assets/brand_pack_0018.png",
          "assets/guava_splash_card.png"
        ]
      },

      // 200 ml Juice Drinks
      "mango-200ml": {
        name: "Mango Drink (200 ml)",
        price: "Rs. 20.00",
        category: "Juices",
        image: "assets/brand_pack_0005_200ml.png",
        splash: "assets/mango_splash_card.png",
        color: "#f1a100",
        desc: "Rich Alphonso mango drink in a 200 ml pack. Extra fruit pulp for a deeper taste experience, UHT processed to stay fresh for 90 days without refrigeration.",
        calories: "65 kcal",
        fat: "0g",
        carbs: "15g",
        sugars: "12g",
        protein: "0.5g",
        vitc: "45mg",
        badge1: "200 ml Pack",
        badge2: "Extra Pulp",
        badge3: "Aseptic Packed",
        gallery: [
          "assets/brand_pack_0005_200ml.png",
          "assets/mango_pack_splash.jpg"
        ]
      },
      "aamrus-200ml": {
        name: "Demi's Mango Drink (200 ml)",
        price: "Rs. 20.00",
        category: "Juices",
        image: "assets/mango_drink_200ml.png",
        splash: "assets/mango_splash_card.png",
        color: "#d84315",
        desc: "Traditional rich Aam Rus style mango drink crafted with thick Alphonso puree. High fruit content and smooth golden texture for an authentic royal mango indulgence.",
        calories: "68 kcal",
        fat: "0g",
        carbs: "16g",
        sugars: "13g",
        protein: "0.5g",
        vitc: "50mg",
        badge1: "Aam Rus Style",
        badge2: "Thick Puree",
        badge3: "90 Days Shelf Life",
        gallery: [
          "assets/mango_drink_200ml.png",
          "assets/mango_pack_splash.jpg"
        ]
      },
      "litchi-200ml": {
        name: "Fresh Litchi Drink (200 ml)",
        price: "Rs. 20.00",
        category: "Juices",
        image: "assets/brand_pack_0015_200ml.png",
        splash: "assets/litchi_splash_card.png",
        color: "#e91e63",
        desc: "Sweet aromatic litchi drink in a generous 200 ml aseptic pack. Prepared with fresh fruit pulp and spring water for an irresistible tropical refreshment.",
        calories: "60 kcal",
        fat: "0g",
        carbs: "14g",
        sugars: "12g",
        protein: "0.4g",
        vitc: "35mg",
        badge1: "200 ml Pack",
        badge2: "Pure Refreshment",
        badge3: "Zero Preservatives",
        gallery: [
          "assets/brand_pack_0015_200ml.png",
          "assets/litchi_pack_splash.jpg"
        ]
      },
      "apple-200ml": {
        name: "Fresh Apple Drink (200 ml)",
        price: "Rs. 20.00",
        category: "Juices",
        image: "assets/brand_pack_0016_200ml.png",
        splash: "assets/apple_splash_card.png",
        color: "#b81d24",
        desc: "Crisp orchard apple fruit drink in 200 ml packaging. Sourced from high-altitude orchards, sterilized for maximum flavor retention and crisp hydration.",
        calories: "62 kcal",
        fat: "0g",
        carbs: "14.5g",
        sugars: "11.5g",
        protein: "0.3g",
        vitc: "40mg",
        badge1: "200 ml Pack",
        badge2: "Orchard Crisp",
        badge3: "Aseptic Boxed",
        gallery: [
          "assets/brand_pack_0016_200ml.png",
          "assets/apple_pack_splash.jpg"
        ]
      },
      "guava-200ml": {
        name: "Pink Guava Drink (200 ml)",
        price: "Rs. 20.00",
        category: "Juices",
        image: "assets/brand_pack_0018_200ml.png",
        splash: "assets/guava_splash_card.png",
        color: "#388e3c",
        desc: "Delicious pink guava drink in 200 ml pack. Sourced from organic guava orchards, packed with dietary fiber and natural Vitamin C.",
        calories: "64 kcal",
        fat: "0g",
        carbs: "15.2g",
        sugars: "12.8g",
        protein: "0.5g",
        vitc: "90mg",
        badge1: "200 ml Pack",
        badge2: "High Vitamin C",
        badge3: "Sterilized UHT",
        gallery: [
          "assets/brand_pack_0018_200ml.png",
          "assets/guava_splash_card.png"
        ]
      },

      // Pure Milk Lineup
      "tasty-milk": {
        name: "Demi's Tasty Milk (125 ml)",
        price: "Rs. 10.00",
        category: "Pure Milk",
        image: "assets/tasty_milk_125ml.png",
        splash: "assets/milk_splash.png",
        color: "#00897b",
        desc: "Sterilized UHT farm milk in convenient 125 ml aseptic polypacks. Sourced from organic dairy farms, low fat, rich in calcium, and stays fresh for 90 days without refrigeration.",
        calories: "60 kcal",
        fat: "3.5g",
        carbs: "4.5g",
        sugars: "0g",
        protein: "3.3g",
        vitc: "0mg",
        badge1: "125 ml Pouch",
        badge2: "UHT Sterilized",
        badge3: "No Refrigeration Required",
        gallery: [
          "assets/tasty_milk_125ml.png",
          "assets/tasty_milk.png",
          "assets/milk_splash.png"
        ]
      },
      "amole-milk": {
        name: "Demi's Amole Double Toned Milk (125 ml)",
        price: "Rs. 10.00",
        category: "Pure Milk",
        image: "assets/amole_milk_pack.png",
        splash: "assets/milk_splash.png",
        color: "#1565c0",
        desc: "Evergreen UHT Treated Skimmed Double Toned Milk with 90 days shelf life. Sterilized with zero bacteria and machine packed in aseptic polypack for maximum health.",
        calories: "45 kcal",
        fat: "1.5g",
        carbs: "4.8g",
        sugars: "0g",
        protein: "3.2g",
        vitc: "0mg",
        badge1: "Double Toned",
        badge2: "Low Fat",
        badge3: "90 Days Shelf Life",
        gallery: [
          "assets/amole_milk_pack.png",
          "assets/milk_splash.png"
        ]
      },
      "cow-milk": {
        name: "Pure Farm Cow Milk (500 ml)",
        price: "Rs. 30.00",
        category: "Pure Milk",
        image: "assets/tasty_milk.png",
        splash: "assets/milk_splash.png",
        color: "#0288d1",
        desc: "Pure farm cow milk in 500 ml pack. High calcium, natural proteins, and zero additives. Processed under European sanitation guidelines.",
        calories: "68 kcal",
        fat: "3.8g",
        carbs: "4.7g",
        sugars: "0g",
        protein: "3.4g",
        vitc: "0mg",
        badge1: "100% Farm Cow",
        badge2: "500 ml Pack",
        badge3: "Rich in Calcium",
        gallery: [
          "assets/tasty_milk.png",
          "assets/milk_splash.png"
        ]
      },
      "double-toned-milk": {
        name: "Demi's Tasty Milk (400 ml)",
        price: "Rs. 35.00",
        category: "Pure Milk",
        image: "assets/tasty_milk_400ml.png",
        splash: "assets/milk_splash.png",
        color: "#0288d1",
        desc: "UHT treated skimmed milk in 400 ml aseptic pouch. Sterilized with zero bacteria. Low fat to maintain slim health, rich in Vitamin D3 and calcium.",
        calories: "48 kcal",
        fat: "1.5g",
        carbs: "4.7g",
        sugars: "0g",
        protein: "3.2g",
        vitc: "0mg",
        badge1: "400 ml Pouch",
        badge2: "Slim Health",
        badge3: "Aseptic Polypack",
        gallery: [
          "assets/tasty_milk_400ml.png",
          "assets/milk_splash.png"
        ]
      },

      // Soft Drinks & Sparkling Soda Lineup
      "cola": {
        name: "Prebiotic Craft Cola (250 ml)",
        price: "Rs. 20.00",
        category: "Soft Drinks",
        image: "assets/soft_drink_cola.png",
        splash: "assets/cola_splash.png",
        color: "#3e2723",
        desc: "Gourmet prebiotic botanical cola made with real vanilla bean, citrus oils, kola nut, and zero artificial colors. Crisp carbonation for guilt-free soda pleasure.",
        calories: "40 kcal",
        fat: "0g",
        carbs: "9.5g",
        sugars: "8.5g",
        protein: "0g",
        vitc: "0mg",
        badge1: "Vanilla Bean",
        badge2: "Kola Nut Extract",
        badge3: "Prebiotic Fiber",
        gallery: [
          "assets/soft_drink_cola.png",
          "assets/cola_ad_new.jpg",
          "assets/cola_ad_ice.jpg"
        ]
      },
      "lemon": {
        name: "Demi's Lemona (250 ml)",
        price: "Rs. 20.00",
        category: "Soft Drinks",
        image: "assets/soft_drink_lemon.png",
        splash: "assets/lime_splash.png",
        color: "#c0ca33",
        desc: "Refreshing carbonated lemon lime soda packed with real lime pulp, crushed black pepper, ginger extracts, and gut-healthy prebiotics.",
        calories: "32 kcal",
        fat: "0g",
        carbs: "7.5g",
        sugars: "6.5g",
        protein: "0.1g",
        vitc: "15mg",
        badge1: "Fresh Lime Pulp",
        badge2: "Prebiotic Fibers",
        badge3: "Low Calories",
        gallery: [
          "assets/soft_drink_lemon.png",
          "assets/lemona_ad_new.jpg"
        ]
      },
      "orange": {
        name: "Sparkling Blood Orange (250 ml)",
        price: "Rs. 20.00",
        category: "Soft Drinks",
        image: "assets/soft_drink_orange.png",
        splash: "assets/lime_splash.png",
        color: "#ef6c00",
        desc: "Zesty sparkling soda infused with natural blood orange juice, Vitamin C, and cold-pressed citrus oils. Crisp, vibrant, and ultra-refreshing.",
        calories: "36 kcal",
        fat: "0g",
        carbs: "8.8g",
        sugars: "7.8g",
        protein: "0.1g",
        vitc: "30mg",
        badge1: "Blood Orange",
        badge2: "Vitamin C Boost",
        badge3: "Crisp Carbonation",
        gallery: [
          "assets/soft_drink_orange.png",
          "assets/orange_ad.jpg"
        ]
      },
      "masala-zeera": {
        name: "Demi's Masala Zeera (250 ml)",
        price: "Rs. 20.00",
        category: "Soft Drinks",
        image: "assets/soft_drink_masala_zeera.png",
        splash: "assets/lime_splash.png",
        color: "#795548",
        desc: "A carbonated digestive drink filled with roasted spices, cumin extracts, mint, and black rock salt. Processed at our Haridwar facility for traditional digestive relief.",
        calories: "30 kcal",
        fat: "0g",
        carbs: "7.0g",
        sugars: "6.0g",
        protein: "0g",
        vitc: "8mg",
        badge1: "Roasted Cumin",
        badge2: "Digestive Relief",
        badge3: "Traditional Spice",
        gallery: [
          "assets/soft_drink_masala_zeera.png"
        ]
      },
      "multani-zeera": {
        name: "Demi's Multani Zeera (250 ml)",
        price: "Rs. 20.00",
        category: "Soft Drinks",
        image: "assets/soft_drink_multani_zeera.png",
        splash: "assets/lime_splash.png",
        color: "#5d4037",
        desc: "Tangy carbonated drink with roasted cumin extracts, black salt, and digestive minerals. Crafted for rich authentic flavor and gut wellness.",
        calories: "35 kcal",
        fat: "0g",
        carbs: "8.5g",
        sugars: "7.5g",
        protein: "0.0g",
        vitc: "10mg",
        badge1: "Multani Formula",
        badge2: "Digestive Minerals",
        badge3: "Zero Preservatives",
        gallery: [
          "assets/soft_drink_multani_zeera.png"
        ]
      }
    };

    // Auto-initialize default properties for database entries to keep code extremely clean
    Object.keys(productsData).forEach(key => {
      const p = productsData[key];
      if (!p.cratePrice) p.cratePrice = "Rs. " + (parseFloat(p.price.replace(/[^0-9.]/g, '')) * 24).toFixed(2);
      if (!p.badge1) p.badge1 = "100% Pure";
      if (!p.badge2) p.badge2 = "Sterilized UHT";
      if (!p.badge3) p.badge3 = "Aseptic Packed";
      if (!p.gallery) p.gallery = [p.image];
      
      // Default ingredients based on category
      if (!p.ingredientPills) {
        if (p.category === "Juices") {
          p.ingredientPills = [
            { name: "Fruit Pulp", percent: "30%" },
            { name: "Spring Water", percent: "60%" },
            { name: "Cane Sugar", percent: "10%" }
          ];
        } else if (p.category === "Soft Drinks") {
          p.ingredientPills = [
            { name: "Natural Extract", percent: "5%" },
            { name: "Lemon/Lime Juice", percent: "3%" },
            { name: "Carbonated Water", percent: "92%" }
          ];
        } else { // Milk
          p.ingredientPills = [
            { name: "Cow Milk", percent: "99.5%" },
            { name: "Calcium & Vit D3", percent: "0.5%" }
          ];
        }
      }
      
      if (!p.ingredientsList) {
        if (p.category === "Juices") {
          p.ingredientsList = [
            { name: "Organic Fruits", desc: "Sourced from local farms.", icon: "fa-apple-whole" },
            { name: "Filtered Water", desc: "Ultra-filtered spring water.", icon: "fa-tint" },
            { name: "Cane Sugar", desc: "Natural unrefined sweetness.", icon: "fa-cubes" },
            { name: "Vitamin C", desc: "Immunity boosting antioxidant.", icon: "fa-shield-halved" }
          ];
        } else if (p.category === "Soft Drinks") {
          p.ingredientsList = [
            { name: "Active Botanical Extracts", desc: "Premium prebiotic herbs.", icon: "fa-seedling" },
            { name: "Carbonated Water", desc: "Crisp and refreshing bubbles.", icon: "fa-wind" },
            { name: "Natural Sweeteners", desc: "No artificial chemical sugars.", icon: "fa-cookie" },
            { name: "Essential Fruit Oils", desc: "Cold-pressed zesty extract.", icon: "fa-droplet" }
          ];
        } else { // Milk
          p.ingredientsList = [
            { name: "Fresh Cow Milk", desc: "Directly from organic dairy farms.", icon: "fa-cow" },
            { name: "Calcium", desc: "Essential minerals for bone strength.", icon: "fa-bone" },
            { name: "Vitamin D3", desc: "For optimal calcium absorption.", icon: "fa-sun" },
            { name: "Prebiotics", desc: "Promotes healthy gut flora.", icon: "fa-heart" }
          ];
        }
      }
      
      if (!p.processDesc) {
        p.processDesc = `Our raw ingredients are sourced directly from certified organic farms and processed in our state-of-the-art facility in Haridwar, Uttarakhand. We utilize fully automatic European UHT sterilization plants and aseptic packing machinery to seal our products in multi-layer carton packaging. This preserves natural nutrients, fresh taste, and absolute hygiene without using any artificial preservatives or refrigeration.`;
      }
      
      if (!p.reviews) {
        p.reviews = [
          { name: "Franny May", rating: 5, comment: "High quality ingredients. Very refreshing, and the packaging keeps it fresh without refrigeration." },
          { name: "John Kowalski", rating: 5, comment: "Excellent taste! Perfect for wholesale stocking. Prompt deliveries and great customer support." }
        ];
      }
    });

    // Parse product ID from URL
        // Parse product ID from URL with robust alias resolution
    const urlParams = new URLSearchParams(window.location.search);
    let rawId = (urlParams.get('id') || 'mango').toLowerCase().trim();

    const aliasMap = {
      'mango-160ml': 'mango', 'mango-juice': 'mango', 'alphonso-mango': 'mango',
      'mango-200': 'mango-200ml', 'mango-drink': 'mango-200ml',
      'aamrus': 'aamrus-200ml', 'aam-rus': 'aamrus-200ml', 'aam-rus-200ml': 'aamrus-200ml', 'demi-aamrus': 'aamrus-200ml',
      'litchi-160ml': 'litchi', 'litchi-juice': 'litchi', 'fresh-litchi': 'litchi',
      'litchi-200': 'litchi-200ml', 'litchi-drink': 'litchi-200ml',
      'apple-160ml': 'apple', 'apple-juice': 'apple', 'fresh-apple': 'apple',
      'apple-200': 'apple-200ml', 'apple-drink': 'apple-200ml',
      'guava-160ml': 'guava', 'guava-juice': 'guava', 'pink-guava': 'guava',
      'guava-200': 'guava-200ml', 'guava-drink': 'guava-200ml',
      'mix-fruit': 'mixed-fruit', 'mixed-fruit-160ml': 'mixed-fruit', 'mixed_fruit': 'mixed-fruit', 'aam-rus-160ml': 'mixed-fruit',
      'tasty-milk-125ml': 'tasty-milk', 'tasty_milk': 'tasty-milk', 'milk-125ml': 'tasty-milk', 'milk': 'tasty-milk',
      'amole': 'amole-milk', 'amole-125ml': 'amole-milk', 'amole_milk': 'amole-milk',
      'cow_milk': 'cow-milk', 'farm-cow-milk': 'cow-milk', 'pure-cow-milk': 'cow-milk',
      'tasty-milk-400ml': 'double-toned-milk', 'double_toned_milk': 'double-toned-milk', 'skimmed-milk': 'double-toned-milk',
      'craft-cola': 'cola', 'demi-cola': 'cola', 'soft-drink-cola': 'cola',
      'lemon-lime': 'lemon', 'lemona': 'lemon', 'sparkling-lemon': 'lemon',
      'blood-orange': 'orange', 'sparkling-orange': 'orange',
      'zeera': 'masala-zeera', 'masala_zeera': 'masala-zeera', 'zeera-soda': 'masala-zeera',
      'multani': 'multani-zeera', 'multani_zeera': 'multani-zeera', 'multani-zeera-soda': 'multani-zeera'
    };

    const pId = aliasMap[rawId] || (productsData[rawId] ? rawId : 'mango');
    const product = productsData[pId] || productsData['mango'];
    
    // Select active variant
    let selectedPkg = "single";  // single vs crate

    function getActiveData() {
      let volumeText = "200 ml";
      if (pId === "mango" || pId === "litchi" || pId === "apple" || pId === "mixed-fruit" || pId === "guava" || pId === "multani-zeera" || pId === "masala-zeera") {
        volumeText = "160 ml";
      } else if (pId === "double-toned-milk") {
        volumeText = "400 ml";
      } else if (pId === "cow-milk" || pId === "amole-milk") {
        volumeText = "125 ml";
      }
      
      return {
        name: product.name,
        price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
        image: product.image,
        volume: volumeText
      };
    }

    // Render volume info
    const volumeOptionsContainer = document.getElementById('volume-options');
    volumeOptionsContainer.innerHTML = '';
    const activeData = getActiveData();
    const btn = document.createElement('button');
    btn.className = "size-option-btn active";
    btn.disabled = true;
    btn.innerText = activeData.volume;
    volumeOptionsContainer.appendChild(btn);

    // Toggle Packaging Selector
    const sizeSingleBtn = document.getElementById('size-single-btn');
    const sizeCrateBtn = document.getElementById('size-crate-btn');
    
    sizeSingleBtn.addEventListener('click', () => {
      sizeSingleBtn.classList.add('active');
      sizeCrateBtn.classList.remove('active');
      selectedPkg = 'single';
      updatePriceDisplay();
    });
    
    sizeCrateBtn.addEventListener('click', () => {
      sizeCrateBtn.classList.add('active');
      sizeSingleBtn.classList.remove('active');
      selectedPkg = 'crate';
      updatePriceDisplay();
    });

    // Update Price Display
    function updatePriceDisplay() {
      const activeData = getActiveData();
      if (selectedPkg === 'single') {
        document.getElementById('p-price').innerText = "Rs. " + activeData.price.toFixed(2);
      } else {
        const cratePriceVal = activeData.price * 24;
        document.getElementById('p-price').innerText = "Rs. " + cratePriceVal.toFixed(2);
      }
    }

    // Update Content
    function updatePageContent() {
      const activeData = getActiveData();
      
      // Update Title & Image & Category
      document.getElementById('p-title').innerText = activeData.name;
      document.getElementById('p-bread-title').innerText = activeData.name;
      if (document.getElementById('p-category')) document.getElementById('p-category').innerText = (product.category || 'Juices').toUpperCase();
      if (document.getElementById('p-bread-category')) document.getElementById('p-bread-category').innerText = product.category || 'Juices';
      document.title = `${activeData.name} — Demi's Tasty 🍊`;
      
      // Update Image & Splash
      document.getElementById('p-image').src = activeData.image;
      if (document.getElementById('p-splash') && product.splash) document.getElementById('p-splash').src = product.splash;
      
      // Update Gallery Thumbnail Index 0
      if (product.gallery && product.gallery.length > 0) {
        product.gallery[0] = activeData.image;
        renderGalleryThumbs();
      }
      
      updatePriceDisplay();
    }

    // Render Gallery Thumbnails helper
    const galleryContainer = document.getElementById('p-gallery');
    const visualBox = document.getElementById('detail-visual-box');
    let currentGalleryIndex = 0;

    function renderGalleryThumbs() {
      galleryContainer.innerHTML = '';
      product.gallery.forEach((imgSrc, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === currentGalleryIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img decoding="async" loading="lazy" src="${imgSrc}" alt="Thumbnail ${index + 1}">`;
        
        thumb.addEventListener('click', () => {
          currentGalleryIndex = index;
          updateGalleryDisplay();
        });
        galleryContainer.appendChild(thumb);
      });
    }

    function updateGalleryDisplay() {
      galleryContainer.querySelectorAll('.gallery-thumb').forEach((t, idx) => {
        if (idx === currentGalleryIndex) t.classList.add('active');
        else t.classList.remove('active');
      });
      
      const imgSrc = product.gallery[currentGalleryIndex];
      document.getElementById('p-image').src = imgSrc;
      
      if (currentGalleryIndex === 1 && product.gallery.length > 1) {
        visualBox.classList.add('full-image-active');
      } else {
        visualBox.classList.remove('full-image-active');
      }
    }

    document.getElementById('gallery-prev-btn').addEventListener('click', () => {
      if (product.gallery && product.gallery.length > 1) {
        currentGalleryIndex = (currentGalleryIndex - 1 + product.gallery.length) % product.gallery.length;
        updateGalleryDisplay();
      }
    });
    
    document.getElementById('gallery-next-btn').addEventListener('click', () => {
      if (product.gallery && product.gallery.length > 1) {
        currentGalleryIndex = (currentGalleryIndex + 1) % product.gallery.length;
        updateGalleryDisplay();
      }
    });

    // Swapping Tabs
    document.querySelectorAll('.tab-header-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-header-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = `tab-${btn.getAttribute('data-tab')}`;
        document.getElementById(tabId).classList.add('active');
      });
    });

    // Initialize Page Content
    updatePageContent();
    renderGalleryThumbs();

    // Tab 1: Ingredients statistics
    const statsContainer = document.getElementById('p-ingredient-stats');
    statsContainer.innerHTML = '';
    product.ingredientPills.forEach(p => {
      const statBox = document.createElement('div');
      statBox.className = 'ingredient-stat';
      statBox.innerHTML = `
        <span class="ingredient-stat-val">${p.percent}</span>
        <span class="ingredient-stat-label">${p.name}</span>
      `;
      statsContainer.appendChild(statBox);
    });
    document.getElementById('p-process-desc-box').innerText = product.desc;

    // Tab 2: Nutrition values
    document.getElementById('nutr-calories').innerText = product.calories;
    document.getElementById('nutr-fat').innerText = product.fat;
    document.getElementById('nutr-carbs').innerText = product.carbs;
    document.getElementById('nutr-sugars').innerText = product.sugars;
    document.getElementById('nutr-protein').innerText = product.protein;
    document.getElementById('nutr-vitc').innerText = product.vitc;

    // Tab 3: Sourcing desc
    document.getElementById('p-sourcing-box').innerText = product.processDesc;

    // Render Ingredients Card Row
    const cardsRow = document.getElementById('p-ingredients-row');
    cardsRow.innerHTML = '';
    product.ingredientsList.forEach(ing => {
      const card = document.createElement('div');
      card.className = 'ingredient-detail-card';
      card.innerHTML = `
        <div class="ingredient-icon-wrapper">
          <i class="fas ${ing.icon}"></i>
        </div>
        <h3>${ing.name}</h3>
        <p>${ing.desc}</p>
      `;
      cardsRow.appendChild(card);
    });

    // Render Opinions/Reviews
    const reviewsFeed = document.getElementById('p-reviews-list');
    
    function renderReviews() {
      reviewsFeed.innerHTML = '';
      product.reviews.forEach(rev => {
        const starsHtml = '<i class="fas fa-star"></i>'.repeat(rev.rating) + '<i class="far fa-star"></i>'.repeat(5 - rev.rating);
        const card = document.createElement('div');
        card.className = 'review-item-card';
        card.innerHTML = `
          <div class="review-header">
            <span class="review-author">${rev.name}</span>
            <div class="review-stars">${starsHtml}</div>
          </div>
          <p class="review-comment">${rev.comment}</p>
        `;
        reviewsFeed.appendChild(card);
      });
      document.getElementById('p-reviews-count').innerText = `(${product.reviews.length} Reviews)`;
    }
    renderReviews();

    // Handle Review Form Submission
    const reviewForm = document.getElementById('product-review-form');
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rev-name').value;
      const rating = parseInt(document.getElementById('rev-rating').value) || 5;
      const comment = document.getElementById('rev-comment').value;
      
      product.reviews.unshift({ name, rating, comment });
      renderReviews();
      reviewForm.reset();
      showToast("Thank you! Your review was submitted successfully.");
    });

    // Render Recently Viewed cards dynamically (excluding current product)
    const recentGrid = document.getElementById('p-recent-grid');
    recentGrid.innerHTML = '';
    
    const allKeys = Object.keys(productsData);
    const otherKeys = allKeys.filter(k => k !== pId).slice(0, 4); // Pick first 4 other products
    
    otherKeys.forEach(k => {
      const p = productsData[k];
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.background = '#fff';
      card.style.borderRadius = '24px';
      card.style.border = '1px solid #e0dfd5';
      card.style.padding = '1.5rem';
      
      card.innerHTML = `
        <figure class="product-thumbnail" style="height: 180px; position: relative; display: flex; align-items: center; justify-content: center; background: var(--bg-organic); border-radius: 18px; overflow: hidden; margin-bottom: 1.25rem;">
          <img decoding="async" loading="lazy" src="${p.image}" alt="${p.name}" style="max-height: 140px; object-fit: contain; z-index: 2;">
        </figure>
        <span class="product-vendor" style="font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; color: #777; letter-spacing: 1px; display: block; margin-bottom: 0.35rem;">DEMI'S FRESH</span>
        <h3 class="product-title" style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 800; color: #1a1a1a; margin-bottom: 0.5rem; line-height: 1.3;"><a href="product.html?id=${k}" style="color: inherit; text-decoration: none;">${p.name}</a></h3>
        <div class="product-meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <span class="product-price" style="font-family: var(--font-heading); font-weight: 900; color: var(--accent-primary); font-size: 1.15rem;">${p.price}</span>
          <a href="product.html?id=${k}" class="quick-buy-btn" style="padding: 6px 14px; border-radius: 50px; background: var(--accent-primary); color: #fff; text-decoration: none; font-size: 0.8rem; font-weight: 600;">View</a>
        </div>
      `;
      recentGrid.appendChild(card);
    });

    // Quantity Selector logic with MOQ 500
    const qtyInput = document.getElementById('qty-input');
    const btnMinus = document.getElementById('qty-minus');
    const btnPlus = document.getElementById('qty-plus');

    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 500;
      if (val > 500) {
        qtyInput.value = val - 50;
        if (parseInt(qtyInput.value) < 500) qtyInput.value = 500;
      }
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 500;
      qtyInput.value = val + 50;
    });

    qtyInput.addEventListener('change', () => {
      let val = parseInt(qtyInput.value);
      if (isNaN(val) || val < 500) {
        qtyInput.value = 500;
      }
    });

    // Toast Notice Helper
    function showToast(message) {
      const container = document.getElementById('toast-wrapper');
      const toast = document.createElement('div');
      toast.className = 'toast-notice';
      toast.innerHTML = `
        <div class="toast-content">
          <i class="fas fa-check-circle" style="color: var(--accent-primary); margin-right: 10px;"></i>
          <span>${message}</span>
        </div>
      `;
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 50);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }, 3500);
    }

    // Add to Cart
    document.getElementById('add-to-cart-action').addEventListener('click', () => {
      const qty = qtyInput.value;
      const activeData = getActiveData();
      const unitText = selectedPkg === 'single' ? 'individual bottles' : 'crates';
      showToast(`Added ${qty} ${unitText} of ${activeData.name} to your wholesale cart!`);
    });

    // Mobile Navbar Offcanvas Toggle
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
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
    }

    // Handle Contact Form Submit (Footer)
    const contactForm = document.getElementById('footer-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Thanks for reaching out! We will contact you soon.");
        contactForm.reset();
      });
    }
  </script>

  <!-- ══════════════════════════════════════════════
       CUSTOMER ACCOUNT & LOGIN MODAL
  ══════════════════════════════════════════════ -->
  <div class="account-modal-overlay" id="account-modal">
    <div class="account-modal-card">
      <div class="account-modal-header">
        <button class="account-modal-close" id="close-account-modal" onclick="closeAccountModal(event)" aria-label="Close Modal">
          <i class="fas fa-times"></i>
        </button>
        <h3>Demi's Customer Portal</h3>
        <p>Manage your orders, addresses & rewards</p>
      </div>

      <div class="account-modal-nav">
        <button class="account-tab-btn active" data-tab="login-tab">Sign In</button>
        <button class="account-tab-btn" data-tab="register-tab">Sign Up</button>
        <button class="account-tab-btn" data-tab="dashboard-tab" id="tab-dashboard-btn" style="display: none;">My Profile</button>
      </div>

      <div class="account-modal-body">
        <!-- 1. Login Tab -->
        <div class="account-tab-content active" id="login-tab">
          <form id="form-customer-login" onsubmit="return false;">
            <div class="form-group">
              <label>Email or Mobile Number</label>
              <div class="form-input-wrap">
                <i class="far fa-envelope"></i>
                <input type="text" id="login-input-id" placeholder="rahul@example.com" required value="customer@demistasty.com">
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <div class="form-input-wrap">
                <i class="fas fa-lock"></i>
                <input type="password" id="login-input-pass" placeholder="••••••••" required value="password123">
              </div>
            </div>
            <div class="form-flex">
              <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; text-transform: none; font-weight: 500;">
                <input type="checkbox" checked> Remember Me
              </label>
              <a href="javascript:void(0)" onclick="showToast(\'Password Reset\', \'Password reset instructions have been sent to your email.\', \'fa-key\')">Forgot Password?</a>
            </div>
            <button type="submit" class="btn-account-submit" id="btn-submit-login">Sign In to My Account</button>
          </form>
        </div>

        <!-- 2. Register Tab -->
        <div class="account-tab-content" id="register-tab">
          <form id="form-customer-register" onsubmit="return false;">
            <div class="form-group">
              <label>Full Name</label>
              <div class="form-input-wrap">
                <i class="far fa-user"></i>
                <input type="text" placeholder="Rahul Sharma" required>
              </div>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <div class="form-input-wrap">
                <i class="far fa-envelope"></i>
                <input type="email" placeholder="rahul@example.com" required>
              </div>
            </div>
            <div class="form-group">
              <label>Mobile Number</label>
              <div class="form-input-wrap">
                <i class="fas fa-phone-alt"></i>
                <input type="tel" placeholder="+91 98765 43210" required>
              </div>
            </div>
            <div class="form-group">
              <label>Create Password</label>
              <div class="form-input-wrap">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="••••••••" required>
              </div>
            </div>
            <button type="submit" class="btn-account-submit" id="btn-submit-register">Create Account</button>
          </form>
        </div>

        <!-- 3. Account Dashboard Tab -->
        <div class="account-tab-content" id="dashboard-tab">
          <div class="user-profile-badge">
            <div class="profile-avatar">RS</div>
            <div class="profile-info">
              <h4 id="user-display-name">Rahul Sharma</h4>
              <p>customer@demistasty.com | +91 98765 43210</p>
            </div>
          </div>

          <div class="account-orders-list">
            <h5>Recent Orders</h5>
            <div class="order-card-mini">
              <div class="order-card-info">
                <strong>Order #DT-9821 (160ml Lemona Pack x10)</strong>
                <span>Ordered: Today, 11:30 AM • ₹100.00</span>
              </div>
              <span class="order-status-tag status-transit">In Transit 🚚</span>
            </div>
            <div class="order-card-mini">
              <div class="order-card-info">
                <strong>Order #DT-9104 (160ml Litchi Rush x5)</strong>
                <span>Ordered: 12 July 2026 • ₹50.00</span>
              </div>
              <span class="order-status-tag status-delivered">Delivered ✅</span>
            </div>
          </div>

          <button class="btn-logout-account" id="btn-account-logout">Sign Out</button>
        </div>
      </div>
    </div>
  </div>

</body>
</html>

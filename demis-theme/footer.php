<footer class="tropicana-footer">


      <!-- Footer Content Area -->
      <div class="footer-content-wrap">
        <div class="container" style="position: relative;">
          <!-- Floating Products Collage in Footer -->
          <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/footer png.png" class="footer-floating-collage" alt="Demi's Products Collage">
          <!-- Centered Master Logo (Demi's Brand Logo) -->
          <div class="footer-logo-row text-center">
            <img decoding="async" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Demi's Master Logo" class="footer-logo-white">
          </div>

          <!-- Footer Columns Grid -->
          <div class="footer-columns-grid">
            <!-- Column 1: Main Pages -->
            <div class="footer-col font-large">
              <h4>NAVIGATION</h4>
              <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="col-link-bold">Home</a>
              <a href="<?php echo esc_url( home_url( '/our-story/' ) ); ?>" class="col-link-bold">Our Story</a>
              <a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="col-link-bold">Products</a>
              <a href="<?php echo esc_url( home_url( '/become-a-partner/' ) ); ?>" class="col-link-bold">Become a Partner</a>
              <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="col-link-bold">Contact Us</a>
            </div>

            <!-- Column 2 (Empty/Spacer) -->
            <div class="footer-col font-large">
            </div>

            <!-- Column 3 (Empty/Spacer) -->
            <div class="footer-col font-small">
            </div>

            <!-- Column 4 (Contact Form) -->
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

          <!-- Bottom Row: Socials & Copyright -->
          <div class="footer-bottom-row">
            <div class="social-icons-white">
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="footer-copyright">
              <p>© 2026 DEMI'S PRODUCTS, INC. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </main>

  <!-- Interactive toast container -->
  <div class="toast-container" id="toast-wrapper"></div>


  <!-- GSAP & Swiper Scripts -->
  <script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
  
  <script defer src="mockup.js"></script>
  <script>
  // ── Product Carousel Arrows ──
  (function() {
    const carousel = document.getElementById('products-carousel');
    const prevBtn  = document.querySelector('.carousel-prev');
    const nextBtn  = document.querySelector('.carousel-next');
    if (!carousel || !prevBtn || !nextBtn) return;

    function getScrollStep() {
      // Scroll by ~1 card width + gap
      const card = carousel.querySelector('.product-card');
      return card ? card.offsetWidth + 24 : 260;
    }

    function updateArrows() {
      prevBtn.disabled = carousel.scrollLeft <= 0;
      nextBtn.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
    }

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    carousel.addEventListener('scroll', updateArrows);

    // Re-run updateArrows whenever a category tab switches (tabs show/hide cards)
    document.querySelectorAll('.category-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(() => { carousel.scrollLeft = 0; updateArrows(); }, 50);
      });
    });

    updateArrows();
  })();
  </script>
  <?php wp_footer(); ?>
</body>
</html>
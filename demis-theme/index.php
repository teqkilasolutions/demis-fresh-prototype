<?php
get_header();
?>
<main id="scroll-container" style="padding: 120px 0; background: var(--bg-organic);">
  <div class="container">
    <?php
    if ( have_posts() ) :
      while ( have_posts() ) : the_post();
        the_title('<h1>', '</h1>');
        the_content();
      endwhile;
    else :
      echo '<p>No content found</p>';
    endif;
    ?>
  </div>
</main>
<?php
get_footer();
?>

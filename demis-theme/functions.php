<?php
/**
 * Demi's Tasty Theme functions and definitions
 */

function demis_tasty_scripts() {
    // Enqueue Stylesheets
    wp_enqueue_style( 'demis-tasty-main-style', get_stylesheet_uri() );
    wp_enqueue_style( 'demis-tasty-mockup-style', get_template_directory_uri() . '/mockup.css', array(), '3.0' );
    
    // Enqueue JS
    wp_enqueue_script( 'demis-tasty-script', get_template_directory_uri() . '/script.js', array(), '1.0.0', true );
    wp_enqueue_script( 'demis-tasty-mockup', get_template_directory_uri() . '/mockup.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'demis_tasty_scripts' );

// Theme Supports
function demis_tasty_setup() {
    add_theme_support( 'woocommerce' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'demis-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'demis_tasty_setup' );
?>

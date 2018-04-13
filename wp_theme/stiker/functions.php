<?php

function stiker_setup() {

  load_theme_textdomain('stiker');

  add_theme_support('title-tag');

  add_theme_support('post-thumbnails');

  add_theme_support('html5', array(
    'search_form', 
    'comment-form', 
    'comment-list', 
    'gallery', 
    'caption'
  ));

  add_theme_support('post-formats', array(
    'aside', 
    'image', 
    'video', 
    'gallery'    
  ));

}

add_action('after_setup_theme', 'stiker_setup');


// add_action('wp_print_styles', 'theme_name_scripts'); // можно использовать этот хук он более поздний
function stiker_scripts() {
	wp_enqueue_style( 'style-css', get_stylesheet_uri() );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'stiker_scripts' );
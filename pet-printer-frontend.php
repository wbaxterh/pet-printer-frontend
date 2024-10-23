<?php
/**
 * Plugin Name: Pet Printer Frontend
 * Description: A plugin that integrates the Pet Art Generator React App into WordPress.
 * Version: 1.0
 * Author: HuberPress
 */

if (!defined('ABSPATH')) {
    exit; // Prevent direct access
}

// Function to find all JavaScript and CSS files
function pet_printer_find_assets($path, $extension) {
    $files = glob($path . '/*.' . $extension); // Look for all files with the given extension
    return $files ?: []; // Return all matching files or an empty array
}

// Enqueue the React app assets
function pet_printer_enqueue_assets() {
    $plugin_dir_path = plugin_dir_path(__FILE__);
    $plugin_dir_url = plugin_dir_url(__FILE__);

    // Enqueue the correct CSS file(s)
    $css_files = pet_printer_find_assets($plugin_dir_path . 'build/static/css', 'css');
    foreach ($css_files as $css_file) {
        wp_enqueue_style(
            'pet-printer-frontend-style-' . basename($css_file),
            $plugin_dir_url . 'build/static/css/' . basename($css_file),
            [],
            filemtime($css_file)
        );
    }

    // Enqueue the correct JS file(s), including chunks
    $js_files = pet_printer_find_assets($plugin_dir_path . 'build/static/js', 'js');
    foreach ($js_files as $js_file) {
        wp_enqueue_script(
            'pet-printer-frontend-script-' . basename($js_file),
            $plugin_dir_url . 'build/static/js/' . basename($js_file),
            [],
            filemtime($js_file),
            true // Load in the footer
        );
    }

    // Optionally pass data to React (if needed)
    wp_localize_script('pet-printer-frontend-script-' . basename(end($js_files)), 'petPrinterData', [
        'apiEndpoint' => 'https://your-api-endpoint.com/generate',
        'nonce' => wp_create_nonce('wp_rest'),
    ]);
}
add_action('wp_enqueue_scripts', 'pet_printer_enqueue_assets');

// Shortcode to display the React app
function pet_printer_shortcode() {
    return '<div id="pet-printer-app"></div>'; // React will mount here
}
add_shortcode('pet_printer', 'pet_printer_shortcode');

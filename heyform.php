<?php
/**
 * Plugin Name: HeyForm
 * Plugin URI:  https://heyform.net
 * Description: Serverless Online Form Builder & Data Management Platform
 * Author:      Heyooo, Inc.
 * Author URI:  https://heyooo.com
 * Text Domain: heyform
 * Domain Path: /langs
 * Version:     1.3.0
 * License:     GPL-3.0
 */

define('HEYFORM_VERSION', '1.3.0');
define('HEYFORM_PUBLIC_URL', plugins_url('', __FILE__));
define('HEYFORM_DIR', plugin_dir_path(__FILE__));
define('HEYFORM_LANGS_DIR', HEYFORM_DIR . 'langs');

function heyformStaticUrl() {
  $pluginUrl = HEYFORM_PUBLIC_URL;
  $version = HEYFORM_VERSION;
  return "{$pluginUrl}/static/@{$version}";
}

function heyformAssetUrl($filename) {
  $staticUrl = heyformStaticUrl();
  return "{$staticUrl}/{$filename}";
}

function heyformBlock() {
  wp_register_script(
    'heyform-block',
    heyformAssetUrl('block.js'),
    array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
    HEYFORM_VERSION
  );

  /**
   * Inserts JSON object into page.
   */
  wp_localize_script('heyform-block', '_heyformBlock', array(
    "staticUrl" => heyformStaticUrl(),
    "graphqlUrl" => "https://my.heyform.net/graphql",
    "embedUrlPrefix" => "https://my.heyform.net/f"
  ));

  wp_register_style(
    'heyform-block',
    heyformAssetUrl('block.css'),
    array(),
    HEYFORM_VERSION
  );

  /**
   * Load all translations for block from the JSON file.
   */
  if (function_exists('wp_set_script_translations')) {
  	wp_set_script_translations(
  		'heyform-block',
  		'heyform',
  		HEYFORM_LANGS_DIR
  	);
  }

  register_block_type('heyform/heyform-block', array(
    'editor_script' => 'heyform-block',
    'editor_style' => 'heyform-block'
  ));

  /**
   * Load all translations for our plugin from the MO file.
   */
  load_plugin_textdomain('heyform', false, HEYFORM_LANGS_DIR);
}

if (function_exists('register_block_type')) {
  add_action('init', 'heyformBlock');
}

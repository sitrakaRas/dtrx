<?php
/**
 * Contro Positioning over google maps.
 * @package Maps
 * @author Flipper Code <hello@flippercode.com>
 */


$form->add_element( 'group', 'map_import_setting', array(
	'value' => __( 'Import Settings', WPGMP_TEXT_DOMAIN ),
	'before' => '<div class="fc-12">',
	'after' => '</div>',
));

$form->add_element( 'textarea', 'wpgmp_import_code', array(
	'lable' => __( 'Import Code', WPGMP_TEXT_DOMAIN ),
	'value' => '',
	'desc' => __( 'Paste here import json code to overwrite map settings. Your map settings will be overwrite permanately.', WPGMP_TEXT_DOMAIN ),
	'textarea_rows' => 10,
	'textarea_name' => 'wpgmp_import_code',
	'class' => 'form-control',
));

if( !empty($map) ) {

$json_hash = base64_encode(serialize($map));

$form->add_element( 'textarea', 'wpgmp_export_code', array(
	'lable' => __( 'Export Code', WPGMP_TEXT_DOMAIN ),
	'value' => $json_hash,
	'desc' => __( 'Copy above export code and paste on your map import setting to migrate maps settings from one site to another site.', WPGMP_TEXT_DOMAIN ),
	'textarea_rows' => 10,
	'textarea_name' => 'wpgmp_export_code',
	'class' => 'form-control',
));

}
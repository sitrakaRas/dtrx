<?php
/**
 * Contro Positioning over google maps.
 * @package Maps
 * @author Flipper Code <hello@flippercode.com>
 */


$form->add_element( 'group', 'map_ui_setting', array(
	'value' => __( 'Design Settings', WPGMP_TEXT_DOMAIN ),
	'before' => '<div class="fc-12">',
	'after' => '</div>',
));

$form->add_element( 'checkbox', 'map_all_control[apply_custom_design]', array(
	'lable' => __( 'Apply Custom Design', WPGMP_TEXT_DOMAIN ),
	'value' => 'true',
	'current' => $data['map_all_control']['apply_custom_design'],
	'desc' => __( 'Apply your own design everywhere.', WPGMP_TEXT_DOMAIN ),
	'class' => 'chkbox_class switch_onoff',
	'data' => array( 'target' => '.wpgmp_design_listing' ),
));

$form->add_element( 'textarea', 'map_all_control[wpgmp_custom_css]', array(
	'lable' => __( 'Custom CSS', WPGMP_TEXT_DOMAIN ),
	'value' => $data['map_all_control']['wpgmp_custom_css'],
	'desc' => __( 'Write here your custom css if any.', WPGMP_TEXT_DOMAIN ),
	'textarea_rows' => 10,
	'textarea_name' => 'map_all_control[wpgmp_custom_css]',
	'class' => 'form-control wpgmp_design_listing',
	'show' => 'false',
));

$form->add_element( 'text', 'map_all_control[wpgmp_base_font_size]', array(
	'lable' => __( 'Base Font Size', WPGMP_TEXT_DOMAIN ),
	'value' => $data['map_all_control']['wpgmp_base_font_size'],
	'desc' => __( 'Change it according to your site\'sfont family and font size. Default base font size is 16px.', WPGMP_TEXT_DOMAIN ),
	'class' => 'form-control wpgmp_design_listing',
	'show' => 'false',
	'default_value' => '16px',
));

$color_schema = array(
	'#29B6F6_#212121' => "<span class='wpgmp-color-schema' style='background-color:#29B6F6'></span>",
	'#212F3D_#212121' => "<span class='wpgmp-color-schema' style='background-color:#212F3D'></span>",
	'#dd3333_#616161' => "<span class='wpgmp-color-schema' style='background-color:#dd3333'></span>",
	'#FFB74D_#212121' => "<span class='wpgmp-color-schema' style='background-color:#FF7043'></span>",
	'#FFC107_#616161' => "<span class='wpgmp-color-schema' style='background-color:#FFC107'></span>",
	'#9C27B0_#616161' => "<span class='wpgmp-color-schema' style='background-color:#9C27B0'></span>",
	'#673AB7_#616161' => "<span class='wpgmp-color-schema' style='background-color:#673AB7'></span>",
	'#3F51B5_#616161' => "<span class='wpgmp-color-schema' style='background-color:#3F51B5'></span>",
	'#00BCD4_#616161' => "<span class='wpgmp-color-schema' style='background-color:#00BCD4'></span>",
	'#009688_#616161' => "<span class='wpgmp-color-schema' style='background-color:#009688'></span>",
	'#4CAF50_#616161' => "<span class='wpgmp-color-schema' style='background-color:#4CAF50'></span>",
	'#FF9800_#616161' => "<span class='wpgmp-color-schema' style='background-color:#FF9800'></span>",
	'#FF5722_#616161' => "<span class='wpgmp-color-schema' style='background-color:#FF5722'></span>",
	'#795548_#616161' => "<span class='wpgmp-color-schema' style='background-color:#795548'></span>",
	'#9E9E9E_#616161' => "<span class='wpgmp-color-schema' style='background-color:#9E9E9E'></span>",
	);

$form->add_element( 'radio', 'map_all_control[color_schema]', array(
	'lable' => __( 'Color Schema', WPGMP_TEXT_DOMAIN ),
	'radio-val-label' => $color_schema,
	'current' => $data['map_all_control']['color_schema'],
	'class' => 'chkbox_class wpgmp_design_listing',
	'show' => 'false',
	'default_value' => '4.png',
));

$form->add_element( 'checkbox', 'map_all_control[apply_own_schema]', array(
	'lable' => __( 'Apply Own Schema', WPGMP_TEXT_DOMAIN ),
	'value' => 'true',
	'current' => $data['map_all_control']['apply_own_schema'],
	'desc' => __( 'Apply your own color schema. Above selected schema will be ignored.', WPGMP_TEXT_DOMAIN ),
	'class' => 'chkbox_class switch_onoff',
	'data' => array( 'target' => '.wpgmp_own_schema' ),
));

$form->add_element( 'text', 'map_all_control[wpgmp_primary_color]', array(
	'lable' => __( 'Primary Color', WPGMP_TEXT_DOMAIN ),
	'value' => $data['map_all_control']['wpgmp_primary_color'],
	'desc' => __( 'Choose your primary color.', WPGMP_TEXT_DOMAIN ),
	'class' => 'color {pickerClosable:true} form-control wpgmp_own_schema',
	'show' => 'false',
));

$form->add_element( 'text', 'map_all_control[wpgmp_secondary_color]', array(
	'lable' => __( 'Secondary Color', WPGMP_TEXT_DOMAIN ),
	'value' => $data['map_all_control']['wpgmp_secondary_color'],
	'desc' => __( 'Choose your secondary color.', WPGMP_TEXT_DOMAIN ),
	'class' => 'color {pickerClosable:true} form-control wpgmp_own_schema',
	'show' => 'false',
));



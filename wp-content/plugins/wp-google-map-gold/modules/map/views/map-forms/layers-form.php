<?php
/**
 * Contro Positioning over google maps.
 * @package Maps
 * @author Flipper Code <hello@flippercode.com>
 */

$form->add_element( 'group', 'map_control_settings', array(
	'value' => __( 'Infowindow Settings', WPGMP_TEXT_DOMAIN ),
	'before' => '<div class="fc-12">',
	'after' => '</div>',
));
$url = admin_url( 'admin.php?page=wpgmp_how_overview' );
$link = sprintf( wp_kses( __( 'Enter placeholders {marker_title},{marker_address},{marker_message},{marker_image},{marker_latitude},{marker_longitude}, {extra_field_slug_here}. View complete list <a target="_blank" href="%s">here</a>.', WPGMP_TEXT_DOMAIN ), array( 'a' => array( 'href' => array(), 'target' => '_blank' ) ) ), esc_url( $url ) );

$form->add_element( 'checkbox', 'map_all_control[infowindow_filter_only]', array(
	'lable' => __( 'Hide Markers on Page Load', WPGMP_TEXT_DOMAIN ),
	'value' => 'true',
	'id' => 'infowindow_default_open',
	'current' => $data['map_all_control']['infowindow_filter_only'],
	'desc' => __( "Don't display markers on page load. Display markers after filtration only.", WPGMP_TEXT_DOMAIN ),
	'class' => 'chkbox_class',
));

$default_value = '<div class="fc-main"><div class="fc-item-title">{marker_title} <span class="fc-badge info">{marker_category}</span></div> <div class="fc-item-featured_image">{marker_image} </div>{marker_message}<address><b>Address : </b>{marker_address}</address></div>';

$default_value = (isset( $data['map_all_control']['infowindow_setting'] ) and '' != $data['map_all_control']['infowindow_setting'] ) ? $data['map_all_control']['infowindow_setting'] : $default_value;

$form->add_element( 'textarea', 'map_all_control[infowindow_setting]', array(
	'lable' => __( 'Infowindow Message', WPGMP_TEXT_DOMAIN ),
	'value' => $data['map_all_control']['infowindow_setting'],
	'desc' => $link,
	'textarea_rows' => 10,
	'textarea_name' => 'location_messages',
	'class' => 'form-control',
	'id' => 'googlemap_infomessage',
	'default_value' => $default_value,
));

$default_value = '<div class="fc-main"><div class="fc-item-title">{post_title} <span class="fc-badge info">{post_categories}</span></div> <div class="fc-item-featured_image">{post_featured_image} </div>{post_excerpt}<address><b>Address : </b>{marker_address}</address><a target="_blank"  class="fc-btn fc-btn-small fc-btn-red" href="{post_link}">Read More...</a></div>';
$default_value = (isset( $data['map_all_control']['infowindow_geotags_setting'] ) and '' != $data['map_all_control']['infowindow_geotags_setting'] ) ? $data['map_all_control']['infowindow_geotags_setting'] : $default_value;
$form->add_element( 'textarea', 'map_all_control[infowindow_geotags_setting]', array(
	'lable' => __( 'Infowindow Message for Posts', WPGMP_TEXT_DOMAIN ),
	'value' => $default_value,
	'desc' => __( 'If you want to display post\'s data in marker infowindow, Use following placeholder - {post_title}, {post_link}, {post_excerpt}, {post_content}, {post_featured_image}, {post_categories}, {post_tags}, {%custom_field_slug_here%}. HTML tags allowed.',WPGMP_TEXT_DOMAIN ),
	'textarea_rows' => 10,
	'class' => 'form-control geo_tags_setting',
	'id' => 'googlemap_infomessage',
));

if ( 'mouseclick' == $data['map_all_control']['infowindow_openoption'] ) {
	$data['map_all_control']['infowindow_openoption'] = 'click'; } else if ( 'mousehover' == $data['map_all_control']['infowindow_openoption'] ) {
	$data['map_all_control']['infowindow_openoption'] = 'mouseover'; }
	$event = array( 'click' => 'Mouse Click', 'mouseover' => 'Mouse Hover' );
	$form->add_element( 'select', 'map_all_control[infowindow_openoption]', array(
		'lable' => __( 'Show Infowindow on', WPGMP_TEXT_DOMAIN ),
		'current' => $data['map_all_control']['infowindow_openoption'],
		'desc' => __( 'Open infowindow on Mouse Click or Mouse Hover.', WPGMP_TEXT_DOMAIN ),
		'options' => $event,
	));

	$form->add_element('image_picker', 'map_all_control[marker_default_icon]', array(
		'lable' => __( 'Choose Marker Image', WPGMP_TEXT_DOMAIN ),
		'src' => (isset( $data['map_all_control']['marker_default_icon'] )  ? wp_unslash( $data['map_all_control']['marker_default_icon'] ) : WPGMP_IMAGES.'/default_marker.png'),
		'required' => false,
		'choose_button' => __( 'Choose', WPGMP_TEXT_DOMAIN ),
		'remove_button' => __( 'Remove',WPGMP_TEXT_DOMAIN ),
		'id' => 'marker_category_icon',
	));

	$form->add_element( 'checkbox', 'map_all_control[infowindow_open]', array(
		'lable' => __( 'InfoWindow Open', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'id' => 'wpgmp_infowindow_open',
		'current' => $data['map_all_control']['infowindow_open'],
		'desc' => __( 'Please check to enable infowindow default open.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

	$form->add_element( 'checkbox', 'map_all_control[infowindow_close]', array(
		'lable' => __( 'Close InfoWindow', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'id' => 'wpgmp_infowindow_close',
		'current' => $data['map_all_control']['infowindow_close'],
		'desc' => __( 'Please check to close infowindow on map click.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

	$event = array( '' => __( 'Select Animation',WPGMP_TEXT_DOMAIN ),'click' => __( 'Mouse Click',WPGMP_TEXT_DOMAIN ), 'mouseover' => __( 'Mouse Hover',WPGMP_TEXT_DOMAIN ) );
	$form->add_element( 'select', 'map_all_control[infowindow_bounce_animation]', array(
		'lable' => __( 'Bounce Animation', WPGMP_TEXT_DOMAIN ),
		'current' => $data['map_all_control']['infowindow_bounce_animation'],
		'desc' => __( 'Apply bounce animation on mousehover or mouse click. BOUNCE indicates that the marker should bounce in place.', WPGMP_TEXT_DOMAIN ),
		'options' => $event,
	));

	$form->add_element( 'checkbox', 'map_all_control[infowindow_drop_animation]', array(
		'lable' => __( 'Apply Drop Animation', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'id' => 'infowindow_drop_animation',
		'current' => $data['map_all_control']['infowindow_drop_animation'],
		'desc' => __( 'DROP indicates that the marker should drop from the top of the map. ', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

	$zoom_level = array();
	$zoom_level[''] = __( 'Select Zoom',WPGMP_TEXT_DOMAIN );
	for ( $i = 1; $i < 20; $i++ ) {
		$zoom_level[ $i ] = $i;
	}

	$form->add_element( 'select', 'map_all_control[infowindow_zoomlevel]', array(
		'lable' => __( 'Change Zoom on Click', WPGMP_TEXT_DOMAIN ),
		'current' => $data['map_all_control']['infowindow_zoomlevel'],
		'desc' => __( 'Change zoom level of the map on marker click.', WPGMP_TEXT_DOMAIN ),
		'options' => $zoom_level,
		'before' => '<div class="fc-3">',
		'after' => '</div>',
	));

	$form->add_element( 'checkbox', 'map_all_control[infowindow_iscenter]', array(
		'lable' => __( 'Center the Map', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'current' => $data['map_all_control']['infowindow_iscenter'],
		'desc' => __( 'Set as center point on marker click', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

	$form->add_element( 'group', 'map_infowindow_settings', array(
		'value' => __( 'Infowindow Customization Settings', WPGMP_TEXT_DOMAIN ),
		'before' => '<div class="fc-12">',
		'after' => '</div>',
	));
	
	$form->add_element( 'checkbox', 'map_all_control[map_infowindow_customisations]', array(
		'lable' => __( 'Turn On Infowindow Customization', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'id' => 'map_infowindow_customisations',
		'current' => $data['map_all_control']['map_infowindow_customisations'],
		'desc' => __( 'Please check to enable infowindow customization.', WPGMP_TEXT_DOMAIN ),
		'class' => 'switch_onoff chkbox_class',
		'data' => array( 'target' => '.map_iw_customisations' ),
	));
	
	$form->add_element( 'text', 'map_all_control[infowindow_width]', array(
		'lable' => __( 'Width', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_all_control']['infowindow_width'],
		'class' => 'form-control map_iw_customisations',
		'desc' => __( 'Enter infowindow width in px. Leave blank for default settings.', WPGMP_TEXT_DOMAIN ),
		'show' => 'false',
		'default_value' => '',
	));
	
	$form->add_element( 'text', 'map_all_control[infowindow_border_color]', array(
		'lable' => __( 'Border Color', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_all_control']['infowindow_border_color'],
		'class' => 'color {pickerClosable:true} form-control map_iw_customisations',
		'desc' => __( 'Choose color for the border of infowindow. Leave blank for default settings.', WPGMP_TEXT_DOMAIN ),
		'show' => 'false',
		'default_value' => '',
	));
	
	$form->add_element( 'text', 'map_all_control[infowindow_border_radius]', array(
		'lable' => __( 'Border Radius', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_all_control']['infowindow_border_radius'],
		'class' => 'form-control map_iw_customisations',
		'desc' => __( 'Enter border radius in px for the infowindow. Leave blank for default settings.', WPGMP_TEXT_DOMAIN ),
		'show' => 'false',
		'default_value' => '',
	));
	
	$form->add_element( 'text', 'map_all_control[infowindow_bg_color]', array(
		'lable' => __( 'Background Color', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_all_control']['infowindow_bg_color'],
		'class' => 'color {pickerClosable:true} form-control map_iw_customisations',
		'desc' => __( 'Choose color for the background of infowindow text. Leave blank for default settings.', WPGMP_TEXT_DOMAIN ),
		'show' => 'false',
		'default_value' => '',
	));

	$form->add_element( 'group', 'map_control_layers', array(
		'value' => __( 'Layers Settings', WPGMP_TEXT_DOMAIN ),
		'before' => '<div class="fc-12">',
		'after' => '</div>',
	));
	$form->add_element( 'checkbox', 'map_layer_setting[choose_layer][kml_layer]', array(
		'lable' => __( 'Kml/Kmz Layer', WPGMP_TEXT_DOMAIN ),
		'value' => 'KmlLayer',
		'id' => 'wpgmp_kml_layer',
		'current' => $data['map_layer_setting']['choose_layer']['kml_layer'],
		'desc' => __( 'Please check to enable Kml/Kmz Layer.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class switch_onoff',
		'data' => array( 'target' => '#map_links' ),
	));
	$form->add_element( 'textarea', 'map_layer_setting[map_links]', array(
		'lable' => __( 'KML Link(s)', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_layer_setting']['map_links'],
		'desc' => __( 'Paste here kml or kmz link. you can insert multiple kml or kmz links by comma (,) separated.', WPGMP_TEXT_DOMAIN ),
		'textarea_rows' => 10,
		'textarea_name' => 'map_layer_setting[map_links]',
		'class' => 'form-control',
		'id' => 'map_links',
		'show' => 'false',
	));
	$form->add_element( 'checkbox', 'map_layer_setting[choose_layer][fusion_layer]', array(
		'lable' => __( 'Fusion Table Layer', WPGMP_TEXT_DOMAIN ),
		'value' => 'FusionTablesLayer',
		'id' => 'wpgmp_fusion_layer',
		'current' => $data['map_layer_setting']['choose_layer']['fusion_layer'],
		'desc' => __( 'Please check to enable Fusion Table Layer.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class switch_onoff',
		'data' => array( 'target' => '.fusion_setting' ),
	));

	$form->add_element( 'text', 'map_layer_setting[fusion_select]', array(
		'lable' => __( 'Fusion Select', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_layer_setting']['fusion_select'],
		'id' => 'fusion_select',
		'class' => 'form-control fusion_setting',
		'desc' => __( 'A select property whose value is the column name containing the location information in your fusion table. ', WPGMP_TEXT_DOMAIN ),
		'before' => '<div class="fc-8">',
		'after' => '</div>',
		'show' => 'false',
	));

	$form->add_element( 'text', 'map_layer_setting[fusion_from]', array(
		'lable' => __( 'Fusion From', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_layer_setting']['fusion_from'],
		'id' => 'fusion_from',
		'class' => 'form-control fusion_setting',
		'desc' => __( 'A from property whose value is either of the Encrypted ID.', WPGMP_TEXT_DOMAIN ),
		'before' => '<div class="fc-8">',
		'after' => '</div>',
		'show' => 'false',
	));

	$url = 'https://www.google.com/fusiontables/DataSource?docid=1BDnT5U1Spyaes0Nj3DXciJKa_tuu7CzNRXWdVA#map:id=3';
	$link = sprintf( wp_kses( __( 'Specify Marker icon name from the <a target="_blank" href="%s">supported Map marker or Icon names</a>.', WPGMP_TEXT_DOMAIN ), array( 'a' => array( 'href' => array(), 'target' => '_blank' ) ) ), esc_url( $url ) );

	$form->add_element( 'text', 'map_layer_setting[fusion_icon_name]', array(
		'lable' => __( 'Icon Name', WPGMP_TEXT_DOMAIN ),
		'value' => $data['map_layer_setting']['fusion_icon_name'],
		'id' => 'fusion_from',
		'class' => 'form-control fusion_setting',
		'desc' => $link,
		'before' => '<div class="fc-8">',
		'after' => '</div>',
		'show' => 'false',
	));

	$form->add_element( 'checkbox', 'map_layer_setting[heat_map]', array(
		'lable' => __( 'Heat Map', WPGMP_TEXT_DOMAIN ),
		'value' => 'true',
		'id' => 'wpgmp_heat_map',
		'class' => 'form-control fusion_setting',
		'current' => $data['map_layer_setting']['heat_map'],
		'desc' => __( 'Enable heatmaps, where the density of matched locations is depicted using a palette of colors.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class fusion_setting',
		'show' => 'false',
	));

	$form->add_element( 'checkbox', 'map_layer_setting[choose_layer][traffic_layer]', array(
		'lable' => __( 'Traffic Layer', WPGMP_TEXT_DOMAIN ),
		'value' => 'TrafficLayer',
		'id' => 'wpgmp_traffic_layer',
		'current' => $data['map_layer_setting']['choose_layer']['traffic_layer'],
		'desc' => __( 'Please check to enable traffic Layer.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

	$form->add_element( 'checkbox', 'map_layer_setting[choose_layer][transit_layer]', array(
		'lable' => __( 'Transit Layer', WPGMP_TEXT_DOMAIN ),
		'value' => 'TransitLayer',
		'id' => 'wpgmp_transit_layer',
		'current' => $data['map_layer_setting']['choose_layer']['transit_layer'],
		'desc' => __( 'Please check to enable Transit Layer.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));


	$form->add_element( 'checkbox', 'map_layer_setting[choose_layer][bicycling_layer]', array(
		'lable' => __( 'Bicycling Layer', WPGMP_TEXT_DOMAIN ),
		'value' => 'BicyclingLayer',
		'id' => 'wpgmp_bicycling_layer',
		'current' => $data['map_layer_setting']['choose_layer']['bicycling_layer'],
		'desc' => __( 'Please check to enable Bicycling Layer.', WPGMP_TEXT_DOMAIN ),
		'class' => 'chkbox_class',
	));

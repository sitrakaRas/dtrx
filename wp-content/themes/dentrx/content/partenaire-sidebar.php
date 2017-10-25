<?php
/**
 * The template part for displaying sidebar partenaire
 */

	global $wp_query;
	$terms = get_terms( array(
		'taxonomy' => 'partenaire-category',
		'hide_empty' => false,
	) );
	?>
	<div class="partenaire-nav" id="filter-button">
		<ul>
			<li data-filter="*" class="current"> <a href="#">Tous nos partenaires</a></li>
			<?php foreach($terms as $categ):?>
				<li data-filter=".<?php echo $categ->slug ?>" class="">
					<a href="#"><?php echo $categ->name ?></a>
				</li>		
			<?php endforeach;?>
		</ul>
	</div>
	
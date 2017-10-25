<?php
/**
 * The template part for displaying listing partenaire
 */

	global $wp_query;
	$partenaires = new WP_Query( array( 'post_type' => 'partenaire', 'posts_per_page' => -1 ) );
	
	?>
	<div class="xt-project-gallery" id="project-gallery">
		<div class="partenaireContainer">
	<?php 
		$i = 0;
		if($partenaires->have_posts()):
			while ( $partenaires->have_posts() ) : $partenaires->the_post();
	 ?>
	 	
			<?php 
				$terms = wp_get_post_terms( get_post()->ID, 'partenaire-category' );
				$class = '';

				foreach($terms as $term){
					$class .= $term->slug .' ';
				}
			 ?>


			<div class="grid-item col-md-4 col-sm-6 col-xs-12 <?php echo $class; ?>" >
				<figure>
					<?php echo get_the_post_thumbnail(); ?>
					<figcaption class="fig-caption">
						<i class="fa fa-search"></i>
						<a href="#" data-fancybox data-src="#cg<?php echo $i; ?>"></a>
					</figcaption>
				</figure>
				<div id="cg<?php echo $i; ?>" class="innerPart" style="display: none;">
					<div class="logo-part">
					<?php echo get_the_post_thumbnail(); ?>
					</div>
					<div class="description">
					<h4><?php echo get_field( "nom" ); ?></h4>
					<p><strong>Site :</strong> <a href="http://<?php echo get_field( 'site' ); ?>"><?php echo get_field( "site" ); ?></a></p>
					<p><?php echo get_field( "description" ); ?></p>
					</div>
				</div>
			</div>

	<?php $i++; endwhile;endif;?>
		</div> 
	</div> <!-- End: .grid .project-gallery -->
	
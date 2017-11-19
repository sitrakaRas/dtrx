<?php
/**
 * The template part for displaying single posts
 */
?>
<div id="partenaire-gallery" >
	<ul class="part-slide">
<?php
	 $args = array(
      'post_type' => 'partenaire',
      'post_status' => 'publish',
      'posts_per_page' => -1,
      'paged' => 1
    );

    $partenaires = new WP_Query ($args);

    if ($partenaires->have_posts()):
		while($partenaires->have_posts()): $partenaires->the_post();
			?>
			<li class="item">
				<figure>
					<a href="<?php echo get_field('site'); ?>" title="<?php echo get_the_title(); ?>" target="_blank">
						<?php echo get_the_post_thumbnail(); ?>
					</a>
				</figure>
			</li>
			<?php

		endwhile;
	endif;

?>
	</ul>
</div>
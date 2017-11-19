(function($) {
    "use strict";

    var dentrx = {
        isotopePart: function () {
            // init Isotope
            var $grid = $('.partenaireContainer').isotope({
                itemSelector: '.grid-item'
            });
            // filter items on button click
            $('#filter-button ul li').on('click', function () {
                var filterValue = $(this).attr('data-filter');
                $('#filter-button ul li').removeClass('current');
                $(this).addClass('current');
                $grid.isotope({ filter: filterValue });
                return false;
            });
        },
        slider: function(parent,arg){
            parent.slick(arg);
        }
    };

    dentrx.isotopePart();

    $("#apporteur-toggle a").on("click",function() {
        $( "#apporteur-form" ).toggleClass("apparition");
        return false;
    });

    if($('.part-slide').length > 0){
		var arg = {
			slidesToShow : 5,
			dots : false,
	        infinite: true,
	        autoplay : true,
	        autoplaySpeed: 0,
            speed: 7500,
            cssEase: 'linear',
            slidesToScroll: 1,
            variableWidth: true,
	        responsive: [{
	            breakpoint: 1024,
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 1
	            }
	        }, {
	            breakpoint: 768,
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        }]
		};
		dentrx.slider($('.part-slide'),arg);
	}

})(jQuery);
var dentrx = {
    isotopePart : function(){
        // init Isotope
        var $grid = $('.partenaireContainer').isotope({
        itemSelector: '.grid-item'
        });
        // filter items on button click
        $('#filter-button ul li').on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            $('#filter-button ul li').removeClass('current');
            $(this).addClass('current');
            $grid.isotope({ filter: filterValue });
        });
    }
}


$(document).ready(function() {
    dentrx.isotopePart();
});
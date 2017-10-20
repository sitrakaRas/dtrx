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

    /* ------------------  5.NAVBAR SPY ------------------ */

    var HeaderID = "#navbar-spy",
        Body = $("body");
    if ($("header").has(HeaderID)) {
        Body.attr("data-spy", "scroll").attr("data-target", HeaderID);
        Body.scrollspy({
            target: HeaderID
        });
    };

    /* ------------------ 6.HEADER ------------------ */

    var $navAffix = $("nav");
    $navAffix.affix({
        offset: {
            top: 50/* Change offset form top */
        }
    });

     /* ------------------  4.Background ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

});
$(document).ready(function () {

    //-- mean menu jquery --//
    // header mean menu
    $('#meanMenu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.meanMenu',
        meanRevealPosition: "right"
    });

    //-- slick slider jquery --//
    // main slider
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayHoverPause: false,
        autoplaySpeed: 3500,
        arrow: false,
        prevArrow: false,
        nextArrow: false,
    });

    // testimonial slider
    $('.testimonial-slider-active').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrow: false,
        prevArrow: false,
        nextArrow: false,
    });

    // brand slider
    $('.brands-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrow: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {

                breakpoint: 991,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    //-- counter jquery --//
    // counter
    $('.counting').counterUp({
        delay: 50,
        time: 2000
    });


    //-- scroll up jquery --//
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });

    // wow js plugin
    new WOW().init();

    // sticky menu
    $(window).on('scroll',function() {
    if ($(this).scrollTop() > 1){
        $('.sticky-header').addClass("sticky");
      }
      else{
        $('.sticky-header').removeClass("sticky");
      }
    });

})
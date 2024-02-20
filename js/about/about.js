$(document).ready(function(){ 
    $('.slaboutba').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow : 1,
        asNavFor:".slaboutbb",
        infinite: false,
        fade: true,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    arrows: true,
                }
            }
        ]
    });
    $(".slaboutbb").slick({
        slidesToShow: 1,
        focusOnSelect: true,
        asNavFor:".slaboutba",
        arrows:false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: false,
    });
    // 
    $('.slaboutem').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow : 3,
        asNavFor:".slabouteh",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow : 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
    });
    $(".slabouteh").slick({
        slidesToShow: 1,
        focusOnSelect: true,
        asNavFor:".slaboutem",
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });
    // 
    $('.slaboutgg').slick({
        slidesToShow : 1,
        autoplay: true,
        arrows: false,
        dots: false,
        speed:1000,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '0',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow : 1,
                    variableWidth: false,
                    centerMode: true,
                }
            }
        ]
    });
    // 
    var $mainslider = $('.slabouthh')
    $mainslider.on('init', function(event, slick) {
      $(this).append('<div class="slbutnumber"><span class="nbegin"></span><span class="nended"></span></div>');
      $('.nbegin').text(slick.currentSlide + 1);
      $('.nended').text(slick.slideCount);
      })
    $mainslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.nbegin').text(nextSlide + 1);
    });
    $mainslider.slick({
        draggable: true,
        arrows: true,
        dots: false,
        speed: 1000,
        fade: true
    });
    var time = 3;
    var $bar,
    $mainslider,
    isPause,
    tick,
    percentTime;
    function interval() {
    if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
        width: percentTime + "%"
        });
        if (percentTime >= 100) {
        $mainslider.slick('slickNext');
        }
    }
    }
})
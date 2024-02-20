$(document).ready(function(){
    var $mainslider = $('.slwspacedb')
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
    $('.tpwspacedb').on({
    mouseenter: function() {
        isPause = true;
    },
    mouseleave: function() {
        isPause = false;
    }
    })
    // 
    $('.slwspacefnav').slick({
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:".slwspaceffor",
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: false,
    });
    $(".slwspaceffor").slick({
        slidesToShow: 4,
        focusOnSelect: true,
        asNavFor:".slwspacefnav",
        arrows:false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        vertical: true,
        infinite: false,
    });
})
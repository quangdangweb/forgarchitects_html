$(document).ready(function(){
    $('.slbannerhh').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000, 

    });
    $('.slbannerhh').addClass("active");
    var __selector = $(".slbannerhh")
    if(__selector.find('.item[data-slick-index=0]').find(".ssvideo").size()> 0){
        __selector.find('.item[data-slick-index=0]').find(".ssvideo")[0].play();
        __selector.slick('slickPause');
        change_slide(__selector.find('.item[data-slick-index=0]').find(".ssvideo"),__selector);
    }
    $('.slbannerhh').on('afterChange', function(event, slick, currentSlide){
        $(".ssvideo").each(function (e) {
            $(this)[0].currentTime = 0;
            $(this)[0].pause();
        });
        $(this).slick('slickPlay');
        var __current = $(this).find('.item[data-slick-index='+currentSlide+']').find(".ssvideo");
        if(__current.size() > 0){
            __current[0].play();
            $(this).slick('slickPause');
            change_slide(__current , $(this));
        }
    });
    function change_slide(__this, banner) {
        if(__this[0].currentTime >= __this[0].duration){
            banner.slick('slickNext');
            banner.slick('slickPlay');
        }else{
            setTimeout(function () {
                change_slide(__this, banner);
            },100);
        }
    }
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
    // 
    
    $('.slsolutioha').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: true,
        asNavFor: '.slsolutiohb',
        pauseOnHover: true,
    });    
    $('.slsolutiohb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slsolutioha',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        infinite: false,
        pauseOnHover: true,
    });
    const sliderm = $(".slsolutiohb");
    sliderm.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
          $(this).slick('slickNext');
          var _pos = count_active_pos();
          $('.slick-dots li').removeClass("slick-current");
          $('.slick-dots li:lt('+_pos+')').addClass("slick-current");
        } else {
            $(this).slick('slickPrev');
            var _pos = count_active_pos();
            $('.slick-dots li').removeClass("slick-current");
            $('.slick-dots li:lt('+_pos+')').addClass("slick-current");
        }
    }));
    const sliderh = $(".slsolutioha");
    sliderh.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
          $(this).slick('slickNext');
          var _pos = count_active_pos();
          $('.slick-dots li').removeClass("slick-current");
          $('.slick-dots li:lt('+_pos+')').addClass("slick-current");
        } else {
            $(this).slick('slickPrev');
            var _pos = count_active_pos();
            $('.slick-dots li').removeClass("slick-current");
            $('.slick-dots li:lt('+_pos+')').addClass("slick-current");
        }
    }));
    function count_active_pos(){
    var k = 0; flg = true;
    $(".slick-dots li").each(function(index, el) {
        if ($(this).hasClass("slick-active")) {
            flg = false;
            return k; 
        }
        if(flg) k++;
    });
    return k;
    }

    // $('.solutiohome').each(function(){
    //     var that = $(this);
    //     var voffset = that.offset().top;
    //     $(window).scroll(function (e) {
    //         var vwindow = $(window).scrollTop();
    //         if((vwindow >= voffset)){
    //             $("html").addClass("noover");
    //             that.addClass("noover");
    //         }
    //         else{
    //             $("html").removeClass("noover")
    //         }
    //     });
    // })
    // var  vnumber = $('.slsolutioha').attr("data-num");
    // $('.slsolutioha').on('afterChange', function(event, slick, currentSlide){
    //         if(currentSlide == vnumber -1 ){
                
    //         }
    //   });
    // 
    $(window).scroll(function (e) {
        var offsetW = $(window).scrollTop();
        var vbanner = $("#vh-banner").innerHeight()
        var offsetE = $(".vhheader").innerHeight();
        if((offsetE + vbanner) < offsetW) {
            $("#vh-header").addClass("hdchange");
        } else {
            $("#vh-header").removeClass("hdchange");
        }
        if(offsetW > (vbanner / 2)){
            $("#vh-header").removeClass("hdmain");
        }
        else{
            $("#vh-header:not(.notfix)").addClass("hdmain");
        }
    });
    // 
    // $('.abouthome .is-masking').each(function(){
    //     var that = $(this);
    //     var vlength = that.find(".line").size();
    //     $(window).scroll(function (e) {
    //         for(i=0;i<=vlength;i++){
    //             var vitemss = that.find(".line:nth-child("+i+")");
    //             var vblocks = vitemss.innerHeight() * i * i * (i / 1.2);
    //             vitemss.each(function(){
    //                 var xitem = $(this);
    //                 var voffset =  $(this).offset().top;
    //                 var voffwin = $(window).innerHeight();
    //                 var vwindow = $(window).scrollTop();
    //                 if((vwindow > voffset - (voffwin / 1.2 + 100))){
    //                     var size = ((vwindow - (vblocks + voffset)) / 3)
    //                     console.log(size)
    //                     xitem.css({
    //                         "clip-path": 'inset(0 '+ -size+'% 0 0)'
    //                     });
    //                 }
    //                 else{
                        
    //                 }
    //             })
    //         }

    //     });

    // })
    $('.abouthome .is-masking .line').each(function(){
        var that = $(this);
        var vblocks = that.innerHeight();
        var voffset = that.offset().top;
        var voffwin = $(window).innerHeight();
        var vlength = that.parents(".is-masking").find(".line").lenght;
        $(window).scroll(function (e) {
            var vwindow = $(window).scrollTop();
            if((vwindow > voffset - 550)){
                var size = (vwindow - (vblocks + voffset - 360)) 
                that.css({
                    "clip-path": 'inset(0 '+ -size+'% 0 0)'
                });
            }
            else{
                // that.removeClass('vchange')
            }
        });
    })

})
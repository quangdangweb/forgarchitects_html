$(document).ready(function(){
    $('.slservicmm').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow : 4,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow : 2,
            }
        },
        {
            breakpoint:767,
            settings: {
                slidesToShow : 1,
            }
        }
        ]
    });  
    // 
    $('.slservicnn').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: false,
        slidesToShow : 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow : 2,
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
    });  
    // check scroll
    $(window).scroll(function (e) {
        var vwindow = $(window).scrollTop();
        var vblocks = $(".hpservicnn").innerHeight();
        var voffset = $(".hpservicnn").offset().top;
        var voffwin = $(window).innerHeight();
        var voffbot = vblocks + voffset;
        var vchange = voffset - voffwin + 100;
        var voffons = vwindow - vchange ;
        document.querySelector(".slservicnn").style.transform = `translate3d(0px, 0px, 0px)`;
        if(vwindow > vchange) {
            document.querySelector(".slservicnn").style.transform = `translate3d(-${voffons}px, -${voffons / 5}px, 0px)`;
            document.querySelector(".slservicnn").style.transition = "all 2s ease-out";
            document.querySelector(".hpservictt").style.transform = `translate3d(0px, -${voffons / 5}px, 0px)`;
            document.querySelector(".hpservictt").style.transition = "all 2s ease-out";
            document.querySelector(".hpservicss").style.transform = `translate3d(0px, -${voffons / 7}px, 0px)`;
            document.querySelector(".hpservicss").style.transition = "all 2s ease-out";
            document.querySelector(".hpserviczz").style.transform = `translate3d(0px, -${voffons / 9}px, 0px)`;
            document.querySelector(".hpserviczz").style.transition = "all 2s ease-out";
            document.querySelector("#vh-footer").style.transform = `translate3d(0px, -${voffons / 11}px, 0px)`;
            document.querySelector("#vh-footer").style.marginBottom  = `-${voffons / 11}px`;
            document.querySelector("#vh-footer").style.transition = "all 2s ease-out";
            document.querySelector(".hpservicnn .nnttile").style.transform = `translate3d(0px, -${voffons / 5}px, 0px)`;
            document.querySelector(".hpservicnn .nnttile").style.transition = "all 2s ease-out";
        } else {
            
        }
    });
})
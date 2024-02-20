$(document).ready(function(){
    $('.datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        yearRange: "1900:+200",
    });
    // 
    $(".menuTab .mc-menu").click(function(){
        if(!$(this).parents(".menuTab").hasClass("active")){
            $(this).parents(".menuTab").addClass("active");
            $(this).parent().find("ul").stop().slideDown();
        }
        else{
            $(this).parents(".menuTab").removeClass("active");
            $(this).parent().find("ul").stop().slideUp();
        }
    });
    // 
    $("#scroll_comment").click(function() {			
		$('html, body').animate({				
		scrollTop: $("#comments").offset().top-65	}, 1000);		
    });
    // 
    $("#contentComment").focus(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideDown(700);
    });
    // 
    $("#btn-close").click(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideUp(700);
    });
    // 
    $("#vnt-slide").slick({
		fade:true,
		autoplay:true,
        dots: false,
        arrows:false,
        autoplaySpeed: 5000,
        speed: 1000,
    });
    // 
    $(".itsearchhead .scicon").click(function(){
        if(!$(this).parents(".itsearchhead").hasClass("active")){
            $(this).parents(".itsearchhead").addClass("active");
            $("html").addClass("openmenu");
        }
        else{
            $(this).parents(".itsearchhead").removeClass("active");
            $("html").removeClass("openmenu");
        }
    });
    $(".itsearchhead input").focus(function(){
        $(this).parents("form").addClass("fd-active");
    });
    $(".itsearchhead input").blur(function(){
        var _ = $(this);
        setTimeout(function(){
            if(_.val() == ""){
                _.parents("form").removeClass("fd-active");
            }
        },100);
    });
    $(".itsearchhead .closez").click(function(){
        $(this).parents(".itsearchhead").removeClass("active");
        $("html").removeClass("openmenu");
    });
    var offsetTop = 0;
    $(window).scroll(function (e) {
        var offsetW = $(window).scrollTop();
        var offsetE = $(".vhheader").innerHeight();
        if(offsetE < offsetW) {
            $("#vh-header").addClass("hdactive");
        } else {
            $("#vh-header").removeClass("hdactive");
        }
        if (offsetTop < offsetW) {
            $("#vh-header").removeClass("hdfixed");
        } else {
            $("#vh-header").addClass("hdfixed");
        }
        offsetTop = offsetW ;
    });
});

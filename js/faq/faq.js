$(document).ready(function(){
    $(".itfaqmb .mctitle").click(function(){
        if(!$(this).parents(".itfaqmb").hasClass("active")){
            $(this).parents(".itfaqmb").addClass("active");
            $(this).parents(".itfaqmb").find(".mcconts").stop().slideDown();
            $(this).parents(".itfaqmb").siblings().removeClass("active");
            $(this).parents(".itfaqmb").siblings().find(".mcconts").stop().slideUp()
        }
        else{
            $(this).parents(".itfaqmb").removeClass("active");
            $(this).parents(".itfaqmb").find(".mcconts").stop().slideUp();
        }
    });
})
$(document).ready(function(){
    // ANIMATION LOADING PAGE
    var delay = 0;
    $('.vnt-loading.effect-1 .img svg .st0').each(function () {
        $(this).attr('style', `transition-delay: ${delay}s; -webkit-transition-delay: ${delay}s; -moz-transition-delay: ${delay}s;`);
        delay = delay + 0.2;
    });
    var delay = 0.1;
    $('.vnt-loading.effect-1 .img svg path:not(".st0")').each(function () {
        $(this).attr('style', `transition-delay: ${delay}s; -webkit-transition-delay: ${delay}s; -moz-transition-delay: ${delay}s;`);
        delay = delay + 0.3;
    });
    // EFFECT 1

    $(window).on('load', function () {
        $('body').addClass('show-load');
    });
});
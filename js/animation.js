$(function(){
    $(window).scroll(function(){
        if (($('.cont2').offset().top / 1.6) < $(window).scrollTop()) {
            $('.cont2 .bg').addClass('on');
            $('.cont2 .text').addClass('on');
        } else if (($('.cont2').offset().top / 3) > $(window).scrollTop()) {
            $('.cont2 .bg').removeClass('on');
            $('.cont2 .text').removeClass('on');
        };
    });
});
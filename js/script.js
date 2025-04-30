$(function () {

    "use strict";

    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    //=======counter up=========   
    $('.counter').countUp();




});









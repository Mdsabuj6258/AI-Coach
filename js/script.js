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


    // progrees bar
    $(document).ready(function () {
        $(".progress-bar").ProgressBar();
    });

    // brand slider
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,

        nextArrow: '<i class="fas fa-long-arrow-alt-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });




    // small device menu icon
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });






















});









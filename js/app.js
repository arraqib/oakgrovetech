$(function () {

    $('#home-banner .flexslider').flexslider({
        animation: "fade",
        animationSpeed: 500,
        easing: "linear"
    });

    $('#ondeck .flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        move: 1,
        itemWidth: 360,
        itemMargin: 10,
        minItems: 1,
        maxItems: 3
    });

    $('.main-content .flexslider').flexslider({
        animation: "slide"
    });


    //Portfolio
    var containerEl = document.querySelector('.portfolio-content');
    var mixer = mixitup(containerEl);


});
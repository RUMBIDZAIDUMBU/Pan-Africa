$('#hamburger').click(function() {
    $('.hamburger').toggleClass('open');
    $('.menu').toggleClass('open');
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
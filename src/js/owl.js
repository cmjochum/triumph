jQuery(document).ready(function ($) {
    $('#volunteer-carousel').owlCarousel({
        loop: true,
        margin: 32,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            },
            1920: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    });

    $('#mission-carousel').owlCarousel({
        loop: true,
        margin: 32,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    });
});
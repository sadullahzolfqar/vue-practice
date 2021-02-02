
$(document).ready(function() {
    /** --------- Navbar Shrink -------- */
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    /** --------- Features Carousel -------- */
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /** --------- App Screenshot Carousel -------- */
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    })

    /** --------- Testimonial Carousel -------- */
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /** --------- Testimonial Carousel -------- */
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /** --------- Video Popup -------- */
    const videoSrc = $('#player-01').attr("src");
    $('.video-play-btn, .video-popup').on('click', function() {
        if($('.video-popup').hasClass('open')) {
            $('.video-popup').removeClass('open');
            $('#player-01').attr('src', '')
        } else {
            $('.video-popup').addClass('open');
            if($('#player-01').attr('src') == '')
                $('#player-01').attr('src', videoSrc)
        }
    })

    $.scrollIt({
        topOffset: -50
    })
});
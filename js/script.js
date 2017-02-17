
$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: {
        	duration: 850,
        	easing:   'linear'
        }
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


    $('select').niceSelect();


});




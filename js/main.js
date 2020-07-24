$(window).on('scroll', function() {
    let s = $(window).scrollTop();
    let d = $(document).height();
    let c = $(window).height();

    let scrollPercent = (s/(d-c))*100;
    
    $('.red-line').css('width',scrollPercent + '%');
    if (s > 100) {
        $('.navbar').addClass('cbg');
    } else{
        $('.navbar').removeClass('cbg');
    }
})

const tilt = $('.js-tilt').tilt();

$(window).on('load', function() {
    $('span.loading').css('opacity','0',);
    setTimeout(function() {
        $('.loader').css('transform','translateY(-100%)')
    }, 500)
})
$(window).on('scroll', function() {
    let s = $(window).scrollTop();
    let d = $(document).height();
    let c = $(window).height();

    let scrollPercent = (s/(d-c))*100;
    
    $('.red-line').css('width',scrollPercent + '%');
    console.log(scrollPercent)
   
})
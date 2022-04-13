var totalItems = $('.carousel-item').length;
$('.carousel-product .carousel-item').clone().addClass('cloned').prependTo('.carousel-inner');
$('.carousel-product .carousel-item:nth-child('+totalItems+')').addClass('active')
var item = $('.carousel-product .carousel-item').attr('class').split('col-lg-')[1].slice(0,1);
var tranformX = 100/ (12 / parseInt(item)) / 2;
$('.carousel-inner').css('transform','translateX(-'+tranformX+'%)')
$(window).resize(function(){
    var v_w = $(window).width();
    if(v_w > 768 && v_w < 991){
        var item_tl = $('.carousel-product .carousel-item').attr('class').split('col-md-')[1].slice(0,1);
        tranformX = 100/ (12 / parseInt(item_tl)) / 2;
        $('.carousel-inner').css('transform','translateX(-'+tranformX+'%)')
    }else if(v_w >= 991){
        var item_dk = $('.carousel-product .carousel-item').attr('class').split('col-lg-')[1].slice(0,1);
        tranformX = 100/ (12 / parseInt(item_dk)) / 2;
        $('.carousel-inner').css('transform','translateX(-'+tranformX+'%)')
    }else{
        var item_mb = $('.carousel-product .carousel-item').attr('class').split('col-')[1].slice(0,1);
        tranformX = 100/ (12 / parseInt(item_mb)) / 2;
        $('.carousel-inner').css('transform','translateX(-'+tranformX+'%)')
    }
})
item = 12 / parseInt(item) + 1;
$('.carousel-product').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = item;
    var totalItems = $('.carousel-item').length;
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                console.log(i)
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
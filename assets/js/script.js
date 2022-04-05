$(document).ready(function () {
    setTimeout(function () {
        $('.section-feature-product .carousel-inner').addClass('more-width');
    },1000)
    var doit;
    window.onresize = function(){
        $('.section-feature-product .carousel-inner').removeClass('more-width');
        clearTimeout(doit);
        doit = setTimeout(function () {
            $('.carousel-inner').addClass('more-width');
        }, 100);
    };

    var totalItems = $('.section-feature-product .carousel-item').length;
    $('#carousel-example .carousel-item').clone().appendTo('.carousel-inner');
    $('#carousel-example .carousel-item').clone().prependTo('.carousel-inner');
    $('#carousel-example .carousel-item:nth-child('+totalItems+')').addClass('active')
    $('#carousel-example .carousel-item.active').prev().addClass('prev-item');
    $('#carousel-example .carousel-item.active').next().addClass('next-item');
    $('#carousel-example').carousel()
    $('#carousel-example').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        $('#carousel-example .carousel-item').removeClass('prev-item')
        $('#carousel-example .carousel-item').removeClass('next-item')
        $e.prev().addClass('prev-item');
        $e.next().addClass('next-item');
        totalItems = $('.carousel-item').length;
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
    setTimeout(() => {
        if($('body').hasClass('preload')){
            $('body').removeClass('preload');
        }
    }, 1500);
})

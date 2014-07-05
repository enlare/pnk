


$(document).ready(function() {

    //на главной карусель
    $('#carousel-main').carousel({
        interval: 4000
    });
    
    
    $(".news-slider").carouFredSel({
        items: {
            visible: 4,
            minimum: 4
        },
        auto: false,
        swipe: true,
        mousewheel: true,
        scroll: {
            items: 1
//            onAfter: function(data)
//            {
//                $(this).find('li').removeClass('selected-thumb').eq(0).addClass('selected-thumb').trigger("click");
//            }
        }
    })
//            .find("li").on('click touchstart', function() {
//        var sender = $(this);
//        sender.closest('.custom-slider-thumb').trigger("slideTo", [sender, 0]).find('li').removeClass('selected-thumb');
//        var data = sender.data('number');
//        sender.addClass('selected-thumb').closest('.slider-wrapper').find('.rooms-carousel').carousel(data);
//    }).css("cursor", "pointer");

});
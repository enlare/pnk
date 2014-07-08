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
        next: "#next",
        prev: "#prev",
        scroll: {
            items: 1
        }
    });


//    $('.modal').modal({
//        backdrop: true,
//        keyboard: true
//    }).css({
//        'width': function() {
//            return ($(document).width() * .9) + 'px';
//        },
//        'margin-left': function() {
//            return -($(this).width() / 2);
//        }
//    });
});
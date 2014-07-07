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
});
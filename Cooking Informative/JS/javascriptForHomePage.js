$("#carouselOnHomePage").carousel({
    interval: 300
});

$("#carouselButton").click(function () {
    if ($(this).children("i").hasClass('fa-pause')) {
        $("#carouselOnHomePage").carousel('pause');
        $(this).children("i").removeClass('fa-pause');
        $(this).children("i").addClass('fa-play');
    } else if ($(this).children("i").hasClass('fa-play')) {
        $("#carouselOnHomePage").carousel('cycle');
        $(this).children("i").removeClass('fa-play');
        $(this).children("i").addClass('fa-pause');
    }
});
$(function() {
    var firstScroll = false;

    $(window).on("scroll", function() {
        // Your existing header code
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }

    });
});
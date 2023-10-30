$(function() {
    var firstScroll = false;

    $(window).on("scroll", function() {
        // Your existing header code
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }

        // Code to hide video and show new content only on the first scroll
        if(!firstScroll && $(window).scrollTop() > 0) {
            $('.back-video').hide(); // Hides the video section
            $('.home2').hide();
            $('#new-content').show();    // Shows the new content
            firstScroll = true;          // Set the flag to true after first scroll
        }
    });
});




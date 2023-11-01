(function() {
    var firstScroll = false;

    function startSecondTextAnimation() {
        $('.text2').css({
            'opacity': '0', // Reset opacity
            'animation': 'none' // Remove the animation
        });

        setTimeout(function() {
            $('.text2').css({
                'opacity': '1', 
                'animation': 'typing 1s steps(19), cursor .1s step-end infinite alternate'
            });
        }, 4100); // slightly longer than the duration of the first text's animation
    }

    $(window).on("scroll", function() {
        // Your existing header code
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }

        // Check if the user has scrolled to the top of the page
        if ($(window).scrollTop() === 0) {
            // Show the video and the original content when scrolled back to the top
            $('.back-video').show();
            $('.home2').show();
            $('#new-content').hide();
            firstScroll = false; // Reset the flag
            startSecondTextAnimation(); // Restart the animation for .text2
        } else if (!firstScroll) {
            // Code to hide video and show new content only on the first scroll
            $('.back-video').hide(); // Hides the video section
            $('.home2').hide();
            $('#new-content').show();    // Shows the new content
            firstScroll = true;          // Set the flag to true after first scroll
        }
        
    });

    $(document).ready(function() {
        startSecondTextAnimation(); // Start the animation when the document is ready
    });

})();


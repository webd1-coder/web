(function() {
    var firstScroll = false;

    function startSecondTextAnimation() {
        $('.text2').css({
            'opacity': '0', 
            'animation': 'none' 
        });

        setTimeout(function() {
            $('.text2').css({
                'opacity': '1', 
                'animation': 'typing 1s steps(19), cursor .1s step-end infinite alternate'
            });
        }, 4100); 
    }

    $(window).on("scroll", function() {
        
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }

        
        if ($(window).scrollTop() === 0) {
            
            $('.back-video').show();
            $('.home2').show();
            $('#new-content').hide();
            firstScroll = false; 
            startSecondTextAnimation(); 
        } else if (!firstScroll) {
            
            $('.back-video').hide(); 
            $('.home2').hide();
            $('#new-content').show();    
            firstScroll = true;          
        }
        
    });

    $(document).ready(function() {
        startSecondTextAnimation(); 
    });

})();


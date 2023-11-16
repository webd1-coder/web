$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});

let slideIndex = 0;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("imgSlides");
  if (n >= x.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = x.length - 3; }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Display the current set of three images
  for (i = slideIndex; i < slideIndex + 3 && i < x.length; i++) {
    x[i].style.display = "block";
  }
}
function animateCountingWithCommas(element, target, duration) {
  let start = 0;
  const step = target / duration;
  const interval = setInterval(function() {
      start += step;
      element.textContent = Math.floor(start).toLocaleString(); // Add commas
      if (start >= target) {
          element.textContent = target.toLocaleString(); // Add commas
          clearInterval(interval);
      }
  }, 1);
}

// Trigger counting animation with commas
function startCountingAnimation() {
  const elements = document.querySelectorAll('.counting');
  elements.forEach(function(element) {
      const target = parseInt(element.getAttribute('data-count'));
      animateCountingWithCommas(element, target, 500); // Adjust the duration for a faster animation
  });
}

// Start counting animation on webpage load
document.addEventListener('DOMContentLoaded', function() {
  startCountingAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
  const names = document.querySelectorAll(".section5content p[style*='font-weight: bold']");
  const popups = document.querySelectorAll(".popup");
  const overlay = document.querySelector(".overlay");

  names.forEach((name, index) => {
      name.addEventListener("click", function () {
          showPopup(index);
      });
  });

  overlay.addEventListener("click", function () {
      hidePopups();
  });

  function showPopup(index) {
      hidePopups();
      popups[index].style.display = "block";
      overlay.style.display = "block";
  }

  function hidePopups() {
      popups.forEach(popup => {
          popup.style.display = "none";
      });
      overlay.style.display = "none";
  }
});

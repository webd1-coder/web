$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
     
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
     
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
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


window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
});


function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("imgSlides");
  if (n >= x.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = x.length - 3; }

  
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0"; 
    x[i].style.display = "none";
  }

  
  for (i = 0; i < 3; i++) {
    let indexToShow = (slideIndex + i) % x.length;
    x[indexToShow].style.display = "inline-block";
    if (i === 1) {
      
      x[indexToShow].style.opacity = "1";
    } else {
      
      x[indexToShow].style.opacity = "0.2";
    }
  }
}

function animateCountingWithCommas(element, target, duration) {
  let start = 0;
  const frames = 400; 
  const interval = duration / frames;
  const step = (target - start) / (frames * (duration / 1000)); 

  const animation = setInterval(function () {
      start += step;
      element.textContent = Math.floor(start).toLocaleString(); 
      if (start >= target) {
          element.textContent = target.toLocaleString(); 
          clearInterval(animation);
      }
  }, interval);
}



function startCountingAnimation() {
const elements = document.querySelectorAll('.counting');
elements.forEach(function(element) {
    const target = parseInt(element.getAttribute('data-count'));
    animateCountingWithCommas(element, target, 500); 
});
}


document.addEventListener('DOMContentLoaded', function() {
startCountingAnimation();
showDivs(slideIndex);
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

function isElementInViewport(elem) {
  var rect = elem.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCountingAnimationIfInViewport() {
  const elements = document.querySelectorAll('.counting');
  elements.forEach(function(element) {
      const target = parseInt(element.getAttribute('data-count'));
      if (isElementInViewport(element) && element.textContent === "0") {
          animateCountingWithCommas(element, target, 500); 
      } else if (!isElementInViewport(element)) {
          element.textContent = "0"; 
      }
  });
}


document.addEventListener('scroll', function() {
  startCountingAnimationIfInViewport();
});


document.addEventListener('DOMContentLoaded', function() {
  startCountingAnimation();
  showDivs(slideIndex);


startCountingAnimationIfInViewport();


setInterval(nextSlide, 2000);  

function nextSlide() {
  plusDivs(1);
}
});

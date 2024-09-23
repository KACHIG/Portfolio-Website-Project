// Code for mobile dropdown menu
const menuBtn = document.querySelector('.menuHamburger')
   let menuOpen = false;
   menuBtn.addEventListener('click', () => {
       if(!menuOpen) {
           menuBtn.classList.add('open');
           menuOpen = true;
       } else {
           menuBtn.classList.remove('open');
           menuOpen = false;
       }
   });
   const list = document.querySelector('.topnav');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});

// Code for image slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //makes slideshow automatic
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
} 

const audio = document.getElementById("backgroundMusic");


const audioQuery = document.querySelector("audio");
window.addEventListener("DOMContentLoaded", event => {
    audioQuery.volume = 0.1;
});

function audioController() {
    if (!audio.paused) {
        audio.pause();
    }
    else {
        audio.play();
    }
}


$(document).ready(function() {

  $('.scrollingtext').bind('marquee', function() {
      var ob = $(this);
      var tw = ob.width();
      var ww = ob.parent().width();
      ob.css({ right: -tw });
      ob.animate({ right: ww }, 20000, 'linear', function() {
          ob.trigger('marquee');
      });
  }).trigger('marquee');

});
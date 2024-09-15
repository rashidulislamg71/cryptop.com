document.getElementById('menuToggle').addEventListener('click', ()=> {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});



$(document).ready(function(){
    $('.sliders').slick({
      infinite: true,       // Infinite loop
      slidesToShow: 1,      // Number of slides to show
      slidesToScroll: 1,    // Number of slides to scroll
      autoplay: true,       // Auto-play enabled
      autoplaySpeed: 2000,  // Auto-play interval in milliseconds
      dots: true    ,        // Show pagination dots
      speed: 1000,          // Transition speed in milliseconds (1000ms = 1s)
    });
  });
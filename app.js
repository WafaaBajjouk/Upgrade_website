$(document).ready(function(){
  
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
})

/////////////////////////////////////////////////////
const swiper = new Swiper(".swiper-container", {
  speed: 900,
  loop: true,

  // If we need pagination
  pagination: {
      el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  }
});

// Swiper.js initialization for product carousel
// Make sure to include swiper-bundle.min.js and swiper-bundle.min.css in theme.liquid

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      900: { slidesPerView: 2 },
      600: { slidesPerView: 1 }
    }
  });
});

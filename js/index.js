const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const categoriesSwiper = new Swiper(".swiper-categories", {
  slidesPerView: "auto",
  spaceBetween: 90,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

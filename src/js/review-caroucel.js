const reviewCaroucel = new Swiper(".review__caroucel", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".caroucel__pagination",
  },
  navigation: {
    nextEl: ".caroucel__next",
    prevEl: ".caroucel__prev",
  },
});

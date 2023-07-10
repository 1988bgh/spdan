const classCaroucel = new Swiper(".infomation__caroucel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".caroucel__next",
    prevEl: ".caroucel__prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4, //브라우저가 1024보다 클 때
      spaceBetween: 74,
    },
  },
});

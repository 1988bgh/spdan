const classCaroucel = new Swiper(".infomation__caroucel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".caroucel__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".caroucel__next",
    prevEl: ".caroucel__prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 2, //브라우저가 768보다 클 때
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4, //브라우저가 1024보다 클 때
      spaceBetween: 74,
    },
  },
});

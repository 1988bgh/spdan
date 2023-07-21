const sectionEl = document.querySelectorAll("section");
const footerEl = document.querySelector("footer");
const allBtn = document.querySelector(".gnb .gnb__all-btn");
const moAllBtn = document.querySelector(".mo__all-btn");
const gnbEl = document.querySelector(".gnb-all");
const moGnbEl = document.querySelector(".gnb-all-mo");
const moGnbItemEl = document.querySelectorAll(".gnb-all-mo .item h2");

let status = {
  pc: false,
  mo: false,
};

allBtn.addEventListener("click", () => {
  if (!status.pc) {
    status.pc = true;
    gnbEl.style.display = "block";
    allBtn.classList.add("open");
    footerEl.style.display = "none";
    sectionEl.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    status.pc = false;
    gnbEl.style.display = "none";
    allBtn.classList.remove("open");
    footerEl.style.display = "block";
    sectionEl.forEach((el) => {
      el.style.display = "block";
    });
  }
});

moAllBtn.addEventListener("click", () => {
  if (!status.mo) {
    status.mo = true;
    moGnbEl.style.display = "block";
    moAllBtn.classList.add("open");
    footerEl.style.display = "none";
    sectionEl.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    status.mo = false;
    moGnbEl.style.display = "none";
    moAllBtn.classList.remove("open");
    footerEl.style.display = "block";
    sectionEl.forEach((el) => {
      el.style.display = "block";
    });
  }
});

addEventListener("resize", () => {
  if (innerWidth > 1280 && status.mo) {
    status.mo = false;
    moGnbEl.style.display = "none";
    footerEl.style.display = "block";
    sectionEl.forEach((el) => {
      el.style.display = "block";
    });
  }
  if (innerWidth < 1281 && status.pc) {
    status.pc = false;
    gnbEl.style.display = "none";
    footerEl.style.display = "block";
    sectionEl.forEach((el) => {
      el.style.display = "block";
    });
  }
});

moGnbItemEl.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.parentElement.classList.contains("open")) {
      el.parentElement.classList.remove("open");
    } else {
      el.parentElement.classList.add("open");
    }
  });
});

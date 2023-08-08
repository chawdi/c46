const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * images[0].clientWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

updateSlider();
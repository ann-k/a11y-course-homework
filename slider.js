let activeSlide = 1;
const totalSlides = 2;

function changeSlide() {
  const slides = document.querySelectorAll(".slide");
  Array.from(slides).forEach(function (element, index) {
    element.classList.remove("active");
    element.index = index;
  });

  const newActiveSlide = slides[activeSlide - 1];
  newActiveSlide.classList.add("active");
}

function onPrevClick() {
  if (activeSlide === 1) {
    activeSlide = totalSlides;
  } else {
    activeSlide--;
  }

  changeSlide();
}

function onNextClick() {
  if (activeSlide === totalSlides) {
    activeSlide = 1;
  } else {
    activeSlide++;
  }

  changeSlide();
}

const prevControl = document.querySelectorAll(".sliderControl.prev")[0];
const nextControl = document.querySelectorAll(".sliderControl.next")[0];

prevControl.addEventListener("click", onPrevClick);
nextControl.addEventListener("click", onNextClick);

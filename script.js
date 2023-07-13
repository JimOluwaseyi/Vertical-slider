const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const container = document.querySelector(".container");
const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const images = document.querySelectorAll(".images");

let activeSide = images.length - 1;
const sliderHeight = container.clientHeight;
rightSide.scrollTo(0, sliderHeight * (images.length - 1));

upBtn.addEventListener("click", () => {
  activeSide++;
  if (activeSide > images.length - 1) {
    activeSide = 0;
  }
  rightSide.scrollTo(0, sliderHeight * activeSide);
  leftSide.scrollTo(0, (sliderHeight) * (images.length - 1 - activeSide))
});

downBtn.addEventListener("click", () => {
  activeSide--;
  if (activeSide < 0) {
    activeSide = images.length - 1;
  }
  rightSide.scrollTo(0, sliderHeight * activeSide);
  leftSide.scrollTo(0, (sliderHeight) * (images.length - 1 - activeSide))  
});


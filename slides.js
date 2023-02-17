// will select images and layer them using z-index

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

// layering the images
let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", function () {
  //increase slide number and z-index on click
  currentSlide += 1;
  z += 1;

  // if slide number gets too high, it will return to start
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  // select the right image by selecting the current image slide in the array and giving it a 2 index
  images[currentSlide].style.zIndex = z;
});

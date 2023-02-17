// will select images and layer them using z-index

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

// layering the images
let currentSlide = 0;
let z = 1;

// change slide actions

const changeSlide = () => {
  //increase slide number and z-index on click
  currentSlide += 1;
  z += 1;

  // if slide number gets too high, it will return to start
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  // remove animation from every other images that is not the current one
  images.forEach((image) => {
    image.style.animation = "";
  });

  // select the right image by selecting the current image slide in the array and giving it a 2 index
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade .5s ease-out";
};

//-------- CLICK EVENT --------

slideArea.addEventListener("click", function () {
  changeSlide();
});

//-------- MOUSE EVENTS --------

// when mouse over, images are moved to a random place
slideArea.addEventListener("mouseover", function () {
  images.forEach((image) => {
    //creating random values to be used for x and y
    const xAxis = 100 * Math.random() - 50;
    const yAxis = 100 * Math.random() - 50;

    image.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  });
});

slideArea.addEventListener("mouseout", function () {
  images.forEach((image) => {
    image.style.transform = "";
  });
});

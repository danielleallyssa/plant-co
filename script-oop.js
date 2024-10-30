class NavHandler {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _init() {
    this.elements.toggle.addEventListener("click", () => this.changeMenuIcon());
  }

  _getElements() {
    return {
      main: document.querySelector("main"),
      toggle: document.querySelector("a.toggle-nav"),
    };
  }

  changeMenuIcon() {
    const closeImg = `<img src="assets/close.svg" alt="Close icon"> Close`;
    const menuImg = `<img src="assets/menu.svg" alt="Hambuger icon">`;
    this.elements.main.classList.toggle("show-menu");
    this.elements.main.classList.contains("show-menu")
      ? (this.elements.toggle.innerHTML = closeImg)
      : (this.elements.toggle.innerHTML = menuImg);
  }
}

class ImageCarousel {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _init() {
    this._setEventListeners();
  }

  _getElements() {
    return {
      slideArea: document.querySelector("div.slides"),
      images: [...document.querySelectorAll("div.slides img")],
      currentSlide: 0,
      z: 1,
    };
  }

  _setEventListeners() {
    this.elements.slideArea.addEventListener("click", () => this.changeSlide());

    this.elements.slideArea.addEventListener("mouseover", () => {
      this.elements.images.forEach((image) => {
        const randomNum = 25 * Math.floor(Math.random() * 5) - 50;
        const xAxis = randomNum;
        const yAxis = randomNum;
        image.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
      });
    });

    this.elements.slideArea.addEventListener("mouseout", () => {
      this.elements.images.forEach((image) => {
        image.style.transform = "";
      });
    });
  }

  changeSlide() {
    this.elements.currentSlide += 1;
    this.elements.z += 1;

    if (this.elements.currentSlide > this.elements.images.length - 1) {
      this.elements.currentSlide = 0;
    }

    this.elements.images.forEach((image) => {
      image.style.animation = "";
      image.style.zIndex = 0;
    });

    this.elements.images[this.elements.currentSlide].style.zIndex =
      this.elements.z;
    this.elements.images[this.elements.currentSlide].style.animation =
      "fade .5s ease-out";
  }
}

new NavHandler();
new ImageCarousel();

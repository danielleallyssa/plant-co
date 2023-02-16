// HTML Selections
const mainTag = document.querySelector("main");
const menuTag = document.querySelector(".toggle-nav");

// menu toggle action
const showMenu = () => mainTag.classList.toggle("show-menu");

// click event
menuTag.addEventListener("click", function () {
  showMenu();
});

// HTML Selections
const mainTag = document.querySelector("main");
const toggleTag = document.querySelector("a.toggle-nav");

// menu toggle action. the class "show-menu" will be added.
// if show the text will say close
// if no show the
const showMenu = () => {
  mainTag.classList.toggle("show-menu");

  if (mainTag.classList.contains("show-menu")) {
    toggleTag.innerHTML =
      '<img src="assets/close.svg" alt="Hambuger icon"> Close';
  } else {
    toggleTag.innerHTML = '<img src="assets/menu.svg" alt="Hambuger icon">';
  }
};

// click event. when clicked
toggleTag.addEventListener("click", function () {
  showMenu();
});

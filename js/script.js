var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");

menuToggle.addEventListener("click", function() {

  menu.classList.remove("menu--nojs");

  if (menu.classList.contains("menu--closed")) {
    menu.classList.remove("menu--closed");
    menu.classList.add("menu--opened");
  } else {
    menu.classList.add("menu--closed");
    menu.classList.remove("menu--opened");
  }
});

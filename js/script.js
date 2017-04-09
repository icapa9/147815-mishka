var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");
var popup = document.querySelector(".popup");
var link = document.querySelector(".modal");
var cartBuy = document.querySelectorAll(".modal");

menu.classList.remove("menu--nojs");

menuToggle.addEventListener("click", function() {
  if (menu.classList.contains("menu--closed")) {
    menu.classList.remove("menu--closed");
    menu.classList.add("menu--opened");
  } else {
    menu.classList.add("menu--closed");
    menu.classList.remove("menu--opened");
  }

});

link.addEventListener("click", function() {
  event.preventDefault();
  popup.classList.add("popup--opened");
});
for (var i = 0; i < cartBuy.length; i++) {
    cartBuy[i].addEventListener("click", function(event) {
    event.preventDefault();
    if (popup) {
        popup.classList.add("popup--opened");
    }
  });
}

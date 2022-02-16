let $ = document;
let menu = $.querySelector(".menu");
let menuBtn = $.querySelector(".header__icon");
let menuBtnIcon = $.querySelector(".header__icon i");
menuBtn.addEventListener("click", callMenu);
function callMenu() {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menuBtnIcon.classList = "fa fa-bars"; //same remove add
    menu.style.left = "-256px";
  }
}

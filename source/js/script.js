var NavMain = document.querySelector(".page-header");
var NavToggle = document.querySelector(".page-header__menu-btn");
var NavClose = document.querySelector(".page-header__modal-close");

NavMain.classList.remove("page-header--no-js");

NavToggle.addEventListener("click", function () {
  if (NavMain.classList.contains("page-header--no-js")) {
    NavMain.classList.remove("page-header--no-js");
  } else {
    NavMain.classList.add("page-header--no-js");
    NavMain.classList.add("page-header__menu-open");
  }
});

NavClose.addEventListener("click", function() {
  NavMain.classList.remove("page-header__menu-open");
  NavMain.classList.remove("page-header--no-js");
});
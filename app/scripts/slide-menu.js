(function() {


let menuOpenButton = document.getElementsByClassName("header__menu")[0];
let menuCloseButton = document.getElementsByClassName("navbar__item--close")[0];
let menu = document.getElementsByClassName("navbar")[0];


menuOpenButton.addEventListener("click", (e) => {
	e.preventDefault();
	menu.style.opacity = "1";
	menu.style.zIndex = "3";

});

menuCloseButton.addEventListener("click", (e) => {
	e.preventDefault();
	menu.style.opacity = "";
	menu.style.zIndex = "";

});



})();
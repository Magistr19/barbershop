var loginLink = document.querySelector(".login");
var popUpLogin = document.querySelector(".modal-login");
var closeLogin = document.querySelector(".modal-login .close-button");
var mapLink = document.querySelector(".how-to-find-button");
var mapInFotter = document.querySelector(".how-to-find");
var popUpMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .close-button");
var overLay = document.querySelector(".overlay");

loginLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpLogin.classList.add("modal-show");
	overLay.classList.add("modal-show");
});

closeLogin.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpLogin.classList.remove("modal-show");
	overLay.classList.remove("modal-show");
});

mapInFotter.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpMap.classList.add("modal-show");
	overLay.classList.add("modal-show");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpMap.classList.add("modal-show");
	overLay.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpMap.classList.remove("modal-show");
	overLay.classList.remove("modal-show");
});


overLay.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUpLogin.classList.remove("modal-show");
	overLay.classList.remove("modal-show");
	popUpMap.classList.remove("modal-show");
});
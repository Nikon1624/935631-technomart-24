var writeUs = document.querySelector(".contacts__write-to-us");
var writePopup = document.querySelector(".write-us-popup");
var popupClose = document.querySelector(".popup-form__close-btn");
var popupField = document.querySelector(".popup-form-user-name__input");
var map = document.querySelector(".link-to-big-map");
var bigMap = document.querySelector(".big-map-container");
var mapClose = document.querySelector(".map-close-btn");
var buyButton = document.querySelector(".products-item-hover__btn--buy");
var buyPopup = document.querySelector(".buy-popup");
var buyPopupClose = document.querySelector(".buy-popup-close");
var buyButtonSecond = document.querySelector(".btn-buy--second");
var buyButtonThird = document.querySelector(".btn-buy--third");
var buyButtonFourth = document.querySelector(".btn-buy--fourth");


writeUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.add("write-us-popup-show");
    popupField.focus();
});

popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.remove("write-us-popup-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (writePopup.classList.contains("write-us-popup-show")) {
            writePopup.classList.remove("write-us-popup-show");
        }
    }
});


map.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.add("map-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.remove("map-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (bigMap.classList.contains("map-show")) {
            bigMap.classList.remove("map-show");
        }
    }
});


buyButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyPopupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("buy-popup-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (buyPopup.classList.contains("buy-popup-show")) {
            buyPopup.classList.remove("buy-popup-show");
        }
    }
});


buyButtonSecond.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonThird.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonFourth.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});




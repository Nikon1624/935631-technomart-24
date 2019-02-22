var buyButton = document.querySelector(".products-item-hover__btn--buy");
var buyPopup = document.querySelector(".buy-popup");
var buyPopupClose = document.querySelector(".buy-popup-close");
var buyButtonSecond = document.querySelector(".btn-buy--second");
var buyButtonThird = document.querySelector(".btn-buy--third");
var buyButtonFourth = document.querySelector(".btn-buy--fourth");
var buyButtonFifth = document.querySelector(".btn-buy--fifth");
var buyButtonSixth = document.querySelector(".btn-buy--sixth");
var buyButtonSeventh = document.querySelector(".btn-buy--seventh");
var buyButtonEighth = document.querySelector(".btn-buy--eighth");
var buyButtonNinth = document.querySelector(".btn-buy--ninth");

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

buyButtonFifth.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonSixth.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonSeventh.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonEighth.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

buyButtonNinth.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("buy-popup-show");
});

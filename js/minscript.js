var writeUs=document.querySelector(".contacts__write-to-us"),writePopup=document.querySelector(".write-us-popup"),popupClose=document.querySelector(".popup-form__close-btn"),popupField=document.querySelector(".popup-form-user-name__input"),map=document.querySelector(".link-to-big-map"),bigMap=document.querySelector(".big-map-container"),mapClose=document.querySelector(".map-close-btn"),buyButton=document.querySelector(".products-item-hover__btn--buy"),buyPopup=document.querySelector(".buy-popup"),buyPopupClose=document.querySelector(".buy-popup-close"),buyButtonSecond=document.querySelector(".btn-buy--second"),buyButtonThird=document.querySelector(".btn-buy--third"),buyButtonFourth=document.querySelector(".btn-buy--fourth");writeUs.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.add("write-us-popup-show"),popupField.focus()}),popupClose.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.remove("write-us-popup-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writePopup.classList.contains("write-us-popup-show")&&writePopup.classList.remove("write-us-popup-show"))}),map.addEventListener("click",function(e){e.preventDefault(),bigMap.classList.add("map-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),bigMap.classList.remove("map-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),bigMap.classList.contains("map-show")&&bigMap.classList.remove("map-show"))}),buyButton.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("buy-popup-show")}),buyPopupClose.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.remove("buy-popup-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),buyPopup.classList.contains("buy-popup-show")&&buyPopup.classList.remove("buy-popup-show"))}),buyButtonSecond.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("buy-popup-show")}),buyButtonThird.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("buy-popup-show")}),buyButtonFourth.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("buy-popup-show")});

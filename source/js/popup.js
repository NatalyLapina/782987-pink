var buttonForm = document.querySelector(".form__submit-button");

var popupSuccess = document.querySelector(".popup-success");
var popupError = document.querySelector(".popup-error");

var successClose = document.querySelector(".button-success");
var errorClose = document.querySelector(".button-error");

var form = document.querySelector("form");
var lastName = form.querySelector("[name=surname]");
var firstName = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");

buttonForm.addEventListener("click", function(evt) {
  if (!lastName.value || !firstName.value || !email.value) {
    evt.preventDefault();
    popupError.classList.add("popup-error__show");
    errorClose.focus();
  } else {
    popupSuccess.classList.add("popup-success__show");
    successClose.focus();
  }
});

errorClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("popup-error__show");
});

successClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup-success__show");
});








// buttonForm.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupError.classList.add("popup-error__show");
//   errorClose.focus();
// });
// buttonForm.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupSuccess.classList.add("popup-success__show");
//   successClose.focus();
// });


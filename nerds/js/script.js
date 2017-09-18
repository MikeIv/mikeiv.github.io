
var link = document.querySelector(".contact-btn");

var popup = document.querySelector(".nerds-modal-form");
var close = popup.querySelector(".nerds-modal-form-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("nerds-modal-form-show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("nerds-modal-form-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("nerds-modal-form-show")) {
      popup.classList.remove("nerds-modal-form-show");
      popup.classList.remove("modal-error");
    }
  }
}); 


var item = document.querySelectorAll(".content__item-head");


// open submenu


item.forEach((elem) => {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (elem.classList.contains("content__item-head--active")) {
      elem.classList.remove("content__item-head--active");
    } else {
      elem.classList.add("content__item-head--active");
    }
  });
});
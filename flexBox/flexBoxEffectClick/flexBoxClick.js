var icons = document.querySelectorAll(".card-icon");
icons.forEach((item) => {
  item.addEventListener("click", () => {
    [...icons].forEach((index) => {
      index.parentElement.classList.remove("card-active");
    });
    item.parentElement.classList.add("card-active");
  });
});

let screenMove = document.querySelector(".main");
const popupWrapper = document.querySelector(".pop-wrapper");
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup-close");

screenMove.addEventListener("mouseover", () => {
  popupWrapper.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

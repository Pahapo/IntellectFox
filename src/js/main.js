/* close ADV */
const closeEl = document.querySelector(".close");
const closeMobEl = document.querySelector(".close__mobile");

closeEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});
closeMobEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});

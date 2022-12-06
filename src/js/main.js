import { calendarBlockEl } from "../js/calendar.js";
import { peopleInfoEl } from "../js/people-info.js";

/* close ADV */
const closeEl = document.querySelector(".close");
const closeMobEl = document.querySelector(".close__mobile");

closeEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});
closeMobEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});

const blockCountryEl = document.getElementById("country-info__input");

blockCountryEl.addEventListener("focus", () => {
  calendarBlockEl.classList.add("hidden");
  peopleInfoEl.classList.add("hidden");
});

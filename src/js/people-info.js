import { calendarBlockEl } from "../js/calendar.js";

const blockPeopleEl = document.getElementById("people-info__input");
export const peopleInfoEl = document.querySelector(".people__info");
const countPeopleEl = document.getElementById("count__people");

const lessPeopleEl = document.querySelectorAll(".less-people");
const rectLess = document.querySelector(".less-people rect");
const pathLess = document.querySelector(".less-people path");

const morePeopleEl = document.querySelectorAll(".more-people");
const rectMore = document.querySelector(".more-people rect");
const pathMore = document.querySelector(".more-people path");

blockPeopleEl.addEventListener("focus", () => {
  peopleInfoEl.classList.remove("hidden");
  calendarBlockEl.classList.add("hidden");
});

// peopleInfoEl.addEventListener("mouseover", () => {
//   // вопросик, почему работает неправильно?
//   blockPeopleEl.addEventListener("blur", () => {
//     peopleInfoEl.classList.add("hidden");
//   });
// });

lessPeopleEl.addEventListener("click", () => {
  let count = countPeopleEl.innerHTML;

  let editBtn = () => {
    if (count <= 0) {
      rectLess.setAttribute("stroke", "#CECECE");
      pathLess.setAttribute("fill", "#CECECE");
    } else {
      rectMore.setAttribute("stroke", "#3077C6");
      pathMore.setAttribute("fill", "#3077C6");

      countPeopleEl.innerHTML = --count;

      rectLess.setAttribute("stroke", "#3077C6");
      pathLess.setAttribute("fill", "#3077C6");

      if (count <= 0) editBtn();
    }
  };
  editBtn();
});

morePeopleEl.addEventListener("click", () => {
  let count = countPeopleEl.innerHTML;

  let editBtn = () => {
    if (count >= 30) {
      rectMore.setAttribute("stroke", "#CECECE");
      pathMore.setAttribute("fill", "#CECECE");
    } else {
      rectLess.setAttribute("stroke", "#3077C6");
      pathLess.setAttribute("fill", "#3077C6");

      countPeopleEl.innerHTML = ++count;

      rectMore.setAttribute("stroke", "#3077C6");
      pathMore.setAttribute("fill", "#3077C6");

      if (count >= 30) editBtn();
    }
  };
  editBtn();
});

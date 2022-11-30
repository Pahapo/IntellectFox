const closeEl = document.querySelector(".close");
const closeMobEl = document.querySelector(".close__mobile");

const blockPeopleEl = document.getElementById("people-info__input");
const peopleInfoEl = document.querySelector(".people__info");
const countPeopleEl = document.getElementById("count__people");
const lessPeopleEl = document.getElementById("less-people");
const morePeopleEl = document.getElementById("more-people");

/* close ADV */

closeEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});
closeMobEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});

/* work with "people-info" */

blockPeopleEl.addEventListener("focus", () => {
  peopleInfoEl.classList.remove("hidden");
});

// blockInfoEl.addEventListener("blur", () => {
//   peopleInfoEl.classList.add("hidden");
// });

lessPeopleEl.addEventListener("click", (event) => {
  let count = countPeopleEl.innerHTML;

  if (count <= 0) {
    event.target.style.fill = "#CECECE";
  } else {
    morePeopleEl.style.fill = "#3077C6";
    countPeopleEl.innerHTML = --count;
    event.target.style.fill = "#3077C6";
    if (count <= 0) {
      event.target.path.style.fill = "#CECECE"; // вроде верно, если нет, добавить +1
    }
  }
});
morePeopleEl.addEventListener("click", (event) => {
  let count = countPeopleEl.innerHTML;

  if (count >= 30) {
    event.target.firstElementChaild.style.stroke = "#CECECE";
    event.target.lastElementChaild.style.fill = "#CECECE";
  } else {
    // lessPeopleEl.style.fill = "#3077C6";
    lessPeopleEl.firstElementChaild.style.stroke = "#3077C6";
    lessPeopleEl.lastElementChaild.style.fill = "#3077C6";

    countPeopleEl.innerHTML = ++count;
    event.target.firstElementChaild.style.stroke = "#3077C6";
    event.target.lastElementChaild.style.fill = "#3077C6";
    if (count >= 30) {
      event.target.firstElementChaild.style.stroke = "#CECECE";
      event.target.lastElementChaild.style.fill = "#CECECE"; // вроде верно, если нет, добавить +1
    }
  }
});

/* The calendar */

import { getCalendarMonth, todayYear, getMonth } from "../js/dataCalendar.js";

const todayMonth = document.querySelector(".calendar__month h4");
const dataCalendar = document.querySelector(".calendar__days");
const blockTravelEl = document.getElementById("travel-info__input");
const calendarBlockEl = document.querySelector(".calendar__block");

blockTravelEl.addEventListener("focus", () => {
  calendarBlockEl.classList.remove("hidden");
});

todayMonth.innerHTML = `${getMonth()} ${todayYear}`;

const calendar = getCalendarMonth(4, 4) // something
  .map((item) => {
    // for (let i = 0; i < item.length; i++) {
    //   if (item[i].notCurrentMonth === true) item[i].parentElement.classList.add("other__month");
    // }
    return `
    <div class="calendar__day">
      <p>${item[0].dayOfMonth}</p>
      <p>${item[1].dayOfMonth}</p>
      <p>${item[2].dayOfMonth}</p>
      <p>${item[3].dayOfMonth}</p>
      <p>${item[4].dayOfMonth}</p>
      <p>${item[5].dayOfMonth}</p>
      <p>${item[6].dayOfMonth}</p>
    </div>`;
  })
  .join("");
dataCalendar.insertAdjacentHTML("afterbegin", calendar);

const selectedDays = document.querySelectorAll(".calendar__days p");

selectedDays.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.cssText = "color: #3077C6; font-weight: 500;";
    blockTravelEl.value = event.target.innerHTML;
  });
});

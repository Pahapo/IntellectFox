import { getCalendarMonth, todayYear, getMonth } from "../js/dataCalendar.js";
import { peopleInfoEl } from "../js/people-info.js";

const todayMonth = document.querySelector(".calendar__month h4");
const dataCalendar = document.querySelector(".calendar__days");
const blockTravelEl = document.getElementById("travel-info__input");
export const calendarBlockEl = document.querySelector(".calendar__block");

blockTravelEl.addEventListener("focus", () => {
  calendarBlockEl.classList.remove("hidden");
  peopleInfoEl.classList.add("hidden");
});

// calendarBlockEl.addEventListener("mouseover", () => {
//   // вопросик, почему работает неправильно?
//   blockTravelEl.addEventListener("blur", () => {
//     calendarBlockEl.classList.add("hidden");
//   });
// });

todayMonth.innerHTML = `${getMonth()} ${todayYear}`; // поменять

const calendar = getCalendarMonth(4, 4) // something
  .map((item) => {
    let date = `
    <div class="calendar__day">
      <p>${item[0].dayOfMonth}</p>
      <p>${item[1].dayOfMonth}</p>
      <p>${item[2].dayOfMonth}</p>
      <p>${item[3].dayOfMonth}</p>
      <p>${item[4].dayOfMonth}</p>
      <p>${item[5].dayOfMonth}</p>
      <p>${item[6].dayOfMonth}</p>
    </div>`;

    // for (let i = 0; i < item.length; i++) {
    //   if (item[i].notCurrentMonth === true) {
    //     item[i].parentElement.classList.add("other__month");
    //   }
    // }

    return date;
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

// const notCurrentMonth = document.querySelectorAll(".calendar__day p");
// console.log(notCurrentMonth);
// notCurrentMonth.map((event) => {
//   if (event.notCurrentMonth === true) {
//     event.classList.add("other__month");
//   }
// });

// import { calendarBlockEl } from "../js/calendar.js";
// import { peopleInfoEl } from "../js/people-info.js";

/* close ADV */
const closeEl = document.querySelector(".close");
const closeMobEl = document.querySelector(".close__mobile");

closeEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});
closeMobEl.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.classList.add("hidden");
});

// const blockCountryEl = document.getElementById("country-info__input");

// blockCountryEl.addEventListener("focus", () => {
//   calendarBlockEl.classList.add("hidden");
//   peopleInfoEl.classList.add("hidden");
// });

/* fetch API */
const cards = document.querySelector(".homes__items");

fetch("https://if-student-api.onrender.com/api/hotels/popular", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    const cardItems = data
      .map(({ name, city, country, imageUrl }) => {
        return `<div class="homes__item swiper-slide">
      <img class="homes__img" src="${imageUrl}" />
      <div class="homes__text">
        <h2>${name}</h2>
      </div>
      <div class="homes__location">
        <h2>${city}, ${country}</h2>
      </div>
    </div>`;
      })
      .join("");
    cards.insertAdjacentHTML("afterbegin", cardItems);
  })
  .catch((err) => console.error(err));

/* Отправка запроса по destination or hotel name */
const AvHotels = document.querySelector(".av-hotels__items");
const btnSearch = document.querySelector(".search__btn");

btnSearch.addEventListener("click", () => {
  document.querySelector(".av-hotels").style.display = "block";
  document.querySelector(".arrow__down").style.display = "block";
  const value = document.getElementById("country-info__input").value;
  let url = `https://if-student-api.onrender.com/api/hotels?search=${value}`;

  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const hotelsItems = data
        .map(({ name, city, country, imageUrl }) => {
          return `<div class="homes__item swiper-slide">
        <img class="homes__img" src="${imageUrl}" />
        <div class="homes__text">
          <h2>${name}</h2>
        </div>
        <div class="homes__location">
          <h2>${city}, ${country}</h2>
        </div>
      </div>`;
        })
        .join("");
      AvHotels.insertAdjacentHTML("afterbegin", hotelsItems);
    })
    .catch((err) => console.error(err));
});

/* slider SWIPER */

let swiper = new Swiper(".mySwiper", {
  loop: true, // бесконечный слайдер
  spaceBetween: 30,
  slidesPerView: 2, // количество слайдов для показа
  navigation: {
    nextEl: ".swiper-button-next",
  },
  // mousewheel: {
  //   // прокрутка мышью с помощью колеса
  //   sensitivity: 1,
  // },
});

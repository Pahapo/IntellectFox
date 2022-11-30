const today = new Date();
const todayDay = today.getDate();
export const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 0).getDay();
const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
const daysInNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate();

export const getCalendarMonth = (checkInDate, checkOutDate) => {
  if (checkInDate < 0 || checkInDate > daysInMonth || checkOutDate < 0 || checkOutDate > daysInMonth) return false;

  const arrPreviousMonth = [];
  for (let i = 0; i < daysInPreviousMonth; i++) {
    arrPreviousMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: true, // день не входит в текущий месяц
      selectedDay: false, // выбранный пользователем день
      currentDay: false, // флаг сегодняшнего дня
      previousDay: true, // флаг прошедшего дня
    };
  }

  const arrMonth = [];
  for (let i = 0; i < daysInMonth; i++) {
    arrMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: false, // день не входит в текущий месяц
    };
    checkInDate <= i + 1 && checkOutDate >= i + 1 ? (arrMonth[i].selectedDay = true) : (arrMonth[i].selectedDay = false); // выбранный пользователем день
    todayDay === i + 1 ? (arrMonth[i].currentDay = true) : (arrMonth[i].currentDay = false); // флаг сегодняшнего дня
    todayDay < i + 1 ? (arrMonth[i].previousDay = false) : (arrMonth[i].previousDay = true); // флаг прошедшего дня
  }

  const arrNextMonth = [];
  for (let i = 0; i < daysInNextMonth; i++) {
    arrNextMonth[i] = {
      dayOfMonth: i + 1, // день месяца
      notCurrentMonth: true, // день не входит в текущий месяц
      selectedDay: false, // выбранный пользователем день
      currentDay: false, // флаг сегодняшнего дня
      previousDay: true, // флаг прошедшего дня
    };
  }

  let NextMonth;
  (daysInMonth + dayOfWeek) % 7 == 0 ? (NextMonth = 0) : (NextMonth = 7 - ((daysInMonth + dayOfWeek) % 7));

  const previousMonth = [...arrPreviousMonth.slice(-dayOfWeek)];
  previousMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const nextMonth = [...arrNextMonth.slice(0, NextMonth)];
  nextMonth.forEach((item) => {
    item.notCurrentMonth = true;
  });

  const arrCalendarMonth = [...previousMonth, ...arrMonth, ...nextMonth];

  const result = [];

  for (let i = 0, j = 0; i < arrCalendarMonth.length; i = i + 7, j++) {
    result[j] = [...arrCalendarMonth.slice(i, i + 7)];
  }
  return result;
};
console.log(getCalendarMonth(4, 5));

export const getMonth = () => {
  switch (todayMonth) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

/* календарь на 5 месяцев впрёд с текущего месяца */
// const testArr = [];

// const today = new Date();
// const todayDay = today.getDate();
// const todayYear = today.getFullYear();
// const todayMonth = today.getMonth();

// for (let k = 0; k < 5; k++) {
//   const dayOfWeek = new Date(today.getFullYear(), today.getMonth() + k, 0).getDay();
//   const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth() + k, 0).getDate();
//   const daysInMonth = new Date(today.getFullYear(), today.getMonth() + k + 1, 0).getDate();
//   const daysInNextMonth = new Date(today.getFullYear(), today.getMonth() + k + 2, 0).getDate();

//   const isTodayMonth = new Date(today.getFullYear(), today.getMonth() + k + 1, 0).getMonth();

//   const getCalendarMonth = () => {
//     //checkInDate, checkOutDate
//     //if (checkInDate < 0 || checkInDate > daysInMonth || checkOutDate < 0 || checkOutDate > daysInMonth) return false;

//     const arrPreviousMonth = [];
//     for (let i = 0; i < daysInPreviousMonth; i++) {
//       arrPreviousMonth[i] = {
//         dayOfMonth: i + 1, // день месяца
//         notCurrentMonth: true, // день не входит в текущий месяц
//         //selectedDay: false, // выбранный пользователем день
//         currentDay: false, // флаг сегодняшнего дня
//         previousDay: true, // флаг прошедшего дня
//       };
//     }

//     const arrMonth = [];
//     for (let i = 0; i < daysInMonth; i++) {
//       arrMonth[i] = {
//         dayOfMonth: i + 1, // день месяца
//         notCurrentMonth: false, // день не входит в текущий месяц
//       };

//       // --- проверка на текущий месяц ---
//       if (todayMonth === isTodayMonth) {
//         //checkInDate <= i + 1 && checkOutDate >= i + 1 ? (arrMonth[i].selectedDay = true) : (arrMonth[i].selectedDay = false); // выбранный пользователем день
//         todayDay === i + 1 ? (arrMonth[i].currentDay = true) : (arrMonth[i].currentDay = false); // флаг сегодняшнего дня
//         todayDay < i + 1 ? (arrMonth[i].previousDay = false) : (arrMonth[i].previousDay = true); // флаг прошедшего дня
//       } else {
//         //arrMonth[i].selectedDay = false;
//         arrMonth[i].currentDay = false;
//         arrMonth[i].previousDay = false;
//       }
//     }

//     const arrNextMonth = [];
//     for (let i = 0; i < daysInNextMonth; i++) {
//       arrNextMonth[i] = {
//         dayOfMonth: i + 1, // день месяца
//         notCurrentMonth: true, // день не входит в текущий месяц
//         //selectedDay: false, // выбранный пользователем день
//         currentDay: false, // флаг сегодняшнего дня
//         previousDay: true, // флаг прошедшего дня
//       };
//     }

//     let NextMonth;
//     (daysInMonth + dayOfWeek) % 7 == 0 ? (NextMonth = 0) : (NextMonth = 7 - ((daysInMonth + dayOfWeek) % 7));

//     const previousMonth = [...arrPreviousMonth.slice(-dayOfWeek)];
//     previousMonth.forEach((item) => {
//       item.notCurrentMonth = true;
//     });

//     const nextMonth = [...arrNextMonth.slice(0, NextMonth)];
//     nextMonth.forEach((item) => {
//       item.notCurrentMonth = true;
//     });

//     const arrCalendarMonth = [...previousMonth, ...arrMonth, ...nextMonth];

//     const result = [];

//     for (let i = 0, j = 0; i < arrCalendarMonth.length; i = i + 7, j++) {
//       result[j] = [...arrCalendarMonth.slice(i, i + 7)];
//     }
//     return result;
//   };
//   testArr[k] = getCalendarMonth();
// }
// console.log(testArr);

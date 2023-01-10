import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const flatpickr = require("flatpickr");

flatpickr("#datetime-picker");

// let timeField = document.querySelector('.timer');

// timeField.addEventListener('input', onTimeInput);
// console.log(onTimeInput);

// console.log(timeField);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";




// const currentTime = new Date();


const refs = {
datePicker: document.querySelector('#datetime-picker'),
dataStart: document.querySelector('[data-start]'),
dataDays: document.querySelector('[data-days]'),
dataHours: document.querySelector('[data-hours]'),
dataMinutes: document.querySelector('[data-minutes]'),
dataSeconds: document.querySelector('[data-seconds]'),
};

refs.dataStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
   if(selectedDates[0].getTime() <= Date.now()){
    refs.dataStart.disabled = true;
    window.alert("Please choose a date in the future");
   }else{
    refs.dataStart.disabled = false;
   };
   
    // console.log(selectedDates[0].getTime());
    // console.log(Date.now());
  },
};

const flat = flatpickr(refs.datePicker, options);

refs.dataStart.addEventListener('click', onClick);
// console.log(refs.datePicker.value);


function onClick(){
  // console.log('CLICK');
  let timerId = setInterval(() => {
    
    let selectedTime = new Date(refs.datePicker.value);
    // console.log(selectedTime.getTime());
    // console.log(Date.now());
    // console.log(refs.datePicker.value);
    let dif = selectedTime.getTime() - Date.now();
    
    console.log(dif);
    let showTime = convertMs(dif);
    console.log(showTime);
    refs.dataDays.textContent = showTime.days;
    refs.dataHours.textContent = showTime.hours;
    refs.dataMinutes.textContent = showTime.minutes;
    refs.dataSeconds.textContent = showTime.seconds;
    if(dif <= 1000 ){
      clearInterval(timerId);
      return
    }

  }, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};




// let timeField = document.querySelector('.timer');

// timeField.addEventListener('input', onTimeInput);

// function onTimeInput(){console.log(timeField.value)}




  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
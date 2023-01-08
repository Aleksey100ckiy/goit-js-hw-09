let btnStartEl = document.querySelector('[data-start]');
let btnStopEl = document.querySelector('[data-stop]');
let bodyEl = document.querySelector("body");
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

btnStartEl.addEventListener('click', onStartClick);

function onStartClick(){
    // console.log("start click");
    
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStartEl.disabled = true;
    timerId = setInterval(() => {
        getRandomHexColor();
        bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
}

btnStopEl.addEventListener('click', onStopClick);

function onStopClick(){
    // console.log("STOP click");
    btnStartEl.disabled = false;
    clearInterval(timerId);
}
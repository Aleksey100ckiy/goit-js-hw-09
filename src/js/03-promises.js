
let formEl = document.querySelector('.form')
let delayEl = document.querySelector('.form [name="delay"]');
let stepEl = document.querySelector('.form [name="step"]');
let amountEl = document.querySelector('.form [name="amount"]');

const formToKey = "feedback-form-state";

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);

let inLocal = localStorage.getItem(formToKey);
let parsed = JSON.parse(inLocal);

function onInput(){
  console.log("input");
    inLocal = localStorage.getItem(formToKey);
    parsed = JSON.parse(inLocal);
    console.log(parsed);
    localStorage.setItem(formToKey, JSON.stringify({
               delay : delayEl.value,
               step : stepEl.value,
               amount : amountEl.value,
           }));
}

function onSubmit(e){
  e.preventDefault();
  // console.log("submit");
  inLocal = localStorage.getItem(formToKey);
    parsed = JSON.parse(inLocal);
    // console.log(`{delay:${delayEl.value}, step:${stepEl.value}, amount: ${amountEl.value}}`);
    let delay = Number(delayEl.value);
    let step = Number(stepEl.value);
    let amount = Number(amountEl.value);
    
    for (let i = 1; i <= amount; i += 1){
          const delayStep = delay + step * (i - 1);
          createPromise(i, delayStep).then(onSuccess).catch(onError)
        };
      };


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
};

function onSuccess({ position, delay }) { 
 console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
};

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });





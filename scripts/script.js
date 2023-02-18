const form = document.querySelector('.form');
const fieldsets = form.querySelectorAll('.form__fieldset');
const allInputs = form.querySelectorAll('input');

const result = {};
let k = 0;
const data = new Date();
let timerId;

function inputSearch(i) {
  i.forEach(function(item) {
    if (item.checked) {
      return k = item.value;
    }
  })
}

function inputsSearch() {
  fieldsets.forEach(function(item) {
    const inputs = item.querySelectorAll('input');
    inputSearch(inputs);
    result[item.name] = k;
    k = 0;
  })
}

function eventListener() {
  inputsSearch();
  result.time = data;
  console.log(result);
  form.reset();
}

function inputsEventListener() {
  allInputs.forEach(function(input) {
    input.addEventListener('click', function() {
      clearTimeout(timerId);
      timerId = setTimeout(eventListener, 5000);
    })
  })
};

inputsEventListener();

form.addEventListener('submit', function(evt){
  evt.preventDefault();
  eventListener();
  clearTimeout(timerId);
});
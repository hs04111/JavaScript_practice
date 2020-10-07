/*const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiple: function (a, b) {
    return a * b;
  },

  power: function (a, b) {
    return a ** b;
  },
};

const a = 6;
const b = 3;

plus = calculator.plus(a, b);
minus = calculator.minus(a, b);
divide = calculator.divide(a, b);
multiple = calculator.multiple(a, b);
power = calculator.power(a);

console.log(plus);
console.log(minus);
console.log(divide);
console.log(multiple);
console.log(power); */
/*

const title = document.querySelector("#ok");

const BASE_COLOR = "blue";
const OTHER_COLOR = "wheat";

function okclick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", okclick);
}

init();
*/

const title = document.querySelector("#ok");

const CLICKED_CLASS = "clicked";

function okclick() {
  const currentClass = title.classList.contains(CLICKED_CLASS);

  if (currentClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", okclick);
}

init();

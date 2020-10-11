/*const title = document.querySelector("#title");
const colorArray = ["purple", "turquoise", "red", "tomato"];
const superEventHandler = {
  resizeHandler: function () {
    title.innerText = "You just resized!";
    title.style.color = colorArray[0];
  },
  mouseTopHandler: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colorArray[1];
  },
  mouseGoneHandler: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colorArray[2];
  },
  rightClickHandler: function () {
    title.innerText = "That was a right click!";
    title.style.color = colorArray[3];
  },
};

window.addEventListener("resize", superEventHandler.resizeHandler);
title.addEventListener("mouseenter", superEventHandler.mouseTopHandler);
title.addEventListener("mouseleave", superEventHandler.mouseGoneHandler);
window.addEventListener("auxclick", superEventHandler.rightClickHandler); */

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

/*
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

*/

/*
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900"),
   today = new Date(),
   left = xmasDay.getTime() - today.getTime(),
   leftInSeconds = parseInt(left/1000),
   days = parseInt(leftInSeconds/86400),
 left1= leftInSeconds%86400,
 hours = parseInt(left1/3600),
 left2 = left1%3600,
 minutes = parseInt(left2/60),
 seconds = left2%60;

 
  clockTitle.innerText = `${days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`; }
  

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
*/


const select = document.querySelector(".js-select")
const countryKey =  "country"


function saveCountry(text){
localStorage.setItem(countryKey, text);
}



function handleSubmit(){
  const currentCountry = select.options[select.selectedIndex].value;
  saveCountry(currentCountry);  
}

function submitCountry(){
  select.addEventListener("change", handleSubmit);
}

function showCountry(text){
  // localStorage에 저장된 option이 메뉴 첫번째로 나오게 하는 함수
  const selectedOption = document.querySelector(`select.js-select option[value=${text}]`);
  console.log(selectedOption)
 selectedOption.setAttribute("selected","")
}


function chooseCountry(){
  const currentValue = localStorage.getItem(countryKey)
  
  if( currentValue !== null ){    
    showCountry(currentValue);
  } else {    
    submitCountry(currentValue)
  }
}


function init(){
  chooseCountry();
}

init();
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  USER_LS = "currentUser",
  SHOWING_CN = "showing",
  timeNowForm = document.querySelector(".js-clock"),
  clock = timeNowForm.querySelector("h1");

function getTime() {
  const today = new Date();
  return today.getHours();
}

const hours = getTime();

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}

function askName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good Morning, ${text}!`;
  } else if (hours >= 12 && hours < 19) {
    greeting.innerText = `Good Afternoon, ${text}!`;
  } else if (hours >= 19 || hours < 6) {
    greeting.innerText = `Good Night, ${text}!`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  setInterval(getTime, 1000);
}

init();

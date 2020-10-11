const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const today = new Date(),
   hours = today.getHours(),
   minutes = today.getMinutes(),
   seconds = today.getSeconds();


 
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; 
}
  

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

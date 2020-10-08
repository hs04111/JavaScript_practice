const title = document.querySelector("#title");
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
window.addEventListener("auxclick", superEventHandler.rightClickHandler);

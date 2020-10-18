const toDoForm = document.querySelector(".js-pendingToDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingToDoList"),
  finishedList = document.querySelector(".js-finishedToDoList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pending = [];
let finished = [];

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function deleteToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  const ulClass = ul.classList.contains("js-pendingToDoList");
  if (ulClass) {
    pendingList.removeChild(li);
    const cleanPending = pending.filter(function (pending) {
      return pending.id !== parseInt(li.id);
    });
    pending = cleanPending;
    savePending();
  } else {
    finishedList.removeChild(li);
    const cleanFinished = finished.filter(function (finished) {
      return finished.id !== parseInt(li.id);
    });
    finished = cleanFinished;
    saveFinished();
  }
}

function moveTo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const liText = li.querySelector("span").innerText;
  const ul = li.parentNode;
  const ulClass = ul.classList.contains("js-pendingToDoList");
  if (ulClass) {
    paintFinished(liText);
  } else {
    paintPending(liText);
  }
  deleteToDos(event);
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  const moveToFinshedBtn = document.createElement("button");
  delBtn.innerText = "❌";
  moveToFinshedBtn.innerText = "⭕";
  delBtn.addEventListener("click", deleteToDos);
  moveToFinshedBtn.addEventListener("click", moveTo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(moveToFinshedBtn);
  li.appendChild(span);
  li.id = newId;
  li.classList.add("to_do_list");
  pendingList.appendChild(li);
  const pendingObj = {
    text: text,
    id: newId,
  };
  pending.push(pendingObj);
  savePending();
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finished.length + 1;
  const moveToPendingBtn = document.createElement("button");
  delBtn.innerText = "❌";
  moveToPendingBtn.innerText = "❗";
  delBtn.addEventListener("click", deleteToDos);
  moveToPendingBtn.addEventListener("click", moveTo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(moveToPendingBtn);
  li.appendChild(span);
  li.id = newId;
  li.classList.add("to_do_list");
  finishedList.appendChild(li);
  const finishedObj = {
    text: text,
    id: newId,
  };
  finished.push(finishedObj);
  saveFinished();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPending(currentValue);
  toDoInput.value = "";
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING_LS);

  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (pending) {
      paintPending(pending.text);
    });
  }
}

function loadFinished() {
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (finished) {
      paintFinished(finished.text);
    });
  }
}

function init() {
  loadPending();
  loadFinished();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

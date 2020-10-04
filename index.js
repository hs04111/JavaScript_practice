const title=document.querySelector("#title")

function clickHandle() {
    title.style.color = "blue"
}

title.addEventListener("click", clickHandle)

console.dir(title)


const age = prompt("How old are YOU?")

if (age>=20 ){
console.log("You can drink");
} else {
    console.log("You can't")
} 
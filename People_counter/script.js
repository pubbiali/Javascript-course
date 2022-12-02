let count = 0;
let counterEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count++;
    counterEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    counterEl.textContent = 0;
    count = 0;
}

console.log("Let's count the people in the subway")
let heading = document.getElementById("main-title");

heading.style.color ="dodgerblue";

heading.textContent = "Hello from JavaScript!";

let paragraph = document.getElementById("description");

document.getElementById("description").style.fontSize = "20px";

paragraph.textContent = "Robert is learning DOM manipulation";

document.body.style.backgroundColor = "#f0f0f0";

let btn = document.getElementById("change-btn");

btn.addEventListener("click", function() {
    document.getElementById("main-title").textContent = "You clicked the button!";
    btn.textContent = "Clicked!";
    document.getElementById("main-title").style.color = "crimson";

let count = 0; 

let countBtn = document.getElementById("count-btn");
let countDisplay = document.getElementById("count-display");

countBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = "Count:" +count;
});
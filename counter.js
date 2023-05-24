let increaseEl =document.getElementById("increase-btn")
let numberEl = document.getElementById("number-el")
let decreaseEl = document.getElementById("decrease-btn")
let saveEl = document.getElementById("save-btn")
let dispEl = document.getElementById("disp-el")
console.log(increaseEl)
console.log(decreaseEl)
console.log(saveEl)
let count = 0
function increase(){
count += 1
numberEl.textContent = count
}
function decrease(){
    count -= 1
    numberEl.textContent = count
}
function save(){
    let countstr = count + " - "
    dispEl.textContent += countstr
    numberEl.textContent = 0
    count = 0
}
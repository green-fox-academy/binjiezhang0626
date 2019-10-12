'use strict'
const button = document.querySelector('button')
const current = document.getElementById('currentTime')
const passed = document.getElementById('passedTime')

let currentTime = new Date()
window.onload = () => {
    current.textContent = currentTime
    modifyDateCSS(current)
}

const modifyDateCSS = date => {
    date.style.color = "orangered";
    date.style.backgroundColor = "lightgrey";
    date.style.border = "1px solid lightgrey";
    date.style.padding = "10px";
}

const calculate = () => {
    let passedTime = new Date()
    let timeDiff = (passedTime.getTime() - currentTime.getTime())/1000
    passed.textContent = timeDiff
    modifyDateCSS(passed)  
}

button.addEventListener('click', calculate)
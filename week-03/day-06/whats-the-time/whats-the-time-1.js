'use strict'
const button = document.querySelector('button')
const current = document.getElementById('currentTime')
const passed = document.getElementById('passedTime')

let currentTime = new Date()
window.onload = () => {
    current.textContent = currentTime
    modifyCSS(current)
}

const modifyCSS = date => {
    date.style.color = "orangered";
    date.style.backgroundColor = "lightgrey";
    date.style.border = "1px solid lightgrey";
    date.style.padding = "10px";
}

const waitForButtonClicked = () => {
    let passedTime = new Date()
    let timeDiff = (passedTime.getTime() - currentTime.getTime())/1000
    passed.textContent = timeDiff
    modifyCSS(passed)  
}

button.addEventListener('click', waitForButtonClicked)
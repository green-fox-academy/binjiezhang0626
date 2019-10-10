'use strict'
// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
let lolliEmoji = '🍭'
let timer

let candies = 0
let lollies = 0
let rate = 0
const candyBtn = document.querySelector('.create-candies')
const buyBtn = document.querySelector('.buy-lollypops')
const machineBtn = document.querySelector('.candy-machine')
let candiesShow = document.querySelector('.candies')
let lollypopsShow = document.querySelector('.lollypops')
let speedShow = document.querySelector('.speed')

const createCandy = () => {
    candies++
    candiesShow.textContent = candies
  }
  
candyBtn.addEventListener('click', createCandy)

const buyLollies = () => {
    if (candies >= 100) {
      lollies++
      candies -= 100
    }
  
    if (lollies >= 10) {
      if (timer) {
        window.clearInterval(timer)
      }
      if (rate < Math.floor(lollies / 10)) {
        rate = Math.floor(lollies / 10)
      }
  
      timer = window.setInterval(autoGenCandies, 1000)
    }
    candiesShow.textContent = candies
    speedShow.textContent = rate
    lollypopsShow.textContent = lolliEmoji.repeat(lollies)
}
  
const autoGenCandies = () => {
    candies += rate
    candiesShow.textContent = candies
}
  
buyBtn.addEventListener('click', buyLollies)
  
const rate = () => {
    rate *= 10
    speedShow.textContent = rate
}

machineBtn.addEventListener('click', rate)
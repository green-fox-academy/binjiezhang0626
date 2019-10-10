const button = document.querySelector('button')
const para = document.querySelector('p')
let counter = 0
let after5Sec = false

const timeoutFunction = () => {
    setTimeout(() => {
        after5Sec = true
      }, 5000)
}
const clickCounter = () => {
    counter++
    if (after5Sec && counter > 3) {
        para.removeAttribute('hidden')
    }
}

this.addEventListener('load', timeoutFunction)
button.addEventListener('click', clickCounter)
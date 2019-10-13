'use strict'

const button = document.querySelector('button')

let timer = setTimeout(() => {
    alert('5 secs passed')
  }, 5000)

button.addEventListener('click', () => {
    clearTimeout(timer)
  })
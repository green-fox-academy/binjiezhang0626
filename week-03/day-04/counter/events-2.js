'use strict'

const button = document.querySelector('button');
const list = document.querySelector('ul');
const result = document.querySelector('.result')
const count = event => {
    event.preventDefault()
    result.textContent = list.children.length
}

button.addEventListener('click', count);
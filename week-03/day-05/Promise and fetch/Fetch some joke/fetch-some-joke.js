'use strict'

const url = "http://api.icndb.com/jokes/random"
const button = document.querySelector('button')
const div = document.querySelector('.container')

const fetchJoke = () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => addJoke(data))
    .catch(error => {console.log(error.message)})
}

const addJoke = newJoke => {
    let joke = document.createElement('p')
    joke.textContent = newJoke.value.joke
    div.appendChild(joke)
}

button.addEventListener('click', fetchJoke)
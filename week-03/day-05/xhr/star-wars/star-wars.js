'use strict'

const DOMAIN = 'https://swapi.co/api/people/?search='

let button = document.querySelector('button')
let input = document.querySelector('input')
let names = document.querySelector('.names')
let movies = document.querySelector('.movies')

button.addEventListener('click', event => {
    event.preventDefault()
    let search = input.value
    fetchPeople(search)
  })

const createMovie = movie => {
    let li = document.createElement('li')
    li.textContent = movie.title
    movies.appendChild(li)
  }

const fetchMovie = movieUrl => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            let movie = JSON.parse(request.response)
            createMovie(movie)
        }
        request.open('GET', movieUrl)
        request.send()
    }
  }

const fetchMovies = movieUrls => () => {
    movies.innerHTML = ''
    movieUrls.forEach(movieUrl => {
      fetchMovie(movieUrl)
    })
  }

const createNameList = people => {
    people.forEach(person => {
      let li = document.createElement('li')
      li.textContent = person.name
      names.appendChild(li)
      let movieUrls = person.films
      li.addEventListener('click', fetchMovies(movieUrls))
    })
  }

const fetchPeople = search => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        let people = JSON.parse(request.response).results
        createNameList(people)
      }
    }
    request.open('GET', `${DOMAIN}${search}`)
    request.send()
  }
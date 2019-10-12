'use strict'
const URL = 'https://api.giphy.com/v1/gifs/trending?api_key=gAIr1h0t27DN4KP7zANsfZxc0ZMt9kbs&limit=16&rating=PG-13'
const appendUl = number => {
    let ul = document.createElement('ul')
    document.body.appendChild(ul)
  
    let list = []
    for (let i = 0; i < number; i++) {
      let div = document.createElement('li')
      div.className = 'default'
      list.push(div)
      ul.appendChild(div)
    }
    return list
  }

let ulItems = appendUl(16)
  
const dataRequest = new XMLHttpRequest()
  
const change = (element, height, width, url) => {
    element.style.height = height.toString() + 'px'
    element.style.width = width.toString() + 'px'
    element.style.backgroundImage = `url(${url})`
  }
  
const handleClick = (height, width, url) => {
    return event => {
      event.target.style.backgroundImage = `url(${url})`
      change(event.target, height, width, url)
    }
  }
  
  dataRequest.onreadystatechange = () => {
    if (dataRequest.readyState === 4) {
      allData = JSON.parse(dataRequest.response).data
      allData.forEach((datum, index) => {
        let still = datum.images['480w_still']
        change(ulItems[index], still.height, still.width, still.url)
  
        let gif = datum.images.original
        ulItems[index].addEventListener(
          'click',
          handleClick(gif.height, gif.width, gif.url)
        )
      })
    }
  }
  dataRequest.open('GET', URL)
  dataRequest.send()
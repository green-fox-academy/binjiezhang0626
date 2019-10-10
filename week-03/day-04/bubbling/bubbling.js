'use strict'

const nav = document.querySelector('nav')
const inspector = document.querySelector('div')
const style = inspector.style

let positionX = 0
let positionY = 0
let zoomLevel = 200

const navigation = direction => {
    if (direction == 'up') {
        positionY -= 10
        style.backgroundPositionY = positionY.toString() + 'px'
    } 
    if (direction == 'down') {
        positionY += 10
        style.backgroundPositionY = positionY.toString() + 'px'
    }
    if (direction == 'left') {
        positionX -= 10
        style.backgroundPositionX = positionX.toString() + 'px'
    }
    if (direction == 'right') {
        positionX += 10
        style.backgroundPositionX = positionX.toString() + 'px'
    }
}
const zoom = direction => {
    if (direction == 'in') {
        zoomLevel += 20
        style.backgroundSize = zoomLevel.toString() + '%'
    }
    if (direction == 'out') {
        zoomLevel -= 20
        style.backgroundSize = zoomLevel.toString() + '%'
    }
}

const onClickFunction = event => {
    let direction = event.target.getAttribute('data-direction')
    let action = event.target.getAttribute('data-action')
    if (action == 'move') {
        navigation(direction)
    }else {
        zoom(direction)
    }
}


nav.addEventListener('click', onClickFunction)
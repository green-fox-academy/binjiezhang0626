'use strict'

import {Domino} from '../../../week-01/day-04/09-dominoes/domino'
import {Thing} from '../../../week-01/day-04/07-fleetOfthings/thing'

function initializeDominoes() {
    const dominoes = []
    dominoes.push(new Domino(5, 2))
    dominoes.push(new Domino(4, 6))
    dominoes.push(new Domino(1, 5))
    dominoes.push(new Domino(6, 7))
    dominoes.push(new Domino(2, 4))
    dominoes.push(new Domino(7, 1))
    return dominoes
  }
  console.log('--------Test domino--------')
  const dominoes = initializeDominoes()
  for (let domino of dominoes) {
    domino.printAllFields();
  }

  function initializeThings(){
    const things = []
    things.push(new Thing('Get milk'))
    things.push(new Thing('Remove the obstacles'))
    things.push(new Thing('Stand up'))
    return things
  }
  console.log('--------Test Todo--------')
  const things = initializeThings()
  for (let thing of things) {
    thing.printAllFields();
  }
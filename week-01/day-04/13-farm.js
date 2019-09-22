// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

'use strict'

const Animal = require('./03-Animal')

class Farm {
    constructor(slots = 0){
        this.animals = []
        this.slots = slots
    }

    breed(animal){
        let freePlace = this.slots - this.animals.length
        if (freePlace > 0){
            this.animals.push(animal)
            this.slots --
        }else {
            console.log('There is no place for new animal.')
        }
    }

    slaughter(){
        if (this.animals.length > 0) {
            let removeIndex = 0,
                leastHungryAnimal = Number.MAX_SAFE_INTEGER
            this.animals.forEach((animal, index) => {
              if (animal.hunger < leastHungryAnimal) {
                removeIndex = index
                leastHungryAnimal = animal.hunger
              }
            })
            this.slots += 1
            this.animals.splice(removeIndex, 1) 
          } else {
            return '!No animals to slaughter'
          }
    }
}
let farm = new Farm(5)
console.log(farm)
farm.breed(new Animal(10, 10))
console.log(farm)
farm.animals[0].play()
farm.breed(new Animal(30, 30))
console.log(farm)
farm.slaughter()
console.log(farm)
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

'use strict'

const Sharpie = require('./04-sharpie')

class SharpieSet{
    constructor(Sharpies = []){
        this.Sharpies = Sharpies
    }

    countUsable(){
        let count = 0
        this.Sharpies.forEach(sharpie =>{
            if (sharpie.inkAmount != 0 ){
                count ++
            }
        })
        return count
    }

    removeTrash(){
        this.Sharpies = this.Sharpies.filter(sharpie => sharpie.inkAmount > 0)
    }
}

function initializeSharpie(){
    const sharpies = []
    sharpies.push(new Sharpie('sharpie 1', 10, 0))
    sharpies.push(new Sharpie('sharpie 2', 10, 0))
    sharpies.push(new Sharpie('sharpie 3', 10, 100))
    sharpies.push(new Sharpie('sharpie 4', 10, 5))
    sharpies.push(new Sharpie('sharpie 5', 10, 0))
    sharpies.push(new Sharpie('sharpie 6', 10, 0))
    return sharpies
}
 let sharpies = initializeSharpie()
console.log(sharpies)

let sharpieset = new SharpieSet(sharpies)
console.log(sharpieset.countUsable())
console.log(sharpieset.removeTrash())
console.log(sharpieset)
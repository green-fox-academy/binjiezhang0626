// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
'use strict'

class Animal{
    constructor(hungervalue = 50, thirstvalue = 50){
        this.hungervalue = hungervalue
        this.thirstvalue = thirstvalue
    }
    eat(){
        this.hungervalue--
    }
    drink(){
        this.thirstvalue--
    }
    play(){
        this.hungervalue++
        this.thirstvalue++
    }
}
const tiger = new Animal()
console.log(tiger)
tiger.play()
console.log(tiger)
tiger.drink()
console.log(tiger)
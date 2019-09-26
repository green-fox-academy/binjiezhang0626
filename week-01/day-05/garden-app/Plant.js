// The task is to create a garden application, so in your main method you should create a garden with flowers and trees. 
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).

'use strict'

class Plant{
    constructor(type, color, waterAmount, minimumWater, absorbRate){
        this.type = type
        this.color = color
        this.waterAmount = waterAmount
        this.minimumWater = minimumWater
        this.absorbRate = absorbRate
        this.needwater = (this.waterAmount <= this.minimumWater)
    }
    
    needWater(){
        if (this.needwater){
            console.log(`The ${this.color} ${this.type} needs water.`)
        }else {
            console.log(`The ${this.color} ${this.type} doesn't need water.`)
        }
    }  
    watering(water,count){
        this.waterAmount += this.absorbRate * (water/count)
        this.needwater = (this.waterAmount <= this.minimumWater)
    }
}
module.exports = Plant
// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
'use strict'

class Sharpie {
    constructor(color = 'unknown', width = null, inkAmount = 100){
        this.color = color
        this.width = width
        this.inkAmount = inkAmount
    }
    use(){
        return this.inkAmount --
    }
}
// const sharpie1 = new Sharpie('sharpie 1', 10)
// console.log(sharpie1)
// sharpie1.use()
// console.log(sharpie1)

module.exports = Sharpie
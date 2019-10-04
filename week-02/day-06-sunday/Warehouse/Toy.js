//The Toy has an extra color field which can be set through the constructor parameter.

const Item = require('./Item')

class Toy extends Item{
    constructor(name, price, color) {
        super(name, price)
        this.color = color
    }
    print(){
        console.log(`${this.color} ${this.name} - ${this.price}`)
    }
}

module.exports = Toy
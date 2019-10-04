//The Item has two fields, name and price. The constructor of the item should take both values as parameters but the price should have a default value of 1.

class Item {
    constructor(name, price = 1) {
        this.name = name
        this.price = price
    }
    print(){
        console.log(`${this.name} - ${this.price}`)
    }
}

module.exports = Item
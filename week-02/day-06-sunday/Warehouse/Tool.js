//The Tool has an extra condition field which cannot be set through the constructor and has a default value of "good".

const Item = require('./Item')

class Tool extends Item {
    constructor(name, price) {
        super(name, price)
        this.condition = 'good'
    }
    print(){
        console.log(`${this.condition} ${this.name} - ${this.price}`)
    }
}

module.exports = Tool
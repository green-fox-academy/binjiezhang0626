const Plant = require('./Plant')

class Flower extends Plant {
    constructor(color) {
        super(color, 5, 0.75)
    }
}

module.exports = Flower
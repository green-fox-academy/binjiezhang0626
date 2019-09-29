const Plant = require('./Plant')

class Tree extends Plant {
    constructor(color) {
        super(color, 10, 0.4)
    }
}

module.exports = Tree
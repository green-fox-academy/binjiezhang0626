'use strict'

class Car{
    constructor(gasAmount = 0, capacity = 100 ){
            this.gasAmount = gasAmount > 0 ? gasAmount : 0
            this.capacity = capacity  > 0 ? capacity : 0
    }
}

module.exports = Car
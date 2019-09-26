'use strict'

class Station{
    constructor(gasAmount){
        this.gasAmount = gasAmount
    }
    refill(car){
        if (this.gasAmount >= car.capacity){
            if(car.capacity >0)
            {
                this.gasAmount = this.gasAmount - car.capacity
                car.gasAmount = car.gasAmount + car.capacity
                // car.capacity = car.capacity - car.capacity
            }else{
                console.log('Gas is filled.')
            }   
        }else{
            console.log('We don\'t have enough gas for you.')
        }
    }
}

module.exports = Station
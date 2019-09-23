// Extend Helicopter class from Vehicle
// implement your Flyable interface

import {Flyable} from './flyable'
import {Vehicle} from './Vehicle'

class Helicopter extends Vehicle implements Flyable{
    land(): void {
        console.log('Landing')
    }
    fly(): void {
        console.log('Flying')
    }
    takeOff(): void {
        console.log('Take off')
    }
    constructor(name: string = 'Air Force 1', maxGas: number = 100, seatNumber: number = 10){
        super(name, maxGas, seatNumber)
    }
    
}

export {Helicopter}
// Create an abstract Vehicle class
// it should have at least 3 fields
'use strict'

abstract class Vehicle{
    name: string
    maxGas: number
    seatNumber: number
    constructor(name: string, maxGas: number, seatNumber: number){
        this.name = name
        this.maxGas = maxGas
        this.seatNumber = seatNumber
    }
} 

export {Vehicle}
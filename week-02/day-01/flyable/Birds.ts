// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface
'use strict'

import {Animal} from '../zoo/Animal'
import {Flyable} from './flyable'

class Bird extends Animal implements Flyable{
    constructor(name: string = 'Xiaoniao', age: number = 5){
        super(name, age)
    }
    land(): void {
        console.log('landing')
    }
    fly(): void {
        console.log('flying')
    }
    takeOff(): void {
        console.log('take off')
    }
    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    breed(){
        return 'laying eggs'
    }
}

export {Bird}
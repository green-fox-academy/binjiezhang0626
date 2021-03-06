'use strict'

import {Animal} from './Animal'

class Bird extends Animal{
    constructor(name: string = undefined, age: number = 5){
        super(name, age)
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
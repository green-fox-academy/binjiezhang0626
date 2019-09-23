'use strict'

import {Animal} from './Animal'

class Mammal extends Animal{
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
        return 'pushing miniature versions out'
    }
}

export {Mammal} 
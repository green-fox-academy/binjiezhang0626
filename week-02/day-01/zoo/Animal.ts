// So we need an abstract Animal class

// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender? Any other? Write down at least 3 fields and/or methods that should be included in Animal.
// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. We need to define specific fields and methods for each.
'use strict'

abstract class Animal {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    abstract getName(): string
    abstract getAge(): number
    abstract breed(): string
}

export {Animal}


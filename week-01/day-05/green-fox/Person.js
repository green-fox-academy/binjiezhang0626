// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (integer number)
// gender: the gender of the person (male / female)
// And the following methods:

// introduce(): prints out 'Hi, I'm name, a age year old gender.'
// getGoal(): prints out 'My goal is: Live for the moment!'
// And the following constructors:

// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female
'use strict'

class Person {
    constructor (name = 'jane Doe', age = '30', gender = 'female') {
        this.name = name
        this.age = age
        this.gender = gender
        this.message = `Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`
    }
    getMessage(){
        return this.message
    }
    introduce() {
        console.log(this.message) 
        // return `Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.` 
        
    }
    getGoal() {
        console.log('My goal is: Live for the moment!')
    }
}

module.exports = Person
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
// introduce(): 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

'use strict'

const Person = require('./Person')

class Mentor extends Person{
    constructor(name, age, gender, level = 'intermediate'){
        super(name, age, gender)
        this.level = level
    }
    getGoal(){
        console.log('My goal is: Educate brilliant junior software developers.')
    } 
    introduce(){
        console.log(super.getMessage() + ` ${this.level} mentor.`)
    }
}

module.exports = Mentor
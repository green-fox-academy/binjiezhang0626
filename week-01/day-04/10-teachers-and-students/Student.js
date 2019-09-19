'use strict'

class Student{
    constructor(name){
        this.name = name
    }
    learn(){
        console.log(`${this.name} is learning something new.`)
    }
    question(teacher){
        teacher.answer()
    }
}

module.exports = Student

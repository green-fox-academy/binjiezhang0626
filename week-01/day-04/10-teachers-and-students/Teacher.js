'use strict'

class Teacher{
    constructor(name){
        this.name = name
    }
    teach(student){
        student.learn()
    }
    answer(){
        console.log(`${this.name} is answering a question.`)
    }
}
module.exports = Teacher



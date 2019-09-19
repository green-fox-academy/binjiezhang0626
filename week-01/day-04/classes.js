// classes have simple functions
// callbacks are usually arrow functions
'use strict'
const Person = require('./Person')
const readline = require('readline')
// class Person{

//     static  planColor = 'blue'
//     static counter =0
//     constructor(name ='Unknown', age =-12){
//         this.name = name
//         this.age = age
//         Person.counter++
//     }

//     getName(){
//         return this.name
//     }

//     setName(name){
//         this.name = name
//     }
//     greet(person){
//         console.log(`${this.name} says 'Hello my friend, dear ${person.name}'`)
//     }
//     printMyself(){
//         console.log(`I am ${this.name}, ${this.age} years old.`)
//     }

//     growOlder(){
//         this.age++
//     }
// }
new Person()
let adam = new Person('Adam', 33)
console.log(adam.getName())
adam.setName('Peter')
console.log(adam)
let mate = new Person('Mate', 28)
console.log(mate)
let unknown = new Person(undefined,23)
console.log(undefined)
mate.greet(adam)
adam.printMyself()
adam.growOlder()

const rl = readline.createInterface(process.stdin, process.stdout)

rl.prompt()
rl.on('line',(line) =>{
    console.log(`you have just typed :${line}`)
}).on('close',()=>{
    process.exit(0)
})
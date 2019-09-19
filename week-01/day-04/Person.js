class Person{

    // static  planColor = 'blue'
    // static counter = 0
    constructor(name ='Unknown', age =-12){
        this.name = name
        this.age = age
        // Person.counter++
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }
    greet(person){
        console.log(`${this.name} says 'Hello my friend, dear ${person.name}'`)
    }
    printMyself(){
        console.log(`I am ${this.name}, ${this.age} years old.`)
    }

    growOlder(){
        this.age++
    }
}

module.exports = Person
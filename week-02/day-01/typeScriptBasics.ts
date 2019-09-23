class Person {
    private name: string
    age: number
    skills: string[]

    constructor(name: string, age: number ){
        this.name = name
        this.age = age
        this.skills = []

    }

    addSkill(input: string): string {
        this.skills.push(input)
        return 'Skill has been added'
    }

    printName(): string{
        return `The name is:${this.name} `
    }

    setAge(newAge : number): void{
        this.age = newAge
    }
}

class Student extends Person{
    constructor(name: string, age: number){
        super(name, age)
    }

    getAge(): number {
        return this.age//you can't get the age cause is private value in class Person
    }



}

const person1 = new Person('Mate', 28)
console.log(person1.addSkill('JS'))
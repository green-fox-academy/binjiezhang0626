class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    sayHello() {
        return `${this.color} ${this.name} says hello.`
    }
}

class Zebra extends Animal{
    constructor(color){
        super('zebre',color)
    }

    run(){
        console.log('Running away from a lion.')
    }

    sayHello(){
        return super.sayHello() + 'hi.'
    }
}

class StripedZebra extends Zebra {
    constructor(stripe){
        super('black')
        this.stripes = stripes
    }
}

let animal = new Animal('zebra', 'black')
console.log(animal.sayHello())
let zebra = new Zebra('black')
console.log(zebra.sayHello())
zebra.stripe = 5
console.log(zebra)



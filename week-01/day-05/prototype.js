let animal = {
    color: 'black',
    name: 'zebre'
}

let obj = Object.create(animal)
console.log(obj)

console.log(obj.isPrototypeOf({}))
console.log(obj.isPrototypeOf(obj))
console.log(obj.isPrototypeOf(animal))
console.log(animal.isPrototypeOf(obj))
console.log(animal.__proto__.isPrototypeOf(obj))

Object.setPrototypeOf(obj, animal)
console.log(obj.isPrototypeOf(animal))
console.log(obj.hasOwnProperty('name'))
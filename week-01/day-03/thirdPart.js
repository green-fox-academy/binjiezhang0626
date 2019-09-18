let a =10
//value
let b = a
 a = 20 
 console.log(a)
 console.log(b)
//reference
 let firstObject = {
     name: 'Mate'
 }
 let secondObject = firstObject

 firstObject.name = 'Adam'

 console.log(firstObject.name)
 console.log(secondObject.name)

 let animals =['Dog', 'Cat', 'Parrot']
 let [firstAnimal, secondAnimal, thirdAnimal] = animals

 console.log(firstAnimal)
 console.log(secondAnimal)

 let person ={
     name: 'Mate',
     age: '28',
     hair: true
 }

let {name, age, hair} = person
let person2 = {name, age, hair}
console.log(name)

console.log(person2)
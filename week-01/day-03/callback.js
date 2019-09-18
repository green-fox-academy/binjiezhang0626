const doSomething = callback =>{
    callback('hello')
    callback('world')
}

const callback = input=>{
    console.log(input)
}

doSomething(callback)

let array = [1, 2, 3, 4, 5]
array.forEach(callback)

// let counter = 0
// const timer = () => {
//     let interval = setInterval(() => {
//         console.log('hello')
//         counter++
//         if (counter === 5) {
//             clearInterval(interval)
//         }
//     },1000)
// }
// timer()

setTimeout(() => {
    console.log('1 second has passed')
}, 0)

console.log('which one is first?')


//array function
function basicFunction(parameters){

}

const notSobasic = (parameters) => {

}
// Write a function that returns a string. Possible values are "coffee", "coffee with sugar", "coffee with milk", "coffee with sugar and with milk". 
// The function should take two parameters, "sugar" and "milk", with default "false" boolean value.
// default values before ES6
function coffee1(sugar, milk) {
    if (sugar === false && milk === false) {
        return 'coffee'
    } else if (sugar === true && milk === false) {
        return 'coffee with sugar'
    } else if (sugar === false && milk === true) {
        return 'coffee with milk'
    } else {
        return 'coffee with sugar and with milk'
    } 
}
// with ES6
function coffee2 (sugar = false, milk = false) {
    return `coffee ${sugar? 'with sugar':' '}${sugar && milk? ' and ' : ''}${milk? 'with milk': ''}`
}

console.log(coffee1(false,false))
console.log(coffee1(true,false))
console.log(coffee1(false,true))
console.log(coffee1(true,true))

console.log(coffee2(false,false))
console.log(coffee2(true,false))
console.log(coffee2(false,true))
console.log(coffee2(true,true))

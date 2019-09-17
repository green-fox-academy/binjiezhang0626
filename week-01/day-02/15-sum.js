'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(parameter){
    let i = 0
    let sum = 0
    while(i<=parameter){
        sum = sum + i
        i ++
    }   
    return sum
}
console.log(sum(10))
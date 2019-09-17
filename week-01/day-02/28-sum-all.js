'use strict';

// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console
let ai = [3,4,5,6,7]

function sum(arr) {
    let sum = 0
    arr.forEach(function(val, idx, arr) {
        sum += val
    }, 0)
    return sum
}
console.log(sum(ai))
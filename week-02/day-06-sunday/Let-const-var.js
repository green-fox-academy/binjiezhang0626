// Write a function that takes a number array and returns the average of the numbers. 
// In the function store the length of the parameter in a const variable.

function average(array) {
    const len = array.length
    let sum = array.reduce((a,b) => (a + b), 0)
    return sum / len
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log(average(arr))
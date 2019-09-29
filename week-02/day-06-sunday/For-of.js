// Write a function that finds the maximum value in an array.
const data = [5,1,2,9,7,3,8]

//before ES6
function max1(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]> max) {
            max = array[i]
        }        
    }
    return max
}

//with ES6
function max2(array) {
    let max = array[0]
    for (let element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}

console.log(max1(data))
console.log(max2(data))
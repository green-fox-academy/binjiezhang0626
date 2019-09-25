'use strict'

function binarySearch (array, value) {
    let low = 0
    let high = array.length - 1
    while (low <= high) {
        let middle = parseInt ( (low + high)/ 2 )
        if (value == array[middle]) {
            return middle
        } else if (value > array[middle]) {
            low = middle + 1
        } else if (value < array[middle]) {
            high = middle - 1
        }
    }
    return -1
}

let array1 = [10,1,6,4,9,3,7,5,2,8]
console.log(binarySearch ( array1, 4))
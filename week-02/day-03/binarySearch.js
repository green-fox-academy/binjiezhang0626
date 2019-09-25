'use strict'

function binarySearch (array, value) {
    let low = 0
    let high = array.length - 1
    while (low <= high) {
        let middle = Math.floor((high + low)/ 2 )
        if (value == array[middle]) {
            return middle
        } else if (value > array[middle]) {
            low = middle + 1
        } else if (value < array[middle]) {
            high = middle - 1
        }
    }
    return 'Not exist this value.'
}

let array2 = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch (array2, 8))
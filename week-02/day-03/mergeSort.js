'use strict'

function merge (left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left, right)
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    let middle = Math.floor(array.length/2)
    let left = array.slice(0,middle)
    let right = array.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

let array1 = [10,1,6,4,9,3,7,5,2,8]
console.log(mergeSort(array1))

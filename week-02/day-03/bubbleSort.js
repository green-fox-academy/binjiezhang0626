'use stricct'

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j =  i +1; j < array.length; j ++) {
            if (array[i] > array [j]) {
                let tempArray = array[i]
                array[i] = array [j]
                array [j] = tempArray
            }
        }
    }
}

let array1 = [10,1,6,4,9,3,7,5,2,8]
bubbleSort(array1)
console.log(array1)
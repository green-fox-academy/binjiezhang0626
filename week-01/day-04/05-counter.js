// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value
'use strict'

let initialvalue = 0
class Counter {

    constructor(integer = initialvalue) {
        this.integer = integer
    }
    add(number = 1) {
        this.integer += number
    }
    get() {
        console.log(String(this.integer))
    }
    reset() {
        this.integer = initialvalue
    }
}

const int1 = new Counter(2)
console.log(int1)
int1.add()
console.log(int1)
int1.add(10)
console.log(int1)
int1.get()
int1.reset()
console.log(int1)
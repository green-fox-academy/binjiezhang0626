// Without ES6 if you wanted to have a list with unique items you had to create it on your own. 
// ES6 introduced Set as a built in solution.
// const setEntity = new Set();
// setEntity.add(1).add(2).add(3).add(4)
// console.log(setEntity)
// for (let item of setEntity){
//     console.log(item);
// }
// Write a solution that uses no ES6 functionality but provides set-like behaviour. 
// It's enough to store and read data, you don't have to implement every feature of the ES6 Set class.
// Write a short code that presents your code's features as an example.

class set {
    constructor(length = 0) {
        this.length = length
        this.array = new Array(this.length)
    }

    add(value) {
        for (let e of this.array) {
            if (value === e) {
                return this
            } 
        }
        this.array.push(value)
        this.length = this.array.length
        return this
    }

    read() {
        for (let e of this.array) {
            console.log(e);
        }
    }
}

let set1 = new set()

set1.add(1).add(2)
console.log(set1)
set1.read()
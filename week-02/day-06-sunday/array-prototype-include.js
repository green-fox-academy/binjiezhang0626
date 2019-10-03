const arr = [1,2,3];
if (arr.indexOf(2) !== -1){
    console.log("We found 2 in the array without ES7 tools.");
}
if (arr.includes(2)){
    console.log("We found 2 in the array with ES7 tools.");
}
// After that create a function that takes two arrays and returns those numbers which are not present in both arrays.
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

    check(array1, array2) {
        let result = []
        let concatArr = array1.concat(array2)
        for (let e of this.array) {
            if (!concatArr.includes(e)) {
                result.push(e)
            }
        }
        return result
    }
}

let set1 = new set()
set1.add(1).add(2).add(3).add(4)
console.log(set1)
console.log(set1.check([1,2],[2,3]))
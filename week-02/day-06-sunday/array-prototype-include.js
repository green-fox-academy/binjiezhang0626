const arr = [1,2,3];
if (arr.indexOf(2) !== -1){
    console.log("We found 2 in the array without ES7 tools.");
}
if (arr.includes(2)){
    console.log("We found 2 in the array with ES7 tools.");
}

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
function remove(array1,array2) {
    let removeArr = []
    let concatArr = array1.concat(array2)
    concatArr .forEach( element => {
        if (!removeArr.includes(element)) {
            removeArr.push(element)
        }
    })
    return removeArr
}

console.log(remove([1, 2, 3], [3, 4, 5, 6]))
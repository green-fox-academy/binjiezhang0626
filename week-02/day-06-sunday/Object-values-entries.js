//Write a function that takes an object which has numbers on it's values. 
//It represents the result of a word count on a text. 
//The function should return the word with the highest count.
function highestValue(obj) {

    let max = 0
    let maxKey = ''
    for (let [key, val] of Object.entries(obj)) {
        if (val > max) {
            max = val
            maxKey = key
        }
    }
    
    return maxKey
}

const obj1 = {hello: 2, world: 4, jsa: 1, shenzhen: 3}
console.log(highestValue(obj1))


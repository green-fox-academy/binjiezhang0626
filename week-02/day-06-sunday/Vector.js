//Write a function that has 3 parameters: x, y, z. Their default values should be 0.
//The function should return an array that contains x, y, z in this order.
//Use this function to update the following array's arrays to three dimensional vectors:
function vectorInit(x = 0, y = 0, z = 0) {
    return [x, y, z];
}

const vectors = [
    [1,2,3],
    [],
    [2,3],
    [-1],
    [6,7,8,9]
]
let newVectors = []

for (let vector of vectors) {
    newVectors.push(vectorInit(...vector))
}
console.log(newVectors)
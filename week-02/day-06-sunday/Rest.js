// Write a function that takes at least 3 parameters, all of them numbers. The function should return a matrix and the first two parameters should specify it's size. 
// The first parameter is the number of rows, the second is the number of columns. The rest of the numbers is the content of the matrix line-by-line. 
// If the matrix can't be created because of insufficient parameters the function should return null.
function Matrix() {
    let params = Array.from(arguments);
    return (params.length < 3) ? null : Array(params[0]).fill(Array(params[1]).fill(params[2]));
}
console.log(Matrix());
console.log(Matrix(5, 5, 1));
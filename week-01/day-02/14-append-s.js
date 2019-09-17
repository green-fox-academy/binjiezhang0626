'use strict';

// - Create a variable named `am` and assign the value `dog` to it
let am = 'dog'
// - Write a function called `appendS` that gets a string as an input
function appendS(string = 'String'){
    return string+'s'
}
//   and appends an 's' character to its end
// - Print the result of `appendS(am)` to the console
console.log(appendS(am))
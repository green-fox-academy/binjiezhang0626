'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(parameter){
    let i = 1
    let factorial = 1
    while(i<=parameter){
        factorial = factorial*i
        i ++
    }   
    return factorial
}
console.log(factorio(3))
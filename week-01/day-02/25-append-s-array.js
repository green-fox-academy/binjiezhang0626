'use strict';

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops
let animals = ['dog', 'cat', 'kitten']
let animals2 = animals.map(x=>{
    x = x+'s'
    return x
})
console.log(animals2)
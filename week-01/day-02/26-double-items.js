
'use strict';

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
let ag = ['Gin', 'Whiskey', 'Wine', 'Beer']
let ag2 =ag.map(x=>{
    x = x.repeat(2)
    return x
})
console.log(ag2)
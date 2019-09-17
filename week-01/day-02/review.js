'use strict';

//if
let condition = true
if (condition){
    console.log("Hello if")
} else{
    console.log('Hello not if')
}

//for
for (let i = 0; i <5; i++) {
    console.log("hello")
}
/* three way: debug; info; error
*/

//while
// while (){
//     console.log("hello")
// }

let j = 0;
while(j<5){
    console.log("hello")
    j++
}

//continue
let fruits = ['apple', 'banana', 'plum', 'kiwi']
//fruits.length = 4
for (let i = 0; i<fruits.length; i++){
    if (fruits[i] === 'banaba'){
        console.log('Banaba is in the frient')
        continue
    }
    //other 
}

function greet(name){
    console.log(`Greetings, dear ${name}`)
}
greet('Benjamin')

fruits = fruits.map(function(fruit){
    return fruit + '!'
})

fruits.forEach(greet)

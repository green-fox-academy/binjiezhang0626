'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let i = 1

while (i <=lineCount){
    if(i < lineCount/2 +1){
        console.log(' '.repeat(lineCount/2 +1 -i)+'*'.repeat(2*i-1))
    }else{
        console.log(' '.repeat(i - lineCount/2)+'*'.repeat(2*(lineCount-i)+1))
    } 
    i++
}
//bravoooooooo!
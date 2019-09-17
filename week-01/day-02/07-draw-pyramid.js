'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let i = 1

while (i <=lineCount){
    console.log(' '.repeat(lineCount-i)+'*'.repeat(2*i-1))
    i++
}
//bravoooooooo!
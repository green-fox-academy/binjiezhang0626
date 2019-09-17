'use strict';

const lineCount = 6;
const interline = lineCount - 2

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
let i = 1
let j = 0
while(i <=lineCount){
    if (i == 1 || i == lineCount){
        console.log('%'.repeat(lineCount))
    }else{
        console.log('%'+' '.repeat(j)+'%'+' '.repeat(interline-j-1)+'%'.replace())
        j++
    }
    i++   
}
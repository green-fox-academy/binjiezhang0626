// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
'use strict';
const lineCount = 6;
const chessCount = 4;
let i = 1
while(i<=lineCount){
    if(i % 2 == 1){
        console.log('% '.repeat(chessCount))
    }else{
        console.log(' %'.repeat(chessCount))
    }
    i++

}
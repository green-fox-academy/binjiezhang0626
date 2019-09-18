'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
let mytodo = "My todo:\n"
let game = " - Download games\n"
let Diablo = "     - Diablo"
let insertStr = (soure,start, newStr) => {
    return soure.slice(0, start) + newStr + soure.slice(start)
  }

todoText = insertStr(todoText,0, mytodo)
todoText = insertStr(todoText,todoText.length,game) 
todoText = insertStr(todoText,todoText.length,Diablo)
console.log(todoText);
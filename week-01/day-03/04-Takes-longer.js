'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
let newStr = " always takes longer than"
let insertStr = (soure,start, newStr) => {
    return soure.slice(0, start) + newStr + soure.slice(start)
  }
quote = insertStr(quote,20,newStr)
console.log(quote);
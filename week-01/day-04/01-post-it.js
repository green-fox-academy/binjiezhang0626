// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"
'use strict'

class Postit{
    constructor(backgroundColor='unknown', text = 'unknown', textColor = 'unknown'){
        this.backgroundColor = backgroundColor
        this.text = text
        this.textColor =textColor
    }
}

const text1 = new Postit('orange', 'Idea 1', 'blue')
const text2 = new Postit('pink', 'Awesome', 'black')
const text3 = new Postit('yellow', 'Superb!', 'green')
console.log(text1)
console.log(text2)
console.log(text3)
'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
setTimeout(() => {
    console.log('apple')
}, 0)
// pear -> after 1 seconds
setTimeout(() => {
    console.log('pear')
}, 1000)
// melon -> after 3 seconds
setTimeout(() => {
    console.log('melon')
}, 3000)
// grapes -> after 5 seconds
setTimeout(() => {
    console.log('grapes')
}, 5000)
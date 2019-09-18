// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
'use strict'
// Create a map with the following key-value pairs.
let productDatabase2 = new Map()
productDatabase2.set('Eggs', 200)
productDatabase2.set('Milk', 200)
productDatabase2.set('Fish', 400)
productDatabase2.set('Apples', 150)
productDatabase2.set('Bread', 50)
productDatabase2.set('Chicken', 550)
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.
console.log(productDatabase2)
// Which products cost less than 201? (just the name)
console.log('Which products cost less than 201?')
productDatabase2.forEach(function(value,key){
    if (value < 201){
        console.log(key)
    }
})
// Which products cost more than 150? (name + price)
console.log('Which products cost more than 150?')
productDatabase2.forEach(function(value,key){
    if (value <= 150){
        console.log(key+' : '+value)
    }
})



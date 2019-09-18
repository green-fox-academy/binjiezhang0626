'use strict'
// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.
let productDatabase = new Map()
productDatabase.set('Eggs', 200)
productDatabase.set('Milk', 200)
productDatabase.set('Fish', 400)
productDatabase.set('Apples', 150)
productDatabase.set('Bread', 50)
productDatabase.set('Chicken', 500)
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.

// How much is the fish?
console.log('How much is the fish?')
console.log(productDatabase.get('Fish'))
// What is the most expensive product?
console.log('What is the most expensive product?')
let price = Array.from(productDatabase.values())
let max = Math.max.apply(null,price)
console.log(max)
// What is the average price?
console.log('What is the average price?')
function average(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}
console.log(average(price))
// How many products' price is below 300?
console.log('How many products\' price is below 300?')
let i =0
price.forEach(function(x){
    if (x<300){
        i++
    }
})
console.log(i)
// Is there anything we can buy for exactly 125?
console.log('Is there anything we can buy for exactly 125?')
let flag = 0 
price.forEach(function(x){
    if (x == 125){
        flag = 1
    }else{
        flag = 0
    }
})
if (flag == 1){
    console.log('Yes!')
}else{
    console.log('No!')
}
// What is the cheapest product?
console.log('What is the cheapest product?')
let min = Math.min.apply(null,price)
productDatabase.forEach(function(value,key){
    if (value == min){
        console.log(key)
    }
})
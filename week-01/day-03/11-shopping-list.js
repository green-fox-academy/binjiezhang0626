// Represent the following products with their prices
let shoppingList = new Map()
shoppingList.set('Milk',1.07)
shoppingList.set('Rice',1.59)
shoppingList.set('Eggs',3.14)
shoppingList.set('Cheese',12.60)
shoppingList.set('Chicken Breasts',9.40)
shoppingList.set('Apples',2.31)
shoppingList.set('Tomato',2.58)
shoppingList.set('Potato',1.75)
shoppingList.set('Onion',1.10)

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
// Represent Bob's shopping list
let BobsShoppingList = new Map()
BobsShoppingList.set('Milk',3)
BobsShoppingList.set('Rice',2)
BobsShoppingList.set('Eggs',2)
BobsShoppingList.set('Cheese',1)
BobsShoppingList.set('Chicken Breasts',4)
BobsShoppingList.set('Apples',1)
BobsShoppingList.set('Tomato',2)
BobsShoppingList.set('Potato',1)

// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
// Represent Alice's shopping list
let AlicesShoppingList = new Map()
AlicesShoppingList.set('Rice',1)
AlicesShoppingList.set('Eggs',5)
AlicesShoppingList.set('Chicken Breasts',2)
AlicesShoppingList.set('Apples',1)
AlicesShoppingList.set('Tomato',10)
// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
// Create an application which solves the following problems.

// How much does Bob pay?
console.log('How much does Bob pay?')
let Bobpay = 0
BobsShoppingList.forEach(function(value,key){
    m = BobsShoppingList.get(key)
    n = shoppingList.get(key)
    Bobpay = Bobpay + m*n
})
console.log('Bob need pay '+Bobpay+'.')
// How much does Alice pay?
console.log('How much does Alice pay?')
let Alicespay = 0
AlicesShoppingList.forEach(function(value,key){
    m = AlicesShoppingList.get(key)
    n = shoppingList.get(key)
    Alicespay = Alicespay + m*n
})
console.log('Bob need pay '+Alicespay+'.')
// Who buys more Rice?
console.log('Who buys more Rice?')
let a = BobsShoppingList.get('Rice')
let b = AlicesShoppingList.get('Rice')
if (a > b){
    console.log('Bob.')
}else if(a < b){
    console.log('Alice.')
}else{
    console.log('Alice and Bob buy same Rice.')
}
// Who buys more Potato?
console.log('Who buys more Potato?')
let c = BobsShoppingList.get('Potato')
let d = AlicesShoppingList.get('Potato')
if (c > d){
    console.log('Bob.')
}else if(c < d){
    console.log('Alice.')
}else{
    console.log('Alice and Bob buy same Potato.')
}
// Who buys more different products?
console.log('Who buys more different products?')
let e = BobsShoppingList.size
let f = AlicesShoppingList.size
if (e > f){
    console.log('Bob.')
}else if (e < f){
    console.log('Alices.')
}else {
    console.log('There is no difference between Alice and Bob.')
}
// Who buys more products? (piece)
console.log('Who buys more products? (piece)')
let BobSum = 0
let AliceSum = 0
BobsShoppingList.forEach(function(value,key){
    BobSum = BobSum + BobsShoppingList.get(key)
})
AlicesShoppingList.forEach(function(value,key){
    AliceSum = AliceSum + AlicesShoppingList.get(key)
})
if (BobSum > AliceSum){
    console.log('Bob.')
}else if (BobSum < AliceSum){
    console.log('Alice.')
}else {
    console.log('They buys same piece of products.')
}
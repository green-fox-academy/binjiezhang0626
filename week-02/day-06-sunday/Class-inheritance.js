// Create a Playground class that is extended from the Garden class. Give it an extra toys field which should be a string array. 
// Give it an add(toy) function that stores the new toy in the toys array.

// this is the base class
function Garden (width, length) {
    this.width = width
    this.length = length
}
Garden.prototype.area = function() {
    return this.width * this.length
}
Garden.prototype.circumference = function() {
    return 2 * (this.width + this.length)
}
Garden.prototype.efficiency = function() {
    return this.area()/this.circumference()
}

//here is class inheritance
function playGround(width, length, toys) {
    Garden.call(this, width, length)
    this.toys = toys
}

playGround.prototype = Object.create(Garden.prototype)
playGround.prototype.constructor = playGround
playGround.prototype.add = function(toy) {
    this.toys.push(toy)
}

playGround1 = new playGround(1,2,[])
playGround1.add('hello')
console.log(playGround1)
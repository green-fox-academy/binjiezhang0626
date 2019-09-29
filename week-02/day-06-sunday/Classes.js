// Write with both technologies a class that's named Garden, has width and length as fields and the following functions: area(), circumference() and efficiency(). 
// The function called efficiency should return the result of area() / circumference().
//ES5
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


//ES6
class Garden {
    constructor(width, length) {
        this.width = width
        this.length = length
    }

    area() {
        return this.width * this.length
    }
    circumference() {
        return 2 * (this.width + this.length)
    }
    efficiency() {
        return this.area()/this.circumference()
    }
}

let garden1 = new Garden(1,2)
console.log(garden1.efficiency())
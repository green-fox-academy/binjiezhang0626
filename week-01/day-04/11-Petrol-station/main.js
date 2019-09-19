const Car = require('./Car')
const Station = require('./Station')

let car = new Car()
let station = new Station(500)

station.refill(car)
console.log(station)
console.log(car)
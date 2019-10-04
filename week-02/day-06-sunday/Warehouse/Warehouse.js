//The Warehouse has an itemList field, an addItem(item) function which stores the new item in the list and a printItemsOfType(type) function which expects a type (Item, Toy, Tool) parameter and prints those items that fit the criteria (hint: use instanceof).
const Item = require('./Item')
const Toy = require('./Toy')
const Tool = require('./Tool')


class Warehouse {
    constructor(){
        this.itemList = []
    }
    addItem(item) {
        this.itemList.push(item)
    }
    printItemsOfType(type) {
        this.itemList.forEach(item => {
            if (item instanceof type) {
                item.print()
            }
        })
    }
}
module.exports = Warehouse
class Garden {
    constructor() {
        this.plants = []
    }

    add(plant) {
        this.plants.push(plant)
    }

    needsWater() {
        return this.plants.filter((plant) => plant.isThirsty())
    }

    water(amount) {
        console.log(`Watering with ${amount}`)
        let needsWater = this.needsWater()
        let waterPerPlant = amount / needsWater.length
        needsWater.forEach(plant => plant.water(waterPerPlant))
    }

    status() {
        this.plants.forEach(plant => plant.status())
    }
}

module.exports = Garden
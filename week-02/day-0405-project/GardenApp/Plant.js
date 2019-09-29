class Plant {
    constructor(color,Threshold, Absorbation) {
        this.color = color
        this.waterAmount = 0
        this.waterThreshold = Threshold
        this.waterAbsorbation = Absorbation
    }

    isThirsty () {
        return this.waterAmount < 5
    }

    water(amount) {
        this.waterAmount += amount * 0.75
    }

    status() {
        console.log(`The ${this.isThirsty()} ${this.constructor.name} ${this.isThirsty () ? 'needs' : ' doesnt need'} water.`)
    }
}

module.exports = Plant
interface Flyable {
    ammoStorage: number
    maximumAmmo: number
    damage: number
    refill(): number
    fight(): void
    isPriority(): boolean
}

abstract class Aircraft implements Flyable {
        ammoStorage: number
        maximumAmmo: number
        damage: number

    constructor (ammoStorage: number, damage: number) {
        this.ammoStorage = ammoStorage
        this.damage = damage
    }

    abstract isPriority(): boolean

    refill(): number {
        return null
    }

    fight(): void {
        //...
    }
}

class F35 extends Aircraft {
    constructor(ammoStorage: number, damage: number){
        super(ammoStorage, damage)
    }

    isPriority(): boolean {
        return true
    }
}

class F16 extends Aircraft {
    constructor(ammoStorage: number, damage: number){
        super(ammoStorage, damage)
    }

    isPriority(): boolean {
        return false
    }
}

class Carrier {
    aircraftStorage: Flyable[]

    constructor(){
        this.aircraftStorage = []
    }

    addNewAircraft (newAircraft: Flyable) : void {
        this.aircraftStorage.push(newAircraft)
    }
}

// Aircrafts

// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16

// Max ammo: 8
// Base damage: 30
// F35

// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

// Methods

// fight

// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition
// refill

// It should take a number as parameter and subtract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
// getType

// It should return the type of the aircraft as a string
// getStatus

// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// isPriority

// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

'use strict'

class Aircraft {
    constructor(type){
        this.type = type
        this.ammoStorage = 0
        this.baseDamage = (this.type === 'F16') ? 30 : 50
        this.maxAmmo = (this.type === 'F16') ? 8 : 12
    }
    fight(){
        let allDamage = this.ammoStorage * this.baseDamage
        this.ammoStorage = 0
        return allDamage
    }
    refill(fillingNumber){
        let needAmmo = this.maxAmmo - this.ammoStorage
        if (fillingNumber >= needAmmo){
            this.ammoStorage = this.ammoStorage + needAmmo
            fillingNumber = fillingNumber - needAmmo
            return fillingNumber
        }else{
            console.log('Ammo are not enough to refill.') 
        }
        
    }
    getType(){
        return this.type
    }
    getStatus(){
        return `Type ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`
    }
    isPriority(){
        return (this.type === 'F35') ? true : false
    }

}

module.exports = Aircraft
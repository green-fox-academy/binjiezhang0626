// Create a class that represents an aircraft-carrier

// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The initial ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well
// Methods

// add

// It should take a new aircraft and add it to its storage
// fill

// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
// fight

// It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it, then subtract all the damage from its health points
// getStatus

// It should return a string about itself and all of its aircrafts' statuses in the following format:

'use strict'

const Aircraft = require('./Aircraft')

class Carrier {
    constructor(ammoStorage = 0, healthPoint){
        this.aircrafts = []
        this.ammoStorage = ammoStorage
        this.healthPoint = healthPoint
    }

    add(aircraft){
        this.aircrafts.push(aircraft)
    }

    fill(){
        if(this.ammoStorage <= 0) {
            throw 'exception'
        } 
        if (this.ammoStorage > 0){
            this.aircrafts.forEach(aircraft =>{
                if(aircraft.isPriority()){
                    this.ammoStorage = aircraft.refill(this.ammoStorage)
                }
            })    
        }

        if (this.ammoStorage > 0){
            this.aircrafts.forEach(aircraft => {
                this.ammoStorage = aircraft.refill(this.ammoStorage)
            })
        }
    }

    totalDamage(){
        let damage = 0
        return this.aircrafts.reduce((damage,aircraft) => {
            return damage = aircraft.ammoStorage * aircraft.baseDamage + damage
        },0)
    }

    fight(){
        let totalDamage = this.totalDamage();
        this.aircrafts.forEach(aircraft => {
            aircraft.ammoStorage = 0
        })
        this.healthPoint -= Math.min(this.healthPoint, totalDamage)
    }

    getStatus(){
        if(this.healthPoint === 0){
            console.log("It's dead Jim:(")
        }else {
            console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage},Total damage: ${this.totalDamage()}`);
        this.aircrafts.forEach( aircraft => {
            console.log(aircraft.getStatus())
        })
        }
    }
}

module.exports = Carrier
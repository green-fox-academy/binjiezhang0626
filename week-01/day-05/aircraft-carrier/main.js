'use strict'

const Aircraft = require('./Aircraft')
const Carrier = require('./Carrier')

let carrier1 = new Carrier(70, 5000)
let carrier2 = new Carrier(25, 2000)

carrier1.add(new Aircraft('F35'))
carrier1.add(new Aircraft('F35'))
carrier1.add(new Aircraft('F35'))
carrier1.add(new Aircraft('F16'))
carrier1.add(new Aircraft('F16'))


carrier2.add(new Aircraft('F16'))
carrier2.add(new Aircraft('F16'))
carrier2.add(new Aircraft('F16'))
carrier2.add(new Aircraft('F35'))
carrier2.add(new Aircraft('F35'))


console.log('Status:\n')
carrier1.getStatus()
carrier2.getStatus()


console.log('Fill ammo:\n')
console.log('1: with enough storage');
carrier1.fill();
carrier1.getStatus();
console.log('2: when strage is not enough')
carrier2.fill();
carrier2.getStatus();

console.log('Fight:\n');
carrier1.fight(carrier2);
console.log('Carrier ONE after fight');
carrier1.getStatus();
console.log('Carrier Two after fight');
carrier2.getStatus();
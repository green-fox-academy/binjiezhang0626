'use strict'

import {Mammal} from './Mammal'
import {Bird} from './Bird'
import {Reptile} from './Reptile'

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getAge()} years old ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getAge()} years old ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getAge()} years old ${bird.getName()} is breeding by ${bird.breed()}.`);
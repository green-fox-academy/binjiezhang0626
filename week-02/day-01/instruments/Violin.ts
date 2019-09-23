'use strict'

import {StringedInstrument} from './StringInstrument'

class Violin extends StringedInstrument{
    sound(): string {
        return 'Screech'
    }
    constructor(numberOfStrings: number = 4, name:string = 'Violin'){
        super(numberOfStrings, name)
    }
}

export {Violin}
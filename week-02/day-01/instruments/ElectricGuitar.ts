'use strict'

import {StringedInstrument} from './StringInstrument'

class ElectricGuitar extends StringedInstrument{
    sound(): string {
        return 'Twang'
    }
    constructor(numberOfStrings: number = 6, name:string = 'Electric Guitar'){
        super(numberOfStrings,name)
    }
}

export {ElectricGuitar}
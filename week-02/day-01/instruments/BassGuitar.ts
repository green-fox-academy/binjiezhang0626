'use strict'

import {StringedInstrument} from './StringInstrument'

class BassGuitar extends StringedInstrument{
    sound(): string {
        return 'Duum-duum-duum'
    }
    constructor(numberOfStrings: number = 4, name:string = 'Bass Guitar'){
        super(numberOfStrings, name)
    }
}

export {BassGuitar}
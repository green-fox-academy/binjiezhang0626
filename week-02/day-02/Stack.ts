'use strict'

import {Stack} from './interface'

class Stacks implements Stack{
    stacks: string[]
    constructor(){
        this.stacks = []
    }
    empty(): boolean {

        return this.stacks.length === 0
        // if(this.stacks.length === 0) {
        //     return true
        // } else {
        //     return false
        // }
    }    
    peek(): string {
        if (this.stacks.length === 0) {
            return null
        } else {
            let lastIndex : number = this.stacks.length -1
            return this.stacks[lastIndex]
        }
    }
    push(value: string): void {
        this.stacks.push(value)
    }
    pop(): string {
        if (this.stacks.length === 0) {
            return 'There is no element to pop.'
        } else {
            let popElement = this.stacks.pop()
            return popElement
        } 
    }
}

export {Stacks}
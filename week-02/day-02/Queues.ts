'use strict'

import {Queue} from './interface'

class Queues implements Queue{
    queues: string[]
    constructor(){
        this.queues = []
    }

    empty(): boolean {
        if(this.queues.length === 0) {
            return true
        } else {
            return false
        }
    }

    peek(): string {
        if (this.queues.length === 0) {
            return null
        } else {
            return this.queues[0]
        }
    }
    add(value: string): void {
        this.queues.push(value)
    }
    remove(): string {
        if (this.queues.length === 0) {
            return 'There is no element to remove.'
        } else {
            let removeElement = this.queues.shift()
            return removeElement
        }
    } 
}

export {Queues}
'use strict'

class NodeClass{
    value: string
    next: NodeClass | null
    constructor(value: string) {
        this.value = value
        this.next = null
    }
}

export {NodeClass}
'use strict'

import {LinkedList} from './interface'
import {NodeClass} from './Node'


class LinkedLists implements LinkedList{
    index: number
    head: NodeClass | null

    constructor(){     
        this.head = null
    }

    add(value: string, index?: number): void {
        const newNode = new NodeClass(value)
        /*
        create a new list node object and store the data in it.
        The node will be added to the end of the exiting list.
        */
       if (this.index === undefined){
            /*the index undefined */
            if(this.head === null){
                this.head = newNode
            } else {
                let current = this.head
                while(current.next != null) {
                    current = current.next
                }
                current.next = newNode
            }
       } else {
            /*the index is defined */
            /*
            If we want to add a node in special index, 
            we should check the input index first.
            */
            if (this.head === null) {
                throw new RangeError (`Index ${index} does not exist in the list.`)
            }
            if (index === 0) {
                newNode.next = this.head
                this.head = newNode
            } else {
                let current = this.head
                let previous = null
                let i = 0
                while ((current.next != null)&&(i < index)) {
                    previous = current
                    current = current.next
                    i ++
                }
                if (i < index) {
                    throw new RangeError(`Index ${index} does not exist in the list.`)
                }

                previous.next = newNode
                newNode.next = current
            }
       }
    }    
    get(index: number): string {
        if (index > -1) {
            let current = this.head
            let i = 0
            while((current !== null) && (i < index)) {
                current = current.next
                i ++
            }
            if (current != null ) {
                return current.value
            } else {
                return undefined
            }
        } else {
            undefined
        }
    }

    removeItem(value: string): void {
        if (this.head === null) {
            console.log(`Value ${value} does not exist in the list.`)
            return 
            // throw new RangeError(`Value ${value} does not exist in the list.`)
        } else {
            let previous = this.head
            let current = this.head
            while((current !==null) && (current.value !== value)) {
                previous = current
                current = current.next
            }
            if (current !== null) {
                previous.next = current.next
                console.log('The item has been removed.')
            }
            // throw new RangeError(`Value ${value} does not exist in the list.`)
        }
    }
    remove(index: number): string {
        if ((this.head === null) ||(index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`)
        }
        if (index == 0) {
            const value = this.head.value
            this.head = this.head.next
            return value
        }
        let current = this.head
        let previous = null
        let i = 0
        while ((current !== null) && (i < index)) {
            previous = current
            current = current.next
            i ++
        }
        if (current !== null) {
            previous.next = current.next
            return current.value
        }
        throw new RangeError(`Index ${index} does not exist in the list.`)
    }
    size(): number {
        if (this.head === null) {
            return 0
        }
        let current = this.head
        let count = 0
        while (current !== null) {
            count ++
            current = current.next
        }
        return count
    }
}

export {LinkedLists}
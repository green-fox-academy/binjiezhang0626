'use strict'

import {Printable} from '../../../week-02/day-01/printable/printable'

class Thing implements Printable{
  name: string
  completed: boolean

  constructor(name: string) {
    this.name = name;
    this.completed = true;
  }

  printAllFields(): void {
    let name = this.getName()
    let complete = this.getCompleted() ? 'x' : ' '
    console.log(`[${complete}] ${name}`)
  }

  complete() {
    this.completed = true;
  }

  getName() {
    return this.name;
  }

  getCompleted() {
    return this.completed;
  }
}

// module.exports = Thing;
export {Thing}
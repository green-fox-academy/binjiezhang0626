'use strict'

import {Printable} from '../../../week-02/day-01/printable/printable'

class Domino implements Printable{
  printAllFields(): void {
    console.log(`[${this.values[0]}|${this.values[1]}]`)
  }
  values: number[];
    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
  
    toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }
  }
  
  // module.exports = Domino;
  export {Domino}
// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

import { Reservationy } from './reservationy'
const DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SON']
class reservstions implements Reservationy{
  
    getDowBooking(): string {
        let index = Math.floor(Math.random() * 7)
	    return DOW[index]
    }    
    
    getCodeBooking(): string {
        let random_string = '',
            random_ascii: number,
            random_number: number
  
        for (let i = 0; i < 8; i++) {
            random_number = Math.random()
            random_ascii = Math.floor(
                random_number > 0.5 ? Math.random() * 25 + 65 : Math.random() * 9 + 48
            )
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }

    printReservation(){
        return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
    } 
}

for(let i:number = 0; i < 10; i++){
    let Reservation = new reservstions()
    console.log(Reservation.printReservation())
}
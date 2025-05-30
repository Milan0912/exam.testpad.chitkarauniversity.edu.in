enum SeatType {
    Regular,
    Premium,
    VIP
}

type Ticket = [string, number, SeatType, number];

function calculateDiscount(ticket: Ticket): number {
    let finalPrice = ticket[3];

    if (ticket[2] === SeatType.Premium) {
        finalPrice = finalPrice * 0.9;
    } else if (ticket[2] === SeatType.VIP) {
        finalPrice = finalPrice * 0.8;
    }

    return finalPrice;
}

let myTicket1: Ticket = ["Inception", 7, SeatType.Regular, 300];
let myTicket2: Ticket = ["Inception", 8, SeatType.Premium, 300];
let myTicket3: Ticket = ["Inception", 9, SeatType.VIP, 300];

console.log("Regular Seat Final Price:", calculateDiscount(myTicket1));
console.log("Premium Seat Final Price:", calculateDiscount(myTicket2));
console.log("VIP Seat Final Price:", calculateDiscount(myTicket3));

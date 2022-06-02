// *USER DATA COLLECTED BY USER'S INPUT*
// !USER KMS!
let userKm = parseInt( prompt("Hello User! Type your Kms (numbers only) down below please.") );

// !USER AGE!
let userAge = parseInt( prompt("Type also your age to calculate your ticket's price.") );

// *DATA ANALYSIS AND OUTPUT*
// !TICKET PRICE PER KM!
let pricePerKm = 0.21;

// !BASE USER TICKET PRICE!
let userBaseTicket = userKm * pricePerKm;

// !DISCOUNT CONDITIONS!
// !UNDER 18 DISCOUNT!
let under18Discount;

// !OVER 65 DISCOUNT!
let over65Discount;

// !FINAL PRICE!
let userFinalPrice;

// *SIDE BY SIDE*
// if (userAge < 18) {
//     under18Discount = userBaseTicket * 0.2;
//     userFinalPrice = (userBaseTicket - under18Discount).toFixed(2)
//     document.getElementById("ticket-price").innerHTML = `This is your price! ${userFinalPrice} €`;
// } else if (userAge > 65) {
//     over65Discount = userBaseTicket * 0.4;
//     userFinalPrice = (userBaseTicket - over65Discount).toFixed(2)
//     document.getElementById("ticket-price").innerHTML = `This is your price! ${userFinalPrice} €`;
// } else {
//     document.getElementById("ticket-price").innerHTML = `This is your price! ${userBaseTicket} €`;
// }

// *SHORT VERSION*
if (userAge < 18) {
    userFinalPrice = (userBaseTicket * 0.8).toFixed(2)
    document.getElementById("ticket-price").innerHTML = `This is your price! ${userFinalPrice} €`;
} else if (userAge > 65) {
    userFinalPrice = (userBaseTicket * 0.6).toFixed(2)
    document.getElementById("ticket-price").innerHTML = `This is your price! ${userFinalPrice} €`;
} else {
    document.getElementById("ticket-price").innerHTML = `This is your price! ${userBaseTicket} €`;
}
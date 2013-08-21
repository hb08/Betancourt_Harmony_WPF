// Title: Movie Ticket Price   Author: Harmony Betancourt   Date: 8/21/13
// Purpose: Assign movie price by age and discounts for matinee

//Givens from user prompts
var movieTimeClock = prompt("What time is the movie?");
var movieTimeDay = prompt("Is that am or pm?");
var userAge = prompt("What is your age?");

//Known Variables
var ticketPriceReg = 12;
var ticketPriceDisc = 7;

//Logic and math 
// Notes: Discount price is 55+ or <10, matinee is 3-5pm

if ( (movieTimeClock >=3) && (movieTimeClock <=5) && (movieTimeDay === "pm") ) {
	console.log("The ticket price is $" + ticketPriceDisc);
} else if ( (userAge >= 55) || (userAge < 10) ) {
	console.log ("The ticket price is $" + ticketPriceDisc);
} else {
	console.log ("The ticket price is $" + ticketPriceReg);
}
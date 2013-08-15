// Title: Bring Ams to Florida!  Author: Harmony Betancourt  Date: 8/13/13
// Purpose: Calculate how long it will take to pay for a round trip ticket from PHX to RSW 

//Givens from prompts
var ticketPrice = prompt("What is the current price of a roundtrip ticket?"); //The price of current tickets
var amountSaved = prompt("How much do you have saved already?"); //The amount saved
var savingLength = prompt("How many weeks do you plan to save?"); //Goal time

//Calculations

//The length of time needed to save should amount to the total needed minus the amount already saved, then divided by weeks
var amountNeededWeekly = (ticketPrice - amountSaved) / savingLength; 

//Convert to Months by dividing the time saving in weeks by four
var months = savingLength / 4;
//Find the amount needed per month by dividing the amount needed weekly times four 
var amountNeededMonthly = amountNeededWeekly * 4;

//Print to Console
console.log("If ticket prices remain at $" + ticketPrice +", and you have already saved $" + amountSaved + ", then in " + savingLength + " weeks you will have needed to save $" + amountNeededWeekly + " a week for " + savingLength + " weeks, or $" + amountNeededMonthly +" monthly over the course of " + months + " months. Good luck!");
// Title: Slice of Pie Part 2  Author: Harmony Betancourt  Date: 8/13/13

//Purpose: Calculate how many whole slices of pizza per guest, rest goes to Sparky

//Prompt for givens
var sliceNumber = prompt("How many slices per pizza?");
var peopleNumber = prompt("How many people were at the party?");
var pizzaNumber = prompt("How many pizzas did you order?");

//Calculate number of slices per person to whole number
var totalSlices = sliceNumber * pizzaNumber;
var slicesPerPerson = parseInt(totalSlices / peopleNumber);

//Calculate for Sparky
var slicesSparky = parseInt(totalSlices - (peopleNumber* slicesPerPerson));


//Print to Console
console.log("Sparky got " + slicesSparky + " slices of pizza.");
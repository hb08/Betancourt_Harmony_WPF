// Title: Slice of Pie Part 1  Author: Harmony Betancourt  Date: 8/13/13

//Purpose: Calculate how many slices of pizza each person can have

//Prompt for givens
var sliceNumber = prompt("How many slices per pizza?");
var peopleNumber = prompt("How many people were at the party?");
var pizzaNumber = prompt("How many pizzas did you order?");

//Calculate number of slices to nearest decimal
var totalSlices = sliceNumber * pizzaNumber;
var slicesPerPerson = totalSlices / peopleNumber;

//Print to Console
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");
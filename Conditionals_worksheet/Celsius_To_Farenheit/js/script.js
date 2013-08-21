// Title: Celsius to Fahrenheight Converter  Author: Harmony Betancourt   Date: 8/21/13
// Purpose: Convert the temperature given between to either Celsius or Fahrenheit, depending on which is given

// Givens using user imput with prompts
var degrees = prompt("What is the temperature?\nNumbers only, please");
var unitUsed = prompt("What unit of measure are you using, C or F?");

// Math using if statements, with printing of answer to console.log, with else as catchall to retry
if ( unitUsed === "F" || unitUsed === "f") {
	var convDegrees = (degrees - 32) * (5/9);
	console.log("The temperature is " + convDegrees + " degrees Celsius.");
} else if ( unitUsed === "C" || unitUsed === "c") {
	var convDegrees = degrees * (9/5) + 32;
	console.log("The temperature is " + convDegrees + " degrees Fahrenheit.");
} else { 
	console.log("Please try again using F or C to represent the unit of measure!");
}


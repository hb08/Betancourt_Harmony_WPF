// Title: Check The Login   Author: Harmony Betancourt   Date: 8/21/13
// Purpose: Verify correct username and password

//Variables from user via prompt
var userNameEnter = prompt("Please enter your username.");
var userPassEnter = prompt("Please enter your password.");

//Known Variables
var userNameCorrect = "Betelgeuse";
var userPassCorrect = "LydiaDeetz4ever!"
var greeting = "Welcome, " + userNameCorrect + "!";
var error1 = "User not found. Try again.";
var error2 = "Password does not match our records.";



//Behind The Scenes Logic - if correct print greeting, if username wrong print error1, if password wrong print error2
if (userNameEnter === userNameCorrect && userPassEnter === userPassCorrect) {
	console.log(greeting);
} else if (! (userNameEnter === userNameCorrect)) {
	console.log(error1);
} else if (! (userPassEnter === userPassCorrect)) {
	console.log(error2);
} 
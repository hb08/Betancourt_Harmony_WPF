// Project: Functions Worksheet  Author: Harmony Betancourt  Date: 8/26/11

// Radius of a Circle
//Anonymous Function
var calCircum = function(d) {
    var circum = d / 2;
    return circum;
}
//Prompt
var d = prompt("For Circumference\nWhat is the diameter of the circle?");
//Arguments
var totalCircum = calCircum (d);
// Print to console to test
console.log("The circumference of the circle is " + totalCircum);

// Bee Stings
//Anonymous Function
var calStings = function(w) {
    var killerStings = 8.666666667 ;
    var deathCalc = w / killerStings;
    return deathCalc ;
}

//Prompt
var w = prompt("For Stung!\nWhat is the weight of the animal in pounds?");
//Arguments
var totalStung = calStings(w);
// Print to console to test
console.log("It takes " + totalStung + " bee stings to kill a(n) " + w + "lb animal.");


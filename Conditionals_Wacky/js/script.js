// Title: Astrology  Author: Harmony Betancourt  Date: 8/21/13
// Purpose: User inputs birth date, and receives Western and Eastern Astrology reading

//User givens via prompts
var birthMonth = prompt("What month were you born?\nPlease give month number.")  ;
var birthDate = prompt("What is day were you born?\nNumbers only, please.") ;
var birthYear = prompt("What year were you born?");

//Variable Processing
var sunSign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

if ( (birthMonth == 1  && birthDate > 21) || (birthMonth == 2 && birthDate < 20)){
    var westSign = sunSign[0] ;
} else if ( (birthMonth == 2  && birthDate > 19) || (birthMonth == 3 && birthDate < 21)){
    var westSign = sunSign[1] ;
} else if ( (birthMonth == 3  && birthDate > 20) || (birthMonth == 4 && birthDate < 21)){
    var westSign = sunSign[2] ;
}









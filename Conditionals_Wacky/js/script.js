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
} else if ( (birthMonth == 4  && birthDate > 20) || (birthMonth == 5 && birthDate < 22)){
    var westSign = sunSign[3] ;
} else if ( (birthMonth == 5  && birthDate > 21) || (birthMonth == 6 && birthDate < 22)){
    var westSign = sunSign[4] ;
} else if ( (birthMonth == 6  && birthDate > 21) || (birthMonth == 7 && birthDate < 23)){
    var westSign = sunSign[5] ;
} else if ( (birthMonth == 7  && birthDate > 22) || (birthMonth == 8 && birthDate < 23)){
    var westSign = sunSign[6] ;
} else if ( (birthMonth == 8  && birthDate > 22) || (birthMonth == 9 && birthDate < 23)){
    var westSign = sunSign[7] ;
} else if ( (birthMonth == 9  && birthDate > 22) || (birthMonth == 10 && birthDate < 23)){
    var westSign = sunSign[8] ;
} else if ( (birthMonth == 10  && birthDate > 22) || (birthMonth == 11 && birthDate < 23)){
    var westSign = sunSign[9] ;
} else if ( (birthMonth == 11  && birthDate > 22) || (birthMonth == 12 && birthDate < 22)){
    var westSign = sunSign[10] ;
} else if ( (birthMonth == 12  && birthDate > 21) || (birthMonth == 1 && birthDate < 21)){
    var westSign = sunSign[11] ;
} else {
    console.log("Please retry, and make certain you only enter numbers!") ;
}







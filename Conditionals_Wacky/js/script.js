// Title: Astrology  Author: Harmony Betancourt  Date: 8/21/13
// Purpose: User inputs birth date, and receives Western and Eastern Astrology reading

//User givens via prompts
    //Month of birth in numbers
var birthMonth = prompt("What month were you born?\nPlease give month number.")  ;
    //Date of birth in numbers
var birthDate = prompt("What is day were you born?\nNumbers only, please.") ;
    // Year of birth with all four numbers
var birthYear = prompt("What year were you born? All four digits, please!");

//Variable Processing
    //Assign sun signs with array
var sunSign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    // birthMonth changed to integer
birthMonth = parseInt(birthMonth);
    // birthDate changed to integer
birthDate = parseInt(birthDate);

// Assign sunSign to westSign
    //if Jan 21 - Feb 19
if ( (birthMonth === 1  && birthDate > 21) || (birthMonth === 2 && birthDate < 20)){
    // Aquarius
    var westSign = sunSign[0] ;
    //If Feb 20 - March 20
} else if ( (birthMonth === 2  && birthDate > 19) || (birthMonth === 3 && birthDate < 21)){
    // Pisces
    var westSign = sunSign[1] ;
    //If March 21 - April 20
} else if ( (birthMonth === 3  && birthDate > 20) || (birthMonth === 4 && birthDate < 21)){
    // Aries
    var westSign = sunSign[2] ;
    //If April 21 - May 21
} else if ( (birthMonth === 4  && birthDate > 20) || (birthMonth === 5 && birthDate < 22)){
    // Taurus
    var westSign = sunSign[3] ;
    // If May 22 - June 21
} else if ( (birthMonth === 5  && birthDate > 21) || (birthMonth === 6 && birthDate < 22)){
   // Gemini
    var westSign = sunSign[4] ;
    //If June 22 - July 22
} else if ( (birthMonth === 6  && birthDate > 21) || (birthMonth === 7 && birthDate < 23)){
    // Cancer
    var westSign = sunSign[5] ;
    // If July 23 - August 22
} else if ( (birthMonth === 7  && birthDate > 22) || (birthMonth === 8 && birthDate < 23)){
   // Leo
    var westSign = sunSign[6] ;
    // If August 23 - Sept 22
} else if ( (birthMonth === 8  && birthDate > 22) || (birthMonth === 9 && birthDate < 23)){
    // Virgo
    var westSign = sunSign[7] ;
    // If Sept 23 - Oct 22
} else if ( (birthMonth === 9  && birthDate > 22) || (birthMonth === 10 && birthDate < 23)){
    // Libra
    var westSign = sunSign[8] ;
    // If Oct 23 - Nov 22
} else if ( (birthMonth === 10  && birthDate > 22) || (birthMonth === 11 && birthDate < 23)){
    // Scorpio
    var westSign = sunSign[9] ;
    // If Nov 23 - Jan 20
} else if ( (birthMonth === 11  && birthDate > 22) || (birthMonth === 12 && birthDate < 22)){
    // Sagittarius
    var westSign = sunSign[10] ;
    // If Dec 22 - Jan 20
} else if ( (birthMonth === 12  && birthDate > 21) || (birthMonth === 1 && birthDate < 21)){
   // Capricorn
    var westSign = sunSign[11] ;
   // If anything else
} else {
    // Error Message
    console.log("Please retry, and make certain you only enter numbers!") ;
}

// Assign
var  animalSign = ["the Rat", "the Ox", "the Tiger", "the Rabbit", "the Dragon", "the Snake", "the Horse", "the Ram", "the Monkey", "the Rooster", "the Dog", "the Boar"] ;
    // birthYear as Int
birthYear = parseInt(birthYear);
    // Assign years for
if (birthYear === 1912 || birthYear === 1924 ||birthYear === 1936 || birthYear === 1948 || birthYear === 1960  || birthYear === 1972 ||birthYear === 1984 || birthYear === 1996 || birthYear === 2008 )  {
    // Rat
    var eastSign = animalSign[0];
    // Assign years for
} else if (birthYear === 1913 || birthYear === 1925 ||birthYear === 1937 || birthYear === 1949 || birthYear === 1961  || birthYear === 1973 ||birthYear === 1985 || birthYear === 1997 || birthYear === 2009 )  {
    // Ox
    var eastSign = animalSign[1];
    // Assign years  for
} else if (birthYear === 1914 || birthYear === 1926 ||birthYear === 1938 || birthYear === 1950 || birthYear === 1962  || birthYear === 1974 ||birthYear === 1986 || birthYear === 1998 || birthYear === 2010 )  {
   // Tiger
    var eastSign = animalSign[2];
    // Assign years for
} else if (birthYear === 1915 || birthYear === 1927 ||birthYear === 1939 || birthYear === 1951 || birthYear === 1963  || birthYear === 1975 ||birthYear === 1987 || birthYear === 1999 || birthYear === 2011 )  {
    // Rabbit
    var eastSign = animalSign[3];
    // Assign years for
} else if (birthYear === 1916 || birthYear === 1928 ||birthYear === 1940 || birthYear === 1952 || birthYear === 1964  || birthYear === 1976 ||birthYear === 1988 || birthYear === 2000 || birthYear === 2012 )  {
    // Dragon
    var eastSign = animalSign[4];
    // Assign years for
} else if (birthYear === 1917 || birthYear === 1929 ||birthYear === 1941 || birthYear === 1953 || birthYear === 1965  || birthYear === 1977 ||birthYear === 1989 || birthYear === 2001 || birthYear === 2013 )  {
    // Snake
    var eastSign = animalSign[5];
    // Assign years for
} else if (birthYear === 1918 || birthYear === 1930 ||birthYear === 1942 || birthYear === 1954 || birthYear === 1966  || birthYear === 1978 ||birthYear === 1990 || birthYear === 2002 || birthYear === 2014 )  {
    // Horse
    var eastSign = animalSign[6];
    // Assign years for
} else if (birthYear === 1919 || birthYear === 1931 ||birthYear === 1943 || birthYear === 1955 || birthYear === 1967  || birthYear === 1979 ||birthYear === 1991 || birthYear === 2003 || birthYear === 2015 )  {
    // Ram
    var eastSign = animalSign[7];
    // Assign years for
} else if (birthYear === 1920 || birthYear === 1932 ||birthYear === 1944 || birthYear === 1956 || birthYear === 1968  || birthYear === 1980 ||birthYear === 1992 || birthYear === 2004 || birthYear === 2016 )  {
    // Monkey
    var eastSign = animalSign[8];
    // Assign years for
} else if (birthYear === 1921 || birthYear === 1933 ||birthYear === 1945 || birthYear === 1957 || birthYear === 1969  || birthYear === 1981 ||birthYear === 1993 || birthYear === 2005 || birthYear === 2017 )  {
    // Rooster
    var eastSign = animalSign[9];
    // Assign years for
} else if (birthYear === 1922 || birthYear === 1934 ||birthYear === 1946 || birthYear === 1958 || birthYear === 1970  || birthYear === 1982 ||birthYear === 1994 || birthYear === 2006 || birthYear === 2018 )  {
    // Dog
    var eastSign = animalSign[10];
    // Assign years for
} else if (birthYear === 1923 || birthYear === 1935 ||birthYear === 1947 || birthYear === 1959 || birthYear === 1971  || birthYear === 1983 ||birthYear === 1995 || birthYear === 2007 || birthYear === 2019 )  {
    // Boar
    var eastSign = animalSign[11];
    // Assign error
} else {
    // for incalculable birthYear
    var eastSign = "year unable to be calculated"
}
    // Create switch
switch (westSign) {
    // case for Aquarius
    case "Aquarius":
        // horoscope message
        var westHoroscope = "friendly and humanitarian\nhonest and loyal\noriginal and inventive\nindependent and intellectual";
        // end case
        break;
    // case for Pisces
    case "Pisces":
        // horoscope message
        var westHoroscope = "imaginative and sensitive\ncompassionate and kind\nselfless and unworldly\nintuitive and sympathetic";
        // end case
        break;
    // case for Aries
    case "Aries":
        // horoscope message
        var westHoroscope = "adventurous and energetic\npioneering and courageous\nenthusiastic and confident\ndynamic and quick-witted";
        // end case
        break;
    // case for Taurus
    case "Taurus":
        // horoscope message
        var westHoroscope = "patient and reliable\nwarmhearted and loving\npersistent and determined\nplacid and security loving";
        // end case
        break;
    // case for Gemini
    case "Gemini":
        // horoscope message
        var westHoroscope = "adaptable and versatile\ncommunicative and witty\nintellectual and eloquent\nyouthful and lively";
        // end case
        break;
    // case for Cancer
    case "Cancer":
        // horoscope message
        var westHoroscope = "emotional and loving\nintuitive and imaginative\nshrewd and cautious\nprotective and sympathetic";
        // end case
        break;
    // case for Leo
    case "Leo":
        // horoscope message
        var westHoroscope = "generous and warmhearted\ncreative and enthusiastic\nbroad-minded and expansive\nfaithful and loving";
        // end case
        break;
    // case for Virgo
    case "Virgo":
        // horoscope message
        var westHoroscope = "modest and shy\nmeticulous and reliable\npractical and diligent\nintelligent and analytical";
        // end case
        break;
    // case for Libra
    case "Libra":
        // horoscope message
        var westHoroscope = "diplomaitic and urbane\nromantic and charming\neasygoing and sociable\nidealistic and peaceable";
        // end case
        break;
    // case for Scorpio
    case "Scorpio":
        // horoscope message
        var westHoroscope = "determined and forceful\nemotional and intuitive\npowerful and passionate\nexciting and magnetic";
        // end case
        break;
    // case for Sagittarius
    case "Sagittarius":
        // horoscope message
        var westHoroscope = "optimistic and freedom-loving\njovial and good-humored\nhonest and straightforward\nintellectual and philosophical";
        // end case
        break;
    // error as default
    default:
        // error message
        var westHoroscope = "Sorry, couldn't find your birth date to calculate, you mysterious stranger, you!";
        // end case
        break;
}
    // Create Switch
switch (eastSign) {
    // If Rat
    case "the Rat":
        // message
        var eastHoroscope = "wit, imagination, curiosity\nfull of energy, talkative and charming\ncapable of surviving any situation";
        // end case
        break;
    // If Ox
    case "the Ox":
        // message
        var eastHoroscope = "dependability, strength, determination\n icapable of trusting others, willing to listen to opinions with an open mind\nprefer the rural outdoors";
        // end case
        break;
    // If Tiger
    case "the Tiger":
        // message
        var eastHoroscope = "bravery, competitiveness and unpredictability\nstubborn, extremely generous,always on alert\nvery intelligent, charming, are well-liked by others";
        // end case
        break;
    // If Rabbit
    case "the Rabbit":
        // message
        var eastHoroscope = "creativity, compassion, sensitivity\nclassy, sophisticated, expressive\nwell-mannered, stylish, neat and organized";
        // end case
        break;
    // If Dragon
    case "the Dragon":
        // message
        var eastHoroscope = "dominance, ambition, prefer to be alone\ndriven, unafraid of challenges, willing to take risks\npassionate in all they do";
        // end case
        break;
    // If Snake
    case "the Snake":
        // message
        var eastHoroscope = "intelligence, gracefulness\nextremely analytical, materialistic\nseek peace,don’t jump into situations";
        // end case
        break;
    // If Horse
    case "the Horse":
        // message
        var eastHoroscope = "strength, energy, outgoing nature\nalways in search of a good time, extremely intelligent, capable of multi-tasking\nhonest, friendly and open-minded";
        // end case
        break;
    // If Goat
    case "the Goat":
        // message
        var eastHoroscope = "creativity, intelligence, dependability, calmness\nquiet, reserved  \nartistic expression, nurturing";
        // end case
        break;
    // If Monkey
    case "the Monkey":
        // message
        var eastHoroscope = "curiosity, mischievousness, cleverness\nforever playful, masters of practical jokes\ninherently intellectual, creative, thrive on being challenged";
        // end case
        break;
    // If Rooster
    case "the Rooster":
        // message
        var eastHoroscope = "confidence, pompousness, motivation\nloyal, trustworthy individuals, blunt\nextremely sociable, extremely organized";
        // end case
        break;
    case "the Dog":
        // message
        var eastHoroscope = "loyalty, compatibility, kindness\ndetermined individuals, value friendships, reliable\nwell-kept, organized, spend money wisely";
        // end case
        break;
    // If Boar
    case "the Boar":
        // message
        var eastHoroscope = "diligence, compassion, generosity\nenjoy life, seek peace, giving\nenjoy spending, find great deals";
        // end case
        break;
    // If none of the others default to
    default:
        // error message
        var eastHoroscope = "Sorry, without knowing your sign, you're an Enigma!";
        // end case
        break;
}
// Print to Console
console.log("Your birthday is " + birthYear + "/" + birthMonth + "/" + birthDate + ".\nYour Western Astrology Sign is " + westSign + ". Your Chinese Astrology Animal Sign is " + eastSign + ".\n  As a " + westSign + ", you have the following traits:\n" + westHoroscope + "\n  As a " + eastSign + ", you have the following traits:\n" + eastHoroscope + ".\n\n\nWestern astrology information found at astrology-online.com.\nChinese astrology information found at chinesezodiac.com ");
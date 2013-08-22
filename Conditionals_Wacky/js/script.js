// Title: Astrology  Author: Harmony Betancourt  Date: 8/21/13
// Purpose: User inputs birth date, and receives Western and Eastern Astrology reading

//User givens via prompts
var birthMonth = prompt("What month were you born?\nPlease give month number.")  ;
var birthDate = prompt("What is day were you born?\nNumbers only, please.") ;
var birthYear = prompt("What year were you born?");

//Variable Processing
var sunSign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

birthMonth = parseInt(birthMonth);
birthDate = parseInt(birthDate);

// Assign sunSign to westSign
if ( (birthMonth === 1  && birthDate > 21) || (birthMonth === 2 && birthDate < 20)){
    var westSign = sunSign[0] ;
} else if ( (birthMonth === 2  && birthDate > 19) || (birthMonth === 3 && birthDate < 21)){
    var westSign = sunSign[1] ;
} else if ( (birthMonth === 3  && birthDate > 20) || (birthMonth === 4 && birthDate < 21)){
    var westSign = sunSign[2] ;
} else if ( (birthMonth === 4  && birthDate > 20) || (birthMonth === 5 && birthDate < 22)){
    var westSign = sunSign[3] ;
} else if ( (birthMonth === 5  && birthDate > 21) || (birthMonth === 6 && birthDate < 22)){
    var westSign = sunSign[4] ;
} else if ( (birthMonth === 6  && birthDate > 21) || (birthMonth === 7 && birthDate < 23)){
    var westSign = sunSign[5] ;
} else if ( (birthMonth === 7  && birthDate > 22) || (birthMonth === 8 && birthDate < 23)){
    var westSign = sunSign[6] ;
} else if ( (birthMonth === 8  && birthDate > 22) || (birthMonth === 9 && birthDate < 23)){
    var westSign = sunSign[7] ;
} else if ( (birthMonth === 9  && birthDate > 22) || (birthMonth === 10 && birthDate < 23)){
    var westSign = sunSign[8] ;
} else if ( (birthMonth === 10  && birthDate > 22) || (birthMonth === 11 && birthDate < 23)){
    var westSign = sunSign[9] ;
} else if ( (birthMonth === 11  && birthDate > 22) || (birthMonth === 12 && birthDate < 22)){
    var westSign = sunSign[10] ;
} else if ( (birthMonth === 12  && birthDate > 21) || (birthMonth === 1 && birthDate < 21)){
    var westSign = sunSign[11] ;
} else {
    console.log("Please retry, and make certain you only enter numbers!") ;
}

// Assign
var  animalSign = ["the Rat", "the Ox", "the Tiger", "the Rabbit", "the Dragon", "the Snake", "the Horse", "the Ram", "the Monkey", "the Rooster", "the Dog", "the Boar"] ;

birthYear = parseInt(birthYear);

if (birthYear === 1912 || birthYear === 1924 ||birthYear === 1936 || birthYear === 1948 || birthYear === 1960  || birthYear === 1972 ||birthYear === 1984 || birthYear === 1996 || birthYear === 2008 )  {
    var eastSign = animalSign[0];
} else if (birthYear === 1913 || birthYear === 1925 ||birthYear === 1937 || birthYear === 1949 || birthYear === 1961  || birthYear === 1973 ||birthYear === 1985 || birthYear === 1997 || birthYear === 2009 )  {
    var eastSign = animalSign[1];
} else if (birthYear === 1914 || birthYear === 1926 ||birthYear === 1938 || birthYear === 1950 || birthYear === 1962  || birthYear === 1974 ||birthYear === 1986 || birthYear === 1998 || birthYear === 2010 )  {
    var eastSign = animalSign[2];
} else if (birthYear === 1915 || birthYear === 1927 ||birthYear === 1939 || birthYear === 1951 || birthYear === 1963  || birthYear === 1975 ||birthYear === 1987 || birthYear === 1999 || birthYear === 2011 )  {
    var eastSign = animalSign[3];
} else if (birthYear === 1916 || birthYear === 1928 ||birthYear === 1940 || birthYear === 1952 || birthYear === 1964  || birthYear === 1976 ||birthYear === 1988 || birthYear === 2000 || birthYear === 2012 )  {
    var eastSign = animalSign[4];
} else if (birthYear === 1917 || birthYear === 1929 ||birthYear === 1941 || birthYear === 1953 || birthYear === 1965  || birthYear === 1977 ||birthYear === 1989 || birthYear === 2001 || birthYear === 2013 )  {
    var eastSign = animalSign[5];
} else if (birthYear === 1918 || birthYear === 1930 ||birthYear === 1942 || birthYear === 1954 || birthYear === 1966  || birthYear === 1978 ||birthYear === 1990 || birthYear === 2002 || birthYear === 2014 )  {
    var eastSign = animalSign[6];
} else if (birthYear === 1919 || birthYear === 1931 ||birthYear === 1943 || birthYear === 1955 || birthYear === 1967  || birthYear === 1979 ||birthYear === 1991 || birthYear === 2003 || birthYear === 2015 )  {
    var eastSign = animalSign[7];
} else if (birthYear === 1920 || birthYear === 1932 ||birthYear === 1944 || birthYear === 1956 || birthYear === 1968  || birthYear === 1980 ||birthYear === 1992 || birthYear === 2004 || birthYear === 2016 )  {
    var eastSign = animalSign[8];
} else if (birthYear === 1921 || birthYear === 1933 ||birthYear === 1945 || birthYear === 1957 || birthYear === 1969  || birthYear === 1981 ||birthYear === 1993 || birthYear === 2005 || birthYear === 2017 )  {
    var eastSign = animalSign[9];
} else if (birthYear === 1922 || birthYear === 1934 ||birthYear === 1946 || birthYear === 1958 || birthYear === 1970  || birthYear === 1982 ||birthYear === 1994 || birthYear === 2006 || birthYear === 2018 )  {
    var eastSign = animalSign[10];
} else if (birthYear === 1923 || birthYear === 1935 ||birthYear === 1947 || birthYear === 1959 || birthYear === 1971  || birthYear === 1983 ||birthYear === 1995 || birthYear === 2007 || birthYear === 2019 )  {
    var eastSign = animalSign[11];
} else {
    var eastSign = "unable to be calculated"
}

switch (westSign) {
    case "Aquarius":
        var westHoroscope = "friendly and humanitarian\nhonest and loyal\noriginal and inventive\nindependent and intellectual";
        break;
    case "Pisces":
        var westHoroscope = "imaginative and sensitive\ncompassionate and kind\nselfless and unworldly\nintuitive and sympathetic";
        break;
    case "Aries":
        var westHoroscope = "adventurous and energetic\npioneering and courageous\nenthusiastic and confident\ndynamic and quick-witted";
        break;
    case "Taurus":
        var westHoroscope = "patient and reliable\nwarmhearted and loving\npersistent and determined\nplacid and security loving";
        break;
    case "Gemini":
        var westHoroscope = "adaptable and versatile\ncommunicative and witty\nintellectual and eloquent\nyouthful and lively";
        break;
    case "Cancer":
        var westHoroscope = "emotional and loving\nintuitive and imaginative\nshrewd and cautious\nprotective and sympathetic";
        break;
    case "Leo":
        var westHoroscope = "generous and warmhearted\ncreative and enthusiastic\nbroad-minded and expansive\nfaithful and loving";
        break;
    case "Virgo":
        var westHoroscope = "modest and shy\nmeticulous and reliable\npractical and diligent\nintelligent and analytical";
        break;
    case "Libra":
        var westHoroscope = "diplomaitic and urbane\nromantic and charming\neasygoing and sociable\nidealistic and peaceable";
        break;
    case "Scorpio":
        var westHoroscope = "determined and forceful\nemotional and intuitive\npowerful and passionate\nexciting and magnetic";
        break;
    case "Sagittarius":
        var westHoroscope = "optimistic and freedom-loving\njovial and good-humored\nhonest and straightforward\nintellectual and philosophical";
        break;
}

switch (eastSign) {
    case "the Rat":
        var eastHoroscope = "wit, imagination and curiosity\nfull of energy, talkative and charming\ncapable of surviving any situation";
        break;
}

console.log("Your birthday is " + birthYear + "/" + birthMonth + "/" + birthDate + ".\nYour Western Astrology Sign is " + westSign + ". Your Chinese Astrology Animal Sign is " + eastSign + ".\n  As a " + westSign + ", you have the following traits:\n" + westHoroscope + "\n  As a " + eastSign + ", you have the following traits:\n" + eastHoroscope + ".\n\n\nWestern astrology information found at astrology-online.com.\nChinese astrology information found at chinesezodiac.com ");
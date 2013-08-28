// Title: Cigarette Savings      Author: Harmony Betancourt  Date: 8/28/13
// Purpose: Calculate how much you have saved since quitting smoking

// User prompts
var daysQuit = prompt("How many days has it been since your last cigarette?");
    //convert to integer
    daysQuit = parseInt(daysQuit);
var packCost = prompt("How much did a pack of your preferred brand of cigarettes cost?");
var dayCost = prompt("How many packs a day were you smoking?");
var readOut = "";

// Functions
var moneySaved = function calcMoney(daysQuit, packCost, dayCost) {
    var saved = daysQuit * packCost * dayCost;
    return saved;
}

// Readout on Effects
if (daysQuit === 1) {
    readOut = "Nicotine levels have dropped by 93.75%. Your blood pressure, pulse, and blood oxygen levels are normal. Anxieties are at their peak, but you are doing great!";
} else if (daysQuit === 2) {
    readOut = "Your damaged nerve endings are regrowing, and your sense of smell and taste are returning to normal. It's normal to be angry and irritable right now, but keep going, the hardest part is almost over!" ;
} else if (daysQuit === 3) {
    readOut = "Your body will test as completely nicotine-free. Withdrawls are at their worst, and you may feel restless. Your lungs are thanking you by working more efficiently, and your breathing should be easier. This is going to be one of your toughest days, but hang in there, you can do it!";
} else if (daysQuit > 4 && daysQuit < 9) {
    readOut = "You'll have around 3 cravings a day, but even if they seem to last forever, the cravings almost always last, at most, 3 minutes. Try to keep an eye on the time if you get a craving. If you can last five minutes, you can make this a permanent change!";
} else if (daysQuit === 10) {
    readOut = "You should have less than two cravings a day, and they should be under three minutes. You're well past the hardest part, congratulations and keep going!";
} else if (daysQuit > 10 && daysQuit < 15) {
    readOut = "Your cravings should be nearly gone. The blood circulation in your mouth is like that of someone who never smoked.";
} else if (daysQuit > 14 && daysQuit < 31) {
    readOut = "Anger, anxiety, difficulty concentrating, impatience, insomnia, restlessness, and depression related to not smoking should be gone. If you still have those symptoms, it may be time to call a doctor. Either way, great job!" ;
} else if (daysQuit > 30 && daysQuit < 91) {
    readOut = "Your heart attack risk has dropped, your lungs are working better, circulation has improved, walking is easier, insulin resistance is normal, and if you had a cough, it should be long gone.";
} else if (daysQuit > 90 && daysQuit < 271) {
    readOut = "Smoking related sinus congestion, fatigue and shortness of breath have decreased. Your lungs are vastly improved in ability to stay clean and reduce infections. You should have higher energy levels, now.";
} else if (daysQuit > 270 && daysQuit < 1825) {
    readOut = "Your risk of coronary heart disease, heart attack, and stroke are less than half that of a smoker!";
} else if (daysQuit > 1824 && daysQuit < 2189) {
    readOut = "Your risk of a subarachnoid haemorrhage is 59% less than your risk while smoking. For all you ladies, the risk of diabetes developing is that of a non-smoker." ;
} else if (daysQuit > 2188 && daysQuit < 7300) {
    readOut = "Your risk of lung cancer is between 30% and 50% of that of a smoker. Your risk of death from lung cancer is almost half of what it was before. Cancer of the mouth, throat, and pancreas have declined. Risk of diabetes and coronary heart disease is almost that of someone who never lit up. Your risk of stroke is that of a non smoker, and your smoking induced tooth loss has declined to someone who never has smoked!" ;
} else {
    readOut = "Female risk of death from smoking related causes is that of someone who has never smoked. Risk of pancreatic cancer is the same. Great job going for the long haul, your body thanks you."
}

// Processing info
console.log("Since you quit smoking, " + daysQuit + " days ago, you have saved $" + moneySaved(daysQuit, packCost, dayCost) + ". " + readOut);

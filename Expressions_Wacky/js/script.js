// Title: Mutants and Masterminds 2nd Ed Standard Power Calculator   Author: Harmony Betancourt  Date: 8/13/13
// Purpose: To allow the user to input the power, cost per rank, rank, and number of flaws, extras, and power feats, to calculate the total cost of the power. 

//Prompt givens
  //Name of power
var powerName = prompt("What is the power called?");
  //Power cost per rank
var powerCost = prompt("How many points per rank does " + powerName + " cost?");
  //Ranks desired
var powerRank = prompt("How many ranks will your character have in " + powerName + "?");
  //Number of Flaws
var powerFlaws = prompt("How many flaws will your character have in " + powerName + "?");
  //Number of Extras
var powerExtras = prompt("How many extras will your character have in " + powerName + "?");
  //Number of Power Feats
var powerFeats = prompt("How many power feats will your character have in " + powerName + "?");

//Known Givens
  //Modifiers arranged Flaws, Extras, Power Feats
var powerMods = [-1, 1, 1]  

//Unseen Calculations
  //How many points for the power before modifiers
var plainCost = powerCost * powerRank;
  //Cost of Flaws
var flawCost = powerRank * powerMods[0] * powerFlaws;
  //Cost of Extras
var extrasCost = powerRank * powerMods[1] * powerExtras; 
  //Cost of Power Feats
var featCost = powerMods[2] * powerFeats;

//Total Cost
var totalCost = plainCost + flawCost + extrasCost + featCost;


//Print to console with warning about min/maxing
console.log("The power point cost is " + totalCost + " power points in " + powerName + ". The break down of modifiers is: \n" + plainCost + " for " + powerRank + " ranks before modifiers\n"  + flawCost + " in flaws\n+" + extrasCost + " in extras\n+" + powerFeats + " in power feats.\nNote: If your flaws outnumber your ranks, please contact your GM for House Rules on min/maxing, as the sourcebook does not allow for such.");
  
  

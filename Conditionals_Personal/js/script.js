// Title: Mutants and Masterminds 2nd Ed. Character Calculator  Author: Harmony Betancourt  Date: 8/22/13
// Purpose: Calculates point total for entire character and compares PP level
// Note: If this works, use for Claremont
// Note 2: Try to notate as you go this time, silly!

// User givens via prompt
    // As for user's level goal
var goalLevel = prompt("What power level of character are you trying to create?") ;
        // Change to integer
    goalLevel = parseInt(goalLevel);

    // Calculate power point cost for level
    var levelCost = 15 ;
    levelCost *= goalLevel ;

    // Attributes
        //Ask for total, if no total have ? to start If
var attributes = prompt("How many power points have you spent in attributes?\nIf you have not calculated, enter ? to enter each score and calculate.");
        //If to get total
    if (attributes === "?") {
            // get strength score
        var strength = prompt("What is your strength score?") ;
            // get charisma score
        var charisma = prompt("What is your charisma score?") ;
            // get constitution score
        var constitution  = prompt("What is your constitution score?") ;
            // get intelligence score
        var intelligence = prompt("What is your intelligence score?") ;
            // get wisdom score
        var wisdom = prompt("What is your wisdom score?") ;
            // get dexterity score
        var dexterity = prompt("What is your dexterity score?") ;
            // assign attribute cost 1 for above normal -1 for below
        var attributeCost = 1 ;
            // set normal to 10 (no cost)
        var attributeBase = 10 ;

        // calculate base: attribute - attribute base
            //strength
        strength -= attributeBase;
            //charisma
        charisma -= attributeBase;
            //constitution
        constitution -= attributeBase;
            //intelligence
        intelligence -= attributeBase;
            //wisdom
        wisdom -= attributeBase;
            //dexterity
        dexterity -= attributeBase;

        // calculate total: add attributes together, multiply by cost
         attributeCost *= (strength + charisma + constitution + intelligence + wisdom + dexterity) ;
        // if they have total
    }  else {
        // set cost to total
         var attributeCost = parseInt(attributes);
    }

    // Saves
        //Ask for total, if no total have ? to start If
var saves = prompt("How many power points have you spent in saves?\nIf you have not calculated, enter ? to enter each score and calculate.");
        // If not calculated as shown by ?, begin prompts
    if (saves === "?") {
            // points spent in fortitude
        var fortitude  = prompt("How many points are you spending in fortitude?") ;
                // change to int
            fortitude = parseInt(fortitude) ;
            // points spent in will
        var will  = prompt("How many points are you spending in will?") ;
                // change to int
            will = parseInt(will)  ;
            // points spent in reflex
        var reflex  = prompt("How many points are you spending in reflex?") ;
                // change to int
            reflex = parseInt(reflex) ;
            // set base cost for saves
        var saveCost = 1;
            // calculate saves
        saveCost *= (fortitude + will + reflex) ;
       // if they have total
    }   else {
       //set cost to total
        var saveCost = parseInt(saves);
    }

    // Skills
        //Ask for total, if no total have ? to start If
var skills = prompt("How many power points have you spent in skills?\nIf you have not calculated, enter ? to enter each score and calculate.");
        // If not calculated as shown by ?, begin prompts
    if (skills === "?") {
            // How many ranks purchased for entire skill set?
        var skillRanks = prompt("How many ranks in total have you bought in various skills?");
            // set skill cost
        var skillBase = .25;
            // calculate cost
        var skillCost = skillBase * skillRanks ;
        // if they have total
    }   else {
        //set cost to total
        var skillCost = parseInt(skills);
    }

    // Feats
        //Ask for total, if no total have ? to start If
var feats = prompt("How many power points have you spent in feats?\nIf you have not calculated, enter ? to enter each score and calculate.");
        // If not calculated as shown by ?, begin prompts
    if (feats === "?") {
    // How many feats purchased
    var featsBuy = prompt("How many feats have you put points in?");
        //set as int
        featsBuy = parseInt(featsBuy) ;
    // set skill cost
    var featsCost = 1;
    // calculate cost
    featsCost *= featsBuy;
    // if they have total
}   else {
    //set cost to total
    var featsCost = parseInt(feats);
}

    // Powers
        // Ask for total - they must know total at this point, add more when you learn to do loops and functions
var powers = prompt("How many power points have you spent in Powers?") ;
        // set as int
    powerCost = parseInt(powers) ;

    // Drawbacks
        // Ask for total - they must know total at this point, add more when you learn to do loops and functions
var drawbacks = prompt("How many power points have you gained in Drawbacks?") ;
        // set as int
    drawbackCost = parseInt(drawbacks) ;

// Test
console.log(levelCost + " " + attributeCost + " " + saveCost + " " + skillCost + " " + featsCost + " " + powerCost + " " +  drawbackCost);



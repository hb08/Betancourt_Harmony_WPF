// Title: Heroclix Team Calculator  Author: Harmony Betancourt  Date: 8/28/13
// Purpose: Calculates point total of a Heroclix team for tournament play





// Beginning Prompts
var pointTotalGame = prompt("What is the point total of the game?");
var pieceNumber = prompt("How many pieces are you playing?");
var relicResources = prompt("Are you playing any relics or resources?");
        // Ask for cost of relic if yes, assign 0 if no
var rrTotal = (relicResources === "Yes" || relicResources === "yes" || relicResources === "Y" || relicResources === "y") ? prompt("What is the cost of the relic or resource?") : 0;
var themeStatus = prompt("Is it a bold keyword theme team?");
        // Assign themePieces only to teams with bold keyword
var themePieces = (themeStatus === "Yes" || themeStatus === "yes" || themeStatus === "Y" || themeStatus === "y")  ?   pieceNumber :  themePieces = 0;
var ataStatus = prompt("Are you playing an Alternate Team Ability?");
        //If so, run function, if not, move on
var ataTotal = (ataStatus === "Yes" || ataStatus === "yes" || ataStatus === "Y" || ataStatus === "y")  ? ataAssign(themePieces) : 0;

// Let's make integers
pointTotalGame = parseInt(pointTotalGame);
pieceNumber = parseInt(pieceNumber);
rrTotal = parseInt(rrTotal);

// Now for some math and logic
var loopCounter;




// Functions

    //Assign cost to ATA
function ataAssign (themePieces) {
        // Ask for cost per piece
    var ataCost = prompt("How much does the ATA cost?");
        //make an integer
        ataCost = parseInt(ataCost);
        //set ataThemed to no if it is not a bold keyword.
    var ataThemed = (themePieces > 0) ? prompt("Is the ATA for your theme?") : "N" ;
            //If Not for the theme
        if (ataThemed === "no" || ataThemed === "No" || ataThemed === "N" || ataThemed === "n") {
                    //number of pieces using it
                var ataNumber = prompt("How many pieces will use the ATA?");
                    //Make an integer
                ataNumber = parseInt(ataNumber);
                    //multiply cost and number of pieces for total
                ataCost *= ataNumber;
            //If bold theme ATA
        } else if (ataThemed === "Yes" || ataThemed === "yes" || ataThemed === "Y" || ataThemed === "y") {
                    //multiply cost by entire themed team
                ataCost *= themePieces;
        }
    return ataCost;
}

    // Create clix list
function createClixList (pieceNumber) {
        var pieceName;
        var piecePrice;
        var clixTotal = 0;
        var clixList = "";

        // For as many pieces as they have
    for (loopCounter = 1; loopCounter <= pieceNumber; loopCounter ++) {
            //get piece name
        pieceName = prompt("Piece " + loopCounter + ":\nWhat is the name of your piece?");
            //get cost
        piecePrice = prompt("How many points does " + pieceName + " cost?");
            //integer cost
        piecePrice = parseInt(piecePrice);
        clixTotal += piecePrice;
        clixList += pieceName + " " + piecePrice + "\n" ;
            if (pieceNumber === loopCounter) {
                clixList = clixTotal + " points total.\n" + clixList;
            }
    }
    return clixList;
}

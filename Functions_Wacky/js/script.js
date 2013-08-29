// Title: Heroclix Team Calculator  Author: Harmony Betancourt  Date: 8/28/13
// Purpose: Calculates point total of a Heroclix team for tournament play





// Beginning Prompts
var pointTotalGame = prompt("What is the point total of the game?");
var pieceNumber = prompt("How many pieces are you playing?");
var themeStatus = prompt("Is it a bold keyword theme team?");
var ataStatus = prompt("Are you playing an Alternate Team Ability?");
var relicResources = prompt("Are you playing any relics or resources?");
var clixList = prompt("What is your first piece?");

// Let's make integers
pointTotalGame = parseInt(pointTotalGame);
pieceNumber = parseInt(pieceNumber);

// Now for some math and logic
    // Assign themePieces only to teams with bold keyword
var themePieces = (themeStatus === "Yes" || themeStatus === "yes" || themeStatus === "Y" || themeStatus === "y")  ?   pieceNumber :  themePieces = 0;
    // Calculate ATA cost using ataAssign Function
var ataTotal = ataAssign(themePieces);


// Functions
function ataAssign (themePieces) {
    var ataCost = prompt("How much does the ATA cost?");
        //make an integer
        ataCost = parseInt(ataCost);
    var ataThemed = prompt("Is the ATA for your theme?");
            //If Not for the theme
        if (ataThemed === "no" || ataThemed === "No" || ataThemed === "N" || ataThemed === "n") {
                    //number of pieces using it
                var ataNumber = prompt("How many pieces will use the ATA?");
                    //Make an integer
                ataNumber = parseInt(ataNumber);
                    //multiply cost and number of pieces for total
                ataCost *= ataNumber;
        } else if (ataThemed === "Yes" || ataThemed === "yes" || ataThemed === "Y" || ataThemed === "y") {
                ataCost *= themePieces;
        } else {
            ataCost = 0;
        }
    return ataCost;
}

// Title: Web Site Estimator  Name: Harmony Betancourt  Date: 8/21/13
// Purpose: To create an estimated website price based on what the user desires

//Notes: Will siteGraphics and siteNew Graphics if be better as a ternary?

// User Inputs via Prompts
    //Pages to Create
var sitePages = prompt("How many pages will your site be?");
    //Style of Pages
var siteStyle = prompt("What style would you like the site to be?\nPlease type one of the following:\n Simple, Professional, Fun" );
    //Will the site sell items
var siteSell = prompt("Will you be selling items via the website?\nYes or No?");
    //If it does, find more info
if (siteSell === "Yes") {
        //How many items will be sold?
    var siteItems = prompt("How many items will you be selling?\nWhole numbers only, please!");
        //Will a shopping cart be needed?
    var siteShopping = prompt("Will you need a shopping cart?\nYes or No?");
        //If yes, set cart to value of 1
        if (siteShopping === "Yes")  {
            var siteCart = 1
        }
    // If no items sold
} else {
        // set siteItems to 0
    var siteItems = 0;
        //set siteCart to 0
    var siteCart = "0";
}
    //Is a blog needed?
var siteBlog = prompt("Will your site have a blog?\nYes or No?");
    //Is a forum needed?
var siteForum = prompt("Will your site have a forum?\nYes or No?");
    //Is a CMS needed?
var siteCms = prompt("Would you like a Content Management System (CMS)?\nYes or No?");
    //Does the customer have graphics?
var siteGraphics = prompt("Do you have graphics you would like on the site?\nYes or No?");
    //If yes
if (siteGraphics === "Yes"){
        //How many do they have?
    siteUserGraphics = prompt("How many graphics do you have to upload?\nWhole numbers only, please.");
        //If no, set siteUserGraphics to 0
} else {
        //If no, set SiteUserGraphics to 0
    siteUserGraphics = 0;
}
    //Does the customer need graphics?
var siteNewGraphics = prompt("Do you have graphics you would like us to provide?\nYes or No?")
    //If yes
if (siteNewGraphics === "Yes"){
        //Prompt for how many
    siteFindGraphics = prompt("How many graphics would you like us to provide?\nWhole numbers only, please.");
    //If no
} else {
        //set to 0
    siteFindGraphics = 0;
}

var siteMobile = prompt("Do you want a mobile accessible site?\nYes or No?");










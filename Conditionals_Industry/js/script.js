// Title: Web Site Estimator  Name: Harmony Betancourt  Date: 8/21/13
// Purpose: To create an estimated website price based on what the user desires

// User Inputs via Prompts
var sitePages = prompt("How many pages will your site be?");
var siteStyle = prompt("What style would you like the site to be?\nPlease type one of the following:\n Simple, Professional, Fun" );
var siteSell = prompt("Will you be selling items via the website?\nYes or No?");

if (siteSell === "Yes") {
    var siteItems = prompt("How many items will you be selling?\nWhole numbers only, please!");
    var siteShopping = prompt("Will you need a shopping cart?\nYes or No?");
} else {
    var siteItems = 0;
    var siteShopping = "No";
}

var siteBlog = prompt("Will your site have a blog?\nYes or No?");
var siteForum = prompt("Will your site have a forum?\nYes or No?");
var siteCms = propmt("Would you like a Content Management System (CMS)");
var siteGraphics = prompt("Do you have graphics you would like on the site?\nYes or No?");

if (siteGraphics === "Yes"){
    siteUserGraphics = prompt("How many graphics do you have to upload?\nWhole numbers only, please.");
} else {
    siteUserGraphics = 0;
}

var siteNewGraphics = prompt("Do you have graphics you would like us to provide?\nYes or No?")

if (siteNewGraphics === "Yes"){
    siteFindGraphics = prompt("How many graphics would you like us to provide?\nWhole numbers only, please.");
} else {
    siteFindGraphics = 0;
}





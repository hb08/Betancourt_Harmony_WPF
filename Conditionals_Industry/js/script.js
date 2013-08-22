// Title: Web Site Estimator  Name: Harmony Betancourt  Date: 8/21/13
// Purpose: To create an estimated website price based on what the user desires

//Notes: Will siteGraphics and siteNew Graphics if be better as a ternary? Make graphics prompts easier

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
// Do they want a responsive design?
var siteMobile = prompt("Do you want a mobile accessible site?\nYes or No?");

//Known Variables

// Flat cost for site by page (before any fluff)
if (siteStyle === "Simple" || siteStyle === "simple") {
    var pageCost = 20;
} else if (siteStyle === "Professional" || siteStyle === "professional") {
    var pageCost = 35;
} else if (siteStyle === "Fun" || siteStyle === "fun") {
    var pageCost = 30;
} else {
    var pageCost = 25;
}

// Cost of items
//Item Scale = <100 = 10 cents, 100 - 500 = 20 cents, 500+ = 30 cents
var itemScale = [.1,.2,.3]
if (siteItems === 0) {
    var pageItemCost = siteItems
}
else if (siteItems <= 100 && siteItems >0) {
    var pageItemCost = siteItems * itemScale[0];
} else if (siteItems > 100 && siteItems <= 500) {
    var pageItemCost = siteItems *  itemScale[1];
} else {
    var pageItemCost = siteItems * itemScale[2];
}

//Shopping Cart
var pageShopping;
(siteShopping === "Yes") ?  pageShopping = 50 :  pageShopping = 0;

//Blog
var pageBlog;
(siteBlog === "Yes") ? pageBlog = 100 : pageBlog = 0;

//Forum
var pageForum;
(siteForum === "Yes") ? pageForum = 300 : pageForum = 0;

//CMS
var pageCms;
(siteCms === "Yes") ? pageCms = 500 : pageCms = 0;

//User Graphics
var pageUploadGraphicBase = .20;
var pageUploadGraphicCost = pageUploadGraphicBase * siteUserGraphics;

//New Graphics
var pageNewGraphicBase = 2 ;
var pageNewGraphicCost = pageNewGraphicBase * siteFindGraphics;

//Total Site
var totalCost = pageCost * sitePages + pageItemCost + pageShopping + pageBlog + pageForum + pageCms + pageUploadGraphicCost + pageNewGraphicCost ;

//Mobile Requested
var mobileBase = .65;
var totalMobile = mobileBase * totalCost;

// Add Mobile In
(totalMobile > 0) ? totalCost += totalMobile : totalCost = totalCost;

//Make Printout Prettier
var cartNeeded;
(pageShopping > 0) ? cartNeeded = "Shopping Cart Requested" : cartNeeded = "No Shopping Cart Requested";
var blogNeeded ;
(pageBlog > 0) ? blogNeeded = "Blog Requested" : blogNeeded = "No Blog Requested" ;
var forumNeeded;
(pageForum > 0) ? forumNeeded = "Forum Requested" : forumNeeded = "No Forum Requested";
var cmsNeeded;
(pageCms > 0) ? cmsNeeded = "CMS Requested" : cmsNeeded = "No CMS Requested" ;
var mobileNeeded;
(siteMobile === "Yes") ? mobileNeeded = "Mobile Site (Responsive Design) Requested"  : mobileNeeded = "Mobile Site (Responsive Design) Not Requested"


//Console Print
console.log("Your estimated price is $" + totalCost + ".\nRequested:\n" + sitePages  + " pages in a " + siteStyle + " style\n" + siteItems + " items to be sold\n" + cartNeeded + "\n" + blogNeeded + "\n" + forumNeeded + "\n" + cmsNeeded + "\n" + siteUserGraphics + " graphics to upload\n" + siteFindGraphics + " graphics to be designed for found by us\n" + mobileNeeded);















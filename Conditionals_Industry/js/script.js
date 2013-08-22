// Title: Web Site Estimator  Name: Harmony Betancourt  Date: 8/21/13
// Purpose: To create an estimated website price based on what the user desires

// User Inputs via Prompts
    //Pages to Create
var sitePages = prompt("How many pages will your site be?");
    //Style of Pages
var siteStyle = prompt("What style would you like the site to be?\nPlease type one of the following:\n Simple, Professional, Fun" );
    //Will the site sell items
var siteSell = prompt("Will you be selling items via the website?\nYes or No?");
    //If it does, find more info
if (siteSell === "Yes" || siteSell === "yes") {
        //How many items will be sold?
    var siteItems = prompt("How many items will you be selling?\nWhole numbers only, please!");
        //Will a shopping cart be needed?
    var siteShopping = prompt("Will you need a shopping cart?\nYes or No?");
        //If yes, set cart to value of 1
        if (siteShopping === "Yes" || siteShopping === "yes")  {
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
if (siteGraphics === "Yes" || siteGraphics === "yes"){
    //How many do they have?
    var siteUserGraphics = prompt("How many graphics do you have to upload?\nWhole numbers only, please.");
    var siteFindGraphics = prompt("How many graphics would you like us to provide?\nWhole numbers only, please.");
    //If no, set siteUserGraphics to 0
} else {
    var siteUserGraphics = 0
    var siteFindGraphics = 0
}

    // Do they want a responsive design?
var siteMobile = prompt("Do you want a mobile accessible site?\nYes or No?");

//Known Variables

    // Flat cost for site by page (before any fluff)
        //If Simple selected
if (siteStyle === "Simple" || siteStyle === "simple") {
        //Set simple cost
    var pageCost = 20;
        //If Professional selected
} else if (siteStyle === "Professional" || siteStyle === "professional") {
        //Set professional cost
    var pageCost = 35;
        //If Fun selected
} else if (siteStyle === "Fun" || siteStyle === "fun") {
        //Set fun cost
    var pageCost = 30;
        //If anything else typed
} else {
        //set price
    var pageCost = 25;
}

    // Cost of items
    //Item Scale = <100 = 10 cents, 100 - 500 = 20 cents, 500+ = 30 cents
var itemScale = [.1,.2,.3]
    //If no items to sell
if (siteItems === 0) {
    //Set price to 0
    var pageItemCost = siteItems
}   // If more than 0 less than 100
else if (siteItems <= 100 && siteItems >0) {
        //set price to first item in array times items
    var pageItemCost = siteItems * itemScale[0];
        //if more than 100 less than 500
} else if (siteItems > 100 && siteItems < 500) {
        //set price to second item in array times items
    var pageItemCost = siteItems *  itemScale[1];
        // anything else
} else {
        // set price to third item in array times items
    var pageItemCost = siteItems * itemScale[2];
}

    //Shopping Cart
var pageShopping;
    // set flat cost if shopping cart to 50
(siteShopping === "Yes" || siteShopping === "yes") ?  pageShopping = 50 :  pageShopping = 0;

    //Blog
var pageBlog;
    // set flat cost if blog to 100
(siteBlog === "Yes" || siteBlog === "yes") ? pageBlog = 100 : pageBlog = 0;

    //Forum
var pageForum;
    // set flat cost if forum to 300
(siteForum === "Yes" || siteForum === "yes") ? pageForum = 300 : pageForum = 0;

    //CMS
var pageCms;
    // set flat cost if CMS to 500
(siteCms === "Yes" || siteForum === "yes") ? pageCms = 500 : pageCms = 0;

    //User Graphics
var pageUploadGraphicBase = .20;
    // set flat cost if user graphics  to number of graphics times base price
var pageUploadGraphicCost = pageUploadGraphicBase * siteUserGraphics;

    //New Graphics
var pageNewGraphicBase = 2 ;
    // set flat cost if needed graphics  to number of graphics times base price
var pageNewGraphicCost = pageNewGraphicBase * siteFindGraphics;

    //Total Site cost
var totalCost = pageCost * sitePages + pageItemCost + pageShopping + pageBlog + pageForum + pageCms + pageUploadGraphicCost + pageNewGraphicCost ;

    //Mobile Requested
var mobileBase = .65;
    // set price to 65% of total site
var totalMobile = mobileBase * totalCost;

    // Add Mobile In to total site cost, if they choose it
(totalMobile > 0) ? totalCost += totalMobile : totalCost = totalCost;


//Make Printout Prettier
    //Shopping Cart Readout
var cartNeeded;
    //Different for if selected, if not selected
(pageShopping > 0) ? cartNeeded = "Shopping Cart Requested" : cartNeeded = "No Shopping Cart Requested";
    //Blog Readout
var blogNeeded ;
    //Different for if selected, if not selected
(pageBlog > 0) ? blogNeeded = "Blog Requested" : blogNeeded = "No Blog Requested" ;
    //Forum Readout
var forumNeeded;
    //Different for if selected, if not selected
(pageForum > 0) ? forumNeeded = "Forum Requested" : forumNeeded = "No Forum Requested";
    //CMS Readout
var cmsNeeded;
    //Different for if selected, if not selected
(pageCms > 0) ? cmsNeeded = "CMS Requested" : cmsNeeded = "No CMS Requested" ;
    //Mobile Site Readout
var mobileNeeded;
    //Different for if selected, if not selected
(siteMobile === "Yes" || siteMobile === "yes") ? mobileNeeded = "Mobile Site (Responsive Design) Requested"  : mobileNeeded = "Mobile Site (Responsive Design) Not Requested";


//Console Print
console.log("Your estimated price is $" + totalCost + ".\nRequested:\n" + sitePages  + " pages in a " + siteStyle + " style\n" + siteItems + " items to be sold\n" + cartNeeded + "\n" + blogNeeded + "\n" + forumNeeded + "\n" + cmsNeeded + "\n" + siteUserGraphics + " graphics to upload\n" + siteFindGraphics + " graphics to be designed or purchased by us\n" + mobileNeeded);















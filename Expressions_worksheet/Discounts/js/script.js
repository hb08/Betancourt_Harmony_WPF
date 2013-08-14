// Title: Discounts   Author: Harmony Betancourt  Date: 8/13/13

//Givens for item
var originalPrice = 7.95;
var discountPercent = 15;
var itemDescription = "Jerky Like Grandma's!";
var salesTax =  6;

//Discount price without tax
var discountPrice = originalPrice - originalPrice * (discountPercent / 100);


//Discount price with tax

var totalWithTax =  discountPrice + discountPrice * (salesTax/100);

//Print to console
console.log("Your " + itemDescription + " was originally " + "$" + originalPrice + ", but after a " + discountPercent + "% discount, it is now $" + discountPrice + " without tax, and $" + totalWithTax + " with tax.");

// Title: Pricing Breakdown  Author: Harmony Betancourt   Date: 8/13/13

//Allows the user to calculate the estimate vs real time on website design and development.


//User Input
var hoursEstimate = prompt("How many hours did you estimate the job would take?");
var pagesOrdered = prompt("How many pages were requested for the website?");
var hoursWorked = prompt("How many hours did you actually work?");
var agreedPricing = prompt("What was the price for the site?");

//Calculations

var extraHours = (hoursEstimate - hoursWorked) * -1;
var priceAgreedPerPage = agreedPricing / pagesOrdered;
var priceDifference = agreedPricing / hoursWorked
var pricePerHour = agreedPricing / hoursEstimate;


console.log("For the job of " + pagesOrdered + " web pages designed and developed, you charged a total of $" + agreedPricing + ", and estimated a total of " + hoursEstimate + " hrs to finish the project, which results in the price of $" + priceAgreedPerPage + " per page, and $" + pricePerHour + " per hour. You worked for " + hoursWorked + " hrs, which is " + extraHours + " hrs different than your estimate. Your actual payment per hour was $" + priceDifference + ".");



// Title: Pricing Breakdown  Author: Harmony Betancourt   Date: 8/13/13
// Purpose: Allows the user to calculate the estimate vs real time on website design and development.


//User Input
  // How many hours were calculated into the job estimate
var hoursEstimate = prompt("How many hours did you estimate the job would take?");
  // How many pages were ordered by the client
var pagesOrdered = prompt("How many pages were requested for the website?");
  // How many hours were actually worked on the job
var hoursWorked = prompt("How many hours did you actually work?");
  // What was the total price for the website
var agreedPricing = prompt("What was the price for the site?");

//Calculations
  //How many hours were worked extra multiplied by negative one to give the hours worked over the estamite as a positive number for better display in the console, as well as jobs completed early as having a negative number.
var extraHours = (hoursEstimate - hoursWorked) * -1;
  //How the money allocated breaks down per page
var priceAgreedPerPage = agreedPricing / pagesOrdered;
  //How the money breaks down into an hourly rate for what was actually done
var priceDifference = agreedPricing / hoursWorked
  //How the money breaks down into an hourly rate for what the estimated time was
var pricePerHour = agreedPricing / hoursEstimate;

//Print to Console
console.log("For the job of " + pagesOrdered + " web pages designed and developed, you charged a total of $" + agreedPricing + ", and estimated a total of " + hoursEstimate + " hrs to finish the project, which results in the price of $" + priceAgreedPerPage + " per page, and $" + pricePerHour + " per hour. You worked for " + hoursWorked + " hrs, which is " + extraHours + " hrs different than your estimate. Your actual payment per hour was $" + priceDifference + ".");



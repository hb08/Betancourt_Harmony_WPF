// Title: Productivity   Author: Harmony Betancourt  Date: 8/27/13
// Purpose: Calculate hours worked per task

// Start prompts
var workMonday = prompt("Did you work on Monday?");
var workTuesday = prompt("Did you work on Tuesday?");
var workWednesday = prompt("Did you work on Wednesday?");
var workThursday = prompt("Did you work on Thursday?");
var workFriday = prompt("Did you work on Friday?");
var workSaturday= prompt("Did you work on Saturday?");
var workSunday = prompt("Did you work on Sunday?");

//Array for weekdays
var weekDay = ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:"];

// Variable for new task hours base
var newTask = 0;

// Base Variables for Days of the Week Not Worked
var monTask = weekDay[0] + " Not worked \n";
var monHours = 0;
var tueTask = weekDay[1] + " Not worked \n";
var tueHours = 0;
var wedTask = weekDay[2] + " Not worked \n";
var wedHours = 0;
var thuTask = weekDay[3] + " Not worked \n";
var thuHours = 0;
var friTask = weekDay[4] + " Not worked \n";
var friHours = 0;
var satTask = weekDay[5] + " Not worked \n";
var satHours = 0;
var sunTask = weekDay[6] + " Not worked \n";
var sunHours = 0;

//Function for new task
function moreTaskFunction() {
    //prompt for additional tasks
    moreTask = prompt("Did you work on another task?");
}
//Function for tasks info
function taskFunction (day) {
    var taskName = prompt(day + "\nWhat task did you work on?");
    var taskHours = prompt(day + "\nHow many hours did you work on " + taskName + " today?");
    var taskComplete = prompt(day + "\nDid you complete the task?\nY/N?");
    var taskNotes = prompt(day + "\nPlease write any notes you may have.");
    var taskStatus = (taskComplete === 'Y') ? 'task completed' : 'task not complete' ;
    taskHours = parseFloat(taskHours);
    taskNotes = (taskNotes === '') ? '.' : '.\nNotes: ' + taskNotes ;
    var taskTotal = taskHours + " hours worked on " + taskName + ", " + taskStatus + taskNotes + "\n";
    return taskTotal;
}



// Logic
    //If Monday Worked    
if (workMonday === "Yes" || workMonday === "yes" || workMonday === "Y" || workMonday === "y") {
        // call function and assign to monInfo
        var monInfo = taskFunction(weekDay[0]);
        // create concoc. of day and info string
        monTask = weekDay[0] + monInfo;
        // Hours worked
        monHours = parseFloat(monInfo);
        //prompt for additional tasks
        moreTaskFunction();
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                 //start function
                newTask = taskFunction("Monday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}

//If Tuesday Worked
if (workTuesday === "Yes" || workTuesday === "yes" || workTuesday === "Y" || workTuesday === "y") {
        // call function and assign to taskInfo
        var tueInfo = taskFunction(weekDay[1]);
        // create concoc. of day and info string
        tueTask = weekDay[1] + tueInfo;
        // Hours worked
        tueHours = parseFloat(tueInfo);
        //prompt for additional tasks
        moreTaskFunction();
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Tuesday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}
//If Wednesday Worked    
if (workWednesday === "Yes" || workWednesday === "yes" || workWednesday === "Y" || workWednesday === "y") {
        // call function and assign to wedInfo
        var wedInfo = taskFunction(weekDay[2]);
        // create concoc. of day and info string
        wedTask = weekDay[2] + wedInfo;
        // Hours worked
        wedHours = parseFloat(wedInfo);
        //prompt for additional tasks
        moreTaskFunction();
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Wednesday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}
//If Thu Worked    
if (workThursday === "Yes" || workThursday === "yes" || workThursday === "Y" || workThursday === "y") {
        // call function and assign to thuInfo
        var thuInfo = taskFunction(weekDay[3]);
        // create concoc. of day and info string
        thuTask = weekDay[3] + thuInfo;
        // Hours worked
        thuHours = parseFloat(thuInfo);
        //prompt for additional tasks
        moreTaskFunction();
        //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Thursday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}
//If Friday Worked    
if (workFriday === "Yes" || workFriday === "yes" || workFriday === "Y" || workFriday === "y") {
        // call function and assign to friInfo
        var friInfo = taskFunction(weekDay[4]);
        // create concoc. of day and info string
        friTask = weekDay[4] + friInfo;
        // Hours worked
        friHours = parseFloat(friInfo);
        //prompt for additional tasks
        moreTaskFunction(weekDay[4]);
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Friday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}
//If Saturday Worked    
if (workSaturday === "Yes" || workSaturday === "yes" || workSaturday === "Y" || workSaturday === "y") {
        // call function and assign to satInfo
        var satInfo = taskFunction(weekDay[5]);
        // create concoc. of day and info string
        satTask = weekDay[5] + satInfo;
        // Hours worked
        satHours = parseFloat(satInfo);
        //prompt for additional tasks
        moreTaskFunction();
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Saturday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}
//If Sunday Worked    
if (workSunday === "Yes" || workSunday === "yes" || workSunday === "Y" || workSunday === "y") {
        // call function and assign to sunInfo
        var sunInfo = taskFunction(weekDay[6]);
        // create concoc. of day and info string
        sunTask = weekDay[6] + sunInfo;
        // Hours worked
        sunHours = parseFloat(sunInfo);
        //prompt for additional tasks
        moreTaskFunction();
            //If more tasks, then
            while  (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                //start function
                newTask = taskFunction("Sunday");
                // add together
                monTask += newTask;
                // find number of hours worked
                monHours += parseFloat(newTask);
                // Prompt again
                moreTaskFunction() ;
            }
}

   // Hours worked = sum of hours worked every day
var hoursWorked = monHours + tueHours + wedHours + thuHours + friHours + satHours + sunHours;

console.log(monTask + monHours + " total hours worked.\n\n" + tueTask + tueHours + " total hours worked.\n\n" + wedTask + wedHours + " total hours worked.\n\n" + thuTask +  thuHours + " total hours worked.\n\n" + friTask + friHours + " total hours worked.\n\n" + satTask + satHours + " total hours worked.\n\n" + sunTask + sunHours + " total hours worked.\n\n" + hoursWorked + " total hours worked this week.");






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
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[0]);
    // create concoc. of day and info string 
    var monTask = weekDay[0] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[0]);
            //if Yes
        if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
                // start function
            var newTask = taskFunction(weekDay[0]);
                // add together
        monTask += newTask;
            //If No
        }  else {
                //New Task is 0
            newTask = 0;
        }
    var monHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var monTask = weekDay[0] + " Not worked \n";
    var monHours = 0;
}
//If Tuesday Worked    
if (workTuesday === "Yes" || workTuesday === "yes" || workTuesday === "Y" || workTuesday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[1]);
    // create concoc. of day and info string 
    var tueTask = weekDay[1] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[1]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[1]);
        // add together
        tueTask += newTask;
           //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var tueHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var tueTask = weekDay[1] + " Not worked\n";
    var tueHours = 0;
}
//If Wednesday Worked    
if (workWednesday === "Yes" || workWednesday === "yes" || workWednesday === "Y" || workWednesday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[2]);
    // create concoc. of day and info string 
    var wedTask = weekDay[2] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[2]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[2]);
        // add together
        wedTask += newTask;
        //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var wedHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var wedTask = weekDay[2] + " Not worked\n";
    var wedHours = 0;
}
//If Thursday Worked    
if (workThursday === "Yes" || workThursday === "yes" || workThursday === "Y" || workThursday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[3]);
    // create concoc. of day and info string 
    var thuTask = weekDay[3] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[3]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[3]);
        // add together
        thuTask += newTask;
        //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var thuHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var thuTask = weekDay[3] + " Not worked\n";
    var thuHours = 0;
}
//If Friday Worked    
if (workFriday === "Yes" || workFriday === "yes" || workFriday === "Y" || workFriday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[4]);
    // create concoc. of day and info string 
    var friTask = weekDay[4] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[4]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[4]);
        // add together
        friTask += newTask;
        //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var friHours = parseFloat(taskInfo) + parseFloat(newTask);;
} else {
    var friTask = weekDay[4] + " Not worked\n";
    var friHours = 0;
}
//If Saturday Worked    
if (workSaturday === "Yes" || workSaturday === "yes" || workSaturday === "Y" || workSaturday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[5]);
    // create concoc. of day and info string 
    var satTask = weekDay[5] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[5]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[5]);
        // add together
        satTask += newTask;
        //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var satHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var satTask = weekDay[5] + " Not worked\n";
    var satHours = 0;
}
//If Sunday Worked    
if (workSunday === "Yes" || workSunday === "yes" || workSunday === "Y" || workSunday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[6]);
    // create concoc. of day and info string 
    var sunTask = weekDay[6] + taskInfo;
    //prompt for additional tasks
    var moreTask = prompt("Did you work on another task on " + weekDay[6]);
    //if Yes
    if (moreTask === "Yes" || moreTask === "yes" || moreTask === "Y" || moreTask === "y") {
        // start function
        var newTask = taskFunction (weekDay[6]);
        // add together
        sunTask += newTask;
        //If No
    }  else {
        //New Task is 0
        newTask = 0;
    }
    var sunHours = parseFloat(taskInfo) + parseFloat(newTask);
} else {
    var sunTask = weekDay[6] + " Not worked\n";
    var sunHours = 0;
}
   // Hours worked = sum of hours worked every day
var hoursWorked = monHours + tueHours + wedHours + thuHours + friHours + satHours + sunHours;

console.log(monTask + monHours + " total hours worked.\n\n" + tueTask + tueHours + " total hours worked.\n\n" + wedTask + wedHours + " total hours worked.\n\n" + thuTask +  thuHours + " total hours worked.\n\n" + friTask + friHours + " total hours worked.\n\n" + satTask + satHours + " total hours worked.\n\n" + sunTask + sunHours + " total hours worked.\n\n" + hoursWorked + " total hours worked this week.");






// Title: Productivity   Author: Harmony Betancourt  Date: 8/27/13
// Purpose: Calculate hours worked per task


    // Start prompts
var workMonday = prompt("Did you work on Monday?");
var workTuesday = prompt("Did you work on Tuesday?");

var weekDay = ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:"];

if (workMonday === "Yes" || workMonday === "yes" || workMonday === "Y" || workMonday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[0]);
    var monTask = weekDay[0] + taskInfo;
} else {
    var monTask = weekDay[0] + " Not worked";
}
if (workTuesday === "Yes" || workTuesday === "yes" || workTuesday === "Y" || workTuesday === "y") {
    // call function and assign to taskInfo
    var taskInfo = taskFunction(weekDay[1]);
    var tuesTask = weekDay[1] + taskInfo;
} else {
    var tuesTask = weekDay[1] + "Not worked";
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
    var taskTotal = taskHours + " hours worked on " + taskName + ", " + taskStatus + taskNotes;
    return taskTotal;
}

console.log(monTask + "\n" + tuesTask);






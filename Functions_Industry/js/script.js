// Title: Productivity   Author: Harmony Betancourt  Date: 8/27/13
// Purpose: Calculate hours worked per task


    // Start prompts
//var workMonday = prompt("Did you work on Monday?");




    //Function
function taskFunction () {
    var taskName = prompt("What task did you work on?");
    var taskHours = prompt("How many hours did you work on " + taskName + " today?");
    var taskComplete = prompt("Did you complete the task?\nY/N?");
    var taskNotes = prompt("Please write any notes you may have.");

    taskHours = parseFloat(taskHours);
    var taskStatus = (taskComplete === 'Y') ? 'task completed' : 'task not complete' ;
    var taskNotes = (taskNotes === '') ? '.' : '.\nNotes: ' + taskNotes ;

    var taskTotal = taskHours + " hours worked on " + taskName + ", " + taskStatus + taskNotes;
    console.log(taskTotal);

}

taskFunction();
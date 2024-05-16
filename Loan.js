const prompt = require('prompt-sync')();
const job_type = prompt("Enter your job type government / business / private:");
 
if (job_type =="government") {
    var salary = parseFloat(prompt("Enter your salary:"));
    if (salary > 50000) {
        console.log("You can apply for a loan.");
    } else {
        console.log("You can't apply for a loan.");
    }
} else if (job_type === "business") {
    var turnover = parseFloat(prompt("Enter your yearly turnover:"));
    if (turnover > 2000000) {
        console.log("You can apply for a loan.");
    } else {
        console.log("You can't apply for a loan.");
    }
} else if (job_type === "private") {
    console.log("No loan available for you.");
} else {
    console.log("Invalid job type.");
}
 
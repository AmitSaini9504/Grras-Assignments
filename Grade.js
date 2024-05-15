var prompt = require('prompt-sync')();
const marks = parseFloat(prompt("Enter Obtained marks: "));

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade A");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade B+");
}
else if (marks >= 60 && marks < 70) {
    console.log("Grade B");
}
else if (marks >= 45 && marks < 60) {
    console.log("Grade C");
}
else if (marks >= 35 && marks < 45) {
    console.log("Grade D");
}
else if (marks < 35 && marks >= 0) {
    console.log("Fail");
}
else {
    console.log("Please Enter Valid Marks");
}

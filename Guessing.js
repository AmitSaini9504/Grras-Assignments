
const prompt = require('prompt-sync')();
console.log("Welcome to number guessing game...")

let user1 = parseInt(prompt.hide("User 1 Input : (1-20)"));


const maxAttempts = 5;

for (let attempts = 1; attempts <= maxAttempts; attempts++) {
    let user2 = parseInt(prompt("Attempt " + attempts + ": User 2 input (1-20) : - "));

    if (user1 === user2) {
        console.log("Well done , You are won...");
        break;
    } else if (user2 > user1) {
        console.log("You are guessing maximum number...");
    } else {
        console.log("You are guessing minimum number....");
    }

    if (attempts === maxAttempts) {
        console.log("You've used all your attempts. The correct number was: " + user1);
        console.log("You are lose.... Better luck next Time")
    }
}

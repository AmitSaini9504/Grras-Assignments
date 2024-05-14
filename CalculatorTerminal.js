
function performOperation(value1, value2, operation) {
    switch (operation) {
        case 'add':
            return value1 + value2;
        case 'sub':
            return value1 - value2;
        case 'multi':
            return value1 * value2;
        case 'divide':
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operation!";
    }
}

let value1 = parseFloat(prompt("Enter the first value:"));
let value2 = parseFloat(prompt("Enter the second value:"));
let operation = prompt("Enter the operation (add , sub, multi, divide):").toLowerCase();

// Perform the operation
let result = performOperation(value1, value2, operation);

// Display the result
console.log(`Result of ${operation} is: ${result}`);

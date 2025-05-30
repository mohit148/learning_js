/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/

// We could write the logic like this:

let input1 = prompt("Enter number > 100");
while (input1 <= 100) {
  input1 = prompt("Enter again:");
}
// Or attempt something like this:

while (input2 <= 100) {
  let input2 = prompt("Enter number > 100"); // ❌ Invalid – `input2` not defined yet
  input2 = prompt("Enter again:");
}

// But both approaches have problems:

// In the first version, the initial prompt() is outside the loop. That breaks the idea of a clean loop, especially if more checks (like null or NaN) are needed.

// In the second version, the condition input2 <= 100 is used before input2 is even declared, which leads to an error.

// ✅ The better way is:
// do...while:

let num1;
do {
  num1 = prompt("Enter number > 100");
} while (+num1 <= 100 && num1);
// boolean of num1 is false if it's null or empty, so the loop stops when a valid number greater than 100 is entered
// or when the user cancels or enters an empty line.

//OR
let num2;
while (true) {
  let num2 = prompt("Enter number > 100");
  if (num2 > 100 || !num2) break; // exit the loop if the condition is met
}

// more better way with more checks:

let input3;
let num3;

do {
  input3 = prompt("write a number greater than 100");

  if (input3 === null) {
    alert("cancelled");
    break;
  }

  input3 = input3.trim();
  num3 = Number(input3);

  if (isNaN(input3) || input3 === "" || num3 <= 100) {
    alert("please enter a valid number");
  } else {
    alert(`so, you're ${num3} years old`);
    break;
  }
} while (true);

// or using a while loop with a break: see task6.js

// This version is more robust, as it checks for null input, trims whitespace, and ensures the input is a valid number greater than 100 before proceeding.
// It also uses a break statement to exit the loop when the conditions are met, making it clear and efficient.

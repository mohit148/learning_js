// We could write the logic like this:


let input = prompt("Enter number > 100");
while (input <= 100) {
  input = prompt("Enter again:");
}
// Or attempt something like this:


while (input <= 100) {
  let input = prompt("Enter number > 100"); // ❌ Invalid – `input` not defined yet
  input = prompt("Enter again:");
}

// But both approaches have problems:

// In the first version, the initial prompt() is outside the loop. That breaks the idea of a clean loop, especially if more checks (like null or NaN) are needed.

// In the second version, the condition input <= 100 is used before input is even declared, which leads to an error.

// ✅ The better way is:
// do...while:

let num;
do {
  num = prompt("Enter number > 100");
} while (+num <= 100 && num);
// boolean of num is false if it's null or empty, so the loop stops when a valid number greater than 100 is entered 
// or when the user cancels or enters an empty line.

// more better way with more checks:

// let input;
// let num;

// do {
//   input = prompt("write a number greater than 100");

//   if (input === null) {
//     alert("cancelled");
//     break;
//   }

//   input = input.trim();
//   num = Number(input);

//   if (isNaN(input) || input === "" || num <= 100) {
//     alert("please enter a valid number");
//   } else {
//     alert(`so, you're ${num} years old`);
//     break;
//   }
// } while (true);

// or using a while loop with a break: see task6.js
// This version is more robust, as it checks for null input, trims whitespace, and ensures the input is a valid number greater than 100 before proceeding.
// It also uses a break statement to exit the loop when the conditions are met, making it clear and efficient.



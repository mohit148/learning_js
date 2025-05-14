/*
✅ Ternary Operator Summary

- The ternary operator (? :) is an **expression-based operator** that evaluates a condition and returns one of two values.
- It is intended for **selecting between values**, not for running general statements or actions.
- You should use the ternary operator:
  ✔️ When assigning a value to a variable
  ✔️ When returning a value from a function
- Avoid using it for:
  ❌ Logging (e.g., console.log)
  ❌ Function calls or other side-effect actions

💡 Use it when your goal is to choose *a value*, not to perform *an action*. This improves code readability.
*/

// ✅ Good use: assigning a value
let number = prompt("Enter a number");
let message = (number == 22) ? "Valid" : "Invalid";
console.log(message);

// Equivalent if-else version:
if (number == 22) {
  message = "Valid";
} else {
  message = "Invalid";
}
console.log(message);

// ❌ Bad use: using ternary for side effects like console.log
let number1 = prompt("Enter a number");
(number1 == 22) ? console.log("Valid") : console.log("Invalid");

// Equivalent if-else version (recommended in this case):
if (number1 == 22) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

/*
Explanation:
- The bad example uses ternary not to assign or return a value but just to call `console.log`.
- While it works, it's **harder to read**, and using if...else is better for clarity in such cases.
*/

// ✅ Using ternary with return (ideal use)
function getMessage(age) {
  return (age < 18) ? "You are a minor" : "You are an adult";
}

// Equivalent if-else version:
function getMessage(age) {
  if (age < 18) {
    return "You are a minor";
  } else {
    return "You are an adult";
  }
}

// Calling the function properly with input
function showMessage() {
  let userInput = prompt("Enter your age:");
  let age = Number(userInput);  // Convert input to a number
  let message = getMessage(age);
  alert(message);
}

// ❌ Bad use: using ternary for console.log inside a function
function getMessage(age) {
  (age < 18) ? console.log("Minor") : console.log("Adult");
}

// Better alternative using if-else:
function getMessage(age) {
  if (age < 18) {
    console.log("Minor");
  } else {
    console.log("Adult");
  }
}

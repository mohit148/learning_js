/* The ternary operator (? :) is an operator that evaluates an expression 
and returns a value. It's meant to select a value based on a condition,
not to execute statements */

/* It should only be used in place of if...else when you're "assigning" or returning a value,
not when performing general actions like logging or function calls.*/

// ✅ Good use of the ternary operator

// let result = (number === 22) ? "Valid" : "Invalid";

let number = prompt("Enter a number");
let message = number == 22 ? "Valid" : "Invalid";
console.log(message);

// if else version of the above code
if (number == 22) {
  message = "Valid";
} else {
  message = "Invalid";
} 
console.log(message);


// ❌ Bad use of the ternary operator
let number1 = prompt("Enter a number");
(number1 == 22) ? console.log("Valid") : console.log("Invalid");
// if else version of the above code
if (number1 == 22) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
// The above code is a bad use of the ternary operator because it is used to execute a statement (console.log) instead of returning a value.
// the ternary operator is meant to be used in place of an if...else statement when you're "assigning" or returning a value, not when performing general actions like logging or function calls.

// ✅:
function getMessage(age) {
  return age < 18 ? "You are a minor" : "You are an adult";
} // one final value is returned, no statements.

// if else version of the above code
function getMessage(age) {
  if (age < 18) {
    return "You are a minor";
  } else {
    return "You are an adult";
  }
} 
// we can call the above function using get getMessage()
let userInput = prompt("Enter your age:");
let age = Number(userInput);  // Convert input to a number

let message2 = getMessage(age);
alert(message2); 



// ❌:
function getMessage(age) {
  age < 18 ? console.log("Minor") : console.log("Adult");
}

// if else version of the above code
function getMessage(age) {
  if (age < 18) {
    console.log("Minor");
  } else {
    console.log("Adult");
  }
}
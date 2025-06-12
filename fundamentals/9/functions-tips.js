// 1. Function Return Stops Execution

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// Explanation:
// A function stops executing further code once it hits a 'return' statement.
// - If age > 18 → returns true, confirm() is not executed.
// - If age <= 18 → skips the first return, executes confirm().

// 2. Default Parameters Can Be Expressions

function test(a, b = test2()) {
  return a + b;
}

function test2() {
  console.log("You did not pass a value for b");
  return 0; // Return something valid to allow addition
}

// Explanation:
// - Default parameters can be any expression (e.g., function call).
// - If b is not passed, test2() runs and its return value is used for b.

// 3. Default Parameters Are Evaluated Fresh Each Time

function getRandom() {
  return Math.random();
}

function random(text = getRandom()) {
  return text;
}

console.log(random()); // getRandom() is called because text is missing
console.log(random()); // getRandom() is called again — new value

// Explanation:
// - The default value is evaluated every time the parameter is missing.
// - getRandom() runs each time random() is called without an argument.

// 4. Another Example: Default Function Call for a Missing Parameter

function anotherFunction() {
  console.log("You have not passed a value for text");
  return "default message";
}

function showMessage(from, text = anotherFunction()) {
  console.log(`From: ${from}, Text: ${text}`);
}

showMessage("John"); // anotherFunction() is called because text is not passed


// 5.
// Never put a line break immediately after return in JavaScript.
// If you do, JavaScript inserts a semicolon right after return, causing the function to return undefined.

// Correct usage:

// Write the returned expression on the same line as return, or

// Put an opening parenthesis right after return and wrap the expression inside.

// ❌ Incorrect:
return;
a + b + c;

// ✅ Correct:

return a + b + c;

// or
return (
  a + b + c
);

// 6.
// name a function something that describes what it does.
// examples:
// calc..() - for calculations
// fetch..() - for fetching data
// "get…" – return a value,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

//7.
// avoid using a function for multiple purposes.
// A function should do one thing at a time.

// example:
// getname()
// getage()
// getaddress()
// createUser()

// Instead of having a single function that does everything, break it down into smaller, focused functions.
// This makes your code more readable, maintainable, and reusable.

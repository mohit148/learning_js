// 5. Default Parameters

// Functions can have default parameter values.
// If no argument is provided, the default value is used.

function greet(name = "Guest") {
  alert("Hello, " + name);
}

greet(); // Hello, Guest
greet("Alice"); // Hello, Alice

// --- Old Ways of Setting Default Parameters ---

// Option 1: Using if-check for undefined
function greetOld(name) {
  if (name === undefined) {
    name = "Guest";
  }
  alert("Hello, " + name);
}

greetOld(); // Hello, Guest
greetOld("Alice"); // Hello, Alice

// Option 2: Using the logical OR (||) operator
function greetOr(name) {
  name = name || "Guest"; // If name is falsy (undefined, null, "", etc.), use "Guest"
  alert("Hello, " + name);
}

greetOr(); // Hello, Guest
greetOr("Alice"); // Hello, Alice

// Option 3: Using the Nullish Coalescing Operator (??)
function greetNullish(name) {
  name = name ?? "Guest"; // If name is null or undefined, use "Guest"
  alert("Hello, " + name);
}

greetNullish();        // Hello, Guest
greetNullish(0); // Hello, 0
greetNullish(null);    // Hello, Guest
greetNullish(undefined); // Hello, Guest
greetNullish("");      // Hello, (empty string)
greetNullish("Alice"); // Hello, Alice


// The ?? operator (nullish coalescing) checks only if the value is null or undefined.

// An empty string "" is not null or undefined; it’s a valid (but falsy) value.

//   So, name = "" ?? "Guest" assigns name to ""(empty string), not to "Guest".



// Note:
// In modern JavaScript, the default parameter is only used if the argument is strictly 'undefined'.

function greetWithDefault(name = "Guest") {
  alert("Hello, " + name);
}

greetWithDefault(); // Hello, Guest
greetWithDefault(undefined); // Hello, Guest
greetWithDefault("Alice"); // Hello, Alice

// ------------------------------------------------

// 6. Return Statement

// Functions can return a value using the return statement.

function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
alert(result); // 5

// [A function with an empty return or without it returns undefined]
// If a function doesn't explicitly return anything, it returns 'undefined' by default.
function doNothing() {
  /* empty */
}

console.log(doNothing() === undefined); // true


function doNothing2() {
  return;
}
console.log(doNothing2() === undefined); // true


// for more info read functions-tips.js

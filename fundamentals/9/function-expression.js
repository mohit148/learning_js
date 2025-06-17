// 7. Function Expression

// Functions can also be defined as expressions and assigned to variables:
let sayHi = function () {
  console.log("Hi");
};

sayHi(); // Hi

// This is called a function expression. The function can be anonymous (no name) or named.
// Example of a named function expression:
let sayHello = function hello() {
  console.log("Hello");
};

// In contrast, the following syntax is called a function declaration:
function Name() {
  //...
}

// 📌 Key Difference:
// Function expressions are **not hoisted**, meaning they cannot be called before they are defined.
// Function declarations **are hoisted**, so they can be used before their definition.

// Regardless of how a function is defined, it is always a value stored in a variable (either explicitly or implicitly).
// However, there are ways to use a function **without storing it** in a variable.

// ---
// 🔹 Example 1: Anonymous function expression used as a callback

// This is a common pattern in JavaScript, especially for asynchronous operations or event handling.
// Here, we define an anonymous function and pass it as a callback to another function.
setTimeout(function () {
  console.log("This is an anonymous function expression used as a callback.");
}, 1000);

// 🧠 Asynchronous functions allow tasks to run in the background without blocking other operations.

// ---
// 🔹 Example 2: Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("IIFE runs immediately!");
})();

// IIFEs are used to execute code immediately and create a private scope for variables.

// ---
// ✅ There are more advanced use cases of anonymous function expressions,
// such as with event listeners, promises, array methods, etc.
// (We’ll explore these later — ask ChatGPT for more use cases.)

// ---------------------------------------------------------------------------------
// 🧪 Bonus Note:
// When we log a function name in a browser console, it shows the function's code as output.
// In Node.js, it logs something like: [Function: functionName]


// 📘 Function Declaration vs Function Expression

// ✅ 1. Hoisting Behavior

// Function Declarations are hoisted:
// They can be called before their actual definition in the code.

sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi from declaration!");
}

// Function Expressions are NOT hoisted:
// They must be defined before they are called.

// sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization
// let sayHello = function () {
//   console.log("Hi from expression!");
// };



// ✅ 2. Scope Behavior (in Strict Mode)

// In strict mode, Function Declarations inside blocks are block-scoped.
// Function Expressions are also block-scoped by nature.
// However, if the variable holding the function expression is declared outside the block
// and the function is assigned inside the block,
// it will still be accessible outside the block through that variable.


"use strict";
let age = 14;

if (age >= 18) {
  function canVote() {
    console.log("You are old enough to vote.");
  }
} else {
  function canVote() {
    console.log("You are not old enough to vote.");
  }
}

canVote(); // ❌ Error: canVote is not defined (block-scoped)



// 🧪 Another Example: Function Declaration inside a block

"use strict";
let age1 = 16;

if (age1 < 18) {
  welcome();               // ✅ Runs

  function welcome() {
    console.log("Hello!");
  }

  welcome();               // ✅ Runs again
} else {
  function welcome() {
    console.log("Greetings!");
  }
}

// Outside the block, the function is not visible
welcome(); // ❌ Error: welcome is not defined



// ✅ Using Function Expressions to Fix Scope Issues

"use strict";
let age3 = prompt("What is your age?", 18);

let welcome;

if (age3 < 18) {
  welcome = function () {
    console.log("Hello!");
  };
} else {
  welcome = function () {
    console.log("Greetings!");
  };
}

welcome(); // ✅ Works, function expression is always available after assignment



// Using Ternary Operator with Function Expressions

"use strict";
let age4 = prompt("What is your age?", 18);

let welcome = (age4 < 18)
  ? function () { console.log("Hello!"); }
  : function () { console.log("Greetings!"); };

welcome(); // ✅ Works cleanly and concisely



// An expression is:

// Any valid piece of code that produces a value when it runs.

//   It’s not just math or comparisons — it’s any code that results in a value.






// ✅ Function Declarations vs Function Expressions — Syntax Clarified

// 🔸 Mathematically, both function declarations and function expressions produce a value — a function object.
// So logically, both could be considered "expressions".

// 🔸 However, JavaScript follows specific syntax rules to classify code as either an expression or a statement.

// 🔹 JavaScript syntax says:

// function sayHi() {}
// → This is a function declaration (a statement), not an expression.

// let sayHi = function() {}
// → This contains a function expression on the right-hand side of the assignment.

// ✅ Even though both forms result in a function value,
// only the second one is written within an expression context —
// so only that is called a "function expression".

// Expressions → produce values
// Function expressions → produce function objects
// These objects → are values too!

// Term       	What it does	                    Keyword	           Example
// Assign	=> Stores a value into a variable	       =            	let x = 10;
// Pass	=> Sends a value to a function (arg)   	  ()             	greet("Alice")


//--
// ---
// 📌 Callback Functions

// A callback is a function passed as an argument to another function,
// so it can be called later, often after some task is done.


// ✅ Example 1: Synchronous Callback

function greet(name) {
  console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
  let name = "Alice";
  callback(name);
}

processUserInput(greet); 
// Output: Hello, Alice!




// ✅ Example 2: Asynchronous Callback

function loadFile(callback) {
  setTimeout(function () {
    console.log("File loaded from disk.");
    callback();
  }, 3000);
}

function parseFile() {
  console.log("Parsing file contents...");
}

loadFile(parseFile);
// Output after 3 seconds:
// File loaded from disk.
// Parsing file contents...


// ✅ Functions & References Summary:
// Functions in JavaScript are values, just like numbers or strings.

// When you assign a function to a variable (e.g., let abc = function () {}),
// you're assigning a reference to the function — not the function code itself.

// When you pass a function as an arguement to another function (callback), the parameter variable holds a reference to the same function.

// That's why you can call the parameter as a function

// In JavaScript:

// Primitive values (numbers, strings, booleans) are copied by value

// Objects, arrays, and functions are copied by reference

// 🔁 Final Summary:
// - A callback is a function passed to another function to be called later.
// - Used in both sync and async code.
// - Usually written as function expressions.





// References - reference in javascript means a pointer to the memory location where the function is stored.
// When you assign a function to a variable, you're creating a reference to that function.

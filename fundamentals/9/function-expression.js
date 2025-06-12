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


//-- 
// Callback functions
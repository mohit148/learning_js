// 🧱 What Are Functions?
// Functions are reusable blocks of code that perform a specific task.
// They help avoid repetition and make code easier to manage.

// 1. Function Declaration
// You can define a function using the function keyword

function showMessage() {
  console.log("Hello everyone!");
}

showMessage(); // Calls the function
// This function can be called multiple times, avoiding code duplication.

// 2. Local Variables
// Variables declared inside a function are local to that function and cannot be accessed outside
function showMessage2() {
  let message = "Hello, I'm JavaScript!";
  console.log(message);
}

showMessage2();
console.log(message); // Error: message is not defined

// if the variable is dclared outside the function, we can still assign a new value to it from inside the function
let message = "Hello, I'm JavaScript!";
function showMessage3() {
  message = "Hello, I'm JavaScript! (modified)";
  console.log(message);
}

showMessage3(); // Outputs: Hello, I'm JavaScript! (modified)
console.log(message); // Outputs: Hello, I'm JavaScript! (modified)

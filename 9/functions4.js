// 7. Function Expression
// Functions can also be defined as expressions and assigned to variables:
let sayHi = function() {
    console.log('Hi');
  };
  
sayHi(); // Hi
  
// This is called a function expression. The function can be anonymous (no name) or named.
// For example:
let sayHello = function hello() {
    console.log('Hello');
};
  
// 8. Function Naming
// Function expressions can be named or anonymous.
// using an anonymous function as a parameter in other function  and 
// using it for assigning a value to a variable are common use cases
// other uses cases include callbacks, event handlers, and more. [we will cover these in later sections]

// Named function expressions can be useful for debugging, as the name will appear in stack traces.

function functionName() {
    //...
}

// function () {
//     //..
// }


// This is an anonymous function expression.
// Note that anonymous functions cannot be called by name,
// but they can be passed as arguments to other functions or assigned to variables.
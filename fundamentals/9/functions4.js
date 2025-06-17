
// 7. Function Naming
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


//-------------------------------------------------------------------------------------------------------------

// ✅ Functions as Values in JavaScript
// In JavaScript, functions are values — just like numbers, strings, or objects.
// They can be assigned to variables, passed as arguments, and returned from other functions.
// When defined as function expressions, they are assigned to a variable, which acts as their name.(functionName)
// This flexibility allows functions to be used as data, enabling powerful patterns like callbacks and event handlers.


function abc() {
    console.log('This is a named function expression');
}
console.log(abc); // [Function: abc]

let abc1 = function () {
    console.log('This is an anonymous function expression');
}
console.log(abc1()); // [Function: abc1]
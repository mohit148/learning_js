// Hoisting refers to the JavaScript behavior where variable and function declarations are moved to the top of their
// containing scope during the compilation phase.


// This means you can use functions and variables before they are declared in the code.
// However, only the declarations are hoisted, not the initializations.


console.log(a) 
var a =5;
// In this case, the variable `a` is hoisted, but its initialization is not.
// Therefore, the output will be `undefined` instead of `5`.
// note that only var variables are hoisted, not let or const.
// If you try to access a variable declared with `let` or `const` before its declaration, you'll get a ReferenceError.

hi()
function hi() {
    console.log("Hello, world!");
}
// In this case, the function `hi` is hoisted, so you can call it before its declaration.
// note that arrow functions and function expressions are not hoisted in the same way.

// ⭐ [if the function is declared multiple times, the last declration overrides the previous ones.]
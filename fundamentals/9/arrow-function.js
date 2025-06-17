// Arrow functions provide an alternative way to define function expressions.

// Syntax:
// let func = (arg1, arg2, ..., argN) => expression;

// or, for multiline functions:

// let func = (arg1, arg2, ..., argN) => {
//   // statements
//   return expression;
// };

// Example — Inline arrow function:
let multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// Example — Multiline arrow function:
let greet = (name) => {
  console.log(`Hello, ${name}!`);
  return `Greeting sent to ${name}`;
};
console.log(greet("Alice")); 
// Output:
// Hello, Alice!
// Greeting sent to Alice

// Special cases:

// * If the function has only one parameter, you can omit the parentheses:
let square = x => x * x;
console.log(square(4)); // 16

// * If the function has no parameters, you must use empty parentheses:
let sayHello = () => console.log("Hello!");
sayHello(); // Hello!

// * Arrow functions can also be used inside ternary operations:
let isEven = num => num % 2 === 0 ? `${num} is even` : `${num} is odd`;

console.log(isEven(4)); // 4 is even
console.log(isEven(5)); // 5 is odd

// Equivalent traditional function:
let isEvenTernary = function(num) {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
};

// Equivalent multiline arrow function:
let isEvenArrow = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
};


// The difference between a multiline arrow function and an inline arrow function is:
// - In a multiline arrow function (with curly braces), you must explicitly use the `return` statement to return a value.
// - In an inline arrow function (without curly braces), the expression after the `=>` is returned automatically.

// Most of the time, operators and functions automatically convert the values given to them to the right type.
// example: alert(123) converts the number to a string
// prompt() converts the value to a string
// console.log("2" * "2"); // 4

// sometimes javascript converts a string of numbers to a number intutively
// console.log("2" * "2"); // 4
// or
// console.log("2" * 2); // 4
// sometimes it does not convert a string of numbers to a number
// console.log("2" + "2"); // 22




let a = '123';
console.log(a); // 123
console.log(typeof a); // string 

let b = Number(a); // convert string to number
console.log(b); // 123
console.log(typeof b); // number



// Unary Addition 
// The unary plus operator (+) converts its operand to a number.
// It works for strings, booleans, null, undefined, and objects.
// For example, the string "123" becomes the number 123:

let n1 = "4", n2 = "2";
console.log(n1 + n2); // 42

// But if we use the unary plus operator (+) before the string, it converts it to a number:
console.log(+n1 + +n2); // 6
// The unary plus operator (+) converts its operand to a number.

// Another way to convert a string to a number is to use the Number() function:
console.log( Number(n1) + Number(n2) ); // 6



// NUMBERS

console.log(2 + 2); // 4

// sometimes javascript converts a string of numbers to a number intutively
console.log("2" * "2"); // 4
// or
console.log("2" * 2); // 4
// sometimes it does not convert a string of numbers to a number
console.log("2" + "2"); // 22

//null

// typeof null returns "object" because of a historical bug in JavaScript.
// null is a primitive value that represents the intentional absence of any object value.
// typeof alert is a function, functions are non primitive data type
// functions are a type of object in JavaScript.

// Most of the time, operators and functions automatically convert the values given to them to the right type.
// example: alert(123) converts the number to a string
// prompt() converts the string to a number
// console.log("2" * "2"); // 4

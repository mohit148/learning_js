// there are 4 logical operators in JavaScript
// OR (||), AND (&&), NOT (!), and NULLISH (??)


// OR (||) operator returns the first truthy value
// if all values(excluding the last one) are falsy, it returns the last value (weither its truthy or falsy value)

// example
console.log(0 || 1); // 1
console.log(1 || 0); // 1
console.log(0 || 0); // 0
console.log("" || "hello"); // hello
console.log(null || undefined); // undefined
console.log(false || true); // true

// AND (&&) operator returns the first falsy value
// if all values(excluding the last one) are truthy it returns the last value (weither its truthy or falsy value)
// example
console.log(0 && 1); // 0
console.log(1 && 0); // 0
console.log(0 && 0); // 0
console.log("" && "hello"); // ""
console.log(null && undefined); // null
console.log(false && true); // false

// NOT (!) operator returns the opposite boolean value
// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.
// example
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!"hello"); // false
console.log(!""); // true
console.log(!null); // true

// A double NOT ( !! ) operator converts a value to boolean type
// example
console.log(!!true); // true
console.log(!!false); // false
console.log(!!0); // false

// becaause the first NOT operator converts the value to boolean and the second NOT operator returns the opposite value, means cancel out the first NOT operator
// alternatively, we can use the Boolean() function to convert a value to boolean type



// Precedence of logical operators
// The precedence of logical operators is as follows:
// 1. NOT (!)
// 2. AND (&&)
// 3. OR (||)


// Note that sometimes && can also be used as replacement of if else but it should be avoided for clarity purpose

// example
let x = 1;

(x > 0) && alert("Greater than zero!");

// if else version of above statement

if (x > 0) alert("Greater than zero!");

// alert is a function and function is a type of object therefore function is a truthy value

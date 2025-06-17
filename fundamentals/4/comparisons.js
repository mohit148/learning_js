let a = 3,
  b = 2;
c = "3";
console.log(a < b); // false
console.log(a > b); // true
console.log(a <= b); // false
console.log(a >= b); // true
console.log(a == b); // false
// == checks for value equality while === checks for value and type equality and = is an assignment operator
console.log(a != b); // true
// != checks for value inequality while !== checks for value and type inequality
console.log(a !== c); // false, same value but different type
console.log(a !== b); // true, different value and type


// ---------------------------------------------------------------------------------
console.log("hello" > 5) // false
console.log("hello" * 2) // NaN



// 1. In `console.log("abc" > 5)`, JavaScript tries to convert the string `"abc"` to a number, which results in `NaN`. Any comparison(==,===, <, >, <=, >=) with `NaN` is always `false`, so the final output is `false`.
// 2. In, console.log("hello" * 2) JavaScript tries to convert "abc" to a number for multiplication, which results in NaN. Multiplying NaN by 5 gives NaN, so the output is NaN.
// any arithmetic operation with NaN results in NaN
// note: multiplication, subtraction, division of a non empty string with a number results in NaN( which is also a typeof number(data type) but an invalid number)
// whereas comparisons always return true or false


// 3. In the code below, 'x' is undefined. 
// Performing any operation between undefined and a number results in NaN (Not a Number).
// However, typeof NaN is still "number" in JavaScript.

let x;
console.log(typeof (x + 3));  // Output: "number"
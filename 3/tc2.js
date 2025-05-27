let a,
  b = true,
  c = false,
  d = null,
  e = "hello world how are you!",
  f = "2 2 2",
  g = "  ",
  h = "";
console.log(Number(a)); // NaN
console.log(Number(b)); // 1
console.log(Number(c)); // 0
console.log(Number(d)); // 0
console.log(Number(e)); // NaN
console.log(Number(f)); // NaN
console.log(Number(g)); // 0
console.log(Number(h)); // 0

// BOOLEAN CONVERSTION
// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

//in JavaScript, a non-empty string is always true.
// the string with zero "0" is true
alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)


// ---------------------------------------------------------------------------------
console.log("hello" > 5) // false
console.log("hello" * 2) // NaN



// 1. In `console.log("abc" > 5)`, JavaScript tries to convert the string `"abc"` to a number, which results in `NaN`. Any comparison(==,===, <, >, <=, >=) with `NaN` is always `false`, so the final output is `false`.
// 2. In, console.log("hello" * 2) JavaScript tries to convert "abc" to a number for multiplication, which results in NaN. Multiplying NaN by 5 gives NaN, so the output is NaN.

// note: multiplication, subtraction, division of a non empty string with a number results in NaN( which is also a typeof number(data type) but an invalid number)
// whereas comparisons always return true or false
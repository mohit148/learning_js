let a,
b = true, 
c = false,
d = null,
e = "hello world how are you!",
f = '2 2 2',
g = '  ',
h = '';
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
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
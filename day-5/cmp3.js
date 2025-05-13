let a = 0;
console.log( Boolean(a) ); // false
// because 0 is a falsy value
// 0, "", null, undefined, NaN are all falsy values
// all other values are truthy
let b = "0"; // "0" is a truthy value
console.log( Boolean(b) ); //true because, "0" is a non empty string and is a truthy value
// The conversion rule:

// * Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// * Other values become true.
console.log(a == b); // true, because == checks for value equality and not type equality
console.log(Boolean(a) == Boolean(b)); // false, because Boolean(a) is false and Boolean(b) is true


//  the reason a == b is true is because of type coercion
//  a == b is true because the == operator converts both operands to the same type before making the comparison
// For strict equality (===) check, null and undefined are not equal because they are different types
console.log(null === undefined); // false



// ✨ Special cases of comparison with null and undefined


// For loose equality (==) check, null and undefined are considered equal each other and not equal to anything else
// ✨ For non strict equality check
console.log(null == undefined); // true


// ✨ For math and other comparisons (>, <, >=, <=)
// null/undefined are converted to numbers: null is treated as 0 and undefined is treated as NaN
// type of NaN(Not a Number) is number but an invalid number

// weird behaviour 
console.log(null > 0); // false
console.log(null == 0); // false, no conversion happens in null and undefined non strict equality check
console.log(null >= 0); // true because null is converted to 0



alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

// The only exception is the equality check (==) between null and undefined, which returns true.
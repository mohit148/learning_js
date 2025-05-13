// operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.
// to avoid this, we can use the strict equality operator === which checks for both value and type equality

console.log("" == 0); // true
console.log(0 == false); // true



// Solution
// The strict equality operator === checks for both value and type equality 
// it does not perform type coercion and directly compares the values
// while == first converts the operands to the same type before making the comparison
// so if the operands are of different types, it returns false



console.log("" === 0); // false
console.log(0 === false); // false
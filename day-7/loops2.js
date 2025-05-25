// "for" loop in JavaScript

// Syntax:
// for (begin; condition; step) {
//     // loop body
// }

// Explanation of each part:
// begin      -> let i = 0   // Executes once when the loop starts.
// condition  -> i < 3       // Checked before every iteration. If false, the loop stops.
// body       -> alert(i)    // Executes if the condition is true.
// step       -> i++         // Executes after each iteration of the body.

// General algorithm:
// Run begin
// → (if condition → run body and then run step)
// → (if condition → run body and then run step)
// → (if condition → run body and then run step)
// → ...

// Example:
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Equivalent "if" version of the loop above:

let i = 0;
if (i < 3) {
  alert(i);
  i++;
}
if (i < 3) {
  alert(i);
  i++;
}
if (i < 3) {
  alert(i);
  i++;
}
// Loop ends here because i == 3

// ---------------------------------------------------

// We can omit the 'begin' and/or 'step' parts of a for loop:

// Omitting 'begin':
let j = 0;
for (; j < 3; j++) {
  alert(j); // Outputs: 0, 1, 2
}

// Omitting both 'begin' and 'step':
let k = 0;
for (; k < 3; ) {
  alert(k++);
}
// This is functionally equivalent to a while loop:
// while (k < 3) { alert(k++); }

// ---------------------------------------------------

// Creating an infinite loop:
// All parts can be omitted:
for (;;) {
  // Repeats forever (until a break or return is used)
}

// ---------------------------------------------------

// Note:
// Variable declaration (like let i = 0) can be done outside the loop, as shown in examples above.



// further read loop2of2.js

// breaking the loop



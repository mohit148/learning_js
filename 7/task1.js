// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  console.log( i-- );
}

// The loop runs while i is truthy.

// 0 is falsy in JavaScript, so the loop stops when i becomes 0.

// Therefore, it prints: 3, 2, 1  and then stops.





// ------------------------------------------------------------------------------------------------------------------
//  task 2
// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:

// 1:

// let i = 0;
// while (++i < 5) alert( i );
// The postfix form i++

// 2:
// let i = 0;
// while (i++ < 5) alert( i );
// solution

// for "1" it prints 1, 2, 3, 4
// for "2" it prints 0, 1, 2, 3, 4
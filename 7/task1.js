// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  console.log( i-- );
}

// The loop runs while i is truthy.

// 0 is falsy in JavaScript, so the loop stops when i becomes 0.

// Therefore, it prints: 3, 2, 1  and then stops.






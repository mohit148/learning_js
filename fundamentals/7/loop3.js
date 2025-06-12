// continue

for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i)
}

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    continue
  } console.log(i);
} // prints odd number till 100, continue statment skips all the number which are divisible by 2 i.e even numbers


//  continue statment stops the current iteration and forces the loop to start a new one (if the condition allows).

// the second loop can also be created using :
for (let i = 0; i < 100; i++) {
  if (i % 2) {
    console.log(i);
  }
}


// Short Summary:
// i % 2 gives the remainder when i is divided by 2 (either 0 or 1).

// (i % 2) is true when i is odd(1), false when even(0)

// * break/continue cannot be used in ternary operator, it can only be used in loops.
// * because turnery operator only evaluates the expression and returns a value, it does not control the flow of execution like loops do.
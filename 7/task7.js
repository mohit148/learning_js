// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = 10;
prime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <i; j++) {
    if (i % j == 0) {
      continue prime;
    }
  }
  console.log(i);
}
  

// 💡 So what exactly is happening?
// The code is:

// Taking a number i from 2 to 10.

// Checking if any number from 2 to i - 1 divides i.

// If yes → skip it (not prime).

// If no → print it (prime).







// 🔸 i = 2
// Inner loop: j = 2; j < 2; → This is false immediately, so the inner loop doesn't run at all.

// No divisor found ⇒ 2 is prime.

// So, it prints 2.

// 🔸 i = 3
// Inner loop: j = 2; j < 3;

// 3 % 2 = 1 → not divisible.

// Inner loop finishes with no j dividing 3.

// So, it prints 3.

// 🔸 i = 4
// Inner loop: j = 2; j < 4;

// 4 % 2 = 0 → divisible!

// So, it jumps to the next i (i = 5) using continue prime;.

// Nothing printed for 4.

// 🔸 i = 5
// 5 % 2 = 1

// 5 % 3 = 2

// 5 % 4 = 1

// No divisors → prime → print 5.

// 🔸 i = 6
// 6 % 2 = 0 → divisible!

// Not prime → skip → nothing printed.

// 🔸 i = 7
// 7 % 2 = 1

// 7 % 3 = 1

// 7 % 4 = 3

// 7 % 5 = 2

// 7 % 6 = 1

// No divisors → prime → print 7

// 🔸 i = 8
// 8 % 2 = 0 → divisible → not prime → skip

// 🔸 i = 9
// 9 % 2 = 1

// 9 % 3 = 0 → divisible → skip

// 🔸 i = 10
// 10 % 2 = 0 → divisible → skip


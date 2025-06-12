// while loop

// syntax

// while (condition) {
//     //code
// }

let i = 0
while (i < 100) {

    console.log(i)
    i++
}
// as long i is less than 100 it keeps running the block {} code and print 0 to 99 one by one

// A single execution of the loop body is called an iteration.
// The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat(in theory) forever.
// In practice, the browser provides ways to stop such loops, and in server - side JavaScript,
// we can kill the process.





// do..while
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 0);
// this is same as while
// the only difference is block code is excuted before the condition
// do..while can be used when we need to execute the block code atleast once
//  (even if the  condition is false)



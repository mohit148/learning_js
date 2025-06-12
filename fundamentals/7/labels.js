// Labels in loops are used to break or continue a specific loop when there are nested loops.

// Understanding control flow in nested loops:

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    // How to exit here to Done (outside both loops)?
  }
}
alert("Done!");

// Outer loop runs step by step.
// Inner loop runs fully for each outer loop iteration.
// Execution order:
// i = 0
//   j = 0, 1, 2
// i = 1
//   j = 0, 1, 2
// i = 2
//   j = 0, 1, 2

// Same logic applies to any number of nested loops.

// To break out of both loops at once, use a label:

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break outer; // breaks out of both loops immediately
  }
}
alert("Done!");

// continue can also be used with labels to skip to the next iteration of the labeled loop:

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == 1) continue outer; // skip the rest of outer loop when i == 1
    console.log(`i=${i}, j=${j}`);
  }
}

// You can also label simple blocks and break out of them:

myLabel: {
  console.log("Inside");
  break myLabel; // exits the labeled block here
  console.log("This will NOT execute");
}

// Jump statement(break, continue and return , we will cover return later) are used to control the flow of execution in loops or blocks.:
// - Jump over: continue skips the rest of current iteration and goes to next iteration.
// - Jump out: break exits completely from current loop or labeled block.

// break label; means jump out of the labeled loop/block you’re inside.
// continue label; means jump over to the next iteration of the labeled loop.

// Important:
// A break labelName; can only jump out of a block or loop that currently wraps the statement.
// If the label is outside the current block (out of scope), the jump is not allowed and causes an error.

// Example of break with a label out of scope (will cause error):

// break label2;
// label2: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i == 1) break label2; // tries to break out of label2
//     console.log(`i=${i}, j=${j}`);
//   }
// }
// The above will not work if break is used outside label2's scope.

// Older languages like C have goto statements that jump to a specific code part, but they are discouraged now because they make code hard to read.

// Imaginary example of goto:

// if (x > 10) {
//   goto labelName; // jumps to labelName
// } else if (x < 10) {
//   goto anotherLabel; // jumps to anotherLabel
// }

// labelName: {
//   console.log("This is the label");
// }

// JavaScript has no goto, but labels + break/continue can achieve similar controlled jumps within loops/blocks.

// So remember:
// break labelname; ≠ goto labelname;
// This confusion is common but they are not the same.

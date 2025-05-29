// while (true) {
//   let input = prompt("write your age");
//   let num = +input;
//   if (input === null) {
//     alert("Cancelled");
//     break;
//   } else if (!(num > 60)) {
//     // can also use (num <= 100) instead of !(num > 60)
//     alert(
//       "sorry but you're not eligible for the pension. it is only for senior citizens older than 60"
//     );
//     break;
//   } else if (num > 60) {
//     let num2 = +prompt("write your age again to confirm");
//     if (num == num2) {
//       alert(`you are ${num} yers old nice, you're eligible for the pension`);
//       break;
//     } else {
//       alert("please write a valid age that you had wrote before");
//     }
//   }
// }


// more better code: with isNaN and trim function:

while (true) {
  let input = prompt("Write your age");

  // Check if user canceled
  if (input === null) {
    alert("Cancelled");
    break;
  }

  // Trim input to remove spaces
  input = input.trim();

  // Check if input is empty or not a number
  if (input === "" || isNaN(input)) {
    alert("Please enter a valid number.");
    continue; // ask again
  }

  let num = +input;

  if (!(num > 60)) {
    alert(
      "Sorry but you're not eligible for the pension. It is only for senior citizens older than 60"
    );
    break;
  } else {
    let input2 = prompt("Write your age again to confirm");

    if (input2 === null) {
      alert("Cancelled");
      break;
    }

    input2 = input2.trim();

    if (input2 === "" || isNaN(input2)) {
      alert("Please enter a valid number.");
      continue; // ask confirmation again
    }

    let num2 = +input2;

    if (num === num2) {
      alert(`You are ${num} years old, nice! You're eligible for the pension.`);
      break;
    } else {
      alert("Please write the same age again for confirmation.");
    }
  }
}





// read tips/tip.md
// also see if we can write the 2nd above code using if else if else if instead of if..if...if
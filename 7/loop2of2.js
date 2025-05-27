// function loop1() {
//   let sum = 0;

//   while (true) {
//     let num = Number(prompt("Write a number to sum"));

//     if (!num) {
//       // alert("cancelled");
//       break;
//     }
//     sum += num;
//   }
//   alert("Current sum: " + sum);
// }


// function loop1() {
//   let sum = 0,
//     cancelled = false;

//   while (true) {
//     let input = prompt("Write a number to sum");

//     if (input === null) {
//       cancelled = true;
//       break;
//     }

//     if (!input.trim()) break;

//     let num = Number(input);
//     if (isNaN(num)) continue;

//     sum += num;
//   }

//   alert(cancelled ? "cancelled" : "Current sum: " + sum);
// }


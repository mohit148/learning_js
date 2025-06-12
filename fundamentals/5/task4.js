// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a+b < 4) ? "Below" : "Over";

// TASK 5
// Rewrite 'if..else' into '?'
// importance: 5
// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }



let message2 =
  login == "Employee"
    ? "Hello"
    : login == "Direcctor"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'firefox':
//     alert( "nice, you like open source browser like firefox" );
//     break;

//   case 'chrome':
//   case 'edge':
//   case 'opera':
//     alert( 'Okay you like chromium based browsers' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser === "firefox") {
  alert("nice, you like open source browser like firefox");
} else if (browser === "chrome" || browser === "edge" || browser === "opera") {
  alert("Okay you like chromium based browsers");
} else {
  alert("We hope that this page looks ok!");
}
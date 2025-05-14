// multiple ?
// A sequence of ternary operators ? can return a value that depends on more than one condition.
let message = (age < 3) ? 'Hi!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// The code above is equivalent to this if-else statement:
if (age < 3) {
  message = 'Hi!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// no matter how many conditions we have there are always three operands: a condition, a value if true, and a value if false.
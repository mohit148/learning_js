// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//   Will the function work differently if else is removed?
  
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
//   Is there any difference in the behavior of these two variants?


//-------------------------------------------------------------------------------

// No, there is no difference in behavior between the two versions.

// Examining the first function:
// If age > 18 is true, the if block executes and returns true. The else block is skipped.

// If age > 18 is false, the else block executes and returns the result of confirm('Did parents allow you?').

// Examining the second function:
// If age > 18 is true, the if block executes and returns true.

// Once return is executed, the function exits immediately, and no further code is run.

// If age > 18 is false, the if block is skipped, and the next line (return confirm(...)) is executed.


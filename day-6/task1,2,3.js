// ❔ What is the code below going to output ❔

alert( null || 2 || undefined ); // 2

// ❔ What will the code below output ❔

alert( alert(1) || 2 || alert(3) );

// In JavaScript, function arguments are evaluated before the function is called.(ECMASCRIPT specification or rule)

// The || operator evaluates operands from left to right and returns the first truthy value.

// So, alert(1) runs first and displays 1 in a popup. It returns undefined.

// Next, 2 is a truthy value, so the rest of the expression (alert(3)) is not evaluated.

// Therefore, we are left with:

// alert(undefined || 2 || UNDEFINED);
// → alert(2);





// ❔ What is this code going to show ❔

alert( 1 && null && 2 );

// null, because of being first falsy value after evaluating from left to right

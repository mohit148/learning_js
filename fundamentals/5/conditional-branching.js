// Topic: If-Else Statements
let name1 = prompt("Enter your name: ");
if (name1) {
alert("Hello " + name1);
} else { 
    alert("Hello stranger"); 
}

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.


/* When using `prompt()` in JavaScript:

* If the user **enters something and clicks OK**:

  * The prompt returns a `string` (even numbers are returned as strings).
  * The `if (value)` condition becomes true if the string is non-empty.

* If the useclicks OK with nothing typed:

  * The prompt returns an empty string "", which is falsy.
  * if (value)` becomes false.

* If the user **clicks Cancel**:

  * The prompt returns `null`.
  * typeof null` is `object` (due to a historical JavaScript quirk).
  * null` is falsy, so `if (value)` becomes false.

This explains how values returned by `prompt()` behave in `if` conditions and how their types are interpreted.*/

// another example with sevreral conditions
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
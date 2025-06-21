// Polyfills and Transpilers

// Modern JavaScript introduces many new features. However, not all browsers — especially older ones — support these features.
// To ensure your code works everywhere, we use **polyfills** and **transpilers**.



// Polyfills

// Polyfills are scripts that add support for newer JavaScript features in older environments that don’t support them natively.
// (that environment could be a browser, Node.js, or Deno — all of which use a JavaScript engine)
// (read abc.js for more details about environments and engine)
// For example, the method `Math.trunc()` may be missing in older JavaScript engines. We can add it manually:


if (!Math.trunc) {
  Math.trunc = function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };
}


// Now you can safely use `Math.trunc()` even in older browsers.

// * Polyfills are commonly used for features like:

//   * `Promise`
//   * `fetch()`
//   * `Array.from()`
//   * `Object.assign()`, and more.

// Note: We didn’t use `let` or `const` here because `Math` is a built-in global object. We're simply adding a new method to it.



// Transpilers

// **Transpilers** are tools that convert modern JavaScript code into older versions that older browsers can understand.

// A popular transpiler is [Babel](https://babeljs.io/), which converts ES6+ code into ES5.

// Example:


// Modern (ES6+)
const greet = (name) => `Hello, ${name}!`;

// After transpiling to ES5
var greet2 = function(name) {
  return "Hello, " + name + "!";
};


// Transpilers allow you to use modern features like:

// * Arrow functions
// * Classes
// * Template literals
// * Optional chaining
// * And even languages like TypeScript

// This ensures your code works consistently across all browsers, even outdated ones.



// ### Summary

// | Tool           | Purpose                                                |
// | -------------- | ------------------------------------------------------ |
// | Polyfill   | Adds missing features at runtime by defining them manually |
// | Transpiler | Converts modern syntax to older syntax before running it   |

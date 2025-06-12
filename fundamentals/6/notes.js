// every function in javascript returns a value
// if we dont return anything explicitly, it returns undefined

// example
function add(a, b) {
  return a + b;
}

let result = add(2, 3);

console.log(add(2, 3)); // 5
console.log(result); // 5

// example of function returning undefined
function showAlert() {
  alert("Hello world");
  // no return statement
  // so it returns undefined
}

showAlert(); // undefined
let alertResult = showAlert(); // undefined
console.log(showAlert()); // undefined
console.log(alertResult); // undefined


// in fact alert() and console.log() themselved are functions with no return value

// example
let  a = console.log()
console.log(a) // undefined
// try writing console.log() or console.log(anything) in browser console, it will return undefined
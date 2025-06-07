// 3. Outer Variables
// Functions can access and modify variables defined outside their scope:
let userName = "John";

function showMessage() {
  userName = "Bob"; // Modifies the outer variable
  alert("Hello, " + userName);
}

alert(userName); // John
showMessage(); // Hello, Bob
alert(userName); // Bob

// if a local variable with the same name is declared inside the function, it shadows the outer variable:
let userName1 = "John";

function showMessage() {
  let userName1 = "Bob"; // Local variable
  alert("Hello, " + userName1);
}

showMessage(); // Hello, Bob
alert(userName1); // John


//4. Parameters
// Functions can accept parameters, which are values passed to the function when it is called.
function greet(name) {
    alert('Hello, ' + name);
  }
  
greet('Alice'); // Hello, Alice
  
// If parameter is not provided, it will be `undefined`:
// in other words if we dont explicitly return a value from the function, it will return `undefined` by default.
function add(a, b) {
    let sum = a + b;
    // No return statement
}
let result = add(5, 3); 
console.log(result); // undefined
// parameters are also a type of local variable, so they are not accessible outside the function:



// When a value is passed as a function parameter, it’s also called an argument.

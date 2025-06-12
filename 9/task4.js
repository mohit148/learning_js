// method 1 - Using variables directly
function pow() {
  let x = Number(prompt("Enter base (x):"));
  let n = Number(prompt("Enter exponent (n):"));
  alert(x ** n);
}

// method 2 - using parameters

function pow(x,n) {
    return x**n
}

function askInput() {
let x = Number(prompt("Enter base (x):"));
let n = Number(prompt("Enter exponent (n):"));
    if (n >= 0) {
        alert(pow(x,n));
    } else {
        alert("please write n greater or equals to zero")
    }
}
// we can add more checks in the code if we want like isNaN, undefined, null, ""


// method 3

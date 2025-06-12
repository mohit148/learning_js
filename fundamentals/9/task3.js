// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
    if (a > b) {
        return b
    } else {
        return a
    }
}

console.log(min(3, -1))

// using ternary operator
function min2(a, b) {
    return (a > b) ? b : a
}

console.log(min2(-4, 8))



// if a===b then it does not matter as it will print the same value
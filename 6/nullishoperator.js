// Nullish coalescing
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

console.log(undefined ?? "hello world") // "hello world"

let username;
console.log(username ?? "Anonymous") // Anonymous



// nullish coalescing ?? operator is same as writing
username = (username !== null && username !== undefined) ? username : "Anonymous"
// if else version of above code

// if (username !== null && username !== undefined) {
//   result = username;
// } else {
//   result = "Anonymous";
// }
  
  
console.log(username) // Anonymous



// so || and ?? are almost same the only difference is || returns first falsy value
// whereas ?? returns first defined value (which includes 0, false, empty string)


// Precedence of ?? is same as ||
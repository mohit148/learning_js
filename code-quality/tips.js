// ❌ Examples of bad coding (what you should avoid):
// Reusing the same variable for different things
// Example: using user first for a username, then later using user for an ID. This is confusing.

// Using names like _, __x, or niceItem
// These names look fancy but mean nothing. It's hard to know what they do.

// Hiding things in functions
// A function like checkEmail() should only check — but if it also changes something in the page, that’s bad.


// Using the same name in different scopes
// Like having a user variable outside a function, and then using another user inside. This makes it unclear which one is being used



//-----------------------------------------------------------------------------------
//1 ✅ Use continue, return, or break statements when conditions are not met to avoid unnecessary code execution.

// 2. Break long lines into shorter ones for better readability.
// If it’s a string, use backticks (template literals).

// ✅ Example:
// // ❌ Hard to read
let a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ✅ Easier to read
let b = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`

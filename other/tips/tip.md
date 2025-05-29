* ✅ Use `isNaN()` to check if an input is a valid number when using `prompt()`.

* ✅ Use `.trim()` to clean up extra spaces from the user's input, especially before checking if it's empty.

> 💡 **TIP:**  
> Always store `prompt()` input in a separate variable before converting it to a number.  
> This helps you check for `null` or an empty string correctly and avoid accidental conversion of `null` to `0`.

## ❌ Wrong way:
```js
let age = +prompt("Enter your age");

if (age === null) {  // ❌ This will never be true, because null became 0
  alert("Cancelled");
}
```

### Problem:
- If the user presses Cancel, `prompt()` returns `null`, but `Number(null) or +null` becomes `0`.
- So `age` becomes `0`, not `null`, and the check fails.

## ✅ Correct way:
let input = prompt("Enter your age");

```js
if (input === null || input.trim() === "") {
  alert("Cancelled");
} else {
  let age = +input;
  alert("You entered age: " + age);
} 
```

Now, `input` is checked for cancellation or emptiness **before** conversion.  
This makes your code safer and the logic clearer.



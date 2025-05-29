* Keep the order of changes, conversions, and variable declarations systematic and in sequence.
Perform each action only just before it is needed

```js
let input = prompt("Enter your age");
if (input === null) break;      // check for cancel
input = input.trim();           // only trim before it's needed
if (input === "") alert("Empty");  // check for empty
let num = Number(input);        // convert to number just before using it
if (isNaN(num)) alert("Not a number");
```



* trim() should happen before Number(input), so you don't convert " 105 " to NaN.


* ✅ Always check for prompt cancellation first, before converting to a number. If you convert null to a number first,
it becomes 0, which makes the condition if (input === null) false and prevents the statement from executing.



### ✅ **Main Critical Checks**

1. **`if (input === null)`**

   * 🔸 Must check **before** trimming or converting.
   * ❗ If you convert first (`Number(null)` becomes `0`), you lose the ability to detect cancel.

2. **`input = input.trim()`**

   * 🔸 Do this **after** null check.
   * ❗ Trimming `null` throws an error because `null.trim()` is invalid.

3. **`if (input === "")`**

   * 🔸 Must check after trim.
   * ❗ A user typing only spaces becomes `""` after trimming.

4. **`let num = Number(input)`**

   * 🔸 Do this **after** checking null and empty string.
   * ❗ `Number("")` becomes `0`, which is misleading.

5. **`if (isNaN(num))`**

   * 🔸 Check right after conversion.
   * ❗ Prevents cases like `"abc"` which turns into `NaN`.

---

### 🧠 Key Rule:

> 🔄 Always check **for `null`, then empty, then convert**, and only then check numerical conditions.


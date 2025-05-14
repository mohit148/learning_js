// multiple ?
// A sequence of ternary operators ? can return a value that depends on more than one condition.
let message = (age < 3) ? 'Hi!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// The code above is equivalent to this if-else statement:
if (age < 3) {
  message = 'Hi!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

/* **ternary operator** always has **three operands**:

condition ? ifTrue : ifFalse

### 🔷 What If You Have Multiple Conditions?

When you write something like:

let message = age < 3 ? "Hi"
             : age < 18 ? "Hello"
             : age < 100 ? "Greetings"
             : "What an unusual age";

It looks like you're using more than three operands, but you're actually **nesting** multiple ternary operations.


### 🔷 How Nesting Works

Each ternary still has just **three operands**, but the third operand (`ifFalse`) can **itself be another ternary expression**.


age < 3 ? "Hi" 
: age < 18 ? "Hello" 
: age < 100 ? "Greetings" 
: "What an unusual age"


// is equivalent to:

age < 3
  ? "Hi"
  : (age < 18
      ? "Hello"
      : (age < 100
          ? "Greetings"
          : "What an unusual age"));


### 📊 Breakdown Table

| Ternary # | Condition   | If True       | If False                |
| --------- | ----------- | ------------- | ----------------------- |
| 1         | `age < 3`   | `"Hi"`        | → 2nd ternary           |
| 2         | `age < 18`  | `"Hello"`     | → 3rd ternary           |
| 3         | `age < 100` | `"Greetings"` | `"What an unusual age"` |

---

### key points:

> 🔁 In nested ternary expressions, the **third operand** can be **another ternary**, forming a chain.

> ✅ But each individual ternary still has **exactly 3 operands**, which is why it's called a **ternary operator** — no matter how many you chain.*/
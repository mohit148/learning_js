// In Javascript data types can be classified into two categories:
// 1. Primitive data types: string, number, boolean, null, undefined, symbol
// 2. Non-primitive data types: object, array, function

// Primitive data types are copied by value, while non-primitive data types are copied by reference.

// Objects
// An object is a collection of key-value pairs, where the keys are strings (or Symbols) and the values can be any data type.
// Its like a book shelf where each book has a title (key) and content (value).
// Objects can hold multiple values in a single variable, making them versatile for storing complex data structures
// Objects are mutable, meaning you can change their properties and values after they are created.

// In JavaScript, a "key" is the name (string or Symbol) used to identify a value in an object.
// A "property" refers to the key-value pair itself (the key and its associated value).
// Example:
const person = { name: "Alice", age: 25 };
// Here, "name" and "age" are keys; "Alice" and 25 are their values; together, they form properties of the object.


// Creating an object
// we can create an object using object literal notation or the Object constructor.
// 1. Object Literal Notation
const person1 = {}

// 2. Object Constructor
const person2 = new Object();

// object literal notation is the most common way to create an object in JavaScript.

// example of an object
const person3 = {
  name: "Alice",
  age: 25,
  isStudent: false,
  hobbies: ["reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "Wonderland"
    },
  greet: function() {
      return `Hello, my name is ${this.name}`
    }
};

// Accessing object properties
// You can access object properties using dot notation or bracket notation.
// 1. Dot Notation
console.log(person3.name); // Output: Alice
console.log(person3.address.city); // Output: Wonderland
console.log(person3.greet()); // Output: Hello, my name is Alice
// 2. Bracket Notation
console.log(person3["age"]); // Output: 25
console.log(person3["address"]["street"]); // Output: 123 Main St

// nested properties can be accessed using multiple bracket notations as shown above.

// Note: if you are adding a space in the key name, you must use bracket notation (dot notation will not work for keys with spaces).
// and you must use quotes around the key name.

// Example of accessing a property with a space in the key name
const person4 = {
    "first name": "Bob",
    "last name": "Smith"
};
console.log(person4["first name"]); // Output: Bob

// Adding and modifying properties
// You can add new properties or modify existing ones using either dot notation or bracket notation.

// Adding a new property
let testobj = {};
testobj.email = "mohit@gmail.com"
console.log(testobj.email); // Output: mohit@gmail.com

// Modifying an existing property
testobj.email = "manu@gmail.com"
console.log(testobj.email); // Output: manu@gmail.com

// Deleting properties
// You can delete properties from an object using the `delete` operator.
delete testobj.email;
console.log(testobj.email); // Output: undefined (property is deleted)

// Note: you can access a property that does not exist in an object, but it will return `undefined`.

// Checking if a property exists
// # "in" operator
// You can check if a property exists in an object using the `in` operator.
console.log("name" in person3); // Output: true
console.log("email" in person3); // Output: false (email property does not exist)



// property shorthand
// property shorthand allows you to create an object with properties that have the same name as the variables.

function getUser(name,age) {
    return {
        name: name,
        age: age
    }
}
// Note that the above function returns an object  with keys that are the same as the variable names.


let obj = getUser("John", 30);
console.log(obj); // Output: { name: 'John', age: 30 }


// key names are not effected by the variable names, they will always be the same as the key names defined in the object.

/*
// to change the key names, we can use the square bracket notation to set the key names dynamically.
// "Dynamically" means the key names are determined at runtime, not hardcoded. 
// "Runtime" refers to the period when the code is actually running (executing), so values can be set or changed based on user input, variables, or other logic.
// "Hardcoded" means the values are fixed directly in the code and do not change when the program runs.
// For example, you can use a variable as the key name:
let keyName = "score";
let objDynamic = {
    [keyName]: 100
};
console.log(objDynamic); // Output: { score: 100 } */



let fruit = prompt("Enter a fruit name: ", "apple");
function inventory(fruit) {

    if (fruit !== "apple" && fruit != "banana" && fruit != "orange") {
        alert("Invalid fruit name. Please enter apple, banana, or orange.");
        return;
    } else {return {
        [fruit]: 5,
    }}
}

let dynamicObj = inventory(fruit);
// The key name is set dynamically based on the user input from the prompt.
console.log(dynamicObj); 

// let abc = "xyz"

// let a = {
//     abc,
// }
// console.log(a); // Output: { abc: 'xyz' }



// use case example of computed property

let user = 
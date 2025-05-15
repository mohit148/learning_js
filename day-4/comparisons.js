let a = 3,
  b = 2;
c = "3";
console.log(a < b); // false
console.log(a > b); // true
console.log(a <= b); // false
console.log(a >= b); // true
console.log(a == b); // false
// == checks for value equality while === checks for value and type equality and = is an assignment operator
console.log(a != b); // true
// != checks for value inequality while !== checks for value and type inequality
console.log(a !== c); // false, same value but different type
console.log(a !== b); // true, different value and type

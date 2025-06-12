// Use the for loop to output even numbers from 2 to 10.

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// if we dont want to print 0 then use:

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0 && i !== 0) {
    console.log(i);
  }
}

// or


for (let i = 2; i <= 10; i++) {
  if (i % 2==0) {
    console.log(i);
  }
}



// or 
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}


// or 
for (let i = 2; i <= 10; i++) {
  if (i & 1) continue; // skip odd numbers
  console.log(i);
}
// or
[1, 2, 3, 4, 5, 6,7,8,9,10].forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});
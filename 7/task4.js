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
  if (i % 2 == 0) {
    console.log(i);
  }
}
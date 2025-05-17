// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// first will execute as -1 is truthy value, (-1|| 0 = -1) 
// second will not execute as 0 is falsy value, (-1 && 0 = 0)
// third will execute as -1 is truthy value, (-1&& 1 = 1) which implices null || -1 && 1 = null || 1 = 1



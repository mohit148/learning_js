// What will this code show?

alert( alert(1) && alert(2) );

// 1 then undefined
// because && stops evaluating operands once it finds first falsy value which is alert(1) in this case as its equal to undefined


// What will the result be?

alert( null || 2 && 3 || 4 );

// 2&&3 = 3
// null || 3 || 4 = 3
// alert( null || 2 && 3 || 4 ); shows 3
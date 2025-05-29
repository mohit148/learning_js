let x = "1";
switch (x) {
    case  "1" : 
    console.log("x is a string '1'"); 
        break;

    default:
        console.log("x is not a string its " + typeof x); 
        break;
}


// Notes:;;;;;
// switch is used as the alternative of if-else statements when there are multiple conditions to check.


// syntax:
// switch (expression) {
//     case value1:
//         // code to execute if expression matches value1
//         break; // optional, exits switch block
//     case value2:
//         // code to execute if expression matches value2
//         break; // optional, exits switch block
//     // more cases as needed
//     default:
//         // code to execute if no cases match
//         break; // optional, exits switch block
// }


// Grouping cases:
// You can group multiple cases together if they should execute the same code:
let favFruit = prompt("enter a your favourite fruit or vegetable name from {apple, banana carrot, potato}"); 


switch (favFruit) {
  case "apple":
  case "banana":
    alert(`You entered ${favFruit}, which is a fruit!`);
    break;
  case "carrot":
  case "potato":
    alert(`You entered ${favFruit}, which is a vegetable!`);
    break;
  default:
    alert(
      "please enter a valid fruit or vegetable name from the given set"
    );
    break;
}

//Please note: the break at the bottom is not required

// If break is omitted, execution continues executing the next case(s) until a break is encountered or the switch ends. This is called "fall-through" behavior:
// switch statements uses strict equality (===) for comparisons, so types matter.


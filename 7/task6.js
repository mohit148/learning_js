/*Write a loop which prompts for a number greater than 100.
If the visitor enters another number – ask them to input again.*/

/*The loop must ask for a number until either the visitor enters a number 
greater than 100 or cancels the input/enters an empty line.*/

/*Here we can assume that the visitor only inputs numbers.
There’s no need to implement a special handling for a non-numeric input in this task.*/


while (true) {
  let input = prompt("write a number greator then 100");

  if (input === null) {
    alert("cancelled");
    break;
  }
  input = input.trim();
    let num = Number(input);
    
    // trim() should happen before Number(input), so you don't convert " 105 " to NaN.
    
  if (isNaN(input) || input == "" || num <= 100) {
    // isNaN checks if the input is not a Number
    alert("please enter a valid number");
    continue;
    // continue is optional here but it prevents the rest of the loop from executing making it cleaner and faster
  } else {
    alert(`so, you're ${num} years old`);
    break;
  }
}
















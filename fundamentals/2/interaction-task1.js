// Alert, Confirm, Prompt
// mini popup window in alert function is called a modal window

//  The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

// alert and prompt automatically convert the value to a string
// EXAMPLE : console.log(typeof alert(123)); // string




function AskName() {
  let permission = confirm("Do you wish to tell your name?");
  if (permission) {
    let name = prompt("Enter your name");
    alert(`Your name is ${name}`);
  } else {
    alert("cacelled");
  }
}
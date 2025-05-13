function convertToNumber() {
    let num = prompt("Enter a number:");
    alert(typeof num) // string
    
    let num2 = prompt("Enter a number again");
    alert(typeof Number(num2)) // string
    
}
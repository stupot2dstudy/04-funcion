"use strict";
/*VARIABLE TO MAKE A ROUND RAMDON NUMBER*/
var randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

while (true) {
  let input = prompt("Enter the password:");

  if (input === null) {
    // User clicked Cancel or closed the prompt
    alert("Operation canceled.");
    break;
  }

  if (input === randomNumber.toString()) {
    alert(`This is correct. The number is ${randomNumber}!`);
    break;
  } else {
    alert(`Sorry, the correct number is ${randomNumber}, try again!`);
  }
}

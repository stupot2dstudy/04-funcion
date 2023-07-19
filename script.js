"use strict";

var randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let attempts = 0;
const maxAttempts = 5;

while (attempts < maxAttempts) {
  let input = prompt("Enter a password between 0 to 100:");

  if (input === null) {
    // User clicked Cancel or closed the prompt
    alert("Operation canceled.");
    break;
  }

  // Use regex to check if the input is a valid number with a maximum of 3 digits
  if (/^\d{1,3}$/.test(input)) {
    // Convert the input to a number
    const numInput = parseInt(input);

    // Check if the number is within the range of 0 to 100
    if (numInput >= 0 && numInput <= 100) {
      attempts++;

      if (numInput === randomNumber) {
        alert(`Yes!! Congrats! The correct number is ${randomNumber}!`);
        break;
      } else {
        if (attempts < maxAttempts) {
          alert(
            `OOOH NOOO!!! Sorry try again! (Attempt ${attempts} of ${maxAttempts})`
          );
        } else {
          alert(
            `Sorry, you've reached the maximum number of attempts. The correct number is ${randomNumber}.`
          );
        }
      }
    } else {
      // If the number is not within the range, show an error message
      alert("Invalid input. Please enter a number between 0 to 100.");
    }
  } else {
    // If the input is not a valid number, show an error message
    alert(
      "Invalid input. Please enter a valid number with a maximum of 3 digits."
    );
  }
}

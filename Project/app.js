let secretNumber = generateSecretNumber();
let attempts = 1;

function assignText(element, text) {
  let title = document.querySelector(element);
  title.innerHTML = text;
  return;
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById("userValue").value);
  if (userNumber === secretNumber) {
    assignText(
      "p",
      `Yout got the secret number in ${attempts} ${
        attempts === 1 ? "attempt" : "attempts"
      }!`
    );
  } else {
    if (userNumber > secretNumber) {
      assignText("p", "The secret number is less");
    } else {
      assignText("p", "The secret number is greater");
    }
    attempts++;
  }
  return;
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

assignText("h1", "Guess the number!");
assignText("p", "Enter a number from 1 to 10:");

let secretNumber = generateSecretNumber();

function assignText(element, text) {
  let title = document.querySelector(element);
  title.innerHTML = text;
  return;
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById('userValue').value);
  return;
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

assignText("h1", "Guess the number!");
assignText("p", "Enter a number from 1 to 10:");

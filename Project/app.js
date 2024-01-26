let secretNumber = 0;
let attempts = 0;

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
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (userNumber > secretNumber) {
      assignText("p", "The secret number is less");
    } else {
      assignText("p", "The secret number is greater");
    }
    attempts++;
    cleanBox();
  }
  return;
}

function cleanBox() {
  document.querySelector("#userValue").value = "";
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function initialConditions() {
  assignText("h1", "Guess the number!");
  assignText("p", "Enter a number from 1 to 10:");
  secretNumber = generateSecretNumber();
  attempts = 1;
}

function gameReset() {
  cleanBox();
  initialConditions();
  document.querySelector('#reiniciar').setAttribute('disabled',true);
}

initialConditions();

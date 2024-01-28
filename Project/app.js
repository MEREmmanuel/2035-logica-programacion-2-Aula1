let secretNumber = 0;
let attempts = 0;
let secretNumbersList = [];
let maximunRange = 10;

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
  secretNumber = Math.floor(Math.random() * maximunRange) + 1;
  console.log(secretNumber);
  console.log(secretNumbersList);
  if (secretNumbersList.length == maximunRange) {
    assignText("p", "All the numbers have already been drawn");
  } else {
    if (secretNumbersList.includes(secretNumber)) {
      return generateSecretNumber();
    } else {
      secretNumbersList.push(secretNumber);
      return secretNumber;
    }
  }
}

function initialConditions() {
  assignText("h1", "Guess the number!");
  assignText("p", `Enter a number from 1 to ${maximunRange}:`);
  secretNumber = generateSecretNumber();
  attempts = 1;
}

function gameReset() {
  cleanBox();
  initialConditions();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

initialConditions();

let passwordLengthEl = document.querySelector("#length");
let upperCasesEl = document.querySelector("#upper");
let numbersEl = document.querySelector("#numbers");
let specialCharEl = document.querySelector("#special");
let generateBtnEl = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "1234567890";
let specials = '!@#$%^&*()_+-=[]{}|;:",.<>?/`~';

let allCharacters = "";
let password = "";
// take action upon clicking the generate password button
generateBtnEl.addEventListener("click", function () {
  if (lengthOfPassword()) {
    populateChars();
    generatePassword();
    alertWarning(passwordEl, 'lightBlue')
    passwordEl.textContent = password;
  }

  clear();

  allCharacters = "";
  password = "";
});

function generatePassword() {
  let x = lengthOfPassword();
  while (x > 0) {
    let i = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[i];
    x -= 1;
  }
}

// add to list of password characters based on user requirements
function populateChars() {
  allCharacters += lower;
  if (upperCasesEl.checked === true) {
    allCharacters += upper;
  }
  if (numbersEl.checked === true) {
    allCharacters += nums;
  }
  if (specialCharEl.checked === true) {
    allCharacters += specials;
  }
}

// validates length of password input and return it
function lengthOfPassword() {
  if (!passwordLengthEl.value) {
    alertWarning(passwordEl, 'red');
    passwordEl.textContent = "Enter Password Lenght!";
  } else if (passwordLengthEl.value < 8 || passwordLengthEl.value > 12) {
    alertWarning(passwordEl, 'red');
    passwordEl.textContent = "Enter Required Lenght!";
  } else {
    // reset old password before generating a new one
    passwordEl.textContent = "";
    return parseInt(passwordLengthEl.value, 10);
  }
}

// reset all input
function clear() {
  passwordLengthEl.value = "";
  upperCasesEl.checked = false;
  numbersEl.checked = false;
  specialCharEl.checked = false;
}

// change alert warning color to red
function alertWarning(element, textColour) {
  return (element.style.color = textColour);
}

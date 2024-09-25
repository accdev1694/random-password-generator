let passwordLengthEl = document.querySelector("#length");
let upperCasesEl = document.querySelector("#upper");
let numbersEl = document.querySelector("#numbers");
let specialCharEl = document.querySelector("#special");
let generateBtnEl = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");

let allCharacters = "";
let password = ""
// take action upon clicking the generate password button
generateBtnEl.addEventListener("click", function () {
  populateChars();
  generatePassword();
  clear();
  

  allCharacters = "";
  password = ''
});

function generatePassword() {
    let x = lengthOfPassword()
    while (x > 0) {
    let i = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters[i]
    x -= 1
    }
    
}

// add to list of password characters based on user requirements
function populateChars() {
  if (lengthOfPassword()) {
    allCharacters += "abcdefghijklmnopqrstuvwxyz";
    if (upperCasesEl.checked === true) {
      allCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbersEl.checked === true) {
      allCharacters += "1234567890";
    }
    if (specialCharEl.checked === true) {
      allCharacters += '!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
    }
  }
}

// validates length of password input and return it
function lengthOfPassword() {
  if (!passwordLengthEl.value) {
    alertWarning(passwordEl);
    passwordEl.textContent = "Enter Password Lenght!";
  } else if (passwordLengthEl.value < 8 || passwordLengthEl.value > 12) {
    alertWarning(passwordEl);
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
function alertWarning(element) {
  return (element.style.color = "red");
}

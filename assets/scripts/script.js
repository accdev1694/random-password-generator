const passwordLengthEl = document.querySelector("#length");
const upperCasesEl = document.querySelector("#upper");
const numbersEl = document.querySelector("#numbers");
const specialCharEl = document.querySelector("#special");
const generateBtnEl = document.querySelector("#generate");
const passwordEl = document.querySelector("#password");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "1234567890";
const specials = '!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
const copyEl = document.querySelector('#copy');

let allCharacters = "";
let password = "";
// take action upon clicking the generate password button
generateBtnEl.addEventListener("click", function () {
  if (lengthOfPassword()) {
    populateChars();
    generatePassword();
    alertUser(passwordEl, "lightBlue", password);
  }

  clear();

  allCharacters = "";
  password = "";
});

function generatePassword() {
  let len = lengthOfPassword();
  while (len > 0) {
    let randomIntegers = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIntegers];
    len -= 1;
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
    alertUser(passwordEl, "red", "Enter Password Lenght!");
    return;
  } else if (passwordLengthEl.value < 8 || passwordLengthEl.value > 12) {
    alertUser(passwordEl, "red", "Enter Required Lenght!");
    return;
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
function alertUser(element, textColour, message) {
  return (element.style.color = textColour, element.textContent = message);
}

// copy generated password to clipboard
copyEl.addEventListener('click', () => {
  if (passwordEl.textContent) {
    copyPassword(passwordEl.textContent)
  } else {
    alertUser(passwordEl, 'red', 'no text to copy!');  
  }
})

function copyPassword(textToCopy) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    alertUser(passwordEl, 'lightBlue', 'Password Copied')
  }).catch(err => {
    alertUser(passwordEl, 'red', 'failed to copy')    
  });
}
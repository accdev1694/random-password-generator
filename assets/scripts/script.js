let passwordLengthEl = document.querySelector("#length");
let upperCasesEl = document.querySelector("#upper");
let numbersEl = document.querySelector("#numbers");
let specialCharEl = document.querySelector("#special");
let generateBtnEl = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");

let allCharacters = "";
generateBtnEl.addEventListener("click", function () {
  const passwordLength = lengthOfPassword();
  clear();
  console.log(typeof passwordLength);
});

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
  specialCharEl.check = false;
}
// change alert warning color to red
function alertWarning(element) {
  return (element.style.color = "red");
}

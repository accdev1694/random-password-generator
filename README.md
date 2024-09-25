# random-password-generator
generates a random password after user specifies password length, characters including letters, uppercase, lowercase, numbers and special characters. there is also an option to copy to clipboard after generation

# Random Password Generator

A simple, intuitive web application to generate random passwords based on user-defined criteria. The generated password can include uppercase letters, numbers, and special characters, and can be copied directly to the clipboard. 

## Features

- **Customizable Password Length**: Choose a password length between 8 and 12 characters.
- **Uppercase Letters**: Option to include uppercase letters in the password.
- **Numbers**: Option to include numbers in the password.
- **Special Characters**: Option to include special characters.
- **Copy to Clipboard**: Generated password can be copied directly to the clipboard.

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the user interface.
- **JavaScript**: For implementing password generation logic and interactivity.

## How to Use

1. Open the application in a browser.
2. Enter the desired password length (between 8 and 12).
3. Select the options to include uppercase letters, numbers, or special characters by checking the corresponding radio buttons.
4. Click the **GENERATE** button to create a password.
5. The generated password will appear in the display area.
6. If needed, click the **COPY** button to copy the password to the clipboard.

## Project Structure

- `index.html` : The main HTML file that defines the structure of the app.
- `assets/style/style.css` : The CSS file for styling the application.
- `assets/scripts/script.js` : The JavaScript file that contains the logic for password generation and clipboard functionality.

## Code Overview

### HTML

The HTML form allows the user to specify the password requirements such as length, uppercase letters, numbers, and special characters.

###### HTML Code Overview:
```html
<form id="form-req">
  <div class="field">
    <label for="length">Password Length(8-12)</label>
    <input type="number" id="length" min="8" max="12" required placeholder="8"/>
  </div>

  <div class="field">
    <label for="upper">Include Uppercases:</label>
    <input class="radio" type="radio" id="upper"/>
  </div>
  <div class="field">
    <label for="numbers">Include Numbers:</label>
    <input class="radio" type="radio" id="numbers"/>
  </div>
  <div class="field">
    <label for="special">Include Special Characters:</label>
    <input class="radio" type="radio" id="special"/>
  </div>
</form>
```

### Javascript

The core logic for generating the password based on user input is handled in the script.js file. This includes:

- Validating user inputs.
- Generating random passwords.
- Copying the password to the clipboard.

##### Key functions:
- populateChars(): 
Populates the character pool based on user selections.
- generatePassword(): 
Generates a random password using the selected characters.
- lengthOfPassword(): 
Validates the password length input.
- clear(): 
Resets the form inputs.
- colorChange(): 
Changes the text color for displaying messages.
- copyPassword(): 
Copies the generated password to the clipboard.

###### Javascript Code Overview:
```javascript
generateBtnEl.addEventListener("click", function () {
  if (lengthOfPassword()) {
    populateChars();
    generatePassword();
    colorChange(passwordEl, "lightBlue");
    passwordEl.textContent = password;
  }
  
  clear();
  allCharacters = "";
  password = "";
});
```

## Future Enhancements
- Improved Error Handling: Provide more detailed feedback if the user fails to meet input criteria.
- Strength Indicator: Show a visual indication of the strength of the generated password.
- Persistent Options: Allow the app to remember user selections between sessions.
- make site responsive

## License
This project is open source and available under the MIT License. 

## Repository
https://github.com/accdev1694/random-password-generator

## Deployed Site
https://passgenandcopyapp.netlify.app/
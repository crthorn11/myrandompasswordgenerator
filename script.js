// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLengthInput = document.querySelector("#passwordLength");
var includeNumbersCheckbox = document.querySelector("#includeNumbers");
var includeUppercaseCheckbox = document.querySelector("#includeUppercase");
var includeSymbolsCheckbox = document.querySelector("#includeSymbols");
var includeLowercaseCheckbox = document.querySelector("#includeLowercase");
var noDuplicatesCheckbox = document.querySelector("#noDuplicates");

// Get references to the #generate element
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Write password to the #password input
function generatePassword() {
  var passwordLength = parseInt(passwordLengthInput.value);

  if (passwordLength < 8 || isNaN(passwordLength)) {
alert("Please enter a valid number equal to or greater than 8.");
return;
  }
//This is how I limit/ add min maximum
  if (passwordLength > 128) {
    alert("Please enter a number from 8 to 128.");
    return;
  }

  var includeNumbers = includeNumbersCheckbox.checked;
  var includeUppercase = includeUppercaseCheckbox.checked;
  var includeLowercase = includeLowercaseCheckbox.checked;
  var includeSymbols = includeSymbolsCheckbox.checked;
  var noDuplicates = noDuplicatesCheckbox.checked;
  

  var password = generateRandomPassword(passwordLength, includeNumbers, includeUppercase, includeLowercase, noDuplicates, includeSymbols);

  var passwordOutput = document.getElementById("password");

  passwordOutput.value = password;
}

function generateRandomPassword(length, includeNumbers, includeUppercase, includeLowercase, noDuplicates, Symbols) {
let charset = '';

if (includeNumbers) charset += '0123456789';   //learned to make sure the ifs match (I was missing include for example)
if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
if (includeSymbols) charset += '!@#$%^&*()_+=?><';

let password = '';
let charsetLength = charset.length;

while (password.length < length) {
   let randomChar = charset.charAt(Math.floor(Math.random() * charsetLength));

   if (noDuplicates && password.includes(randomChar)) continue;

   password += randomChar;
 }
    return password;
}

passwordLengthInput.addEventListener("input", function() {
  var value = parseInt(this.value);
  if (isNaN(value) || value < 8) {
    this.value =8;
  }else if (value > 128) {
    this.value = 128;
  }
});

//First add an event listener for the btn "generate password" DONE

//I need to add length, letters, numbers, special characters etc for the computer to choose from DONE

//Then I need to have the computer target those arrays/var BY ADDING ELEMENTBYID DONE

//Then have it randomize the characters by using a built in random and Math.random DONE

//Give user option for what they would like the password to have DONE BY USING CHECK BOXES AND I WANTED TO USE SLIDER BUT COULD NOT FIGURE IT OUT DONE

//Display the randomized characters on screen for the user DONE

//I need to make a maximum length and a minimum length for the password when prompted by user of 8characters up to 128 DONE BY ADDING MIN MAX DONE


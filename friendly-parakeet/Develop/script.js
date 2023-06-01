// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("between 8 and 128 how many characters would you like your password to be?"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }
  const upperCase = confirm("Would you like to use uppercase letters?");
  const lowerCase = confirm("Would you like to use lowercase letters?");
  const numbers = confirm("would you like to use numbers?");
  const special = confirm("would you like to use special characters?");

  let possiblechar ="";

  if (upperCase) {
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCase) {
    possibleChars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbers) {
    possibleChars += "0123456789";
  }

  if (special) {
    possibleChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }



}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

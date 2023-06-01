// Assignment code here
function generatePassword() {
  const length = parseInt(prompt("how many characters would you like your password to be?"));
  
  const upperCase = confirm("Would you like to use uppercase letters?");
  const lowerCase = confirm("Would you like to use lowercase letters?");
  const numbers = confirm("would you like to use numbers?");
  const special = confirm("would you like to use special characters?");
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
generateBtn.addEventListener("click", writePassword, generatePassword);

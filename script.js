// Assignment Code
var generateBtn = document.querySelector("#generate");

// Gloval Variables
var newPass;
var lower;
var upper;
var numbers;
var spec;
var long;

// Query for password type and the calls generatePassword()
function getPassType() {

  generatePassword()
}

// Generates password based on query
function generatePassword(lower, upper, numbers, spec, long) {

}

// Write password to the #password input
function writePassword() {
    getPassType()
  
    var password = newPass
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);  
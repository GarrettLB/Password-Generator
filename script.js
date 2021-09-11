// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var newPass;
var lower;
var upper;
var numbers;
var spec;
var long;

// Query for password type, then calls generatePassword()
function getPassType() {

  generatePassword()
}

// Generates password based on query
function generatePassword(lower, upper, numbers, spec, long) {

  // variables
  const specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  newPass = []
  var Counter = long

  // while loop for pass length
  while (Counter > 0) {
    
    // if selected, characters log one at a time
    if (lower == true) {
      newPass += String.fromCharCode(Math.floor(Math.random() * 26) +97)
      Counter -= 1
      
      // each log checked to ensure loop breaks
      if (Counter == 0) {
        break
      }
    }
    if (upper == true) {
      newPass += String.fromCharCode(Math.floor(Math.random() * 26) +65)
      Counter -= 1
      if (Counter == 0) {
        break
      }
    }
    if (numbers == true) {
      newPass += (Math.floor(Math.random() * 10))
      Counter -= 1
      if (Counter == 0) {
        break
      }
    }
    if (spec == true) {
      newPass += specials[(Math.floor(Math.random() * specials.length))]
      Counter -= 1
      if (Counter == 0) {
        break
      }
    }
  }
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
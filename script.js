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

  // prompt for pass length
  long = Number(window.prompt("How many characters long would you like your password to be?", "(Plsease choose a number between 8 and 128)"));
  
  lengthSelected = false;
  
  while (lengthSelected == false) {
    
    // ensures valid answer
    if (long == null || long < 8 || long > 128 || isNaN(long)) {
      lengthSelected = false;
      alert("Invalid Input!");
      long = Number(window.prompt("How many characters long would you like your password to be?", 
                                        "(Plsease choose a number between 8 and 128)"));
    } else {
      lengthSelected = true;
    }
  }
  // validates selection
  alert("A length of " + long + " characters was selected for your password.");
  
  var lowerSelected = false
  var upperSelected = false
  var numSelected = false
  var specSelected = false

  // loop ensured at least one criteria is selected
  while (lowerSelected == false && upperSelected == false && numSelected == false && specSelected == false) {
  
    // lower case prompt
    let lower = Boolean(window.confirm("Would you like to include lower case letters in your password?\n(Ok for yes, Cancel for no)"));
    if (lower) {
      alert("Lower case letters will be included in your password.")
      lowerSelected = true
    }else {
      alert("Lower case letters will not be included in your password.")
      lowerSelected = false
    }
    
    // upper case prompt
    let upper = Boolean(window.confirm("Would you like to include upper case letters in your password?\n(Ok for yes, Cancel for no)"));
    if (upper) {
      alert("Upper case letters will be included in your password.")
      upperSelected = true
    }else {
      alert("Upper case letters will not be included in your password.")
      upperSelected = false
    }
    
    // numbers prompt
    let numbers = Boolean(window.confirm("Would you like to include numbers in your password?\n(Ok for yes, Cancel for no)"));
    if (numbers) {
      alert("Numbers will be included in your password.")
      numSelected = true
    }else {
      alert("Numbers will not be included in your password.")
      numSelected = false
    }
    
    // symbols prompt
    let spec = Boolean(window.confirm("Would you like to include special characters in your password?\n(Ok for yes, Cancel for no)"));
    if (spec) {
      alert("Special characters will be included in your password.")
      specSelected = true
    }else {
      alert("Special characters will not be included in your password.")
      specSelected = false
    }
    
    if (lowerSelected == false && upperSelected == false && numSelected == false && specSelected == false) {
      alert("At least one character type must be selected!")
    } 
  }
  // when finished, calls generatePassword
  generatePassword(lower, upper, numbers, spec, long)
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
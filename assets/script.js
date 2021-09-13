// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var newPass;
var ranArray;
var types;

var lower;
var upper;
var numbers;
var spec;
var long;

// Query for password type, then calls generatePassword()
function getPassType() {

  // prompt for pass length
  long = Number(window.prompt("How many characters long would you like your password to be?", "(Please choose a number between 8 and 128)"));
  
  lengthSelected = false;
  
  while (lengthSelected == false) {
    
    // ensures valid answer
    if (long == null || long < 8 || long > 128 || isNaN(long)) {
      lengthSelected = false;
      alert("Invalid Input!");
      long = Number(window.prompt("How many characters long would you like your password to be?", 
                                        "(Please choose a number between 8 and 128)"));
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

  // loop ensures at least one criteria is selected
  while (lowerSelected == false && upperSelected == false && numSelected == false && specSelected == false) {
  
    // lower case prompt
    lower = Boolean(window.confirm("Would you like to include lower case letters in your password?\n(Ok for yes, Cancel for no)"));
    if (lower) {
      alert("Lower case letters will be included in your password.")
      lowerSelected = true
    }else {
      alert("Lower case letters will not be included in your password.")
      lowerSelected = false
    }
    
    // upper case prompt
    upper = Boolean(window.confirm("Would you like to include upper case letters in your password?\n(Ok for yes, Cancel for no)"));
    if (upper) {
      alert("Upper case letters will be included in your password.")
      upperSelected = true
    }else {
      alert("Upper case letters will not be included in your password.")
      upperSelected = false
    }
    
    // numbers prompt
    numbers = Boolean(window.confirm("Would you like to include numbers in your password?\n(Ok for yes, Cancel for no)"));
    if (numbers) {
      alert("Numbers will be included in your password.")
      numSelected = true
    }else {
      alert("Numbers will not be included in your password.")
      numSelected = false
    }
    
    // symbols prompt
    spec = Boolean(window.confirm("Would you like to include special characters in your password?\n(Ok for yes, Cancel for no)"));
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
  const specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  newPass = []
  ranArray = []
  types = []

  // if statements for character types
  // pushes to ranArray if selected
  if (lower) {
    ranArray.push(1)
  }
  if (upper) {
    ranArray.push(2)
  }
  if (numbers) {
    ranArray.push(3)
  }
  if (spec) {
    ranArray.push(4)
  }

  // constructs a string using random number selections from ranArray
  // string stored in var types
  for (var i = 0; i < long; i++) {
    types += ranArray[(Math.floor(Math.random() * ranArray.length))]
  }

  // translates the numbers from (var types) to characters for final password
  for (var x of types) {
    
    if (x == 1) {
      newPass += String.fromCharCode(Math.floor(Math.random() * 26) +97)    
    }
    if (x == 2) {
      newPass += String.fromCharCode(Math.floor(Math.random() * 26) +65)    
    }
    if (x == 3) {
      newPass += (Math.floor(Math.random() * 10))    
    }
    if (x == 4) {
      newPass += specials[(Math.floor(Math.random() * specials.length))]    
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

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generator functions
function generatePassword(){
  //this will create a prompt when generate password is selected.
  enter = prompt("How long do you want your password characters to be? Please choose between 8 minimum to 128 maximum characters.")
  if (!enter) {
    alert("This needs a value please");
  }
  else if (enter < 8 || enter > 128){
    enter = parseInt(prompt ("You need to choose between 8 and 128, please （；¬＿¬)"));
  }
  else {
    confirmRandomLowerCase = confirm("Do you want LowerCase Letters?")
    confirmRandomUpperCase = confirm("What about UpperCase Letters?")
    confirmRandomSymbols = confirm("How about special symbols to spice it up?")
    confirmRandomNumbers = confirm("You can't forget about numbers, a lot of new age passwords require at least one number, so how about it?")
  }
}

//random generator functions for my Lower, upper, and Symbols.
function getRandomLower() {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  return lowerCase[Math.floor(Math.random() * lowerCase.length  )];
}

function getRandomUpperCase() {
  const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return UpperCase[Math.floor(Math.random() * UpperCase.length  )];
}

function getRandomSymbols() {
  const Symbols= '~!@#$%^&*()_-+<>?/;:';
  return Symbols[Math.floor(Math.random() * Symbols.length  )];
}
function getRandomNumbers() {
  const Numbers= '1234567890';
  return Numbers[Math.floor(Math.random() * Numbers.length  )];
}

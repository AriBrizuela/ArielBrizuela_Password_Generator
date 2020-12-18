
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
console.log(getRandomNumbers());

// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmRandomLowerCase;
var confirmRandomUpperCase;
var confirmRandomSymbols;
var confirmRandomNumbers;

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
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt ("You need to choose between 8 and 128, please （；¬＿¬)"));
  }
 
    else {
    //contunues after you choose a number above 8 and lower than 128
    confirmRandomLowerCase = confirm("Do you want LowerCase Letters?")
    confirmRandomUpperCase = confirm("What about UpperCase Letters?")
    confirmRandomSymbols = confirm("How about special symbols to spice it up?")
    confirmRandomNumbers = confirm("You can't forget about numbers, a lot of new age passwords require at least one number, so how about it?")
  };
  //This one is in case none of criterias were selected.
  if (confirmRandomLowerCase && confirmRandomUpperCase && confirmRandomSymbols && confirmRandomnumbers){
    choices = alert("You need to choose at least one of the choices!");
  }
  //This one is if all were selected
  else if (confirmRandomLowerCase && confirmRandomUpperCase && confirmRandomSymbols && confirmRandomnumbers){
    choices = contact(getRandomLower, getRandomUpperCase, getRandomSymbols, getRandomNumbers);
  }
  //if for 3 positive options
  else if (confirmRandomLowerCase && confirmRandomUpperCase && confirmRandomSymbols){
    choices =  contact(getRandomLower, getRandomUpperCase, getRandomSymbols)
  }
     
  else if (confirmLowerCase && confirmRandomUpperCase && confirmRandomNumbers){
    choices = contact(getRandomLower, getRandomUpperCase, getRandomNumbers);
  }
  else if (confirmRandomUpperCase && confirmRandomSymbols && confirmRandomNumbers){
    choices = contact(getRandomUpperCase, getRandomSymbols, getRandomNumbers)
  }
     
  else if (confirmLowerCase && confirmSymbols && confirmRandomNumbers){
    choices = contact(getRandomLower, getRandomSymbols, getRandomNumbers)
  }
    
  // If 2 are positive
  else if (confirmRandomLowerCase && confirmRandomUpperCase){
    choices = contact(getRandomLower, getRandomUpperCase)
  }
    
  else if (confirmRandomLowerCase && confirmRandomNumbers){
  choices = contact(getRandomLower, getRandomNumbers)
  }  

  else if (confirmRandomLowerCase && confirmRandomSymbols){
    choices = contact(getRandomLower, getRandomSymbols)
  }
   
  
  else if (confirmRandomUpperCase && confirmRandomNumbers){
    choices = contact(getRandomUpperCase, getRandomNumbers)
  }
    
  
  else if (ConfirmRandomUpperCase && confirmRandomSymbols){
    choices = contact(getRandomUpperCase, getRandomSymbols)
  }
    
  
  else if (confirmRandomSymbols && confirmRandomNumbers){
    choices = contact(getRandomSymbols, getRandomNumbers)
  }
  
  // For 1 choices
  else if (confirmLowerCase){
    choices = contact(getRandomLower)
  }
  
  
  else if (confirmRandomUpperCase){
    choices = contact(getRandomUpperCase)
  }
   
  else if (confirmRandomSymbols){
    choices = contact(getRandomSymbols)
  }
    

  else if (confirmRandomNumbers){
    choices = contact(GetRandomNumbers)
  }
    
}
  var password = [];

 

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

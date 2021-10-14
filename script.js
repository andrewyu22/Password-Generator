// Assignment code here
// Function to Enter a valid length or Loop it until it is valid
function passwordLength() 
{
  var length = window.prompt("Please input the length of the password.");
  if(length === "" || length === null)
  {
    window.alert("You need to provide a valid length. Please try again");
    return passwordLength();
  }
  while(length < 8 || length > 128)
  {
    window.alert("Please provide a length greater than 8 and less than 128");
    return passwordLength();
  }
  return parseInt(length);
}

// Generate Password Function
var generatePassword = function() 
{
  // storing all the lower/upper/number/special
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var password = 
  {
    length: passwordLength(),
    hasNumber: window.confirm("Would you like to include Numbers?"),
    hasLowerCase: window.confirm("Would you like to include Lower Case letters?"),
    hasUpperCase: window.confirm("Would you like to include Upper Case letters?"),
    hasSpecialChar: window.confirm("Would you like to include Special Characters?"),
    result: ""
  }
  debugger;
  // If all hasNumber/hasLowerCase/hasUpperCase/hasSpecialChar is false, give an error and start the function again
  if(password.hasLowerCase == false && password.hasUpperCase == false && password.hasNumber == false && password.hasSpecialChar == false)
  {
    console.log("Password needs at least lower case/Upper case/ number/ or special Characters");
    return generatePassword();
  }
  return password.result;
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
generateBtn.addEventListener("click", writePassword);

// Assignment code here
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Function to Enter a valid length or Loop it until it is valid
function passwordLength() 
{
  var length = window.prompt("Please input the length of the password.");
  if(length === "" || length === null)
  {
    window.alert("You need to provide a valid length. Please try again");
    return passwordLength();
  }
  else if(length < 8 || length > 128)
  {
    window.alert("Please provide a length greater than 8 and less than 128");
    return passwordLength();
  }
  return parseInt(length);
}
// Get users Criteria (If all are false Loop again)
function getUsersOption() 
{
  var option = {
    hasNumber: window.confirm("Would you like to include Numbers?"),
    hasLowerCase: window.confirm("Would you like to include Lower Case letters?"),
    hasUpperCase: window.confirm("Would you like to include Upper Case letters?"),
    hasSpecialChar: window.confirm("Would you like to include Special Characters?")
  }
  if(option.hasLowerCase === false && option.hasUpperCase === false && option.hasNumber === false && option.hasSpecialChar === false)
  {
    window.alert("Password needs to include at least one of the following Options.");
    return getUsersOption();
  }
  return option;
}
// Generate Password Function
var generatePassword = function() 
{
  var length = passwordLength();
  var options = getUsersOption();
  var password = "";
  debugger;
  // If all hasNumber/hasLowerCase/hasUpperCase/hasSpecialChar is false, give an error and start the function again
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

// Assignment code here
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Function to Enter a valid length or Loop it until it is valid
function passwordLength() 
{
  // Prompt Users to Input the length
  var length = window.prompt("Please input the length of the password.");
  // If they enter nothing / Null 
  if (length === "" || length === null || isNaN(length)) 
  {
    window.alert("You need to provide a valid length. Please try again");
    return passwordLength();
  }
  else if (length < 8 || length > 128) 
  {
    window.alert("Please provide a length greater than 8 and less than 128");
    return passwordLength();
  }
  return parseInt(length);
}
// Get users Criteria (If all are false Loop again)
function getUsersOption() {
  var option = 
  {
    combineArray: [],
    hasNumber: window.confirm("Would you like to include Numbers?"),
    hasLowerCase: window.confirm("Would you like to include Lower Case letters?"),
    hasUpperCase: window.confirm("Would you like to include Upper Case letters?"),
    hasSpecialChar: window.confirm("Would you like to include Special Characters?")
  }
  // If all hasNumber/hasLowerCase/hasUpperCase/hasSpecialChar is false, give an error and start the function again
  if (option.hasLowerCase === false && option.hasUpperCase === false && option.hasNumber === false && option.hasSpecialChar === false) 
  {
    window.alert("Password needs to include at least one of the following Options.");
    return getUsersOption();
  }
  // If hasLowerCase is true
  if (option.hasLowerCase) 
  {
    // Concat Global LowCasedCharacters Array to combineArray 
    option.combineArray = option.combineArray.concat(lowerCasedCharacters);
  }
  // If hasNumber is true
  if (option.hasNumber) 
  {
    // Concat Global Numeric Array to combineArray 
    option.combineArray = option.combineArray.concat(numericCharacters);
  }
  // If hasUpperCase is true
  if (option.hasUpperCase) 
  {
    // Concat Global upperCasedCharacters Array to combineArray
    option.combineArray = option.combineArray.concat(upperCasedCharacters);
  }
  // If hasSpecialChar is true
  if (option.hasSpecialChar) 
  {
    // Concat Global specialCharacters Array to combineArray
    option.combineArray = option.combineArray.concat(specialCharacters);
  }
  return option;
}

// Generates a random Char from the Combined Array
function randomGenerateChar(characters) 
{
  return characters[Math.floor(Math.random() * characters.length)];
}


// Generate Password Function
var generatePassword = function () 
{
  var length = passwordLength();
  var charArrays = getUsersOption();
  // Password function
  var password = function () 
  {
    var temp = [];
    var result = "";
    // While the Array is not equal to length input by users
    while (temp.length != length) 
    {
      // Random generate a Character from combineArry until it reach user's length
      temp.push(randomGenerateChar(charArrays.combineArray));
    }
    // Case check to make sure at least one of the characters meets the criteria users. If not restart the function again.
    if(charArrays.hasLowerCase)
    {
      if(!temp.some(x => lowerCasedCharacters.indexOf(x) > -1))
      {
        return password();
      }
    }
    if(charArrays.hasUpperCase)
    {
      if(!temp.some(x => upperCasedCharacters.indexOf(x) > -1))
      {
        return password();
      }
    }
    if(charArrays.hasNumber)
    {
      if(!temp.some(x => numericCharacters.indexOf(x) > -1))
      {
        return password();
      }
    }
    if(charArrays.hasSpecialChar)
    {
      if(!temp.some(x => specialCharacters.indexOf(x) > -1))
      {
        return password();
      }
    }
    // Combine the Array into a string
    result = temp.join('');
    // return the string
    return result;
  }
  return password();
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

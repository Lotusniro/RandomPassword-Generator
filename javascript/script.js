// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//function for getting password options

function getPasswordOptions() {
//1. Prompt the user for the length of the password
var length = parseInt(prompt("How many characters would you like your password to contain?"));
if (isNaN(length) || length < 8 || length > 128) {
  alert("Password length must be 8 to 128 characters. Please Try Again!");
  return null;
}
//confirm if the user wants to use special characters, numeric characters, lowercase characters, and uppercase characters
//if the click ok..it will return true if they click cancel it will return false
var hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
console.log(hasSpecialCharacters)
var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
console.log(hasNumericCharacters)
var hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
var hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");

if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
) {
  alert("Must select at least one character type");
  return null;
}

//store the user input in an object
var passOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};
console.log(passOptions);
return passOptions;


}
//getPasswordOptions()



function getRandom(arr) {
 var randomIndex = Math.floor(Math.random() * arr.length);
var randomElement = arr[randomIndex];
return randomElement;

}


function generatePassword() {
var options = getPasswordOptions();
console.log(options);

var possible = []; //this will store the possible characters to be used in the password
var result = [];//this will be the final password

//if the user said ok to special characters or numeric characters or lowercase characters or uppercase characters, then add those arrays to the possible array
//add all of the  characters to the possible array
if (options.hasSpecialCharacters) {
  possible= possible.concat(specialCharacters);

} 
if (options.hasNumericCharacters) {
  possible = possible.concat(numericCharacters);

} 
if (options.hasLowerCasedCharacters) {
  possible = possible.concat(lowerCasedCharacters);

}
 if (options.hasUpperCasedCharacters) {
  possible = possible.concat(upperCasedCharacters);

}


for (var i = 0; i < options.length; i++) {
  result.push(getRandom(possible));
  console.log(result);

}
return result.join(""); 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
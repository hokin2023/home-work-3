// Assignment code here
var passwordLength;
var passwordCriteria;
var upperConfirm;
var lowerConfirm;
var numberConfirm;
var specialConfirm;
var userChoices;

// characters
var lowerCaseL = ["a", "b", "c", "d", "e", "f",  "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCh = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var Upper = function (x) {
  return x.toUpperCase();
}
upperCaseL = lowerCaseL.map(Upper);
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

// Start  Function
function generatePassword() {
  passwordLength = parseInt(window.prompt("Password must be between 8 characters to 128 characters"));
  console.log("Password Length "+ passwordLength);

if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = window.alert("Please enter a valid password length");
  console.log("password length " + passwordLength);
}
else if (!passwordLength) {
passwordLength = window.alert("Enter number only");
}
else {
upperConfirm = confirm("Do you want to contain upper case letters?");
console.log("Upper case " + upperConfirm);
lowerConfirm = confirm("Do you want to contain lower case letters?");
console.log("Lower case "+ lowerConfirm);
numberConfirm = confirm("Do you want to contain numbers?");
console.log("Number "+ numberConfirm);
specialConfirm = confirm("Do you want to contain special characters?");
console.log("Special Character "+ specialConfirm);

}
// When users don't confirm any options
if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm) {
  userChoices = window.alert("Please confirm at least one option");
}
// When users confirm 4 options
else if (upperConfirm && lowerConfirm && numberConfirm && specialConfirm) {
  userChoices = upperCaseL.concat(lowerCaseL, numberArr, specialCh);
  console.log(userChoices);
}
// When users confirm 3 options 
else if (upperConfirm && lowerConfirm && numberConfirm) {
  userChoices = upperCaseL.concat(lowerCaseL, specialCh);
  console.log(userChoices);
}
else if (upperConfirm && lowerConfirm && specialConfirm) {
  userChoices = upperCaseL.concat(lowerCaseL, specialCh);
  console.log(userChoices);
}
else if (upperConfirm && numberConfirm && specialConfirm) {
  userChoices = upperCaseL.concat(numberArr, specialCh);
  console.log(userChoices);
}
else if (lowerConfirm && numberConfirm && specialConfirm) {
  userChoices = lowerCaseL.concat(numberArr, specialCh);
  console.log(userChoices);
}
// When users confirm 2 options
else if (numberConfirm && specialConfirm) {
  userChoices = numberArr.concat(specialCh);
  console.log(userChoices);
}
else if (upperConfirm && lowerConfirm) {
  userChoices = upperCaseL.concat(lowerCaseL);
  console.log(userChoices);
}
else if (numberConfirm && upperConfirm) {
  userChoices = numberArr.concat(upperCaseL);
  console.log(userChoices);
}
else if (numberConfirm && lowerConfirm) {
  userChoices = numberArr.concat(lowerCaseL);
  console.log(userChoices);
}
else if (upperConfirm && specialConfirm) {
  userChoices = upperCaseL.concat(specialCh);
  console.log(userChoices);
}
else if (lowerConfirm && specialConfirm) {
  userChoices = lowerCaseL.concat(specialCh);
  console.log(userChoices);
}

// When users confirm one option
else if (specialConfirm) {
  userChoices = specialCh;
  console.log(userChoices);
}
else if (numberConfirm) {
  userChoices = numberArr;
  console.log(userChoices);
}
else if (upperConfirm) {
  userChoices = upperCaseL;
  console.log(userChoices);
}
else if (lowerConfirm) {
  userChoices = lowerCaseL;
  console.log(userChoices);
}
// Random selection
var passwordBlank = [];

for (var i = 0; i < passwordLength; i++) {
  var choices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(choices);
  console.log(choices);
}

var password = passwordBlank.join("");
console.log("Your password is: " + password);
return password;
}
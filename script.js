// Character Variables
var number = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvxwyz";
var upperCase = "ABCDEFGHIJKLMONPQRSTUVXWYZ";
var specChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var finalPassword = "";

//Empty variables that the above character types feed into
var choseLen, addNumber, addLower, addUpper, addSpcChar, password;

// Event listener tied to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// For loop generating random characters from strings that make up passRequirements
function generatePassword(passRequirements) {
  finalPassword = "";
  for (var i = 0; i < choseLen; i++) {
    finalPassword +=
      passRequirements[Math.floor(Math.random() * passRequirements.length)];
  }
  return finalPassword;
}

//Confirm prompts for user deciding what character types will be used
function promptUser() {
  addNumber = confirm(
    "Would you like to use NUMBERS. Ok for yes Cancel for no"
  );
  addLower = confirm(
    "Would you like to use LOWERCASE. Ok for yes Cancel for no."
  );
  addUpper = confirm(
    "Would you like to use UPPERCASE. Ok for yes Cancel for no."
  );
  addSpecChar = confirm(
    "Would you like to use SPECIAL CHARACTERS. Ok for yes Cancel for no."
  );
}

// Function for generating password,
function writePassword() {
  // Promps user to choose length of characters, if outside of defined range, alert requiring that the correct number be entered displays

  choseLen = prompt("Choose between 8 and 128 characters");
  while (choseLen < 8 || choseLen > 128) {
    choseLen = prompt("Please, choose a number between 8 and 128 characters!");
  }
  promptUser();

  // Adds type of character to password string when selected, also with or and else verifies that at least one type must be chosen
  if (addNumber || addLower || addUpper || addSpecChar) {
    document.querySelector("#password").value = "";
    var passRequirements = "";
    if (addNumber) {
      passRequirements += number;
    }
    if (addLower) {
      passRequirements += lowerCase;
    }
    if (addUpper) {
      passRequirements += upperCase;
    }
    if (addSpecChar) {
      passRequirements += specChar;
    }

    writePass(passRequirements);
  } else {
    alert("You will need to pick at least one type of character");
    return;
  }
}

// Function writes password into password text box
function writePass(passRequirements) {
  var password = generatePassword(passRequirements);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLen

var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const upperCase = upperCaseStr.split('');

var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
const lowerCase = lowerCaseStr.split('');

var specialStr = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
const special = specialStr.split('');

var numbStr = "0123456789"
const numb = numbStr.split('');


const generatePass = [];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write password to the #password input
function generatePassword() {
  passLen = prompt("What is the length of the password between 8 and 128", "i.e. 10");
  
  

  while (isNaN(passLen) || passLen > 128 || passLen < 8 || passLen - Math.floor(passLen) !== 0){
    passLen = prompt("Invalid try again")
  } 


  for (let i = 0; i < passLen; i++){
    generatePass[i] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  

  
  if (confirm("Do I include Capital Letters") == true) {
    upperPrompt = true;
  }

  if (upperPrompt == true) {
    for (let i = 0; i < passLen; i+=2){
      generatePass[i] = upperCase[Math.floor(Math.random() * upperCase.length)];
    } 
  }
  
  

if (confirm("Do I include Numbers") == true) {
  var numbPrompt = true;
}
  
    
if (numbPrompt == true) {
  for (let i = 0; i < passLen; i+=3){
    generatePass[i] = numb[Math.floor(Math.random() * numb.length)];
  }
}


 
if (confirm("Do I include special characters") == true) {
  specialPrompt = true;
}

if (specialPrompt == true) {
  for (let i = 0; i < passLen; i+=4){
    generatePass[i] = special[Math.floor(Math.random() * special.length)];
  }
}
    
 return generatePass.join("");
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

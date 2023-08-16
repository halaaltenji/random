
let passwordBox = document.getElementById("password");
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected uppercase letters
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()_+~|}{[]></-="; // Corrected symbols
let allChars = upperCase + lowerCase + number + symbol;

function createPassword() { // Corrected function name
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]; // Corrected "math.random()" to "Math.random()"
  }

  passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}


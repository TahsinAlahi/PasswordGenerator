// Variables
let newPassword = document.getElementById("password");
let generateBtn = document.querySelector(".generate-btn");
let copyBtn = document.querySelector(".copy");
let password;

function passwordGenerator(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumber,
  includeSymbol
) {
  // Character list
  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  let numberChar = "0123456789";
  let symbolChar = "!@#$%^&*()_+-=?/.";

  let allowedChar = "";
  let password = "";

  // Adding required characters to allowed characters
  allowedChar += includeUppercase ? uppercaseChar : "";
  allowedChar += includeLowercase ? lowercaseChar : "";
  allowedChar += includeNumber ? numberChar : "";
  allowedChar += includeSymbol ? symbolChar : "";

  // Giving error if no checkbox was checked
  if (allowedChar == "") {
    document.querySelector(".char-error").style.display = "block";
    return "";
  } else {
    document.querySelector(".char-error").style.display = "none";
  }

  // Giving error if length is less than 5
  if (passwordLength < 5) {
    document.querySelector(".length-error").style.display = "block";
    return password;
  } else if (isNaN(passwordLength)) {
    document.querySelector(".length-error").style.display = "block";
    document.querySelector(".length-error").innerHTML =
      "You need to enter a number, try again!";
  } else {
    document.querySelector(".length-error").style.display = "none";
  }

  // Creating a password from allowed characters
  for (let i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * allowedChar.length);

    password += allowedChar[randomIndex];
  }

  return password;
}

// Generate password button event listener
generateBtn.addEventListener("click", () => {
  // Taking updated the inputs
  let passwordLength = parseInt(document.getElementById("length").value);
  let includeUppercase = document.getElementById("include-uppercase").checked;
  let includeLowercase = document.getElementById("include-lowercase").checked;
  let includeNumber = document.getElementById("include-number").checked;
  let includeSymbol = document.getElementById("include-symbol").checked;

  password = passwordGenerator(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSymbol
  );

  newPassword.value = password;
});

// Copy button functionality
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(newPassword.value);

  // Copy icon to checked icon the returning to copy icon again
  document.querySelector(".copy-icon").classList.replace("fa-copy", "fa-check");
  setInterval(() => {
    document
      .querySelector(".copy-icon")
      .classList.replace("fa-check", "fa-copy");
  }, 4000);
});

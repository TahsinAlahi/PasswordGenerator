function randomPasswordGenerator(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeSymbol
) {
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+-=";

  let allowedChar = "";
  let password = "";

  allowedChar += includeUppercase ? uppercaseChar : "";
  allowedChar += includeLowercase ? lowercaseChar : "";
  allowedChar += includeNumber ? numberChar : "";
  allowedChar += includeSymbol ? symbolChar : "";

  if (passwordLength < 8) {
    return "Password length needs to be more than 8.";
  }

  if (allowedChar === "") {
    return "At least one set of character should be selected.";
  }
  // console.log(allowedChar);
  for (i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar[randomIndex];
  }
  return password;
}

let passwordLength = 8;
let includeUppercase = true;
let includeLowercase = true;
let includeNumber = true;
let includeSymbol = true;

let password = randomPasswordGenerator(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumber,
  includeSymbol
);

console.log(`Generated Password: ${password}`);

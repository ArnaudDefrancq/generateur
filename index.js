const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "$^*ù!:;,§/.?&";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

// console.log(rangeValue.value);
// console.log(dataLowercase);
// console.log(dataUppercase);

// Les checkbox sont déjà connu. Pas besoin de les déclarer
function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  // console.log(data);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    // console.log(data[Math.floor(Math.random() * data.length)]);
    password += data[Math.floor(Math.random() * data.length)];
    // console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);

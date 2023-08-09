function generatePassword() {
  const length = document.getElementById("password-length").value;
  const uppercase = document.getElementById("uppercase-letters").checked;
  const lowercase = document.getElementById("lowercase-letters").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById("password").value = password;
}


function copyToClipboard() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
}

function copyToClipboard() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
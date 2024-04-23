function generatePassword() {
  var length = $("#number").val();
  var uppercase = $("#uppercase").is(":checked");
  var lowercase = $("#lowercase").is(":checked");
  var numbers = $("#numbers").is(":checked");
  var symbols = $("#symbols").is(":checked");

  var charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_+-=";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
  
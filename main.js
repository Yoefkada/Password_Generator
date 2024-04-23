$(document).ready(function() {
    // Set the initial password value and character count display
    var password = "P4$5W0rD!";
    $("#number").on("input", function() {
      $("span.text-NeonGreen").text($(this).val());
    });
    $("#number").trigger("input");
  
    // Generate password function
    function generatePassword() {
      var length = $("#number").val();
      var uppercase = $("input[type=checkbox]:first").is(":checked");
      var lowercase = $("input[type=checkbox]:nth-of-type(2)").is(":checked");
      var numbers = $("input[type=checkbox]:nth-of-type(3)").is(":checked");
      var symbols = $("input[type=checkbox]:nth-of-type(4)").is(":checked");
  
      var charset = "";
      if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
      if (numbers) charset += "0123456789";
      if (symbols) charset += "!@#$%^&*()_+-=";
  
      if (!charset.length) {
        alert("Please select at least one character set");
        return;
      }
  
      var password = "";
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      return password;
    }
  
    // Copy password to clipboard function
    function copyToClipboard() {
      var passwordInput = $("input[placeholder='P4$5W0rD!']");
      passwordInput.val(password);
      passwordInput.select();
      document.execCommand("copy");
    }
  
    // Button click event handlers
    $("button[type=submit]").click(function(e) {
      e.preventDefault();
      password = generatePassword();
      $("input[placeholder='P4$5W0rD!']").val(password);
    });
  
    $("button[type=button]").click(function() {
      copyToClipboard();
    });
  });
  
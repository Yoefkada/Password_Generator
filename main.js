$(document).ready(function() {
    var password = "P4$5W0rD!";
    $("#number").on("input", function() {
      $("span.text-NeonGreen").text($(this).val());
    });
    $("#number").trigger("input");
  
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
  
    function copyToClipboard() {
      var passwordInput = $("input[placeholder='P4$5W0rD!']");
      passwordInput.val(password);
      passwordInput.select();
      document.execCommand("copy");
    }
  
    $("button[type=submit]").click(function(e) {
      e.preventDefault();
      password = generatePassword();
      $("input[placeholder='P4$5W0rD!']").val(password);
    });
  
    $("button[type=button]").click(function() {
      copyToClipboard();
    });
  });
  
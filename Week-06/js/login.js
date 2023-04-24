var errorEmailClass = document.getElementById("errorEmail");
var emailInput = document.getElementById("emailInput");
var emailText = document.getElementById("emailText");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var errorPasswordClass = document.getElementById("errorPassword");
var passwordInput = document.getElementById("passwordInput");
var passwordText = document.getElementById("passwordText");

var btnLogin = document.getElementById("btn-login");

var validateEmail = function () {
  if (!emailExpression.test(emailInput.value.trim())) {
    emailText.innerHTML = "Email*";
    emailText.style.color = "red";
    emailInput.style.border = "1px solid red";
    errorEmailClass.style.display = "flex";
    return false;
  } else {
    emailInput.style.border = "2px solid green";
    return true;
  }
};

var resetInputEmail = function () {
  emailText.innerHTML = "Email";
  emailText.style.color = "initial";
  emailInput.style.border = "initial";
  errorEmailClass.style.display = "none";
};

var validatePassword = function () {
  var letter = false;
  var number = false;
  for (var i = 0; i < passwordInput.value.length; i++) {
    var charPassword = passwordInput.value[i];
    if (charPassword >= "0" && charPassword <= "9") {
      number = true;
    } else if (
      (charPassword >= "a" && charPassword <= "z") ||
      (charPassword >= "A" && charPassword <= "Z")
    ) {
      letter = true;
    } else {
      passwordText.innerHTML = "Password*";
      passwordText.style.color = "red";
      passwordInput.style.border = "1px solid red";
      errorPasswordClass.style.display = "flex";
      return false;
    }
  }
  if (letter && number) {
    if (passwordInput.value.length < 8) {
      passwordText.innerHTML = "Password*";
      passwordText.style.color = "red";
      passwordInput.style.border = "1px solid red";
      errorPasswordClass.style.display = "flex";
      return false;
    } else {
      passwordInput.style.border = "2px solid green";
      return true;
    }
  } else {
    passwordText.innerHTML = "Password*";
    passwordText.style.color = "red";
    passwordInput.style.border = "1px solid red";
    errorPasswordClass.style.display = "flex";
    return false;
  }
};

var resetInputPassword = function () {
  passwordText.innerHTML = "Password";
  passwordText.style.color = "initial";
  passwordInput.style.border = "initial";
  errorPasswordClass.style.display = "none";
};

var validateAllInformation = function () {
  var array = [];
  if (!validateEmail()) {
    array.push("The field Email is wrong");
  }
  if (!validatePassword()) {
    array.push("\nThe field Password is wrong");
  }
  return array
}

var loginValidate = function (e) {
  e.preventDefault();
  if(validateAllInformation() == ""){
    alert(
        "Email: " +
        emailInput.value +
        "\nPassword: " +
        passwordInput.value
    );
  }else{
    alert(validateAllInformation())
  }
};

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", resetInputEmail);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", resetInputPassword);

btnLogin.addEventListener("click", loginValidate);

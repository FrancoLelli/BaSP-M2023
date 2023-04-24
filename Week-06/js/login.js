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
    emailText.classList.add("error-text");
    emailInput.classList.add("error-input");
    errorEmailClass.classList.add("error");
    errorEmailClass.classList.remove("label-none");
    return false;
  } else {
    emailInput.classList.add("validate-input");
    return true;
  }
};

var resetInputEmail = function () {
  emailText.innerHTML = "Email";
  emailText.classList.remove("error-text");
  emailInput.classList.remove("validate-input");
  emailInput.classList.remove("error-input");
  errorEmailClass.classList.remove("error");
  errorEmailClass.classList.add("label-none");
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
      passwordText.classList.add("error-text");
      passwordInput.classList.add("error-input");
      errorPasswordClass.classList.add("error");
      errorPasswordClass.classList.remove("label-none");
      errorPasswordClass.innerHTML =
        "Password must have only letter and numbers";
      return false;
    }
  }
  if (letter && number) {
    if (passwordInput.value.length < 8) {
      passwordText.innerHTML = "Password*";
      passwordText.classList.add("error-text");
      passwordInput.classList.add("error-input");
      errorPasswordClass.classList.add("error");
      errorPasswordClass.classList.remove("label-none");
      errorPasswordClass.innerHTML = "Password must have at least 8 characters";
      return false;
    } else {
        passwordInput.classList.add("validate-input");
        return true;
    }
  } else {
    passwordText.innerHTML = "Password*";
    passwordText.classList.add("error-text");
    passwordInput.classList.add("error-input");
    errorPasswordClass.classList.add("error");
    errorPasswordClass.classList.remove("label-none");
    errorPasswordClass.innerHTML = "Password must have only letter and numbers";
    return false;
  }
};

var resetInputPassword = function () {
  passwordText.innerHTML = "Password";
  passwordText.classList.remove("error-text");
  passwordInput.classList.remove("validate-input");
  passwordInput.classList.remove("error-input");
  errorPasswordClass.classList.remove("error");
  errorPasswordClass.classList.add("label-none");
};

var validateAllInformation = function () {
  var array = [];
  if (!validateEmail()) {
    array.push("The field Email is wrong");
  }
  if (!validatePassword()) {
    array.push("\nThe field Password is wrong");
  }
  return array;
};

var loginValidate = function (e) {
  e.preventDefault();
  if (validateAllInformation() == "") {
    alert("Email: " + emailInput.value + "\nPassword: " + passwordInput.value);
  } else {
    alert(validateAllInformation());
  }
};

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", resetInputEmail);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", resetInputPassword);

btnLogin.addEventListener("click", loginValidate);

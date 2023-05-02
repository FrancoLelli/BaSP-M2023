var emailText = document.getElementById("emailText");
var emailInput = document.getElementById("emailInput");
var errorEmailClass = document.getElementById("errorEmail");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var passwordText = document.getElementById("passwordText");
var passwordInput = document.getElementById("passwordInput");
var errorPasswordClass = document.getElementById("errorPassword");

var btnLogin = document.getElementById("btn-login");

var modalLogin = document.getElementById("modalAlert");
var modalText = document.getElementById("titleModal");
var modalContent = document.getElementById("contentModal");
var otherData = document.getElementById("otherData");
var btnModal = document.getElementById("btnModal");

var modalErrorLogin = document.getElementById("modalErrorAlert");
var modalErrorText = document.getElementById("titleErrorModal");
var contentErrorModal = document.getElementById("contentErrorModal");
var btnErrorModal = document.getElementById("btnErrorModal");

var stylesValidate = function (inputText, input, inputClass, inputName) {
  inputText.innerHTML = inputName + "*";
  inputText.classList.add("error-text");
  input.classList.add("error-input");
  inputClass.classList.add("error");
  inputClass.classList.remove("label-none");
};

var resetStyles = function (inputText, input, inputClass, inputName) {
  inputText.innerHTML = inputName;
  inputText.classList.remove("error-text");
  input.classList.remove("validate-input");
  input.classList.remove("error-input");
  inputClass.classList.remove("error");
  inputClass.classList.add("label-none");
};

var validateEmail = function () {
  if (!emailExpression.test(emailInput.value.trim())) {
    stylesValidate(emailText, emailInput, errorEmailClass, "Email");
    return false;
  } else {
    emailInput.classList.add("validate-input");
    return true;
  }
};

var resetInputEmail = function () {
  resetStyles(emailText, emailInput, errorEmailClass, "Email");
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
      stylesValidate(
        passwordText,
        passwordInput,
        errorPasswordClass,
        "Password"
      );
      errorPasswordClass.innerHTML =
        "Password must have only letter and numbers";
      return false;
    }
  }
  if (letter && number) {
    if (passwordInput.value.length < 8) {
      stylesValidate(
        passwordText,
        passwordInput,
        errorPasswordClass,
        "Password"
      );
      errorPasswordClass.innerHTML = "Password must have at least 8 characters";
      return false;
    } else {
      passwordInput.classList.add("validate-input");
      return true;
    }
  } else {
    stylesValidate(passwordText, passwordInput, errorPasswordClass, "Password");
    errorPasswordClass.innerHTML = "Password must have only letter and numbers";
    return false;
  }
};

var resetInputPassword = function () {
  resetStyles(passwordText, passwordInput, errorPasswordClass, "Password");
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
  var returnValidate = validateAllInformation();
  if (returnValidate == "") {
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    var url = `https://api-rest-server.vercel.app/login?email=${emailValue}&password=${passwordValue}`;

    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        if (!resp.success) {
          throw new Error(JSON.stringify(resp));
        }
        modalLogin.style.display = "block";
        modalText.innerHTML = "The request was successful";
        modalContent.innerHTML = JSON.stringify(resp);
        otherData.innerHTML =
          "Email: " + emailInput.value + ",\nPassword: " + passwordInput.value;
      })
      .catch(function (err) {
        modalErrorLogin.style.display = "block";
        modalErrorText.innerHTML =
          "The request could not be performed successfully:";
        contentErrorModal.innerHTML = err;
      });
  } else {
    modalErrorLogin.style.display = "block";
    modalErrorText.innerHTML = "Error. There are wrong fields:";
    contentErrorModal.innerHTML = returnValidate;
  }
};

var resetModal = function () {
  modalLogin.style.display = "none";
};

var resetErrorModal = function () {
  modalErrorLogin.style.display = "none";
};

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", resetInputEmail);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", resetInputPassword);

btnLogin.addEventListener("click", loginValidate);

btnModal.addEventListener("click", resetModal);
btnErrorModal.addEventListener("click", resetErrorModal);

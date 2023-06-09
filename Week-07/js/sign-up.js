var nameText = document.getElementById("nameText");
var nameInput = document.getElementById("nameInput");
var errorNameClass = document.getElementById("nameError");

var surnameText = document.getElementById("surnameText");
var surnameInput = document.getElementById("surnameInput");
var errorSurnameClass = document.getElementById("surnameError");

var dniText = document.getElementById("dniText");
var dniInput = document.getElementById("dniInput");
var errorDniClass = document.getElementById("dniError");

var birthdayText = document.getElementById("birthdayText");
var birthdayInput = document.getElementById("birthdayInput");
var errorBirthdayClass = document.getElementById("errorBirthday");

var phoneText = document.getElementById("phoneText");
var phoneInput = document.getElementById("phoneInput");
var errorPhoneClass = document.getElementById("errorPhone");

var addressText = document.getElementById("addressText");
var addressInput = document.getElementById("addressInput");
var errorAddressClass = document.getElementById("errorAddress");

var cityText = document.getElementById("cityText");
var cityInput = document.getElementById("cityInput");
var errorCityClass = document.getElementById("errorCity");

var zipCodeText = document.getElementById("zipCodeText");
var zipCodeInput = document.getElementById("zipCode");
var errorZipCodeClass = document.getElementById("errorZipCode");

var emailText = document.getElementById("emailText");
var emailInput = document.getElementById("emailInput");
var errorEmailClass = document.getElementById("errorEmail");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var passwordText = document.getElementById("passwordText");
var passwordInput = document.getElementById("passwordInput");
var errorPasswordClass = document.getElementById("errorPassword");

var passwordRepeatText = document.getElementById("passwordRepeatText");
var passwordRepeatInput = document.getElementById("passwordRepeatInput");
var errorPasswordRepeatClass = document.getElementById(
  "errorPasswordRepeatClass"
);

var btnRegister = document.getElementById("btnRegister");

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

var validateName = function () {
  var isText = false;
  var nameValue = nameInput.value.trim();
  for (var i = 0; i < nameValue.length; i++) {
    var char = nameInput.value[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char == " "
    ) {
      isText = true;
    } else {
      stylesValidate(nameText, nameInput, errorNameClass, "Name");
      errorNameClass.innerHTML = "The field only accepts letters";
      return false;
    }
  }
  if (isText) {
    if (nameValue.length > 3) {
      nameInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(nameText, nameInput, errorNameClass, "Name");
      errorNameClass.innerHTML = "Must have at least 3 letters";
      return false;
    }
  } else {
    stylesValidate(nameText, nameInput, errorNameClass, "Name");
    errorNameClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputName = function () {
  resetStyles(nameText, nameInput, errorNameClass, "Name");
};

var validateSurname = function () {
  var isText = false;
  var surnameValue = surnameInput.value.trim();
  for (var i = 0; i < surnameValue.length; i++) {
    var char = surnameInput.value[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char == " "
    ) {
      isText = true;
    } else {
      stylesValidate(surnameText, surnameInput, errorSurnameClass, "Surname");
      errorSurnameClass.innerHTML = "The field only accepts letters";
      return false;
    }
  }
  if (isText) {
    if (surnameValue.length > 3) {
      surnameInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(surnameText, surnameInput, errorSurnameClass, "Surname");
      errorSurnameClass.innerHTML = "Must have at least 3 letters";
      return false;
    }
  } else {
    stylesValidate(surnameText, surnameInput, errorSurnameClass, "Surname");
    errorSurnameClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputSurname = function () {
  resetStyles(surnameText, surnameInput, errorSurnameClass, "Surname");
};

var validateDni = function () {
  var isNumber = false;
  var dniValue = dniInput.value.trim();
  for (var i = 0; i < dniValue.length; i++) {
    var number = dniValue[i];
    if (!isNaN(number)) {
      isNumber = true;
    } else {
      stylesValidate(dniText, dniInput, errorDniClass, "DNI");
      errorDniClass.innerHTML = "Wrong DNI";
      return false;
    }
  }

  if (isNumber) {
    if (dniValue.length >= 7 && dniValue.length <= 9) {
      dniInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(dniText, dniInput, errorDniClass, "DNI");
      errorDniClass.innerHTML = "DNI must have between 7 and 9 characters";
      return false;
    }
  } else {
    stylesValidate(dniText, dniInput, errorDniClass, "DNI");
    errorDniClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputDni = function () {
  resetStyles(dniText, dniInput, errorDniClass, "DNI");
};

var validateBirthday = function () {
  var isValid = false;
  var dateSelected = birthdayInput.value;
  var dateToday = new Date().toISOString().slice(0, 10);
  if (dateSelected <= dateToday && dateSelected !== "") {
    var yearSelected = new Date(dateSelected).getFullYear();
    var yearToday = new Date().getFullYear();
    var age = yearToday - yearSelected;
    if (age >= 18) {
      isValid = true;
    } else {
      stylesValidate(
        birthdayText,
        birthdayInput,
        errorBirthdayClass,
        "Birthday"
      );
      errorBirthdayClass.innerHTML = "Age must older than or equal 18";
      return false;
    }
  } else {
    stylesValidate(birthdayText, birthdayInput, errorBirthdayClass, "Birthday");
    errorBirthdayClass.innerHTML = "The field must not be empty";
    return false;
  }

  if (isValid) {
    birthdayInput.classList.add("validate-input");
    return true;
  } else {
    stylesValidate(birthdayText, birthdayInput, errorBirthdayClass, "Birthday");
    return false;
  }
};

var resetInputBirthday = function () {
  resetStyles(birthdayText, birthdayInput, errorBirthdayClass, "Birthday");
};

var validatePhone = function () {
  var isValid = false;
  var phoneValue = phoneInput.value;
  for (var i = 0; i < phoneValue.length; i++) {
    var number = phoneValue[i];
    if (!isNaN(number)) {
      isValid = true;
    } else {
      stylesValidate(phoneText, phoneInput, errorPhoneClass, "Phone");
      errorPhoneClass.innerHTML = "Phone must have only numbers";
      return false;
    }
  }

  if (isValid) {
    if (phoneValue.length == 10) {
      phoneInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(phoneText, phoneInput, errorPhoneClass, "Phone");
      errorPhoneClass.innerHTML = "Phone must have 10 numbers";
      return false;
    }
  } else {
    stylesValidate(phoneText, phoneInput, errorPhoneClass, "Phone");
    errorPhoneClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputPhone = function () {
  resetStyles(phoneText, phoneInput, errorPhoneClass, "Phone");
};

var validateAddress = function () {
  var haveNumber = false;
  var haveLetter = false;
  var existSpace = false;
  var haveSpace = 0;
  var addressValue = addressInput.value.trim();
  for (var i = 0; i < addressValue.length; i++) {
    var char = addressValue[i];
    if (char == " ") {
      haveSpace += 1;
    }
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      haveLetter = true;
    } else if (char >= "0" && char <= "9") {
      haveNumber = true;
    } else if (haveSpace <= 1) {
      existSpace = true;
    } else {
      stylesValidate(addressText, addressInput, errorAddressClass, "Address");
      errorAddressClass.innerHTML =
        "Address must have only numbers or letter and one space";
      return false;
    }
  }

  if (addressValue.length >= 5) {
    if (haveLetter && haveNumber && existSpace) {
      addressInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(addressText, addressInput, errorAddressClass, "Address");
      errorAddressClass.innerHTML =
        "Address must have only numbers or letter and one space";
      return false;
    }
  } else {
    stylesValidate(addressText, addressInput, errorAddressClass, "Address");
    errorAddressClass.innerHTML = "The field must at least 5 characters";
    return false;
  }
};

var resetInputAddress = function () {
  resetStyles(addressText, addressInput, errorAddressClass, "Address");
};

var validateCity = function () {
  var isValid = false;
  var countLetter = 0;
  var cityValue = cityInput.value.trim();
  for (var i = 0; i < cityValue.length; i++) {
    var char = cityValue[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9") ||
      char == " "
    ) {
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        countLetter++;
      }
      isValid = true;
    } else {
      stylesValidate(cityText, cityInput, errorCityClass, "City");
      errorCityClass.innerHTML = "City must have only letter and numbers";
      return false;
    }
  }

  if (isValid) {
    if (countLetter > 3) {
      cityInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(cityText, cityInput, errorCityClass, "City");
      errorCityClass.innerHTML =
        "The field must have at least 4 or more letters";
      return false;
    }
  } else {
    stylesValidate(cityText, cityInput, errorCityClass, "City");
    errorCityClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputCity = function () {
  resetStyles(cityText, cityInput, errorCityClass, "City");
};

var validateZipCode = function () {
  var isValid = false;
  var zipCodeValue = zipCodeInput.value.trim();
  for (var i = 0; i < zipCodeValue.length; i++) {
    var number = zipCodeValue[i];
    if (!isNaN(number)) {
      isValid = true;
    } else {
      stylesValidate(zipCodeText, zipCodeInput, errorZipCodeClass, "Zip Code");
      errorZipCodeClass.innerHTML = "Zip Code must have only numbers";
      return false;
    }
  }

  if (isValid) {
    if (zipCodeValue.length >= 4 && zipCodeValue.length <= 5) {
      zipCodeInput.classList.add("validate-input");
      return true;
    } else {
      stylesValidate(zipCodeText, zipCodeInput, errorZipCodeClass, "Zip Code");
      errorZipCodeClass.innerHTML = "Zip Code must have only 4 or 5 numbers";
      return false;
    }
  } else {
    stylesValidate(zipCodeText, zipCodeInput, errorZipCodeClass, "Zip Code");
    errorZipCodeClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputZipCode = function () {
  resetStyles(zipCodeText, zipCodeInput, errorZipCodeClass, "Zip Code");
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
      passwordText.innerHTML = "Password*";
      passwordText.classList.add("error-text");
      passwordInput.classList.add("error-input");
      errorPasswordClass.classList.add("error");
      errorPasswordClass.classList.remove("label-none");
      stylesValidate(
        passwordText,
        passwordInput,
        errorPasswordClass,
        "Password"
      );
      errorPasswordClass.innerHTML = "Password must have at least 8 characters";
      return false;
    } else {
      if (passwordInput.value === passwordRepeatInput.value) {
        passwordInput.classList.add("validate-input");
        return true;
      } else {
        passwordRepeatInput.value = "";
        passwordInput.classList.add("validate-input");
        passwordRepeatText.innerHTML = "Repeat Password*";
        passwordRepeatText.classList.add("error-text");
        passwordRepeatInput.classList.remove("validate-input");
        passwordRepeatInput.classList.add("error-input");
        errorPasswordRepeatClass.classList.add("error");
        errorPasswordRepeatClass.classList.remove("label-none");
        errorPasswordRepeatClass.innerHTML = "Passwords must match";
        return false;
      }
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

var validateRepeatPassword = function () {
  var letter = false;
  var number = false;
  for (var i = 0; i < passwordRepeatInput.value.length; i++) {
    var charPassword = passwordRepeatInput.value[i];
    if (charPassword >= "0" && charPassword <= "9") {
      number = true;
    } else if (
      (charPassword >= "a" && charPassword <= "z") ||
      (charPassword >= "A" && charPassword <= "Z")
    ) {
      letter = true;
    } else {
      stylesValidate(
        passwordRepeatText,
        passwordRepeatInput,
        errorPasswordRepeatClass,
        "Repeat Password"
      );
      errorPasswordRepeatClass.innerHTML =
        "Password must have only letter and numbers";
      return false;
    }
  }
  if (letter && number) {
    if (passwordRepeatInput.value.length < 8) {
      stylesValidate(
        passwordRepeatText,
        passwordRepeatInput,
        errorPasswordRepeatClass,
        "Repeat Password"
      );
      errorPasswordRepeatClass.innerHTML =
        "Password must have at least 8 characters";
      return false;
    } else {
      if (passwordInput.value === passwordRepeatInput.value) {
        passwordRepeatInput.classList.add("validate-input");
        return true;
      } else {
        passwordInput.value = "";
        passwordRepeatInput.classList.add("validate-input");
        passwordInput.classList.remove("validate-input");
        passwordText.innerHTML = "Password*";
        passwordText.classList.add("error-text");
        passwordInput.classList.add("error-input");
        errorPasswordClass.classList.add("error");
        errorPasswordClass.classList.remove("label-none");
        errorPasswordClass.innerHTML = "Passwords must match";
        return false;
      }
    }
  } else {
    stylesValidate(
      passwordRepeatText,
      passwordRepeatInput,
      errorPasswordRepeatClass,
      "Repeat Password"
    );
    errorPasswordRepeatClass.innerHTML =
      "Password must have only letter and numbers";
    return false;
  }
};

var resetInputRepeatPassword = function () {
  resetStyles(
    passwordRepeatText,
    passwordRepeatInput,
    errorPasswordRepeatClass,
    "Repeat Password"
  );
};

var validateAllInformation = function () {
  var array = [];
  if (!validateName()) {
    array.push("The field Name is wrong");
  }
  if (!validateSurname()) {
    array.push("\nThe field Surname is wrong");
  }
  if (!validateDni()) {
    array.push("\nThe field DNI is wrong");
  }
  if (!validateBirthday()) {
    array.push("\nThe field Birthday is wrong");
  }
  if (!validatePhone()) {
    array.push("\nThe field Phone is wrong");
  }
  if (!validateAddress()) {
    array.push("\nThe field address is wrong");
  }
  if (!validateCity()) {
    array.push("\nThe field City is wrong");
  }
  if (!validateZipCode()) {
    array.push("\nThe field Zip Code is wrong");
  }
  if (!validateEmail()) {
    array.push("\nThe field Email is wrong");
  }
  if (!validateRepeatPassword()) {
    array.push("\nThe field Repeat Password is wrong");
  }
  if (!validatePassword()) {
    array.push("\nThe field Password is wrong");
  }
  return array;
};

var registerValidate = function (e) {
  e.preventDefault();
  var returnValidate = validateAllInformation();
  if (returnValidate == "") {
    var nameValue = nameInput.value.trim();
    var surnameValue = surnameInput.value.trim();
    var dniValue = dniInput.value.trim();
    var birthdayDMY = birthdayInput.value.split("-");
    var birthdayValue =
      birthdayDMY[1] + "/" + birthdayDMY[2] + "/" + birthdayDMY[0];
    var phoneValue = phoneInput.value.trim();
    var addressValue = addressInput.value.trim();
    var cityValue = cityInput.value.trim();
    var zipCodeValue = zipCodeInput.value.trim();
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    var url =
      `https://api-rest-server.vercel.app/signup?name=${nameValue}&` +
      `lastName=${surnameValue}&` +
      `dni=${dniValue}&` +
      `dob=${birthdayValue}&` +
      `phone=${phoneValue}&` +
      `address=${addressValue}&` +
      `city=${cityValue}&` +
      `zip=${zipCodeValue}&` +
      `email=${emailValue}&` +
      `password=${passwordValue}`;

    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        if (!resp.success) {
          throw new Error(JSON.stringify(resp.errors));
        }
        localStorage.setItem("name", nameValue);
        localStorage.setItem("surname", surnameValue);
        localStorage.setItem("dni", dniValue);
        birthdayValue = birthdayInput.value;
        localStorage.setItem("birthday", birthdayValue);
        localStorage.setItem("phone", phoneValue);
        localStorage.setItem("address", addressValue);
        localStorage.setItem("zipCode", zipCodeValue);
        localStorage.setItem("city", cityValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
        modalLogin.style.display = "block";
        modalText.innerHTML = "The request was successful";
        modalContent.innerHTML = JSON.stringify(resp.msg);
        otherData.innerHTML =
          "Name: " +
          nameInput.value +
          ",\nSurname: " +
          surnameInput.value +
          ",\nDNI: " +
          dniInput.value +
          ",\nBirthday: " +
          birthdayInput.value +
          ",\nPhone: " +
          phoneInput.value +
          ",\naddress: " +
          addressInput.value +
          ",\nCity: " +
          cityInput.value +
          ",\nZip Code: " +
          zipCodeInput.value +
          ",\nEmail: " +
          emailInput.value +
          ",\nPassword: " +
          passwordInput.value;
      })
      .catch(function (err) {
        console.log(err);
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

nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("focus", resetInputName);

surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("focus", resetInputSurname);

dniInput.addEventListener("blur", validateDni);
dniInput.addEventListener("focus", resetInputDni);

birthdayInput.addEventListener("blur", validateBirthday);
birthdayInput.addEventListener("focus", resetInputBirthday);

phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener("focus", resetInputPhone);

addressInput.addEventListener("blur", validateAddress);
addressInput.addEventListener("focus", resetInputAddress);

cityInput.addEventListener("blur", validateCity);
cityInput.addEventListener("focus", resetInputCity);

zipCodeInput.addEventListener("blur", validateZipCode);
zipCodeInput.addEventListener("focus", resetInputZipCode);

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", resetInputEmail);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", resetInputPassword);

passwordRepeatInput.addEventListener("blur", validateRepeatPassword);
passwordRepeatInput.addEventListener("focus", resetInputRepeatPassword);

btnRegister.addEventListener("click", registerValidate);

btnModal.addEventListener("click", resetModal);
btnErrorModal.addEventListener("click", resetErrorModal);

var completeForm = function () {
  var nameValue = localStorage.getItem("name");
  var surnameValue = localStorage.getItem("surname");
  var dniValue = localStorage.getItem("dni");
  var birthdayValue = localStorage.getItem("birthday");
  var phoneValue = localStorage.getItem("phone");
  var addressValue = localStorage.getItem("address");
  var cityValue = localStorage.getItem("city");
  var zipCodeValue = localStorage.getItem("zipCode");
  var emailValue = localStorage.getItem("email");
  var passwordValue = localStorage.getItem("password");

  nameInput.value = nameValue;
  surnameInput.value = surnameValue;
  dniInput.value = dniValue;
  birthdayInput.value = birthdayValue;
  phoneInput.value = phoneValue;
  addressInput.value = addressValue;
  cityInput.value = cityValue;
  zipCodeInput.value = zipCodeValue;
  emailInput.value = emailValue;
  passwordInput.value = passwordValue;
  passwordRepeatInput.value = passwordValue;
};

window.addEventListener("load", completeForm);

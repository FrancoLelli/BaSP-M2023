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

var adressText = document.getElementById("adressText");
var adressInput = document.getElementById("adressInput");
var errorAdressClass = document.getElementById("errorAdress");

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
      nameText.innerHTML = "Name*";
      nameText.classList.add("error-text");
      nameInput.classList.add("error-input");
      errorNameClass.classList.add("error");
      errorNameClass.classList.remove("label-none");
      errorNameClass.innerHTML = "The field only accepts letters";
      return false;
    }
  }
  if (isText) {
    if (nameValue.length > 3) {
      nameInput.classList.add("validate-input");
      return true;
    } else {
      nameText.innerHTML = "Name*";
      nameText.classList.add("error-text");
      nameInput.classList.add("error-input");
      errorNameClass.classList.add("error");
      errorNameClass.classList.remove("label-none");
      errorNameClass.innerHTML = "Must have at least 3 letters";
      return false;
    }
  } else {
    nameText.innerHTML = "Name*";
    nameText.classList.add("error-text");
    nameInput.classList.add("error-input");
    errorNameClass.classList.add("error");
    errorNameClass.classList.remove("label-none");
    errorNameClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputName = function () {
  nameText.innerHTML = "Name";
  nameText.classList.remove("error-text");
  nameInput.classList.remove("validate-input");
  errorNameClass.classList.remove("error");
  errorNameClass.classList.add("label-none");
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
      surnameText.innerHTML = "Surname*";
      surnameText.classList.add("error-text");
      surnameInput.classList.add("error-input");
      errorSurnameClass.classList.add("error");
      errorSurnameClass.classList.remove("label-none");
      errorSurnameClass.innerHTML = "The field only accepts letters";
      return false;
    }
  }
  if (isText) {
    if (surnameValue.length > 3) {
      surnameInput.classList.add("validate-input");
      return true;
    } else {
      surnameText.innerHTML = "Surname*";
      surnameText.classList.add("error-text");
      surnameInput.classList.add("error-input");
      errorSurnameClass.classList.add("error");
      errorSurnameClass.classList.remove("label-none");
      errorSurnameClass.innerHTML = "Must have at least 3 letters";
      return false;
    }
  } else {
    surnameText.innerHTML = "Surname*";
    surnameText.classList.add("error-text");
    surnameInput.classList.add("error-input");
    errorSurnameClass.classList.add("error");
    errorSurnameClass.classList.remove("label-none");
    errorSurnameClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputSurname = function () {
  surnameText.innerHTML = "Surname";
  surnameText.classList.remove("error-text");
  surnameInput.classList.remove("validate-input");
  surnameInput.classList.remove("error-input");
  errorSurnameClass.classList.remove("error");
  errorSurnameClass.classList.add("label-none");
};

var validateDni = function () {
  var isNumber = false;
  var dniValue = dniInput.value.trim();
  for (var i = 0; i < dniValue.length; i++) {
    var number = dniValue[i];
    if (!isNaN(number)) {
      isNumber = true;
    } else {
      dniText.innerHTML = "DNI*";
      dniText.classList.add("error-text");
      dniInput.classList.add("error-input");
      errorDniClass.classList.add("error");
      errorDniClass.classList.remove("label-none");
      errorDniClass.innerHTML = "Wrong DNI";
      return false;
    }
  }

  if (isNumber) {
    if (dniValue.length >= 7 && dniValue.length <= 9) {
      dniInput.classList.add("validate-input");
      return true;
    } else {
      dniText.innerHTML = "DNI*";
      dniText.classList.add("error-text");
      dniInput.classList.add("error-input");
      errorDniClass.classList.add("error");
      errorDniClass.classList.remove("label-none");
      errorDniClass.innerHTML = "DNI must have between 7 and 9 characters";
      return false;
    }
  } else {
    dniText.innerHTML = "DNI*";
    dniText.classList.add("error-text");
    dniInput.classList.add("error-input");
    errorDniClass.classList.add("error");
    errorDniClass.classList.remove("label-none");
    errorDniClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputDni = function () {
  dniText.innerHTML = "DNI";
  dniText.classList.remove("error-text");
  dniInput.classList.remove("validate-input");
  dniInput.classList.remove("error-input");
  errorDniClass.classList.remove("error");
  errorDniClass.classList.add("label-none");
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
      birthdayText.innerHTML = "Birthday*";
      birthdayText.classList.add("error-text");
      birthdayInput.classList.add("error-input");
      errorBirthdayClass.classList.add("error");
      errorBirthdayClass.classList.remove("label-none");
      errorBirthdayClass.innerHTML = "Age must older than or equal 18";
      return false;
    }
  } else {
    birthdayText.innerHTML = "Birthday*";
    birthdayText.classList.add("error-text");
    birthdayInput.classList.add("error-input");
    errorBirthdayClass.classList.add("error");
    errorBirthdayClass.classList.remove("label-none");
    errorBirthdayClass.innerHTML = "The field must not be empty";
    return false;
  }

  if (isValid) {
    birthdayInput.classList.add("validate-input");
    return true;
  } else {
    birthdayText.innerHTML = "Birthday*";
    birthdayText.classList.add("error-text");
    birthdayInput.classList.add("error-input");
    errorBirthdayClass.classList.add("error");
    errorBirthdayClass.classList.remove("label-none");
    return false;
  }
};

var resetInputBirthday = function () {
  birthdayText.innerHTML = "Birthday";
  birthdayText.classList.remove("error-text");
  birthdayInput.classList.remove("validate-input");
  birthdayInput.classList.remove("error-input");
  errorBirthdayClass.classList.remove("error");
  errorBirthdayClass.classList.add("label-none");
};

var validatePhone = function () {
  var isValid = false;
  var phoneValue = phoneInput.value;
  for (var i = 0; i < phoneValue.length; i++) {
    var number = phoneValue[i];
    if (!isNaN(number)) {
      isValid = true;
    } else {
      phoneText.innerHTML = "Phone*";
      phoneText.classList.add("error-text");
      phoneInput.classList.add("error-input");
      errorPhoneClass.classList.add("error");
      errorPhoneClass.classList.remove("label-none");
      errorPhoneClass.innerHTML = "Phone must have only numbers";
      return false;
    }
  }

  if (isValid) {
    if (phoneValue.length == 10) {
      phoneInput.classList.add("validate-input");
      return true;
    } else {
      phoneText.innerHTML = "Phone*";
      phoneText.classList.add("error-text");
      phoneInput.classList.add("error-input");
      errorPhoneClass.classList.add("error");
      errorPhoneClass.classList.remove("label-none");
      errorPhoneClass.innerHTML = "Phone must have 10 numbers";
      return false;
    }
  } else {
    phoneText.innerHTML = "Phone*";
    phoneText.classList.add("error-text");
    phoneInput.classList.add("error-input");
    errorPhoneClass.classList.add("error");
    errorPhoneClass.classList.remove("label-none");
    errorPhoneClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputPhone = function () {
  phoneText.innerHTML = "Phone";
  phoneText.classList.remove("error-text");
  phoneInput.classList.remove("validate-input");
  phoneInput.classList.remove("error-input");
  errorPhoneClass.classList.remove("error");
  errorPhoneClass.classList.add("label-none");
};

var validateAdress = function () {
  var haveNumber = false;
  var haveLetter = false;
  var existSpace = false;
  var haveSpace = 0;
  var adressValue = adressInput.value.trim();
  for (var i = 0; i < adressValue.length; i++) {
    var char = adressValue[i];
    if (char == " ") {
      haveSpace += 1;
    }
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      haveLetter = true;
    } else if (char >= "0" && char <= "9") {
      haveNumber = true;
    } else if (haveSpace >= 1) {
      existSpace = true;
    } else {
      adressText.innerHTML = "Adress*";
      adressText.classList.add("error-text");
      adressInput.classList.add("error-input");
      errorAdressClass.classList.add("error");
      errorAdressClass.classList.remove("label-none");
      errorAdressClass.innerHTML =
        "Adress must have only numbers or letter and one space";
      return false;
    }
  }

  if (adressValue.length >= 5) {
    if (haveLetter && haveNumber && existSpace) {
      adressInput.classList.add("validate-input");
      return true;
    } else {
      adressText.innerHTML = "Adress*";
      adressText.classList.add("error-text");
      adressInput.classList.add("error-input");
      errorAdressClass.classList.add("error");
      errorAdressClass.classList.remove("label-none");
      errorAdressClass.innerHTML =
        "Adress must have only numbers or letter and one space";
      return false;
    }
  } else {
    adressText.innerHTML = "Adress*";
    adressText.classList.add("error-text");
    adressInput.classList.add("error-input");
    errorAdressClass.classList.add("error");
    errorAdressClass.classList.remove("label-none");
    errorAdressClass.innerHTML = "The field must at least 5 characters";
    return false;
  }
};

var resetInputAdress = function () {
  adressText.innerHTML = "Adress";
  adressText.classList.remove("error-text");
  adressInput.classList.remove("validate-input");
  adressInput.classList.remove("error-input");
  errorAdressClass.classList.remove("error");
  errorAdressClass.classList.add("label-none");
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
      cityText.innerHTML = "City*";
      cityText.classList.add("error-text");
      cityInput.classList.add("error-input");
      errorCityClass.classList.add("error");
      errorCityClass.classList.remove("label-none");
      errorCityClass.innerHTML = "City must have only letter and numbers";
      return false;
    }
  }

  if (isValid) {
    if (countLetter > 3) {
      cityInput.classList.add("validate-input");
      return true;
    } else {
      cityText.innerHTML = "City*";
      cityText.classList.add("error-text");
      cityInput.classList.add("error-input");
      errorCityClass.classList.add("error");
      errorCityClass.classList.remove("label-none");
      errorCityClass.innerHTML =
        "The field must have at least 4 or more letters";
      return false;
    }
  } else {
    cityText.innerHTML = "City*";
    cityText.classList.add("error-text");
    cityInput.classList.add("error-input");
    errorCityClass.classList.add("error");
    errorCityClass.classList.remove("label-none");
    errorCityClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputCity = function () {
  cityText.innerHTML = "City";
  cityText.classList.remove("error-text");
  cityInput.classList.remove("validate-input");
  cityInput.classList.remove("error-input");
  errorCityClass.classList.remove("error");
  errorCityClass.classList.add("label-none");
};

var validateZipCode = function () {
  var isValid = false;
  var zipCodeValue = zipCodeInput.value.trim();
  for (var i = 0; i < zipCodeValue.length; i++) {
    var number = zipCodeValue[i];
    if (!isNaN(number)) {
      isValid = true;
    } else {
      zipCodeText.innerHTML = "Zip Code*";
      zipCodeText.classList.add("error-text");
      zipCodeInput.classList.add("error-input");
      errorZipCodeClass.classList.add("error");
      errorZipCodeClass.classList.remove("label-none");
      errorZipCodeClass.innerHTML = "Zip Code must have only numbers";
      return false;
    }
  }

  if (isValid) {
    if (zipCodeValue.length >= 4 && zipCodeValue.length <= 5) {
      zipCodeInput.classList.add("validate-input");
      return true;
    } else {
      zipCodeText.innerHTML = "Zip Code*";
      zipCodeText.classList.add("error-text");
      zipCodeInput.classList.add("error-input");
      errorZipCodeClass.classList.add("error");
      errorZipCodeClass.classList.remove("label-none");
      errorZipCodeClass.innerHTML = "Zip Code must have only 4 or 5 numbers";
      return false;
    }
  } else {
    zipCodeText.innerHTML = "Zip Code*";
    zipCodeText.classList.add("error-text");
    zipCodeInput.classList.add("error-input");
    errorZipCodeClass.classList.add("error");
    errorZipCodeClass.classList.remove("label-none");
    errorZipCodeClass.innerHTML = "The field must not be empty";
    return false;
  }
};

var resetInputZipCode = function () {
  zipCodeText.innerHTML = "Zip Code";
  zipCodeText.classList.remove("error-text");
  zipCodeInput.classList.remove("validate-input");
  zipCodeInput.classList.remove("error-input");
  errorZipCodeClass.classList.remove("error");
  errorZipCodeClass.classList.add("label-none");
};

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
      passwordRepeatText.innerHTML = "Repeat Password*";
      passwordRepeatText.classList.add("error-text");
      passwordRepeatInput.classList.add("error-input");
      errorPasswordRepeatClass.classList.add("error");
      errorPasswordRepeatClass.classList.remove("label-none");
      errorPasswordRepeatClass.innerHTML =
        "Password must have only letter and numbers";
      return false;
    }
  }
  if (letter && number) {
    if (passwordRepeatInput.value.length < 8) {
      passwordRepeatText.innerHTML = "Repeat Password*";
      passwordRepeatText.classList.add("error-text");
      passwordRepeatInput.classList.add("error-input");
      errorPasswordRepeatClass.classList.add("error");
      errorPasswordRepeatClass.classList.remove("label-none");
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
    passwordRepeatText.innerHTML = "Repeat Password*";
    passwordRepeatText.classList.add("error-text");
    passwordRepeatInput.classList.add("error-input");
    errorPasswordRepeatClass.classList.add("error");
    errorPasswordRepeatClass.classList.remove("label-none");
    errorPasswordRepeatClass.innerHTML =
      "Password must have only letter and numbers";
    return false;
  }
};

var resetInputRepeatPassword = function () {
  passwordRepeatText.innerHTML = "Repeat Password";
  passwordRepeatText.classList.remove("error-text");
  passwordRepeatInput.classList.remove("validate-input");
  passwordRepeatInput.classList.remove("error-input");
  errorPasswordRepeatClass.classList.remove("error");
  errorPasswordRepeatClass.classList.add("label-none");
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
  if (!validateAdress()) {
    array.push("\nThe field Adress is wrong");
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
  var returnValidate = validateAllInformation()
  if (returnValidate == "") {
    alert(
      "Name: " +
        nameInput.value +
        "\nSurname: " +
        surnameInput.value +
        "\nDNI: " +
        dniInput.value +
        "\nBirthday: " +
        birthdayInput.value +
        "\nPhone: " +
        phoneInput.value +
        "\nAdress: " +
        adressInput.value +
        "\nCity: " +
        cityInput.value +
        "\nZip Code: " +
        zipCodeInput.value +
        "\nEmail: " +
        emailInput.value +
        "\nPassword: " +
        passwordInput.value
    );
  } else {
    alert(returnValidate);
  }
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

adressInput.addEventListener("blur", validateAdress);
adressInput.addEventListener("focus", resetInputAdress);

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

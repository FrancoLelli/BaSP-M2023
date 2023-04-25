var nameText = document.getElementById("nameText");
var nameInput = document.getElementById("nameInput");
var errorNameClass = document.getElementById("errorName");

var surnameText = document.getElementById("surnameText");
var surnameInput = document.getElementById("surnameInput");
var errorSurnameClass = document.getElementById("errorSurname");

var emailText = document.getElementById("emailText");
var emailInput = document.getElementById("emailInput");
var errorEmailClass = document.getElementById("errorEmail");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var selectText = document.getElementById("selectText");
var selectInput = document.getElementById("selectInput");
var errorSelectClass = document.getElementById("errorSelect");
var textSelect = "";

var messsageText = document.getElementById("messageText");
var messageInput = document.getElementById("messageInput");
var errorMessageClass = document.getElementById("errorMessage");

var btnSubmit = document.getElementById("btnSubmit");

var btnReset = document.getElementById("btnReset");

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

var validateSelect = function () {
  var selectValue = selectInput.value;
  if (selectValue === "") {
    selectText.innerHTML = "Reason for contact*:";
    selectText.classList.add("error-text");
    selectInput.classList.add("error-input");
    errorSelectClass.classList.add("error");
    errorSelectClass.classList.remove("label-none");
    return false;
  } else {
    selectInput.classList.add("validate-input");
    if (selectValue === "claim") {
      textSelect = "I want to make a claim";
    } else if (selectValue === "suggestion") {
      textSelect = "I want to make a query or suggestion";
    } else {
      textSelect = "I want to know the memberships and costs";
    }
    return true;
  }
};

var resetInputSelect = function () {
  selectText.innerHTML = "Reason for contact:";
  selectText.classList.remove("error-text");
  selectInput.classList.remove("validate-input");
  selectInput.classList.remove("error-input");
  errorSelectClass.classList.remove("error");
  errorSelectClass.classList.add("label-none");
};

var validateMessage = function () {
  var messageValue = messageInput.value.trim();
  if (messageValue.length >= 3) {
    messageInput.classList.add("validate-input");
    return true;
  } else {
    messsageText.innerHTML = "Message*:";
    messsageText.classList.add("error-text");
    messageInput.classList.add("error-input");
    errorMessageClass.classList.add("error");
    errorMessageClass.classList.remove("label-none");
    errorMessageClass.innerHTML = "The field only accepts letters";
    return false;
  }
};

var resetInputMessage = function () {
  messsageText.innerHTML = "Message:";
  messsageText.classList.remove("error-text");
  messageInput.classList.remove("validate-input");
  messageInput.classList.remove("error-input");
  errorMessageClass.classList.remove("error");
  errorMessageClass.classList.add("label-none");
};

var resetForm = function () {
  resetInputName();
  resetInputSurname();
  resetInputEmail();
  resetInputSelect();
  resetInputMessage();
};

var validateAllInformation = function () {
  var array = [];
  if (!validateName()) {
    array.push("The field Name is wrong");
  }
  if (!validateSurname()) {
    array.push("\nThe field Surname is wrong");
  }
  if (!validateEmail()) {
    array.push("\nThe field Email is wrong");
  }
  if (!validateSelect()) {
    array.push("\nThe field Select is wrong");
  }
  if (!validateMessage()) {
    array.push("\nThe field Message is wrong");
  }
  return array;
};

var formValidate = function (e) {
  e.preventDefault();
  var returnValidate = validateAllInformation();
  if (returnValidate == "") {
    alert(
      "Name: " +
        nameInput.value +
        "\nSurname: " +
        surnameInput.value +
        "\nEmail: " +
        emailInput.value +
        "\nReason of Contact: " +
        textSelect +
        "\nMessage: " +
        messageInput.value
    );
  } else {
    alert(returnValidate);
  }
};

nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("focus", resetInputName);

surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("focus", resetInputSurname);

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", resetInputEmail);

selectInput.addEventListener("blur", validateSelect);
selectInput.addEventListener("focus", resetInputSelect);

messageInput.addEventListener("blur", validateMessage);
messageInput.addEventListener("focus", resetInputMessage);

btnSubmit.addEventListener("click", formValidate);
btnReset.addEventListener("click", resetForm);

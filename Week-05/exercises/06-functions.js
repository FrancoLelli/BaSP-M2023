console.log("-------------------------EXERCISE 6 : FUNCTIONS-------------------------");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log("-Exercise 6.a");
var sumNumbers = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
}

var result = sumNumbers(2, 3);
console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no
es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar
el valor NaN como resultado.*/

console.log("-Exercise 6.b");
var sumNumbersValid = function (numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    alert("Wrong parameters");
    return NaN;
  } else {
    return numberOne + numberTwo;
  }
}
var result = sumNumbersValid(3, "A");
console.log(result);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

console.log("-Exercise 6.c");
var validateInteger = function (number) {
  return number % 1 == 0;
}

var result = validateInteger(8);
console.log(result);

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y
que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el
número convertido a entero (redondeado).*/

console.log("-Exercise 6.d");
var sumNumbersInteger = function (numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    alert("Wrong parameters");
    return NaN;
  }
  if (!validateInteger(numberOne)) {
    alert("Its not a Integer => " + numberOne);
    return Math.round(numberOne);
  }
  if (!validateInteger(numberTwo)) {
    alert("Its not a Integer => " + numberTwo);
    return Math.round(numberTwo);
  }
  return numberOne + numberTwo;
}

var result = sumNumbersInteger(4, 2);
console.log(result);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log("-Exercise 6.e");
var validNumbers = function (numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    alert("Wrong parameters");
    return NaN;
  }
  if (!validateInteger(numberOne)) {
    alert("Its not a Integer => " + numberOne);
    return Math.round(numberOne);
  }
  if (!validateInteger(numberTwo)) {
    alert("Its not a Integer => " + numberTwo);
    return Math.round(numberTwo);
  }
  return true;
}

var sumOrReturnValidation = function (numberOne, numberTwo) {
  var returnValidation = validNumbers(numberOne, numberTwo);
  if (returnValidation === true) {
    return numberOne + numberTwo;
  } else {
    return returnValidation;
  }
}

var result = sumOrReturnValidation(1, 1.2);
console.log(result);

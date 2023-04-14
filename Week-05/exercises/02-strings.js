console.log("-------------------------EXERCISE 2 : STRINGS-------------------------");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

console.log("-Exercise 2.a");
var textOne = "Communication";
var result = textOne.toUpperCase();
console.log(result);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercise 2.b");
var textTwo = "Exaggeration";
var result = textTwo.substring(0, 5);
console.log(result);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercise 2.c");
var textThree = "Organization";
var result = textThree.substring(textThree.length - 3);
console.log(result);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +). */

console.log("-Exercise 2.d");
var textFour = "collaboration";
var result = textFour.substring(0, 1).toUpperCase() + textFour.substring(1).toLowerCase();
console.log(result);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log("-Exercise 2.e");
var textFive = "Lionel Messi is world champion";
var result = textFive.indexOf(" ");
console.log(result);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).*/

console.log("-Exercise 2.f");
var textSix = "congRAtulations cAStellanos";
var wordOne =
  textSix.substring(0, 1).toUpperCase() +
  textSix.substring(1, textSix.indexOf(" ")).toLowerCase();
var wordTwo =
  textSix
    .substring(textSix.indexOf(" "), textSix.indexOf(" ") + 2)
    .toUpperCase() + textSix.substring(textSix.indexOf(" ") + 2).toLowerCase();
var result = wordOne + wordTwo;
console.log(result);

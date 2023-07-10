// Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo
let nombre = prompt("Enter your name");
console.log("Hello, " + nombre + "!");

// Pedir un número mediante un prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola
let numeroAlmacenado = 21; // Número almacenado en una variable
let numero = parseInt(prompt("Enter a number, please"));
let resultadoSuma = numero + numeroAlmacenado;
console.log("The final result of the addition is: " + resultadoSuma);

// Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta
let texto1 = prompt("Please enter a text");
let texto2 = prompt("Good! Please enter another text");
let textoConcatenado = texto1 + " " + texto2;
alert("Excellent! The concatenation of the texts is:" + textoConcatenado);


// El script fue incluido por arriba de la etiqueta </body> -línea 36 del código- en el archivo work.html como se indicó en la clase.
// En la parte superior -línea 5 del código- del archivo work.html se colocó el archivo styles.css
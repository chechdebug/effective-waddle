//Sintaxis y variables

/*
comentario largo
*/ 

//declaración de variables
let bandaFavorita; 
//inicialización
bandaFavorita="Coldplay" 


//declaración e inicialización
const anioActual=2023;

let altura=1.70;

//Operaciones matemáticas básicas
let número1=210; 
let número2=11; 

let suma = número1 + número2; //190+80
let resta = número1 - número2; //190-80 
let multiplicación = número1 * número2; //190*80 
let división = número1 / número2; //190/80

//Concatenación 
let palabra1="Hola";
let palabra2="Ceci";
let frase = palabra1 +" "+ palabra2; //Hola Ceci

//Salida de datos console.log

console.log("Welcome to JavaScript");
console.log("Resultado de la suma de los números: " +suma);
console.log("Resultado de la resta de los números: " +resta);
console.log("Resultado de la multiplicación de los números: " +multiplicación);
console.log("Resultado de la división de los números: " +división);
console.log("La frase es: "+frase)

//Entrada de información del user -prompt- 
let nombre=prompt("Enter you nickname");
console.log("Good night" + " " + nombre)

//Exit data alert 
alert("Goodnight "+ nombre);

//51 
let entrada = prompt("Enter a character");
let salida = entrada + " " + "entered";
alert(salida);

//parseInt parseFloat (convertir texto numerico en numeros)
//prompt siempre toma los datos que ingresa el usuario como string (texto)
let anioNacimiento = parseInt(prompt("Enter your year of birth"));//anioNacimiento
let edad = anioActual - anioNacimiento;
alert("You have "+edad+" years");

let precio = parseFloat(prompt("Enter the price of your product"))
let precioConIva = precio*1.21; 
alert("THE FINAL PRICE WITH IVA INCLUDED IS $ "+precioConIva);

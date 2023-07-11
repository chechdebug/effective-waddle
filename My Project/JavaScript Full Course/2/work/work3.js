//Condicionales y juego trivia sobre partidos del mundial, actualizado.

let cantidadPartidos = parseInt(prompt("¿Cuántos partidos se juegan en un Mundial de fútbol?"));
let contadorPuntos = 0;

if (cantidadPartidos == 64) {
  console.log("¡Excelente respuesta! Efectivamente, son 64 partidos. ¡Ganaste dos puntos!");
  contadorPuntos += 2;
} else if (cantidadPartidos == 50) {
  console.log("En el Mundial de la FIFA se juegan 64 partidos, pero ganaste un punto.");
  contadorPuntos++;
} else {
  console.log("Son 64 partidos de fútbol en el Mundial, no sumas puntos.");
}

console.log("Puntos: " + contadorPuntos);

let respuesta2018 = prompt("¿Dónde se hizo el Mundial 2018?");
if (respuesta2018.toLowerCase() === "rusia") {
  console.log("¡Respuesta correcta! El Mundial de fútbol 2018 se realizó en Rusia. Ganaste un punto.");
  contadorPuntos++;
} else {
  console.log("Respuesta incorrecta, no se hizo en ese país. El mundial de fútbol de 2018 se hizo en Rusia. No sumas puntos esta vez. ");
}

let respuesta2014 = prompt("¿Dónde se hizo el Mundial 2014?");
if (respuesta2014.toLowerCase() === "brasil") {
  console.log("¡Respuesta correcta! El mundial se hizo en Brasil en 2014. Ganaste un punto.");
  contadorPuntos++;
} else {
  console.log("Respuesta incorrecta. No se hizo en el país que me indicaste. Pero quiero contarte que se hizo en Brasil. Esta vez no sumas puntos.");
}

console.log("Puntos: " + contadorPuntos);

if (contadorPuntos == 4) {
  console.log("¡Felicitaciones! Obtuviste todos los puntos correctamente.");
  console.log("¡La verdad que sabes un montón sobre el Mundial de fútbol!");
}


// Ejercicio entregable: Algoritmo con un condicional orientado a aplicación de cuidado de mascotas (Petily)

// Solicitar al usuario el nombre de la mascota mediante prompt.
let nombreMascota = prompt("¡Te damos la bienvenida a Petily, aplicación de cuidado de mascotas!\nPor favor, ingresa el nombre de tu mascota:");

// Solicitar al usuario la edad de la mascota mediante prompt y validar que sea un número OK.
let edadMascota = parseInt(prompt("Ingresa la edad de tu mascota en años:"));
while (isNaN(edadMascota)) {
  edadMascota = parseInt(prompt("Por favor, ingresa una edad válida para tu mascota en años:"));
}

// Solicitar al usuario el estado de salud de la mascota mediante prompt y evaluarlo.
let estadoSalud = prompt("Ingresa el estado de salud de tu mascota (bueno, regular o malo):");
estadoSalud = estadoSalud.toLowerCase();
if (estadoSalud === "bueno") {
  console.log(nombreMascota + " está en buen estado de salud. ¡Genial!");
} else if (estadoSalud === "regular") {
  console.log(nombreMascota + " está en estado de salud regular. Recuerda brindarle los cuidados necesarios.");
} else if (estadoSalud === "malo") {
  console.log(nombreMascota + " está en mal estado de salud. ¡Es importante buscar atención veterinaria urgente!");
} else {
  console.log("No se reconoce el estado de salud ingresado para " + nombreMascota + ".");
}

// Pedir el tipo de alimentación de la mascota mediante prompt.
let alimentacion = prompt("Ingresa el tipo de alimentación de " + nombreMascota + ":");

// Mostrar resumen de la mascota y su cuidado al usuario.
console.log("--- Resumen de " + nombreMascota + " ---");
console.log("Edad: " + edadMascota + " años");
console.log("Estado de salud: " + estadoSalud);
console.log("Alimentación: " + alimentacion);


// Ejercicios algoritmo con condicional: numéricos 

// Algoritmo 1: Pedir número al user mediante prompt y si es mayor a 1000 mostrar un alert en pantalla.
let numero = parseInt(prompt("Ingresa un número:"));

if (numero > 1000) {
  alert("El número ingresado es mayor a 1000.");
}

if (numero < 1000) {
  alert("El número ingresado es menor a 1000");
}

// Algoritmo 2: Pedir un texto mediante prompt, y si es "Hola" mostrar un alert por consola.
let texto = prompt("Ingresa un texto:");
if (texto.toLowerCase() === "hola") {
  console.log("El texto ingresado es igual a 'Hola'.");
}

// Algoritmo 3: Pedir un número por prompt y determinar si está entre 10 y 50. En caso positivo mostrar un alert en pantalla.
let numero2 = parseInt(prompt("Ingresa otro número:"));
if (numero2 >= 10 && numero2 <= 50) {
  alert("El número ingresado está entre 10 y 50 (incluyendo ambos límites).");
}

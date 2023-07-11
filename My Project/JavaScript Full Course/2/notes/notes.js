//Condicionales - Notas de la clase 
let nombreMessi = prompt("Ingresa el nombre de Messi");
let contadorPuntos = 0;

if (nombreMessi === "Lionel") {
  console.log("¡Genial! ¡Ganas un punto!");
  contadorPuntos += 1;
}

console.log("Puntos:"+contadorPuntos);

let competenciaTop = prompt("Ingresa la competencia más famosa de futbol");

if (competenciaTop == "Mundial"){
  console.log("¡Genial! ¡Ganas un punto!");
  contadorPuntos++;
}else{
  console.log("No es " +competenciaTop+" es el Mundial")
  console.log("No sumas puntos esta vez");
}

console.log("Puntos: "+contadorPuntos);

let cantidadPartidos = parseInt(prompt("¿Cuantos partidos se juegan en un Mundial de futbol?"));

if(cantidadPartidos == 64){
console.log("Excelente, ¡Ganaste dos puntos!");
contadorPuntos+=2;

}else if(cantidadPartidos == 50){
console.log("En el Mundial de la FIFA se jugan 64 partidos pero ganaste un punto");
contadorPuntos++;
}else{
  console.log("Son 64 partidos, no sumas puntos.")
}
console.log("Puntos: "+contadorPuntos);

// podría ir otro if así muestro los resultados finales en caso de que hayas hecho todo bien
// felicitarlo al usuario al final del juego  -- archivo work
// COMENTAR CÓDIGO: COMMAND + ALT + SHIFT + 7

// VARIABLES BOOLEANAS 
let juegoIniciado = true;

let edadUsuario = parseInt(prompt("Ingresa tu edad")); // 17

let esMayorDeEdad = (edadUsuario >= 18); // false

if (esMayorDeEdad) {
  console.log("Puedes ver esta página web.");
} else {
  console.log("No puedes ver esta página web.");
}

// OPCIONAL TAREA: ARMAR MÁS JUEGUITOS!!! como una TRIVIA - AHORCADO
// OPERADORES LÓGICOS 
let número1=1;
let númeroUno= "1"
let sonIguales = (número1 == númeroUno)
console.log("Los números son iguales "+sonIguales)

// El comparador con el doble igual detecta que son iguales. 
// Porque compara por valor, pero no por tipo. 
// No se fija si uno es string o si otro es entero. 
// Se fija si es el mismo número.

let sonEstrictamenteIguales = (número1 === númeroUno);
console.log("Los números son estrictamente iguales "+sonEstrictamenteIguales)

// === compara por tipo y valor. No son variables del mismo tipo.
// === se fija en todos los detalles. 

// EL SÁBADO SI HAY SOL Y COBRÉ MI SUELDO, HARÉ UN ASADO 
// LLEGA EL SÁBADO, MIRO EL SOL, ME VOY AL HB Y VEO MI SUELDO, ME PAGARON, ME COMPRO CARNE
// PARA HACER EL ASADO NECESITO QUE SE DEN LAS DOS CONDICIONES, SOL Y SUELDO (CONDICIONES!!)

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado != "") && (apellidoIngresado!="")){
  alert("Nombre: "+nombreIngresado +"/nApellido: "+apellidoIngresado);

}else{
  alert("Error: Enter nombre y apellido");
}

//&& and

let user = prompt("Enter username");
let password = prompt("Enter password");

if (user === "Pepito1999" && password === "Pepo") {
  alert("Bienvenido al sistema, " + user);
} else {
  alert("Usuario o contraseña incorrecta");
}

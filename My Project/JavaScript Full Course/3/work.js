let cantidadMascotas = (prompt("Ingresar la cantidad de mascotas que tenes:"));

for (let i = 1; i <= cantidadMascotas; i++) {
  console.log("¡Hola, mascota", i + "!");
}

console.log("¡Gracias por cuidar a tus mascotas!");

let registroActividades = "";
let actividad = prompt("Ingresa una actividad que hayas realizado con tu mascota ('ESC' para salir):");

while (actividad !== "ESC") {
  registroActividades += "- " + actividad + "\n";
  console.log("Registro actual de actividades:\n", registroActividades);
  actividad = prompt("Ingresa otra actividad que hayas realizado con tu mascota ('ESC' para salir):");
}

console.log("¡Gracias por cuidar a tu mascota!");

let totalAlimento = 0;
let alimentoDiario = parseInt(prompt("Ingresa la cantidad de alimento diaria para tu mascota en gramos (0 para salir):"));

while (alimentoDiario !== 0) {
  totalAlimento += alimentoDiario;
  console.log("Has dado un total de", totalAlimento, "gramos de alimento a tu mascota.");
  alimentoDiario = parseInt(prompt("Ingresa la cantidad de alimento diaria para tu mascota en gramos (0 para salir):"));
}

console.log("¡Gracias por cuidar a tu mascota!");



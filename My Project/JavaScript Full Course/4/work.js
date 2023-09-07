// Función para calcular el promedio de comida semanal que come la mascota
function calcularPromedioComidaSemanal(peso) {
    // Supongamos que la mascota come el 3% de su peso corporal a la semana
    return peso * 0.03;
  }
  
  // Función para calcular las vacunas de la mascota
  function calcularVacunas(anio) {
    // Supongamos que se aplican entre 2 y 4 vacunas por año
    return Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  }
  
  // Función para calcular la edad promedio de las mascotas registradas
  function calcularEdadPromedioMascotas(mascotas) {
    let totalEdad = 0;
  
    for (let i = 0; i < mascotas.length; i++) {
      totalEdad += mascotas[i].edad;
    }
  
    return totalEdad / mascotas.length;
  }
  
  // Función para agregar una mascota al formulario y mostrarla en la lista
  function agregarMascota(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const especie = document.getElementById('especie').value;
    const edad = parseInt(document.getElementById('edad').value);
  
    const mascota = { nombre, especie, edad };
  
    const listaMascotas = document.getElementById('mascotasList');
    const nuevaMascota = document.createElement('li');
    nuevaMascota.textContent = `Nombre: ${nombre}, Especie: ${especie}, Edad: ${edad}`;
    listaMascotas.appendChild(nuevaMascota);
  
    // Calcular promedio de comida semanal
    const promedioComida = calcularPromedioComidaSemanal(edad);
    console.log(`El promedio de comida semanal para ${nombre} es: ${promedioComida} kg`);
  
    // Calcular vacunas
    const numVacunas = calcularVacunas(new Date().getFullYear());
    console.log(`${nombre} necesita ${numVacunas} vacuna(s) este año`);
  
    // Actualizar edad promedio de mascotas registradas
    const mascotasRegistradas = Array.from(listaMascotas.children).map(mascota => {
      const info = mascota.textContent.split(', ');
      const nombre = info[0].split(': ')[1];
      const especie = info[1].split(': ')[1];
      const edad = parseInt(info[2].split(': ')[1]);
      return { nombre, especie, edad };
    });
    const edadPromedio = calcularEdadPromedioMascotas(mascotasRegistradas);
    console.log(`La edad promedio de las mascotas registradas es: ${edadPromedio} años`);
  
    // Limpiar formulario
    document.getElementById('mascotaForm').reset();
  }
  
  // Evento para agregar una mascota al formulario
  document.getElementById('mascotaForm').addEventListener('submit', agregarMascota);
  
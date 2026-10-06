const personajesSimpsons = [
  { nombre: "Homero", edad: 39, rol: "Padre" },
  { nombre: "Marge", edad: 36, rol: "Madre" },
  { nombre: "Bart", edad: 10, rol: "Hijo" },
  { nombre: "Lisa", edad: 8, rol: "Hija" },
  { nombre: "Maggie", edad: 1, rol: "Hija" },
  { nombre: "Ned", edad: 35, rol: "Vecino" },
  { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
  { nombre: "Milhouse", edad: 10, rol: "Amigo" },
  { nombre: "Nelson", edad: 12, rol: "Bravucón" },
  { nombre: "Martin", edad: 10, rol: "Compañero de clase" },
];

// Ejercicio 5: combinar arrays con spread
const otrosPersonajes = [
  { nombre: "Apu", edad: 42, rol: "Comerciante" },
  { nombre: "Skinner", edad: 44, rol: "Director" },
  { nombre: "Barney", edad: 40, rol: "Vecino" },
];

const todosLosPersonajes = [...personajesSimpsons, ...otrosPersonajes];
console.log("Ejercicio 5 - Todos los personajes:", todosLosPersonajes); 
console.log("Ejercicio 5 - Personajes originales:", personajesSimpsons);
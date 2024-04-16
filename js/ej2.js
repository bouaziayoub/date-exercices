// Author: Ayoub Bouazi

// 2. Realiza un script que pida un nombre y dos apellidos e indique el tiempo
// que se tardó en introducir los datos. La salida sería algo así como : En
// introducir Luís Perez Alonso ha tardado 25 segundos.
const solEj2 = document.querySelector(".solu-ej2");
const namee = document.getElementById("name");
const surname1 = document.getElementById("surname1");
const surname2 = document.getElementById("surname2");
const btn = document.getElementById("btn");
const errorName = document.querySelector(".errorName");
const errorSurname1 = document.querySelector(".errorSurname1");

let startTime;

// Evento que se dispara cuando se introduce la primera letra en el input
namee.addEventListener("input", function () {
  // Si es la primera vez que se introduce una letra, guarda el tiempo actual
  if (namee.value.length === 1) {
    startTime = new Date();
  }
});

// Evento que se dispara cuando se hace click en el botón
btn.addEventListener("click", function () {
  // Si se ha introducido al menos una letra en el input
  if (validateInput() && startTime) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Tiempo en segundos
    solEj2.innerHTML = `En introducir ${namee.value} ${surname1.value} ${surname2.value} ha tardado ${timeTaken} segundos.`;
    solEj2.style.color = "green";
    solEj2.style.fontWeight = "bold";
  }
});

// Función que valida los inputs
function validateInput() {
  if (namee.value === "") {
    errorName.innerHTML = "El campo nombre es obligatorio";
    return false;
  } else {
    errorName.innerHTML = "";
  }
  if (surname1.value === "") {
    errorSurname1.innerHTML = "El campo apellido es obligatorio";
    return false;
  } else {
    errorSurname1.innerHTML = "";
  }
  return true;
}

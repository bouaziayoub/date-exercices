// Author: Ayoub Bouazi

// 1.Realiza un script que escriba en el documento la fecha y hora actual. La
// salida deberá tener elsiguiente formato:
// Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.

const solEj1 = document.querySelector(".solu-ej1");
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const today = `Hoy es ${days[date.getDay()]}, ${day} de ${
  months[month]
} de ${year} y son las ${hour}:${minutes} horas.`;

solEj1.innerHTML = today;
solEj1.style.color = "green";
solEj1.style.fontWeight = "bold";

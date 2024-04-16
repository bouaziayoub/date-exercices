// Author: Ayoub Bouazi

// 3. Realiza un script pida un mes y año e imprima su calendario. No hace falta
// esmerarse en la presentación del calendario, el calendario simplificado
// puede ser del tipo:
const soluEj3 = document.querySelector(".solu-ej3");
const monthEj3 = document.getElementById("month");
const yearEj3 = document.getElementById("year");
const btnCalander = document.getElementById("btnCalander");
const errorMonth = document.querySelector(".errorMonth");
const errorYear = document.querySelector(".errorYear");
const monthsEj3 = [
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
// Validar que el mes sea un número entre 1 y 12
monthEj3.addEventListener("input", () => {
  if (
    monthEj3.value < 1 ||
    monthEj3.value > 12 ||
    isNaN(monthEj3.value) ||
    monthEj3.value === ""
  ) {
    monthEj3.value = "";
    errorMonth.innerHTML = "El mes debe ser un número entre 1 y 12";
  } else {
    errorMonth.innerHTML = "";
  }
});
// Validar que el año sea un número entre 1900 y 2100
yearEj3.addEventListener("input", () => {
  if (
    yearEj3.value < 1900 ||
    yearEj3.value > 2100 ||
    isNaN(yearEj3.value) ||
    yearEj3.value === ""
  ) {
    yearEj3.value = "";
    errorYear.innerHTML = "El año debe ser un número e  ntre 1900 y 2100";
  } else {
    errorYear.innerHTML = "";
  }
});
btnCalander.addEventListener("click", () => {
  const date = new Date(yearEj3.value, monthEj3.value - 1, 1);
  const days = new Date(yearEj3.value, monthEj3.value, 0).getDate();
  const day = date.getDay();
  let calendar = "";
  let count = 1;
  calendar += `<h3>${monthsEj3[monthEj3.value - 1]} ${yearEj3.value}</h3>`;
  calendar += `<table border="1">`;
  calendar += `<tr>`;
  calendar += `<th>D</th>`;
  calendar += `<th>L</th>`;
  calendar += `<th>M</th>`;
  calendar += `<th>X</th>`;
  calendar += `<th>J</th>`;
  calendar += `<th>V</th>`;
  calendar += `<th>S</th>`;
  calendar += `</tr>`;
  for (let i = 0; i < 5; i++) {
    calendar += `<tr>`;
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < day) {
        calendar += `<td></td>`;
      } else if (count > days) {
        calendar += `<td></td>`;
      } else {
        calendar += `<td>${count}</td>`;
        count++;
      }
    }
    calendar += `</tr>`;
  }
  calendar += `</table>`;
  soluEj3.innerHTML = calendar;
  soluEj3.style.color = "green";
  soluEj3.style.fontWeight = "bold";
});

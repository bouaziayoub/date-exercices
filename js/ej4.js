// Author: Ayoub Bouazi

// 4. Realiza un script que pida una fecha y muestre tres fechas que sean la
// fecha introducida a 30, 60 y 90 días.
const soluEj4 = document.querySelector(".solu-ej4");
const btnDate = document.getElementById("btnDate");

btnDate.addEventListener("click", () => {
  const date = document.getElementById("date").value;
  const date1 = new Date(date);
  const date2 = new Date(date);
  const date3 = new Date(date);
  date2.setDate(date2.getDate() + 30);
  date3.setDate(date3.getDate() + 60);
  date4 = new Date(date);
  date4.setDate(date4.getDate() + 90);
  soluEj4.innerHTML = `
        <table>
          <tr>
            <th>Fecha</th>
            <th>30 dias</th>
            <th>60 dias</th>
            <th>90 dias</th>
          </tr>
          <tr>
            <td>${date}</td>
            <td>${date2.toDateString()}</td>
            <td>${date3.toDateString()}</td>
            <td>${date4.toDateString()}</td>
          </tr>
        </table>
        `;
});

soluEj4.style.color = "green";
soluEj4.style.fontWeight = "bold";
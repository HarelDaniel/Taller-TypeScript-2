import { series } from "./Data.js";
document.addEventListener("DOMContentLoaded", () => {
    let tableBody = document.getElementById("series");
    let averageSeasons = document.getElementById("promedio");
    let totalSeasons = 0;
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
      <td>${serie.description}</td>
      <td><a href="${serie.link}" target="_blank">Ver más</a></td>
      <td><img src="${serie.image}" alt="${serie.name}" width="100"></td>
    `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / series.length;
    averageSeasons.textContent = `Promedio de temporadas: ${average.toFixed(2)}`;
});

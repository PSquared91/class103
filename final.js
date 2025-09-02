// ----- Helpers -----
function cToF(c) { return (c * 9/5) + 32; }
function fToC(f) { return (f - 32) * 5/9; }

const output = document.getElementById("output");
const thermoFill = document.getElementById("thermoFill");

// Update thermometer from a Celsius value
function updateThermometer(celsius) {
  // scale 0–100°C to 0–100% height (container is 220px high in CSS)
  const clamped = Math.max(0, Math.min(100, celsius));
  thermoFill.style.height = clamped + "%";

  // color rules
  if (celsius <= 10) {
    thermoFill.style.backgroundColor = "blue";
  } else if (celsius <= 25) {
    thermoFill.style.backgroundColor = "orange";
  } else {
    thermoFill.style.backgroundColor = "red";
  }
}

// ----- Converter buttons -----
document.getElementById("btnCtoF").addEventListener("click", () => {
  const input = prompt("Enter temperature in °C:");
  const c = parseFloat(input);

  if (isNaN(c)) {
    output.textContent = "❌ Please enter a valid number.";
    return;
  }
  const f = cToF(c);
  output.textContent = `${c} °C = ${f.toFixed(2)} °F`;
  updateThermometer(c);
});

document.getElementById("btnFtoC").addEventListener("click", () => {
  const input = prompt("Enter temperature in °F:");
  const f = parseFloat(input);

  if (isNaN(f)) {
    output.textContent = "❌ Please enter a valid number.";
    return;
  }
  const c = fToC(f);
  output.textContent = `${f} °F = ${c.toFixed(2)} °C`;
  updateThermometer(c);
});

// ----- Generate conversion table -----
document.getElementById("btnTable").addEventListener("click", () => {
  const tableArea = document.getElementById("tableArea");

  // Build table markup
  let html = `
    <table>
      <thead>
        <tr>
          <th>Celsius (°C)</th>
          <th>Fahrenheit (°F)</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let c = 0; c <= 100; c += 10) {
    const f = cToF(c);
    html += `<tr><td>${c}°C</td><td>${f.toFixed(2)}°F</td></tr>`;
  }

  html += `</tbody></table>`;
  tableArea.innerHTML = html;  // DOM manipulation requirement
});
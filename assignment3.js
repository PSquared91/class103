console.log("assignment3.js loaded");

// Conversion logic
function convertTemperature(temp, scale) {
  if (scale === "C") {
    const f = (temp * 9/5) + 32;
    return { text: f + " °F", color: "red" };
  } else if (scale === "F") {
    const c = (temp - 32) * 5/9;
    return { text: c.toFixed(2) + " °C", color: "blue" };
  }
  return { text: "Invalid scale. Use 'C' or 'F'.", color: "black" };
}

// Wire up button after DOM is ready (defer ensures this runs after HTML exists)
document.getElementById("convertBtn").addEventListener("click", function () {
  const tempStr = document.getElementById("tempInput").value;
  const scale = (document.getElementById("scaleInput").value || "")
                  .trim().toUpperCase();
  const output = document.getElementById("output");

  if (tempStr === "") {
    output.style.color = "black";
    output.textContent = "Please enter a temperature.";
    return;
  }

  const temp = parseFloat(tempStr);
  if (Number.isNaN(temp)) {
    output.style.color = "black";
    output.textContent = "Temperature must be a number.";
    return;
  }

  const { text, color } = convertTemperature(temp, scale);
  output.style.color = color;
  output.textContent = "Converted Temperature: " + text;
});
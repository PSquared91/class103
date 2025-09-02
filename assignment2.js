function Welcome(){
    let name = prompt("Enter temperature in Celcius:");
    console.log("Welcome " + name);

function convertTemp() {
  // Prompt user for Celsius input
  let temperature = prompt("Enter the temperature in Celsius:");

  // Convert input to a number
  temperature = Number(temperature);

  // Apply formula
  let fahrenheit = (temperature * 9/5) + 32;

  // Display result in HTML
  document.getElementById("result").innerHTML =
    `The conversion of Celsius ${temperature}°C is Fahrenheit ${fahrenheit}°F`;

  // Also log it in console
  console.log(`Celsius: ${temperature}°C = Fahrenheit: ${fahrenheit}°F`);
}
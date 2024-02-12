function displayCelsius(temp) {

    let celsiusAmount = ((temp - 32) * (5/9))
    return celsiusAmount;
}

function displayFarenheit(temp) {
    let farenheitAmount = ((temp * (9/5)) + 32 )
    return farenheitAmount;
}

let currentUnit = "Celsius";
let currentTemp = "90";

function displayTemperature() {
    let tempValue = document.querySelector("#tempValue");
    let tempUnit = document.querySelector("#tempUnit");

    if (currentUnit === "Celsius") {
        currentTemp = (currentTemp * (9/5)) + 32;
        currentUnit = "Fahrenheit";
    } else if (currentUnit === "Fahrenheit") {
        currentTemp = (currentTemp - 32) * (5/9);
        currentUnit = "Celsius";
    }

    tempValue.innerHTML = currentTemp;
    tempUnit.innerText = currentUnit;
}

document.addEventListener("DOMContentLoaded", function() {
    displayTemperature();
})
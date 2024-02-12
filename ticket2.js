function displayTemperatureInCelsius(fTemperature) {
    let cTemperature = (fTemperature - 32) * 5/9;
    return cTemperature;
}


function displayTemperatureInFahrenheit(cTemperature) {
    let fTemperature = cTemperature * 9/5 + 32;
    return fTemperature;
}

let lastReturnedCelsius = true; // Default to Celsius

function toggleTemperatureDisplay() {
    lastReturnedCelsius = !lastReturnedCelsius;
    return lastReturnedCelsius ? "Celsius" : "Fahrenheit";
}

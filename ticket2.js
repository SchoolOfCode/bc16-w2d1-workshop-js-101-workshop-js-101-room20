function displayTemperatureInCelsius(fTemperature) {
    let cTemperature = (fTemperature - 32) * 5/9;
    console.log(cTemperature)
    return cTemperature;
}


function displayTemperatureInFahrenheit(cTemperature) {
    let fTemperature = cTemperature * 9/5 + 32;
    console.log(fTemperature)
    return fTemperature;
}

let lastReturn = "farenheit"; // Default to Celsius

function toggleTemperatureDisplay(temp) {
    if (lastReturn == "celsius") {
        displayTemperatureInFahrenheit(temp)

        lastReturn = "farenheit"
    } else {
        displayTemperatureInCelsius(temp)
        lastReturn = "celsius"
    }
}

toggleTemperatureDisplay(30)
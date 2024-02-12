function convertGBPtoEUR(gbpAmount) {
    let conversionRate = 1.25;
    return gbpAmount * conversionRate;
}

function convertGBPtoUSD(gbpAmount) {
    let conversionRate = 1.5;
    return gbpAmount * conversionRate;
}

function convertGBPtoAny(gbpAmount, currencyCode) {
    let conversionRate;
    
    if (currencyCode === "EUR") {
        conversionRate = 1.25;
    } else if (currencyCode === "USD") {
        conversionRate = 1.5;
    }
    
    return gbpAmount * conversionRate;
}

function convertCurrency() {
    const convertAmountGBP = document.querySelector("#gbpAmount").value;
    const currencyCode = document.querySelector("#currencyCode").value;
    const resultShow = document.querySelector("#result");

    let conversionRate;
    let convertedAmount;

    if (currencyCode === "EUR") {
        conversionRate = 1.25;
        convertedAmount = convertAmountGBP * conversionRate;
    } else if (currencyCode === "USD") {
        conversionRate = 1.5;
        convertedAmount = convertAmountGBP * conversionRate;
    } else {
        resultShow.innerText = "Sorry, this currency is not supported";
        return;
    }

    resultShow.innerText = convertedAmount;
}
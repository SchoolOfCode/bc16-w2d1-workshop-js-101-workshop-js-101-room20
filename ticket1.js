function convertGBPtoEUR(gbpAmount) {
    let conversionRate = 1.25;
    return gbpAmount * conversionRate;
}

function convertGBPtoUSD(gbpAmount) {
    let conversionRate = 1.5;
    return gbpAmount * conversionRate;
}

function convertGBPtoAny(GbpAmount, currencyCode) {
    let conversionRate;

    if (currencyCode === EUR) {
    conversionRate = 1.25;
    } else if (currencyCode === USD) {
        conversionRate = 1.5;
        return GbpAmount * conversionRate;
    }

    

}
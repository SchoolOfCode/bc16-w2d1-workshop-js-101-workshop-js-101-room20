function applyDiscount(subtotal) {
    const discount = 10;
    const minSpend = 20;
    let total;

    if (subtotal > 20) {
        let overSpend = subtotal - minSpend;
        total = subtotal - (overSpend / discount);
        return total;
    } else {
        total = subtotal;
        calculateLoyaltyPoints(total);
        return total;
    }
}

let loyaltyPoints = 0;

function calculateLoyaltyPoints(orderValue) {
    loyaltyPoints += orderValue;
    console.log("You have earned " + orderValue + " loyalty points");
    console.log("Your total loyalty points is " + loyaltyPoints + " loyalty points");
}
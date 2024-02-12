function applyDiscount(totalAmount) {
    let minSpend = 20; 
    let discountRate = 0.1; 
    let discount = totalAmount * discountRate;
    let finalAmount;

    if (totalAmount > minSpend) {
        finalAmount = totalAmount - discount;
      return finalAmount;
    } else {
        return totalAmount;
        

        }
}
console.log(`With discount the price is ${applyDiscount(60)}`)








function applyDiscount(totalAmount) {
    let minSpend = 20; 
    let discountRate = 0.1; 
    let discount = totalAmount * discountRate;

    if (totalAmount > minSpend) {
        finalAmount = totalAmount - discount;
      return finalAmount;
    } else {
        return totalAmount; 
    }
}

console.log(${applyDiscount(400)});






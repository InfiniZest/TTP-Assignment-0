function productOfAnyAmountOfNumbers(...args) {
    let product = 0;
    for (let number of args) {
        if(product == 0) 
            product = number;
        else
            product*=number;
    }
    return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

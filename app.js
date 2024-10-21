const oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87 };

function fromDollarToYen() {
    return oneEuroIs.JPY / oneEuroIs.USD
}

function fromEuroToDollar() {
    return oneEuroIs.USD
}

function fromYenToPound(){
    return oneEuroIs.GBP / oneEuroIs.JPY
}

console.log(fromDollarToYen())
console.log(fromEuroToDollar())
console.log(fromYenToPound())


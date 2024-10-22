

function fromDollarToYen(dollar) {
    const oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87 };
    const dollarToYen = oneEuroIs.JPY / oneEuroIs.USD;
    return dollar * dollarToYen;
}

function fromEuroToDollar(euro) {
    const oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87 };
    return euro * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    const oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87 };
    const yenToPound = oneEuroIs.GBP / oneEuroIs.JPY;
    return yen * yenToPound;
}

// console.log(fromDollarToYen(1))
// console.log(fromEuroToDollar(1))
// console.log(fromYenToPound(1))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
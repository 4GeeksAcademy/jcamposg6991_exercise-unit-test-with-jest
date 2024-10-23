
test("One dollar should be 146.26168224299064 yens", () => {
    const { fromDollarToYen } = require("./app.js");
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
});

test("One euro should be 1.07 dollars", () => {
    const { fromEuroToDollar } = require("./app.js");
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("One yen should be 0.005559105431309904 pounds", () => {
    const { fromYenToPound } = require("./app.js");
    expect(fromYenToPound(1)).toBe(0.005559105431309904);
});
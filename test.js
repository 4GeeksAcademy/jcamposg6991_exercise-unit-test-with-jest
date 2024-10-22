test("One dollar should be 146.26 yens", ()=>{
    const {fromDollarToYen} = require("./app.js")
    expect(fromDollarToYen(1)).toBe(146.26)
})
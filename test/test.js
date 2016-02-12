var code   = require('../main.js')
var expect = require('chai').expect

describe("leapYear", function() {
  it("Returns true if year is divisible by 4", function() {
    expect(code.leapYear(4)).to.equal(true)
    expect(code.leapYear(1600)).to.equal(true)
    expect(code.leapYear(2000)).to.equal(true)
  })
  it("Returns false if year is divisible by 4 and 100, and not divisible by 400", function() {
    expect(code.leapYear(1700)).to.equal(false)
    expect(code.leapYear(1800)).to.equal(false)
    expect(code.leapYear(1900)).to.equal(false)
  })
})

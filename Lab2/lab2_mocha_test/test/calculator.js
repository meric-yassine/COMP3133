const { expect } = require("chai");
const calculator = require("../app/calculator"); // adjust path if your calculator file is elsewhere

describe("Calculator Tests", function () {

  // ADD
  it("add(5,2) expected 7 => PASS", function () {
    expect(calculator.add(5, 2)).to.equal(7);
    console.log("PASS: add(5,2) returned 7");
  });

  it("add(5,2) expected 8 => FAIL", function () {
    expect(calculator.add(5, 2)).to.equal(8);
    console.log("FAIL: add(5,2) did not return 8");
  });

  // SUB
  it("sub(5,2) expected 3 => PASS", function () {
    expect(calculator.sub(5, 2)).to.equal(3);
    console.log("PASS: sub(5,2) returned 3");
  });

  it("sub(5,2) expected 5 => FAIL", function () {
    expect(calculator.sub(5, 2)).to.equal(5);
    console.log("FAIL: sub(5,2) did not return 5");
  });

  // MUL
  it("mul(5,2) expected 10 => PASS", function () {
    expect(calculator.mul(5, 2)).to.equal(10);
    console.log("PASS: mul(5,2) returned 10");
  });

  it("mul(5,2) expected 12 => FAIL", function () {
    expect(calculator.mul(5, 2)).to.equal(12);
    console.log("FAIL: mul(5,2) did not return 12");
  });

  // DIV
  it("div(10,2) expected 5 => PASS", function () {
    expect(calculator.div(10, 2)).to.equal(5);
    console.log("PASS: div(10,2) returned 5");
  });

  it("div(10,2) expected 2 => FAIL", function () {
    expect(calculator.div(10, 2)).to.equal(2);
    console.log("FAIL: div(10,2) did not return 2");
  });

});

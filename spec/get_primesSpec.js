'use strict';
var app = require('../get_primes.js');

describe("when getPrimes is used to test for edge cases", function() {
  it("should return undefined for getPrimes(0)", function() {
    expect(app.getPrimes(0)).toBe(undefined);
  })
  it("should return undefined for getPrimes('two')", function() {
    expect(app.getPrimes("two")).toBe(undefined);
  });
  it("should return undefined for getPrimes('-1')", function() {
    expect(app.getPrimes('-1')).toBe(undefined);
  });
  it("should return undefined for getPrimes('2')", function() {
    expect(app.getPrimes('2')).toBe(undefined);
  });
});


describe("when getPrimes is used to test for correct return value", function() {
  it("should return [2,3,5] for getPrimes(5)", function() {
    expect(app.getPrimes(5)).toBe([2,3,5]);
  });
  it("should return [2,3,5,7,11] for getPrimes(12)", function() {
    expect(app.getPrimes(11)).toBe([2,3,5,7,11]);
  });
  it("should return [2,3,5,7,11,13] for getPrimes(15)", function() {
    expect(app.getPrimes(15)).toBe([2,3,5,7,11,13]);
  });
  it("should return [2,3,5,7,11,13,17,19] for getPrimes(20)", function() {
    expect(app.getPrimes(20)).toBe([2,3,5,7,11,13,17,19]);
  });
  it("should return [2,3,5,7,11,13,17,19,23 for getPrimes(24)", function() {
    expect(app.getPrimes(24)).toBe([2,3,5,7,11,13,17,19,23]);
  });
});
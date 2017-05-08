'use strict';
require('../get_primes')

describe("when getPrimes is used to test for edge cases", function() {
  it("should return undefined for getPrimes(0)", function() {
    expect(getPrimes(0)).toBe(undefined);
  })
  it("should return undefined for getPrimes('two')", function() {
    expect(getPrimes("two")).toBe(undefined);
  });
  it("should return undefined for getPrimes('-1')", function() {
    expect(getPrimes('-1')).toBe(undefined);
  });
  it("should return undefined for getPrimes('2')", function() {
    expect(getPrimes('2')).toBe(undefined);
  });
});


describe("when getPrimes is used to test for correct return value", function() {
  it("should return [2,3,5] for getPrimes(5)", function() {
    expect(getPrimes(5)).toBe([2,3,5]);
  });
  it("should return [2,3,5,7,11] for getPrimes(12)", function() {
    expect(getPrimes(11)).toBe([2,3,5,7,11]);
  });
  it("should return [2,3,5,7,11,13] for getPrimes(15)", function() {
    expect(getPrimes(15)).toBe([2,3,5,7,11,13]);
  });
  it("should return [2,3,5,7,11,13,17,19] for getPrimes(20)", function() {
    expect(getPrimes(20)).toBe([2,3,5,7,11,13,17,19]);
  });
  it("should return [2,3,5,7,11,13,17,19,23 for getPrimes(24)", function() {
    expect(getPrimes(24)).toBe([2,3,5,7,11,13,17,19,23]);
  });
});
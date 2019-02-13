const assert = require('assert');

class Solution {

  addDigits(num) {
    if (num === null || num === undefined) {
      throw new TypeError('num cannot be null');
    }
    if (num < 0) {
      throw new Error('num cannot be negative');
    }
    if (num === 0) {
      return num;
    }
    const digits = [];
    while (num !== 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    const digitSum = digits.reduce((total, val) => total + val);
    if (digitSum >= 10) {
      return this.addDigits(digitSum);
    } else {
      return digitSum;
    }
  }

  addDigitsOptimized(num) {
    if (num === null || num === undefined) {
      throw new TypeError('num cannot be null');
    }
    if (num < 0) {
      throw new Error('num cannot be negative');
    }
    if (num === 0) {
      return num;
    } else if (num % 9 === 0) {
      return 9;
    } else {
      return num % 9;
    }
  }
}

class TestAddDigits {

  testAddDigits() {
    console.log('testAddDigits');
    const solution = new Solution();
    assert.throws(() => solution.addDigits(null), TypeError);
    assert.throws(() => solution.addDigits(-1), Error);
    assert.equal(solution.addDigits(0), 0);
    assert.equal(solution.addDigits(9), 9);
    assert.equal(solution.addDigits(138), 3);
    assert.equal(solution.addDigits(65536), 7);
    console.log('Success: testAdddigits');
  }

  testAddDigitsOptimized() {
    console.log('testAddDigitsOptimized');
    const solution = new Solution();
    assert.throws(() => solution.addDigitsOptimized(null), TypeError);
    assert.throws(() => solution.addDigitsOptimized(-1), Error);
    assert.equal(solution.addDigitsOptimized(0), 0);
    assert.equal(solution.addDigitsOptimized(9), 9);
    assert.equal(solution.addDigitsOptimized(138), 3);
    assert.equal(solution.addDigitsOptimized(65536), 7);
    console.log('Success: testAdddigitsOptimized');
  }
}

function main() {
  const test = new TestAddDigits();
  test.testAddDigits();
  test.testAddDigitsOptimized();
}
main();

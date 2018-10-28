const assert = require('assert');

class Fib {

  * fibIterative(n) {
    let a = 0, b = 1;
    const infinite = !n && n !== 0;
    while (infinite || n--) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  fibRecursive(n) {
    let result = null;
    if (n === 0 || n === 1) {
      return n;
    } else {
      return this.fibRecursive(n-1) + this.fibRecursive(n-2);
    }
  }

  fibDynamic(n) {
    const cache = {};
    return this._fibDynamic(n, cache);
  }

  _fibDynamic(n, cache) {
    if (n === 0 || n === 1) {
      return n;
    }
    if (n in cache) {
      return cache[n];
    }
    cache[n] = this._fibDynamic(n-1, cache) + this._fibDynamic(n-2, cache);
    return cache[n];
  }
}

class TestFib {

  testFibIterative() {
    const fib = new Fib();
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    console.log('Test: iterative');
    assert.deepEqual([...fib.fibIterative(10)], expected);
    console.log('Success: testfibiterative');
  }

  testFibRecursive() {
    const fib = new Fib();
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const result = [];
    console.log('Test: recursive');
    [...Array(10).keys()].forEach(i => result.push(fib.fibRecursive(i)));
    assert.deepEqual(result, expected);
    console.log('Success: testfibiterative');
  }

  testFibDynamic() {
    const fib = new Fib();
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const result = [];
    console.log('Test: dynamic');
    [...Array(10).keys()].forEach(i => result.push(fib.fibDynamic(i)));
    assert.deepEqual(result, expected);
    console.log('Success: testfibiterative');
  }
}

function main() {
  const test = new TestFib();
  test.testFibIterative();
  test.testFibRecursive();
  test.testFibDynamic();
}
main();

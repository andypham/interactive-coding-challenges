const assert = require('assert');

class PrimeGenerator {

  generatePrimes(maxNum) {
    if (maxNum === null || maxNum === undefined) {
      throw new TypeError('maxNum cannot be null');
    }
    const array = Array(maxNum).fill(true);
    array[0] = false;
    array[1] = false;
    let prime = 2;
    while (prime <= Math.sqrt(maxNum)) {

    }
  }
}

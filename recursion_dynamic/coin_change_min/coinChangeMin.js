const assert = require('assert');

class CoinChanger {

  makeChange(coins, total) {
    if (coins === undefined || coins === null ||
        total === undefined || total === null) {
      throw new TypeError('coins or total cannot be null.');
    }
    if (coins.length === 0 || total === 0) {
      return 0;
    }
    const cache = {};
    return this._makeChange(coins, total, cache);
  }

  _makeChange(coins, total, cache) {
    if (total === 0) {
      return 0;
    }
    if (total in cache) {
      return cache[total];
    }
    let minWays = Number.MAX_VALUE;
    for (let i =0; i < coins.length; i++) {
      if (total - coins[i] < 0) {
        continue;
      }
      const ways = this._makeChange(coins, total - coins[i], cache);
      if (ways < minWays) {
        minWays = ways;
      }
    }
    cache[total] = minWays + 1;
    return cache[total];
  }
}

class TestCoinChanger {

  testMakeChange() {
    const coinChanger = new CoinChanger();
    assert.throws(() => coinChanger.makeChange(null, null), TypeError);
    assert.equal(coinChanger.makeChange([], 0), 0);
    assert.equal(coinChanger.makeChange([1, 2, 3], 5), 2);
    assert.equal(coinChanger.makeChange([3, 2, 1], 5), 2);
    assert.equal(coinChanger.makeChange([3, 2, 1], 8), 3);
    console.log('Success: testMakechange');
  }
}

function main() {
  const test = new TestCoinChanger();
  test.testMakeChange();
}
main();

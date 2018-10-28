const assert = require('assert');

class CoinChanger {

  makeChange(coins, total) {
    if (!(coins instanceof Array) || total === null || total === undefined) {
      return null;
    }
    if (coins.length < 1 || total === 0) {
      return 0;
    }
    coins = [0].concat(coins);
    const numRows = coins.length;
    const numCols = total + 1;
    const T = [...Array(numRows).keys()].map(() => Array(numCols));
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (i === 0) {
          T[i][j] = 0;
          continue;
        }
        if (j === 0) {
          T[i][j] = 1;
          continue;
        }
        if (coins[i] <= j) {
          T[i][j] = T[i - 1][j] + T[i][j - coins[i]];
        } else {
          T[i][j] = T[i - 1][j];
        }
      }
    }
    return T[numRows - 1][numCols - 1];
  }
}

class TestCoinChanger {

  testCoinChanger() {
    const coinChanger = new CoinChanger();
    assert.equal(coinChanger.makeChange([1, 2], 0), 0);
    assert.equal(coinChanger.makeChange([1, 2, 3], 5), 5);
    assert.equal(coinChanger.makeChange([1, 5, 25, 50], 10), 3);
    console.log('Success: testCoinchanger');
  }
}

function main() {
  const test = new TestCoinChanger();
  test.testCoinChanger();
}
main();

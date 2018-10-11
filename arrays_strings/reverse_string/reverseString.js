const assert = require('assert');

class ReverseString {

  reverse(str) {
    if (str === undefined) {
      return str;
    }
    const chars = str.split('');
    const size = chars.length;
    if (size < 2) {
      return chars.join('');
    }
    for (let i = 0; i < Math.floor(size / 2); i++) {
      const tmp = chars[i];
      chars[i] = chars[size - 1 - i];
      chars[size - 1 - i] = tmp;
    }
    return chars.join('');
  }
}

class TestReverseString {

  testReverse(func) {
    console.log('Test: undefined');
    assert.equal(func(), undefined);
    console.log('Test: empty string');
    assert.equal(func(''), '');
    console.log('Test: foobar string');
    assert.equal(func('foobar'), 'raboof');
    console.log('Success: testReverse');
  }
}

function main() {
  const test = new TestReverseString();
  const reverseString = new ReverseString();
  test.testReverse(reverseString.reverse);
}
main();

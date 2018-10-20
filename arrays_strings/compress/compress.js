const assert = require('assert');

class CompressString {

  compress(str) {
    if (typeof str !== 'string' || !str) {
      return str;
    }
    let result = '';
    let prevChar = str[0];
    let count = 0;
    for (const idx in str) {
      if (str[idx] === prevChar) {
        count += 1;
      } else {
        result += this._compress(prevChar, count);
        prevChar = str[idx];
        count = 1;
      }
    }
    result += this._compress(prevChar, count);
    if (result.length < str.length) {
      return result;
    } else {
      return str;
    }
  }

  _compress(prevChar, count) {
    if (count > 1) {
      return prevChar + count;
    } else {
      return prevChar + '';
    }
  }
}

class TestCompressString {

  testCompress() {
    const compressString = new CompressString();
    console.log('Test: null string');
    assert.equal(compressString.compress(null), null);
    console.log('Test: empty string');
    assert.equal(compressString.compress(''), '');
    console.log('Test: for general case');
    assert.equal(compressString.compress('AABBCC'), 'AABBCC');
    assert.equal(compressString.compress('AAABCCDDDDE'), 'A3BC2D4E');
    assert.equal(compressString.compress('BAAACCDDDD'), 'BA3C2D4');
    assert.equal(compressString.compress('AAABAACCDDDD'), 'A3BA2C2D4');
    console.log('Success: testCompress');
  }
}

function main() {
  const test = new TestCompressString();
  test.testCompress();
}
main();

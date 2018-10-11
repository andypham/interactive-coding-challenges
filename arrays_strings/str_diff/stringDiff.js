const assert = require('assert');

class Solution {

  findDiff(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      throw new TypeError('str1 or str2 is not of type string.');
    }
    const seen = {};
    str1.split('').forEach((char) => {
      if (char in seen) {
        seen[char] += 1;
      } else {
        seen[char] = 1;
      }
    });
    const chars = str2.split('');
    const len = chars.length;
    for (let i = 0; i < len; i++) {
      if (chars[i] in seen) {
        seen[chars[i]] -= 1;
      } else {
        return chars[i];
      }
      if (seen[chars[i]] < 0) {
        return chars[i]
      }
    }
    return null;
  }
}

class TestFindDiff {

  testFindDiff() {
    const solution = new Solution();
    assert.throws(() => solution.findDiff(null, 'foo'), TypeError);
    assert.equal(solution.findDiff('abcd', 'abcde'), 'e');
    assert.equal(solution.findDiff('aaabbcdd', 'abdbacade'), 'e');
    console.log('Success: testFindDiff');
  }
}

function main() {
  const test = new TestFindDiff();
  test.testFindDiff();
}
main();

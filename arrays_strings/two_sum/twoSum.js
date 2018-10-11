const assert = require('assert');

class Solution {

  twoSum(nums, target) {
    if (!(nums instanceof Array) || typeof target !== 'number') {
      throw new TypeError('arg1 must be of type array or arg2 must be of type number.');
    }
    if (nums.length < 1) {
      throw new Error('arg1 cannot be empty array.');
    }
    const cache = new Map();
    for (let idx in nums) {
      idx = Number(idx);
      const num = nums[idx];
      const cacheTarget = target - num;
      if (cache.has(num)) {
        return [cache.get(num), idx];
      } else {
        cache.set(cacheTarget, idx);
      }
    }
    return null;
  }
}

class TestTwoSum {

  testTwoSum() {
    const solution = new Solution();
    assert.throws(() => solution.twoSum(null, 7), TypeError);
    assert.throws(() => solution.twoSum([], 7), /^Error: .* empty array.$/);
    const target = 7;
    const nums = [1, 3, 2, -7, 5];
    const expected = [2, 4];
    assert.deepEqual(solution.twoSum(nums, target), expected);
    console.log('Success: testTwoSum');
  }
}

function main() {
  const test = new TestTwoSum();
  test.testTwoSum();
}
main();

const assert = require('assert');

class MergeSort {

  sort(data) {
    if (!(data instanceof Array)) {
      throw new TypeError('data must be of type array.');
    }
    return this._sort(data);
  }

  _sort(data) {
    if (data.length < 2) {
      return data;
    }
    const mid = Math.floor(data.length / 2);
    let left = data.slice(0, mid);
    let right = data.slice(mid, data.length);
    left = this._sort(left);
    right = this._sort(right);
    return this._merge(left, right);
  }

  _merge(left, right) {
    let l = 0;
    let r = 0;
    const result = [];
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l]);
        l += 1;
      } else {
        result.push(right[r]);
        r += 1;
      }
    }
    while (l < left.length) {
      result.push(left[l]);
      l += 1;
    }
    while (r < right.length) {
      result.push(right[r]);
      r += 1;
    }
    return result;
  }
}

class TestMergeSort {

  testMergeSort() {
    const mergeSort = new MergeSort();

    console.log('Null input');
    assert.throws(() => mergeSort.sort(), TypeError);
    console.log('Empty input');
    assert.deepEqual(mergeSort.sort([]), []);
    console.log('One element');
    assert.deepEqual(mergeSort.sort([5]), [5]);
    console.log('Two or more elements');
    const data = [5, 1, 7, 2, 6, -3, 5, 7, -1];
    assert.deepEqual(mergeSort.sort(data), data.sort((a, b) => a - b));
    console.log('Success: testMergeSort');
  }
}

function main() {
  const test = new TestMergeSort();
  test.testMergeSort();
}
main();

const assert = require('assert');

class QuickSort {

  sort(data) {
    if (data === null || data === undefined) {
      throw new TypeError('data cannot be null');
    }
    return this._sort(data);
  }

  _sort(data) {
    if (data.length < 2) {
      return data;
    }
    const equal = [];
    const left = [];
    const right = [];
    let pivotIndex = Math.floor(data.length/2);
    let pivotValue = data[pivotIndex];
    data.forEach(item => {
      if (item === pivotValue) {
        equal.push(item);
      } else if (item < pivotValue) {
        left.push(item);
      } else {
        right.push(item);
      }
    });
    const left_ = this._sort(left);
    const right_ = this._sort(right);
    return left_.concat(equal, right_);
  }
}

class TestQuickSort {

  testQuickSort() {
    const quickSort = new QuickSort();

    console.log('Null input');
    assert.throws(() => quickSort.sort(null), TypeError);

    console.log('Empty input');
    assert.deepEqual(quickSort.sort([]), []);

    console.log('One element');
    assert.deepEqual(quickSort.sort([5]), [5]);

    console.log('Two or more elements');
    const data = [5, 1, 7, 2, 6, -3, 5, 7, -1];
    assert.deepEqual(quickSort.sort(data), data.sort((a, b) => a - b));

    console.log('Success: testQuicksort');
  }
}

function main() {
  const test = new TestQuickSort();
  test.testQuickSort();
}
main();

const assert = require('assert');

class Permutations {

  isPermutation(str1, str2) {
    if (typeof str1 !== 'string' || !str1 || typeof str2 !== 'string' || !str2) {
      return false;
    }
    return [...str1].sort().join() === [...str2].sort().join();
  }
}

class PermutationsAlt {

  isPermutation(str1, str2) {
    if (typeof str1 !== 'string' || !str1 || typeof str2 !== 'string' || !str2) {
      return false;
    }
    if (str1.length !== str2.length) {
      return false;
    }
    const uniqueCount1 = new Map();
    const uniqueCount2 = new Map();
    for (let idx in str1) {
      if (uniqueCount1.has(str1[idx])) {
        uniqueCount1.set(str1[idx], uniqueCount1.get(str1[idx] + 1));
      } else {
        uniqueCount1.set(str1[idx], 1);
      }

    }
    for (let idx in str2) {
      if (uniqueCount2.has(str2[idx])) {
        uniqueCount2.set(str2[idx], uniqueCount2.get(str2[idx] + 1));
      } else {
        uniqueCount2.set(str2[idx], 1);
      }
    }
    const comp1 = this.convertMapToSortedString(uniqueCount1);
    const comp2 = this.convertMapToSortedString(uniqueCount2);
    return comp1 === comp2;
  }

  convertMapToSortedString(m) {
    let result = '';
    const sortedMapEntries = [...m].sort((a, b) => {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    });
    sortedMapEntries.forEach(i => result += i.join(''));
    return result;
  }
}

class TestPermutation {

  testPermutation(permutations) {
    assert.equal(permutations.isPermutation(null, 'foo'), false);
    assert.equal(permutations.isPermutation('', 'foo'), false);
    assert.equal(permutations.isPermutation('Nib', 'bin'), false);
    assert.equal(permutations.isPermutation('act', 'cat'), true);
    assert.equal(permutations.isPermutation('a ct', 'ca t'), true);
    assert.equal(permutations.isPermutation('dog', 'doggo'), false);
    console.log('Success: testPermutation');
  }
}

function main() {
  const test = new TestPermutation();
  const permutations = new Permutations();
  const permutationsAlt = new PermutationsAlt();
  test.testPermutation(permutations);
  test.testPermutation(permutationsAlt);
}
main();

const assert = require('assert');

class UniqueCharsSet {

  hasUniqueChars(str) {
    if (typeof str !== 'string') {
      return false;
    }
    return new Set(str.split('')).size === str.length;
  }
}

class UniqueChars {

  hasUniqueChars(str) {
    if (typeof str !== 'string') {
      return false;
    }
    const charsSet = new Set();
    for (const idx in str) {
      const char = str[idx];
      if (charsSet.has(char)) {
        return false;
      } else {
        charsSet.add(char);
      }
    }
    return true;
  }
}

class UniqueCharsInPlace {

  hasUniqueChars(str) {
    if (typeof str !== 'string') {
      return false;
    }
    for (const idx in str) {
      if (str.match(new RegExp(str[idx], 'g')).length > 1) {
        return false;
      }
    }
    return true;
  }
}

class TestUniqueChars {

  testUniqueChars(func) {
    assert.equal(func(null), false);
    assert.equal(func(''), true);
    assert.equal(func('foo'), false);
    assert.equal(func('bar'), true);
    console.log('Success: testUniqueChars');
  }
}

function main() {
  let test = new TestUniqueChars();
  const uniqueCharSets = new UniqueCharsSet();
  test.testUniqueChars(uniqueCharSets.hasUniqueChars);
  test = new TestUniqueChars();
  const uniqueChars = new UniqueChars();
  test.testUniqueChars(uniqueChars.hasUniqueChars);
  test = new TestUniqueChars();
  const uniqueCharsInPlace = new UniqueCharsInPlace();
  test.testUniqueChars(uniqueCharsInPlace.hasUniqueChars);
}
main();

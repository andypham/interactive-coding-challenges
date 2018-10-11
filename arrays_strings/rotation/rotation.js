const assert = require('assert');

class Rotation {

  isRotation(s1, s2) {
    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
      return false;
    }
    if (s1.length !== s2.length) {
      return false;
    }
    return `${s2+s2}`.indexOf(s1) > -1;
  }
}

class TestRotation {

  testRotation() {
    const rotation = new Rotation();
    assert.equal(rotation.isRotation('o', 'oo'), false);
    assert.equal(rotation.isRotation(null, 'foo'), false);
    assert.equal(rotation.isRotation('', 'foo'), false);
    assert.equal(rotation.isRotation('', ''), true);
    assert.equal(rotation.isRotation('foobarbaz', 'barbazfoo'), true);
    console.log('Success: testRotation');
  }
}

function main() {
  const test = new TestRotation();
  test.testRotation();
}
main();

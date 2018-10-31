const assert = require('assert');

class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  toString() {
    return String(this.data);
  }
}

class Bst {

  constructor(root = null) {
    this.root = root;
  }

  insert(data) {
    if (data === null) {
      throw new TypeError('data cannot be null');
    }
    if (this.root === null) {
      this.root = new Node(data);
      return this.root;
    } else {
      return this._insert(this.root, data);
    }
  }

  _insert(node, data) {
    if (node === null) {
      return new Node(data);
    }
    if (data <= node.data) {
      if (node.left === null) {
        node.left = this._insert(node.left, data);
        node.left.parent = node;
        return node.left;
      } else {
        return this._insert(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = this._insert(node.right, data);
        node.right.parent = node;
        return node.right;
      } else {
        return this._insert(node.right, data);
      }
    }
  }

  printValue() {
    const result = [];
    this._printValue(this.root, result);
    return `[${result.join(', ')}]`;
  }

  _printValue(node, result) {
    if (node !== null) {
      this._printValue(node.left, result);
      result.push(node.data);
      this._printValue(node.right, result);
    }
  }
}

class TestBst {

  testTree1() {
    const bst = new Bst();
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(1);
    bst.insert(3);
    assert.equal(bst.printValue(), '[1, 2, 3, 5, 8]');
    console.log('Success: testTree1');
  }

  testTree2() {
    const bst = new Bst();
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    assert.equal(bst.printValue(), '[1, 2, 3, 4, 5]');
    console.log('Success: testTree2');
  }
}

function main() {
  const test = new TestBst();
  test.testTree1();
  test.testTree2();
}
main();

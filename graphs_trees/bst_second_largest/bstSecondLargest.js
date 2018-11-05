const assert = require('assert');
const { Bst, Node } = require('../bst/bst');

class Solution extends Bst {

  findSecondLargest() {
    if (this.root === null) {
      throw new TypeError('root cannot be null');
    }
    if (this.root.right === null && this.root.left === null) {
      throw new Error('root must have at least one child');
    }
    return this._findSecondLargest(this.root);
  }

  _findSecondLargest(node) {
    if (node.right !== null) {
      if (node.right.left !== null || node.right.right !== null) {
        return this._findSecondLargest(node.right);
      } else {
        return node;
      }
    } else {
      return this._findRightMostNode(node.left);
    }
  }

  _findRightMostNode(node) {
    if (node.right !== null) {
      return this._findRightMostNode(node.right);
    } else {
      return node;
    }
  }
}

class TestBstSecondLargest {

  testBstSecondLargest() {
    let bst = new Solution(null);
    assert.throws(() => bst.findSecondLargest(), TypeError);
    let root = new Node(10);
    bst = new Solution(root);
    let node5 = bst.insert(5);
    let node15 = bst.insert(15);
    let node3 = bst.insert(3);
    let node8 = bst.insert(8);
    let node12 = bst.insert(12);
    let node20 = bst.insert(20);
    let node2 = bst.insert(2);
    let node4 = bst.insert(4);
    let node30 = bst.insert(30);
    assert.deepEqual(bst.findSecondLargest(), node20);
    root = new Node(10);
    bst = new Solution(root);
    node5 = bst.insert(5);
    node3 = bst.insert(3);
    let node7 = bst.insert(7);
    assert.deepEqual(bst.findSecondLargest(), node7);
    console.log('Success: testBstsecondlargest');
  }
}

function main() {
  const test = new TestBstSecondLargest();
  test.testBstSecondLargest();
}
main();

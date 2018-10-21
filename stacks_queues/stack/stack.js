const assert = require('assert');

class Node {

  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class Stack {

  constructor(top=null) {
    this.top = top;
  }

  push(data) {
    this.top = new Node(data, this.top);
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.peek() == null;
  }
}

class TestStack {

  testStackEndToEnd() {
    console.log('Test: empty stack');
    let stack = new Stack();
    assert.equal(stack.peek(), null);
    assert.equal(stack.pop(), null);

    console.log('Test: one element');
    const top = new Node(5);
    stack = new Stack(top);
    assert.equal(stack.pop(), 5);
    assert.equal(stack.peek(), null);

    console.log('Test: more than one element');
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.equal(stack.pop(), 3);
    assert.equal(stack.peek(), 2);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.peek(), 1);
    assert.equal(stack.isEmpty(), false);
    assert.equal(stack.pop(), 1);
    assert.equal(stack.peek(), null);
    assert.equal(stack.isEmpty(), true);

    console.log('Success: testStackEndToEnd');
  }
}

function main() {
  const test = new TestStack();
  test.testStackEndToEnd();
}
main();

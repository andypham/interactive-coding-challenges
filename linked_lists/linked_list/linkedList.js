const assert = require('assert');

class Node {

  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }

  toString() {
    return this.data;
  }
}

class LinkedList {

  constructor(head = null) {
    this.head = head;
  }

  get length() {
    let counter = 0;
    return counter;
  }

  insertToFront(data) {
    if (data === undefined || data === null)  {
      return null;
    }
    const node = new Node(data, this.head);
    this.head = node;
    return node;
  }

  append(data) {
    if (data === undefined || data === null)  {
      return null;
    }
    const node = new Node(data);
    return node;
  }

  find(data) {
    if (data === undefined || data === null)  {
      return null;
    }
    return null;
  }

  delete(data) {
    if (data === undefined || data === null)  {
      return;
    }
    return;
  }

  printList() {
    let currentNode = this.head;
  }

  getAllData() {
    const data = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      data.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return data;
  }
}

class TestLinkedList {

  testInsertToFront() {
    console.log('Test: insertToFront on an empty list.');
    const linkedList = new LinkedList();
    linkedList.insertToFront(10);
    assert.deepEqual(linkedList.getAllData(), [10]);
    console.log('Success: insertToFront');
  }

  testAppend() {
    console.log('Test: append on an empty list.');
    const linkedList = new LinkedList();
    linkedList.insertToFront(10);
    assert.deepEqual(linkedList.getAllData(), [10]);
    console.log('Success: insertToFront');
  }
}

function main() {
  const test = new TestLinkedList();
  test.testInsertToFront();
}
main();

const assert = require('assert');

class Node {

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  toString() {
    return String(this.data);
  }
}

class LinkedList {

  constructor(head = null) {
    this.head = head;
  }

  get length() {
    let currentNode = this.head;
    let counter = 0;

    while(currentNode) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return counter;
  }

  insertToFront(data) {
    if (data == null) {
      return null;
    }
    const node = new Node(data, this.head);
    this.head = node;
    return node;
  }

  append(data) {
    if (data == null) {
      return null;
    }
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return node;
    }
    const currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  find(data) {
    if (data == null) {
      return null;
    }
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  delete(data) {
    if (data == null) {
      return;
    }
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.data == data) {
        prevNode.next = currentNode.next;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  getAllData() {
    const data = [];
    let currentNode = this.head;
    while(currentNode != null) {
      data.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return data;
  }
}

class TestLinkedList {

  testInsertToFront() {
    console.log('Test: insertToFront on an empty list.');
    const linkedList = new LinkedList(null);
    linkedList.insertToFront(10);
    assert.deepEqual(linkedList.getAllData(), [10]);

    console.log('Test: insert_to_front on a null');
    linkedList.insertToFront(null);
    assert.deepEqual(linkedList.getAllData(), [10]);

    console.log('Test: insert_to_front general case');
    linkedList.insertToFront('a');
    linkedList.insertToFront('bc');
    assert.deepEqual(linkedList.getAllData(), ['bc', 'a', 10]);

    console.log('Success: insertToFront\n');
  }

  testAppend() {
    console.log('Test: append on an empty list.');
    const linkedList = new LinkedList(null);
    linkedList.insertToFront(10);
    assert.deepEqual(linkedList.getAllData(), [10]);

    console.log('Test: append a null.');
    linkedList.insertToFront(null);
    assert.deepEqual(linkedList.getAllData(), [10]);

    console.log('Test: append general case.');
    linkedList.insertToFront('a');
    linkedList.insertToFront('bc');
    assert.deepEqual(linkedList.getAllData(), ['bc', 'a', 10]);

    console.log('Success: testAppend\n');
  }

  testFind() {
    console.log('Test: find on an empty list');
    let linkedList = new LinkedList(null);
    let node = linkedList.find('a');
    assert.equal(node, null);

    console.log('Test: find on a null');
    let head = new Node(10);
    linkedList = new LinkedList(head);
    node = linkedList.find(null);
    assert.equal(node, null);

    console.log('Test: find general case with matches');
    head = new Node(10);
    linkedList = new LinkedList(head);
    linkedList.insertToFront('a');
    linkedList.insertToFront('bc');
    node = linkedList.find('a');
    assert.equal(node.toString(), 'a');

    console.log('Test: find general case with no matches');
    node = linkedList.find('aaa');
    assert.equal(node, null);

    console.log('Success: testFind\n');
  }

  testDelete() {
    console.log('Test: delete on an empty list');
    let linkedList = new LinkedList(null);
    linkedList.delete('a');
    assert.deepEqual(linkedList.getAllData(), []);

    console.log('Test: delete on a null');
    let head = new Node(10);
    linkedList = new LinkedList(head);
    linkedList.delete(null);
    assert.deepEqual(linkedList.getAllData(), [10]);


    console.log('Test: delete general case with matches');
    head = new Node(10);
    linkedList = new LinkedList(head);
    linkedList.insertToFront('a');
    linkedList.insertToFront('bc');
    linkedList.delete('a');
    assert.deepEqual(linkedList.getAllData(), ['bc', 10]);

    console.log('Test: delete general case with no matches');
    linkedList.delete('aa');
    assert.deepEqual(linkedList.getAllData(), ['bc', 10]);

    console.log('Success: testDelete\n');
  }

  testLength() {
    console.log('Test: length on an empty list');
    let linkedList = new LinkedList(null);
    assert.equal(linkedList.length, 0);

    console.log('Test: length on a general case');
    const head = new Node(10);
    linkedList = new LinkedList(head);
    linkedList.insertToFront('a');
    linkedList.insertToFront('bc');
    assert.equal(linkedList.length, 3);

    console.log('Success: testLength\n');
  }
}

function main() {
  const test = new TestLinkedList();
  test.testInsertToFront();
  test.testAppend();
  test.testFind();
  test.testDelete();
  test.testLength();
}
main();

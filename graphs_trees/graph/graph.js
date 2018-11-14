const assert = require('assert');

const STATE = {
  UNVISITED: 0,
  VISTITING: 1,
  VISITED: 2
};

class Node {

  constructor(key) {
    this.key = key;
    this.visitState = STATE.UNVISITED;
    this.incomingEdges = 0;
    this.adjNodes = {};
    this.adjWeights = {};
  }

  toString() {
    return String(this.key);
  }

  addNeighbor(neighbor, weight=0) {
    if (neighbor === null || weight === null) {
      throw TypeError('neighbor or weight cannot be null');
    }
    neighbor.incomingEdges += 1;
    this.adjWeights[neighbor.key] = weight;
    this.adjNodes[neighbor.key] = neighbor;
  }

  removeNeighbor(neighbor) {
    if (neighbor === null) {
      throw TypeError('neighbor cannot be null');
    }
    if (!(neighbor.key in this.adjNodes)) {
      throw TypeError('neighbor not found');
    }
    neighbor.incomingEdges -= 1;
    delete this.adjWeights[neighbor.key];
    delete this.adjNodes[neighbor.key];
  }
}

class Graph {

  constructor() {
    this.nodes = {};
  }

  addNode(key) {
    if (key === null) {
      throw new TypeError('key cannot be null');
    }
    if (!(key in this.nodes)) {
      this.nodes[key] = new Node(key);
    }
    return this.nodes[key];
  }

  addEdge(sourceKey, destKey, weight=0) {
    if (sourceKey === null || destKey === null) {
      throw new TypeError('key cannot be null');
    }
    if (!(sourceKey in this.nodes)) {
      this.addNode(sourceKey);
    }
    if (!(destKey in this.nodes)) {
      this.addNode(destKey);
    }
    this.nodes[sourceKey].addNeighbor(this.nodes[destKey], weight);
  }

  addUndirectedEdge(srcKey, dstKey, weight=0) {
    if (srcKey === null || dstKey === null) {
      throw new TypeError('key cannot be None');
    }
    this.addEdge(srcKey, dstKey, weight);
    this.addEdge(dstKey, srcKey, weight);
  }
}

class TestGraph {

  createGraph() {
    const graph = new Graph();
    for (let key in [...Array(6)]) {
      graph.addNode(key);
    }
    return graph;
  }

  testGraph() {
    const graph = this.createGraph();
    graph.addEdge(0, 1, 5);
    graph.addEdge(0, 5, 2);
    graph.addEdge(1, 2, 3);
    graph.addEdge(2, 3, 4);
    graph.addEdge(3, 4, 5);
    graph.addEdge(3, 5, 6);
    graph.addEdge(4, 0, 7);
    graph.addEdge(5, 4, 8);
    graph.addEdge(5, 2, 9);

    assert.equal(graph.nodes[0].adjWeights[graph.nodes[1].key], 5);
    assert.equal(graph.nodes[0].adjWeights[graph.nodes[5].key], 2);
    assert.equal(graph.nodes[1].adjWeights[graph.nodes[2].key], 3);
    assert.equal(graph.nodes[2].adjWeights[graph.nodes[3].key], 4);
    assert.equal(graph.nodes[3].adjWeights[graph.nodes[4].key], 5);
    assert.equal(graph.nodes[3].adjWeights[graph.nodes[5].key], 6);
    assert.equal(graph.nodes[4].adjWeights[graph.nodes[0].key], 7);
    assert.equal(graph.nodes[5].adjWeights[graph.nodes[4].key], 8);
    assert.equal(graph.nodes[5].adjWeights[graph.nodes[2].key], 9);
    console.log('Success: testGraph');
  }
}

function main() {
  const test = new TestGraph();
  test.testGraph();
}
main();

module.exports = {
  Graph,
  STATE
};

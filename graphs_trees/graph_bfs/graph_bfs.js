const assert = require('assert');

const { Graph, STATE } = require('../graph/graph');

class GraphBfs extends Graph {

  bfs(root, result) {
    if (root === null) {
      return null;
    }
    const queue = [];
    queue.push(root);
    root.visitState = STATE.VISITED;
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(Number(node.toString()));
      for (let key in node.adjNodes) {
        if (node.adjNodes[key].visitState === STATE.UNVISITED) {
          queue.push(node.adjNodes[key]);
          node.adjNodes[key].visitState = STATE.VISITED;
        }
      }
    }
    return result;
  }
}

class TestBfs {

  testbfs() {
    const nodes = [];
    const result = [];
    const graph = new GraphBfs();
    for (let id in [...Array(6)]) {
      nodes.push(graph.addNode(id));
    }
    graph.addEdge(0, 1, 5);
    graph.addEdge(0, 4, 3);
    graph.addEdge(0, 5, 2);
    graph.addEdge(1, 3, 5);
    graph.addEdge(1, 4, 4);
    graph.addEdge(2, 1, 6);
    graph.addEdge(3, 2, 7);
    graph.addEdge(3, 4, 8);
    graph.bfs(nodes[0], result);
    assert.deepEqual(result, [0, 1, 4, 5, 3, 2]);
    console.log('Success: testbfs');
  }
}

function main() {
  const test = new TestBfs();
  test.testbfs();
}
main();

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({
      val,
      priority,
    });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1]?.push({
      node: v2,
      weight,
    });
    this.adjacencyList[v2]?.push({
      node: v1,
      weight,
    });
  }
  Dijkstra(start, end) {
    const priorities = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // filling helpful data structures
    for (const vert in this.adjacencyList) {
      if (vert === start) {
        distances[vert] = 0;
        priorities.enqueue(vert, 0);
      } else {
        distances[vert] = Infinity;
        priorities.enqueue(vert, Infinity);
      }
      previous[vert] = null;
    }

    while (priorities.values.length) {
      smallest = priorities.dequeue().val;

      if (smallest === end) {
        console.log(distances);
        console.log(previous);
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];

          // calc new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            priorities.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.Dijkstra("A", "E");

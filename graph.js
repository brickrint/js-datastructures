class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  removeVertex(vrtx) {
    const linkedVertexes = this.adjacencyList[vrtx];
    linkedVertexes.forEach((v) => {
      this.removeEdge(vrtx, v);
    });
    delete this.adjacencyList[vrtx];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1]?.push(v2);
    this.adjacencyList[v2]?.push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  DFSrecurcive(vertex) {
    const result = [];
    const visited = {};

    const DFS = (v) => {
      if (this.adjacencyList[v].length === 0) return;
      visited[v] = true;
      result.push(v);

      for (const sibl of this.adjacencyList[v]) {
        console.log(sibl);
        if (!(sibl in visited)) DFS(sibl);
      }
    };
    DFS(vertex);

    return [result, visited];
  }

  BFS(v) {
    const queue = [v];
    const result = [];
    const visited = { [v]: true };

    while (queue.length) {
      const removed = queue.shift();
      result.push(removed);
      for (const vert of this.adjacencyList[removed]) {
        if (!(vert in visited)) {
          visited[vert] = true;
          queue.push(vert);
        }
      }
    }
    return result;
  }
}

const g = new Graph();
// g.addVertex('Dallas');
// g.addVertex('Las Vegas');
// g.addVertex('Los Santos');
// g.addEdge('Dallas', 'Las Vegas');
// g.addEdge('Dallas', 'Los Santos');
// g.addEdge('Las Vegas', 'Los Santos');

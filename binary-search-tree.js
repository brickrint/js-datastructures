class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;

    while (true) {
      if (val === node.val) return;

      if (val > node.val) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          return;
        }
      } else {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          return;
        }
      }
    }
  }

  // Breath-first Search
  bfSearch() {
    if (!this.root) return;

    const queue = [this.root];
    const visited = [];

    while (queue.length) {
      const shifted = queue.shift();
      visited.push(shifted);

      if (shifted.left) queue.push(shifted.left);
      if (shifted.right) queue.push(shifted.right);
    }

    return visited;
  }

  // Depth-first Search
  dfSeachPreOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  dfSeachPostOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      result.push(node);
    };
    traverse(this.root);

    return result;
  }

  dfSeachInOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }
}

const bst = new BinarySearchTree();

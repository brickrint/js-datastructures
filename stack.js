class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      [this.first, this.first.next] = [newNode, this.first];
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.size === 1) {
      this.first = this.last = null;
    }

    this.first = removedNode.next;
    this.size--;

    removedNode.next = null;
    return removedNode;
  }
}

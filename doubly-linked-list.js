class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return;

    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
      return oldTail;
    }
    this.tail = oldTail.prev;
    this.tail.next = null;
    this.tail.prev = null;

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head) return;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (!this.head) return this.push(val);

    const newNode = new Node(val);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node;
    if (index <= this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
    }

    return node;
  }

  set(index, val) {
    const node = this.get(index);

    if (node === null) return false;

    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const node = this.get(index);
    if (node === null) return false;

    const prevNode = node.prev;
    const newNode = new Node(val);
    newNode.prev = prevNode;
    newNode.next = node;
    prevNode.next = newNode;
    node.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = node.prev;

    node.next = node.prev = null;

    this.length--;
    return node;
  }
}

const dl = new DoublyLinkedList();
// dl.push(1).push(2).push(3).push(4).push(5);
// dl.insert(4, 20);

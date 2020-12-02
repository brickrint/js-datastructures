class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let pre = current;

    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return;
    const temp = this.head;
    this.head = temp.next;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const oldHead = this.head;
      newHead.next = oldHead;
      this.head = newHead;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (index === i) return current;
      current = current.next;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;

    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const preNode = this.get(index - 1);
    const curNode = preNode.next;
    preNode.next = newNode;
    newNode.next = curNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const preNode = this.get(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
    this.length--;

    return removedNode.val;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
  }
}

const l1 = new SinglyLinkedList();
l1.push(1).push(2).push(3).push(4);

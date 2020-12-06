class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    if (!this.values.length) return this;

    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) break;

      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    if (this.values.length === 1) return this.values.pop();

    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx];

    while (idx < length) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.values[leftIdx];

        if (left > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];

        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }

    return max;
  }
}

const bh = new BinaryHeap();
// bh.insert(10)
// bh.insert(11)
// bh.insert(9)
// bh.insert(8)
// bh.insert(20)
// bh.insert(25)
// bh.insert(17)

export default class MinHeap {
  constructor() {
    this.items = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return childIndex % 2 === 0 ? (childIndex - 2) / 2 : (childIndex - 1) / 2;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.items.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.items.length;
  }

  swap(leftIndex, rightIndex) {
    const temp = this.items[rightIndex];
    this.items[rightIndex] = this.items[leftIndex];
    this.items[leftIndex] = temp;
  }

  add(value) {
    // Push to the end
    this.items.push(value);
    // Restore heap property
    this.heapifyUp();
    return this.items;
  }

  poll() {
    if (this.items.length === 0) {
      return null;
    }

    if (this.items.length === 1) {
      return this.items.pop();
    }

    // Get the min
    const min = this.items[0];

    // Put last to first
    this.items[0] = this.items.pop();

    // Restore heap property
    this.heapifyDown();

    return min;
  }

  heapifyUp() {
    // Start with the last element
    let currIndex = this.items.length - 1;
    while (
      currIndex > 0 &&
      this.items[currIndex] < this.items[this.getParentIndex(currIndex)]
    ) {
      // Swap with parent until heap property met
      const parentIndex = this.getParentIndex(currIndex);
      this.swap(currIndex, parentIndex);
      currIndex = parentIndex;
    }
  }

  heapifyDown() {
    // Start with the root element
    let currIndex = 0;

    // Keep going down until we still have a child (if there's only child, it must be left)
    while (this.hasLeftChild(currIndex)) {
      // Get the smaller child
      const leftChildIndex = this.getLeftChildIndex(currIndex);
      const rightChildIndex = this.getRightChildIndex(currIndex);

      let smallerChildIdx = this.getLeftChildIndex(currIndex);
      if (
        this.hasRightChild(currIndex) &&
        this.items[rightChildIndex] < this.items[leftChildIndex]
      ) {
        // Swap current element with the smaller child
        smallerChildIdx = this.getRightChildIndex(currIndex);
      }

      // Current item is >= smaller child, heap property is restored
      if (this.items[currIndex] <= this.items[smallerChildIdx]) {
        break;
      }

      this.swap(currIndex, smallerChildIdx);
      currIndex = smallerChildIdx;
    }
  }
}

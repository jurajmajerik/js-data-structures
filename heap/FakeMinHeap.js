class FakeMinHeap {
  constructor() {
    this.items = [];
  }
  add(value) {
    this.items.push(value);
    this.items.sort((a, b) => b - a);
  }
  poll() {
    return this.items.pop();
  }
}

class FakeMaxHeap {
  constructor() {
    this.items = [];
  }
  add(value) {
    this.items.push(value);
    this.items.sort((a, b) => a - b);
  }
  poll() {
    return this.items.pop();
  }
}

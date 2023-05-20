class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(head = null) {
    this.sentinel = new LinkedListNode('__sentinel__', head);
  }

  getHead() {
    const { sentinel } = this;
    return sentinel.next && sentinel.next.value;
  }

  getTail() {
    if (!this.sentinel.next) return null;

    let curr = this.sentinel;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.value;
  }

  add(value) {
    const newNode = new LinkedListNode(value);

    let curr = this.sentinel;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  remove(i) {
    const { sentinel } = this;
    if (!sentinel.next) return;

    let prev = sentinel;
    let curr = sentinel.next;
    while (curr && i > 0) {
      prev = curr;
      curr = curr.next;
      i--;
    }

    prev.next = curr.next;
  }
}

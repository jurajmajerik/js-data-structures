import MinHeap from './MinHeap';
import MaxHeap from './MaxHeap';

test('add to MinHeap', () => {
  let heap = new MinHeap();

  heap.add(20);
  heap.add(30);
  heap.add(10);
  expect(heap.items).toEqual([10, 30, 20]);

  heap = new MinHeap();
  heap.add(2);
  heap.add(7);
  heap.add(4);
  heap.add(1);
  heap.add(8);
  heap.add(1);

  heap = new MinHeap();
  heap.add(-2);
  heap.add(-7);
  heap.add(-4);
  heap.add(-1);
  heap.add(-8);
  heap.add(-1);
});

test('poll from Min Heap', () => {
  const heap = new MinHeap();
  heap.add(2);
  heap.add(7);
  heap.add(4);
  heap.add(1);
  heap.add(8);
  heap.add(1);

  expect(heap.poll()).toEqual(1);
  expect(heap.poll()).toEqual(1);
});

test('add to MaxHeap', () => {
  let heap = new MaxHeap();

  heap.add(20);
  heap.add(30);
  heap.add(10);
  expect(heap.items).toEqual([30, 20, 10]);

  heap = new MaxHeap();
  heap.add(2);
  heap.add(7);
  heap.add(4);
  heap.add(1);
  heap.add(8);
  heap.add(1);

  heap = new MaxHeap();
  heap.add(-2);
  heap.add(-7);
  heap.add(-4);
  heap.add(-1);
  heap.add(-8);
  heap.add(-1);
});

test('poll from Min Heap', () => {
  const heap = new MaxHeap();
  heap.add(2);
  heap.add(7);
  heap.add(4);
  heap.add(1);
  heap.add(8);
  heap.add(1);

  expect(heap.poll()).toEqual(8);
  expect(heap.poll()).toEqual(7);
});

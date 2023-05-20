import LinkedList from './LinkedList';

test('get head', () => {
  const linkedList = new LinkedList();
  expect(linkedList.getHead()).toBe(null);

  linkedList.add('first-node');
  expect(linkedList.getHead()).toBe('first-node');
});

test('get tail', () => {
  const linkedList = new LinkedList();
  expect(linkedList.getTail()).toBe(null);

  linkedList.add('first-node');
  expect(linkedList.getTail()).toBe('first-node');

  linkedList.add('second-node');
  expect(linkedList.getTail()).toBe('second-node');
});

test('add node', () => {
  const linkedList = new LinkedList();
  expect(linkedList.sentinel.value).toEqual('__sentinel__');

  linkedList.add('first-node');
  expect(linkedList.sentinel.next.value).toEqual('first-node');

  linkedList.add('second-node');
  expect(linkedList.sentinel.next.next.value).toEqual('second-node');
});

test('delete node', () => {
  const linkedList = new LinkedList();
  expect(linkedList.sentinel.value).toEqual('__sentinel__');

  linkedList.add('first-node');
  expect(linkedList.sentinel.next.value).toEqual('first-node');

  linkedList.add('second-node');
  expect(linkedList.sentinel.next.next.value).toEqual('second-node');

  linkedList.add('third-node');
  expect(linkedList.sentinel.next.next.next.value).toEqual('third-node');

  linkedList.remove(1);
  expect(linkedList.sentinel.next.next.value).toEqual('third-node');
});

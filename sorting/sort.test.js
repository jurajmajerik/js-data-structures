import {
  bubbleSort,
  selectionSort,
  insertionSort,
  heapSort,
  quickSort,
} from './sort';

test('bubble sort array', () => {
  const arr1 = [1, 3, 2, 8, 1, 5, 12, 3];
  expect(bubbleSort(arr1)).toEqual([1, 1, 2, 3, 3, 5, 8, 12]);
  const arr2 = [1, 2, 3, 4];
  expect(bubbleSort(arr2)).toEqual([1, 2, 3, 4]);
  const arr3 = [-100, 2, -32, 4];
  expect(bubbleSort(arr3)).toEqual([-100, -32, 2, 4]);
  const arr4 = [0, 0, 0];
  expect(bubbleSort(arr4)).toEqual([0, 0, 0]);
});

test('selection sort array', () => {
  const arr1 = [1, 3, 2, 8, 1, 5, 12, 3];
  expect(selectionSort(arr1)).toEqual([1, 1, 2, 3, 3, 5, 8, 12]);
  const arr2 = [1, 2, 3, 4];
  expect(selectionSort(arr2)).toEqual([1, 2, 3, 4]);
  const arr3 = [-100, 2, -32, 4];
  expect(selectionSort(arr3)).toEqual([-100, -32, 2, 4]);
  const arr4 = [0, 0, 0];
  expect(selectionSort(arr4)).toEqual([0, 0, 0]);
  const arr5 = [0, 3, 2, 8, 1, 5, 12, 3];
  expect(selectionSort(arr5)).toEqual([0, 1, 2, 3, 3, 5, 8, 12]);
});

test('insertion sort array', () => {
  const arr1 = [1, 3, 2, 8, 1, 5, 12, 3];
  expect(insertionSort(arr1)).toEqual([1, 1, 2, 3, 3, 5, 8, 12]);
  const arr2 = [1, 2, 3, 4];
  expect(insertionSort(arr2)).toEqual([1, 2, 3, 4]);
  const arr3 = [-100, 2, -32, 4];
  expect(insertionSort(arr3)).toEqual([-100, -32, 2, 4]);
  const arr4 = [0, 0, 0];
  expect(insertionSort(arr4)).toEqual([0, 0, 0]);
});

test('heap sort array', () => {
  const arr1 = [1, 3, 2, 8, 1, 5, 12, 3];
  expect(heapSort(arr1)).toEqual([1, 1, 2, 3, 3, 5, 8, 12]);
  const arr2 = [1, 2, 3, 4];
  expect(heapSort(arr2)).toEqual([1, 2, 3, 4]);
  const arr3 = [-100, 2, -32, 4];
  expect(heapSort(arr3)).toEqual([-100, -32, 2, 4]);
  const arr4 = [0, 0, 0];
  expect(heapSort(arr4)).toEqual([0, 0, 0]);
});

test('quick sort array', () => {
  const arr1 = [1, 3, 2, 8, 1, 5, 12, 3];
  expect(quickSort(arr1)).toEqual([1, 1, 2, 3, 3, 5, 8, 12]);
  const arr2 = [1, 2, 3, 4];
  expect(quickSort(arr2)).toEqual([1, 2, 3, 4]);
  const arr3 = [-100, 2, -32, 4];
  expect(quickSort(arr3)).toEqual([-100, -32, 2, 4]);
  const arr4 = [0, 0, 0];
  expect(quickSort(arr4)).toEqual([0, 0, 0]);
});

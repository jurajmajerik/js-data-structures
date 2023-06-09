import MinHeap from '../heap/MinHeap';

// BUBBLE SORT
// "Bubble up" every value to its correct position
export const bubbleSort = (arr) => {
  let hasSwapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        hasSwapped = true;
      }
    }

    if (!hasSwapped) break;
  }

  return arr;
};

// SELECTION SORT
// Select a position, find a minimum in the remainder of the array, swap
export const selectionSort = (arr) => {
  const getMinIndex = (startIdx) => {
    let min = null;
    for (let i = startIdx; i < arr.length; i++) {
      if (!min || arr[i] < min[1]) min = [i, arr[i]];
    }
    return min[0];
  };

  for (let i = 0; i < arr.length; i++) {
    const minIndex = getMinIndex(i);
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

// INSERTION SORT
// Select an element, move it as far left as necessary to get it to the correct position
export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
};

// HEAP SORT
// Populate the heap with all elements, then empty the heap
export const heapSort = (arr) => {
  const minHeap = new MinHeap();
  for (const num of arr) {
    minHeap.add(num);
  }

  for (let j = 0; j < arr.length; j++) {
    arr[j] = minHeap.poll();
  }

  return arr;
};

// QUICK SORT (EXTRA MEMORY)
export const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];

  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

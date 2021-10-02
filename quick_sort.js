let sorted = [];
function quickSort(array) {
  if (array.length == 0) {
    return;
  } else if (array.length == 1) {
    sorted.push(array[0]);
    return;
  }

  let pivot = array[array.length - 1];
  let big = [];
  let small = [];
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] < pivot) {
      small.push(array[i]);
    } else if (array[i] >= pivot) {
      big.push(array[i]);
    }
  }
  quickSort(small);
  sorted.push(pivot);
  quickSort(big);
}

quickSort([1, 4, 2, 8]);

console.log(sorted);

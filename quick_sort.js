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
  for (let i of array) {
    if (i < pivot) {
      small.push(i);
    } else if (i >= pivot) {
      big.push(i);
    }
  }
  quickSort(small);
  sorted.push(pivot);
  quickSort(big);
}

quickSort([1, 4, 2, 8]);

console.log(sorted);

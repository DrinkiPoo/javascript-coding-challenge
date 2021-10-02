// Implement quicksort

function quickSort(array) {
  let sorted = [];
  const func = (array) => {
    // define the base for recursion of func()
    if (array.length == 0) {
      return;
    } else if (array.length == 1) {
      sorted.push(array[0]);
      return;
    }

    let pivot = array[array.length - 1];
    let big = [];
    let small = [];
    for (let i = 0; i <= array.length - 2; i++) {
      if (array[i] < pivot) {
        small.push(array[i]);
      } else if (array[i] >= pivot) {
        big.push(array[i]);
      }
    }
    func(small);
    sorted.push(pivot);
    func(big);
  };
  func(array);
  return sorted;
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

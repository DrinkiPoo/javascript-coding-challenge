let my_array = [1, 2, 45, 65, -3, 32, 0, 1, 23, 0.5];
// console.log(arr.sort((a, b) => a - b));

function bubbleSort(array) {
  const func = (array) => {
    for (let i = 0; i < array.length; i++) {
      let first = array[i];
      let second = array[i + 1];
      if (first > second) {
        array[i] = second;
        array[i + 1] = first;
        return true;
      }
    }
  };
  while (func(array)) {
    func(array);
  }
  return array;
}

console.log(bubbleSort(my_array));

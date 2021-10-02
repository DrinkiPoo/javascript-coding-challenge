// implement insertion sort

let my_array = [5, 4, 33, 2, 8];

function insertionSort(array) {
  let sorted = [array[0]];

  for (let i = 1; i < array.length; i++) {
    let status = false;
    for (let j = sorted.length - 1; j >= 0; j--) {
      if (array[i] >= sorted[j]) {
        sorted.splice(j + 1, 0, array[i]);
        status = true;
        break;
      }
    }
    if (!status) {
      sorted.splice(0, 0, array[i]);
    }
  }

  return sorted;
}

console.log(insertionSort(my_array));

let my_array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let min = Math.min(...array.slice(i));
    let index = array.indexOf(min, i);
    if (num != min) {
      array.splice(index, 1);
      array.splice(i, 0, min);
    }
  }
  return array;
}

console.log(selectionSort(my_array));

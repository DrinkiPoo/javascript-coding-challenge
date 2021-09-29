// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

function pairwise(arr, arg) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arg - arr[i], i + 1)) {
      let j = arr.indexOf(arg - arr[i], i + 1);
      count += i + j;
      arr[i] = "butthole";
      arr[j] = "butthole";
    }
  }
  console.log(arr);
  return count;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));

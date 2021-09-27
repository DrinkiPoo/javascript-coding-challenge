// symmetric difference between two sets
// if more than two sets given as argument, find the sym diff between the first two, then the sym diff between the result and third set and so on
// process
// 1. convert arrays from the argument into set aka remove duplicate elements
// 2. merge two sets and take out the intersection (this is basically the sym diff), save that as a new set
// 3. repeat

function sym() {
  const arr = [...arguments].map((x) => [...new Set(x)]);
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let a = temp;
    let b = arr[i];

    temp = [...a, ...b].filter((item, index, array) => array.indexOf(item) == array.lastIndexOf(item));
  }
  return temp;
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));

// If a number is prime, return that number
// if not, return the first prime number greater than the original number
// Eg: input = 7, output = 7 | input = 8, output = 11 | input = 2000, output = 2003

let num = 110;
let arr = [];

console.log(final(num));

function final(number) {
  if (checkPrime(number)) {
    return number;
  } else {
    number++;
    return final(number);
  }
}

function checkPrime(number) {
  fillArray(number);
  if (arr.some((x) => number % x == 0)) {
    return false;
  } else {
    return true;
  }
}

function fillArray(number) {
  let r = arr.length === 0 ? 2 : Math.max(...arr);
  for (let i = r; i <= Math.floor(Math.pow(number, 0.5)); i++) {
    if (!arr.some((x) => i % x === 0)) {
      arr.push(i);
    }
  }
}

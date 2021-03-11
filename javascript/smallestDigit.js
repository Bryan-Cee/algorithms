// i < n < 10^9

// Find the smallest number with the same number of digits as n.

function smallestDigit(n) {
  // using a String
  const v = ("" + n).length - 1;
  return v < 1 ? 0 : Math.pow(10, v);
}

const n = 12;

const result = smallestDigit(n);

console.log(result);
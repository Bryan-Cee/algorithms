function solution(array) {

  let sorted = array.sort((a, b) => a - b); // sort the values in asc order
  let max = sorted[sorted.length - 1]; // maximum value in the array
  let index = 1;

  for (let i = 1; i <= (max + 1); i++) {
    index = array.includes(i) ? 1 : i;
    if (index > 1) break;
  }

  return index;
}

const A = [1, 3, 6, 4, 1, 2];

const result = solution(A);
console.log(result)
function subarraySort(array) {
  const arr = [...array].sort((a, b) => a - b);
  let sorted = true;
  const hash = [];

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] !== array[i]) {
      hash.push(i);
      sorted = false;
    }
  }
  if (sorted) return [-1, -1];
  return [hash[0], hash[hash.length - 1]];
}

function subarraySort1(array) {
  const arr = [...array].sort((a, b) => a - b);
  let firstIdx = -1;
  let lastIdx = -1;

  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let currentLeft = array[i];
    let currentRight = array[right];

    let currentSortedLeft = arr[i];
    let currentSortedRight = arr[right];

    if (currentLeft !== currentSortedLeft) {
      if (firstIdx < 0) firstIdx = i;
      if (lastIdx > -1) return [firstIdx, lastIdx];
    }

    if (currentRight !== currentSortedRight) {
      if (lastIdx < 0) lastIdx = right;
      if (firstIdx > -1) return [firstIdx, lastIdx];
    }
   
    right = right - 1;
  }

  return [firstIdx, lastIdx];
}

const input = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
const input15 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  2,
];

const result = subarraySort(input);

console.log(result);

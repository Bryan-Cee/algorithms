function removeFromArray(array, num) {
  while (array.indexOf(num) !== -1) {
    const idx = array.indexOf(num);
    array.splice(idx, 1);
  };

  return array;
}

const r = [1, 2, 3, 4, 2, 4, 6, 7, 8, 4, 2, 4, 8, 2];

const result = removeFromArray(r, 2);

console.log(result);
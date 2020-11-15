function divideSteps(n) {
  let _n = parseInt(n, 2);
  let count = 0;
  while (_n != 0) {
    if (_n % 2 == 0) {
      _n /= 2;
    } else {
      _n -= 1;
    }

    count++;
  }

  return count;
};

const n = "1001";

const result = divideSteps(n);

console.log(result);
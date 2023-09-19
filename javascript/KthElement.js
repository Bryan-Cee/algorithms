class NumberStream {
  constructor(array, k) {
    this.numbers = array;
    this.k = k;
  }

  add(num) {
    this.numbers.push(num);
  }
}

const ins = new NumberStream([1, 2, 3, 4], 5);
ins.add(7);
console.log(ins.numbers);

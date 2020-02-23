const myObj = [
  {
    name: "Jane Doe",
    age: 23,
    gender: "F"
  },
  {
    name: "John Doe",
    age: 13,
    gender: "M"
  },
  {
    name: "Doe Doe",
    age: 30,
    gender: "M"
  }
];
const myIterator = () => {
  let step = 0;
  return {
    next: () => {
      step++;

      if (step === 1) {
        return { value: "One", done: false }
      }

      if (step === 2) {
        return { value: "Two", done: false }
      }

      if (step === 3) {
        return { value: "Three", done: false }
      }

      return { value: undefined, done: true }
    },
  }
};

myObj[Symbol.iterator] = myIterator;

console.log(...myObj);
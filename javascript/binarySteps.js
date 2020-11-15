
function binarySteps(S) {
  if (!S) return 0;

  let value = parseInt(S, 2);
  let steps = 0;
  while (value != 0) {
    if (value % 2 === 0) {
      value /= 2;
      steps++ } else {
      value -= 1;
      steps++;
    }
  }
  return steps;
}

// const result = binarySteps('1111010101111'); // 22
const result = binarySteps('0010'); // 5

console.log(result);

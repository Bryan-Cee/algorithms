function solution(A, B) {
  const fairA = fairIndex(A);
  const fairB = fairIndex(B);
  let result = 0;

  if (fairA.leftSum !== fairB.leftSum) return 0;

  fairB.fair.forEach(item => {
    if (fairA.fair.includes(item)) {
      result++;
    }
  })

  return result;
}

function fairIndex(A) {
  const total = A.reduce((acc, cur) => (acc + cur), 0);
  let leftSum = A[0];
  const fair = [];
  for (let index = 1; index < A.length; index++) {
    const element = A[index];

    if (leftSum === total - (leftSum)) {
      fair.push(index);
    }
    leftSum += element;
  }
  return { fair, leftSum };
}

const _As = [0, 4, -1, 0, 3];
const _Bs = [0, -2, 5, 0, 3];

const _A = [4, -1, 0, 3];
const _B = [-2, 6, 0, 4];

const _A1 = [1, 4, 2, -2, 5];
const _B1 = [7, -2, -2, 2, 5];

const _A2 = [3, 2, 6];
const _B2 = [4, 1, 6];

const _A3 = [2, -2, -3, 3];
const _B3 = [0, 0, 4, -4];
const fair = 3;

const result = solution(_As, _Bs);

console.log(result);

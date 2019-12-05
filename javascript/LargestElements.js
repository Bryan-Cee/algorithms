function largestElements(arr, k) {
    let sortedArr = arr.sort((a,b) => a - b);
    return sortedArr.slice(-k)
}

const arr = [1, 23, 12, 9, 30, 2, 50]
const k = 3;

console.log(largestElements(arr, k))
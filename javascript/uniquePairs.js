// function uniquePairs(array) {
//   const hash = {};
//   let count = 0;
//   const LIMIT = 1000000000;

//   array.map((v, i) => {
//     if (hash.hasOwnProperty(v)) {
//       hash[v].push(i);
//     } else {
//       hash[v] = [i];
//     }
//   });

//   console.log(hash);
//   Object.values(hash).map((v) => {
//     let n = v.length;
//     let pairs = (n * (n - 1)) / 2; // summation of occurrences
//     count += pairs;
//     if (count >= LIMIT) {
//       return LIMIT
//     }
//   })

//   return count;
// }


function uniquePairs(array) {
  var count = 0;
  var pairs = {};

  array.map((value, key) => {
    // check if the pair exists
    if (pairs[value]) {
      // Increment count
      count += pairs[value].length;
      // Add to the pair
      pairs[value].push(key);
    } else {
      // initialize pair
      pairs[value] = [key]
    }
  })

  return count;
}

const array = [3, 5, 6, 3, 3, 5, -1, -1];

const result = uniquePairs(array);

console.log(result);

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  let courses = new Set();
  const map = new Map();

  relations.forEach((relation) => {
    if (!courses.has(relation.at(-1))) {
      courses.add(relation.at(-1));
      map.set(relation.at(-1), [relation.at(0)]);
    } else {
      map.set(relation.at(-1), [...map.get(relation.at(-1)), relation.at(0)]);
    }
  });

  if (map.size >= n) {
    return -1;
  }

  return map;
};

const n = 4,
  relations = [
    [1, 3],
    [2, 3],
    [2, 4],
  ];

let result = minimumSemesters(n, relations);

console.log(result);

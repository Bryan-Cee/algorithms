/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const edgesMatrix = {};

  edges.forEach(([source, dest]) => {
    if (!!edgesMatrix[source]) {
      edgesMatrix[source].push(dest);
    } else {
      edgesMatrix[source] = [dest];
    }
  });

  const start = edges[source];

  if (start.includes(destination)) {
    return true;
  }

  while (true) {
    
  }
};

const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;

const ans = validPath(n, edges, source, destination);
console.log(ans);

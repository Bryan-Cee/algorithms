const DIRECTIONS = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const rows = rooms.length;
  if (!rows) return [];
  const cols = rooms[0].length;
  const queue = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rooms[row][col] == -0) {
        queue.push([row, col]);
      }
    }
  }

  while (queue.length) {
    let node = queue.shift();
    let _row = node[0];
    let _col = node[1];

    for (let direction in DIRECTIONS) {
      let r = _row + DIRECTIONS[direction][0];
      let c = _col + DIRECTIONS[direction][1];
      if (
        r < 0 ||
        c < 0 ||
        r >= rows ||
        c >= cols ||
        rooms[r][c] != 2147483647
      ) {
        continue;
      }

      rooms[r][c] = rooms[_row][_col] + 1;
      queue.push([r, c]);
    }
  }
};

const adjList = wallsAndGates([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);

console.log(adjList);

/**
 * Input: rooms = [
 * [2147483647,-1,0,2147483647],
 * [2147483647,2147483647,2147483647,-1],
 * [2147483647,-1,2147483647,-1],
 * [0,-1,2147483647,2147483647]
 * ]
 * Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
 */

const DIRECTIONS = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numberOfIslands(grid) {
  const rows = grid.length;
  if (!rows) return;
  const cols = grid[0].length;

  let numberOfIslands = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const node = grid[i][j];
      if (node === '1') {
        ++numberOfIslands;
        dfs(grid, i, j);
      }
    }
  }
  return numberOfIslands;
}

function dfs(grid, row, col) {
  if (row >= grid.length || row < 0) return;
  if (col >= grid[0].length || col < 0) return;
  if (grid[row][col] == '0') return;

  grid[row][col] = '0';
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
}

/*
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/

let grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numberOfIslands(grid));

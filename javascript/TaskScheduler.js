// Given a list of packages that need to be built and the dependencies for each package,
// determine a valid order in which to build the packages.

// eg.

// 0:
// 1: 0
// 2: 0
// 3: 1, 2
// 4: 3

// output:      0,  1,   2,     3,    4
const input = [[], [0], [0], [1, 2], [3]];

function taskScheduler(tasks) {
  const visited = [];
  const queue = [];

  console.log({ queue });
  return visited;
}

console.log(taskScheduler(input));

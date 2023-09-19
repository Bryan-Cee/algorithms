/**
 * @param {number[][]} times a list of travel times as directed edges
 * @param {number} n nodes to receive the signal
 * @param {number} k source node
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  return times;
};

const times = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  n = 4,
  k = 2;

console.log(networkDelayTime(times, n, k));

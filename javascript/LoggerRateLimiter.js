var Logger = function () {
  this.heap = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!this.heap.get(message) || timestamp >= this.heap.get(message)) {
    this.heap.set(message, timestamp + 10);
    return true;
  } else {
    return false;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
const input = [
  [],
  [1, 'foo'],
  [2, 'bar'],
  [3, 'foo'],
  [8, 'bar'],
  [10, 'foo'],
  [11, 'foo'],
];

const logger = new Logger();
const result = [
  logger.shouldPrintMessage(1, 'foo'), // return true, next allowed timestamp for "foo" is 1 + 10 = 11
  logger.shouldPrintMessage(2, 'bar'), // return true, next allowed timestamp for "bar" is 2 + 10 = 12
  logger.shouldPrintMessage(3, 'foo'), // 3 < 11, return false
  logger.shouldPrintMessage(8, 'bar'), // 8 < 12, return false
  logger.shouldPrintMessage(10, 'foo'), // 10 < 11, return false
  logger.shouldPrintMessage(11, 'foo'), // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
];
console.log(result);

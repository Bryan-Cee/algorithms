/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
 let cnt = 0;
  tokens.sort((a, b) => a - b);

  let i = 0;
  let j = tokens.length - 1;

  while (P > tokens[i]) {
    P -= tokens[i];
    cnt++;
    i++;
  }

  if (cnt <= 0) return 0;

  while (i <= j) {
    if (P >= tokens[i]) {
      cnt += 1;
      P -= tokens[i];
      i++;
    } else {
      P += tokens[j] - tokens[i];
      j--;
      i++;
    }
  }
  return cnt;
}
    
let tokens = [43,61,92], P = 97;

const result = bagOfTokensScore(tokens, P);

console.log(result);
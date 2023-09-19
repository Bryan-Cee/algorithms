// The input

// 3[abc]4[ab]c

// Would be output as

// abcabcabcababababc
function decompress(input) {
  let result = '';
  let stack = [];
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    const currentCharacter = input[i];
    if (currentCharacter >= '0' && currentCharacter <= '9') {
      num = num * 10 + parseInt(currentCharacter);
    } else if (currentCharacter === '[') {
      stack.push(result);
      stack.push(num);
      result = '';
      num = 0;
    } else if (currentCharacter === ']') {
      let count = stack.pop();
      let prev = stack.pop();
      result = prev + result.repeat(count);
    } else {
      result += currentCharacter;
    }
  }

  return result;
}

console.log(decompress('10[a]') === 'aaabaaab');

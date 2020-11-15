function moveElementToEnd(array, toMove) {
  // Write your code here.
	array.sort((a,b) => a - b);
	let start = Infinity;
	let end = 1;
	for (let i = 0; i < array.length; ++i) {
		if (array[i] === toMove) {
			if (start === Infinity) {
				start = i;
			} else {
				end += 1;
			}
		} 
  }
  return array.concat(array.splice(start, end));
}

const array = [2, 1, 2, 2, 2, 3, 4, 2], toMove = 2;

const result = moveElementToEnd(array, toMove);

console.log(result);

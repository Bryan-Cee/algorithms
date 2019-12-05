/**
 * @param {number[]} arr
 * @return {boolean}
 */

const uniqueOccurrences = function (arr) {
    let hash = {};
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(hash[element]){
            hash[element] += 1;
            console.log(hash[element]);
        } else{
            hash[element] = 1;
        }
    }
    console.log(hash)
    return false;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

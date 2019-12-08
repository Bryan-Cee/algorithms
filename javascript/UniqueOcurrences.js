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
        } else{
            hash[element] = 1;
        }
    }
    
    const occuerrences = new Set(Object.values(hash));
    const keys = Object.keys(hash)
    if (occuerrences.size === keys.length){
        return true;
    }

    return false;
};

console.log(uniqueOccurrences([1, 2, 2, 2, 1, 1, 3]));

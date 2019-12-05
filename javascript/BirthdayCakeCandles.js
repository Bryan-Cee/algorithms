function birthdayCakeCandles(ar) {

    let hash = {};

    for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        if (element in hash) {
            hash[element]++;
        } else {
            hash[element] = 1;
        }
    }

    const highestHeight = Math.max(...Object.values(hash))

    return highestHeight

}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
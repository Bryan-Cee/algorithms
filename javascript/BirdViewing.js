function migratoryBirds(arr) {
    let hash = {};
    const n = arr.length;
    for (let i = 0; i < n; ++i) {
        if (arr[i] in hash) {
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1
        }
    }

    const values = Object.values(hash);
    const largetsSighting = Math.max(...values);
    const result = Object.keys(hash)[values.indexOf(largetsSighting)]
    return result
}

console.log(migratoryBirds([1,1,2,2,3]))
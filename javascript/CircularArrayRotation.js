// https://www.hackerrank.com/challenges/circular-array-rotation/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function circularArrayRotation(a, k, queries) {
    // pop then unshift
    for(let i = 0; i < k; ++i){
        const lastValue = a.pop();
        console.log(lastValue)
        a.unshift(lastValue);
        console.log(a)
    }

    let result = [];

    for(let j = 0; j < queries.length; ++j){
        result.push(a[queries[j]])
    }
    return result;
}

const arr = [3,1,2];
console.log(circularArrayRotation(arr, 2, [1, 2, 3]))
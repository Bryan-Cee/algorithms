const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];


const maxDuffelBagValue = (cakeTypes, capacity) => {
    const divisibleHash = {};

    cakeTypes.forEach((v, i) => {
        divisibleHash[v.weight] = Math.floor(capacity / v.weight);
    });

    cakeTypes.forEach((v, i) => {
        divisibleHash[v.weight] = Math.floor(capacity / v.weight);
    });

    return divisibleHash
}

const capacity = 20;

const ans = maxDuffelBagValue(cakeTypes, capacity);

console.log(ans);
function pythagoreanTriplet(arr) {

    for (let index = 1; index < arr.length - 1; index++) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            const next = arr[index + 1];
            const num = Math.sqrt(Math.pow(element, 2) + Math.pow(next, 2))

            if (arr.indexOf(num) !== -1) {
                return [true, element, next, num]
            }
        }
    }

    return false;
}


const arr = [3, 1, 4, 6, 5]
// const arr = [10, 4, 6, 12, 5]

console.log(pythagoreanTriplet(arr))
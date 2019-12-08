function binarySearch(nums, target) {
    let floorIndex = 0;
    let ceilIndex = nums.length;

    while(floorIndex < ceilIndex){

        let guessIndex = Math.ceil((floorIndex + ceilIndex)/2);

        if (nums[guessIndex] === target) {
            return guessIndex
        }

        if (target < nums[guessIndex]) {
            ceilIndex = guessIndex;
        } else {
            floorIndex = guessIndex;
        }
    }

    return -1
}

const nums = [1,3,4,6,7,8,9,13,15,16,17]
console.log(binarySearch(nums, 153))
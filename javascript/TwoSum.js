// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let complement_hash = {};
    for (let i = 0; i < nums.length; ++i){
        if (complement_hash[nums[i]] >= 0){
            return [complement_hash[nums[i]], i];
        }
        complement_hash[target - nums[i]] = i;
    }
    return [];
};

twoSum([2, 7, 11, 15], 9); // [0,1]

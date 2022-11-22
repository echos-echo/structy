// Write a function, maxValue, that takes in array of numbers as an argument.
// The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
};
  
module.exports = {
    maxValue,
};
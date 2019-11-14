/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const complement = target - n;
    if (typeof map[complement] !== 'undefined') {
      return [map[complement], i];
    }

    map[n] = i;
  }
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   if (nums.length === 0) {
       return 0;
   } 

   let j = 0;
   for (let i = 1; i < nums.length; i++) {
       if (nums[i] !== val) {
           j++;
           nums[j] = nums[i];
       }
   }

   return j + 1;
};
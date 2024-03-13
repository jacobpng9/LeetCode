/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let array = [];
    for (let i = 0; i<=nums.length; i++) {
        if(array.includes(nums[i])!=true) {
            array.push(nums[i]);
            
        } else {
            nums.splice(i, 1);
            i--;
        }
    }
};
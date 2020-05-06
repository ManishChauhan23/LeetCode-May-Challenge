/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    let map = {};
    let i;

    for(i = 0; i < len; i++) {
        if(!Object.prototype.hasOwnProperty.call(map, nums[i])) map[nums[i]] = 1;
        else map[nums[i]]++;
    }
    
    let keys = Object.keys(map);
    
    for(i = 0; i < len; i++) {
        if(map[keys[i]] > (len / 2)) {
            return keys[i];
        } 
    }
    
};

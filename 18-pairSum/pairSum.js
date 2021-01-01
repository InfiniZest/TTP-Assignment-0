function pairSum(nums, target) {
    if(nums.length <= 1) 
        throw "Array for pairing";
    for(let i = 0; i<nums.length; i++) {
        for(let j = i + 1; j<nums.length; j++) {
                if(nums[i] + nums[j] == target)
                    return true;
        }
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;

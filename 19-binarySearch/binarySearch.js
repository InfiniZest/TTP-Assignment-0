class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    if(nums.length > 1) {
        let mid = Math.floor(nums.length/2);
        if(nums[mid] > target) {
            //make sublist for lower end of array
            let sublist = nums.slice(0, mid);
            return this.binarySearch(sublist, target);
        } else if (nums[mid] < target) {
            //make sublist for upper end of array
            let sublist = nums.slice(mid + 1, nums.length);
            return this.binarySearch(sublist, target);
        } else if (nums[mid] == target) {
            return true;
        } else
            return false;
    } else if(nums[0] == target) 
        return true;
    else
        return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

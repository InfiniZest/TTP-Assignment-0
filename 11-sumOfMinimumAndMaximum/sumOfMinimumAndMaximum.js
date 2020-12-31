function sumOfMinimumAndMaximum(nums) {
  let min = Math.min.apply(Math, nums); 
  let max = Math.max.apply(Math, nums);
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;

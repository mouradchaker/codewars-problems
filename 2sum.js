var twoSum = function (nums, target) {
  let res = [];

  for (i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i);
        res.push(j);
      }
    }
  }
  return res;
};
twoSum([3, 5, 1, 2], 7);

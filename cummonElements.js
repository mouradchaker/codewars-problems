const cummonElements = (arr1, arr2) => {
  let res = [];

  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
  return res;
};
cummonElements([1, 2, 3, 4], [5, 2, 1]);

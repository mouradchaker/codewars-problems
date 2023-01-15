const com = (arr1, arr2) => {
  let obj1 = {};
  let out = [];

  for (i = 0; i < arr1.length; i++) {
    if (!obj1[arr1[i]]) {
      obj1[arr1[i]] = 1;
    } else {
      obj1[arr1[i]]++;
    }
  }

  for (j = 0; j < arr2.length; j++) {
    if (!obj1[arr2[j]]) {
      obj1[arr2[j]] = 1;
    } else {
      obj1[arr2[j]]++;
    }
  }
  for (let item in obj1) {
    if (obj1[item] > 1) {
      out.push(item);
    }
  }
  return out;
};
com([10, 2, 3], [2, 5, 10]);

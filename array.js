const sum = (a, b) => {
  let sum1 = 0;
  let sum2 = 0;
  for (i = 0; i < a.length; i++) {
    sum1 = sum1 + a[i];
  }

  for (j = 0; j < b.length; j++) {
    sum2 += b[j];
  }

  return sum1 + sum2;
};

sum([2, 5, 55], [44, 123, 55]);

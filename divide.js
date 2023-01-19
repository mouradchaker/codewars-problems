const divide = (num1, num2) => {
  return num1 / num2;
};

const triangle = (b, h) => {
  return (b * h) / 2;
};
triangle(5, 2);

const odd = (a) => {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};
odd(6);

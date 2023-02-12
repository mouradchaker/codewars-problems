function sumTwoSmallestNumbers(numbers) {
  let sum = 0;
  numbers.sort((a, b) => a - b);
  sum = numbers[0] + numbers[1];
  return sum;
}

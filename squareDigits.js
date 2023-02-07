function squareDigits(num) {
  let out = [];
  let result = "";
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    let value = stringNum[i] ** 2;
    out.push(parseInt(value));
  }
  for (let j = 0; j < out.length; j++) {
    result += out[j].toString();
  }
  return parseInt(result);
}

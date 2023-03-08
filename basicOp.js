function basicOp(operation, value1, value2) {
  let op = operation.toString();
  if (op == "+") {
    return value1 + value2;
  } else if (op == "-") {
    return value1 - value2;
  } else if (op == "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

function descendingOrder(n) {
  let out = [];
  let newArr = "";
  let arr = n.toString();
  for (let i = 0; i < arr.length; i++) {
    out.push(parseInt(arr[i]));
    out.sort();
    out.reverse();
  }
  for (let j = 0; j < out.length; j++) {
    newArr += out[j].toString();
  }
  return parseInt(newArr);
}

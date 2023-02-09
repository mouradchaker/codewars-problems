function filter_list(l) {
  let out = [];
  let num = 2;
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === typeof num) {
      out.push(l[i]);
    }
  }
  return out;
}
filter_list([1, 2, "a", "b"]);

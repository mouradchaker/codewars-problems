function disemvowel(str) {
  var newStr = "";
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    newStr += str[i];
  }
  return newStr;
}

const countWords = (str) => {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  return count + 1;
};
countWords("hello mourad how are you doing");

const countLetter = (str1) => {
  let count1 = 0;
  let vowels = ["e", "a", "u", "i", "o"];
  for (j = 0; j < str1.length; j++) {
    if (vowels.includes(str1[j])) {
      count1++;
    }
  }
  return count1;
};
countLetter("hello");

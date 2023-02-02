function getMiddle(s) {
  let out;
  let wordLength = s.length;
  if (wordLength % 2 == 0) {
    out = s[wordLength / 2 - 1] + s[wordLength / 2];
  } else {
    out = s[Math.floor(wordLength / 2)];
  }
  return out;
}

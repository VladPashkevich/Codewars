var runLengthEncoding = function (str) {
  let count = 0;
  let value = str[0];
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === value) {
      count++;
    } else {
      arr.push([count, value]);
      count = 1;
      value = str[i];
    }
    if (i === str.length - 1) {
      arr.push([count, value]);
    }
  }

  return arr;
};

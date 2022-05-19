let bonus = function (arr, s) {
  let num = arr.reduce((prevTotal, curNum) => prevTotal + 1 / curNum, 0);
  console.log(num);

  return arr.map((item) => Math.round(s / (num * item)));
};

console.log(bonus([18, 15, 12], 851));

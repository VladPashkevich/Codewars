function coprimes(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let bol = n;
    let min = i;
    while (min !== 0) {
      let value = min;
      min = bol % min;
      bol = value;
    }
    if (bol === 1) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(coprimes(30));

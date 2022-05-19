function filter_list(l) {
  let arr = l.filter((value) => typeof value === 'number');
  return arr;
}
console.log(filter_list([1, 2, 3, 'b', 'c']));

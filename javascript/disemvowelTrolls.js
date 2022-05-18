function disemvowel(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!'AaEeYyUuIiOo'.includes(str[i])) {
      newStr = newStr + str[i];
    }
  }
  str = newStr;
  return str;
}

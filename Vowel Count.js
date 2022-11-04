function getCount(str) {
  let x = str.split('')
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if(x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u')
      count += 1
  }
  return count;
}
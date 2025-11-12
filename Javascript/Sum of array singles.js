function repeats(arr){
  const filter = arr.filter(el => arr.indexOf(el) == arr.lastIndexOf(el))
  return filter.reduce((a, b) => a + b,0)
};
function stairsIn20(s){
  let sum = s.reduce((a,b) => a + b.reduce((a,b) => a + b, 0), 0) *20
  return sum
}
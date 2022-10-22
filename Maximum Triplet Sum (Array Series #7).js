function maxTriSum(numbers){
  let sorted = numbers.sort((a,b)=>a-b)
  
  for (let i = 0; i < numbers.length; i++){
    if (sorted[i] == sorted[i + 1])
      sorted.splice(i,1)
  }
  return sorted.splice(-3).reduce((a, b) => a + b,0)
}
function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b)=>a-b)
  let sum2 = sorted[0] + sorted[1]
  return sum2
}
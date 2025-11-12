function differenceInAges(ages){
  let sorted = ages.sort((a,b)=>a-b)
  let length = ages.length -1
  let diff = Math.abs(sorted[0] - sorted[length])
  
  return [sorted[0], sorted[length], diff]
}
